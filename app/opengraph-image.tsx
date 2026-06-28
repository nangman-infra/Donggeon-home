import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Donggeon Im — AI Product Engineer";

function Mark() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: 96,
        height: 96,
        borderRadius: 22,
        backgroundColor: "#1e293b",
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
          borderTop: "7px solid #f8fafc",
          borderLeft: "7px solid #f8fafc",
          borderBottom: "7px solid #f8fafc",
        }}
      />
      {/* ㄱ */}
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
          backgroundColor: "#0f172a",
          padding: 76,
          fontFamily: "sans-serif",
        }}
      >
        {/* 상단 */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <Mark />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 18, letterSpacing: 4, color: "#475569", fontWeight: 700 }}>
              AI PRODUCT ENGINEER
            </div>
            <div style={{ fontSize: 30, color: "#f8fafc", fontWeight: 700, marginTop: 4 }}>
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
              color: "#f8fafc",
            }}
          >
            AI as a product,
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 70, lineHeight: 1.08, letterSpacing: -2, fontWeight: 800 }}>
            <span style={{ color: "#64748b" }}>not just</span>
            <span style={{ color: "#2563eb" }}>a demo.</span>
          </div>
        </div>

        {/* 하단 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#475569", fontWeight: 600 }}>
            RAG · On-premise LLM · LangGraph · AI Infra
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#334155", fontWeight: 600 }}>
            donggeon.nangman.cloud
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
