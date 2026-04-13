"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-accent font-mono">$</span> cat resume.md
          </h1>
          <p className="text-xl text-muted-foreground mb-12">Education, Skills & Certifications</p>

          {/* Education */}
          <div className="mb-12 p-6 bg-muted/30 border border-border rounded-xl">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent font-mono">#</span> Education
            </h2>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">컴퓨터공학</h3>
              <p className="text-muted-foreground">국립한밭대학교</p>
              <p className="text-sm text-muted-foreground font-mono">2021.03 - 2027.02 (재학 중)</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent font-mono">#</span> Technical Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { category: "Frontend", skills: ["Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Vanilla JavaScript"] },
                { category: "Backend", skills: ["Node.js", "Flask", "MongoDB"] },
                { category: "Tools", skills: ["Git", "GitHub", "VS Code"] },
              ].map((group, i) => (
                <div key={i} className="p-4 bg-muted/30 border border-border rounded-xl">
                  <div className="text-sm font-mono text-accent mb-3">{group.category}</div>
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div key={skill} className="text-sm font-mono">• {skill}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent font-mono">#</span> Certifications
            </h2>
            <div className="space-y-3">
              {[
                { name: "AWS Certified Cloud Practitioner", year: "2025" },
                { name: "NAVER Cloud Platform Certified Professional", year: "2026" },
                { name: "NAVER Cloud Platform Certified Associate", year: "2025" },
                { name: "TOEIC 860점", year: "2024" },
                { name: "정보처리기능사", year: "2020" },
              ].map((cert, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl hover:border-primary transition-colors">
                  <span className="font-mono text-sm">{cert.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
