import type { Metadata } from "next";
import {
  CurrentPartners,
  AccreditationBadge,
  PotentialFunders,
  PartnershipBenefits,
  PartnershipCTA,
} from "@/components/partnerships";

/**
 * Partnerships page metadata configuration
 * Unique title and description with Open Graph and Twitter Card tags
 */
export const metadata: Metadata = {
  title: "Partnerships | TESA Collaboration Opportunities",
  description:
    "Partner with TESA to shape the future of aerospace education. Explore collaboration opportunities for educational institutions, industry leaders, and government funders supporting STEM education.",
  keywords: [
    "TESA partnerships",
    "aerospace education partners",
    "STEM education collaboration",
    "MathWorks partner",
    "Ansys STK partner",
    "Cognia accreditation",
    "STEM workforce development",
    "aerospace industry partnership",
    "government STEM funding",
    "educational partnerships",
  ],
  alternates: {
    canonical: "/partnerships",
  },
  openGraph: {
    title: "Partnerships | TESA Collaboration Opportunities",
    description:
      "Partner with TESA to shape the future of aerospace education. Explore collaboration opportunities for schools, industry, and government.",
    url: "https://tesa4space.org/partnerships",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnerships | TESA Collaboration Opportunities",
    description:
      "Partner with TESA to shape the future of aerospace education. Educational, industry, and government opportunities.",
  },
};

/**
 * PartnershipsPage Component
 *
 * Partnerships page featuring:
 * - Current partners grid (MathWorks, Ansys, Our Shades of Blue, SpaceKind)
 * - Cognia Accreditation status badge
 * - Potential funders section (USDA, FAA, NSF - Coming Soon)
 * - Partnership benefits overview
 * - Partnership inquiry CTA
 *
 * Mobile-first responsive design optimized for funders and potential partners.
 */
export default function PartnershipsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-800 to-secondary py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Collaboration & Support
          </p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Partnerships
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Building the future of aerospace education together through
            meaningful collaborations with industry leaders, educational
            institutions, and government agencies.
          </p>

          {/* Partnership Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white">4</div>
              <p className="text-sm text-gray-200">Active Partners</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent">3</div>
              <p className="text-sm text-gray-200">Certifications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white">1</div>
              <p className="text-sm text-gray-200">Accreditation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent">3</div>
              <p className="text-sm text-gray-200">Pending Funders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <div className="flex flex-col">
        {/* Current Partners */}
        <CurrentPartners />

        {/* Accreditation Status */}
        <AccreditationBadge />

        {/* Partnership Benefits */}
        <PartnershipBenefits />

        {/* Potential Funders */}
        <PotentialFunders />

        {/* Partnership CTA */}
        <PartnershipCTA />
      </div>
    </>
  );
}
