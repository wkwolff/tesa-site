"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";

/**
 * EducationCredentials Component
 *
 * Displays the founder's educational background:
 * - B.S. Electronics Engineering, University of Illinois
 * - B.A. Mathematics, University of Illinois
 * - M.S. Astronautical Engineering, Naval Postgraduate School
 * - M.P.M. (Project Management), Keller Graduate School
 * - Ph.D. candidate, Engineering Education, Purdue University
 *
 * Mobile-first design with visual credential cards.
 * AnimatedSection wrapper for scroll-triggered fadeInUp animation.
 * StaggerList applied to credentials list with 0.1s delay between items.
 */
export default function EducationCredentials() {
  const credentials = [
    {
      id: "bs-ee",
      degree: "B.S.",
      field: "Electronics Engineering",
      institution: "University of Illinois",
      type: "undergraduate",
    },
    {
      id: "ba-math",
      degree: "B.A.",
      field: "Mathematics",
      institution: "University of Illinois",
      type: "undergraduate",
    },
    {
      id: "ms-astro",
      degree: "M.S.",
      field: "Astronautical Engineering",
      institution: "Naval Postgraduate School",
      type: "graduate",
    },
    {
      id: "mpm",
      degree: "M.P.M.",
      field: "Project Management",
      institution: "Keller Graduate School",
      type: "graduate",
    },
    {
      id: "phd",
      degree: "Ph.D. Candidate",
      field: "Engineering Education",
      institution: "Purdue University",
      type: "doctoral",
      highlight: true,
    },
  ];

  return (
    <AnimatedSection>
      <section
        className="py-12 sm:py-16 lg:py-20 bg-surface"
        aria-labelledby="education-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Academic Background
            </p>
            <h2
              id="education-heading"
              className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
            >
              Education Credentials
            </h2>
          </div>

          {/* Credentials Grid - StaggerList for sequential reveal with 0.1s delay */}
          <StaggerList
            className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.1}
          >
            {credentials.map((cred) => (
              <StaggerItem key={cred.id}>
                <div
                  className={`relative p-6 rounded-xl shadow-sm transition-shadow hover:shadow-md ${
                    cred.highlight
                      ? "bg-gradient-to-br from-primary to-secondary text-white ring-2 ring-accent"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  {/* Degree Type Badge */}
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      cred.highlight
                        ? "bg-white/20 text-white"
                        : cred.type === "doctoral"
                        ? "bg-accent/20 text-accent-dark"
                        : cred.type === "graduate"
                        ? "bg-secondary/20 text-secondary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {cred.type === "doctoral"
                      ? "Doctoral"
                      : cred.type === "graduate"
                      ? "Graduate"
                      : "Undergraduate"}
                  </span>

                  {/* Degree */}
                  <div className="mt-4">
                    <p
                      className={`font-heading text-xl sm:text-2xl font-bold ${
                        cred.highlight ? "text-white" : "text-surface-dark"
                      }`}
                    >
                      {cred.degree}
                    </p>
                    <p
                      className={`mt-1 font-medium ${
                        cred.highlight ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {cred.field}
                    </p>
                  </div>

                  {/* Institution */}
                  <div
                    className={`mt-4 pt-4 border-t ${
                      cred.highlight ? "border-white/20" : "border-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        className={`h-5 w-5 ${
                          cred.highlight ? "text-accent" : "text-secondary"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        />
                      </svg>
                      <span
                        className={`text-sm font-medium ${
                          cred.highlight ? "text-white" : "text-surface-dark"
                        }`}
                      >
                        {cred.institution}
                      </span>
                    </div>
                  </div>

                  {/* Current indicator for PhD */}
                  {cred.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-accent text-white">
                        Current
                      </span>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerList>

          {/* Additional Context */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              This diverse academic background combines electrical engineering,
              mathematics, aerospace engineering, project management, and
              education research to create a unique foundation for developing
              effective STEM curricula.
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
