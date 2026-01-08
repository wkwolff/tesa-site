/**
 * TrustSignals Component
 *
 * Displays credibility indicators for TESA:
 * - Space Camp Hall of Fame 2025
 * - Naval Academy affiliation
 * - Purdue PhD candidate credentials
 *
 * Mobile-first design with responsive grid layout.
 */
export default function TrustSignals() {
  const signals = [
    {
      id: "hall-of-fame",
      icon: (
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10"
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
      title: "Space Camp Hall of Fame",
      year: "2025",
      description: "Founder inducted for dedication to aerospace education",
    },
    {
      id: "naval-academy",
      icon: (
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10"
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
      title: "U.S. Naval Academy",
      year: "Professor",
      description: "Department of Aerospace Engineering faculty member",
    },
    {
      id: "purdue-phd",
      icon: (
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>
      ),
      title: "Purdue University",
      year: "Ph.D. Candidate",
      description: "Engineering Education doctoral research",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-surface"
      aria-labelledby="trust-signals-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading - visually hidden but accessible */}
        <h2 id="trust-signals-heading" className="sr-only">
          Founder Credentials and Achievements
        </h2>

        {/* Visible section title */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Trusted Leadership
          </p>
          <p className="mt-2 text-xl sm:text-2xl font-heading font-bold text-surface-dark">
            Founded by an Aerospace Industry Expert
          </p>
        </div>

        {/* Trust signals grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {signals.map((signal) => (
            <div
              key={signal.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                {signal.icon}
              </div>

              {/* Title and year */}
              <h3 className="font-heading text-lg font-semibold text-surface-dark">
                {signal.title}
              </h3>
              <p className="mt-1 text-sm font-bold text-accent">{signal.year}</p>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
