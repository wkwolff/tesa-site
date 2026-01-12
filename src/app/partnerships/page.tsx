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
    "UC A-G approved",
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
      <section className="relative bg-gradient-to-br from-primary via-primary-800 to-secondary py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Animated star field background */}
        <div
          className="star-field absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <span className="star-field-large" />
        </div>

        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
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
              <div className="text-2xl sm:text-3xl font-bold text-accent">3+</div>
              <p className="text-sm text-gray-200">Certification Types</p>
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
