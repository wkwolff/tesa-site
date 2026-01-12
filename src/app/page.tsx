import type { Metadata } from "next";
import {
  HeroSection,
  TrustSignals,
  AudienceCTAs,
  ProgramPathwayPreview,
  TESAInAction,
  PartnerLogos,
  Testimonials,
} from "@/components/homepage";

/**
 * Homepage metadata configuration
 * Unique title and description with Open Graph and Twitter Card tags
 */
export const metadata: Metadata = {
  title: "TESA | Credit-Bearing Aerospace Courses for High School Students",
  description:
    "The Engineering and Science Academy (TESA) offers credit-bearing aerospace courses for high school students. Prepare your child for STEM success with hands-on learning, industry certifications in MATLAB and STK, and mentorship from aerospace professionals.",
  keywords: [
    "aerospace education",
    "STEM courses for high school",
    "pre-college engineering",
    "MATLAB certification",
    "aerospace courses for students",
    "space education",
    "college prep engineering",
    "engineering courses for high school",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TESA | Credit-Bearing Aerospace Courses for High School Students",
    description:
      "Prepare your child for STEM success with hands-on aerospace education, industry certifications, and mentorship from aerospace professionals.",
    url: "https://tesa4space.org",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TESA | Credit-Bearing Aerospace Courses for High School Students",
    description:
      "Prepare your child for STEM success with hands-on aerospace education, industry certifications, and mentorship.",
  },
};

/**
 * JSON-LD Structured Data for EducationalOrganization
 * Helps search engines understand TESA's organization type and offerings
 */
function JsonLdSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TESA - The Engineering and Science Academy",
    alternateName: "TESA",
    url: "https://tesa4space.org",
    logo: "https://tesa4space.org/images/tesa_logo.png",
    description:
      "A pre-college hybrid school offering credit-bearing aerospace courses for high school students, designed to prepare students for academic and technical rigor in STEM majors.",
    email: "diallo@tesa4space.org",
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Lt. Commander Diallo Wallace",
      jobTitle: "Founder",
      description:
        "25+ year naval aviator and aerospace engineer. Instructs aeronautics, astronautics, and MATLAB at U.S. Naval Academy. PhD candidate in Engineering Education at Purdue University. Mission Commander, Flashline Mars Arctic Research Station. Space Camp Hall of Fame 2025 inductee.",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "MATLAB Certified Associate",
        credentialCategory: "Industry Certification",
        description: "Earned after completing foundational courses plus one application course",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Ansys STK Certifications",
        credentialCategory: "Industry Certification",
        description: "Multiple progressive certifications earned after each space course",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "PMI CAPM Certification",
        credentialCategory: "Industry Certification",
        description: "Earned in senior year with established portfolio",
      },
    ],
    teaches: [
      "Aerospace Engineering",
      "MATLAB Programming",
      "Physics",
      "Engineering",
      "Mathematics",
      "Rocketry",
    ],
    educationalLevel: ["High School"],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "High School Students",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/**
 * Homepage Component
 *
 * Main landing page for TESA featuring:
 * - Hero section with value proposition
 * - Trust signals (credentials)
 * - Audience-specific CTAs
 * - Program pathway preview
 * - Partner logos
 * - Testimonials (placeholder)
 */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdSchema />

      {/* Page Content */}
      <div className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Signals - Founder Credentials */}
        <TrustSignals />

        {/* Audience CTAs - Funders, Parents, Students */}
        <AudienceCTAs />

        {/* Program Pathway Preview */}
        <ProgramPathwayPreview />

        {/* TESA in Action - Real Photos */}
        <TESAInAction />

        {/* Partner Logos */}
        <PartnerLogos />

        {/* Testimonials - Placeholder */}
        <Testimonials />
      </div>
    </>
  );
}
