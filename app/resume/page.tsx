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
  "AI 프로젝트를 기능 구현보다 문제 해결과 시스템 설계 관점으로 설명할 수 있습니다.",
  "Docker, AWS/NCP, CI/CD 등 배포와 운영에 필요한 기반 지식을 함께 쌓고 있습니다.",
  "문서 처리, 연합학습, 브라우저 자동화처럼 서로 다른 문제를 제품 흐름으로 정리해본 경험이 있습니다.",
];

export default function ResumePage() {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">Resume</p>
        <h1>AI 제품 엔지니어링 역할에 맞춘 역량 요약</h1>
        <p>
          학력, 기술 스택, 자격증을 단순 나열하지 않고 AI 시스템을 만들고 배포하는 데 필요한 근거로
          재구성했습니다.
        </p>
      </section>

      <section className="resume-layout">
        <article className="detail-panel">
          <p className="section-kicker">Education</p>
          <h2>{education.school}</h2>
          <p className="resume-major">{education.major}</p>
          <p className="resume-period">{education.period}</p>
        </article>

        <article className="detail-panel">
          <p className="section-kicker">Signal</p>
          <div className="focus-list focus-list--compact">
            {resumeSignals.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Technical Skills</p>
          <h2>AI 제품 개발에 필요한 영역별 기술</h2>
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
          <h2>클라우드와 기본 역량을 뒷받침하는 자격</h2>
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
