import { ImageResponse } from "next/og";

/**
 * Open Graph Image Configuration
 * Generates a 1200x630 image for social sharing
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
 */

export const runtime = "edge";

export const alt = "TESA - The Engineering and Science Academy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/**
 * Generate Open Graph image for TESA
 *
 * Creates a branded image with:
 * - Navy blue gradient background matching TESA brand
 * - Organization name and tagline
 * - Key credentials
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #1a237e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Main Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          {/* TESA Circle Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #d4a017 0%, #b38b10 100%)",
              marginBottom: "30px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1a237e 0%, #3949ab 100%)",
                color: "white",
                fontSize: "52px",
                fontWeight: "bold",
                letterSpacing: "-2px",
              }}
            >
              TESA
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: "56px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "16px",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            The Engineering and Science Academy
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "#d4a017",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Credit-Bearing Aerospace Courses for High School
          </div>

          {/* Credentials Bar */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#d4a017",
                }}
              />
              Space Camp Hall of Fame 2025
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#d4a017",
                }}
              />
              Naval Academy Professor
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#d4a017",
                }}
              />
              Industry Certifications
            </div>
          </div>
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          tesa4space.org
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
