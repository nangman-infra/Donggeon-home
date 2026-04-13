"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  
  const introText = "$ whoami\n> Cloud Engineer & DevOps Enthusiast";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < introText.length) {
        setDisplayedText(introText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      if (e.key === "Escape") {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const projects = [
    {
      name: "Budgetly",
      desc: "Azure OCR 기반 조직 예산 관리 PWA",
      tech: ["Vue.js", "AWS EC2"],
      link: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
    },
    {
      name: "Federated Learning",
      desc: "ADM & BWA 알고리즘 연합학습 최적화",
      tech: ["Python", "PyTorch", "Docker"],
      link: "https://github.com/Hanbat-IoT/Lab2",
    },
    {
      name: "Dev Card Hunter",
      desc: "개발자 학습 게이미피케이션 시스템",
      tech: ["JavaScript", "Chrome Extension"],
      link: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
    },
  ];

  const skills = [
    { category: "Cloud", items: ["AWS", "NCP"] },
    { category: "Container", items: ["Docker", "Kubernetes", "ECS", "EKS"] },
    { category: "IaC", items: ["Terraform", "Jenkins", "GitHub Actions"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana"] },
    { category: "Languages", items: ["Python", "Bash", "Node.js", "TypeScript"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-8">
            <pre className="font-mono text-sm text-accent whitespace-pre-wrap">
              {displayedText}
              <span className="typing-cursor"></span>
            </pre>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">동건</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            안정적이고 확장 가능한 클라우드 인프라 구축에 관심을 가지고 있는 학생입니다.
            DevOps와 자동화를 통해 더 나은 개발 경험을 만들어가고 있습니다.
          </p>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32"
        >
          {[
            { label: "Projects", value: "06+" },
            { label: "Certifications", value: "05+" },
            { label: "Year Started", value: "2021" },
            { label: "Status", value: "Learning" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-muted/30 border border-border rounded-xl hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent font-mono">$</span> cat skills.json
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="p-6 bg-muted/30 border border-border rounded-xl">
                <div className="text-sm font-mono text-accent mb-4">{skill.category}</div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-background border border-border rounded-lg text-sm font-mono hover:border-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-accent font-mono">$</span> ls projects/
          </h2>
          <div className="space-y-4">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-muted/30 border border-border rounded-xl hover:border-primary transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-background rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 bg-muted/30 border border-border rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-accent font-mono">$</span> contact
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <a href="mailto:gunni6112@gmail.com" className="flex items-center gap-3 p-4 bg-background rounded-lg hover:border-primary border border-transparent transition-colors">
              <span className="text-2xl">✉️</span>
              <div>
                <div className="text-xs text-muted-foreground font-mono">EMAIL</div>
                <div className="text-sm">gunni6112@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/whitejbb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-background rounded-lg hover:border-primary border border-transparent transition-colors">
              <span className="text-2xl">💻</span>
              <div>
                <div className="text-xs text-muted-foreground font-mono">GITHUB</div>
                <div className="text-sm">github.com/whitejbb</div>
              </div>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            프로젝트 문의나 협업 제안이 있으시면 언제든지 연락주세요.
          </p>
        </motion.section>
      </div>

      {/* Command Palette */}
      {commandPaletteOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setCommandPaletteOpen(false)}
          />
          <div className="command-palette">
            <input
              type="text"
              className="command-input"
              placeholder="Type a command..."
              autoFocus
            />
            <div className="p-2">
              {[
                { icon: "📧", label: "Email", desc: "gunni6112@gmail.com" },
                { icon: "💻", label: "GitHub", desc: "github.com/whitejbb" },
                { icon: "🔗", label: "LinkedIn", desc: "Connect with me" },
                { icon: "📝", label: "Blog", desc: "exit0.tistory.com" },
              ].map((item, i) => (
                <div key={i} className="command-item">
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
