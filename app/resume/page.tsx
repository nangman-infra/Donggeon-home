const education = {
  school: "국립한밭대학교",
  major: "컴퓨터공학 전공",
  period: "2021.03 - 2027.02 예정",
};

const skillGroups = [
  { category: "AI / LLM", skills: ["RAG", "Agents", "OCR", "PyTorch", "Model Evaluation"] },
  { category: "Backend", skills: ["Python", "Node.js", "Flask", "REST API"] },
  { category: "Frontend", skills: ["Next.js", "TypeScript", "React", "Vue.js", "Tailwind CSS"] },
  { category: "Cloud / DevOps", skills: ["AWS", "NCP", "Docker", "Jenkins", "GitHub Actions"] },
  { category: "Data", skills: ["Qdrant", "MongoDB", "Document Data", "Hybrid Search"] },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", year: "2025" },
  { name: "NAVER Cloud Platform Certified Professional", year: "2026" },
  { name: "NAVER Cloud Platform Certified Associate", year: "2025" },
  { name: "TOEIC 860", year: "2024" },
  { name: "정보처리기능사", year: "2020" },
];

const resumeSignals = [
  "AI 프로젝트를 문제 정의, 시스템 설계, 검증 흐름, 배포 관점으로 정리합니다.",
  "Docker, AWS/NCP, CI/CD 기반의 실행 환경과 운영 흐름을 함께 학습하고 적용합니다.",
  "문서 처리, RAG, 브라우저 자동화처럼 실제 사용자의 반복 업무를 줄이는 시스템을 구현해왔습니다.",
];

export default function ResumePage() {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">Resume</p>
        <h1>이력은 간단히, 판단 근거는 명확하게 정리했습니다.</h1>
        <p>학업, 기술 기반, 인증은 AI 제품을 안정적으로 만들기 위한 실행 근거로 연결됩니다.</p>
      </section>

      <section className="resume-layout">
        <article className="detail-panel">
          <p className="section-kicker">Education</p>
          <h2>{education.school}</h2>
          <p>{education.major}</p>
          <p>{education.period}</p>
        </article>

        <article className="detail-panel">
          <p className="section-kicker">Signal</p>
          <div className="focus-list">
            {resumeSignals.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Technical Skills</p>
          <h2>제품 구현에 사용하는 기술</h2>
        </div>
        <div className="stack-grid">
          {skillGroups.map((group) => (
            <article key={group.category} className="stack-card">
              <h3>{group.category}</h3>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Certifications</p>
          <h2>인증과 학습 이력</h2>
        </div>
        <div className="credential-list">
          {certifications.map((cert) => (
            <div key={cert.name} className="credential-row">
              <span>{cert.name}</span>
              <strong>{cert.year}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
