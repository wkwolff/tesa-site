/**
 * VisionSection Component
 *
 * Displays TESA's vision for the future:
 * - Maryland airports to national expansion
 * - DODEA expansion plans
 *
 * Mobile-first design with inspiring visual presentation.
 */
export default function VisionSection() {
  const expansionPhases = [
    {
      id: "maryland",
      phase: "Phase 1",
      title: "Maryland Launch",
      description:
        "Starting at Maryland airports, establishing a strong local presence and proving the TESA model.",
      status: "current",
    },
    {
      id: "national",
      phase: "Phase 2",
      title: "National Expansion",
      description:
        "Expanding to airports and communities nationwide, bringing aerospace education to students across America.",
      status: "planned",
    },
    {
      id: "dodea",
      phase: "Phase 3",
      title: "DODEA Partnership",
      description:
        "Partnering with Department of Defense Education Activity to serve military families worldwide.",
      status: "planned",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary-800 to-secondary text-white"
      aria-labelledby="vision-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Looking Ahead
          </p>
          <h2
            id="vision-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold"
          >
            Our Vision for the Future
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-200">
            TESA is committed to making high-quality aerospace education
            accessible to students everywhere, starting locally and growing
            nationally.
          </p>
        </div>

        {/* Expansion Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2" />

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {expansionPhases.map((phase, index) => (
              <div key={phase.id} className="relative">
                {/* Phase Card */}
                <div
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border ${
                    phase.status === "current"
                      ? "border-accent ring-2 ring-accent/50"
                      : "border-white/20"
                  }`}
                >
                  {/* Phase Number */}
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      phase.status === "current"
                        ? "bg-accent text-white"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Status Badge */}
                  {phase.status === "current" && (
                    <div className="absolute -top-3 right-4 sm:right-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent text-white">
                        Current Focus
                      </span>
                    </div>
                  )}

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                      {phase.phase}
                    </p>
                    <h3 className="mt-2 font-heading text-xl sm:text-2xl font-bold">
                      {phase.title}
                    </h3>
                    <p className="mt-3 text-white/80 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector for mobile */}
                {index < expansionPhases.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <svg
                      className="h-6 w-6 text-white/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-lg text-white/90 mb-6">
            Join us in shaping the future of aerospace education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partnerships"
              className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors focus-visible-ring"
            >
              Partner With Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors focus-visible-ring"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
