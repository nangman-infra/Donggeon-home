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

# 빌드 실행
RUN pnpm build

FROM nginx:alpine AS runner
WORKDIR /app

COPY --from=builder /app/out /usr/share/nginx/html

# nginx 설정 (정적 HTML 파일 서빙)
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # 정확한 파일이 있으면 서빙 \
    location / { \
        try_files $uri $uri.html $uri/ /index.html; \
    } \
    \
    # HTML 확장자 숨기기 \
    location ~ \.html$ { \
        try_files $uri =404; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

