"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "프로젝트 1",
    description: "첫 번째 프로젝트에 대한 설명입니다.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "프로젝트 2",
    description: "두 번째 프로젝트에 대한 설명입니다.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "프로젝트 3",
    description: "세 번째 프로젝트에 대한 설명입니다.",
    tags: ["Vue.js", "Firebase", "CSS"],
    link: "#",
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
