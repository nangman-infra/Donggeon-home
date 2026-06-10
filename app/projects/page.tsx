const projects = [
  {
    title: "Budgetly",
    year: "2025",
    category: "문서 지능화",
    problem: "영수증과 예산 증빙 검토를 더 빠르고 신뢰할 수 있는 흐름으로 만들 필요가 있었습니다.",
    system: "OCR 결과를 검토 가능한 문서 처리 PWA로 연결하고 AWS EC2 배포까지 고려했습니다.",
    tags: ["Vue.js", "Vite", "Tailwind CSS", "OCR", "AWS EC2"],
    link: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
  },
  {
    title: "Federated Learning with ADM & BWA",
    year: "2025",
    category: "AI 시스템 실험",
    problem: "IoT 환경에서 연합학습 알고리즘의 동작을 반복 가능한 방식으로 비교해야 했습니다.",
    system: "PyTorch, Flower, Docker 기반으로 클라이언트 실험과 학습 흐름을 구성했습니다.",
    tags: ["Python", "Flower", "Flask", "PyTorch", "Docker", "Raspberry Pi"],
    link: "https://github.com/Hanbat-IoT/Lab2",
  },
  {
    title: "Dev Card Hunter",
    year: "2025",
    category: "학습 자동화",
    problem: "개발 학습 기록이 흩어져 꾸준한 실천과 진척을 확인하기 어려웠습니다.",
    system: "Chrome Extension 기반으로 학습 활동을 기록하고 진행 피드백을 제공하는 경험을 만들었습니다.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Chrome Extension"],
    link: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
  },
  {
    title: "Drone Delivery System",
    year: "2025",
    category: "실시간 제어",
    problem: "드론 배송 시나리오에서 실시간 상태 확인과 제어 흐름을 웹에서 다뤄야 했습니다.",
    system: "PWA와 Flask, Parrot Olympe SDK를 연결해 드론 배송 시스템의 기본 흐름을 구현했습니다.",
    tags: ["Next.js", "TypeScript", "React", "Python Flask", "Parrot Olympe SDK"],
    link: "https://github.com/DroneDelivery2/Embedded_PJ",
  },
  {
    title: "Campus Facility Status System",
    year: "2025",
    category: "운영 대시보드",
    problem: "캠퍼스 시설의 사용 현황을 실시간으로 확인하고 관리할 수 있는 화면이 필요했습니다.",
    system: "Flask, MongoDB, Ajax 기반으로 상태 조회와 관리 기능을 갖춘 웹 애플리케이션을 만들었습니다.",
    tags: ["Vanilla JavaScript", "Bootstrap 5", "jQuery Ajax", "Python Flask", "MongoDB"],
    link: "https://github.com/2025-Krafton-401-6/Only_My_Web",
  },
  {
    title: "Heterogeneous Federated Learning Testbed",
    year: "2026",
    category: "AI 평가 환경",
    problem: "성능이 다른 클라이언트들로 구성된 환경에서 알고리즘 성능을 검증해야 했습니다.",
    system: "BWA와 ADM 알고리즘을 비교하기 위한 Docker 기반 연합학습 실험 플랫폼을 구성했습니다.",
    tags: ["Python", "Flower", "Flask", "PyTorch", "Docker"],
    link: "https://github.com/2026-Feb-Winter-Institute/FL",
  },
];

export default function ProjectsPage() {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">Projects</p>
        <h1>프로젝트를 기술 목록이 아니라 시스템 판단의 증거로 보여줍니다.</h1>
        <p>
          각 프로젝트는 문제, 시스템 접근, 기술 스택을 함께 보여줍니다. 리뷰어가 빠르게 맥락을 잡고 더 깊게 볼
          프로젝트를 선택할 수 있도록 구성했습니다.
        </p>
      </section>

      <section className="project-index">
        {projects.map((project, index) => (
          <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="project-row">
            <div className="project-row__number">0{index + 1}</div>
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
                  <strong>시스템 접근</strong>
                  <p>{project.system}</p>
                </div>
              </div>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
