# GitHub Pages 배포 가이드

이 문서는 Next.js 프로젝트를 GitHub Pages에 배포하고 CI/CD를 구성하는 방법을 설명합니다.

## 📋 사전 준비

1. GitHub 계정
2. Git 설치
3. 프로젝트가 GitHub 저장소에 업로드되어 있어야 함

## 🚀 배포 단계

### 1. GitHub 저장소 설정

#### 1-1. 저장소 생성 (아직 안 했다면)

```bash
# 로컬에서 Git 초기화
git init
git add .
git commit -m "Initial commit"

# GitHub에 저장소 생성 후
git remote add origin https://github.com/whitejbb/Donggeon-home.git
git branch -M main
git push -u origin main
```

#### 1-2. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source**를 **GitHub Actions**로 선택

### 2. 환경 변수 설정 (EmailJS 사용 시)

1. GitHub 저장소 → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** 클릭
3. 다음 3개의 시크릿 추가:
   - `EMAILJS_SERVICE_ID`: EmailJS 서비스 ID
   - `EMAILJS_TEMPLATE_ID`: EmailJS 템플릿 ID
   - `EMAILJS_PUBLIC_KEY`: EmailJS Public Key

### 3. basePath 설정 (필요한 경우)

#### 커스텀 도메인을 사용하지 않는 경우

저장소 이름이 `username.github.io`가 아니라면 `next.config.ts`에서 주석을 해제하세요:

```typescript
// next.config.ts
basePath: "/Donggeon-home",
assetPrefix: "/Donggeon-home",
```

그리고 다음 파일들도 수정:

**components/layout/Header.tsx**
```typescript
<Link href="/Donggeon-home/">홈</Link>
<Link href="/Donggeon-home/about">소개</Link>
// ... 등등
```

#### 커스텀 도메인 사용 시

1. 저장소 루트에 `public/CNAME` 파일 생성
2. 도메인 입력 (예: `donggeon.dev`)
3. DNS 설정에서 GitHub Pages IP 추가

### 4. 배포 실행

#### 자동 배포 (권장)

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

push하면 자동으로 GitHub Actions가 실행되어 배포됩니다!

#### 수동 배포

1. GitHub 저장소 → **Actions** 탭
2. **Deploy to GitHub Pages** 워크플로우 선택
3. **Run workflow** 클릭

### 5. 배포 확인

1. **Actions** 탭에서 워크플로우 진행 상황 확인
2. 완료되면 다음 URL에서 확인:
   - 일반: `https://whitejbb.github.io/Donggeon-home/`
   - 커스텀 도메인: `https://your-domain.com`

## 📁 프로젝트 구조

```
.github/
  workflows/
    deploy.yml          # GitHub Actions 워크플로우
out/                    # 빌드된 정적 파일 (자동 생성)
public/
  .nojekyll            # Jekyll 비활성화
  CNAME                # 커스텀 도메인 (선택사항)
```

## 🔧 문제 해결

### 빌드 실패

**증상**: Actions에서 빌드가 실패함

**해결**:
1. Actions 탭에서 에러 로그 확인
2. 로컬에서 `npm run build` 테스트
3. 환경 변수가 제대로 설정되었는지 확인

### 페이지가 404 에러

**증상**: 배포는 성공했지만 페이지가 안 보임

**해결**:
1. `next.config.ts`의 `basePath` 설정 확인
2. GitHub Pages 설정에서 Source가 **GitHub Actions**인지 확인
3. `.nojekyll` 파일이 있는지 확인

### CSS/이미지가 안 보임

**증상**: 페이지는 보이지만 스타일이나 이미지가 깨짐

**해결**:
1. `next.config.ts`에서 `assetPrefix` 설정 확인
2. 이미지 경로가 절대 경로인지 확인
3. `images.unoptimized: true` 설정 확인

### EmailJS가 작동 안 함

**증상**: 연락 폼 전송이 실패함

**해결**:
1. GitHub Secrets에 EmailJS 키가 제대로 설정되었는지 확인
2. 브라우저 콘솔에서 환경 변수 값 확인
3. EmailJS 대시보드에서 도메인 허용 설정 확인

## 🔄 업데이트 방법

코드를 수정한 후:

```bash
git add .
git commit -m "Update content"
git push origin main
```

자동으로 재배포됩니다! (약 2-3분 소요)

## 📊 배포 상태 확인

- **Actions 탭**: 빌드 및 배포 진행 상황
- **Environments**: 배포된 환경 확인
- **Settings → Pages**: 배포 URL 확인

## 🎯 최적화 팁

1. **이미지 최적화**: WebP 포맷 사용
2. **캐싱**: GitHub Pages는 자동으로 CDN 캐싱 제공
3. **빌드 시간 단축**: 불필요한 의존성 제거
4. **SEO**: `metadata` 설정 확인

## 📚 참고 자료

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages 문서](https://docs.github.com/en/pages)
- [GitHub Actions 문서](https://docs.github.com/en/actions)

## 💡 추가 기능

### 커스텀 도메인 설정

1. 도메인 구매 (예: Namecheap, GoDaddy)
2. DNS 설정:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
3. `public/CNAME` 파일에 도메인 입력
4. GitHub Pages 설정에서 커스텀 도메인 입력

### 배포 알림 설정

Slack, Discord 등으로 배포 알림을 받을 수 있습니다.
`.github/workflows/deploy.yml`에 알림 단계 추가하세요.

## ⚠️ 주의사항

- GitHub Pages는 정적 사이트만 지원 (서버 사이드 기능 제한)
- 무료 플랜은 공개 저장소만 가능
- 빌드 시간 제한: 10분
- 저장소 크기 제한: 1GB
- 대역폭 제한: 월 100GB
