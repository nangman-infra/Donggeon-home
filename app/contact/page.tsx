import { Contact } from "@/components/sections/Contact";
import { PageHeader } from "@/components/sections/Shell";

export const metadata = {
  title: "Contact | 임동건",
  description: "채용, 협업, 기술 문의는 이메일 또는 아래 폼으로 연락해 주세요.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="AI 서비스 개발과 운영에 대해 이야기하고 싶다면"
        desc="채용, 협업, 기술 자문 모두 환영합니다. 맥락과 기대하는 결과를 함께 보내주시면 더 빠르게 이해할 수 있습니다."
      />
      <Contact />
    </div>
  );
}
