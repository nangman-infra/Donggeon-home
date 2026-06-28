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

/** 라벨이 붙은 외부 링크 (저장소가 여러 개일 때 사용) */
export type ProjectLink = { label: string; href: string };

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
  /** 배포된 데모/서비스 링크 */
  link?: string;
  /** GitHub 저장소 링크. 문자열 하나, 또는 라벨 있는 여러 개. */
  github?: string | ProjectLink[];
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
  position: "AI Product Engineer",
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
  badge: "AI Product Engineer",
  // 강조 단어(accent)는 컴포넌트에서 처리한다.
  headline: { lead: "AI를 데모가 아니라", accent: "제품", trail: "으로 만듭니다." },
  stats: [
    { value: "60+", label: "사내 사용자 대상 베타 운영" },
    { value: "100%", label: "온프레미스 추론 · 외부 API 0" },
    { value: "2편", label: "제1저자 학술 논문" },
  ] as HeroStat[],
};

export const about = {
  heading: "요구사항부터 운영까지 단독으로\nRAG 기반 AI 서비스를 설계·구현하고\n온프레미스 LLM 환경을 직접 구축해 온\nAI Product Engineer입니다.",
  body:
    "인턴 기간 동안 약 60명 규모의 사내 규정 검색 AI Assistant를 요구사항 분석부터 설계·개발·배포까지 단독으로 수행했습니다. LangChain 없이 RAG 파이프라인 전체를 직접 구현하고, 사내 파일 검색 AI Agent까지 연이어 개발하며 실제 사용자가 쓰는 AI 서비스를 처음부터 끝까지 만드는 경험을 쌓았습니다.",
  capabilities: [
    { title: "AI 서비스 설계", desc: "요구사항 분석부터 API 설계·배포까지 AI 서비스 전 과정 단독 수행" },
    { title: "RAG Application", desc: "Hybrid Search 기반 검색·답변 파이프라인 직접 설계와 구현" },
    { title: "On-premise LLM", desc: "외부 API 없이 사내에서 LLM·임베딩을 추론하는 환경 구성" },
    { title: "AI Infra / DevOps", desc: "Vector DB·LLM Serving부터 폐쇄망 CI/CD 파이프라인까지 구축" },
  ],
};

