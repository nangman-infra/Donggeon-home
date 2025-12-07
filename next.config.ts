import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 사이트 export 활성화
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화 미지원
  },
  devIndicators: false,
  // GitHub Pages 배포 시 basePath 설정
  basePath: "/Donggeon-home",
  assetPrefix: "/Donggeon-home",
};

export default nextConfig;
