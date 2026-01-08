import Link from "next/link";

/**
 * ContactCTA Component
 *
 * Contact call-to-action section with:
 * - Email: diallo@tesa4space.org
 * - Link to contact page
 *
 * Mobile-first design with prominent contact options.
 */
export default function ContactCTA() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="contact-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-surface to-white rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            {/* Section Header */}
            <h2
              id="contact-cta-heading"
              className="font-heading text-2xl sm:text-3xl font-bold text-surface-dark"
            >
              Ready to Learn More?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Whether you&apos;re a parent interested in our program, an
              educator seeking to collaborate, or a funder looking to support
              STEM education, we&apos;d love to hear from you.
            </p>

            {/* Contact Options */}
            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg
                    className="h-5 w-5 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email us directly:</span>
                </div>
                <a
                  href="mailto:diallo@tesa4space.org"
                  className="inline-flex items-center text-lg font-semibold text-primary hover:text-secondary transition-colors focus-visible-ring"
                >
                  diallo@tesa4space.org
                </a>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-800 transition-colors focus-visible-ring"
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
                  Contact Us
                </Link>
                <Link
                  href="/program"
                  className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors focus-visible-ring"
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
