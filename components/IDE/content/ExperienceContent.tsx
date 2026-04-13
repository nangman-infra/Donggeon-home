export function ExperienceContent() {
  return (
    <div className="font-mono text-sm">
      <div className="flex items-center gap-2 text-muted-foreground mb-6">
        <span className="line-numbers">1</span>
        <span className="text-accent">//</span>
        <span>experience.ts</span>
      </div>

      <pre className="code-block">
        <code>
          <span className="syntax-keyword">interface</span> <span className="syntax-function">Education</span> {"{"}{"\n"}
          {"  "}degree: <span className="syntax-keyword">string</span>;{"\n"}
          {"  "}institution: <span className="syntax-keyword">string</span>;{"\n"}
          {"  "}period: <span className="syntax-keyword">string</span>;{"\n"}
          {"  "}status: <span className="syntax-keyword">string</span>;{"\n"}
          {"}"}{"\n\n"}
          
          <span className="syntax-keyword">const</span> <span className="syntax-function">education</span>: Education = {"{"}{"\n"}
          {"  "}degree: <span className="syntax-string">"컴퓨터공학"</span>,{"\n"}
          {"  "}institution: <span className="syntax-string">"국립한밭대학교"</span>,{"\n"}
          {"  "}period: <span className="syntax-string">"2021.03 - 2027.02"</span>,{"\n"}
          {"  "}status: <span className="syntax-string">"재학 중"</span>{"\n"}
          {"}"};{"\n\n"}

          <span className="syntax-keyword">interface</span> <span className="syntax-function">Certification</span> {"{"}{"\n"}
          {"  "}name: <span className="syntax-keyword">string</span>;{"\n"}
          {"  "}year: <span className="syntax-keyword">number</span>;{"\n"}
          {"}"}{"\n\n"}

          <span className="syntax-keyword">const</span> <span className="syntax-function">certifications</span>: Certification[] = [{"\n"}
          {"  "}{"{ "}name: <span className="syntax-string">"AWS Certified Cloud Practitioner"</span>, year: <span className="syntax-number">2025</span> {"},"}{"\n"}
          {"  "}{"{ "}name: <span className="syntax-string">"NAVER Cloud Platform Certified Professional"</span>, year: <span className="syntax-number">2026</span> {"},"}{"\n"}
          {"  "}{"{ "}name: <span className="syntax-string">"NAVER Cloud Platform Certified Associate"</span>, year: <span className="syntax-number">2025</span> {"},"}{"\n"}
          {"  "}{"{ "}name: <span className="syntax-string">"TOEIC 860점"</span>, year: <span className="syntax-number">2024</span> {"},"}{"\n"}
          {"  "}{"{ "}name: <span className="syntax-string">"정보처리기능사"</span>, year: <span className="syntax-number">2020</span> {"}"}{"\n"}
          ];{"\n\n"}

          <span className="syntax-keyword">export</span> {"{ "}education, certifications {"}"};
        </code>
      </pre>
    </div>
  );
}
