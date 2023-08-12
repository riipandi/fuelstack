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
RUN turbo prune --scope=admin --docker

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
RUN turbo run build --filter=admin...

# -----------------------------------------------------------------------------
# Production image, copy all the files and run the application
# -----------------------------------------------------------------------------
FROM nginx:mainline-alpine AS runner
LABEL org.opencontainers.image.source="https://github.com/riipandi/fuelstack"
WORKDIR /app

# Spawns command as a child process.
RUN apk update && apk add --no-cache tini

COPY --from=pruner /app/support/nginx-spa.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/admin/dist ./

EXPOSE 80 443

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["nginx", "-g", "daemon off;"]
