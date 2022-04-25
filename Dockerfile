# -----------------------------------------------------------------------------
# Install dependencies
# -----------------------------------------------------------------------------
FROM node:16-alpine AS deps
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile

# -----------------------------------------------------------------------------
# Builder
# -----------------------------------------------------------------------------
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/ .
RUN yarn postinstall
RUN yarn build

# -----------------------------------------------------------------------------
# Application runner
# -----------------------------------------------------------------------------
FROM node:16-alpine as runner
LABEL org.opencontainers.image.source="https://github.com/riipandi/fuelstack"

WORKDIR /app

# Create group app and user app and set permissions for the WORKDIR
RUN addgroup --gid 1001 -S webmaster && adduser --uid 1001 -S webmaster -G webmaster
RUN chown -R webmaster:webmaster /app

ARG DATABASE_URL
ARG NEXT_PUBLIC_API_ENDPOINT

ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_PUBLIC_API_ENDPOINT=$NEXT_PUBLIC_API_ENDPOINT

# Switch to the created user
USER webmaster

COPY --from=builder /app/ .
RUN find /app/ -type f -iname ".env*"  -exec rm {} \;

EXPOSE 3000 3030

CMD [ "yarn", "start" ]
