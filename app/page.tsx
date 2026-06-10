const projects = [
  {
    title: "Budgetly",
    type: "문서 처리 워크플로우 PWA",
    href: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
    problem: "영수증과 예산 증빙 자료가 파일 단위로 흩어져 검토와 정리에 시간이 오래 걸렸습니다.",
    solution: "OCR 결과를 사용자가 확인하고 정리할 수 있는 문서 검토 흐름으로 연결한 PWA를 구현했습니다.",
    architecture: ["Vue.js PWA", "OCR 결과 처리", "검토 UI", "AWS EC2 배포"],
    technologies: ["Vue.js", "OCR", "AWS EC2", "PWA"],
    impact: "AI 출력 결과를 그대로 보여주는 데서 멈추지 않고, 사람이 검토하고 수정할 수 있는 흐름을 설계했습니다.",
    lesson: "AI 기능은 정확도만큼이나 사용자가 결과를 신뢰하고 수정할 수 있는 경험이 중요하다는 점을 배웠습니다.",
  },
  {
    title: "Federated Learning",
    type: "AI 시스템 실험",
    href: "https://github.com/Hanbat-IoT/Lab2",
    problem: "연합학습 구조는 반복 가능한 실험 환경이 없으면 모델 동작과 알고리즘 차이를 비교하기 어렵습니다.",
    solution: "PyTorch와 Docker를 활용해 클라이언트 학습 흐름을 재현하고 비교할 수 있는 실험 환경을 구성했습니다.",
    architecture: ["PyTorch 학습 루프", "클라이언트 시뮬레이션", "Docker 실행 환경", "반복 실험 구조"],
    technologies: ["Python", "PyTorch", "Docker"],
    impact: "이론 중심 학습을 넘어 실행 결과를 비교하고, 분산 학습의 구조적 특성을 관찰할 수 있었습니다.",
    lesson: "AI 시스템에서는 모델 코드뿐 아니라 실험 설계, 실행 환경, 평가 기준이 함께 중요하다는 점을 배웠습니다.",
  },
  {
    title: "Dev Card Hunter",
    type: "학습 자동화 도구",
    href: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
    problem: "개발 학습 기록이 여러 도구와 세션에 흩어져 꾸준한 실천 여부를 확인하기 어려웠습니다.",
    solution: "브라우저 확장 기능을 통해 학습 활동을 기록하고 진행 상황을 확인할 수 있는 경험을 만들었습니다.",
    architecture: ["Chrome Extension", "브라우저 이벤트", "프론트엔드 상태 관리", "진행 피드백"],
    technologies: ["JavaScript", "Chrome Extension", "Frontend"],
    impact: "학습 기록을 자동화하면서도 사용자가 직접 진행 상황을 이해할 수 있는 제품 흐름을 실험했습니다.",
    lesson: "자동화는 사용자의 통제권을 유지하면서 반복 작업의 마찰을 줄일 때 가장 효과적입니다.",
  },
];

const expertise = ["LLM 워크플로우", "AI 백엔드 API", "클라우드 배포", "모델 평가", "제품 문제 정의"];

const proofPoints = [
  { value: "3", label: "대표 AI/시스템 프로젝트" },
  { value: "AI", label: "사용자 업무 흐름에 연결한 기능 설계" },
  { value: "Cloud", label: "배포와 실행 환경까지 고려한 구현" },
  { value: "Product", label: "문제 정의에서 출발하는 기술 선택" },
];

const experience = [
  {
    role: "AI 제품 엔지니어링",
    problem: "많은 AI 데모는 모델 출력에서 끝나 실제 업무 흐름으로 이어지지 못합니다.",
    challenge: "AI 결과물을 사용자가 검토하고 활용할 수 있도록 인터페이스, 검증 단계, 배포 흐름을 함께 고려해야 했습니다.",
    decision: "프로젝트를 기술 목록이 아니라 문제, 아키텍처, 운영 관점, 배운 점 중심으로 설명했습니다.",
    result: "AI Engineer, Applied AI Engineer, FDE, AX Engineer 역할에서 평가되는 제품 감각과 시스템 사고를 드러내도록 정리했습니다.",
  },
  {
    role: "클라우드와 DevOps 기반",
    problem: "운영 가능한 AI 시스템은 모델 코드뿐 아니라 안정적인 실행 환경과 배포 흐름이 필요합니다.",
    challenge: "애플리케이션 코드와 Docker, AWS/NCP, CI/CD, 모니터링, 로그 관점을 연결해야 했습니다.",
    decision: "도구를 나열하기보다 배포 가능성, 반복 가능성, 시스템 동작을 중심으로 경험을 표현했습니다.",
    result: "프로덕션 수준의 AI 제품 개발로 확장할 수 있는 기반과 성장 방향을 보여주었습니다.",
  },
];

