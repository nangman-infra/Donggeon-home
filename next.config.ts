import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 사이트 export 활성화
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화 미지원
  },
  devIndicators: false,
  // 커스텀 도메인 사용시 basePath 불필요
};

export default nextConfig;
