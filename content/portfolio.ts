// 포트폴리오 콘텐츠 단일 소스.
// 모든 섹션 텍스트/데이터를 이 파일에서 관리한다. (회사 내부 정보는 익명화)
//
// 수치 표기 규칙
// - 평가셋에서 얻은 값은 반드시 평가 규모(쿼리 수/문서 수)를 함께 적는다.
// - 실사용자 운영 성과와 사전 통제 평가 결과를 같은 문장에서 섞지 않는다.
// - 구현된 기능과 계획 중인 기능은 detail / roadmap 으로 분리해 표기한다.

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

/** 카드 안에서 접었다 펴는 상세 블록 (아키텍처 · 평가 · 운영 · 문제해결 등) */
export type DetailBlock = {
  label: string;
  items: string[];
};

/** 회사 경력 아래 개별 업무 단위 */
export type WorkItem = {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string[];
  result?: string[];
  tech: string[];
  /** 처리 흐름 (FlowDiagram) */
  flow?: string[];
  /** 우측 벤토의 요약 지표 */
  scale?: { label: string; value: string }[];
  /** 접이식 상세 (아키텍처 / 평가 / 운영 / 트러블슈팅) */
  detail?: DetailBlock[];
  /** 수치의 측정 조건 등 오해를 막기 위한 주석 */
  note?: string;
  /** true면 Problem → Approach → Result 벤토를 펼쳐 보여준다 */
  primary: boolean;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  items: WorkItem[];
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
  /** 현재 상태 (대회 결과 · 릴리스 단계 등) */
  status?: string;
  /** 접이식 상세 (아키텍처 / 기능 / 평가) */
  detail?: DetailBlock[];
  /** 아직 구현되지 않은 계획 — 완료 기능과 반드시 분리한다 */
  roadmap?: string[];
  featured: boolean;
};

/** Featured에서 내린 초기 프로젝트 — 작은 카드로만 노출한다 */
export type ArchiveItem = {
  title: string;
  description: string;
  year: string;
  href?: string;
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
  role?: string;
  period?: string;
  description?: string;
  points: string[];
  tech?: string[];
  link?: string;
};

export type Certification = string;

export type SkillGroup = {
  category: string;
  skills: string[];
};

// ---------------------------------------------------------------------------

// 이력서는 파일로만 보유 중 → public/ 의 PDF로 직접 연결.
// 최신 파일로 교체할 때 이 값만 바꾸면 CTA와 Resume 페이지가 함께 갱신된다.
export const resumeUrl = "/임동건_이력서.pdf";

export const profile: Profile = {
  name: "임동건",
  position: "AI Engineer",
  oneLiner:
    "RAG와 AI Agent부터 Backend, On-premise LLM Serving, 배포와 운영까지 End-to-End로 AI 시스템을 설계하고 구축합니다.",
  summary:
    "요구사항을 분석하고 Retrieval, Agent Workflow, Backend, 추론 환경과 운영 구조까지 연결해 실제 환경에서 동작하는 AI 시스템을 만듭니다.",
  keywords: ["AI Agents", "RAG / Retrieval", "LLM Systems", "Backend", "AI Platform"],
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
  /** 수치의 측정 조건 — 평가셋 기반 수치는 반드시 채운다 */
  context?: string;
};

export const hero = {
  badge: "AI Engineer",
  badgeKeywords: "RAG · Agents · LLM Systems",
  // 강조 단어(accent)는 컴포넌트에서 처리한다.
  headline: { lead: "AI를 데모가 아니라", accent: "실제로 동작하는 시스템", trail: "으로 만듭니다." },
  stats: [
    { value: "98.2%", label: "규정 검색 Hit@8", context: "55-query evaluation" },
    { value: "94.3%", label: "파일 탐색 Hit@5", context: "240 docs · 106 queries" },
    { value: "2편", label: "제1저자 학술 논문", context: "한국통신학회" },
  ] as HeroStat[],
};

export const about = {
  heading: "요구사항부터\nAI 시스템 운영까지\n연결합니다.",
  body:
    "LLM 기반 AI 서비스를 요구사항 분석부터 Retrieval, Agent Workflow, Backend, On-premise LLM Serving, 배포와 운영까지 End-to-End로 구축해 왔습니다. 모델 API를 연결하는 데 그치지 않고 실제 질의셋을 구성해 Retrieval 품질을 측정하고, 실패 단계별 Fallback, 무중단 재색인, Backup / Recovery, Model Routing과 Failover처럼 서비스가 안정적으로 동작하기 위한 구조를 설계하는 데 관심이 있습니다.",
  capabilities: [
    { title: "End-to-End", desc: "요구사항 분석부터 Backend · Retrieval · 모델 · 배포 · 운영까지 하나의 흐름으로 구축" },
    { title: "Evaluation", desc: "지표를 그대로 받지 않고 평가가 무엇을 측정하는지 검증한 뒤 평가셋을 재설계" },
    { title: "Reliability", desc: "Failover · Graceful Degradation · 무중단 재색인 · Backup / Recovery를 고려한 설계" },
    { title: "Problem Solving", desc: "처음 접한 업무 도메인을 요구사항 · 프로토타입 · 데이터 모델로 옮기는 문제 해결" },
  ],
};

// ---------------------------------------------------------------------------
// Experience — 하나의 회사 아래 여러 업무(Work Item)를 배치한다.
// primary: true 인 항목만 벤토 전체를 펼치고, 나머지는 접이식 카드로 유지한다.
// ---------------------------------------------------------------------------

