"use client";

import { motion, useReducedMotion } from "framer-motion";

type FlowDiagramProps = {
  steps: string[];
  /** 접근성용 다이어그램 설명 */
  label?: string;
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const stepVariant = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

const railVariant = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.28, ease: "easeOut" } },
};

/**
 * 처리 흐름을 보여주는 세로 파이프라인.
 * 스크롤로 들어올 때 단계가 위→아래로 순차적으로 그려진다.
 * 단계 순서가 곧 정보이므로(실제 파이프라인) 순차 리빌은 장식이 아니라 의미가 있다.
 */
export function FlowDiagram({ steps, label = "처리 흐름도" }: Readonly<FlowDiagramProps>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ol
      className="relative flex flex-col gap-0"
      aria-label={label}
      variants={list}
      initial={reduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <motion.li key={step} className="relative flex gap-3 pb-4 last:pb-0" variants={stepVariant}>
            {!isLast && (
              <motion.span
                variants={railVariant}
                className="absolute left-[7px] top-5 h-full w-px origin-top bg-gray-200"
                aria-hidden="true"
              />
            )}
            <span
              className={`relative mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 bg-white ${
                isLast ? "border-brand" : "border-gray-300"
              }`}
              aria-hidden="true"
            />
            <span
              className={`text-sm leading-snug ${
                isLast ? "font-semibold text-brand" : "font-medium text-slate-700"
              }`}
            >
              {step}
            </span>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}
