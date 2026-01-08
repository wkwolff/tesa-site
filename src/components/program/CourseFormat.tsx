/**
 * CourseFormat Component
 *
 * Explains TESA's 10-week for-credit course structure:
 * - For-credit course format
 * - Hands-on learning approach
 * - Real-world design challenges
 *
 * Mobile-first responsive design with visual elements.
 */
export default function CourseFormat() {
  const features = [
    {
      title: "10-Week Sessions",
      description:
        "Intensive, focused learning in 10-week blocks that align with university semester formats. Each session delivers deep understanding of subject matter.",
      icon: (
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "For-Credit Courses",
      description:
        "All courses are credit-bearing and approved by UC A-G, providing academic recognition that counts toward high school graduation and college applications.",
      icon: (
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
      ),
    },
    {
      title: "Hands-On Learning",
      description:
        "Every course emphasizes practical application. Students build, program, test, and iterate on real engineering projects rather than just reading textbooks.",
      icon: (
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
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
      ),
    },
    {
      title: "Real-World Design Challenges",
      description:
        "Students tackle authentic engineering problems used in aerospace industry. From rocket design to orbital mechanics, challenges mirror professional scenarios.",
      icon: (
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
      ),
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-surface"
      aria-labelledby="format-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Course Structure
            </p>
            <h2
              id="format-heading"
              className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
            >
              How TESA Courses Work
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              TESA&apos;s innovative 10-week for-credit course format combines
              rigorous academics with hands-on learning experiences. Students
              don&apos;t just learn theory—they apply it to solve real-world
              design challenges.
            </p>

            {/* Feature Grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-surface-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Course Timeline */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="font-heading text-lg font-semibold text-surface-dark mb-6">
              Sample 10-Week Course Schedule
            </h3>

            <div className="space-y-4">
              {[
                { week: "1-2", phase: "Foundation", desc: "Core concepts & theory" },
                { week: "3-4", phase: "Exploration", desc: "Guided practice & examples" },
                { week: "5-6", phase: "Application", desc: "Hands-on project work" },
                { week: "7-8", phase: "Integration", desc: "Real-world design challenges" },
                { week: "9-10", phase: "Assessment", desc: "Project completion & review" },
              ].map((item, index) => (
                <div
                  key={item.week}
                  className="flex items-center gap-4 p-3 rounded-lg bg-surface hover:bg-primary/5 transition-colors"
                >
                  <div className="flex-shrink-0 h-10 w-16 rounded-lg bg-primary text-white font-bold text-sm flex items-center justify-center">
                    Week {item.week}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-surface-dark text-sm">
                      {item.phase}
                    </p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {index < 4 ? (
                      <svg
                        className="h-5 w-5 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Stat */}
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                <svg
                  className="h-5 w-5 text-accent"
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
                <span className="text-sm font-semibold text-accent-dark">
                  University-ready curriculum in 10 weeks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
