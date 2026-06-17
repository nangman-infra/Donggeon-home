// 포트폴리오 콘텐츠 단일 소스.
// 모든 섹션 텍스트/데이터를 이 파일에서 관리한다. (회사 내부 정보는 익명화)

export type Cta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
};

export type Profile = {
  name: string;
  position: string;
  oneLiner: string;
  summary: string;
  keywords: string[];
  resumeUrl: string;
  ctas: Cta[];
};

export type Featured = {
  title: string;
  subtitle: string;
  problem: string;
  approach: string[];
  result: string[];
  tech: string[];
  flow: string[];
  scale: { label: string; value: string }[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  /** 프로젝트 전체 맥락에서 본인이 맡은 역할 */
  role?: string;
  contributions: string[];
  results?: string[];
  tech: string[];
  link?: string;
  /** 역할 구분 등 강조해서 분리해야 하는 주의 문구 */
  note?: string;
  /** 카드 상단에 한 줄로 읽히는 문제 정의 */
  problem?: string;
  featured: boolean;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  role: string;
};

export type Award = {
  title: string;
  detail?: string;
};

export type Activity = {
  title: string;
  points: string[];
};

export type Certification = string;

export type SkillGroup = {
  category: string;
  skills: string[];
};

// ---------------------------------------------------------------------------

// 이력서는 파일로만 보유 중 → 우선 /resume 페이지로 연결.
// 추후 외부 파일 URL(예: Drive/Notion/PDF)로 이 값만 교체하면 된다.
export const resumeUrl = "/임동건_이력서.pdf";

export const profile: Profile = {
  name: "임동건",
  position: "AI/AX Engineer",
  oneLiner: "AI 서비스를 제품 수준으로 구현하고 운영 환경까지 고려하는 엔지니어",
  summary:
    "RAG 기반 사내 AI 서비스부터 온프레미스 LLM 추론 환경, 폐쇄망 CI/CD까지 직접 구축합니다.",
  keywords: ["RAG Application", "On-premise LLM", "AI Infra", "DevOps / CI/CD"],
  resumeUrl,
  ctas: [
    { label: "프로젝트 보기", href: "#projects", variant: "primary" },
    { label: "GitHub 보기", href: "https://github.com/WhiteJbb", variant: "secondary", external: true },
    { label: "이력서 보기", href: resumeUrl, variant: "secondary", external: true },
  ],
};

// Hero: 장식 없이 가치 제안 + 근거 지표만. (사내 정보 익명화)
export type HeroStat = {
  value: string;
  label: string;
};

export const hero = {
  badge: "AI / AX Engineer",
  // 강조 단어(accent)는 컴포넌트에서 처리한다.
  headline: { lead: "AI를 데모가 아니라", accent: "제품", trail: "으로 만듭니다." },
  stats: [
    { value: "60+", label: "사내 사용자 대상 베타 운영" },
    { value: "100%", label: "온프레미스 추론 · 외부 API 0" },
    { value: "2편", label: "제1저자 학술 논문" },
  ] as HeroStat[],
};

export const about = {
  heading: "보안 요건이 있는 사내 환경에서\nRAG 기반 AI 서비스를 설계·개발하고,\n온프레미스 LLM 추론 환경을 구축해 온\nAI/AX Engineer입니다.",
  body:
    "인턴 기간 동안 약 60명 규모의 사내 규정 검색 AI Assistant를 요구사항 분석부터 설계·개발까지 단독 수행했고, 사내 폐쇄망 CI/CD 환경도 직접 구축했습니다. Hybrid Search 기반 RAG 파이프라인부터 Docker 실행 환경, Jenkins·GitLab 개발환경까지 직접 다루며 AI 서비스를 만들고 운영하는 경험을 함께 쌓고 있습니다.",
  capabilities: [
    { title: "RAG Application", desc: "Hybrid Search 기반 검색·답변 파이프라인 설계와 구현" },
    { title: "On-premise LLM", desc: "외부 API 없이 사내에서 LLM·임베딩을 추론하는 환경 구성" },
    { title: "AI Infra", desc: "Vector DB·LLM Serving·임베딩까지 추론 인프라 운영" },
    { title: "DevOps / CI/CD", desc: "폐쇄망 Jenkins·GitLab 기반 빌드·배포 파이프라인 구축" },
  ],
};

export const featured: Featured = {
  title: "사내 규정 검색 AI Assistant",
  subtitle: "약 60명 규모 사용자를 위한 RAG 기반 사내 문서 검색 플랫폼",
  problem:
    "사내 규정이 이미지 PDF로만 보관되어 약 60명의 직원이 필요한 조항을 제때 찾기 어려웠습니다. 사내 규정 문서를 외부에 노출할 수 없어 온프레미스 LLM 추론 환경을 직접 구축했습니다.",
  approach: [
    "이미지 PDF에서 텍스트를 추출해 검색 가능한 구조로 재구성",
    "의미 기반 검색과 키워드 검색을 결합한 Hybrid Search 파이프라인 구현",
    "검색 결과를 재정렬(Rerank)해 답변 근거 문서를 구성",
    "외부 API 없이 동작하도록 LLM·임베딩 모델을 사내에서 추론하는 온프레미스 환경 구성",
    "챗봇과 문서 열람·편집·버전관리를 포함한 통합 관리 화면 개발",
  ],
  result: [
    "실시간 응답·멀티턴 대화·답변 출처 표시까지 핵심 기능 구현 완료",
    "100% 사내 추론으로 동작",
    "현재 사내 약 60명 대상 베타 테스트 준비 단계",
  ],
  tech: ["Python", "FastAPI", "React", "Qdrant", "PostgreSQL", "Docker", "LLM Serving", "Hybrid Search", "RAG"],
  flow: [
    "이미지 PDF",
    "텍스트 추출 / 구조화",
    "검색 인덱싱",
    "Hybrid Search",
    "RAG 답변",
    "통합 문서 관리",
  ],
  scale: [
    { label: "사용자", value: "약 60명" },
    { label: "운영 환경", value: "온프레미스" },
    { label: "외부 API 호출", value: "0" },
  ],
};

export const projects: Project[] = [
  {
    id: "federated-learning-testbed",
    title: "Federated Learning Testbed & Real Device Validation",
    description: "이질적 연합학습 환경을 위한 Docker 및 실디바이스 기반 실험 플랫폼",
    year: "2026",
    category: "Federated Learning",
    problem:
      "성능이 제각각인 디바이스로 구성된 이질적 연합학습 환경을 표준화된 방식으로 실험·검증할 수단이 없었습니다.",
    contributions: [
      "Docker 기반 Heterogeneous Client 환경을 구성하여 CPU/Memory 성능이 다른 클라이언트 시뮬레이션",
      "Raspberry Pi·노트북 등 실제 디바이스 환경에서도 이질적 클라이언트 학습 과정 검증",
      "Flower 기반 Federated Learning 파이프라인 개발 및 실험 자동화",
      "BWA 알고리즘 구현 및 PPO 기반 동적 배치 크기 최적화",
      "ADM 알고리즘 구현으로 클라이언트 성능에 따른 데이터 사용량 조절",
    ],
    results: ["정확도 52.77% → 55.47% 개선", "학습 시간 21.3% 단축"],
    tech: ["Python", "PyTorch", "Flower", "Docker", "Docker Compose", "Raspberry Pi", "CIFAR-10"],
    featured: true,
  },
  {
    id: "afterfail",
    title: "AfterFail",
    description: "Chaos Engineering 기반 Kubernetes 장애 대응 훈련 플랫폼",
    year: "2025",
    category: "Platform / Frontend",
    role: "프로젝트 총괄(PM) 및 프론트엔드 개발",
    problem:
      "Kubernetes 장애 대응은 실제 장애 상황을 안전하게 재현할 환경이 없으면 훈련하기 어렵습니다.",
    contributions: [
      "기획, 일정, 역할 분담, 서비스 통합 및 최종 발표 진행",
      "React·TypeScript 기반 사용자 인터페이스와 미션 진행 화면 개발",
      "랭킹·업적 시스템 등 프론트엔드 전반 구현",
      "xterm.js 기반 웹 터미널 구축으로 브라우저에서 kubectl 실습이 가능한 환경 구현",
      "Docker 기반 개발환경과 실행 자동화 스크립트 작성, 팀원의 개발환경 구축 과정 표준화",
    ],
    tech: ["React", "TypeScript", "xterm.js", "Docker"],
    note:
      "플랫폼은 Chaos Mesh 기반 장애 주입, RAG 기반 AI Tutor, Kubernetes Namespace 격리 구조로 구성되었으며, 해당 영역(Chaos Mesh 장애 주입·AI Tutor·Kubernetes 핵심 구현)은 팀원이 담당했습니다. 본인은 PM과 프론트엔드 개발을 맡았습니다.",
    featured: true,
  },
  {
    id: "when2work",
    title: "When2Work",
    description: "팀원 일정을 모아 최적의 만남 시간을 찾아주는 웹 서비스",
    year: "2025",
    category: "Web Service",
    link: "https://when2work.whitejbb.cloud",
    problem: "여러 명의 가능한 시간을 모아 최적의 만남 시간을 찾는 과정이 번거로웠습니다.",
    contributions: [
      "날짜·시간 범위 설정, 드래그 기반 시간 선택, 히트맵 결과 시각화 기능 개발",
      "참여자 응답을 분석해 최적 시간대를 자동 추천하는 추천 알고리즘 구현",
      "Supabase 기반 실시간 데이터 동기화 및 방 자동 삭제 기능 적용",
      "GitHub Actions 기반 자동 배포 파이프라인 구성",
    ],
    results: ["스터디·캡스톤 팀에서 실사용 중인 운영형 웹 서비스"],
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "GitHub Actions"],
    featured: false,
  },
  {
    id: "budgetly",
    title: "Budgetly",
    description: "OCR 기반 조직 예산 관리 플랫폼",
    year: "2024",
    category: "Document AI",
    problem: "조직의 영수증·예산 처리를 수기로 관리하기 번거롭고 실수가 잦았습니다.",
    contributions: [
      "Azure Document Intelligence로 영수증을 자동 인식하는 예산 관리 PWA 개발",
      "Vue.js 기반 프론트엔드 개발 및 예산 현황 대시보드 UI 구성",
      "Firebase 인증·DB 연동 및 AWS EC2 기반 배포",
    ],
    results: ["소중한 오픈소스 활용 SW 경진대회 1등, 총장상 수상"],
    tech: ["Vue.js", "FastAPI", "Firebase", "Azure Document Intelligence", "OpenCV", "AWS EC2"],
    featured: true,
  },
];

