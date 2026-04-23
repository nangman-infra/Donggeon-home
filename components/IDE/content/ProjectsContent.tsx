export function ProjectsContent() {
  const projects = [
    {
      name: "Budgetly",
      year: 2025,
      description: "Azure OCR을 활용한 조직 예산 관리 시스템 (PWA)",
      tech: ["Vue.js", "Tailwind CSS", "AWS EC2"],
      link: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
    },
    {
      name: "Federated Learning",
      year: 2025,
      description: "ADM & BWA 알고리즘을 활용한 연합학습 최적화",
      tech: ["Python", "Flower", "PyTorch", "Docker"],
      link: "https://github.com/Hanbat-IoT/Lab2",
    },
    {
      name: "Dev Card Hunter",
      year: 2025,
      description: "개발자 학습 게이미피케이션 시스템",
      tech: ["JavaScript", "Chrome Extension"],
      link: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
    },
    {
      name: "Drone Delivery System",
      year: 2025,
      description: "Parrot Anafi 드론 실시간 배송 시스템",
      tech: ["Next.js", "TypeScript", "Python Flask"],
      link: "https://github.com/DroneDelivery2/Embedded_PJ",
    },
  ];

  return (
    <div className="font-mono text-sm">
      <div className="flex items-center gap-2 text-muted-foreground mb-6">
        <span className="line-numbers">1</span>
        <span className="text-accent">{"//"}</span>
        <span>projects/</span>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-border hover:border-primary transition-all group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-accent">📁</span>
                <span className="font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </span>
              </div>
              <span className="text-muted-foreground text-xs">{project.year}</span>
            </div>
            
            <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 p-4 border border-border rounded">
        <div className="text-accent text-xs mb-2">$ git log --oneline</div>
        <div className="space-y-1 text-xs text-muted-foreground">
          <div>a3f2c1b feat: add budgetly project</div>
          <div>b7e4d2a feat: implement federated learning</div>
          <div>c9f6e3b feat: create dev card hunter</div>
          <div>d1g8f4c feat: build drone delivery system</div>
        </div>
      </div>
    </div>
  );
}
