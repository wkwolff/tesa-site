import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Open Graph Image for Blog Posts
 * Generates a dynamic 1200x630 image for each blog post
 */

// Use nodejs runtime since we need file system access
export const runtime = "nodejs";

// Simple function to get post data for OG image (avoids importing full blog.ts)
function getPostForOG(slug: string) {
  const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

  // Try .mdx first, then .md
  let filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    author: data.author || "TESA Team",
    tags: data.tags || [],
  };
}

export const alt = "TESA Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostForOG(resolvedParams.slug);

  if (!post) {
    // Return default image if post not found
    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #1a237e 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "48px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          TESA Blog
        </div>
      ),
      { ...size }
    );
  }

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #1a237e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        {/* Top Bar - Blog Label & TESA Branding */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          {/* Blog Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: "#d4a017",
                color: "#1a237e",
                padding: "8px 20px",
                borderRadius: "20px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              BLOG
            </div>
          </div>

          {/* TESA Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #d4a017 0%, #b38b10 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#1a237e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                TESA
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Post Title */}
          <div
            style={{
              fontSize: post.title.length > 60 ? "42px" : "52px",
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.2,
              marginBottom: "24px",
              maxWidth: "900px",
            }}
          >
            {post.title}
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "32px",
                flexWrap: "wrap",
              }}
            >
              {post.tags.slice(0, 3).map((tag: string) => (
                <div
                  key={tag}
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "white",
                    padding: "6px 16px",
                    borderRadius: "16px",
                    fontSize: "16px",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Bar - Author & Date */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "24px",
          }}
        >
          {/* Author Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#d4a017",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1a237e",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {post.author.charAt(0)}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ color: "white", fontSize: "20px", fontWeight: "600" }}>
                {post.author}
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "16px" }}>
                {formattedDate}
              </div>
            </div>
          </div>

          {/* Site URL */}
          <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "18px" }}>
            tesa4space.org/blog
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
