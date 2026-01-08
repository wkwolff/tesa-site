import Image from "next/image";

/**
 * FounderBio Component
 *
 * Introduces Lt. Commander Diallo Wallace with professional headshot.
 * Displays personal mission statement and key credentials.
 * Mobile-first responsive design with prominent visual hierarchy.
 *
 * Performance optimizations:
 * - Founder image uses next/image with priority (above-fold on About page)
 * - Proper sizes attribute for responsive loading based on grid columns
 */
export default function FounderBio() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Our Founder
          </p>
          <h2
            id="founder-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            Meet Diallo Wallace
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-start">
          {/* Photo Column */}
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-[272px] sm:max-w-[340px]">
              {/* Professional Headshot - constrained to prevent upscaling */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                <Image
                  src="/images/about/diallo-wallace-founder.png"
                  alt="Diallo Wallace, Founder of TESA - Naval Academy aerospace engineering professor, Space Camp Hall of Fame 2025 inductee, and Purdue PhD candidate"
                  width={544}
                  height={628}
                  className="w-full h-auto"
                  priority
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 340px, 272px"
                />
              </div>

              {/* Highlight Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Space Camp
                </p>
                <p className="font-heading font-bold">
                  Hall of Fame 2025
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Name and Title */}
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-surface-dark">
                Lt. Commander Diallo Wallace, USN (Ret.)
              </h3>
              <p className="mt-1 text-lg text-secondary font-medium">
                Naval Aviator | Aerospace Engineer | Educator
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-accent">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                &ldquo;My focus is on empowering students to understand science
                and engineering through the practical application of
                mathematics. I develop pre-college curricula aligned with
                university expectations and advocate for computation and
                programming in K-12.&rdquo;
              </p>
            </div>

            {/* Key Accomplishments */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold text-surface-dark">
                Distinguished Career
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700">
                    Professor at U.S. Naval Academy Department of Aerospace
                    Engineering
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700">
                    Ph.D. candidate in Engineering Education at Purdue University
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700">
                    NASA Airborne Astronomy Ambassador aboard SOFIA 747
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700">
                    Designed UC A-G approved curriculum for grades 6-12
                  </span>
                </li>
              </ul>
            </div>

            {/* Academic Presentations */}
            <p className="text-gray-600 text-sm">
              Presented at ASEE on integrating computation and programming into
              K-12, and at NASA&apos;s SEEC on applying the engineering design
              process and the mathematics behind Apollo 13.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
