import type { Metadata } from "next";
import {
  HeroSection,
  TrustSignals,
  AudienceCTAs,
  ProgramPathwayPreview,
  PartnerLogos,
  Testimonials,
} from "@/components/homepage";

/**
 * Homepage metadata configuration
 * Unique title and description with Open Graph and Twitter Card tags
 */
export const metadata: Metadata = {
  title: "TESA | Credit-Bearing Aerospace Courses for Grades 6-12",
  description:
    "The Engineering and Science Academy (TESA) offers credit-bearing aerospace courses for grades 6-12. Prepare your child for STEM success with hands-on learning, industry certifications in MATLAB and STK, and mentorship from aerospace professionals.",
  keywords: [
    "aerospace education",
    "STEM courses grades 6-12",
    "pre-college engineering",
    "MATLAB certification",
    "aerospace courses for students",
    "space education",
    "engineering courses for middle school",
    "engineering courses for high school",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TESA | Credit-Bearing Aerospace Courses for Grades 6-12",
    description:
      "Prepare your child for STEM success with hands-on aerospace education, industry certifications, and mentorship from aerospace professionals.",
    url: "https://tesa4space.org",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TESA | Credit-Bearing Aerospace Courses for Grades 6-12",
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
      "A pre-college hybrid school offering credit-bearing aerospace courses for grades 6-12, designed to prepare students for academic and technical rigor in STEM majors.",
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
      name: "Diallo Wallace",
      jobTitle: "Founder",
      description:
        "Naval Academy aerospace engineering professor, Space Camp Hall of Fame 2025 inductee, and Purdue PhD candidate in Engineering Education",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "MATLAB Certification",
        credentialCategory: "Industry Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Ansys STK Certification",
        credentialCategory: "Industry Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "PMI CAPM Certification",
        credentialCategory: "Industry Certification",
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
    educationalLevel: ["Middle School", "High School"],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Grades 6-12",
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

        {/* Partner Logos */}
        <PartnerLogos />

        {/* Testimonials - Placeholder */}
        <Testimonials />
      </div>
    </>
  );
}
