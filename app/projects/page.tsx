const projects = [
  {
    title: "Budgetly",
    year: "2025",
    category: "Document AI",
    problem: "예산 증빙 자료를 찾고 확인하는 과정이 반복적이고 오래 걸렸습니다.",
    system: "OCR 결과를 검색 가능한 PWA 화면으로 옮기고, AWS EC2에서 실행할 수 있도록 구성했습니다.",
    tags: ["Vue.js", "Vite", "Tailwind CSS", "OCR", "AWS EC2"],
    link: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
  },
  {
    title: "Federated Learning with ADM & BWA",
    year: "2025",
    category: "AI Experiment",
    problem: "IoT 환경을 가정해 연합학습 알고리즘을 조건별로 비교할 실험 흐름이 필요했습니다.",
    system: "PyTorch, Flower, Docker를 사용해 클라이언트 학습과 실행 환경을 분리했습니다.",
    tags: ["Python", "Flower", "Flask", "PyTorch", "Docker", "Raspberry Pi"],
    link: "https://github.com/Hanbat-IoT/Lab2",
  },
  {
    title: "Dev Card Hunter",
    year: "2025",
    category: "Learning Automation",
    problem: "개발 학습 활동을 꾸준히 기록하고 돌아볼 수 있는 가벼운 도구가 필요했습니다.",
    system: "Chrome Extension으로 브라우저 안에서 학습 활동을 기록하고 진행 상태를 보여줬습니다.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Chrome Extension"],
    link: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
  },
  {
    title: "Drone Delivery System",
    year: "2025",
    category: "Realtime Control",
    problem: "드론 배송 시나리오에서 상태 확인과 조작 흐름을 한 화면에서 다뤄야 했습니다.",
    system: "PWA, Flask, Parrot Olympe SDK를 연결해 웹 기반 제어 흐름을 구성했습니다.",
    tags: ["Next.js", "TypeScript", "React", "Python Flask", "Parrot Olympe SDK"],
    link: "https://github.com/DroneDelivery2/Embedded_PJ",
  },
  {
    title: "Campus Facility Status System",
    year: "2025",
    category: "Operations Dashboard",
    problem: "캠퍼스 시설 상태를 빠르게 확인하고 관리할 수 있는 화면이 필요했습니다.",
    system: "Flask, MongoDB, Ajax 기반으로 상태 조회와 관리 기능을 구현했습니다.",
    tags: ["Vanilla JavaScript", "Bootstrap 5", "jQuery Ajax", "Python Flask", "MongoDB"],
    link: "https://github.com/2025-Krafton-401-6/Only_My_Web",
  },
  {
    title: "Heterogeneous Federated Learning Testbed",
    year: "2026",
    category: "AI Evaluation",
    problem: "성능이 다른 클라이언트 조건에서 연합학습 알고리즘을 비교해야 했습니다.",
    system: "BWA와 ADM 비교를 위해 Docker 기반 실험 환경을 구성했습니다.",
    tags: ["Python", "Flower", "Flask", "PyTorch", "Docker"],
    link: "https://github.com/2026-Feb-Winter-Institute/FL",
  },
];

export default function ProjectsPage() {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">Projects</p>
        <h1>프로젝트를 문제와 구현 흐름 중심으로 정리했습니다.</h1>
        <p>각 항목에서 어떤 문제가 있었고, 어떤 구조로 풀었는지 빠르게 확인할 수 있습니다.</p>
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
                  <strong>구현 방식</strong>
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
