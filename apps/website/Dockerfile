# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# This is base image with `pnpm` package manager
# -----------------------------------------------------------------------------
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
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
ENV TURBO_TEAM $TURBO_TEAM
ENV TURBO_TOKEN $TURBO_TOKEN
ENV NEXT_TELEMETRY_DISABLED 1

RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY .npmrc /app/.npmrc
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# pnpm symlink issue: https://github.com/pnpm/pnpm/issues/6754
COPY --from=builder /app/out/full/ ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN pnpm exec turbo run build --filter=website...

# Install dependencies for production
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# -----------------------------------------------------------------------------
# Production image, copy all the files and run the application
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runner
LABEL org.opencontainers.image.source="https://github.com/riipandi/fuelstack"
WORKDIR /app

ENV NODE_ENV production
ENV HOSTNAME localhost
ENV PORT 3000

# Don't run production as root, spawns command as a child process.
RUN addgroup --system --gid 1001 nonroot && adduser --system --uid 1001 nonroot
RUN apk update && apk add --no-cache tini
USER nonroot:nonroot

COPY --from=installer /app/apps/website/next.config.mjs .
COPY --from=installer /app/apps/website/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nonroot:nonroot /app/apps/website/.next/standalone ./
COPY --from=installer --chown=nonroot:nonroot /app/apps/website/.next/static ./apps/website/.next/static
COPY --from=installer --chown=nonroot:nonroot /app/apps/website/public ./apps/website/public

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "apps/website/server.js"]
