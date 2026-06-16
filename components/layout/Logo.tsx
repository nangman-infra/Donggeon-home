type LogoProps = {
  className?: string;
};

/**
 * 브랜드 마크 — 차콜 타일 위 한글 초성 모노그램 "ㄷㄱ"(동건).
 * ㄷ는 흰색(주 형태), ㄱ는 Electric Blue(단일 액센트 = 건 획)로 분리해
 * 포인트 컬러가 장식이 아니라 의미를 갖도록 했다.
 * favicon(app/icon.svg)과 동일한 패스를 사용한다.
 */
export function Logo({ className = "h-7 w-7" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="15" fill="#0f172a" />
      {/* ㄷ */}
      <path
        d="M31 19 L17 19 L17 45 L31 45"
        fill="none"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* ㄱ — 단일 포인트 컬러 */}
      <path
        d="M33 24 L47 24 L47 45"
        fill="none"
        stroke="#2563eb"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
