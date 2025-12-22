# 동건의 개인 홈페이지

Next.js 15 기반의 클라우드 엔지니어 포트폴리오 웹사이트입니다.

## ✨ 주요 기능

- 🎨 **풀페이지 스크롤**: 메인 페이지의 부드러운 섹션 전환
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- 📝 **Tistory 블로그 연동**: 실시간 RSS 피드 연동
- 📧 **EmailJS 연락 폼**: 실제 이메일 전송 기능
- 🚀 **GitHub Pages 자동 배포**: CI/CD 파이프라인 구축
- 🎭 **Framer Motion 애니메이션**: 부드러운 페이지 전환 효과

## 🛠 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Runtime**: Node.js 22.x
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Pretendard 폰트
- **Animation**: Framer Motion
- **Package Manager**: pnpm 10.26.1
- **Deployment**: GitHub Pages + GitHub Actions
- **Email Service**: EmailJS
- **Blog Integration**: Tistory RSS

## 🚀 시작하기

### 사전 요구사항

- Node.js 22.x
- pnpm 10.26.1

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
pnpm build
```

### 프로덕션 실행

```bash
pnpm start
```

## 📁 프로젝트 구조

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 전역 레이아웃
│   ├── page.tsx           # 메인 페이지 (풀페이지 스크롤)
│   ├── about/             # 자기소개 페이지
│   ├── projects/          # 프로젝트 포트폴리오
│   ├── blog/              # 블로그 (Tistory 연동)
│   ├── resume/            # 이력서
│   └── contact/           # 연락처 (EmailJS)
├── components/            # 재사용 가능한 컴포넌트
│   ├── layout/           # Header, Footer
│   └── ui/               # UI 컴포넌트
├── lib/                  # 유틸리티 함수
│   └── tistory.ts        # Tistory RSS 연동
├── .github/workflows/    # GitHub Actions
└── public/               # 정적 파일
```

## 🔧 환경 설정

### EmailJS 설정 (연락 폼)

1. [EmailJS](https://www.emailjs.com/) 계정 생성
2. 서비스 및 템플릿 설정
3. `.env.local` 파일 생성:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

자세한 설정 방법은 `EMAILJS_SETUP.md` 참조

### GitHub Pages 배포

1. GitHub 저장소 Settings → Pages → Source를 "GitHub Actions"로 설정
2. GitHub Secrets에 EmailJS 키 추가:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

자세한 배포 방법은 `DEPLOYMENT.md` 참조

## 🎨 커스터마이징

### 개인 정보 수정

- **자기소개**: `app/about/page.tsx`
- **프로젝트**: `app/projects/page.tsx`
- **이력서**: `app/resume/page.tsx`
- **연락처**: `app/contact/page.tsx`

### 블로그 연동

`lib/tistory.ts`에서 RSS URL 변경:

```typescript
const RSS_URL = "https://your-blog.tistory.com/rss";
```

### 스타일 수정

- **전역 스타일**: `app/globals.css`
- **Tailwind 설정**: `tailwind.config.ts`
- **컴포넌트 스타일**: 각 컴포넌트 파일

## 🌐 배포된 사이트

- **Production**: [https://nangman-infra.github.io/Donggeon-home/](https://nangman-infra.github.io/Donggeon-home/)
- **Blog**: [https://exit0.tistory.com](https://exit0.tistory.com)

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

## 🤝 기여

이슈나 개선 사항이 있으면 언제든지 PR을 보내주세요!

---

**Made by 동건**
