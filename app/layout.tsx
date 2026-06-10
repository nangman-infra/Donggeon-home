import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "임동건 | AI Product Engineer Portfolio",
  description: "AI 기능을 실제 제품 흐름과 운영 가능한 시스템으로 연결하는 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Script
          src="https://analytics.nangman.cloud/api/script.js"
          data-site-id="0a830816f2f7"
          strategy="afterInteractive"
        />
        <Header />
        <div className="site-frame">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
