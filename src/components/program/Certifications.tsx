/**
 * Certifications Component
 *
 * Displays industry certifications offered by TESA:
 * - MATLAB certification (MathWorks)
 * - Ansys STK certification
 * - PMI CAPM certification
 *
 * Each certification includes logo placeholder and description.
 * Mobile-first responsive card layout.
 */

interface CertificationData {
  name: string;
  provider: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

const certifications: CertificationData[] = [
  {
    name: "MATLAB Certification",
    provider: "MathWorks",
    description:
      "Industry-standard certification in MATLAB programming, recognized by aerospace companies and research institutions worldwide. Students gain proficiency in numerical computing, data analysis, and algorithm development.",
    color: "bg-orange-500",
    icon: (
      <svg
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Satellite Toolkit (STK) Certification",
    provider: "Ansys",
    description:
      "Professional certification in STK software, the industry standard for modeling and analyzing space systems. Students learn orbital mechanics, mission planning, and satellite communication analysis.",
    color: "bg-blue-600",
    icon: (
      <svg
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    name: "CAPM Certification",
    provider: "Project Management Institute",
    description:
      "Certified Associate in Project Management credential from PMI. Students learn project management fundamentals, preparing them for leadership roles in engineering projects and space missions.",
    color: "bg-green-600",
    icon: (
      <svg
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-surface"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Career Credentials
          </p>
          <h2
            id="certifications-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            Industry Certifications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            TESA students earn professional certifications recognized by
            aerospace companies and institutions worldwide.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header with Icon */}
              <div className={`${cert.color} px-6 py-8 text-center`}>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 mb-4">
                  {cert.icon}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  {cert.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Provider Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Issued by
                  </span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm font-medium text-surface-dark">
                    {cert.provider}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-surface-dark mb-4">
                Why Certifications Matter
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
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
                  <span>
                    <strong>Industry Recognition:</strong> Used by NASA, Boeing,
                    Lockheed Martin, and SpaceX
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
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
                  <span>
                    <strong>College Advantage:</strong> Stand out in university
                    applications with professional credentials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
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
                  <span>
                    <strong>Career Ready:</strong> Enter internships and
                    first jobs with demonstrable skills
                  </span>
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary">3</div>
                <p className="text-sm text-gray-600">Professional Certifications</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-accent">100%</div>
                <p className="text-sm text-gray-600">Industry-Recognized</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-secondary">Global</div>
                <p className="text-sm text-gray-600">Recognition</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600">STEM</div>
                <p className="text-sm text-gray-600">Career Pathway</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
