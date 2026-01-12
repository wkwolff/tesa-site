"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";

/**
 * TrustSignals Component
 *
 * Displays credibility indicators for TESA:
 * - Space Camp Hall of Fame 2025
 * - Naval Academy affiliation
 * - Purdue PhD candidate credentials
 *
 * Mobile-first design with responsive grid layout.
 * Includes scroll-triggered animations and hover effects.
 */
export default function TrustSignals() {
  const signals = [
    {
      id: "naval-experience",
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
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      ),
      title: "Lt. Commander, USN",
      year: "25+ Years",
      description: "Naval aviator and aerospace engineer",
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
      year: "Faculty",
      description: "Teaches aeronautics, astronautics, and MATLAB",
    },
    {
      id: "mars-research",
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
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      title: "Mars Arctic Research",
      year: "Commander",
      description: "Mission Commander, Flashline Mars Arctic Research Station",
    },
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
      year: "2025 Inductee",
      description: "Recognized for dedication to aerospace education",
    },
  ];

  return (
    <AnimatedSection>
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

          {/* Trust signals grid with stagger animation */}
          <StaggerList className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {signals.map((signal) => (
              <StaggerItem key={signal.id}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-out">
                  {/* Icon */}
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                    {signal.icon}
                  </div>

                  {/* Title and year */}
                  <h3 className="font-heading text-lg font-semibold text-surface-dark">
                    {signal.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-accent">
                    {signal.year}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-sm text-gray-600">{signal.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>
    </AnimatedSection>
  );
}
