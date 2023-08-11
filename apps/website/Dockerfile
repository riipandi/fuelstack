# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# This is base image with `pnpm` package manager
# -----------------------------------------------------------------------------
FROM node:18-alpine AS base
WORKDIR /app
RUN apk update && apk add --no-cache jq
RUN corepack enable && corepack prepare pnpm@latest-8 --activate

# -----------------------------------------------------------------------------
# Extract the target application package
# -----------------------------------------------------------------------------
FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
COPY --chown=node:node . .
RUN pnpm dlx turbo prune --scope=website --docker

# -----------------------------------------------------------------------------
# Add lockfile and package.json's of isolated subworkspace
# -----------------------------------------------------------------------------
FROM base AS installer

ARG TURBO_TEAM
ARG TURBO_TOKEN
ENV TURBO_TEAM=$TURBO_TEAM
ENV TURBO_TOKEN=$TURBO_TOKEN

RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY .npmrc /app/.npmrc
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm exec turbo run build --filter=website...

# -----------------------------------------------------------------------------
# Production image, copy all the files and run the application
# -----------------------------------------------------------------------------
FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/website/next.config.mjs .
COPY --from=installer /app/apps/website/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/website/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/website/.next/static ./apps/website/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/website/public ./apps/website/public

CMD node apps/website/server.js