export const featured: Featured[] = [
  {
    title: "사내 규정 검색 AI Assistant",
    subtitle: "약 60명 규모 사용자를 위한 온프레미스 RAG 챗봇 및 관리자 시스템",
    problem:
      "규정 문서가 방대해 필요한 조항을 빠르게 찾고 정확히 이해하기 어려웠습니다. 사내 정보를 외부 API에 전송할 수 없어 온프레미스 LLM 환경을 직접 구축했고, 조항 단위 제어가 필요해 RAG 파이프라인 전체를 직접 구현했습니다.",
    approach: [
      "청킹·검색·재랭킹·프롬프트 구성을 LangChain 없이 전부 직접 구현",
      "HTML 제목 태그·'제N조' 패턴 기반 조항 단위 도메인 특화 청킹으로 조항 중간 절단 방지",
      "메타데이터 포함 임베딩과 필드별 가중치 기반 경량 재랭커로 GPU 추가 비용 없이 정확도 향상",
      "55개 실 사용자 쿼리 벤치마크로 Dense 단독 채택 결정, Hybrid RRF는 Sparse 노이즈로 MRR 하락 확인",
      "검색 결과 없으면 LLM을 호출하지 않고 고정 문구 반환으로 환각 원천 차단",
      "문서 CRUD·버전 관리·소프트 삭제·롤백·자동 백업/복구 포함 관리자 시스템 구현",
    ],
    result: [
      "Hit@8 98.2%, MRR@8 82.3% 달성",
      "온프레미스 100% 추론, 외부 API 호출 0",
      "약 60명 대상 베타 테스트 준비 단계",
    ],
    tech: ["Python", "FastAPI", "React", "Qdrant", "PostgreSQL", "Nexus", "Docker", "vLLM", "BGE-M3", "SSE"],
    flow: [
      "질문 입력",
      "쿼리 재작성",
      "Dense 벡터 검색",
      "필드별 재랭킹",
      "RAG 답변 (SSE)",
      "출처 표시",
    ],
    scale: [
      { label: "사용자", value: "약 60명" },
      { label: "운영 환경", value: "온프레미스" },
      { label: "Hit@8", value: "98.2%" },
    ],
  },
  {
    title: "사내 파일 검색 AI Agent",
    subtitle: "자연어로 공유폴더 업무 문서를 탐색하는 LangGraph 기반 하이브리드 검색 에이전트",
    problem:
      "사내 공유폴더 업무 산출물을 자연어로 검색할 수단이 없었습니다. 한국어 파일명은 임베딩 모델이 처리하지 못해 초기 Hit@5는 11%에 불과했습니다.",
    approach: [
      "LangGraph 5-노드 워크플로우 설계, 인프라 장애 시 해당 노드만 디그레이드되는 Graceful Degradation 적용",
      "벡터(BGE-M3) + BM25 + 파일명 메타 검색을 RRF로 결합한 Hybrid Search 파이프라인 구현",
      "Qdrant Payload Text Index 미생성으로 BM25가 항상 0건 반환되던 근본 원인 규명 및 수정",
      "메타 검색 전용 불용어 필터와 키워드 매치 비율 기반 점수 계산, DB 정렬 버그 수정으로 검색 정확도 개선",
      "Hit@5·MRR@5·P@5 정량 측정 스크립트 직접 설계, 수치 기반 반복 개선",
      "HWP·PPTX·XLSX·이미지 등 13개 확장자 파서 구현",
    ],
    result: [
      "Hit@5 11% → 100%, MRR@5 100% 달성",
      "사내 실무 파일 325개 전체 인덱싱 성공",
      "vector·hybrid·bm25·agent 4가지 검색 모드 Hit@K·MRR·P@K 벤치마크 자동화",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "LangChain", "Qdrant", "PostgreSQL", "BGE-M3", "BM25", "RRF", "Docker"],
    flow: [
      "자연어 쿼리",
      "의도 분석",
      "메타 검색",
      "벡터 / BM25 검색",
      "RRF 결합",
      "스니펫 + 파일 경로 반환",
    ],
    scale: [
      { label: "운영 환경", value: "사내 온프레미스" },
      { label: "인덱싱 파일", value: "325개" },
      { label: "Hit@5 개선", value: "11% → 100%" },
    ],
  },
];

