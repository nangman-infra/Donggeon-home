# EmailJS 설정 가이드

EmailJS를 사용하여 연락처 폼에서 실제 이메일을 받을 수 있습니다.

## 1. EmailJS 계정 생성

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. 무료 계정 가입 (월 200개 이메일 무료)

## 2. 이메일 서비스 추가

1. EmailJS 대시보드에서 **Email Services** 클릭
2. **Add New Service** 클릭
3. Gmail, Outlook 등 원하는 서비스 선택
4. 이메일 계정 연결
5. **Service ID**를 복사해두기

## 3. 이메일 템플릿 생성

1. **Email Templates** 클릭
2. **Create New Template** 클릭
3. 템플릿 내용 작성:

```
Subject: 홈페이지 문의: {{from_name}}님의 메시지

안녕하세요 {{to_name}}님,

{{from_name}}님으로부터 새로운 메시지가 도착했습니다.

발신자 이메일: {{from_email}}

메시지 내용:
{{message}}

---
이 메시지는 개인 홈페이지 연락 폼에서 전송되었습니다.
```

4. **Template ID**를 복사해두기

## 4. Public Key 확인

1. **Account** → **General** 클릭
2. **Public Key** 복사

## 5. 환경 변수 설정

`.env.local` 파일을 열어서 아래 값들을 입력하세요:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. 개발 서버 재시작

환경 변수를 변경했으므로 개발 서버를 재시작해야 합니다:

```bash
# 서버 중지 (Ctrl + C)
# 서버 재시작
npm run dev
```

## 7. 테스트

1. http://localhost:3000/contact 페이지 접속
2. 폼 작성 후 전송
3. 설정한 이메일 계정에서 메일 확인

## 문제 해결

### 이메일이 안 오는 경우

1. `.env.local` 파일의 값이 정확한지 확인
2. EmailJS 대시보드에서 서비스가 활성화되어 있는지 확인
3. 브라우저 콘솔에서 에러 메시지 확인
4. Gmail 사용 시 "보안 수준이 낮은 앱" 허용 설정 확인

### 무료 플랜 제한

- 월 200개 이메일까지 무료
- 초과 시 유료 플랜으로 업그레이드 필요

## 보안 참고사항

- Public Key는 클라이언트에 노출되어도 안전합니다
- Private Key는 절대 코드에 포함하지 마세요
- `.env.local` 파일은 `.gitignore`에 포함되어 있어 Git에 업로드되지 않습니다
