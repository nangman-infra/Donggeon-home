# 포트폴리오 저장소 분석 보고서

분석일: 2026-06-19 (최초) / 2026-06-28 (work-agent, high-school-c-archive 추가)  
대상: 선택된 저장소 9개 (#3, #4, #5, #6, #66, #70, #71, work-agent, high-school-c-archive)

---

## #3 — local-rag-policy-chat

**저장소**: [WhiteJbb/local-rag-policy-chat](https://github.com/WhiteJbb/local-rag-policy-chat)  
**언어**: Python | **최종 수정**: 2026-04-21

### 구조

```
├── main.py              # CLI 진입점 (인덱싱 / 질문 / 대화형)
├── app.py               # Chainlit 웹 UI
├── document_loader.py   # PDF / PPTX / MD 로드 + 어댑티브 청킹
├── vector_store.py      # Qdrant 인덱싱 / 검색
├── rag_chain.py         # LangChain LCEL 체인 + 프롬프트
├── clean_md.py          # MD 전처리
├── docker-compose.yml   # Qdrant 컨테이너
└── requirements.txt
```

### 기술 스택

| 역할 | 기술 |
|------|------|
| LLM | Ollama `gemma4:e2b` (완전 로컬) |
| 임베딩 | `jhgan/ko-sroberta-multitask` (한국어, dim=768) |
| 벡터 DB | Qdrant (Docker) |
| 문서 형식 | PDF / PPTX / MD |
| 파이프라인 | LangChain LCEL |
| UI | Chainlit |

### 주요 특징

- **외부 API 없음** — Ollama + Qdrant 완전 로컬 동작
- **할루시네이션 방지** — 유사도 임계값 미달 시 LLM 호출 없이 즉시 "검색 결과 없음" 반환
- **어댑티브 청킹** — 150자 미만 병합, 800자 초과 재분할 → 쓸모없는 소형 청크 81개→0개
- **출처 표시** — 답변마다 파일명, 페이지/섹션 함께 표시

### Docker / 배포

- `docker-compose.yml` 있음 (Qdrant만 컨테이너화, Ollama는 로컬 실행)
- Dockerfile 없음

### README 품질

매우 상세 (4,667bytes). 구성 표, 파일 구조, 실행 순서, 파라미터 목록, 청킹 전략 비교표, 동작 흐름도 포함.

### 포트폴리오 평가

**★★★★★ 강력 추천**  
AI/RAG 실무 역량을 가장 잘 보여주는 저장소. 한국어 NLP, 벡터 검색, 할루시네이션 대응까지 포함. README도 완성도 높음.

### 개선 제안

- Dockerfile 추가 시 완전 컨테이너화 가능
- 임베딩 모델 교체 실험 결과를 벤치마크 표로 추가하면 설득력 상승

---

## #4 — Kisa_unix_check

**저장소**: [WhiteJbb/Kisa_unix_check](https://github.com/WhiteJbb/Kisa_unix_check)  
**언어**: Shell | **최종 수정**: 2026-04-08

### 구조

```
├── README.md                             # 상세 사용 가이드
└── kisa_unix_vulnerability_check.sh     # 단일 Shell 스크립트 (109KB)
```

### 기능 요약

- **KISA 2026 가이드** 기준 UNIX/Linux 서버 취약점 **67개 항목** 자동 점검
- 점검 분류: 계정관리(13) · 파일/디렉토리(20) · 서비스(30) · 패치(1) · 로그(3)
- **중요도별**: 상(44개) / 중(16개) / 하(7개)
- 지원 OS: Rocky Linux, CentOS, RHEL, Ubuntu, Debian

### 출력

- 반응형 HTML 리포트 (그라데이션, 카드 레이아웃, 인터랙티브 체크리스트)
- 텍스트 리포트 동시 생성
- 취약 항목(중요도 "상") 자동 조치 가이드 포함

### 고급 기능

- SSH 설정 다중 파일 검사 (`sshd_config.d/*.conf` 포함)
- 심볼릭 링크 인식 → 실제 파일 권한 검사
- 숫자/문자열 권한 모두 지원

### Docker / 배포

없음 (단독 Shell 스크립트, 설치 불필요)

### README 품질

매우 상세 (26,717bytes). 점검 항목 전체 목록, 조치 가이드, OS별 설치 명령어, 디버깅 방법, 체크리스트까지 포함.

### 포트폴리오 평가

**★★★★★ 강력 추천 (인프라/보안 직군)**  
KISA 공식 가이드 기반 109KB 단일 스크립트. 보안 점검 자동화, 리포트 생성, 다중 OS 지원까지 실무 수준. 보안/인프라 포트폴리오로 차별점이 큼.

### 개선 제안

- GitHub Actions 워크플로우 추가 시 CI 연동 시연 가능
- 점검 결과 샘플 스크린샷을 README에 추가하면 임팩트 상승

---

## #5 — Rag-Test

**저장소**: [WhiteJbb/Rag-Test](https://github.com/WhiteJbb/Rag-Test)  
**언어**: Python | **최종 수정**: 2026-04-06

### 구조

```
├── app.py            # Streamlit 웹 앱
├── rag.py            # CLI 버전
├── my_document.txt   # 참고 문서 (샘플)
└── chroma_db/        # 벡터 DB (자동 생성)
```

### 기술 스택

| 역할 | 기술 |
|------|------|
| LLM | Ollama `gemma4:e2b` |
| 임베딩 | Ollama `bge-m3` (다국어) |
| 벡터 DB | ChromaDB |
| 파이프라인 | LangChain |
| UI | Streamlit |

### 주요 특징

- **LLM 모델 비교 벤치마크** 포함 (5개 모델 속도/RAM/코드품질 비교표)
  - qwen2.5-coder:3b, gemma3:4b, phi4-mini, gemma4:e2b, Qwen3-1.7B
- local-rag-policy-chat의 **전신(프로토타입)** 성격

### Docker / 배포

없음

### README 품질

중간 수준 (3,327bytes). 실행 방법과 모델 비교표 포함.

### 포트폴리오 평가

**★★★☆☆ 보조 자료**  
#3(local-rag-policy-chat)이 이 프로젝트를 발전시킨 형태. 단독 포트폴리오로는 약하지만, RAG 개발 과정을 보여주는 데 활용 가능. 모델 비교 벤치마크는 독립 자료로 가치 있음.

### 개선 제안

- #3과 연결하여 "RAG 시스템 발전 과정" 스토리로 묶으면 효과적

---

## #6 — Oracledb

**저장소**: [WhiteJbb/Oracledb](https://github.com/WhiteJbb/Oracledb)  
**언어**: Java (Spring Boot) | **최종 수정**: 2026-03-10

> ※ GitHub 메타데이터에는 "C"로 표시되어 있으나 실제 Java/Spring Boot 프로젝트

### 구조

```
├── docker-compose.yml                      # 운영(1521) / 테스트(1522) Oracle DB
├── build.gradle                            # Spring Boot 3.2, Oracle JDBC
├── src/
│   ├── main/java/com/example/demo/
│   │   ├── DemoApplication.java
│   │   ├── controller/
│   │   ├── service/
│   │   └── repository/
│   └── test/java/com/example/demo/repository/
│       ├── DatabaseConnectionTest.java
│       ├── FullSchemaDriftDetectionTest.java
│       ├── PrimaryKeyDriftDetectionTest.java
│       ├── ForeignKeyDriftDetectionTest.java
│       ├── UniqueConstraintDriftDetectionTest.java
│       ├── NotNullConstraintDriftDetectionTest.java
│       ├── IndexDriftDetectionTest.java
│       ├── SequenceDriftDetectionTest.java
│       ├── ViewDriftDetectionTest.java
│       ├── TriggerDriftDetectionTest.java
│       ├── ColumnLengthDriftDetectionTest.java
│       ├── ColumnOrderDriftDetectionTest.java
│       └── PackageDriftDetectionTest.java
└── docs/
    ├── SCHEMA_DRIFT_TEST_REPORT.md
    ├── SCHEMA_CHECKER_ACCOUNT_SETUP.md
    └── DBEAVER_CONNECTION_GUIDE.md
```

### 기능

Oracle 운영 DB ↔ 테스트 DB 간 **스키마 드리프트 자동 검증** — 12개 항목:

| 분류 | 검증 항목 |
|------|-----------|
| 기본 구조 | 테이블명, 칼럼명, 데이터 타입, 칼럼 길이, 칼럼 순서 |
| 제약조건 | PK, FK, UNIQUE, NOT NULL |
| 고급 객체 | 인덱스, 시퀀스, 뷰, 트리거, 패키지 |

### 기술 스택

- Spring Boot 3.2 / Java 17 / Gradle 8.5
- Oracle XE 21c × 2 (Docker Compose)
- JUnit 5 + AssertJ
- 보안: `schema_checker` 읽기 전용 계정 (`SELECT ANY DICTIONARY`)

### Docker / 배포

`docker-compose.yml` 있음. 이중 Oracle XE 컨테이너 (포트 1521/1522).

### README 품질

매우 상세 (15,271bytes). 프로젝트 구조, 12개 검증 항목 설명, DB 연결 정보, SQL 쿼리 예시, CI/CD 통합 예시, GitHub Actions 예시까지 포함.

### 포트폴리오 평가

**★★★★★ 강력 추천 (백엔드/DB 직군)**  
이중 Oracle 환경, 12개 스키마 검증, JUnit 5 테스트 구조, 읽기 전용 보안 모델, CI/CD 통합 설계까지 엔터프라이즈 수준. DB에 진심인 개발자임을 잘 보여줌.

### 개선 제안

- GitHub Actions 워크플로우 실제 파일(.github/workflows) 추가 시 완성도 상승
- HTML/JSON 리포트 생성 기능 추가 (README에 향후 계획으로 이미 언급됨)

---

## #66 — Embedded_PJ (DroneDelivery2)

**저장소**: [DroneDelivery2/Embedded_PJ](https://github.com/DroneDelivery2/Embedded_PJ)  
**언어**: TypeScript + Python | **최종 수정**: 2025-11-19

### 구조

```
├── app/                    # Next.js 14 앱 (TypeScript)
│   ├── layout.tsx
│   ├── page.tsx            # 드론 연결 홈
│   ├── status/             # 배송 현황
│   └── request/            # 배송 요청
├── backend/                # Python Flask + Parrot Olympe SDK
│   ├── server.py
│   └── drone_controller.py
├── lib/droneApi.ts         # 드론 API 클라이언트
├── package.json            # Next.js 14, React 18, TypeScript
├── QUICKSTART_WINDOWS.md
├── SETUP.md
└── TRY_WSL1.md
```

### 기술 스택

| 레이어 | 기술 |
|--------|------|
| 프론트엔드 | Next.js 14, TypeScript, React 18 |
| 백엔드 | Python Flask |
| 드론 SDK | Parrot Olympe SDK |
| 하드웨어 | Parrot Anafi 드론 |

### 주요 기능

- 실제 Parrot Anafi 드론 WiFi 연결 및 제어
- 실시간 상태 모니터링 (배터리, GPS, 비행 상태)
- 웨이포인트 기반 자동 배송 미션
- PWA (Progressive Web App) 지원

### API 구조

```
POST /api/drone/connect       이륙
POST /api/drone/takeoff
POST /api/drone/land
POST /api/drone/move          위치 이동
POST /api/drone/mission       자동 배송 미션
GET  /api/drone/status
```

### Docker / 배포

없음 (WSL2 기반 개발 환경)

### README 품질

상세 (5,255bytes). 기술 스택, 기능 목록, API 엔드포인트, 프로젝트 구조 포함. Windows 전용 퀵스타트 가이드 별도 제공.

### 포트폴리오 평가

**★★★★★ 강력 추천 (차별화)**  
실제 드론 하드웨어 제어 + Next.js 14 + Python Flask 풀스택. 임베디드 + 웹의 결합이 드문 조합. 면접 스토리텔링 소재로 최상급.

### 개선 제안

- 실제 비행 영상/GIF를 README에 추가하면 임팩트 극대화
- Docker Compose로 백엔드 컨테이너화 가능

---

## #70 — Only_My_Web (2025-Krafton-401-6)

**저장소**: [2025-Krafton-401-6/Only_My_Web](https://github.com/2025-Krafton-401-6/Only_My_Web)  
**언어**: Python + JavaScript | **최종 수정**: 2025-12-10  
**팀원**: 박미소, **임동건**, 조건희

### 구조

```
├── app.py               # Flask 서버
├── status_dao.py        # MongoDB 데이터 접근
├── initialize.py        # 초기 DB 설정
├── requirements.txt
├── static/js/
│   ├── main.js          # 애플리케이션 진입점
│   ├── WasherState.js   # 상태 관리
│   ├── WasherEvent.js   # 이벤트 처리
│   ├── WasherUI.js      # UI 업데이트
│   └── request.js       # API 통신
└── templates/index.html
```

### 기술 스택

- Backend: Python Flask + MongoDB
- Frontend: Vanilla JS (ES6 모듈), Bootstrap 5, jQuery Ajax

### 주요 기능

- 기숙사 세탁기/건조기 실시간 현황 (남자/여자 세탁실 분리)
- 사용자 등록(이름, 호실), 타이머, 상태 복원
- 드럼 회전 애니메이션, 상태별 색상 구분

### Docker / 배포

없음

### README 품질

상세 (4,290bytes). 기능 설명, API 엔드포인트, 모듈 구조, 알려진 이슈 목록 포함.

### 포트폴리오 평가

**★★★☆☆ 팀 프로젝트 증빙용**  
실생활 문제 해결(기숙사 세탁실)이라는 명확한 기획. Flask + MongoDB + ES6 모듈 전체 흐름 구현. 팀 프로젝트 경험 증빙으로 활용 가능. 기술적 복잡도는 낮은 편.

### 개선 제안

- 알려진 버그(페이지 첫 로딩 복구 실패 등)를 수정하면 완성도 향상
- 배포 환경(Dockerfile or 클라우드) 추가 시 포트폴리오 가치 상승

---

## #71 — frontEnd (2025-Kraftonweek2-401-7)

**저장소**: [2025-Kraftonweek2-401-7/frontEnd](https://github.com/2025-Kraftonweek2-401-7/frontEnd)  
**언어**: HTML/CSS/JavaScript | **최종 수정**: 2025-12-10  
**프로젝트명**: DEV CARD HUNTER

### 구조

```
├── index.html                   # 메인 웹 앱
├── style.css                    # 전체 스타일 (38KB)
├── js/
│   ├── app.js                  # 메인 컨트롤러
│   ├── data-manager.js         # API 통신 / 데이터 관리
│   ├── stampbook.js            # 카드 컬렉션 화면
│   ├── collection.js           # 컬렉션 세트 관리
│   ├── synthesis.js            # 카드 합성
│   └── request.js              # API 요청
└── stamp-chrome-extension/
    ├── manifest.json           # Chrome Extension Manifest V3
    ├── background.js           # Service Worker
    ├── content.js              # 사이트 방문 감지
    ├── popup.js / popup_new.html
    └── icons/
```

### 기능

- 개발 관련 사이트 방문 시 자동 카드 획득 (Chrome Extension)
- 희귀도 시스템: Common / Rare / Epic / Legendary
- 카테고리: BACKEND, FRONTEND, DEVOPS, AI, TOOL, LEARNING, DATABASE
- 카드 5장 합성으로 상위 등급 생성
- 칭호 시스템 (수집 수량, 컬렉션 완성 기준)
- JWT 인증, OAuth2 로그인

### 기술 스택

- Vanilla JS (ES6 모듈), HTML5/CSS3
- Chrome Extension (Manifest V3, Content Script, Background Service Worker)
- RESTful API 연동, JWT 인증

### Docker / 배포

없음 (정적 파일 서버 or Python http.server)

### README 품질

매우 상세 (6,738bytes). 기능 설명, 기술 스택, 프로젝트 구조, 사용법, Chrome 확장 설치 방법, 카드 등급 표, 칭호 시스템 전체 포함.

### 포트폴리오 평가

**★★★★☆ 추천 (아이디어 차별화)**  
개발자 학습을 게임화한다는 아이디어가 독창적. Chrome Extension Manifest V3 구현 경험은 차별점. Vanilla JS로 모듈 시스템을 직접 구성한 점도 긍정적. 빌드 도구 없이 구현된 점은 한계.

### 개선 제안

- 실제 Chrome 웹스토어 배포 이력이 있으면 링크 추가
- 데모 영상이나 GIF 추가 시 포트폴리오 임팩트 상승

---

---

## work-agent

**저장소**: [WhiteJbb/work-agent](https://github.com/WhiteJbb/work-agent)  
**언어**: Python | **생성**: 2026-06-22 | **최종 수정**: 2026-06-26

### 구조

```
app/
├── cli.py              # 진입점 (48KB, 전체 명령 라우팅)
├── config.py           # .env 설정
├── agents/             # 15개 LLM 파이프라인 모듈
│   ├── capture_agent.py        # Raw 기록 저장 (21KB)
│   ├── distill_agent.py        # 정제 후보 생성 (12KB)
│   ├── wiki_blog_agent.py      # 블로그 초안 생성 (13KB)
│   ├── nightly_distill_agent.py
│   ├── career_bullet_agent.py
│   ├── curator_agent.py
│   ├── task_agent.py           # Telegram 할 일 관리
│   ├── worklog_agent.py
│   ├── resume_agent.py
│   └── ...
├── llm/                # FallbackChain + 4개 Provider
├── messaging/          # Telegram 봇
├── memory/             # AgentMemory, ContextPackBuilder
├── content_sources/    # Obsidian / Git / LocalDoc 소스
└── prompts/*.md        # LLM 프롬프트 분리
dashboard.py            # Textual TUI 대시보드 (21KB)
install.ps1             # 자동 설치 스크립트 (Windows)
```

### 기술 스택

| 역할 | 기술 |
|------|------|
| 언어 | Python 3.10+ |
| 지식 저장소 | Obsidian Vault |
| LLM (light) | Gemini Flash-Lite → GPT-4.1-mini → Ollama |
| LLM (writer) | Gemini Flash → GPT-4.1-mini → Kimi |
| LLM (long_writer) | Kimi → Gemini Flash → GPT-4.1-mini |
| LLM (polish) | GPT-4.1-mini → Gemini Flash |
| TUI | Textual |
| 메신저 | Telegram Bot API |
| 테스트 | pytest (Vault/LLM/메신저 모두 mock) |

### 핵심 아이디어

Obsidian Vault를 단일 지식 저장소로 삼아 5단계 파이프라인 구성:

```
[Capture] → [Distill] → [Curate] → [Generate] → [Deliver]
 00_Inbox    60_Candidates  검토·승격  50_Outputs   Telegram·Blog
 10_Worklog
```

"LLM은 창작자가 아닌 작업 기록 정리자" — source에 없는 사실·수치를 생성하지 않는 설계 철학.

### 주요 특징

- **멀티 LLM 라우팅** — task_type별(light/writer/long_writer/polish/local) 자동 provider 선택 + FallbackChain
- **15개 LLM 파이프라인 모듈** — Capture, Distill, WikiBlog, Curator, CareerBullet, OpenLoops, Task, Worklog, Resume, Portfolio, NightlyDistill 등 (각 모듈은 LLM API를 호출하는 Python 클래스. 자율적 도구 선택이나 루프는 없고, CLI 명령이 직접 라우팅)
- **야간 자동화** — 08:00 아침 알림 / 23:30 nightly-distill / 21:30 저녁 알림 / 일요일 18:00 weekly-distill
- **Telegram 봇** — /task, /tasks, /capture, /distill, /write, /portfolio 등 전체 기능 접근 + URL 자동 캡처
- **외부 AI 툴 연동** — Claude Code / Cursor에서 `capture-session`, `build-context` 명령으로 세션 컨텍스트 관리
- **vault 권한 모델** — `00_Inbox/`, `10_Worklog/`, `50_Outputs/`, `60_Candidates/`만 LLM 쓰기 허용. `20_Knowledge/`, `40_AgentMemory/Core/`는 사람 검토 후 promote

### 활동성

가장 최근에 생성되고 가장 활발히 커밋 중인 저장소. 하루에 10개 이상 커밋 기록 있음. 실제 개인 생산성 도구로 사용 중.

### Docker / 배포

Windows 전용 (`install.ps1`, `launch.bat`). Dockerfile 없음.

### README 품질

매우 상세 (14,979bytes). 설치, AI 설정(5개 provider), Vault 구조, 전체 명령 목록, AI Agent 연동, 야간 자동화, Telegram 봇 사용법까지 포함. AGENTS.md(11KB), CLAUDE.md(4.5KB) 별도 작성.

### 포트폴리오 평가

**★★★★★ 강력 추천 (LLM 활용 / DevTool 직군)**  
멀티 LLM 라우팅 + FallbackChain + 15개 LLM 파이프라인 모듈 + Telegram 봇 + Textual TUI + Obsidian 연동까지 LLM 워크플로우 설계 역량을 잘 보여주는 저장소. 단, "AI 에이전트 시스템"보다는 "LLM을 활용한 개인 생산성 자동화 CLI"로 소개해야 면접에서 정확한 표현으로 인정받을 수 있음. "직접 쓰는 도구를 직접 만들었다"는 스토리도 강력.

### 개선 제안

- Linux/Mac 지원 (현재 Windows 전용 install.ps1)
- Docker Compose로 전체 스택 컨테이너화 시 배포 시연 가능
- demo GIF나 스크린샷 추가 시 README 임팩트 상승

---

## high-school-c-archive

**저장소**: [WhiteJbb/high-school-c-archive](https://github.com/WhiteJbb/high-school-c-archive)  
**언어**: C/C++ + HTML | **생성**: 2026-06-21 | **배포**: https://c-archive.whitejbb.cloud

### 구조

```
projects/
├── text-rpg-game/          # 행성:지구 — 텍스트 RPG (탐험/전투/슬롯머신)
├── horse-betting-game/     # 말 경주 베팅 게임
├── library-system/         # 파일 기반 도서관 관리 시스템
├── encryption/             # 난수 키 암호화/복호화 실습
├── money-manager/          # 원리합계 계산기
├── newton-method/          # Newton-Raphson 수치 해석
├── physics/                # 포물선 운동 계산기
├── shoppingline-calculator/ # 계산대 대기열 시뮬레이션
└── snail-array/            # n×n 달팽이 배열

tools/web-terminal/
└── archive_terminal.h      # 공통 WASM 입출력 래퍼

web/
├── index.html              # 웹 터미널 UI (23KB, 단일 파일)
├── projects.json           # 프로젝트 메타데이터
└── CNAME                   # c-archive.whitejbb.cloud

.github/workflows/
└── pages.yml               # Emscripten 빌드 + GitHub Pages 자동 배포
```

### 기술 스택

| 역할 | 기술 |
|------|------|
| 원본 언어 | C / C++ |
| 웹 변환 | Emscripten (C → WebAssembly) |
| 빌드 | Makefile (native + web 타깃) |
| 웹 UI | Vanilla HTML/CSS/JS (단일 파일) |
| 세이브 | IndexedDB (text-rpg-game) |
| CI/CD | GitHub Actions |
| 배포 | GitHub Pages + 커스텀 도메인 |

### 프로젝트 목록 (9개)

| 프로젝트 | 특이사항 |
|----------|----------|
| 행성 : 지구 | IndexedDB 세이브, 자체 Emscripten 입출력 래퍼 |
| Horse Betting Game | 다섯 말 경주, 상금/손실 계산 |
| Library System | 파일 I/O 기반 대출/반납 시스템 |
| Encryption Experiments | 난수 키 암복호화 |
| Money Manager | 복리 계산기 |
| Newton Method | 수치해석 (e^x + x^3 근사) |
| Physics Calculator | 포물선 운동 물리 계산 |
| Shopping Line Calculator | 대기열 시뮬레이션 |
| Snail Array | 2D 배열 알고리즘 |

### 핵심 설계 결정

- **보존 원칙** — 출력문·메뉴·프롬프트를 번역/의역 없이 그대로 유지. 최소한의 WASM 이식만 적용 (`system`, `Sleep`, `scanf_s`, `gets`, 절대경로 등 런타임 문제만 수정)
- **공통 래퍼** — `archive_terminal.h`로 printf/scanf를 WASM 환경에 일괄 추상화
- **자동화 CI** — push 시 Emscripten 빌드 → GitHub Pages 배포 전체 자동화

### Docker / 배포

GitHub Actions + GitHub Pages. 커스텀 도메인(c-archive.whitejbb.cloud) 연결 완료.

### README 품질

상세 (5,613bytes). 프로젝트 목록, 구조, 웹 터미널 사용법, 빌드 방법, 배포 흐름, 보존 원칙 포함.

### 포트폴리오 평가

**★★★★☆ 추천 (스토리텔링 / 기술 깊이 증명)**  
단순 C 코드 모음이 아니라 **C → WASM 변환 + 웹 터미널 + CI/CD + 커스텀 도메인**까지 구축. "고등학교 때 만든 코드를 웹에서 실행되게 살렸다"는 스토리는 면접 대화 소재로 강력. 기술적으로도 Emscripten 실제 사용 경험이 차별점.

### 개선 제안

- 각 게임의 플레이 화면 GIF를 README에 추가하면 즉각적인 임팩트 상승
- text-rpg-game이 가장 볼륨이 크니 별도 데모 영상 제작 고려

---

## 종합 우선순위

| 순위 | 저장소 | 추천 직군 | 이유 |
|------|--------|-----------|------|
| 1 | **#3 local-rag-policy-chat** | AI/백엔드 | RAG 풀스택, 한국어 NLP, 할루시네이션 대응까지 완성도 최고 |
| 2 | **work-agent** | LLM 활용/DevTool | 멀티 LLM 라우팅 + 15개 LLM 파이프라인 모듈 + Telegram 봇 + TUI, 실제 사용 중인 도구 |
| 3 | **#6 Oracledb** | 백엔드/DB | 엔터프라이즈 Java, 12개 스키마 검증, 테스트 설계 |
| 4 | **#66 Embedded_PJ** | 풀스택/임베디드 | 드론 하드웨어 + 웹 결합, 스토리텔링 소재 최강 |
| 5 | **#4 Kisa_unix_check** | 인프라/보안 | KISA 기반 67개 자동 점검, 실무 보안 역량 증명 |
| 6 | **high-school-c-archive** | 스토리텔링/기술 깊이 | C→WASM+웹터미널+CI/CD, 개발자의 뿌리를 보여주는 강력한 면접 소재 |
| 7 | **#71 frontEnd (DEV CARD HUNTER)** | 프론트/기획 | Chrome Extension, 게임화 아이디어 차별성 |
| 8 | **#70 Only_My_Web** | 팀 경험 증빙 | Flask+MongoDB+JS 풀스택, 실생활 문제 해결 |
| 9 | **#5 Rag-Test** | 보조 자료 | #3의 전신, 모델 벤치마크 자료로만 활용 |