export const experience: Experience = {
  company: "(주)엑스코어시스템",
  role: "AI Engineer Intern",
  period: "2026.03 – 2026.08",
  summary:
    "사내 AI 서비스 2종을 요구사항 분석부터 단독으로 설계·구현하고, 온라인 경매 프로토타입과 ERP 연계 데이터 모델, 폐쇄망 CI/CD와 On-premise LLM 추론 환경까지 담당했습니다.",
  items: [
    {
      id: "rag-assistant",
      title: "사내 규정 검색 AI Assistant",
      subtitle: "약 60명 규모 조직을 위한 On-premise RAG 챗봇 · 문서 운영 플랫폼",
      problem:
        "사내 규정이 여러 문서에 흩어져 있어 직원이 필요한 조항을 직접 찾아야 했습니다. 외부 AI API를 사용할 수 없는 환경이라 추론 환경을 사내에 직접 구성해야 했고, 답변뿐 아니라 근거 조항과 현행 여부 확인, 문서 개정과 백업 · 복구 관리까지 함께 필요했습니다.",
      approach: [
        "요구사항 분석부터 데이터 구조 · Document Pipeline · Retrieval · FastAPI Backend · 관리자 기능 · Chat UI까지 단독 설계 및 구현",
        "문서 구조 기반 청킹과 메타데이터를 포함한 임베딩으로 조항 단위 검색이 가능하도록 구성",
        "BGE-M3 Dense Retrieval로 후보를 뽑고 키워드 · 메타데이터 기반 재랭킹으로 순위를 보정",
        "후속 질문은 이전 대화 문맥을 반영해 독립 질의로 Query Rewrite, 모호한 질문은 임의 답변 대신 관련 문서 · 조항 후보를 제시",
        "답변과 함께 근거 문서 · 조항을 반환해 사용자가 현행 규정을 직접 확인할 수 있도록 구성",
        "문서 버전 관리 · 변경 이력 추적 · 재색인 · 백업 / 복구를 포함한 운영 정책 수립 및 구현",
      ],
      result: [
        "Dense Hit@8 98.2%, MRR@8 82.3% (55개 평가 질의 기준)",
        "BM25 / Hybrid를 무조건 쓰지 않고 비교 평가 후 Dense Retrieval을 실시간 경로로 선택 (Hybrid MRR@8 73.9%)",
        "외부 API 호출 없이 사내 추론 환경에서 동작",
        "약 60명 규모 조직 대상 베타 테스트 준비",
      ],
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "Qdrant", "vLLM", "BGE-M3", "SSE", "Docker", "Nexus"],
      flow: ["질문 입력", "Query Rewrite", "Dense Retrieval", "메타데이터 재랭킹", "근거 기반 답변 (SSE)", "출처 조항 표시"],
      scale: [
        { label: "대상 규모", value: "약 60명" },
        { label: "Hit@8", value: "98.2%" },
        { label: "평가 질의", value: "55개" },
      ],
      detail: [
        {
          label: "Architecture",
          items: [
            "PostgreSQL — 문서 원문 · 버전 이력 · 메타데이터를 보관하는 Source of Record",
            "Qdrant — 언제든 재구축 가능한 Retrieval Index로만 취급",
            "Nexus — 문서 자산과 백업 자산 저장소",
          ],
        },
        {
          label: "Operations",
          items: [
            "Qdrant Alias 기반 Zero-downtime 재색인",
            "PostgreSQL Dump · Qdrant Snapshot · Nexus Backup을 묶은 복구 파이프라인",
            "Restore 실행 전 Safety Dump를 먼저 확보하는 절차 적용",
          ],
        },
      ],
      note: "위 Hit@8 · MRR@8은 실사용자 로그가 아니라 사전에 구성한 통제 평가셋(55개 질의) 기준 수치입니다.",
      primary: true,
    },
    {
      id: "file-retrieval-agent",
      title: "사내 파일 탐색 AI Agent",
      subtitle: "공유폴더의 비정형 업무 문서를 자연어로 검색하는 LangGraph 기반 Retrieval Agent",
      problem:
        "업무 파일은 파일명만으로 찾을 수 있는 경우와 본문 내용을 알아야 찾을 수 있는 경우가 섞여 있습니다. 사용자가 원하는 것은 LLM이 만들어낸 답변이 아니라 실제 파일과 경로였습니다.",
      approach: [
        "intent_router → metadata_search → content_search → summarize_results → format_response 5노드 LangGraph 워크플로우 설계",
        "PostgreSQL 파일명 · 경로 메타데이터 검색, Qdrant + BGE-M3 Dense, Kiwi 형태소 기반 BM25를 RRF로 결합",
        "PDF · DOCX · PPTX · XLSX · HWP · 이미지 등 13개 확장자 파서 구현",
        "신뢰도가 낮은 파일명 메타데이터 매치가 Fusion 상위를 차지해 실제 Semantic 결과를 밀어내던 문제를 발견하고, Fusion 이전 단계에서 제거하도록 수정",
        "초기 평가에서 모든 검색 방식이 100%를 기록한 원인을 추적해 평가셋 자체를 재설계",
      ],
      result: [
        "Hybrid Hit@5 94.3%, MRR@5 80.9% (240문서 · 106질의 재설계 평가셋 기준)",
        "Vector 단독 대비 Hit@5 +9.4%p, MRR@5 +6.8%p",
        "메타데이터 매치 필터링으로 MRR +40.2%p 개선",
      ],
      tech: ["Python", "FastAPI", "LangGraph", "Qdrant", "PostgreSQL", "BGE-M3", "BM25", "Kiwi", "RRF", "Docker"],
      flow: ["Intent", "Metadata Search", "Dense + BM25", "RRF Fusion", "Summary", "Response"],
      scale: [
        { label: "Hybrid Hit@5", value: "94.3%" },
        { label: "평가 규모", value: "240문서 · 106질의" },
        { label: "지원 확장자", value: "13종" },
      ],
      detail: [
        {
          label: "평가 실패 발견",
          items: [
            "초기 평가에서 BM25 · Vector · Agent 등 서로 다른 검색 방식이 모두 100%를 기록",
            "원인을 추적하니 질의가 정답 파일명 키워드를 거의 그대로 포함해 메타데이터 검색이 평가를 지배하고 있었음",
            "Retrieval이 완벽했던 것이 아니라 평가셋이 Retrieval 성능을 측정하지 못하고 있었다고 판단",
            "따라서 초기 수치는 성과로 사용하지 않고 평가 재설계의 근거로만 사용",
          ],
        },
        {
          label: "Evaluation Redesign",
          items: [
            "240문서 · 106질의로 평가셋 재구성, 질의를 content_only / mixed / filename 유형으로 분리",
            "무작위 노이즈 대신 같은 계열이지만 다른 사건을 담은 문서를 Distractor로 추가",
            "BM25 — Hit@5 85.8% · MRR@5 72.3%",
            "Vector — Hit@5 84.9% · MRR@5 74.1%",
            "Hybrid — Hit@5 94.3% · MRR@5 80.9%",
            "Agent — Hit@5 94.3% · MRR@5 80.1%",
          ],
        },
        {
          label: "Reliability",
          items: [
            "SHA-256 변경 감지로 수정된 파일만 재처리",
            "UUID5 결정적 ID로 재실행 시 중복 인덱스가 생기지 않도록 보장",
            "개별 파일 파서 실패가 전체 인덱싱을 중단시키지 않도록 실패 격리",
            "LLM 장애 시 요약 대신 키워드 주변 스니펫으로 대체",
            "임베딩 · Qdrant 장애 시 메타데이터 검색 결과만으로 워크플로우 완료",
          ],
        },
      ],
      note: "위 수치는 직접 재설계한 평가셋(240문서 · 106질의) 기준이며 실사용자 로그 기반 지표가 아닙니다.",
      primary: true,
    },
    {
      id: "online-auction",
      title: "온라인 경매 시스템 프로토타입 구축 및 ERP 연계 설계",
      subtitle: "현업 요구사항을 프로토타입으로 구체화하고 실제 시스템과 ERP 데이터 구조로 연결",
      problem:
        "온라인 부분육 경매 시스템 구축 과정에서, 처음 접하는 축산 · 경매 도메인의 업무 흐름을 화면과 기능 단위로 옮기고 외부 ERP와 연결되는 데이터 구조까지 설계해야 했습니다.",
      approach: [
        "업무 담당자의 설명과 기존 자료를 바탕으로 경매 프로세스와 품목 · 분류체계 분석",
        "업무 흐름을 화면 · 기능 단위로 구체화해 실제 사용 흐름을 확인할 수 있는 수준의 관리 기능 프로토타입 구현",
        "내부 검토 후 수정사항을 반영하고 프로토타입 코드를 실제 운영 프로젝트 구조로 이식",
        "외부 ERP가 전달한 Excel 인터페이스 정의서를 분석해 품목 · 상장 · 낙찰 도메인의 필수 연계 컬럼 파악",
        "ERP 테이블을 그대로 복사하지 않고 내부 온라인 경매 시스템에 필요한 요소를 함께 반영한 스키마를 설계해 개발 DB에 반영",
      ],
      result: [
        "요구사항 파악 → 프로토타입 → 실제 프로젝트 이식 → ERP 연계 데이터 모델까지 하나의 흐름으로 수행",
        "Excel 원본 분석 · 현행 DB Gap 분석 · 테이블 정의서 · 인터페이스 매핑 · ERD · Decision Log · Open Questions 문서화",
      ],
      tech: ["요구사항 분석", "Prototyping", "Data Modeling", "ERD", "SQL", "ERP Interface"],
      scale: [
        { label: "대상 도메인", value: "품목 · 상장 · 낙찰" },
        { label: "산출물", value: "프로토타입 · 데이터 모델" },
      ],
      detail: [
        {
          label: "Data Modeling 담당 범위",
          items: [
            "ERP 인터페이스 분석 및 필수 연계 컬럼 파악, 기존 시스템 스키마 분석",
            "내부 식별 키 설계, PK / FK · 상태 컬럼 · 관리 컬럼 정의",
            "품목 분류체계 구조 분석 및 계층형 Self-reference 검토",
            "상장 / 낙찰 관계 설계와 참조 무결성 · 실제 Join 시나리오 검토",
            "신규 테이블 설계, 사용자 테이블 신규 컬럼 추가, 개발 DB 반영",
          ],
        },
      ],
      note: "프로토타입과 데이터 모델 설계 단계까지 담당했으며, 운영 서비스 운영 경험과는 구분됩니다.",
      primary: false,
    },
    {
      id: "onprem-cicd",
      title: "사내망 CI/CD 개발환경 구축",
      subtitle: "폐쇄망 내부 저장소만으로 빌드 · 검사 · 배포가 도는 파이프라인 구성",
      problem:
        "외부 네트워크가 차단된 사내망에서 형상관리부터 정적 분석, 아티팩트 관리, 배포까지 이어지는 개발환경을 직접 구성해야 했습니다.",
      approach: [
        "GitLab 형상관리와 Jenkins Pipeline 구성, SonarQube 정적 분석과 Nexus 아티팩트 저장소 연동",
        "Docker Compose 기반 구성과 Host Jenkins Agent 운영, 프로젝트별 JDK / Runtime 분리",
        "폐쇄망 내부 저장소만 사용하는 빌드 경로 구성",
        "신규 VM으로 전체 환경 재구축 및 백업 · 트러블슈팅 가이드 작성",
      ],
      tech: ["GitLab", "Jenkins", "SonarQube", "Nexus", "Docker Compose", "Linux"],
      flow: ["GitLab", "Jenkins", "SonarQube", "Nexus", "Deploy"],
      detail: [
        {
          label: "대표 문제 해결",
          items: [
            "Jenkins Controller / Agent 간 Java 버전 불일치 해결",
            "Jenkins 자식 프로세스가 빌드 종료와 함께 죽던 문제 처리",
            "Nexus Credential · Deployment 설정 문제 해결",
            "SELinux로 인한 nginx 403 원인 규명",
            "SonarQube 기동에 필요한 vm.max_map_count 조정",
            "내부망 제한으로 동작하지 않던 GitLab Webhook 우회 구성",
          ],
        },
      ],
      primary: false,
    },
    {
      id: "onprem-llm-serving",
      title: "On-premise LLM Inference Engineering",
      subtitle: "RTX 3090 ×4 · 96GB VRAM 환경에서 vLLM 추론 서버를 구성하고 안정화",
      problem:
        "외부 API를 쓸 수 없는 환경에서 사내 AI 서비스가 사용할 추론 서버를 직접 구성하고, 서비스가 실제로 견딜 수 있는 상태까지 안정화해야 했습니다.",
      approach: [
        "vLLM OpenAI-compatible API 서버 구성, Tensor Parallel · Context Length · GPU Memory Utilization · Max Sequences · Batch Token Limit · Chunked Prefill 조정",
        "Qwen · Gemma · BGE-M3 등 모델별 Chat Template · Reasoning Parser · Thinking Mode 설정",
        "Thinking 설정 때문에 content=null이 반환되던 문제를 분석해 서버 기본 설정 변경",
        "LLM이 GPU 대부분을 점유하는 상황에서 BGE-M3를 CPU로 분리해 서비스 안정성 확보",
        "Qwen 병렬 요청 25건을 실행해 큐 처리 동작 검증",
      ],
      tech: ["vLLM", "Docker", "WSL2", "Qwen", "Gemma", "BGE-M3", "CUDA"],
      scale: [
        { label: "GPU", value: "RTX 3090 ×4" },
        { label: "Total VRAM", value: "96GB" },
      ],
      detail: [
        {
          label: "Open WebUI 종료 문제 추적",
          items: [
            "Gemma 사용 중 시스템이 종료되는 문제를 재현",
            "순수 API 요청과 WebUI 환경을 비교해 WebUI의 추가 Auto-generation 요청을 원인 후보로 좁힘",
            "제목 · 태그 · 검색어 생성 요청을 비활성화한 뒤 동일 시나리오에서 안정성 재검증",
          ],
        },
      ],
      primary: false,
    },
  ],
};

