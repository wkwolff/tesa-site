import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog";

/**
 * Blog listing page metadata
 */
export const metadata: Metadata = {
  title: "Blog | TESA News & Updates",
  description:
    "Stay updated with the latest news, insights, and announcements from The Engineering and Science Academy (TESA). Read about aerospace education, STEM programs, and student success stories.",
  keywords: [
    "TESA blog",
    "aerospace education news",
    "STEM education articles",
    "engineering education",
    "space education updates",
    "student success stories",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | TESA News & Updates",
    description:
      "Stay updated with the latest news and insights from The Engineering and Science Academy. Read about aerospace education and STEM programs.",
    url: "https://tesa4space.org/blog",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | TESA News & Updates",
    description:
      "Stay updated with the latest news and insights from The Engineering and Science Academy.",
  },
};

/**
 * BlogPage Component
 *
 * Blog listing page with card grid layout for all posts.
 * Mobile-first responsive design with pagination consideration for future.
 */
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-800 to-secondary py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Blog & News
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            The latest updates, insights, and announcements from The Engineering
            and Science Academy.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {/* Future Pagination Placeholder */}
              {/*
              <div className="mt-12 flex justify-center">
                <nav aria-label="Blog pagination" className="flex gap-2">
                  Pagination controls will go here when needed
                </nav>
              </div>
              */}
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                No Posts Yet
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;re working on some exciting content. Check back soon!
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors focus-visible-ring min-h-touch"
              >
                Return Home
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter/Subscribe CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              Want to be the first to know about new courses, scholarships, and
              aerospace education opportunities? Follow us on social media or
              get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-primary bg-white hover:bg-gray-100 rounded-lg font-medium transition-colors focus-visible-ring min-h-touch"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white border-2 border-white hover:bg-white/10 rounded-lg font-medium transition-colors focus-visible-ring min-h-touch"
              >
                Learn About TESA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
