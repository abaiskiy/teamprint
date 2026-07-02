import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TeamPrint — сублимационная печать и пошив в Алматы";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAF7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent bar left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "8px",
            background: "#E64A19",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#0F0F0F",
              letterSpacing: "-2px",
            }}
          >
            Team
          </span>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#E64A19",
              letterSpacing: "-2px",
            }}
          >
            Print
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#0F0F0F",
            lineHeight: 1.2,
            maxWidth: "800px",
            marginBottom: "32px",
          }}
        >
          Сублимационная печать и пошив для бизнеса
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "28px",
            color: "#5C5C5C",
            lineHeight: 1.4,
          }}
        >
          Флаги, текстиль, спортивная форма · Алматы · от 1 дня
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "24px",
            color: "#5C5C5C",
            fontWeight: 600,
          }}
        >
          teamprint.kz
        </div>
      </div>
    ),
    { ...size }
  );
}
