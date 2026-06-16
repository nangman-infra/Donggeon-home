import { ImageResponse } from "next/og";

// 정적 export에서 빌드 타임에 PNG로 굽도록 강제
export const dynamic = "force-static";

// 링크 공유 시 노출되는 1200×630 OG 카드 — 빌드 시 정적 PNG로 생성된다.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Donggeon Im — AI/AX Engineer";

// 브랜드 마크(ㄷㄱ)를 satori 안전하게 CSS 보더로 재구성
function Mark() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: 96,
        height: 96,
        borderRadius: 22,
        backgroundColor: "#0f172a",
      }}
    >
      {/* ㄷ */}
      <div
        style={{
          position: "absolute",
          left: 24,
          top: 26,
          width: 18,
          height: 44,
          borderTop: "7px solid #ffffff",
          borderLeft: "7px solid #ffffff",
          borderBottom: "7px solid #ffffff",
        }}
      />
      {/* ㄱ — 단일 포인트 컬러 */}
      <div
        style={{
          position: "absolute",
          left: 50,
          top: 34,
          width: 18,
          height: 36,
          borderTop: "7px solid #2563eb",
          borderRight: "7px solid #2563eb",
        }}
      />
    </div>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: 76,
          fontFamily: "sans-serif",
        }}
      >
        {/* 상단: 마크 + 식별 */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <Mark />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 18, letterSpacing: 4, color: "#94a3b8", fontWeight: 700 }}>
              AI / AX ENGINEER
            </div>
            <div style={{ fontSize: 30, color: "#0f172a", fontWeight: 700, marginTop: 4 }}>
              Donggeon Im
            </div>
          </div>
        </div>

        {/* 가치 제안 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 70,
              lineHeight: 1.08,
              letterSpacing: -2,
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            On-premise RAG services,
          </div>
          <div style={{ display: "flex", fontSize: 70, lineHeight: 1.08, letterSpacing: -2, fontWeight: 800 }}>
            <span style={{ color: "#0f172a" }}>{"built "}</span>
            <span style={{ color: "#2563eb" }}>end-to-end.</span>
          </div>
        </div>

        {/* 하단 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e5e7eb",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#475569", fontWeight: 600 }}>
            RAG · On-prem LLM · AI Infra · DevOps
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#94a3b8", fontWeight: 600 }}>
            donggeon.nangman.cloud
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
