/**
 * MilitaryService Component
 *
 * Displays military service background:
 * - Naval Aviator and AEDO background
 * - Naval Academy professor details
 * - Reserve tour information
 * - Awards and decorations list
 *
 * Mobile-first design with organized service sections.
 */
export default function MilitaryService() {
  const serviceHighlights = [
    {
      id: "professor",
      title: "U.S. Naval Academy Professor",
      description:
        "Department of Aerospace Engineering faculty member teaching aeronautics, astronautics, and MATLAB programming.",
    },
    {
      id: "vtna",
      title: "Flight Training Squadron Representative",
      description:
        "Officer Representative of 1,000-member Naval Academy Flight Training Squadron (VTNA).",
    },
    {
      id: "acquisition",
      title: "Defense Acquisition Corps",
      description:
        "Level III Program Management certification with advanced qualifications in Space Acquisitions and Space Operations.",
    },
    {
      id: "astronaut-office",
      title: "Astronaut Office Support",
      description:
        "Supported the Astronaut Office at Johnson Space Center.",
    },
  ];

  const reserveTours = [
    "Assistant OIC NR Flight Test Augmentation Unit",
    "XO NR Joint Functional Component Commander for Space",
    "Administration Officer NR Rapid Research and Development Unit",
  ];

  const awards = [
    { name: "Navy Achievement Medal", type: "personal" },
    { name: "Naval Unit Commendation", type: "unit" },
    { name: "Military Outstanding Volunteer Service Medal", type: "service" },
    { name: "Armed Forces Expeditionary Medal", type: "service" },
    { name: "Global War on Terrorism Service Medal", type: "service" },
    { name: "National Defense Service Medal", type: "service" },
    { name: "Sea Service Deployment Ribbon", type: "service" },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-surface to-white"
      aria-labelledby="military-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Service to Country
          </p>
          <h2
            id="military-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            Military Service
          </h2>
        </div>

        {/* Main Service Info */}
        <div className="mb-10 sm:mb-14">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Military Icon */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-white/20">
                <svg
                  className="h-10 w-10 sm:h-12 sm:w-12"
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
              </div>

              {/* Content */}
              <div className="text-center sm:text-left">
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                  Naval Aviator & Aerospace Engineering Duty Officer
                </h3>
                <p className="text-white/90 text-base sm:text-lg">
                  NAVAIR Reserve Program | Lt. Commander, USN (Ret.)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Highlights Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-10 sm:mb-14">
          {serviceHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-surface-dark mb-1">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout: Reserve Tours + Awards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Reserve Tours */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="font-heading text-lg font-semibold text-surface-dark mb-4 flex items-center gap-2">
              <svg
                className="h-5 w-5 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Reserve Tours
            </h3>
            <ul className="space-y-3">
              {reserveTours.map((tour, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700">{tour}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards & Decorations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="font-heading text-lg font-semibold text-surface-dark mb-4 flex items-center gap-2">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              Awards & Decorations
            </h3>
            <div className="flex flex-wrap gap-2">
              {awards.map((award, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${
                    award.type === "personal"
                      ? "bg-accent/20 text-accent-dark"
                      : award.type === "unit"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {award.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
