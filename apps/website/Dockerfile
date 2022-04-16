# -----------------------------------------------------------------------------
# Extract the web application from the monorepo.
# -----------------------------------------------------------------------------
FROM node:16-alpine AS spitter
RUN apk update && yarn global add turbo
WORKDIR /app
COPY . .
RUN turbo prune --scope=website --docker

# -----------------------------------------------------------------------------
# Install dependencies
# -----------------------------------------------------------------------------
FROM node:16-alpine AS deps
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=spitter /app/out/json/ .
COPY --from=spitter /app/out/yarn.lock ./yarn.lock
COPY --from=spitter /app/turbo.json ./turbo.json
RUN yarn install --frozen-lockfile

# -----------------------------------------------------------------------------
# Builder
# -----------------------------------------------------------------------------
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/ .
COPY --from=spitter /app/out/full/ .
RUN yarn turbo run build --scope=website --include-dependencies --no-deps

# -----------------------------------------------------------------------------
# Application runner
# -----------------------------------------------------------------------------
FROM node:16-alpine as runner

ARG NEXT_PUBLIC_API_ENDPOINT
ENV NEXT_PUBLIC_API_ENDPOINT=$NEXT_PUBLIC_API_ENDPOINT

WORKDIR /app
COPY --from=builder /app .
RUN find /app/ -type f -iname ".env*"  -exec rm {} \;

WORKDIR /app/apps/website/
EXPOSE 3000
CMD [ "yarn", "start" ]
