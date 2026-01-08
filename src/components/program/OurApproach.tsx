/**
 * OurApproach Component
 *
 * Explains TESA's pedagogical approach:
 * - 4-Step Learning Process with visual indicators
 * - Flipped Classroom Model
 * - Dynamic Notes with MATLAB LiveScripts
 * - Computational Foundation
 *
 * Mobile-first responsive design.
 */

interface LearningStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const learningSteps: LearningStep[] = [
  {
    number: 1,
    title: "Mathematical Analysis",
    description: "Solve problems analytically by hand",
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
          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
        />
      </svg>
    ),
    color: "bg-primary",
  },
  {
    number: 2,
    title: "Computer Programming",
    description: "Build programs to verify hand calculations",
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
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    color: "bg-secondary",
  },
  {
    number: 3,
    title: "Modeling & Simulation",
    description: "Develop and validate simulated models",
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
    color: "bg-accent",
  },
  {
    number: 4,
    title: "Physical Construction",
    description: "Build and test real systems",
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
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    color: "bg-green-600",
  },
];

export default function OurApproach() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Pedagogy
          </p>
          <h2
            id="approach-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            Our Approach to Learning
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            All TESA courses follow a rigorous methodology that builds from
            theory to practice, preparing students for real-world engineering
            challenges.
          </p>
        </div>

        {/* 4-Step Learning Process */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-surface-dark text-center mb-8">
            4-Step Learning Process
          </h3>

          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative pl-8 border-l-4 border-primary/30 space-y-6">
              {learningSteps.map((step) => (
                <div key={step.number} className="relative">
                  {/* Step Number Node */}
                  <div
                    className={`absolute -left-[calc(0.5rem+10px)] top-0 h-8 w-8 rounded-full ${step.color} border-4 border-white shadow-md flex items-center justify-center`}
                    aria-hidden="true"
                  >
                    <span className="text-white text-sm font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Card */}
                  <div className="bg-surface rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-lg ${step.color}/10 text-${step.color.replace("bg-", "")}`}
                      >
                        {step.icon}
                      </div>
                      <h4 className="font-semibold text-surface-dark">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Steps */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div
                className="absolute top-[2.5rem] left-[5%] right-[5%] h-1 bg-gradient-to-r from-primary via-secondary via-accent to-green-600 rounded-full"
                aria-hidden="true"
              />

              {/* Steps Grid */}
              <div className="grid grid-cols-4 gap-4 relative z-10">
                {learningSteps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center">
                    {/* Step Circle */}
                    <div
                      className={`h-20 w-20 rounded-full ${step.color} flex items-center justify-center shadow-lg border-4 border-white`}
                    >
                      <span className="text-white text-2xl font-bold">
                        {step.number}
                      </span>
                    </div>

                    {/* Connector */}
                    <div
                      className="w-0.5 h-4 bg-gray-200 mt-2"
                      aria-hidden="true"
                    />

                    {/* Card */}
                    <div className="bg-surface rounded-xl p-5 border border-gray-100 text-center mt-2 w-full hover:shadow-md transition-shadow">
                      <div className="flex justify-center mb-3">
                        <div className={`p-2 rounded-lg ${step.color}/10`}>
                          <div className={`${step.color.replace("bg-", "text-")}`}>
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      <h4 className="font-heading font-semibold text-surface-dark mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Methods Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Flipped Classroom */}
          <article className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-xl">
                <svg
                  className="h-6 w-6 text-primary"
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
              </div>
              <h3 className="font-heading text-lg font-bold text-surface-dark">
                Flipped Classroom
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Students read material before sessions and come prepared with
              questions. Class time is devoted to discussion, problem-solving,
              and hands-on application rather than lectures.
            </p>
          </article>

          {/* Dynamic Notes */}
          <article className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-secondary/20 rounded-xl">
                <svg
                  className="h-6 w-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-surface-dark">
                Dynamic Notes
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Students create &ldquo;dynamic notes&rdquo; using{" "}
              <strong className="text-secondary">MATLAB LiveScripts</strong>
              &mdash;a fusion of book material and programming code. These
              interactive notes remain useful 3, 5, or 10 years later when the
              material is needed again.
            </p>
          </article>

          {/* Computational Foundation */}
          <article className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent/20 rounded-xl">
                <svg
                  className="h-6 w-6 text-accent-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-surface-dark">
                Computational Foundation
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Courses are computationally based. Students build computer
              programs of equations from textbooks, generate graphs and data for
              further study, and develop practical programming skills alongside
              theoretical knowledge.
            </p>
          </article>
        </div>

        {/* Summary Quote */}
        <div className="mt-12 bg-primary rounded-2xl p-6 sm:p-8 text-center">
          <blockquote className="text-white">
            <p className="text-lg sm:text-xl italic font-light leading-relaxed">
              &ldquo;Students don&apos;t just learn theory&mdash;they prove it
              works, code it, simulate it, and build it.&rdquo;
            </p>
            <footer className="mt-4">
              <cite className="text-accent font-semibold not-italic">
                TESA Pedagogical Philosophy
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