// ---------------------------------------------------------------------------
// 개인 프로젝트
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "orbit",
    title: "Orbit",
    description:
      "브라우저 방문 기록을 사용자의 탐색 의도 단위 Session으로 자동 구성하고, 이전 탐색 맥락을 자연어로 검색 · 복원하는 Personal Exploration Memory.",
    year: "2026",
    category: "Personal AI · Browser Intelligence",
    problem:
      "브라우저에서 리서치나 문제 해결을 이어가면 탭 · 검색 · 방문 페이지가 계속 쌓입니다. 시간이 지나면 '무엇을 봤는가'보다 '왜 그것을 보고 있었는가'라는 탐색 맥락이 먼저 사라집니다.",
    contributions: [
      "Chrome MV3 webNavigation 기반 opt-in 수집기와 IndexedDB 로컬 큐 구현 — 서비스 워커가 종료돼도 이벤트가 유실되지 않도록 상태 기반으로 관리",
      "동기화 배치마다 LLM이 append / create / hold / discard를 판단해 세션을 자동으로 생성 · 성장시키는 Auto Session 파이프라인 설계",
      "단계별 모델 분리 — 탐색 의도 분석은 LG K-EXAONE, 요약 · 답변 · 리랭킹은 SKT A.X-K1, 의미 검색은 Upstage 임베딩. 두 LLM을 서로의 폴백으로 구성",
      "Golden Set 기반 Sessionization 평가 하네스 구축 (Assignment Accuracy · Purity · Coverage · New-vs-Existing · Noise Exclusion)",
      "민감 도메인 본문 미수집 · 추적 파라미터 제거 등 수집 범위를 기본값에서부터 좁게 설계",
    ],
    results: ["세션 자동 구성부터 자연어 탐색 복원까지 동작하는 Extension + Backend 구현"],
    status: "AI Rookie Competition 예선 통과",
    tech: [
      "React",
      "TypeScript",
      "Chrome MV3",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Qdrant",
      "K-EXAONE",
      "A.X-K1",
      "Upstage Embedding",
    ],
    github: "https://github.com/orbit-browser/orbit",
    detail: [
      {
        label: "Features",
        items: [
          "Auto Session · Exploration Timeline · Orbit 홈 / 아틀라스",
          "Search by Intent · Ask AI · 열린 탭 Semantic Search 및 탭 이동",
          "세션 병합 · 세션 추천 · 탐색 분석 · 자연어 기반 과거 탐색 복원",
        ],
      },
    ],
    featured: true,
  },
  {
    id: "forge",
    title: "Forge",
    description:
      "코딩 Agent 요청의 작업 유형과 실행 조건을 분석해 적합한 LLM을 선택하고, Provider 장애 시 자동으로 다음 모델로 전환하는 Task-aware Multi-Provider LLM Gateway.",
    year: "2026",
    category: "LLM Systems · Gateway",
    problem:
      "Claude Code · Cline · Aider 같은 코딩 도구에서는 Provider 상태나 작업 종류에 따라 사용자가 모델을 계속 직접 바꿔야 합니다. Forge는 클라이언트에 단일 엔드포인트만 제공합니다.",
    contributions: [
      "Analyze → Capability Filter → Session Affinity → Score → Route → Failover 라우팅 파이프라인 설계",
      "OpenAI · Anthropic 양쪽 호환 API 제공, LiteLLM을 Provider 어댑터로 사용해 16개 Provider 연동",
      "Tool Calling · Vision · JSON Mode · Context Window를 Hard Filter로 처리하고 작업 적합도 · 헬스 · 지연 · 비용으로 스코어링",
      "First-chunk 기준 스트리밍 Failover, API Key 단위 쿨다운과 다중 키 로테이션, 무료 / 로컬 우선 정책 구현",
      "/v1/route/explain으로 제외된 모델과 사유 · 최종 점수표까지 노출해 라우팅을 설명 가능하게 구성",
      "대시보드 · SQLite 메트릭 · Prometheus 노출과 무중단 Hot Reload 지원",
    ],
    results: ["PyPI 배포 (forge-gateway) · 로컬에서 동작하며 Forge 자체 텔레메트리는 전송하지 않음"],
    status: "Alpha · v0.4.0",
    tech: ["Python", "FastAPI", "LiteLLM", "SQLite", "Prometheus", "OpenAI API", "Anthropic API"],
    github: "https://github.com/WhiteJbb/forge",
    detail: [
      {
        label: "Cost Controls",
        items: [
          "요청당 예상 비용 상한(--max-cost)과 유료 경로 차단(--no-paid) 정책",
          "정책은 forge.yaml에서 순서대로 평가되며 작업 유형별로 tier 선호 · 폴백 지정",
          "가격이 확인되지 않은 모델은 보수적으로 취급해 무료 정책에서 제외",
        ],
      },
    ],
    featured: true,
  },
  {
    id: "devtrail",
    title: "Devtrail",
    description:
      "AI Coding 과정에서 발생한 작업 기록과 의사결정을 세션 간 지속 가능한 Project Knowledge로 전환하는 Agent Memory System.",
    year: "2026",
    category: "Agent Memory · Knowledge OS",
    problem:
      "Claude Code 같은 AI Coding Tool은 세션이 끝나거나 컨텍스트가 압축되면 작업 배경 · 판단 근거 · 실패 과정 · 학습 · 다음 작업이 함께 사라집니다.",
    contributions: [
      "Capture → Distill → Review → Promote → Reuse 파이프라인 설계, Obsidian Vault를 단일 지식 저장소로 사용",
      "MCP 서버로 세션 시작 시 프로젝트 브리핑을 주입하고 종료 시 Session Handoff(Plan / Process)를 기록하는 Agent Session Lifecycle 구현",
      "task_type별 멀티 Provider 라우팅과 폴백 체인 구성 (light / writer / long_writer / polish / local)",
      "AI 출력은 반드시 Candidates를 거쳐 사람이 검토한 뒤 승격되도록 설계 — 지식 · 결정 · 블로그 · 이력서 후보 분리",
      "Nightly Distill과 Telegram 연동, Textual TUI 대시보드 및 설치 자동화 스크립트 작성",
    ],
    results: ["현재 개인 개발 워크플로우에서 실사용 중 (이 포트폴리오 저장소의 세션 기록에도 사용)"],
    tech: ["Python", "MCP", "Obsidian", "Gemini API", "OpenAI API", "Kimi API", "Ollama", "Textual", "Telegram Bot API"],
    github: "https://github.com/WhiteJbb/devtrail",
    detail: [
      {
        label: "Core Message",
        items: [
          "AI가 만든 결과만 저장하는 것이 아니라, AI와 함께 개발하는 과정에서 발생한 개발자의 판단과 학습을 다시 회수한다",
          "LLM은 창작자가 아닌 작업 기록 정리자 — source에 없는 사실 · 수치를 만들지 않는다는 원칙으로 파이프라인 구성",
        ],
      },
    ],
    roadmap: ["화백 연동 — 멀티 에이전트 검토 결과를 Decision 후보로 회수"],
    featured: true,
  },
  {
    id: "hwabaek",
    title: "화백 (和白)",
    description:
      "역할별 LLM Agent가 기술 선택지를 독립적으로 검토하고 근거 · 반론 · 투표 · 수정을 거쳐 개발자를 위한 권고안을 만드는 Multi-Agent Decision Runtime.",
    year: "2026",
    category: "Multi-Agent · Runtime",
    problem:
      "중앙 조율자 없이 에이전트끼리 직접 대화하게 만들면 구현은 쉽지만 대화가 스스로 끝나지 않고 비용이 폭증합니다. 목적은 AI가 결정을 대신하는 것이 아니라, 여러 관점의 근거와 Trade-off를 구조화해 개발자가 판단하기 쉽게 만드는 것입니다.",
    contributions: [
      "LangGraph · CrewAI 같은 프레임워크 없이 LLM API의 tool use 위에 메시지 버스 · 에이전트 툴 루프 · 합의 엔진 · 예산 상태기계 · SSE 이벤트 스트림 · 영속화를 직접 구현",
      "discussion → synthesis → proposal → voting → revision 예산 단계 상태기계로 종료를 프롬프트가 아닌 런타임에서 강제하고, 단계마다 호출 가능한 도구를 좁힘",
      "호출 전 토큰을 예약하고 응답으로 정산하는 방식으로 동시 호출 시 예산을 사후에 초과하는 문제 해결",
      "token_budget과 processed_token_limit을 분리해 캐시 읽기가 작업 예산을 잠식하지 않도록 구성",
      "SSE 이벤트 계약을 문서로 고정하고 Last-Event-ID 재구독을 지원해 비선형 메시지 흐름을 추적 가능하게 구현",
    ],
    results: ["런타임 핵심 흐름(메시지 버스 · 합의 · 예산 제어 · SSE) 구현 및 테스트 통과"],
    status: "Runtime 구현 완료 · Evaluation 단계 예정",
    tech: ["Python 3.11", "asyncio", "FastAPI", "SSE", "SQLite", "Next.js"],
    github: "https://github.com/WhiteJbb/hwabaek",
    roadmap: ["단일 LLM 대비 Decision Quality · Cost · Convergence Time 비교 평가"],
    featured: true,
  },
  {
    id: "afterfail",
    title: "AfterFail",
    description:
      "Chaos Mesh 기반 장애 시나리오, 웹 터미널, Prometheus · Grafana 모니터링과 RAG 기반 AI Tutor를 결합한 Kubernetes 장애 대응 훈련 플랫폼.",
    year: "2026",
    category: "Platform · Frontend",
    role: "Project Lead · Frontend",
    problem: "Kubernetes 장애 대응은 실제 장애 상황을 안전하게 재현할 환경이 없으면 훈련하기 어렵습니다.",
    contributions: [
      "기획 · 일정 · 역할 분담 · 서비스 통합 및 최종 발표 진행",
      "React · TypeScript 기반 사용자 인터페이스와 미션 진행 화면 개발",
      "랭킹 · 업적 시스템 등 프론트엔드 전반 구현",
      "xterm.js 기반 웹 터미널 구축으로 브라우저에서 kubectl 실습이 가능한 환경 구현",
      "Docker 기반 개발환경과 실행 자동화 스크립트 작성으로 팀 개발환경 구축 과정 표준화",
    ],
    tech: ["React", "TypeScript", "FastAPI", "Kubernetes", "Chaos Mesh", "Prometheus", "Grafana", "Qdrant", "xterm.js"],
    github: "https://github.com/why-server-down/cloud-trouble-training-service",
    note:
      "Chaos Mesh 장애 주입, RAG 기반 AI Tutor, Kubernetes 핵심 구현은 팀원이 담당했습니다. 본인은 프로젝트 총괄과 프론트엔드 개발을 맡았습니다.",
    featured: true,
  },
  {
    id: "federated-learning-testbed",
    title: "Docker-based Federated Learning Heterogeneity Testbed",
    description:
      "성능이 제각각인 클라이언트로 구성된 이질적 연합학습 환경을 반복 가능한 형태로 실험하기 위한 Docker 기반 테스트베드.",
    year: "2026",
    category: "Federated Learning · Research",
    role: "First Author",
    problem:
      "이질적 연합학습 환경을 표준화된 방식으로 실험 · 검증할 수단이 없어, 알고리즘 비교 결과를 신뢰하기 어려웠습니다.",
    contributions: [
      "Docker Container Resource Limit으로 CPU / 메모리 성능이 다른 클라이언트를 구성해 System Heterogeneity 재현",
      "Flower · PyTorch 기반 연합학습 파이프라인과 CIFAR-10 Non-IID 실험 자동화",
      "BWA 알고리즘 구현 및 PPO 기반 동적 배치 크기 최적화",
      "ADM 알고리즘 구현으로 클라이언트 성능에 따른 데이터 사용량 조절",
      "Raspberry Pi · 노트북 등 실제 디바이스 환경에서도 이질적 클라이언트 학습 과정 검증",
    ],
    results: ["BWA 정확도 52.77% → 55.47% (+2.70%p)", "ADM 학습 시간 963.8s → 758.9s (-21.3%)"],
    tech: ["Python", "PyTorch", "Flower", "Docker", "Docker Compose", "Raspberry Pi", "CIFAR-10"],
    github: [
      { label: "논문 Testbed", href: "https://github.com/2026-Feb-Winter-Institute/FL" },
      { label: "전공 프로젝트", href: "https://github.com/Hanbat-IoT/Lab2" },
    ],
    featured: true,
  },
  {
    id: "kisa-unix-check",
    title: "KISA UNIX 서버 취약점 자동 점검 스크립트",
    description:
      "KISA 2026 가이드 기반 67개 보안 항목을 자동 점검하고, 인터랙티브 체크리스트를 포함한 반응형 HTML 리포트를 생성하는 Shell 스크립트.",
    year: "2026",
    category: "Security · Shell",
    problem: "KISA 취약점 가이드 67개 항목을 수동으로 점검하면 누락이 생기고 결과를 문서화하기 번거로웠습니다.",
    contributions: [
      "계정관리 · 파일권한 · 서비스 · 패치 · 로그 관리 5개 분류, 67개 항목 완전 자동 점검 구현",
      "SSH 설정 다중 파일 검사, 심볼릭 링크 실제 파일 권한 추적, 숫자 · 문자열 권한 형식 모두 지원",
      "인터랙티브 체크리스트와 취약 항목 자동 조치 가이드를 포함한 반응형 HTML 리포트 생성",
      "Rocky Linux / CentOS / RHEL / Ubuntu / Debian 5개 OS 지원",
    ],
    tech: ["Shell (Bash)", "Linux", "systemd", "HTML", "KISA 2026"],
    github: "https://github.com/WhiteJbb/Kisa_unix_check",
    featured: false,
  },
  {
    id: "oracle-schema-drift",
    title: "Oracle 스키마 드리프트 검증 시스템",
    description:
      "운영 DB와 테스트 DB 간 12개 스키마 요소를 자동 검증해 배포 전 불일치를 조기 발견하는 Spring Boot 기반 시스템.",
    year: "2026",
    category: "Backend · DB",
    problem:
      "운영 · 테스트 Oracle DB 간 스키마가 조용히 어긋나 배포 후 장애가 발생하는 문제를 사전에 차단할 수단이 없었습니다.",
    contributions: [
      "Docker Compose로 Oracle XE 이중 컨테이너 환경 구성",
      "PK · FK · UNIQUE · NOT NULL · 인덱스 · 시퀀스 · 뷰 · 트리거 · 패키지 · 칼럼 길이 · 순서 등 12개 검증 항목 구현",
      "읽기 전용 schema_checker 계정 설계로 프로덕션 데이터 접근 최소화",
      "뷰 · 트리거 · 패키지 검증 시 환경별 스키마명 정규화 처리로 오탐 방지",
      "JUnit 5 + AssertJ 기반 테스트 13개 작성 및 시각적 차이 리포트 출력",
    ],
    results: ["12개 스키마 요소 자동 검증으로 배포 전 불일치 감지"],
    tech: ["Java 17", "Spring Boot 3.2", "Oracle XE 21c", "JUnit 5", "AssertJ", "Gradle", "Docker Compose"],
    github: "https://github.com/WhiteJbb/Oracledb",
    featured: false,
  },
  {
    id: "when2work",
    title: "When2Work — 팀 일정 조율 웹 서비스",
    description:
      "팀원들의 가능한 시간을 드래그로 입력받아 히트맵으로 시각화하고 최적 미팅 시간을 자동 추천하는 React 웹 앱.",
    year: "2026",
    category: "Web Service",
    // 배포 도메인(when2work.whitejbb.cloud)이 현재 DNS 해석 실패 상태라 데모 링크는 내려 둔다.
    // 도메인 복구 후 link 필드를 되살리면 카드에 CTA가 다시 노출된다.
    github: "https://github.com/WhiteJbb/When2Work",
    problem: "여러 명의 가능한 시간을 모아 최적의 만남 시간을 찾는 과정이 번거롭고 수작업이 많았습니다.",
    contributions: [
      "Supabase PostgreSQL 스키마 및 RLS 정책 설계, 인증 없이 생성자 토큰으로 소유권 관리",
      "30분 단위 사각형 드래그 선택 + 자동 스크롤 TimeGrid 컴포넌트 구현",
      "슬롯 생성 · 히트맵 분석 · 최적 시간 탐색 알고리즘 직접 구현, 겹치는 시간대 점수화로 추천",
      "pg_cron 기반 10일 경과 방 자동 삭제 구성",
      "GitHub Actions + GitHub Pages 자동 배포 및 커스텀 도메인 연결",
    ],
    results: ["스터디 · 캡스톤 팀 일정 조율에 실제로 사용된 웹 서비스"],
    tech: ["React 18", "Vite", "Tailwind CSS", "Supabase", "EmailJS", "GitHub Actions"],
    featured: false,
  },
  {
    id: "drone-delivery-pwa",
    title: "드론 배송 시스템 PWA",
    description:
      "Parrot Anafi 드론을 WiFi로 연결해 실시간 상태를 모니터링하고 웨이포인트 기반 자동 배송 미션을 실행하는 Next.js PWA.",
    year: "2025",
    category: "Embedded · Web",
    problem:
      "드론 제어 SDK가 Linux 전용이고, 웹에서 실시간으로 드론 상태를 확인하며 배송 미션을 지시하는 통합 인터페이스가 없었습니다.",
    contributions: [
      "Next.js 14 App Router 기반 PWA 프론트엔드 개발, 드론 연결 · 배송 요청 · 실시간 현황 화면 구현",
      "Python Flask REST API 서버 작성, Parrot Olympe SDK와 연동해 이륙 · 착륙 · 위치 이동 · 자동 미션 엔드포인트 제공",
      "WSL2 환경에서 Linux 전용 Olympe SDK를 Windows에서 실행하는 개발 환경 구성 가이드 작성",
    ],
    tech: ["Next.js 14", "TypeScript", "React 18", "Python", "Flask", "Parrot Olympe SDK", "PWA"],
    github: "https://github.com/DroneDelivery2/Embedded_PJ",
    note: "Parrot Anafi 드론 하드웨어와 Olympe SDK를 팀 공유 자산으로 활용했습니다.",
    featured: false,
  },
  {
    id: "budgetly",
    title: "Budgetly",
    description: "조직 예산 · 영수증 관리 웹 플랫폼",
    year: "2025",
    category: "Web Service",
    problem: "조직의 영수증 · 예산 처리를 수기로 관리하기 번거롭고 실수가 잦았습니다.",
    contributions: [
      "Vue.js 기반 프론트엔드 개발 및 예산 현황 대시보드 UI 구성",
      "Firebase 인증 · DB 연동 및 AWS EC2 기반 배포",
    ],
    results: ["소중한 오픈소스 활용 SW 경진대회 1등, 총장상 수상"],
    tech: ["Vue.js", "Firebase", "AWS EC2"],
    github: "https://github.com/HBNU-SWUNIV/ossw-competition25-yee",
    note:
      "OCR 기반 영수증 인식(Azure Document Intelligence) 구현은 팀원이 담당했습니다. 본인은 Vue.js 프론트엔드와 Firebase · AWS EC2 배포를 맡았습니다.",
    featured: false,
  },
];

