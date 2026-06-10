const projects = [
  {
    title: "Budgetly",
    type: "Document Workflow PWA",
    href: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
    problem: "영수증과 예산 증빙 자료가 흩어져 있어 필요한 파일을 찾고 확인하는 데 시간이 많이 들었습니다.",
    solution: "OCR 결과를 검색 가능한 화면으로 옮기고, 사용자가 직접 확인하고 수정할 수 있는 흐름을 만들었습니다.",
    architecture: ["Vue.js PWA", "OCR 결과 처리", "검색 UI", "AWS EC2 배포"],
    technologies: ["Vue.js", "OCR", "AWS EC2", "PWA"],
    impact: "AI 결과를 보여주는 데서 멈추지 않고, 사람이 검토하는 단계까지 제품 흐름에 포함했습니다.",
    lesson: "문서 처리에서는 모델 성능만큼 검토 화면과 수정 경험이 중요하다는 점을 배웠습니다.",
  },
  {
    title: "Federated Learning",
    type: "AI System Experiment",
    href: "https://github.com/Hanbat-IoT/Lab2",
    problem: "연합학습 알고리즘을 조건을 바꿔가며 비교할 수 있는 실험 환경이 필요했습니다.",
    solution: "PyTorch와 Docker로 클라이언트 학습 흐름을 분리하고, 반복 실행 가능한 구조로 구성했습니다.",
    architecture: ["PyTorch 학습 루프", "클라이언트 시뮬레이션", "Docker 실행 환경", "반복 실험 구조"],
    technologies: ["Python", "PyTorch", "Docker"],
    impact: "모델 코드뿐 아니라 실행 환경과 평가 기준까지 함께 설계해야 결과를 비교할 수 있었습니다.",
    lesson: "AI 실험은 결과보다 재현 가능한 과정이 먼저 정리되어야 한다는 점을 확인했습니다.",
  },
  {
    title: "Dev Card Hunter",
    type: "Learning Automation Tool",
    href: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
    problem: "개발 학습 기록이 여러 곳에 흩어져 있어 꾸준히 진행 중인지 확인하기 어려웠습니다.",
    solution: "브라우저 확장 기능으로 학습 활동을 기록하고, 진행 상태를 가볍게 확인할 수 있게 만들었습니다.",
    architecture: ["Chrome Extension", "Browser Events", "Frontend State", "Progress Feedback"],
    technologies: ["JavaScript", "Chrome Extension", "Frontend"],
    impact: "기록 부담을 줄이면서도 사용자가 자신의 학습 흐름을 놓치지 않도록 했습니다.",
    lesson: "자동화는 사용자가 흐름을 이해하고 조정할 수 있을 때 더 자연스럽게 쓰인다는 점을 배웠습니다.",
  },
];

const expertise = ["LLM Workflow", "AI Backend", "Cloud Deployment", "Model Evaluation", "Product Thinking"];

const proofPoints = [
  { value: "3+", label: "문서 처리, 학습 실험, 자동화 프로젝트 경험" },
  { value: "Cloud", label: "AWS, NCP, Docker로 실행 환경 구성" },
  { value: "Ops", label: "배포와 운영 흐름을 함께 고려" },
  { value: "Product", label: "문제 정의에 맞춰 기술을 선택" },
];

const stackGroups = [
  { name: "AI / LLM", items: ["RAG", "OCR", "PyTorch", "Evaluation"] },
  { name: "Backend", items: ["Python", "Node.js", "Flask", "REST API"] },
  { name: "Frontend", items: ["Next.js", "TypeScript", "Vue.js", "Tailwind CSS"] },
  { name: "Cloud", items: ["AWS EC2", "NCP", "Linux", "Deployment"] },
  { name: "DevOps", items: ["Docker", "Jenkins", "GitHub Actions"] },
];

export default function Home() {
  return (
    <div className="portfolio-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="section-kicker">임동건 / AI Engineer Candidate</p>
          <h1>문제 정의부터 배포까지 이어지는 AI 프로젝트를 만들고 있습니다.</h1>
          <p className="hero-summary">
            OCR 문서 처리, 연합학습 실험, 브라우저 자동화 프로젝트를 통해 AI 기능이 실제 화면과 실행 환경 안에서
            어떻게 동작해야 하는지 학습하고 있습니다.
          </p>
          <div className="hero-meta" aria-label="현재 관심 직무">
            <span>현재: 컴퓨터공학 전공, AI 프로젝트를 제품 흐름과 운영 관점으로 정리 중</span>
            <span>관심 분야: Applied AI / AI Backend / FDE / AX</span>
          </div>
          <div className="expertise-list">
            {expertise.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              프로젝트 보기
            </a>
            <a href="mailto:gunni6112@gmail.com" className="button-secondary">
              연락하기
            </a>
          </div>
        </div>

        <aside className="signal-panel" aria-label="포트폴리오 요약">
          <div className="signal-panel__header">
            <span>Portfolio Map</span>
            <strong>Problem to Runtime</strong>
          </div>
          <div className="system-map" aria-hidden="true">
            <div className="system-node system-node--primary">문제 정의</div>
            <div className="system-node">데이터와 모델 활용</div>
            <div className="system-node">화면과 API 연결</div>
            <div className="system-node">배포 환경 구성</div>
            <div className="system-node">검토와 개선</div>
          </div>
          <p>
            프로젝트마다 무엇이 불편했는지, 어떤 구조로 풀었는지, 구현하면서 무엇을 배웠는지를 같은 기준으로
            정리했습니다.
          </p>
        </aside>
      </section>

      <section className="proof-strip" aria-label="핵심 역량">
        {proofPoints.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section id="projects" className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Selected Projects</p>
          <h2>프로젝트별로 문제, 구현 방식, 배운 점을 같은 흐름으로 정리했습니다.</h2>
          <p>기술 이름만 나열하기보다 어떤 상황에서 왜 그 방식을 선택했는지 보이도록 구성했습니다.</p>
        </div>

        <div className="case-study-list">
          {projects.map((project, index) => (
            <article key={project.title} className="case-study">
              <div className="case-study__index">0{index + 1}</div>
              <div className="case-study__main">
                <div className="case-study__topline">
                  <span>{project.type}</span>
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
                <h3>{project.title}</h3>
                <div className="case-grid">
                  <div>
                    <span>문제</span>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <span>구현</span>
                    <p>{project.solution}</p>
                  </div>
                  <div>
                    <span>결과</span>
                    <p>{project.impact}</p>
                  </div>
                  <div>
                    <span>배운 점</span>
                    <p>{project.lesson}</p>
                  </div>
                </div>
              </div>
              <aside className="architecture-panel">
                <span>구성</span>
                <ol>
                  {project.architecture.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <div className="tag-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </aside>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Stack</p>
          <h2>사용해본 기술을 역할별로 묶었습니다.</h2>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article key={group.name} className="stack-card">
              <h3>{group.name}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-band">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>프로젝트와 역할에 대해 편하게 이야기할 수 있습니다.</h2>
          <p>Applied AI, 문서 처리 자동화, AI 백엔드, Forward Deployed 역할에 관심이 있습니다.</p>
        </div>
        <div className="closing-actions">
          <a href="mailto:gunni6112@gmail.com" className="button-primary">
            Email
          </a>
          <a href="https://github.com/whitejbb" target="_blank" rel="noopener noreferrer" className="button-secondary">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
