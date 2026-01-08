/**
 * ContactInfo Component
 *
 * Displays contact information as an alternative to the form.
 * Features:
 * - Direct email contact option
 * - Accessible link with proper aria attributes
 * - Mobile-first responsive design
 */
export default function ContactInfo() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
      <h2
        id="contact-info-heading"
        className="font-heading text-xl sm:text-2xl font-bold text-primary mb-4"
      >
        Contact Us Directly
      </h2>

      <p className="text-gray-600 mb-6">
        Prefer to reach out directly? Send us an email and we&apos;ll respond within 1-2
        business days.
      </p>

      {/* Email contact */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <a
              href="mailto:diallo@tesa4space.org"
              className="text-secondary hover:text-primary transition-colors underline underline-offset-2 focus-visible-ring rounded inline-block"
              aria-label="Send email to diallo@tesa4space.org"
            >
              diallo@tesa4space.org
            </a>
          </div>
        </div>

        {/* Response time note */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-accent-dark"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Response Time</h3>
            <p className="text-gray-600">We typically respond within 1-2 business days</p>
          </div>
        </div>
      </div>

      {/* Additional context */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">What to Include</h3>
        <ul className="text-sm text-gray-600 space-y-1.5">
          <li className="flex items-start gap-2">
            <svg
              className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Your name and preferred contact method</span>
          </li>
          <li className="flex items-start gap-2">
            <svg
              className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>The purpose of your inquiry</span>
          </li>
          <li className="flex items-start gap-2">
            <svg
              className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Any relevant details or questions</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
