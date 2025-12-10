"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Dev Card Hunter",
    description: "개발자들의 학습을 재밌게 만들어주는 개발자 사이트 방문 시 사이트 로고로 만들어진 카드를 지급해주는 CardHunter 시스템.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Chrome Extension"],
    link: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
  },
  {
    id: 2,
    title: "정글캠퍼스 숙소 세탁실 현황 시스템",
    description: "정글캠퍼스 숙소의 세탁기와 건조기 사용 현황을 실시간으로 확인하고 관리할 수 있는 웹 애플리케이션입니다.",
    tags: ["Vanilla JavaScript", "Bootstrap 5", "jQuery Ajax", "Python Flask", "MongoDB"],
    link: "https://github.com/2025-Krafton-401-6/Only_My_Web",
  },
  {
    id: 3,
    title: "Drone Delivery System - Next.js PWA",
    description: "Parrot Anafi 드론을 이용한 실시간 배송 시스템 (Progressive Web App).",
    tags: ["Next.js", "TypeScript", "React", "Python Flask", "Parrot Olympe SDK"],
    link: "https://github.com/DroneDelivery2/Embedded_PJ",
  },
  {
    id: 4,
    title: "Federated Learning with ADM & BWA Optimization",
    description: "이질적인 IoT 환경에서 ADM (Adaptive Data Management)과 BWA (Bandwidth Allocation) 알고리즘을 활용한 연합학습 최적화 프로젝트입니다.",
    tags: ["Python", "Flower", "Flask", "PyTorch", "Docker", "Raspberry Pi"],
    link: "https://github.com/Hanbat-IoT/Lab2",
  },
  {
    id: 5,
    title: "Budgetly : OCR 기반 조직 예산 관리 시스템",
    description: "Azure Document Intelligence OCR을 활용해 영수증을 자동 인식하고 조직 예산을 효율적으로 관리하는 Progressive Web App (PWA).",
    tags: ["Vue.js", "Vite", "Tailwind CSS", "AWS EC2"],
    link: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12">프로젝트</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-secondary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="text-primary hover:underline"
              >
                자세히 보기 →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
