/**
 * GraduateProfile Component
 *
 * Displays the TESA Graduate Profile:
 * - Three core capabilities
 * - "Integrity in all aspects" core value
 * - NASA/SpaceX/Lockheed Martin positioning
 *
 * Mobile-first responsive design.
 */

interface Capability {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const capabilities: Capability[] = [
  {
    number: 1,
    title: "Articulate Requirements",
    description: "Articulate the requirements for a solution",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Develop Options with Risk Assessment",
    description:
      "Develop three options and provide a risk assessment for each (cost, schedule, performance)",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Recommend Best Solution",
    description: "Recommend the option with the highest probability of success",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
];

const employers = [
  { name: "NASA", color: "bg-blue-600" },
  { name: "SpaceX", color: "bg-gray-800" },
  { name: "Lockheed Martin", color: "bg-primary" },
  { name: "Boeing", color: "bg-secondary" },
  { name: "Northrop Grumman", color: "bg-accent-dark" },
];

export default function GraduateProfile() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-surface to-white"
      aria-labelledby="graduate-profile-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Ready for Industry
          </p>
          <h2
            id="graduate-profile-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            The TESA Graduate Profile
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
            When a TESA graduate walks into a job interview at{" "}
            <span className="font-semibold text-primary">NASA</span>,{" "}
            <span className="font-semibold text-surface-dark">SpaceX</span>, or{" "}
            <span className="font-semibold text-secondary">Lockheed Martin</span>
            , they are known for their leadership in design, analysis, and
            practical application of STEM.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-surface-dark text-center mb-8">
            A TESA-trained student can:
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 left-6">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">
                      {capability.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {capability.icon}
                    </div>
                    <h4 className="font-heading font-semibold text-surface-dark">
                      {capability.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Core Value - Integrity */}
        <div className="bg-gradient-to-r from-primary via-primary-800 to-secondary rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Core Value: Integrity
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                <strong className="text-accent">
                  Integrity in all aspects
                </strong>{" "}
                of work and learning. TESA graduates approach every challenge
                with honesty, accountability, and a commitment to excellence
                that defines aerospace professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Where TESA Graduates Work */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
            Positioned for Success At
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {employers.map((employer) => (
              <span
                key={employer.name}
                className={`px-5 py-3 rounded-full text-white text-sm sm:text-base font-semibold ${employer.color} shadow-sm`}
              >
                {employer.name}
              </span>
            ))}
          </div>
          <p className="mt-8 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            TESA graduates are prepared for leadership roles in the aerospace
            industry, equipped with the technical skills, professional
            certifications, and problem-solving mindset that top employers seek.
          </p>
        </div>
      </div>
    </section>
  );
}
