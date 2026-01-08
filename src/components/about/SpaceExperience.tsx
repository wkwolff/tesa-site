/**
 * SpaceExperience Component
 *
 * Displays Space & Analog Astronaut Experience:
 * - ILMAH spacesuit evaluations
 * - Flashline Mars Arctic Research Station (Mission Commander)
 * - SOFIA 747 NASA Airborne Astronomy Ambassador
 * - Space Camp Hall of Fame 2025 inductee (highlighted)
 *
 * Mobile-first design with prominent Hall of Fame highlight.
 */
export default function SpaceExperience() {
  const experiences = [
    {
      id: "hall-of-fame",
      title: "Space Camp Hall of Fame",
      year: "2025",
      description:
        "Inducted into the Space Camp Hall of Fame for outstanding dedication to aerospace education and inspiring the next generation of space explorers.",
      highlight: true,
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ),
    },
    {
      id: "mission-commander",
      title: "Flashline Mars Arctic Research Station",
      year: "Mission Commander",
      description:
        "Served as Mission Commander at the Flashline Mars Arctic Research Station on Devon Island, leading analog Mars mission simulations to prepare for future human Mars exploration.",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
    },
    {
      id: "sofia",
      title: "NASA Airborne Astronomy Ambassador",
      year: "SOFIA 747",
      description:
        "Flew aboard NASA's SOFIA (Stratospheric Observatory for Infrared Astronomy) 747 flying observatory during a weeklong data collection mission, experiencing frontline astronomical research.",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      ),
    },
    {
      id: "ilmah",
      title: "ILMAH Spacesuit Evaluations",
      year: "Analog Astronaut",
      description:
        "Conducted spacesuit evaluations at the University of North Dakota's Inflatable Lunar and Mars Habitat (ILMAH), contributing to research on future planetary exploration equipment.",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      id: "space-camp",
      title: "Space Camp Alumnus",
      year: "Advocate",
      description:
        "Space Camp alumnus and lifelong advocate for educators and students, promoting space education and inspiring the next generation of aerospace professionals.",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      ),
    },
  ];

  // Separate the highlighted item for special treatment
  const hallOfFame = experiences.find((exp) => exp.highlight);
  const otherExperiences = experiences.filter((exp) => !exp.highlight);

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="space-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Space Exploration
          </p>
          <h2
            id="space-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            Space & Analog Astronaut Experience
          </h2>
        </div>

        {/* Hall of Fame Highlight */}
        {hallOfFame && (
          <div className="mb-10 sm:mb-14">
            <div className="relative overflow-hidden bg-gradient-to-br from-accent via-accent to-accent-dark rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-xl">
              {/* Background decoration */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
                aria-hidden="true"
              />

              <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-white/20 text-white">
                  {hallOfFame.icon}
                </div>

                {/* Content */}
                <div className="text-center sm:text-left flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                      {hallOfFame.title}
                    </h3>
                    <span className="inline-flex self-center sm:self-auto items-center px-3 py-1 rounded-full text-sm font-bold bg-white text-accent">
                      {hallOfFame.year}
                    </span>
                  </div>
                  <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                    {hallOfFame.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Experiences Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {otherExperiences.map((exp) => (
            <div
              key={exp.id}
              className="flex gap-4 p-6 bg-surface rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-surface-dark">
                    {exp.title}
                  </h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                    {exp.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
