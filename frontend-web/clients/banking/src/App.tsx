import { ErrorBoundary } from "@swan-io/lake/src/components/ErrorBoundary";
import { LoadingView } from "@swan-io/lake/src/components/LoadingView";
import { ToastStack } from "@swan-io/lake/src/components/ToastStack";
import { colors } from "@swan-io/lake/src/constants/design";
import { isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { Suspense } from "react";
import { StyleSheet } from "react-native";
import { P, match } from "ts-pattern";
import { Provider as ClientProvider } from "urql";
import { AccountArea } from "./components/AccountArea";
import { ErrorView } from "./components/ErrorView";
import { ProjectRootRedirect } from "./components/ProjectRootRedirect";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PopupCallbackPage } from "./pages/PopupCallbackPage";
import { ProjectLoginPage } from "./pages/ProjectLoginPage";
import { logFrontendError } from "./utils/logger";
import { projectConfiguration } from "./utils/projectId";
import { Router } from "./utils/routes";
import { TgglProvider } from "./utils/tggl";
import { isUnauthorizedError, partnerClient } from "./utils/urql";

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.gray[50],
    flexGrow: 1,
  },
});

export const App = () => {
  const route = Router.useRoute([
    "PopupCallback",
    "ProjectLogin",
    "ProjectRootRedirect",
    "AccountArea",
  ]);

  return (
    <TgglProvider>
      <ErrorBoundary
        key={route?.name}
        onError={error => logFrontendError(error)}
        fallback={({ error }) =>
          isUnauthorizedError(error) ? <></> : <ErrorView error={error} style={styles.base} />
        }
      >
        <ClientProvider value={partnerClient}>
          <Suspense fallback={<LoadingView color={colors.gray[400]} style={styles.base} />}>
            {match(route)
              .with({ name: "PopupCallback" }, () => <PopupCallbackPage />)
              .with({ name: "ProjectLogin" }, ({ params: { sessionExpired } }) =>
                projectConfiguration.match({
                  None: () => <ErrorView />,
                  Some: ({ projectId }) => (
                    <ProjectLoginPage
                      projectId={projectId}
                      sessionExpired={isNotNullishOrEmpty(sessionExpired)}
                    />
                  ),
                }),
              )
              .with({ name: "AccountArea" }, { name: "ProjectRootRedirect" }, route =>
                match(route)
                  .with({ name: "AccountArea" }, ({ params: { accountMembershipId } }) => (
                    <AccountArea accountMembershipId={accountMembershipId} />
                  ))
                  .with({ name: "ProjectRootRedirect" }, ({ params: { to, source } }) => (
                    <ProjectRootRedirect to={to} source={source} />
                  ))
                  .exhaustive(),
              )
              .with(P.nullish, () => <NotFoundPage style={styles.base} />)
              .exhaustive()}
          </Suspense>
        </ClientProvider>

        <ToastStack />
      </ErrorBoundary>
    </TgglProvider>
  );
};