/** Featured에서 내린 초기 프로젝트 — /projects 하단에 작은 카드로만 노출한다. */
export const archive: ArchiveItem[] = [
  {
    title: "로컬 RAG 파이프라인 (local-rag-policy-chat)",
    description: "Ollama + Qdrant로 동작하는 완전 로컬 문서 QA 챗봇. 사내 RAG 업무 이전의 학습용 프로토타입.",
    year: "2026",
    href: "https://github.com/WhiteJbb/local-rag-policy-chat",
  },
  {
    title: "Rag-Test",
    description: "청킹 · 임베딩 조합을 비교하기 위해 만든 초기 RAG 실험 저장소.",
    year: "2026",
    href: "https://github.com/WhiteJbb/Rag-Test",
  },
  {
    title: "고등학교 C 프로젝트 웹 터미널 아카이브",
    description: "C/C++ 콘솔 프로그램 9개를 Emscripten으로 WebAssembly 변환해 브라우저에서 실행하도록 복원.",
    year: "2026",
    href: "https://github.com/WhiteJbb/high-school-c-archive",
  },
  {
    title: "DEV CARD HUNTER",
    description: "개발 사이트 방문 시 카드를 획득하는 Chrome Extension + 게임화 웹 앱 (프론트엔드 담당).",
    year: "2025",
    href: "https://github.com/2025-Kraftonweek2-401-7/frontEnd",
  },
  {
    title: "기숙사 세탁실 실시간 현황 시스템",
    description: "세탁기 · 건조기 사용 현황을 실시간 타이머와 함께 보여주는 Flask + MongoDB 웹 앱 (3인 팀).",
    year: "2025",
    href: "https://github.com/2025-Krafton-401-6/Only_My_Web",
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
    title: "낭만인프라 클라우드 인프라 스터디",
    role: "DevOps 담당",
    period: "2025.11 – Present",
    description:
      "클라우드 인프라를 주제로 모인 11인 스터디에서 공통 CI/CD 환경 설계 · 구축을 전담해 전 멤버 프로젝트에 공유 적용했습니다.",
    points: [
      "Jenkins · Harbor · SonarQube · Watchtower 기반 공통 CI/CD 환경 구축",
      "스터디원 11명의 프로젝트에 멤버별 독립 파이프라인 구성",
      "Harbor Robot Account 기반 이미지 빌드 · 배포 자동화",
      "KREONET 오픈소스 워킹그룹 발표",
    ],
    tech: ["Jenkins", "Harbor", "SonarQube", "Watchtower", "Docker", "CI/CD"],
    link: "https://www.nangman.cloud",
  },
];