const stackGroups = [
  { name: "AI / LLM", items: ["RAG", "OCR", "PyTorch", "Model Evaluation", "Prompted Workflows"] },
  { name: "Backend", items: ["Python", "Node.js", "REST API", "Flask", "TypeScript"] },
  { name: "Cloud", items: ["AWS EC2", "NCP", "Linux", "Deployment", "Runtime Ops"] },
  { name: "Database", items: ["MongoDB", "Document Data", "Validation Records"] },
  { name: "DevOps", items: ["Docker", "Jenkins", "GitHub Actions", "Prometheus", "Grafana"] },
];

export default function Home() {
  return (
    <div className="portfolio-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="section-kicker">임동건 / AI Engineer Candidate</p>
          <h1>AI 기능을 실제 업무 흐름으로 연결하는 엔지니어.</h1>
          <p className="hero-summary">
            문서 처리, 모델 실험, 브라우저 자동화, 클라우드 배포 경험을 바탕으로 데모에서 끝나지 않는 AI 기능과
            제품 흐름을 설계합니다.
          </p>
          <div className="hero-meta" aria-label="현재 역할과 관심 직무">
            <span>현재: 컴퓨터공학 전공, AI 제품 엔지니어링 중심으로 프로젝트 정리 중</span>
            <span>관심 직무: AI Engineer / AI Product Engineer / FDE / Applied AI / AX</span>
          </div>
          <div className="expertise-list">
            {expertise.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              케이스 스터디 보기
            </a>
            <a href="mailto:gunni6112@gmail.com" className="button-secondary">
              연락하기
            </a>
          </div>
        </div>

        <aside className="signal-panel" aria-label="포트폴리오 평가 관점">
          <div className="signal-panel__header">
            <span>평가 관점</span>
            <strong>제품 + 시스템</strong>
          </div>
          <div className="system-map" aria-hidden="true">
            <div className="system-node system-node--primary">사용자 문제</div>
            <div className="system-node">AI 워크플로우</div>
            <div className="system-node">백엔드 API</div>
            <div className="system-node">클라우드 실행 환경</div>
            <div className="system-node">피드백 루프</div>
          </div>
          <p>
            이 포트폴리오는 어떤 문제를 풀었는지, 어떤 시스템으로 접근했는지, 어떤 판단을 했는지를 빠르게
            확인할 수 있도록 구성했습니다.
          </p>
        </aside>
      </section>

      <section className="proof-strip" aria-label="핵심 증거">
        {proofPoints.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section id="projects" className="section-block">
        <div className="section-heading">
          <p className="section-kicker">대표 프로젝트</p>
          <h2>기술 목록보다 문제와 시스템 설계를 먼저 보여줍니다.</h2>
          <p>
            각 프로젝트는 문제, 해결 방식, 아키텍처, 기술 스택, 임팩트와 배운 점을 기준으로 정리했습니다.
          </p>
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
                    <span>해결</span>
                    <p>{project.solution}</p>
                  </div>
                  <div>
                    <span>임팩트</span>
                    <p>{project.impact}</p>
                  </div>
                  <div>
                    <span>배운 점</span>
                    <p>{project.lesson}</p>
                  </div>
                </div>
              </div>
              <aside className="architecture-panel">
                <span>아키텍처</span>
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
          <p className="section-kicker">경험 정리</p>
          <h2>비즈니스 문제, 기술적 난제, 의사결정, 결과를 기준으로 정리했습니다.</h2>
        </div>
        <div className="experience-grid">
          {experience.map((item) => (
            <article key={item.role} className="experience-card">
              <h3>{item.role}</h3>
              <dl>
                <div>
                  <dt>비즈니스 문제</dt>
                  <dd>{item.problem}</dd>
                </div>
                <div>
                  <dt>기술적 난제</dt>
                  <dd>{item.challenge}</dd>
                </div>
                <div>
                  <dt>내린 결정</dt>
                  <dd>{item.decision}</dd>
                </div>
                <div>
                  <dt>결과</dt>
                  <dd>{item.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="section-block stack-section">
        <div className="section-heading">
          <p className="section-kicker">기술 스택</p>
          <h2>AI 제품 개발에 필요한 시스템 영역 기준으로 묶었습니다.</h2>
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
          <p className="section-kicker">연락</p>
          <h2>AI 시스템이 실제 운영 문제와 만나는 역할을 찾고 있습니다.</h2>
          <p>
            Applied AI 제품, 사내 자동화, 문서 지능화, AI 워크플로우 도구, Forward Deployed 솔루션을 만드는 팀에
            관심이 있습니다.
          </p>
        </div>
        <div className="closing-actions">
          <a href="mailto:gunni6112@gmail.com" className="button-primary">
            이메일
          </a>
          <a href="https://github.com/whitejbb" target="_blank" rel="noopener noreferrer" className="button-secondary">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/%EB%8F%99%EA%B1%B4-%EC%9E%84-a574ab386/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
