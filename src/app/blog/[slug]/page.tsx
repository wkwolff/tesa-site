import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { BlogPostLayout } from "@/components/blog";

/**
 * Generate static params for all blog posts
 */
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * Generate metadata for individual blog post
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | TESA Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | TESA Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://tesa4space.org/blog/${post.slug}`,
      siteName: "TESA - The Engineering and Science Academy",
      images: [
        {
          url: "/images/tesa_logo.png",
          width: 1200,
          height: 630,
          alt: `${post.title} - TESA Blog`,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/images/tesa_logo.png"],
    },
  };
}

/**
 * JSON-LD Structured Data for Blog Post
 */
function JsonLdSchema({
  post,
}: {
  post: {
    title: string;
    date: string;
    excerpt: string;
    author: string;
    slug: string;
    tags: string[];
  };
}) {
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://tesa4space.org/about",
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "TESA - The Engineering and Science Academy",
      logo: {
        "@type": "ImageObject",
        url: "https://tesa4space.org/images/tesa_logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tesa4space.org/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    image: "https://tesa4space.org/images/tesa_logo.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogPostSchema),
      }}
    />
  );
}

/**
 * BlogPostPage Component
 *
 * Individual blog post page with full content and metadata.
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdSchema post={post} />

      {/* Page Header with gradient */}
      <section className="bg-gradient-to-br from-primary via-primary-800 to-secondary py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-200">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogPostLayout post={post} />
        </div>
      </section>

      {/* Related Content / CTA */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Continue Exploring
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Learn more about our aerospace education programs and how TESA is
              preparing the next generation of STEM leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/program"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors focus-visible-ring min-h-touch"
              >
                Explore Programs
              </a>
              <a
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-primary border-2 border-primary hover:bg-primary/5 rounded-lg font-medium transition-colors focus-visible-ring min-h-touch"
              >
                View All Posts
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
