"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Dev Card Hunter",
    year: "2025",
    description: "개발자들의 학습을 재밌게 만들어주는 개발자 사이트 방문 시 사이트 로고로 만들어진 카드를 지급해주는 CardHunter 시스템.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Chrome Extension"],
    link: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
  },
  {
    id: 2,
    title: "정글캠퍼스 숙소 세탁실 현황 시스템",
    year: "2025",
    description: "정글캠퍼스 숙소의 세탁기와 건조기 사용 현황을 실시간으로 확인하고 관리할 수 있는 웹 애플리케이션입니다.",
    tags: ["Vanilla JavaScript", "Bootstrap 5", "jQuery Ajax", "Python Flask", "MongoDB"],
    link: "https://github.com/2025-Krafton-401-6/Only_My_Web",
  },
  {
    id: 3,
    title: "Drone Delivery System",
    year: "2025",
    description: "Parrot Anafi 드론을 이용한 실시간 배송 시스템 (Progressive Web App).",
    tags: ["Next.js", "TypeScript", "React", "Python Flask", "Parrot Olympe SDK"],
    link: "https://github.com/DroneDelivery2/Embedded_PJ",
  },
  {
    id: 4,
    title: "Federated Learning with ADM & BWA",
    year: "2025",
    description: "이질적인 IoT 환경에서 ADM과 BWA 알고리즘을 활용한 연합학습 최적화 프로젝트입니다.",
    tags: ["Python", "Flower", "Flask", "PyTorch", "Docker", "Raspberry Pi"],
    link: "https://github.com/Hanbat-IoT/Lab2",
  },
  {
    id: 5,
    title: "Budgetly",
    year: "2025",
    description: "Azure Document Intelligence OCR을 활용해 영수증을 자동 인식하고 조직 예산을 효율적으로 관리하는 Progressive Web App.",
    tags: ["Vue.js", "Vite", "Tailwind CSS", "AWS EC2"],
    link: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
  },
  {
    id: 6,
    title: "이질적 연합학습 테스트베드",
    year: "2026",
    description: "하드웨어 성능이 다른 클라이언트들로 구성된 이질적 연합학습 환경에서 BWA와 ADM 알고리즘의 성능을 검증하기 위한 도커 기반 실험 플랫폼입니다.",
    tags: ["Python", "Flower", "Flask", "PyTorch", "Docker"],
    link: "https://github.com/2026-Feb-Winter-Institute/FL",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-accent font-mono">$</span> ls projects/
          </h1>
          <p className="text-xl text-muted-foreground mb-12">Selected Works & Experiments</p>

          <div className="space-y-4">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="block p-6 bg-muted/30 border border-border rounded-xl hover:border-primary transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📁</span>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 bg-background rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
