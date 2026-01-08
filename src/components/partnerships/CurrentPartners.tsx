import PartnerCard from "./PartnerCard";

/**
 * Partner data for current TESA partners
 */
const partners = [
  {
    name: "MathWorks",
    description: "MATLAB Certification Partner",
    type: "Certification" as const,
  },
  {
    name: "Ansys",
    description: "STK Certification Partner",
    type: "Certification" as const,
  },
  {
    name: "Our Shades of Blue",
    description: "Community Partner",
    type: "Community" as const,
  },
  {
    name: "SpaceKind",
    description: "Space Education Partner",
    type: "Education" as const,
  },
];

/**
 * CurrentPartners Component
 *
 * Grid layout for current partner logos/placeholders.
 * Partners: MATHWORKS, Ansys, Our Shades of Blue, SpaceKind
 *
 * Mobile-first design: 1 column on mobile, 2 columns on tablet, 4 columns on desktop.
 */
export default function CurrentPartners() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-surface"
      aria-labelledby="current-partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Trusted Collaborations
          </p>
          <h2
            id="current-partners-heading"
            className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-surface-dark"
          >
            Current Partners
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to provide students with
            real-world certifications and opportunities in aerospace education.
          </p>
        </div>

        {/* Partner logos grid - responsive layout */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          data-testid="partners-grid"
        >
          {partners.map((partner) => (
            <PartnerCard
              key={partner.name}
              name={partner.name}
              description={partner.description}
              type={partner.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
