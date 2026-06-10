const operatingPrinciples = [
  {
    title: "문제에서 시작합니다",
    body: "기술을 먼저 고르기보다 사용자의 병목, 검토 비용, 반복 작업, 운영 제약을 먼저 정의합니다.",
  },
  {
    title: "데모 이후를 봅니다",
    body: "AI 출력이 실제 업무에 쓰이려면 검증 UI, 실패 케이스, 로그, 배포 환경까지 함께 설계되어야 한다고 생각합니다.",
  },
  {
    title: "학습을 실험으로 남깁니다",
    body: "모델, 백엔드, 클라우드, 자동화 경험을 실행 가능한 형태로 정리하고 다음 프로젝트의 판단 근거로 연결합니다.",
  },
];

const focusAreas = [
  "문서 처리와 OCR 기반 업무 자동화",
  "RAG와 LLM 워크플로우 설계",
  "FastAPI/Flask 기반 AI 백엔드 구성",
  "Docker와 클라우드 배포 흐름",
  "모델 평가와 실패 케이스 정리",
  "로그, 모니터링, CI/CD 등 운영 기반",
];

const skillGroups = [
  { category: "Cloud Platforms", skills: ["AWS", "NCP"] },
  { category: "Container & DevOps", skills: ["Docker", "Jenkins", "GitHub Actions", "Linux"] },
  { category: "AI / ML", skills: ["PyTorch", "OCR", "RAG", "Model Evaluation"] },
  { category: "Application", skills: ["Python", "TypeScript", "Node.js", "Vue.js", "Next.js"] },
];

export default function AboutPage() {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">About</p>
        <h1>AI 기능을 실제 제품 흐름으로 연결하는 엔지니어를 목표로 합니다.</h1>
        <p>
          컴퓨터공학을 기반으로 AI/LLM, 백엔드, 클라우드 배포를 함께 학습하고 있습니다. 관심사는 모델 자체보다
          사용자가 AI 결과를 어떻게 검토하고 신뢰하며 업무에 반영하는가에 가깝습니다.
        </p>
      </section>

      <section className="subpage-grid">
        {operatingPrinciples.map((item) => (
          <article key={item.title} className="tone-card">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="detail-panel">
        <div className="section-heading">
          <p className="section-kicker">Current Focus</p>
          <h2>지금 집중하고 있는 역량</h2>
          <p>
            AI Engineer, AI Product Engineer, FDE, AX Engineer 역할에서 바로 평가되는 역량을 중심으로
            학습과 프로젝트를 정리하고 있습니다.
          </p>
        </div>
        <div className="focus-list">
          {focusAreas.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Capabilities</p>
          <h2>기술 스택은 역할과 책임 기준으로 묶었습니다.</h2>
        </div>
        <div className="stack-grid stack-grid--wide">
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
    </div>
  );
}
