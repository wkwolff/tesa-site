import { MetadataRoute } from "next";

/**
 * Site URL - used for sitemap reference
 */
const SITE_URL = "https://tesa4space.org";

/**
 * Generate robots.txt configuration for TESA website
 *
 * Configuration:
 * - Allow all crawling (no disallow rules for MVP)
 * - Reference sitemap.xml location
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
