/**
 * AccreditationBadge Component
 *
 * Displays the Cognia Accreditation status badge with:
 * - "In Progress" status indicator
 * - Brief explanation of the accreditation process
 *
 * Mobile-first design with prominent status display.
 */
export default function AccreditationBadge() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="accreditation-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Quality Assurance
            </p>
            <h2
              id="accreditation-heading"
              className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-surface-dark"
            >
              Accreditation Status
            </h2>
          </div>

          {/* Accreditation Card */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-100 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Cognia Logo Placeholder */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                <div className="text-center p-3">
                  <span className="text-lg sm:text-xl font-bold text-primary">
                    Cognia
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Accreditation</p>
                </div>
              </div>

              {/* Status and Description */}
              <div className="flex-1 text-center sm:text-left">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  <span className="text-sm font-semibold text-accent-dark">
                    In Progress
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-surface-dark">
                  Cognia Accreditation
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  TESA is actively pursuing Cognia accreditation, demonstrating our
                  commitment to meeting the highest standards of educational quality.
                  Cognia is a globally recognized accreditation body that evaluates
                  schools and educational organizations based on rigorous standards
                  of excellence.
                </p>

                <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-surface-dark text-sm mb-2">
                    What This Means for Students
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Credit transfer eligibility with partner institutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Recognized quality standards in aerospace education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Continuous improvement through evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