export const publications: Publication[] = [
  {
    title: "이질적 연합학습을 위한 도커 기반 테스트베드 구축 및 BWA·ADM 기법 성능 검증",
    authors: "임동건 외 2명",
    venue: "한국통신학회 동계종합학술대회, 2026",
    role: "제1저자",
  },
  {
    title: "쿠버네티스 기반 연합학습 및 스플릿 컴퓨팅의 최신 연구 동향",
    authors: "임동건 외 4명",
    venue: "한국통신학회 추계종합학술대회, 2025",
    role: "제1저자",
  },
];

export const awards: Award[] = [
  { title: "소중한 오픈소스 활용 SW 경진대회 1등, 총장상" },
  { title: "CEDC 2025 Bronze Award" },
  { title: "KRAFTON Jungle 웹개발 집중캠프 3기 우수 수료생" },
];

export const activities: Activity[] = [
  {
    title: "낭만인프라 클라우드 인프라 스터디 — Ops 담당",
    points: [
      "Jenkins 기반 CI/CD 파이프라인 설계·구축",
      "스터디원 11명의 프로젝트에 공유 적용",
      "멤버별 독립 파이프라인 구성 및 배포 환경 운영 관리",
    ],
  },
];

export const education = {
  school: "국립한밭대학교 컴퓨터공학과",
  detail: "학사 재학 중",
};

