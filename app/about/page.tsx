const operatingPrinciples = [
  {
    title: "문제를 먼저 정리합니다",
    body: "기술을 고르기 전에 어떤 작업이 느리고 반복적인지, 어디에서 검토가 필요한지부터 확인합니다.",
  },
  {
    title: "화면과 실행 환경까지 봅니다",
    body: "AI 출력이 실제로 쓰이려면 결과를 확인하는 화면, 예외 상황, 배포 환경까지 함께 맞아야 한다고 생각합니다.",
  },
  {
    title: "배운 점을 다음 작업에 연결합니다",
    body: "모델, 백엔드, 클라우드, 자동화 경험을 기록으로 남기고 다음 프로젝트에서 더 나은 선택을 하는 근거로 삼습니다.",
  },
];

const focusAreas = [
  "문서 처리와 OCR 기반 업무 자동화",
  "RAG와 LLM workflow 설계",
  "Flask/Node.js 기반 AI 백엔드 구성",
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
        <h1>AI 기능이 실제로 쓰이는 흐름에 관심이 있습니다.</h1>
        <p>
          컴퓨터공학을 기반으로 AI/LLM, 백엔드, 클라우드 배포를 함께 학습하고 있습니다. 모델을 만드는 것뿐 아니라
          결과를 확인하고 업무에 반영하는 과정까지 설계하는 데 관심이 있습니다.
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
          <h2>요즘 집중하는 영역</h2>
          <p>AI 기능을 화면, API, 배포 환경과 연결하는 데 필요한 기초 역량을 프로젝트로 쌓고 있습니다.</p>
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
          <h2>다뤄본 기술</h2>
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
