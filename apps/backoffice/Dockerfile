# -----------------------------------------------------------------------------
# Extract the application from the monorepo.
# -----------------------------------------------------------------------------
FROM scratch AS builder
WORKDIR /
COPY . .

# -----------------------------------------------------------------------------
# Runner use nginx
# -----------------------------------------------------------------------------
FROM nginx:mainline-alpine AS runner
WORKDIR /usr/share/nginx/html

COPY --from=builder /apps/backoffice/dist .
EXPOSE 80
