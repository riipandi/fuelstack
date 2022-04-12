# -----------------------------------------------------------------------------
# Extract the web application from the monorepo.
# -----------------------------------------------------------------------------
FROM node:16-alpine AS splitter
RUN apk update && yarn global add turbo
WORKDIR /app
COPY . .
RUN turbo prune --scope=api --docker

# -----------------------------------------------------------------------------
# Install dependencies
# -----------------------------------------------------------------------------
FROM node:16-alpine AS deps
RUN apk update
WORKDIR /app
COPY --from=splitter /app/out/json/ .
COPY --from=splitter /app/out/yarn.lock ./yarn.lock
COPY --from=splitter /app/turbo.json ./turbo.json
COPY --from=splitter /app/apps/api/prisma ./prisma
RUN yarn install --frozen-lockfile
RUN yarn prisma generate

# -----------------------------------------------------------------------------
# Builder
# -----------------------------------------------------------------------------
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/ .
COPY --from=splitter /app/out/full/ .
RUN yarn turbo run build --scope=api --include-dependencies --no-deps

# -----------------------------------------------------------------------------
# Application runner
# -----------------------------------------------------------------------------
FROM node:16-alpine as runner

ARG DATABASE_URL

ENV APP_PORT=3030
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app
COPY --from=builder /app/ .
RUN find /app/ -type f -iname ".env*"  -exec rm {} \;

WORKDIR /app/apps/api/
EXPOSE $APP_PORT
CMD [ "yarn", "start" ]
