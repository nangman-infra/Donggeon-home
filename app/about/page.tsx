import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { PageHeader } from "@/components/sections/Shell";
import { pageHeaders } from "@/content/portfolio";

export const metadata = {
  title: "About | 임동건",
  description: "RAG · Agent 시스템부터 Backend, On-premise LLM Serving, 운영 구조까지 구축해 온 AI Engineer 임동건 소개.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow={pageHeaders.about.eyebrow}
        title={pageHeaders.about.title}
        desc={pageHeaders.about.desc}
      />
      <About />
      <ExperienceSection />
      <TechStack />
    </div>
  );
}
