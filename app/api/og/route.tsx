import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get title from search params or use default
    const title = searchParams.get("title") || "Kushagra Dhawan";
    const subtitle = searchParams.get("subtitle") || "Product Builder and Designer";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#101010",
            backgroundImage: "radial-gradient(circle at 25px 25px, #303030 2%, transparent 0%), radial-gradient(circle at 75px 75px, #303030 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            padding: 50,
            position: "relative",
          }}
        >
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(45deg, rgba(76, 153, 204, 0.3), rgba(76, 153, 204, 0.1))",
              zIndex: 0,
            }}
          />

          {/* Content container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "20px 40px",
              borderRadius: 12,
              color: "white",
              fontSize: 60,
              fontWeight: "bold",
              background: "rgba(0, 0, 0, 0.4)",
              width: "90%",
              zIndex: 1,
            }}
          >
            <p style={{ color: "rgba(76, 153, 204, 1)", margin: 0, marginBottom: 10, fontSize: 32 }}>Kushagra Dhawan</p>
            <h1 style={{ margin: 0, lineHeight: 1.2, fontSize: 60, fontWeight: 900 }}>{title}</h1>
            {subtitle && <p style={{ margin: 0, marginTop: 20, fontSize: 32, color: "#d0d0d0", fontWeight: "normal" }}>{subtitle}</p>}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
