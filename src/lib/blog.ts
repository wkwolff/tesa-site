import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { BlogPost, BlogPostMeta } from "./blog-types";

// Re-export types for convenience
export type { BlogPost, BlogPostMeta, BlogPostFrontmatter } from "./blog-types";

// Path to blog content directory
const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

/**
 * Get all blog post slugs for generateStaticParams
 */
export function getAllPostSlugs(): string[] {
  // Check if directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.(mdx|md)$/, ""));
}

/**
 * Get all blog posts with metadata (for listing page)
 * Sorted by date, newest first
 */
export function getAllPosts(): BlogPostMeta[] {
  // Check if directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const filePath = path.join(BLOG_DIR, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString().split("T")[0],
        excerpt: data.excerpt || "",
        author: data.author || "TESA Team",
        tags: data.tags || [],
      } as BlogPostMeta;
    });

  // Sort by date, newest first
  return posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get a single blog post by slug with full content
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Check if directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    return null;
  }

  // Try .mdx first, then .md
  let filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    excerpt: data.excerpt || "",
    author: data.author || "TESA Team",
    tags: data.tags || [],
    content: contentHtml,
  };
}
