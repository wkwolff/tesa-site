import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Site URL - used for all sitemap entries
 */
const SITE_URL = "https://tesa4space.org";

/**
 * Get all blog post slugs for dynamic sitemap generation
 * Reads from src/content/blog directory
 */
function getBlogPostSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "src/content/blog");

  // Check if directory exists
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDir);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.(mdx|md)$/, ""));
}

/**
 * Generate XML sitemap for TESA website
 *
 * Includes:
 * - All static pages (/, /about, /program, /scholarships, /partnerships, /contact, /blog)
 * - Dynamic blog post URLs
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Current date for lastModified
  const currentDate = new Date();

  // Static pages with their priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/program`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/scholarships`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/partnerships`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic blog post pages
  const blogSlugs = getBlogPostSlugs();
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
