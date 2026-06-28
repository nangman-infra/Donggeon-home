"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** 렌더링할 태그 (기본 div). section/article 등으로 의미 부여 */
  as?: "div" | "section" | "article" | "li";
  id?: string;
  "aria-labelledby"?: string;
};

const reveal = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

/**
 * 섹션 진입 시 살짝 올라오며 fade-in 되는 래퍼.
 * 과한 애니메이션 없이 한 번만 재생한다.
 */
export function SectionReveal({ children, className, delay = 0, as = "div", id, ...rest }: Readonly<SectionRevealProps>) {
  const MotionTag = motion[as] as ElementType;
  const reduceMotion = useReducedMotion();

  return (
    <MotionTag
      id={id}
      className={className}
      variants={reveal}
      initial={reduceMotion ? "show" : "hidden"}
      whileInView="show"
      // 살짝 들어오기만 해도 트리거 → 빠른 스크롤에서도 비어 보이지 않게
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
