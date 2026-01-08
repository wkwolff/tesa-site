/**
 * Blog post frontmatter schema
 */
export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
}

/**
 * Blog post with content
 */
export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
}

/**
 * Blog post metadata without content (for listings)
 */
export interface BlogPostMeta extends BlogPostFrontmatter {
  slug: string;
}
