import { Contact } from "@/components/sections/Contact";
import { PageHeader } from "@/components/sections/Shell";
import { pageHeaders } from "@/content/portfolio";

export const metadata = {
  title: "Contact | 임동건",
  description: "채용, 협업, 기술 문의는 이메일 또는 아래 폼으로 연락해 주세요.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow={pageHeaders.contact.eyebrow}
        title={pageHeaders.contact.title}
        desc={pageHeaders.contact.desc}
      />
      <Contact />
    </div>
  );
}
