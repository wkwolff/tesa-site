/**
 * MissionSection Component
 *
 * Displays TESA's mission statement and the problem it solves.
 * Highlights the 60% engineering attrition rate and TESA's solution.
 * Mobile-first responsive design with clear, scannable content.
 */
export default function MissionSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Our Mission
          </p>
          <h2
            id="mission-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            Preparing Students for STEM Success
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Mission Statement */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 border border-primary/10">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-surface-dark mb-4">
                What is TESA?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The Engineering and Science Academy (TESA) is a{" "}
                <span className="font-semibold text-primary">
                  pre-college hybrid school
                </span>
                , designed to prepare students for academic and technical rigor.
                With a mission rooted in aerospace excellence, TESA equips
                students with the skills, certifications, and confidence to
                thrive in STEM-intensive majors at universities.
              </p>
            </div>

            {/* Course Format */}
            <div className="bg-surface rounded-xl p-6">
              <h4 className="font-heading text-base font-semibold text-surface-dark mb-3">
                Course Format
              </h4>
              <p className="text-gray-600">
                Through{" "}
                <span className="font-semibold text-primary">
                  10-week for-credit courses
                </span>
                , students tackle real-world design challenges and earn
                industry-recognized certifications used by aerospace
                professionals.
              </p>
            </div>
          </div>

          {/* The Problem & Solution */}
          <div className="space-y-6">
            {/* The Problem */}
            <div className="bg-highlight/5 border border-highlight/20 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-highlight-dark mb-4 flex items-center gap-2">
                <svg
                  className="h-6 w-6 text-highlight"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                The Problem
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Academic and motivational challenges drive a{" "}
                <span className="font-bold text-highlight text-xl">
                  60% attrition
                </span>{" "}
                rate among first-year engineering students. Many students arrive
                at college unprepared for the rigors of STEM education.
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                TESA&apos;s Solution
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TESA equips learners with the knowledge, skills, and abilities
                to thrive in college through hands-on learning and mentorship.
              </p>

              {/* Certifications */}
              <div className="pt-4 border-t border-primary/10">
                <p className="text-sm font-semibold text-surface-dark mb-3">
                  Industry Certifications:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent-dark">
                    MATLAB
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent-dark">
                    STK (Satellite Toolkit)
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent-dark">
                    PMI CAPM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
