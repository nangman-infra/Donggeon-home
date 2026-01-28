import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 사이트 export 활성화
  images: {
    unoptimized: true, // 정적 export를 위한 이미지 최적화 비활성화
  },
  devIndicators: false,
};

export default nextConfig;
