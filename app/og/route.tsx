import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const title =
    request.nextUrl.searchParams.get("title")?.trim() ||
    "Bradley Innovations Group";

  const displayTitle =
    title.length > 90 ? `${title.slice(0, 87).trimEnd()}…` : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 42,
            letterSpacing: "0.04em",
            color: "#0B0B0B",
            fontWeight: 700,
          }}
        >
          BIG
        </div>
        <div
          style={{
            display: "flex",
            width: 72,
            height: 2,
            backgroundColor: "#D2AB36",
            marginTop: 28,
            marginBottom: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 48,
            lineHeight: 1.2,
            color: "#0B0B0B",
            maxWidth: 980,
          }}
        >
          {displayTitle}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 22,
            color: "#524315",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Bradley Innovations Group
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
