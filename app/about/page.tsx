"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">자기소개</h1>
        
        <div className="max-w-3xl space-y-6">
          <p className="text-xl md:text-2xl leading-relaxed">
            안녕하세요! 클라우드 인프라 엔지니어를 꿈꾸는 학생 동건입니다.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            안정적이고 확장 가능한 클라우드 인프라 구축에 관심을 가지고 열심히 공부하고 있습니다.
            AWS, NCP 등 다양한 클라우드 플랫폼을 학습하며 실습 프로젝트를 진행하고 있습니다.
            DevOps와 자동화에 대해 배우며, 실무에서 활용할 수 있는 기술을 익히기 위해 노력하고 있습니다.
          </p>

          <div className="pt-8">
            <h2 className="text-2xl font-bold mb-4">기술 스택</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-muted-foreground">Cloud Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  {["AWS", "NCP"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-secondary rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-muted-foreground">Container & Orchestration</h3>
                <div className="flex flex-wrap gap-3">
                  {["Docker", "Kubernetes", "ECS", "EKS"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-secondary rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-muted-foreground">IaC & Automation</h3>
                <div className="flex flex-wrap gap-3">
                  {["Terraform", "CloudFormation", "Ansible", "Jenkins", "GitHub Actions"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-secondary rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-muted-foreground">Monitoring & Logging</h3>
                <div className="flex flex-wrap gap-3">
                  {["Prometheus", "Grafana", "CloudWatch", "ELK Stack", "Datadog"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-secondary rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-muted-foreground">Scripting & Programming</h3>
                <div className="flex flex-wrap gap-3">
                  {["Python", "Bash", "Node.js"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-secondary rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="text-2xl font-bold mb-4">학습 중인 분야</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>클라우드 인프라 기초 (AWS, NCP)</li>
              <li>컨테이너 기술 (Docker, Kubernetes)</li>
              <li>Infrastructure as Code (Terraform, Ansible)</li>
              <li>CI/CD 파이프라인 구축</li>
              <li>모니터링 및 로깅 시스템</li>
              <li>리눅스 시스템 관리</li>
              <li>네트워크/운영체제 및 보안 기초</li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-2xl font-bold mb-4">목표 및 관심사</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>클라우드 네이티브 아키텍처 이해</li>
              <li>DevOps 문화와 실무 경험 쌓기</li>
              <li>자동화를 통한 효율적인 인프라 운영</li>
              <li>실습 프로젝트를 통한 실전 경험</li>
              <li>클라우드 자격증 취득 (AWS SAA, CKA 등)</li>
              <li>오픈소스 프로젝트 기여</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
