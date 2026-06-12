const projects = [
  {
    title: "Orbit",
    year: "2026",
    category: "Browser Agent",
    problem: "브라우저 기반 업무는 탭과 문서, 검색 기록이 흩어지며 작업 맥락을 쉽게 잃습니다.",
    system: "브라우징 이벤트와 세션 상태를 저장하고, 사용자가 돌아왔을 때 필요한 작업 경로를 복원하는 에이전트 구조를 설계했습니다.",
    tags: ["Browser Automation", "Agent", "Context Memory", "Product Design"],
  },
  {
    title: "Enterprise RAG Platform",
    year: "2026",
    category: "Enterprise RAG",
    problem: "사내 규정과 문서가 많을수록 사용자는 검색어보다 업무 판단에 필요한 근거를 원합니다.",
    system: "Qdrant, Hybrid Search, Reranking, Local LLM을 결합해 답변과 근거를 함께 제공하는 내부 검색 플랫폼을 구성했습니다.",
    tags: ["Qdrant", "Hybrid Search", "Reranking", "Local LLM"],
  },
  {
    title: "K8s Survival Camp",
    year: "2026",
    category: "AI Training System",
    problem: "쿠버네티스 장애 대응은 실제 장애 신호를 해석하고 복구 결정을 내려보는 경험이 필요합니다.",
    system: "Chaos Engineering 시나리오와 AI Tutor를 결합해 사고 과정과 복구 루틴을 학습하는 훈련 플랫폼을 설계했습니다.",
    tags: ["Kubernetes", "Chaos Engineering", "AI Tutor", "Incident Response"],
  },
  {
    title: "OCR & Document Intelligence",
    year: "2025",
    category: "Document AI",
    problem: "반복되는 문서 확인과 정보 추출 작업은 시간이 오래 걸리고 검증 흐름이 분리되기 쉽습니다.",
    system: "OCR 결과를 구조화하고 사람이 검수할 수 있는 화면과 API 흐름으로 연결해 문서 처리 자동화의 기반을 만들었습니다.",
    tags: ["OCR", "Document AI", "Review Workflow", "AWS EC2"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">Systems</p>
        <h1>프로젝트보다 시스템의 문제, 접근, 운영 가능성을 기준으로 정리했습니다.</h1>
        <p>각 작업은 기술 목록이 아니라 실제 사용자 흐름에서 어떤 병목을 줄였는지에 초점을 둡니다.</p>
      </section>

      <section className="project-index">
        {projects.map((project, index) => (
          <article key={project.title} className="project-row">
            <div className="project-row__number">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-row__body">
              <div className="project-row__meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h2>{project.title}</h2>
              <div className="project-row__grid">
                <div>
                  <strong>문제</strong>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <strong>구현 방향</strong>
                  <p>{project.system}</p>
                </div>
              </div>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
