import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://donggeon.nangman.cloud"),
  title: "임동건 | AI/AX Engineer",
  description:
    "RAG 기반 사내 AI 서비스, 온프레미스 LLM 추론 환경, 폐쇄망 CI/CD 개발환경을 직접 구축하는 AI/AX Engineer 임동건의 포트폴리오.",
  openGraph: {
    title: "임동건 | AI/AX Engineer",
    description:
      "RAG 기반 사내 AI 서비스부터 온프레미스 LLM 추론 환경, 폐쇄망 CI/CD까지 직접 구축하는 AI/AX Engineer 임동건의 포트폴리오.",
    siteName: "임동건 · AI/AX Engineer",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "임동건 | AI/AX Engineer",
    description: "RAG · On-prem LLM · AI Infra · DevOps를 직접 구축하는 AI/AX Engineer.",
  },
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
      <body className="min-h-screen bg-white text-slate-600 antialiased">
        <Script
          src="https://analytics.nangman.cloud/api/script.js"
          data-site-id="0a830816f2f7"
          strategy="afterInteractive"
        />
        <Header />
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
