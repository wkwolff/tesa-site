/**
 * Blog post frontmatter schema
 */
export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  authorImage?: string; // Path to author photo
  tags: string[];
  featuredImage?: string; // Path to featured/hero image
  featuredImageAlt?: string; // Alt text for featured image
}

/**
 * Blog post with content
 */
export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
  readingTime: number; // Estimated minutes to read
}

/**
 * Blog post metadata without content (for listings)
 */
export interface BlogPostMeta extends BlogPostFrontmatter {
  slug: string;
  readingTime: number; // Estimated minutes to read
}
