const operatingPrinciples = [
  {
    title: "문제의 반복성을 먼저 봅니다.",
    body: "AI를 붙이기 전에 어떤 판단이 반복되고, 어디에서 맥락이 사라지고, 어떤 결과를 사람이 검증해야 하는지 확인합니다.",
  },
  {
    title: "모델과 인터페이스를 함께 설계합니다.",
    body: "좋은 답변도 사용자가 근거를 확인할 수 없다면 제품 경험이 되기 어렵습니다. 출력, 근거, 수정 흐름을 같은 시스템으로 봅니다.",
  },
  {
    title: "배포 이후의 운영을 기준으로 만듭니다.",
    body: "데모가 아니라 실제 환경에서 계속 쓰이는 AI를 목표로 로그, 예외, 비용, 보안, 업데이트 방식을 함께 고려합니다.",
  },
];

const focusAreas = [
  "AI Agents와 도구 사용 흐름 설계",
  "Qdrant, Hybrid Search, Reranking 기반 Enterprise RAG",
  "브라우저 자동화와 업무 세션 복원",
  "Local LLM Infrastructure와 사내 배포 전략",
  "OCR 및 Document Intelligence 파이프라인",
  "제품 검증을 위한 인터페이스와 운영 지표",
];

const skillGroups = [
  { category: "AI Product", skills: ["RAG", "Agents", "OCR", "Local LLM", "Model Evaluation"] },
  { category: "Application", skills: ["Next.js", "TypeScript", "Python", "Node.js", "Vue.js"] },
  { category: "Infrastructure", skills: ["Docker", "AWS", "NCP", "Linux", "GitHub Actions"] },
  { category: "Data Systems", skills: ["Qdrant", "Hybrid Search", "MongoDB", "API Design"] },
];

export default function AboutPage() {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">About</p>
        <h1>AI 기능을 실제 업무 흐름 안에서 작동하는 제품으로 바꾸는 데 집중합니다.</h1>
        <p>
          관심사는 모델 자체보다 모델이 사용자의 문제를 해결하는 방식입니다. 문서 처리, 사내 검색, 브라우저 에이전트처럼
          현실의 복잡한 맥락을 다루는 AI 시스템을 설계하고 구현합니다.
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
          <h2>현재 집중하고 있는 영역</h2>
          <p>검색, 추론, 자동화, 배포를 하나의 제품 흐름으로 연결하는 작업을 깊게 파고 있습니다.</p>
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
          <h2>제품을 만들 때 사용하는 기술 기반</h2>
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
