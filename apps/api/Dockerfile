# syntax=docker/dockerfile:1.4

# -----------------------------------------------------------------------------
# This is base image with `pnpm` package manager
# -----------------------------------------------------------------------------
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
RUN apk update && apk add --no-cache jq libc6-compat
RUN corepack enable && corepack prepare pnpm@latest-8 --activate
RUN pnpm add -g turbo

# -----------------------------------------------------------------------------
# Extract the target application package
# -----------------------------------------------------------------------------
FROM base AS pruner
WORKDIR /app
COPY --chown=node:node . .
RUN turbo prune --scope=api --docker

# -----------------------------------------------------------------------------
# Add lockfile and package.json's of isolated subworkspace
# -----------------------------------------------------------------------------
FROM base AS builder
WORKDIR /app

ARG TURBO_TEAM
ARG TURBO_TOKEN
ENV TURBO_TEAM $TURBO_TEAM
ENV TURBO_TOKEN $TURBO_TOKEN

# First install the dependencies (as they change less often)
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/full/ ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN turbo run build --filter=api...

# Prune pnpm package, then install dependencies for production
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm --filter=api --prod deploy pruned

# -----------------------------------------------------------------------------
# Production image, copy all the files and run the application
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runner
LABEL org.opencontainers.image.source="https://github.com/riipandi/fuelstack"
WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL

ENV NODE_ENV production
ENV PORT 3000

# Don't run production as root, spawns command as a child process.
RUN corepack enable && corepack prepare pnpm@latest-8 --activate
RUN addgroup --system --gid 1001 nonroot && adduser --system --uid 1001 nonroot
RUN apk update && apk add --no-cache tini

COPY --from=builder --chown=nonroot:nonroot /app/pruned/package.json ./package.json
COPY --from=builder --chown=nonroot:nonroot /app/pruned/node_modules ./node_modules
COPY --from=builder --chown=nonroot:nonroot /app/pruned/dist ./dist

USER nonroot:nonroot
EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--", "sh"]
# CMD ["node", "dist/app.js"]
