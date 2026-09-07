import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const SITE_URL = "https://donggeon.nangman.cloud";
const SITE_DESCRIPTION =
  "RAG, AI Agents, LLM Systems, Backend와 On-premise AI Infrastructure를 End-to-End로 설계하고 구축하는 AI Engineer 임동건의 포트폴리오.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "임동건 | AI Engineer",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "임동건 | AI Engineer",
    description: SITE_DESCRIPTION,
    siteName: "임동건 · AI Engineer",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "임동건 | AI Engineer",
    description: "RAG · AI Agents · LLM Systems · Backend · AI Infrastructure를 End-to-End로 구축하는 AI Engineer.",
  },
};

// 검색엔진이 사람·직무·소속 링크를 구조화해 읽도록 하는 Person 스키마.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "임동건",
  alternateName: "Donggeon Im",
  jobTitle: "AI Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: "mailto:gunni6112@gmail.com",
  sameAs: ["https://github.com/WhiteJbb", "https://www.nangman.cloud", "https://exit0.tistory.com"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "국립한밭대학교" },
  knowsAbout: ["RAG", "AI Agents", "LLM Systems", "Retrieval", "Backend", "AI Infrastructure"],
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
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-600 antialiased">
        <script
          type="application/ld+json"
          // 정적 상수라 사용자 입력이 섞이지 않는다
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
