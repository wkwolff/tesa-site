"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { formatDate } from "@/lib/utils";
import { cardHover } from "@/lib/animations";
import type { BlogPostMeta } from "@/lib/blog-types";

/**
 * BlogCard Component Props
 */
interface BlogCardProps {
  post: BlogPostMeta;
}

/**
 * BlogCard Component
 *
 * Displays a blog post preview in a card format with title, date, excerpt, and tags.
 * Mobile-first design with proper touch targets.
 * Includes hover animation with scale and shadow lift for enhanced interactivity.
 */
export default function BlogCard({ post }: BlogCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // Truncate excerpt to 150 characters
  const truncatedExcerpt =
    post.excerpt.length > 150
      ? `${post.excerpt.substring(0, 150)}...`
      : post.excerpt;

  return (
    <motion.article
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
      whileHover={shouldReduceMotion ? undefined : cardHover}
    >
      {/* Card Content */}
      <div className="p-5 sm:p-6">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="focus-visible-ring rounded"
          >
            {post.title}
          </Link>
        </h3>

        {/* Date, Author, and Reading Time */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="hidden sm:inline" aria-hidden="true">
            |
          </span>
          <span className="text-gray-600">{post.author}</span>
          <span className="hidden sm:inline" aria-hidden="true">
            |
          </span>
          <span className="text-gray-500">{post.readingTime} min read</span>
        </div>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          {truncatedExcerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary/80 focus-visible-ring rounded min-h-touch py-2"
          aria-label={`Read more about ${post.title}`}
        >
          Read More
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
