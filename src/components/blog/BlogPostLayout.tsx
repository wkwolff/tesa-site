"use client";

import Link from "next/link";
import { useState } from "react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog-types";

/**
 * BlogPostLayout Component Props
 */
interface BlogPostLayoutProps {
  post: BlogPost;
}

/**
 * BlogPostLayout Component
 *
 * Full blog post layout with metadata, content, and share functionality.
 * Mobile-first responsive design.
 */
export default function BlogPostLayout({ post }: BlogPostLayoutProps) {
  const [copied, setCopied] = useState(false);

  // Get the full URL for sharing
  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return `https://tesa4space.org/blog/${post.slug}`;
  };

  // Copy link to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Share on Twitter/X
  const shareOnTwitter = () => {
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(getShareUrl());
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Share on LinkedIn
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Share on Facebook
  const shareOnFacebook = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <article className="max-w-3xl mx-auto">
      {/* Back to Blog Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-medium text-sm mb-6 focus-visible-ring rounded min-h-touch py-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mb-8 sm:mb-10">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <span className="font-medium">{post.author}</span>
          </div>

          <span className="text-gray-300" aria-hidden="true">
            |
          </span>

          {/* Date */}
          <time dateTime={post.date} className="text-gray-500">
            {formatDate(post.date)}
          </time>
        </div>
      </header>

      {/* Post Content */}
      <div
        className="prose prose-gray prose-lg max-w-none mb-10
          prose-headings:font-heading prose-headings:text-gray-900
          prose-h1:text-2xl prose-h1:sm:text-3xl
          prose-h2:text-xl prose-h2:sm:text-2xl
          prose-h3:text-lg prose-h3:sm:text-xl
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900
          prose-ul:text-gray-600 prose-ol:text-gray-600
          prose-li:marker:text-primary
          prose-code:text-primary prose-code:bg-gray-50 prose-code:px-1 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:text-gray-100
          prose-blockquote:border-l-primary prose-blockquote:text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share Section */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="font-heading text-lg font-semibold text-gray-900 mb-4">
          Share this article
        </h2>
        <div className="flex flex-wrap gap-3">
          {/* Copy Link Button */}
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus-visible-ring min-h-touch"
            aria-label="Copy link to clipboard"
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy Link
              </>
            )}
          </button>

          {/* Twitter/X Share */}
          <button
            type="button"
            onClick={shareOnTwitter}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors focus-visible-ring min-h-touch"
            aria-label="Share on X (Twitter)"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Share
          </button>

          {/* LinkedIn Share */}
          <button
            type="button"
            onClick={shareOnLinkedIn}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0077b5] hover:bg-[#006699] rounded-lg transition-colors focus-visible-ring min-h-touch"
            aria-label="Share on LinkedIn"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Share
          </button>

          {/* Facebook Share */}
          <button
            type="button"
            onClick={shareOnFacebook}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#1877f2] hover:bg-[#166fe5] rounded-lg transition-colors focus-visible-ring min-h-touch"
            aria-label="Share on Facebook"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Share
          </button>
        </div>
      </div>

      {/* Author Bio */}
      <div className="mt-10 p-6 bg-gray-50 rounded-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">
              {post.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900">Written by</p>
            <p className="font-heading text-lg font-semibold text-primary">
              {post.author}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Founder of TESA, Space Camp Hall of Fame 2025 inductee, Naval
              Academy aerospace engineering professor, and Purdue PhD candidate
              in Engineering Education.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
