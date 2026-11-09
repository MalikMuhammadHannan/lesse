import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

export const alt = `${SITE_NAME} — Design & Technology Studio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default share image for every route that doesn't set its own.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#000000",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#8a8a8a" }}>
          Design &amp; Technology Studio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 140, fontWeight: 700, fontStyle: "italic", lineHeight: 1 }}>{SITE_NAME}</div>
          <div style={{ marginTop: 32, fontSize: 40, color: "#bdbdbd", maxWidth: 900 }}>
            Brand strategy, identity, web &amp; product development.
          </div>
        </div>
      </div>
    ),
    size
  );
}
