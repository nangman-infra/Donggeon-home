"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  const sections = [
    {
      id: "hero",
      title: "안녕하세요",
      subtitle: "동건입니다",
      description: "클라우드 엔지니어 | Devops | 솔루션 아키텍트",
    },
    {
      id: "about",
      title: "About Me",
      subtitle: "저를 소개합니다",
      description: "사용자 경험을 최우선으로 생각하는 개발자",
      link: "/about",
    },
    {
      id: "projects",
      title: "Projects",
      subtitle: "프로젝트 포트폴리오",
      description: "다양한 프로젝트 경험을 확인해보세요",
      link: "/projects",
    },
    {
      id: "blog",
      title: "Blog",
      subtitle: "기술 블로그",
      description: "개발 경험과 지식을 공유합니다",
      link: "/blog",
    },
    {
      id: "contact",
      title: "Contact",
      subtitle: "연락하기",
      description: "함께 일하고 싶으시다면 언제든 연락주세요",
      link: "/contact",
    },
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      e.preventDefault();

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // 아래로 스크롤
        isScrolling.current = true;
        setCurrentSection((prev) => prev + 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // 위로 스크롤
        isScrolling.current = true;
        setCurrentSection((prev) => prev - 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        isScrolling.current = true;
        setCurrentSection((prev) => prev + 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        isScrolling.current = true;
        setCurrentSection((prev) => prev - 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [currentSection, sections.length]);

  // 화면 크기 변경 시 현재 섹션으로 다시 스냅
  useEffect(() => {
    const handleResize = () => {
      // 리사이즈 시 현재 섹션 위치로 즉시 이동
      if (containerRef.current) {
        const container = containerRef.current.querySelector('.scroll-container') as HTMLElement;
        if (container) {
          container.style.transform = `translateY(-${currentSection * 100}vh)`;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSection]);

  return (
    <div ref={containerRef} className="fullpage-container">
      <motion.div
        animate={{ y: `-${currentSection * 100}vh` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="scroll-container"
      >
        {sections.map((section, index) => (
          <section
            key={section.id}
            className="fullpage-section px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: currentSection === index ? 1 : 0.3,
                y: currentSection === index ? 0 : 50,
              }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground mb-6">
                {section.title}
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {section.subtitle}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12">
                {section.description}
              </p>

              {section.link && (
                <Link
                  href={section.link}
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  자세히 보기 →
                </Link>
              )}

              {index === 0 && (
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/about"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    자기소개
                  </Link>
                  <Link
                    href="/projects"
                    className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    프로젝트 보기
                  </Link>
                </div>
              )}
            </motion.div>

            {/* 스크롤 인디케이터 */}
            {index < sections.length - 1 && currentSection === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8"
              >
                <svg
                  className="w-6 h-6 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            )}
          </section>
        ))}
      </motion.div>

      {/* 섹션 네비게이션 도트 */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSection === index
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to ${section.title}`}
          />
        ))}
      </div>
    </div>
  );
}
