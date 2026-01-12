"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";
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
 * Partnerships in development
 */
const developingPartners = [
  {
    name: "COMSPOC",
    description: "Space Situational Awareness curriculum integration",
    type: "Curriculum" as const,
  },
  {
    name: "Chesapeake College",
    description: "Potential campus location and dual-enrollment pathway",
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
 * Includes staggered fade-in animation for partner cards.
 */
export default function CurrentPartners() {
  return (
    <AnimatedSection>
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

          {/* Partner logos grid - responsive layout with stagger animation */}
          <StaggerList
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            staggerDelay={0.15}
          >
            {partners.map((partner) => (
              <StaggerItem key={partner.name}>
                <PartnerCard
                  name={partner.name}
                  description={partner.description}
                  type={partner.type}
                />
              </StaggerItem>
            ))}
          </StaggerList>

          {/* Partnerships In Development */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Coming Soon
              </p>
              <h3 className="mt-2 text-xl sm:text-2xl font-heading font-bold text-surface-dark">
                Partnerships In Development
              </h3>
            </div>

            <StaggerList
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
              staggerDelay={0.15}
            >
              {developingPartners.map((partner) => (
                <StaggerItem key={partner.name}>
                  <div className="bg-white/50 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                    <p className="font-heading font-semibold text-surface-dark">
                      {partner.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {partner.description}
                    </p>
                    <span className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      In Development
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
