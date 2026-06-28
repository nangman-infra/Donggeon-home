"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, profile } from "@/content/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="hero-title">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ backgroundImage: "linear-gradient(215deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.04) 35%, rgba(37,99,235,0) 62%)" }}
      />
      <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-44">
      <motion.div
        initial={reduceMotion ? "show" : "hidden"}
        animate="show"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.p className="eyebrow" variants={reveal}>
          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          {hero.badge} · {profile.name}
        </motion.p>

        <motion.h1
          id="hero-title"
          className="mt-7 max-w-4xl text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900 sm:text-6xl lg:text-7xl"
          variants={reveal}
        >
          {hero.headline.lead}
          <br />
          <span className="text-brand">{hero.headline.accent}</span>
          {hero.headline.trail}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-slate-600 sm:text-xl"
          variants={reveal}
        >
          {profile.oneLiner}
        </motion.p>

        <motion.p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-slate-500" variants={reveal}>
          {profile.summary}
        </motion.p>

        <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={reveal}>
          {profile.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className={cta.variant === "primary" ? "btn-primary" : "btn-ghost"}
              {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {cta.label}
            </a>
          ))}
        </motion.div>

        <motion.dl
          className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 shadow-sm sm:grid-cols-3"
          variants={reveal}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-8">
              <dt className="text-4xl font-extrabold tracking-tight text-brand">{stat.value}</dt>
              <dd className="mt-2.5 text-sm leading-snug text-slate-500">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
      </div>
    </section>
  );
}
