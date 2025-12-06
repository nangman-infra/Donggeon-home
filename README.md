# 동건의 개인 홈페이지

Next.js 15 기반의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Package Manager**: npm

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 페이지 구조

- `/` - 메인 페이지
- `/about` - 자기소개
- `/projects` - 프로젝트 포트폴리오
- `/blog` - 블로그
- `/resume` - 이력서
- `/contact` - 연락처

## 커스터마이징

각 페이지의 내용을 수정하려면 `app/` 디렉토리 내의 해당 페이지 파일을 편집하세요.

- 개인 정보: `app/about/page.tsx`
- 프로젝트: `app/projects/page.tsx`
- 블로그 포스트: `app/blog/page.tsx`
- 이력서: `app/resume/page.tsx`
- 연락처: `app/contact/page.tsx`

## 라이선스

MIT
