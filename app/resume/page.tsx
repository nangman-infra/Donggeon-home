"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12">이력서</h1>

        {/* 경력 */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">경력</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold">프론트엔드 개발자</h3>
              <p className="text-muted-foreground">회사명 | 2023.01 - 현재</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>React 기반 웹 애플리케이션 개발</li>
                <li>UI/UX 개선 및 성능 최적화</li>
                <li>팀 협업 및 코드 리뷰</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold">주니어 개발자</h3>
              <p className="text-muted-foreground">이전 회사 | 2021.06 - 2022.12</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>웹 서비스 유지보수 및 기능 개발</li>
                <li>반응형 웹 디자인 구현</li>
                <li>API 연동 및 데이터 처리</li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* 학력 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">학력</h2>
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold">컴퓨터공학 재학</h3>
            <p className="text-muted-foreground">국립한밭대학교 | 2021.03 - 2027.02</p>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">기술 스택</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Vanilla JavaScript"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Flask", "MongoDB"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 자격증 */}
        <section>
          <h2 className="text-3xl font-bold mb-6">자격증</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>정보처리기능사 (2020)</li>
            <li>TOEIC 860점 (2024)</li>
            <li>NAVER Cloud Platform Certified Associate (2025)</li>
            <li>AWS Certified Cloud Practitioner (2025)</li>
            <li>NAVER Cloud Platform Certified Professional (2026)</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
