"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const heroLines = ["AI Products", "that Move", "Real Work."];

const missions = [
  {
    title: "Orbit Browser Agent",
    label: "01 / Browser Agent",
    copy: "브라우징 맥락을 기억하고 중단된 업무 세션을 복원하는 개인 업무 에이전트입니다.",
  },
  {
    title: "Enterprise RAG Platform",
    label: "02 / Enterprise RAG",
    copy: "Qdrant, Hybrid Search, Reranking, Local LLM을 엮어 사내 지식을 답변 가능한 시스템으로 만듭니다.",
  },
  {
    title: "K8s Survival Camp",
    label: "03 / AI Training System",
    copy: "Chaos Engineering과 AI Tutor를 결합해 쿠버네티스 장애 대응을 훈련하는 제품형 플랫폼입니다.",
  },
];

const systems = [
  {
    title: "Orbit",
    type: "AI Browser Agent",
    problem: "웹 기반 업무는 탭, 검색, 문서, 로그인 상태가 흩어지면서 맥락을 잃기 쉽습니다.",
    approach: "브라우징 이벤트와 작업 의도를 세션 단위로 묶고, 다시 시작할 때 필요한 경로를 복원하도록 설계합니다.",
    outcome: "작업 재진입 비용을 낮추고 개인 지식 노동을 에이전트 경험으로 제품화합니다.",
  },
  {
    title: "Enterprise RAG",
    type: "Internal Knowledge System",
    problem: "규정 문서가 많아질수록 사용자는 검색 결과보다 판단에 필요한 근거를 원합니다.",
    approach: "벡터 검색, 키워드 검색, 재랭킹, 로컬 LLM을 결합해 답변과 출처를 함께 제공합니다.",
    outcome: "보안 요구가 있는 환경에서도 운영 가능한 사내 AI 검색 흐름을 검증합니다.",
  },
  {
    title: "Document Intelligence",
    type: "OCR Pipeline",
    problem: "반복되는 문서 확인과 정보 추출은 시간이 오래 걸리고 검증 흐름이 분리되기 쉽습니다.",
    approach: "OCR 결과를 구조화하고 사람이 확인할 수 있는 검수 화면과 API 흐름으로 연결합니다.",
    outcome: "문서 처리 자동화를 실제 업무에서 쓸 수 있는 제품 경험으로 바꿉니다.",
  },
];

const principles = [
  "사용자가 검증할 수 없는 AI 출력은 제품이 아니라 데모에 가깝습니다.",
  "스케일링보다 먼저 문제가 반복되고 있는지 확인합니다.",
  "배포는 마무리가 아니라 시스템이 현실을 배우기 시작하는 지점입니다.",
];

const lineReveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(14px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const beamY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div className="dalpha-page">
      <section className="dalpha-hero" id="hero">
        <motion.div className="hero-copy" initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
          <motion.p className="hero-kicker" variants={lineReveal}>
            임동건 / AI Product Engineer
          </motion.p>
          <h1 aria-label="AI Products that Move Real Work.">
            {heroLines.map((line) => (
              <motion.span key={line} variants={lineReveal}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p className="hero-summary" variants={lineReveal}>
            RAG, Agents, Browser Automation, Local LLM Infrastructure를 실제 제품 흐름으로 연결합니다.
            검색에서 추론, 인터페이스와 배포까지 작동하는 AI 시스템을 만듭니다.
          </motion.p>
          <motion.div className="hero-actions" variants={lineReveal}>
            <a href="#systems" className="button-primary">
              작업 보기
            </a>
            <a href="mailto:gunni6112@gmail.com" className="button-secondary">
              연락하기
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" aria-hidden="true" style={{ y: beamY }}>
          <div className="hero-visual__beam" />
          <div className="hero-visual__console">
            <span>runtime</span>
            <strong>retrieval to action</strong>
            <i />
          </div>
        </motion.div>
      </section>

      <section className="editorial-section" id="about">
        <p className="section-label">Approach</p>
        <h2>AI 제품은 모델을 붙이는 일이 아니라, 반복되는 문제를 실행 가능한 시스템으로 바꾸는 일입니다.</h2>
        <p>
          문서를 읽는 파이프라인에서 사내 지식을 검색하는 RAG, 브라우저에서 사용자의 작업 맥락을 복원하는 에이전트까지
          관심사는 하나입니다. 아이디어가 데모에서 멈추지 않고, 사용자가 검증하고 다시 사용할 수 있는 제품이 되도록 설계합니다.
        </p>
      </section>

      <section className="mission-section" id="focus">
        <div className="section-heading">
          <p className="section-label">Current Focus</p>
          <h2>현재 집중하는 제품 미션</h2>
        </div>
        <div className="mission-list">
          {missions.map((mission) => (
            <motion.article
              key={mission.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <span>{mission.label}</span>
              <h3>{mission.title}</h3>
              <p>{mission.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="systems-section" id="systems">
        <div className="section-heading section-heading--wide">
          <p className="section-label">Selected Systems</p>
          <h2>프로젝트 카드가 아니라, 문제에서 운영까지 이어지는 시스템 기록입니다.</h2>
        </div>
        <div className="system-list">
          {systems.map((system, index) => (
            <motion.article
              key={system.title}
              className="system-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="system-index">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <span>{system.type}</span>
                <h3>{system.title}</h3>
              </div>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{system.problem}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{system.approach}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{system.outcome}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="philosophy-section" id="philosophy">
        <p className="section-label">Engineering Philosophy</p>
        <div>
          {principles.map((principle) => (
            <p key={principle}>{principle}</p>
          ))}
        </div>
      </section>

      <section className="contact-hero" id="contact">
        <p className="section-label">Contact</p>
        <h2>쓸모 있는 AI 제품을 함께 만들고 싶습니다.</h2>
        <a href="mailto:gunni6112@gmail.com" className="button-primary">
          문의하기
        </a>
      </section>
    </div>
  );
}
