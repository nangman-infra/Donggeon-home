import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "임동건 | AI Product Engineer",
  description: "RAG, Agent, Browser Automation, Local LLM 기반 AI 제품과 운영 가능한 AI 시스템을 만드는 엔지니어.",
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
