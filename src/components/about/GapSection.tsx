/**
 * GapSection Component
 *
 * Explains the gap TESA fills in aerospace education.
 * Statistics on engineering student attrition and how TESA prepares students.
 * Mobile-first design with visual emphasis on key statistics.
 */
export default function GapSection() {
  const statistics = [
    {
      id: "attrition",
      value: "60%",
      label: "First-Year Attrition",
      description:
        "Engineering students who leave their program before sophomore year",
    },
    {
      id: "unprepared",
      value: "1 in 3",
      label: "Unprepared Students",
      description:
        "High school graduates who require remedial coursework in college",
    },
    {
      id: "stem-gap",
      value: "2.4M",
      label: "STEM Jobs Unfilled",
      description:
        "Projected unfilled STEM positions in the US by 2025",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-surface to-white"
      aria-labelledby="gap-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            The Challenge
          </p>
          <h2
            id="gap-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            The Gap TESA Fills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            Traditional education often leaves students unprepared for the rigor
            of university-level STEM programs. TESA bridges this gap.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 mb-12 sm:mb-16">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-highlight">
                {stat.value}
              </p>
              <p className="mt-2 font-semibold text-surface-dark">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* How TESA Prepares Students */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-surface-dark mb-6">
            How TESA Prepares Students
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-surface-dark">
                  Real-World Challenges
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Students work on actual engineering design problems used in
                  aerospace industry
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-surface-dark">
                  Industry Certifications
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Earn professional certifications that demonstrate competency
                  to colleges and employers
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-surface-dark">
                  Expert Mentorship
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Learn from aerospace professionals with real-world industry
                  and academic experience
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-surface-dark">
                  Mathematical Foundation
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Master practical applications of mathematics through
                  engineering context
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-surface-dark">
                  Programming Skills
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Develop computational thinking and programming abilities used
                  in aerospace
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-surface-dark">
                  College Readiness
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Build resilience and study habits needed to succeed in
                  rigorous STEM majors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
