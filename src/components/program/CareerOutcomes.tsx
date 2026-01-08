/**
 * CareerOutcomes Component
 *
 * Displays aerospace industry career opportunities:
 * - Job titles in aerospace industry
 * - Salary examples/ranges
 * - Career pathway visualization
 *
 * Mobile-first responsive design emphasizing career potential.
 */
export default function CareerOutcomes() {
  const careers = [
    {
      title: "Aerospace Engineer",
      salary: "$98,000 - $165,000",
      description: "Design aircraft, spacecraft, satellites, and missiles",
      growth: "6% growth",
    },
    {
      title: "Flight Test Engineer",
      salary: "$85,000 - $140,000",
      description: "Plan and execute aircraft testing programs",
      growth: "High demand",
    },
    {
      title: "Mission Operations Specialist",
      salary: "$75,000 - $130,000",
      description: "Control and monitor spacecraft operations",
      growth: "Growing field",
    },
    {
      title: "Systems Engineer",
      salary: "$90,000 - $150,000",
      description: "Integrate complex aerospace systems",
      growth: "8% growth",
    },
    {
      title: "Propulsion Engineer",
      salary: "$95,000 - $155,000",
      description: "Design and test rocket and jet engines",
      growth: "High demand",
    },
    {
      title: "Satellite Systems Analyst",
      salary: "$80,000 - $135,000",
      description: "Analyze and optimize satellite operations",
      growth: "Expanding",
    },
  ];

  const employers = [
    "NASA",
    "SpaceX",
    "Boeing",
    "Lockheed Martin",
    "Northrop Grumman",
    "Blue Origin",
    "Raytheon",
    "General Dynamics",
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-primary via-primary-800 to-secondary"
      aria-labelledby="careers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Your Future
          </p>
          <h2
            id="careers-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            Career Outcomes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-200">
            TESA graduates are prepared for high-paying careers in the
            aerospace industry. Here&apos;s what your future could look like.
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {careers.map((career) => (
            <article
              key={career.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading font-semibold text-white text-base sm:text-lg">
                  {career.title}
                </h3>
                <span className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded-full">
                  {career.growth}
                </span>
              </div>
              <p className="text-sm text-gray-300 mb-4">{career.description}</p>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white font-semibold">{career.salary}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Career Pathway Visualization */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="font-heading text-xl font-bold text-surface-dark text-center mb-8">
            Career Pathway
          </h3>

          <div className="relative">
            {/* Mobile: Vertical */}
            <div className="md:hidden space-y-4">
              {[
                { stage: "TESA Student", years: "Grades 6-12", color: "bg-primary" },
                { stage: "University", years: "4-5 years", color: "bg-secondary" },
                { stage: "Entry Level", years: "0-3 years exp", color: "bg-accent" },
                { stage: "Senior Role", years: "5+ years exp", color: "bg-green-600" },
              ].map((item, index) => (
                <div key={item.stage} className="flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 h-12 w-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 p-4 bg-surface rounded-lg">
                    <p className="font-semibold text-surface-dark">{item.stage}</p>
                    <p className="text-sm text-gray-500">{item.years}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between">
                {[
                  { stage: "TESA Student", years: "Grades 6-12", color: "bg-primary" },
                  { stage: "University", years: "4-5 years", color: "bg-secondary" },
                  { stage: "Entry Level", years: "0-3 years exp", color: "bg-accent" },
                  { stage: "Senior Role", years: "5+ years exp", color: "bg-green-600" },
                ].map((item, index, arr) => (
                  <div key={item.stage} className="flex items-center">
                    <div className="text-center">
                      <div
                        className={`h-16 w-16 mx-auto rounded-full ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                      >
                        {index + 1}
                      </div>
                      <p className="mt-3 font-semibold text-surface-dark">
                        {item.stage}
                      </p>
                      <p className="text-sm text-gray-500">{item.years}</p>
                    </div>
                    {index < arr.length - 1 && (
                      <div className="flex-1 mx-4">
                        <div className="h-1 bg-gradient-to-r from-gray-300 to-gray-300 rounded-full" />
                        <svg
                          className="h-6 w-6 mx-auto -mt-3 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Salary Progression */}
            <div className="mt-8 grid grid-cols-4 gap-2 text-center">
              <div className="p-2 bg-primary/10 rounded-lg">
                <p className="text-xs text-gray-500">Start</p>
                <p className="font-bold text-primary">$0</p>
              </div>
              <div className="p-2 bg-secondary/10 rounded-lg">
                <p className="text-xs text-gray-500">Internship</p>
                <p className="font-bold text-secondary">$25K+</p>
              </div>
              <div className="p-2 bg-accent/10 rounded-lg">
                <p className="text-xs text-gray-500">Entry</p>
                <p className="font-bold text-accent-dark">$75K+</p>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <p className="text-xs text-gray-500">Senior</p>
                <p className="font-bold text-green-600">$150K+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Employers */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
            Where Our Students Could Work
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {employers.map((employer) => (
              <span
                key={employer}
                className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium border border-white/20"
              >
                {employer}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
