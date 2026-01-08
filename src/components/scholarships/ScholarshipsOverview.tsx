/**
 * ScholarshipsOverview Component
 *
 * Overview section introducing TESA's commitment to accessibility
 * and scholarship opportunities.
 *
 * Mobile-first design with clear messaging about opportunity.
 */
export default function ScholarshipsOverview() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="scholarships-overview-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2
            id="scholarships-overview-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            Making Space Education Accessible
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            TESA believes every student and educator deserves the opportunity to
            experience the wonder of aerospace education. Our scholarship programs
            honor individuals who have inspired our mission, providing support for
            Space Camp attendance and beyond.
          </p>
        </div>

        {/* Value Pillars */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Opportunity */}
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl">
              <svg
                className="h-7 w-7 text-primary"
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
            </div>
            <h3 className="mt-4 text-lg font-semibold text-surface-dark">
              Creating Opportunity
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Removing financial barriers to transformative aerospace experiences.
            </p>
          </div>

          {/* Honor */}
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl">
              <svg
                className="h-7 w-7 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-surface-dark">
              Honoring Legacy
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Each scholarship celebrates individuals who inspired dreams of space.
            </p>
          </div>

          {/* Support */}
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-xl">
              <svg
                className="h-7 w-7 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-surface-dark">
              Building Community
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Connecting students and educators with life-changing experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
