/**
 * PartnerLogos Component
 *
 * Grid layout for partner logos with placeholder images.
 * Partners: MATHWORKS, Ansys, Our Shades of Blue, SpaceKind
 *
 * Mobile-first design: 2 columns on mobile, 4 columns on desktop.
 * Grayscale treatment with hover color effect.
 */
export default function PartnerLogos() {
  const partners = [
    {
      id: "mathworks",
      name: "MathWorks",
      description: "MATLAB Certification Partner",
    },
    {
      id: "ansys",
      name: "Ansys",
      description: "STK Certification Partner",
    },
    {
      id: "our-shades-of-blue",
      name: "Our Shades of Blue",
      description: "Community Partner",
    },
    {
      id: "spacekind",
      name: "SpaceKind",
      description: "Space Education Partner",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="partners-heading"
      role="region"
      aria-label="Our Partners"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Trusted By
          </p>
          <h2
            id="partners-heading"
            className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-surface-dark"
          >
            Our Partners
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to provide students with
            real-world certifications and opportunities.
          </p>
        </div>

        {/* Partner logos grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center justify-center p-6 sm:p-8 bg-surface rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
            >
              {/* Placeholder logo - will be replaced with actual logos */}
              <div className="h-16 w-full sm:h-20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                {/* Placeholder SVG representing a logo */}
                <div className="h-12 w-24 sm:h-14 sm:w-28 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-500 text-center px-2">
                    {partner.name}
                  </span>
                </div>
              </div>

              {/* Partner name and description */}
              <p className="mt-4 font-semibold text-surface-dark text-center">
                {partner.name}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 text-center">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info or CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Interested in partnering with TESA?
          </p>
          <a
            href="/partnerships"
            className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors focus-visible-ring rounded"
          >
            Learn about partnership opportunities
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
