import { Awards } from "@/components/sections/Awards";
import { Publications } from "@/components/sections/Publications";
import { TechStack } from "@/components/sections/TechStack";
import { PageHeader } from "@/components/sections/Shell";
import { pageHeaders } from "@/content/portfolio";

export const metadata = {
  title: "Resume | 임동건",
  description: "임동건의 학력, 수상, 활동, 자격증, 논문, 기술 스택 정리.",
};

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        eyebrow={pageHeaders.resume.eyebrow}
        title={pageHeaders.resume.title}
        desc={pageHeaders.resume.desc}
      />
      <Awards />
      <Publications />
      <TechStack />
    </div>
  );
}
