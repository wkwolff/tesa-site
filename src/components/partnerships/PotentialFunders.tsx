import PartnerCard from "./PartnerCard";

/**
 * Potential funder data with "Coming Soon" treatment
 */
const potentialFunders = [
  {
    name: "USDA",
    description: "Agricultural & Rural Development",
    type: "Funder" as const,
  },
  {
    name: "FAA",
    description: "Aviation Education Initiatives",
    type: "Funder" as const,
  },
  {
    name: "NSF",
    description: "STEM Education Research",
    type: "Funder" as const,
  },
];

/**
 * PotentialFunders Component
 *
 * Displays potential government funders with "Coming Soon" treatment.
 * Funders: USDA, FAA, NSF
 *
 * Mobile-first design with placeholder visual treatment.
 */
export default function PotentialFunders() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-surface"
      aria-labelledby="potential-funders-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Future Collaborations
          </p>
          <h2
            id="potential-funders-heading"
            className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-surface-dark"
          >
            Potential Funders
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We are actively pursuing partnerships with government agencies to expand
            aerospace education access and support student opportunities.
          </p>
        </div>

        {/* Funders grid - responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {potentialFunders.map((funder) => (
            <PartnerCard
              key={funder.name}
              name={funder.name}
              description={funder.description}
              type={funder.type}
              comingSoon
            />
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Interested in funding aerospace education initiatives? We welcome
            conversations with government agencies, foundations, and corporate sponsors
            committed to STEM education.
          </p>
        </div>
      </div>
    </section>
  );
}
