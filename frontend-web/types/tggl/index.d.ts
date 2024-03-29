// This file was automatically generated by the tggl CLI

import "react-tggl-client";

declare module "react-tggl-client" {
  export interface TgglContext {
    userId: string;
    email: string;
    timestamp: string | number;
    ip: string;
    referer: string;
    projectId: string;
    environmentType: "sandbox" | "live" | "admin";
    environment: "master" | "preprod" | "prod";
    accountCountry: "FRA" | "NLD" | "DEU" | "ESP";
  }

  export interface TgglFlags {
    isCheckRedirectVerificationCodeCalled: boolean;
    enableSandboxMutations: boolean;
    billing_lago_signatureEnabled: boolean;
    sandboxIdentification: boolean;
    testFrontEnd: boolean;
    n8n_screening_use_account_contract: boolean;
  }
}
