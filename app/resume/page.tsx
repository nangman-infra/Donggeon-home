const education = {
  school: "국립한밭대학교",
  major: "컴퓨터공학 전공",
  period: "2021.03 - 2027.02 예정",
};

const skillGroups = [
  { category: "AI / LLM", skills: ["RAG", "OCR", "PyTorch", "Model Evaluation"] },
  { category: "Backend", skills: ["Python", "Node.js", "Flask", "REST API"] },
  { category: "Frontend", skills: ["Next.js", "TypeScript", "Vue.js", "Tailwind CSS"] },
  { category: "Cloud / DevOps", skills: ["AWS", "NCP", "Docker", "Jenkins", "GitHub Actions"] },
  { category: "Database", skills: ["MongoDB", "Document Data"] },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", year: "2025" },
  { name: "NAVER Cloud Platform Certified Professional", year: "2026" },
  { name: "NAVER Cloud Platform Certified Associate", year: "2025" },
  { name: "TOEIC 860", year: "2024" },
  { name: "정보처리기능사", year: "2020" },
];

const resumeSignals = [
  "AI 프로젝트를 문제, 구현 방식, 배운 점 기준으로 정리해 설명할 수 있습니다.",
  "Docker, AWS/NCP, CI/CD 등 실행과 배포에 필요한 기초를 함께 학습하고 있습니다.",
  "문서 처리, 연합학습, 브라우저 자동화처럼 다른 성격의 문제를 직접 구현해본 경험이 있습니다.",
];

export default function ResumePage() {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">Resume</p>
        <h1>학습 이력과 기술 경험을 한눈에 정리했습니다.</h1>
        <p>전공, 프로젝트에서 사용한 기술, 클라우드 관련 자격을 역할과 연결해 볼 수 있도록 구성했습니다.</p>
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
          <h2>프로젝트에서 사용한 기술</h2>
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
          <h2>자격과 어학</h2>
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