export const education = {
  school: "국립한밭대학교 컴퓨터공학과",
  detail: "2021.03 – 현재",
  research: {
    role: "학부연구생",
    lab: "ICIS Lab",
    period: "2025.03 – 2026.04",
  },
};

export const certifications: Certification[] = [
  "NAVER Cloud Platform Certified Professional",
  "NAVER Cloud Platform Certified Associate",
  "AWS Certified Cloud Practitioner",
  "정보처리기능사",
  "TOEIC 860",
];

export const techStack: SkillGroup[] = [
  {
    category: "AI / Agent Systems",
    skills: ["RAG", "LangGraph", "Agent Workflow", "Agent Memory", "MCP", "Tool Use", "Browser Context"],
  },
  {
    category: "Retrieval",
    skills: ["Qdrant", "BGE-M3", "Dense Retrieval", "BM25", "RRF", "Hybrid Search", "Retrieval Evaluation"],
  },
  {
    category: "LLM Systems",
    skills: ["vLLM", "On-premise Serving", "Model Routing", "Failover", "OpenAI-compatible API"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "REST API", "SSE"],
  },
  {
    category: "Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "Jenkins",
      "GitLab",
      "Harbor",
      "Nexus",
      "SonarQube",
      "Prometheus",
      "Kubernetes",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
];

export const contact = {
  email: "gunni6112@gmail.com",
  github: "https://github.com/WhiteJbb",
  githubLabel: "github.com/WhiteJbb",
  website: "https://www.nangman.cloud",
  websiteLabel: "www.nangman.cloud",
  location: "대전, 대한민국",
};

// ---------------------------------------------------------------------------
// 화면 머리말 문구 (eyebrow · title · desc).
// 데이터(projects/awards 등)와 분리해, 화면에 보이는 "제목 문구"는 전부 여기서 수정한다.
// ---------------------------------------------------------------------------

// 홈 화면 각 섹션의 머리말. (본문 데이터는 위 about/experience/projects 등에서 관리)
export const sectionHeaders = {
  about: { eyebrow: "About" },
  experience: { eyebrow: "Experience", title: "회사에서 만든 것" },
  projects: {
    eyebrow: "Projects",
    title: "개인 프로젝트",
    allLink: "전체 프로젝트 보기",
  },
  publications: { eyebrow: "Research / Publications", title: "논문" },
  activities: { eyebrow: "Activities", title: "활동" },
  awards: { eyebrow: "Awards · Education · Certifications", title: "수상 · 학력 · 자격증" },
  techStack: {
    eyebrow: "Core Skills",
    title: "기술 스택",
    desc: "실제 프로젝트에서 직접 다뤄 본 기술을 영역별로 정리했습니다.",
  },
  contact: {
    eyebrow: "Contact",
    title: "함께 만들 것이 있다면",
    desc: "AI를 실제 제품과 업무 환경에 연결하는 일에 관심이 있습니다. 채용, 협업 또는 기술 이야기가 있다면 편하게 연락해주세요.",
  },
  archive: {
    eyebrow: "Archive",
    title: "초기 프로젝트",
    desc: "지금의 작업으로 이어진 초기 실험과 학습용 프로젝트입니다.",
  },
};

// 서브페이지(/about, /projects 등) 상단 헤더 머리말.
export const pageHeaders = {
  about: {
    eyebrow: "About",
    title: "AI를 실제 시스템으로 연결하는 AI Engineer",
    desc: "모델을 붙이는 데서 끝내지 않고 Retrieval · Agent · Backend · LLM Serving · 운영 구조까지 연결해, 실제로 동작하는 AI 시스템을 만듭니다.",
  },
  projects: {
    eyebrow: "Projects",
    title: "문제 · 해결 · 성과로 정리한 전체 프로젝트",
    desc: "기술 나열이 아니라 실제로 맡은 역할과 해결한 문제 중심으로 정리했습니다.",
  },
  contact: {
    eyebrow: "Contact",
    title: "함께 만들 것이 있다면",
    desc: "AI를 실제 제품과 업무 환경에 연결하는 일에 관심이 있습니다. 채용, 협업 또는 기술 이야기가 있다면 편하게 연락해주세요.",
  },
  resume: {
    eyebrow: "Resume",
    title: "임동건 · AI Engineer",
    desc: "RAG · Agent 시스템부터 On-premise LLM Serving과 폐쇄망 CI/CD까지 직접 구축해 온 이력입니다.",
  },
  blog: {
    eyebrow: "Learning Notes",
    title: "직접 경험하며 정리한 기술 노트",
    desc: "공부하다 막혔던 지점, 기술을 선택한 이유, 나중에 다시 찾아볼 내용을 정리합니다.",
    action: "Tistory 열기",
  },
};