export const projects: Project[] = [
  // --- featured: AI/AX Engineer 포지셔닝 기준 상위 3개 ---
  {
    id: "local-rag-pipeline",
    title: "로컬 RAG 파이프라인 — 사내 문서 QA 챗봇",
    description:
      "PDF·PPTX·MD 규정 문서를 인덱싱하고 자연어로 질문하면 근거 출처와 함께 답변하는 완전 로컬 RAG 챗봇. 외부 API 없이 Ollama + Qdrant로 동작.",
    year: "2026",
    category: "RAG / LLM",
    problem:
      "사내 규정 문서를 외부 API에 전송할 수 없는 환경에서, 직원들이 필요한 조항을 빠르게 찾기 어려웠습니다.",
    contributions: [
      "PDF·PPTX·MD용 document_loader 설계, 150자 미만 청크 병합·800자 초과 재분할로 소형 청크 81개 → 0개 제거",
      "유사도 임계값 미달 시 LLM 미호출로 할루시네이션을 차단하는 LangChain LCEL RAG 체인 구성",
      "Chainlit 웹 UI 및 CLI 양쪽 인터페이스 구현, 답변마다 파일명·페이지/섹션 출처 표시",
      "Docker Compose로 Qdrant 컨테이너화, Ollama 로컬 모델(gemma4:e2b)과 연동",
      "한국어(ko-sroberta-multitask)·다국어(multilingual-e5-large) 임베딩 교체 실험 및 벤치마크 비교",
    ],
    results: [
      "완전 로컬 동작 (외부 API 호출 0)",
      "어댑티브 청킹으로 평균 청크 품질 개선 (평균 280자 → 442자)",
    ],
    tech: [
      "Python",
      "LangChain",
      "Qdrant",
      "Ollama",
      "ChromaDB",
      "Chainlit",
      "Streamlit",
      "Docker Compose",
      "ko-sroberta-multitask",
    ],
    github: [
      { label: "local-rag-policy-chat", href: "https://github.com/WhiteJbb/local-rag-policy-chat" },
      { label: "Rag-Test (프로토타입)", href: "https://github.com/WhiteJbb/Rag-Test" },
    ],
    featured: true,
  },
  {
    id: "xcore-file-agent",
    title: "사내 파일 검색 AI Agent",
    description:
      "자연어로 사내 공유폴더 파일을 탐색하는 LangGraph 기반 에이전트. 파일명·경로 메타 검색과 벡터/BM25를 RRF로 결합한 Hybrid Search로 Hit@5 11% → 100%를 달성했습니다.",
    year: "2026",
    category: "RAG / AI Agent",
    problem:
      "사내 공유폴더의 업무 산출물을 정확한 파일명 없이 자연어로 찾기 어려웠습니다. 한국어 파일명은 임베딩 모델이 잘 처리하지 못해 파일명 메타 검색과 내용 검색을 별도로 결합하는 구조가 필요했습니다.",
    contributions: [
      "LangGraph 5-노드 워크플로우 설계, 인프라 장애 시 해당 노드만 디그레이드되는 Graceful Degradation 적용",
      "벡터(BGE-M3 1024차원) + BM25 + 파일명·경로 ILIKE 메타 검색을 RRF로 결합하는 Hybrid Search 파이프라인 구현",
      "메타 검색 전용 불용어 필터 및 키워드 매치 비율 기반 점수 계산 도입",
      "Qdrant Payload Text Index 미생성으로 BM25가 항상 0건 반환되던 원인 규명 후 MULTILINGUAL 토크나이저로 수정",
      "HWP(hwp5txt subprocess)·PPTX·XLSX·이미지(EXIF + 파일명 텍스트화) 등 13개 확장자 파서 구현, 스캐너·로더 확장자 목록을 SUPPORTED_EXTENSIONS 단일 변수로 통일",
      "Hit@K·MRR@K·P@K 정량 측정 스크립트 작성, 12개 실파일 기반 쿼리로 모드별 벤치마크 자동화",
    ],
    results: [
      "vector/hybrid Hit@5 11% → 100%, MRR@5 100% 달성",
      "레이턴시 p50: vector 2.1s · hybrid 2.2s · agent 5.6s",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Qdrant",
      "PostgreSQL",
      "BGE-M3",
      "BM25",
      "Hybrid Search",
      "RRF",
      "Docker",
    ],
    featured: false,
  },
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
    github: [
      { label: "논문 Testbed", href: "https://github.com/2026-Feb-Winter-Institute/FL" },
      { label: "전공 프로젝트", href: "https://github.com/Hanbat-IoT/Lab2" },
    ],
    featured: true,
  },
  {
    id: "work-agent",
    title: "work-agent — 개인 생산성 자동화 CLI",
    description:
      "Obsidian Vault를 AI 작업 맥락 저장소로 삼아 생산성 작업을 멀티 LLM으로 자동화하는 개인 CLI.",
    year: "2026",
    category: "LLM / DevTool",
    problem:
      "매일의 작업 흔적이 여러 곳에 흩어져 블로그·포트폴리오·이력서로 정리되지 않는 문제를 해결하고 싶었습니다.",
    contributions: [
      "task_type별 멀티 LLM 라우팅 + FallbackChain 설계, Gemini·GPT-4.1-mini·Kimi·Ollama 중 최적 provider 자동 선택 및 장애 시 폴백",
      "Obsidian Vault 기반 Capture → Distill → Curate → Generate → Deliver 5단계 파이프라인 구성",
      "Capture·Distill·WikiBlog·CareerBullet·NightlyDistill 등 15개 LLM 파이프라인 모듈 구현",
      "Telegram 봇 통합, URL 전송 시 자동 캡처 + LLM 요약을 포함한 전체 기능 메신저 접근 지원",
      "Textual TUI 대시보드 구현(21KB), Windows용 자동 설치 스크립트(install.ps1) 작성",
      "야간·주간 자동화 스케줄 구성 및 Telegram 알림 연동",
      "pytest suite 작성, Vault·LLM·메신저를 mock으로 분리해 API 키 없이 테스트 가능",
    ],
    tech: [
      "Python",
      "Gemini API",
      "OpenAI API",
      "Ollama",
      "Kimi API",
      "Telegram Bot API",
      "Textual",
      "Obsidian",
      "pytest",
    ],
    results: [
      "현재 매일 실사용 중 (아이디어·작업 기록 캡처·지식 정제 자동화)",
      "개인 LLM wiki + productivity agent로 지속 확장 중",
    ],
    github: "https://github.com/WhiteJbb/work-agent",
    featured: true,
  },
  // --- non-featured: AI/AX Engineer 포지셔닝 순 ---
  {
    id: "kisa-unix-check",
    title: "KISA UNIX 서버 취약점 자동 점검 스크립트",
    description:
      "KISA 2026 가이드 기반 67개 보안 항목을 자동 점검하고, 인터랙티브 체크리스트를 포함한 반응형 HTML 리포트를 생성하는 Shell 스크립트.",
    year: "2026",
    category: "Security / Shell",
    problem:
      "KISA 취약점 가이드 67개 항목을 수동으로 점검하면 누락이 생기고 결과를 문서화하기 번거로웠습니다.",
    contributions: [
      "계정관리·파일권한·서비스·패치·로그 관리 5개 분류, 67개 항목(중요도 상/중/하) 완전 자동 점검 구현",
      "SSH 설정 다중 파일(sshd_config.d/*.conf) 검사, 심볼릭 링크 실제 파일 권한 추적, 숫자·문자열 권한 형식 모두 지원",
      "인터랙티브 체크리스트(U-01~U-67)·취약 항목 자동 조치 가이드 포함 반응형 HTML 리포트 생성",
      "Rocky Linux / CentOS / RHEL / Ubuntu / Debian 5개 OS 지원",
    ],
    tech: ["Shell (Bash)", "HTML", "Linux", "systemd", "KISA 2026"],
    github: "https://github.com/WhiteJbb/Kisa_unix_check",
    featured: false,
  },
  {
    id: "oracle-schema-drift",
    title: "Oracle 스키마 드리프트 검증 시스템",
    description:
      "운영 DB와 테스트 DB 간 12개 스키마 요소를 자동 검증해 배포 전 불일치를 조기 발견하는 Spring Boot 기반 시스템.",
    year: "2026",
    category: "Backend / DB",
    problem:
      "운영·테스트 Oracle DB 간 스키마가 조용히 어긋나 배포 후 장애가 발생하는 문제를 사전에 차단할 수단이 없었습니다.",
    contributions: [
      "Docker Compose로 Oracle XE 이중 컨테이너(포트 1521/1522) 환경 구성",
      "PK·FK·UNIQUE·NOT NULL·인덱스·시퀀스·뷰·트리거·패키지·칼럼 길이·순서 등 12개 스키마 검증 항목 구현",
      "읽기 전용 schema_checker 계정(SELECT ANY DICTIONARY) 설계로 프로덕션 데이터 접근 최소화",
      "뷰·트리거·패키지 검증 시 환경별 스키마명 정규화 처리로 오탐 방지",
      "JUnit 5 + AssertJ 기반 테스트 파일 13개 작성, ✅/❌ 시각적 차이 리포트 출력",
    ],
    results: [
      "12개 스키마 요소 자동 검증으로 배포 전 불일치 100% 감지",
      "GitHub Actions 통합 예시 포함",
    ],
    tech: ["Java 17", "Spring Boot 3.2", "Oracle XE 21c", "JUnit 5", "AssertJ", "Gradle", "Docker Compose"],
    github: "https://github.com/WhiteJbb/Oracledb",
    featured: false,
  },
  {
    id: "drone-delivery-pwa",
    title: "드론 배송 시스템 PWA",
    description:
      "Parrot Anafi 드론을 WiFi로 연결해 실시간 상태를 모니터링하고 웨이포인트 기반 자동 배송 미션을 실행하는 Next.js 14 PWA.",
    year: "2025",
    category: "Embedded / Web",
    problem:
      "드론 제어 SDK가 Linux 전용이고, 웹에서 실시간으로 드론 상태를 확인하며 배송 미션을 지시하는 통합 인터페이스가 없었습니다.",
    contributions: [
      "Next.js 14 App Router 기반 PWA 프론트엔드 개발, 드론 연결·배송 요청·실시간 현황 3개 화면 구현",
      "Python Flask REST API 서버 작성, Parrot Olympe SDK와 연동해 이륙·착륙·위치 이동·자동 미션 엔드포인트 제공",
      "WSL2 환경에서 Linux 전용 Olympe SDK를 Windows에서 실행하는 개발 환경 구성 가이드(QUICKSTART_WINDOWS.md) 작성",
      "PWA manifest 설정으로 모바일 홈 화면 설치 지원",
    ],
    tech: ["Next.js 14", "TypeScript", "React 18", "Python", "Flask", "Parrot Olympe SDK", "PWA"],
    github: "https://github.com/DroneDelivery2/Embedded_PJ",
    note: "Parrot Anafi 드론 하드웨어와 Olympe SDK를 팀 공유 자산으로 활용했습니다.",
    featured: false,
  },
  {
    id: "high-school-c-archive",
    title: "고등학교 C 프로젝트 웹 터미널 아카이브",
    description:
      "고등학교 때 만든 C/C++ 콘솔 프로그램 9개를 Emscripten으로 WebAssembly 변환해 브라우저에서 실행 가능하게 복원한 아카이브.",
    year: "2026",
    category: "C / WebAssembly",
    problem:
      "오래된 C 프로젝트들이 로컬 빌드 환경 없이는 실행이 불가능해, 누구나 바로 체험할 수 있는 형태로 보존하고 싶었습니다.",
    contributions: [
      "C/C++ 콘솔 프로그램 9개를 Emscripten으로 WebAssembly 변환, 플랫폼 의존 코드만 최소 수정으로 원본 동작 보존",
      "공통 웹 터미널 입출력 래퍼(archive_terminal.h) 설계로 프로젝트별 이식 코드 최소화",
      "단일 HTML 파일(23KB)로 사이드바·Run/Reset·인터랙티브 터미널 포함 웹 터미널 UI 구현",
      "text-rpg-game에 IndexedDB 세이브 연동으로 새로고침 후에도 캐릭터 상태 유지",
      "GitHub Actions CI/CD 구성, push 시 전체 프로젝트 빌드 후 GitHub Pages 자동 배포",
      "커스텀 도메인(c-archive.whitejbb.cloud) 연결 및 CNAME 설정",
    ],
    tech: ["C", "C++", "Emscripten", "WebAssembly", "HTML/CSS/JS", "GitHub Actions", "GitHub Pages"],
    github: "https://github.com/WhiteJbb/high-school-c-archive",
    link: "https://c-archive.whitejbb.cloud",
    featured: false,
  },
  {
    id: "when2work",
    title: "When2Work — 팀 일정 조율 웹 서비스",
    description:
      "팀원들의 가능한 시간을 드래그로 입력받아 히트맵으로 시각화하고 최적 미팅 시간을 자동 추천하는 React 웹 앱.",
    year: "2026",
    category: "Web Service",
    link: "https://when2work.whitejbb.cloud",
    github: "https://github.com/WhiteJbb/When2Work",
    problem: "여러 명의 가능한 시간을 모아 최적의 만남 시간을 찾는 과정이 번거롭고 수작업이 많았습니다.",
    contributions: [
      "Supabase PostgreSQL 스키마 및 RLS 정책 설계, 인증 없이 생성자 토큰으로 소유권 관리",
      "pg_cron 기반 10일 경과 방 자동 삭제 구성",
      "30분 단위 사각형 드래그 선택 + 자동 스크롤 TimeGrid 컴포넌트 구현",
      "timeUtils.js에서 슬롯 생성·히트맵 분석·최적 시간 탐색 알고리즘 직접 구현, 겹치는 시간대 점수화로 ★ 추천",
      "EmailJS 인앱 피드백 모달, 다크/라이트 모드(localStorage), 최근 방문 방 목록 관리 구현",
      "GitHub Actions + GitHub Pages 자동 배포, 커스텀 도메인(when2work.whitejbb.cloud) 연결",
    ],
    results: ["스터디·캡스톤 팀에서 실사용 중인 운영형 웹 서비스"],
    tech: ["React 18", "Vite", "Tailwind CSS", "Supabase", "EmailJS", "GitHub Actions"],
    featured: false,
  },
  {
    id: "budgetly",
    title: "Budgetly",
    description: "Azure Document Intelligence를 활용한 조직 예산 관리 플랫폼",
    year: "2025",
    category: "Document AI",
    problem: "조직의 영수증·예산 처리를 수기로 관리하기 번거롭고 실수가 잦았습니다.",
    contributions: [
      "Vue.js 기반 프론트엔드 개발 및 예산 현황 대시보드 UI 구성",
      "Firebase 인증·DB 연동 및 AWS EC2 기반 배포",
    ],
    results: ["소중한 오픈소스 활용 SW 경진대회 1등, 총장상 수상"],
    tech: ["Vue.js", "Firebase", "Azure Document Intelligence", "AWS EC2"],
    github: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
    note: "OCR 기반 영수증 인식(Azure Document Intelligence) 구현은 팀원이 담당했습니다. 본인은 Vue.js 프론트엔드와 Firebase·AWS EC2 배포를 맡았습니다.",
    featured: false,
  },
  {
    id: "afterfail",
    title: "AfterFail",
    description: "Chaos Engineering 기반 Kubernetes 장애 대응 훈련 플랫폼",
    year: "2026",
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
    github: "https://github.com/why-server-down/cloud-trouble-training-service",
    note:
      "플랫폼은 Chaos Mesh 기반 장애 주입, RAG 기반 AI Tutor, Kubernetes Namespace 격리 구조로 구성되었으며, 해당 영역(Chaos Mesh 장애 주입·AI Tutor·Kubernetes 핵심 구현)은 팀원이 담당했습니다. 본인은 PM과 프론트엔드 개발을 맡았습니다.",
    featured: false,
  },
  {
    id: "dev-card-hunter",
    title: "DEV CARD HUNTER",
    description:
      "개발자 관련 사이트 방문 시 자동으로 사이트 로고 카드를 획득하는 Chrome Extension + 게임화 웹 앱.",
    year: "2025",
    category: "Chrome Extension / Frontend",
    problem:
      "개발자들이 다양한 기술 사이트를 탐색하는 행동에 수집·성장의 재미를 부여할 방법이 필요했습니다.",
    contributions: [
      "Chrome Extension Manifest V3 구현, Content Script로 개발 사이트 방문 감지 및 Background Service Worker로 카드 획득 처리",
      "Vanilla JS ES6 모듈 시스템으로 StampBookApp·DataManager·StampBook·Collection·Synthesis 5개 클래스 구조 설계",
      "Common/Rare/Epic/Legendary 4단계 희귀도, 7개 카테고리(BACKEND·FRONTEND·DEVOPS·AI 등) 카드 시스템 구현",
      "동일 카드 5장 합성으로 상위 등급 생성하는 오각형 5-슬롯 합성 UI 구현",
      "JWT 인증·OAuth2 로그인 연동, 카드 획득 시 실시간 팝업 알림",
    ],
    tech: [
      "Vanilla JS (ES6 Modules)",
      "HTML5",
      "CSS3",
      "Chrome Extension (Manifest V3)",
      "RESTful API",
      "JWT",
      "OAuth2",
    ],
    github: [
      { label: "frontEnd", href: "https://github.com/2025-Kraftonweek2-401-7/frontEnd" },
      { label: "backEnd", href: "https://github.com/2025-Kraftonweek2-401-7/backEnd" },
    ],
    note: "백엔드(Java Spring Boot) 구현은 팀원이 담당했습니다. 본인은 Chrome Extension과 웹 프론트엔드를 맡았습니다.",
    featured: false,
  },
  {
    id: "laundry-room-status",
    title: "기숙사 세탁실 실시간 현황 시스템",
    description:
      "정글캠퍼스 기숙사 세탁기·건조기 사용 현황을 실시간 타이머와 함께 보여주고 사용 등록·중지를 관리하는 웹 앱.",
    year: "2025",
    category: "Web Service",
    role: "Full-Stack 개발 (3인 팀)",
    problem:
      "기숙사 세탁기·건조기가 비어 있는지 확인하려면 직접 세탁실까지 가야 했습니다.",
    contributions: [
      "ES6 모듈 기반 프론트엔드 아키텍처 설계, WasherState·WasherEvent·WasherUI·request 4개 모듈로 관심사 분리",
      "Python Flask REST API 및 MongoDB 데이터 접근 계층(status_dao) 구현",
      "페이지 새로고침 후 진행 중인 세탁·건조 상태를 서버에서 복원하는 타이머 재시작 로직 구현",
      "드럼 회전 CSS 애니메이션, 상태별 색상(사용가능/사용중/점검중) 구분 UI 제작",
    ],
    tech: ["Python", "Flask", "MongoDB", "Vanilla JS (ES6 Modules)", "Bootstrap 5", "jQuery"],
    github: "https://github.com/2025-Krafton-401-6/Only_My_Web",
    featured: false,
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

// ---------------------------------------------------------------------------
// 화면 머리말 문구 (eyebrow · title · desc).
// 데이터(projects/awards 등)와 분리해, 화면에 보이는 "제목 문구"는 전부 여기서 수정한다.
// ---------------------------------------------------------------------------

// 홈 화면 각 섹션의 머리말. (본문 데이터는 위 about/featured/projects 등에서 관리)
export const sectionHeaders = {
  about: { eyebrow: "About" },
  featured: { eyebrow: "Featured Work" },
  projects: {
    eyebrow: "Projects",
    title: "프로젝트",
    allLink: "전체 프로젝트 보기",
  },
  publications: { eyebrow: "Research / Publications", title: "논문" },
  awards: { eyebrow: "Awards & Activities", title: "수상 · 활동 · 이력" },
  techStack: {
    eyebrow: "Tech Stack",
    title: "기술 스택",
    desc: "실제 프로젝트에서 직접 다뤄 본 기술을 정리했습니다.",
  },
  contact: {
    eyebrow: "Contact",
    title: "함께 만들 것이 있다면",
    desc: "채용이나 협업 제안 환영합니다. 어떤 일인지 짧게 적어주시면 빠르게 답변드릴게요.",
  },
};

// 서브페이지(/about, /projects 등) 상단 헤더 머리말.
export const pageHeaders = {
  about: {
    eyebrow: "About",
    title: "AI 서비스를 처음부터 끝까지 직접 만들어 온 AI Product Engineer",
    desc: "모델을 붙이는 데서 끝내지 않고, 사용자가 실제로 쓰는 AI 서비스를 설계부터 운영까지 고려합니다.",
  },
  projects: {
    eyebrow: "Projects",
    title: "문제 · 해결 · 성과로 정리한 전체 프로젝트",
    desc: "기술 나열이 아니라 실제로 맡은 역할과 해결한 문제 중심으로 정리했습니다.",
  },
  contact: {
    eyebrow: "Contact",
    title: "AI 서비스 개발과 운영에 대해 이야기하고 싶다면",
    desc: "채용이나 협업 제안 모두 환영합니다. 어떤 일인지 간단히 적어주시면 빠르게 확인하겠습니다.",
  },
  resume: {
    eyebrow: "Resume",
    title: "임동건 · AI Product Engineer",
    desc: "RAG 기반 사내 AI 서비스를 요구사항부터 운영까지 직접 구축해 온 이력입니다.",
  },
  blog: {
    eyebrow: "Learning Notes",
    title: "직접 경험하며 정리한 기술 노트",
    desc: "공부하다 막혔던 지점, 기술을 선택한 이유, 나중에 다시 찾아볼 내용을 정리합니다.",
    action: "Tistory 열기",
  },
};
