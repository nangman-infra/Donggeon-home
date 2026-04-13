"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-accent font-mono">$</span> whoami
          </h1>
          <p className="text-xl text-muted-foreground mb-12">About Me</p>

          {/* Bio */}
          <div className="p-8 bg-muted/30 border border-border rounded-xl mb-12">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground text-2xl font-bold">
                안녕하세요. 클라우드 인프라 엔지니어를 꿈꾸는 학생 동건입니다.
              </p>
              <p className="text-muted-foreground">
                안정적이고 확장 가능한 클라우드 인프라 구축에 관심을 가지고 열심히 공부하고 있습니다.
                AWS, NCP 등 다양한 클라우드 플랫폼을 학습하며 실습 프로젝트를 진행하고 있습니다.
              </p>
              <p className="text-muted-foreground">
                DevOps와 자동화에 대해 배우며, 실무에서 활용할 수 있는 기술을 익히기 위해 노력하고 있습니다.
              </p>
            </div>
          </div>

          {/* 학습 중인 분야 */}
          <div className="p-8 bg-muted/30 border border-border rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent font-mono">$</span> cat learning.txt
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "클라우드 인프라 기초 (AWS, NCP)",
                "컨테이너 기술 (Docker, Kubernetes)",
                "Infrastructure as Code (Terraform, Ansible)",
                "CI/CD 파이프라인 구축",
                "모니터링 및 로깅 시스템",
                "리눅스 시스템 관리",
                "네트워크/운영체제 및 보안 기초",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <span className="text-primary font-mono text-xl">→</span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 목표 및 관심사 */}
          <div className="p-8 bg-muted/30 border border-border rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent font-mono">$</span> cat goals.txt
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "클라우드 네이티브 아키텍처 이해",
                "DevOps 문화와 실무 경험 쌓기",
                "자동화를 통한 효율적인 인프라 운영",
                "실습 프로젝트를 통한 실전 경험",
                "클라우드 자격증 취득 (AWS SAA, CKA 등)",
                "오픈소스 프로젝트 기여",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <span className="text-primary font-mono text-xl">→</span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent font-mono">$</span> ls skills/
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { category: "Cloud Platforms", skills: ["AWS", "NCP"] },
              { category: "Container & Orchestration", skills: ["Docker", "Kubernetes", "ECS", "EKS"] },
              { category: "IaC & Automation", skills: ["Terraform", "Jenkins", "GitHub Actions"] },
              { category: "Monitoring & Logging", skills: ["Prometheus", "Grafana"] },
              { category: "Scripting & Programming", skills: ["Python", "Bash", "Node.js"] },
              { category: "Frontend", skills: ["Next.js", "TypeScript", "Tailwind CSS"] },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-muted/30 border border-border rounded-xl">
                <div className="text-sm font-mono text-accent mb-4">{item.category}</div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-background border border-border rounded-lg text-sm font-mono hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
