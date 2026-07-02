import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#E64A19",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "96px",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: "220px",
            fontWeight: 800,
            letterSpacing: "-8px",
            fontFamily: "sans-serif",
          }}
        >
          TP
        </span>
      </div>
    ),
    { ...size }
  );
}
