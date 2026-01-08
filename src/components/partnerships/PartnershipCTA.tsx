import Link from "next/link";

/**
 * PartnershipCTA Component
 *
 * Call-to-action section for partnership inquiries with:
 * - Clear button linking to /contact
 * - Subject pre-filled for partnership inquiries
 *
 * Mobile-first design with prominent, accessible CTA.
 */
export default function PartnershipCTA() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary-800 to-secondary"
      aria-labelledby="partnership-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2
            id="partnership-cta-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            Ready to Partner with TESA?
          </h2>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
            Join us in preparing the next generation of aerospace professionals.
            Whether you&apos;re an educational institution, industry leader, or
            government agency, we&apos;d love to explore how we can work together.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Partnership%20Inquiry"
              className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold text-primary bg-white rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Become a Partner
            </Link>

            <a
              href="mailto:diallo@tesa4space.org?subject=Partnership%20Inquiry"
              className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Email Directly
            </a>
          </div>

          {/* Contact info */}
          <p className="mt-8 text-sm text-gray-300">
            Questions? Contact us at{" "}
            <a
              href="mailto:diallo@tesa4space.org"
              className="text-accent hover:text-accent-light underline transition-colors"
            >
              diallo@tesa4space.org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
