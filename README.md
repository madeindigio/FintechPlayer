# FintechPlayer

> Neobank

## Backoffice

Platform for administrators.

## Enduser

Web and mobile application for **clients**.

### Web app

For using in browsers.

In this [repository](/frontend-web/clients) you'll find two frontend clients:
- Web Banking: banking interface where users can manage their financial needs around transactions, cards, payments, and memberships
- Onboarding: process of opening new accounts for your users that follows specific steps to meet legal requirements

```
$ yarn dev
```

- Banking -> https://banking.swan.local:8080
- Onboarding Individual
    - English Account -> https://onboarding.swan.local:8080/onboarding/individual/start
    - Spanish Account -> https://onboarding.swan.local:8080/onboarding/individual/start?accountCountry=ESP
- Onboarding Company
    - English Account -> https://onboarding.swan.local:8080/onboarding/company/start
    - Spanish Account -> https://onboarding.swan.local:8080/onboarding/company/start?accountCountry=ESP

### Mobile app

For downloading from Google Play or App Store.

## Backend

> Middleware & Server

In this [repository](/frontend-web/server) you'll find the NodeJS server to handle OAuth2 callbacks & API proxying.

### BFF

Backend for Frontend.

**BFF** is responsible for:

- Handling OAuth2
- Managing user sessions
- Acting as a proxy for Swan's GraphQL APIs
- Handling some business logic
- Serving the client application

### GraphQL

The BFF exposes a GraphQL API that is consumed by the client applications.

Update GraphQL **schemas** with the following command:
```
$ yarn graphql-update-schemas
```

All required **documents** are in the graphql directory for each application.

In order to benefit from GraphQL's types, we use **code generator**:
```
$ yarn graphql-codegen
```

### Build and deploy

**Bundle** the client applications and the server in production with the following command:
```
$ yarn build
```

Create a **Docker** image from the built files:
```
$ docker build
```

- https://swan-io.github.io/swan-partner-frontend/build-deploy
