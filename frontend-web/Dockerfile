FROM node:20 AS builder
WORKDIR /app
ADD . .
RUN yarn install --immutable --immutable-cache --check-cache && yarn graphql-codegen
RUN yarn build


FROM node:20-bullseye-slim
WORKDIR /home/node/app

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

USER node

COPY --from=builder --chown=node /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/server/dist .
COPY --from=builder --chown=node /app/package.json /home/node

CMD ["dumb-init", "node", "index.js"]
EXPOSE 8080
