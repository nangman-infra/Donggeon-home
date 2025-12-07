import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 사이트 export 활성화
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화 미지원
  },
  devIndicators: false,
  // GitHub Pages 배포 시 basePath 설정 (저장소 이름이 donggeon-home인 경우)
  // 커스텀 도메인 사용 시 주석 처리하세요
  // basePath: "/Donggeon-home",
  // assetPrefix: "/Donggeon-home",
};

export default nextConfig;
