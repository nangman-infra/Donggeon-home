FROM node:22-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.26.1 --activate

FROM base AS deps
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Docker 환경에서는 basePath 제거 (존재하는 경우에만)
RUN sed -i 's|basePath: "/Donggeon-home",||g' next.config.ts || true && \
    sed -i 's|assetPrefix: "/Donggeon-home",||g' next.config.ts || true && \
    pnpm build

FROM nginx:alpine AS runner
WORKDIR /app

COPY --from=builder /app/out /usr/share/nginx/html

# nginx 설정 (SPA 라우팅 지원)
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