export const certifications: Certification[] = [
  "TOEIC 860",
  "NAVER Cloud Platform Certified Professional",
  "NAVER Cloud Platform Certified Associate",
  "AWS Certified Cloud Practitioner",
  "정보처리기능사",
];

export const techStack: SkillGroup[] = [
  {
    category: "AI / ML",
    skills: ["LLM Application", "RAG", "Hybrid Search", "Vector Search", "Federated Learning", "Prompt Engineering"],
  },
  { category: "AI Infra", skills: ["LLM Serving(vLLM, Ollama)", "Vector Database", "Embedding Model"] },
  { category: "Backend", skills: ["Python", "FastAPI", "REST API", "SSE", "PostgreSQL"] },
  { category: "Frontend", skills: ["React", "TypeScript", "JavaScript", "Vue.js", "Next.js"] },
  {
    category: "Infra / DevOps",
    skills: ["Docker", "Docker Compose", "Jenkins", "GitLab", "Nexus", "SonarQube", "GitHub Actions"],
  },
  { category: "Cloud", skills: ["AWS", "NAVER Cloud Platform"] },
];

export const contact = {
  email: "gunni6112@gmail.com",
  github: "https://github.com/WhiteJbb",
  githubLabel: "github.com/WhiteJbb",
  website: "https://donggeon.nangman.cloud",
  websiteLabel: "donggeon.nangman.cloud",
  location: "대전, 대한민국",
};
