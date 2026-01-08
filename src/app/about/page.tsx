import type { Metadata } from "next";
import {
  MissionSection,
  GapSection,
  FounderBio,
  EducationCredentials,
  SpaceExperience,
  MilitaryService,
  VisionSection,
  ContactCTA,
} from "@/components/about";

/**
 * About page metadata configuration
 * Unique title and description with Open Graph and Twitter Card tags
 */
export const metadata: Metadata = {
  title: "About TESA | Founder & Mission",
  description:
    "Learn about The Engineering and Science Academy (TESA), our mission to prepare students for STEM success, and founder Diallo Wallace - Space Camp Hall of Fame 2025 inductee, Naval Academy professor, and Purdue PhD candidate.",
  keywords: [
    "TESA founder",
    "Diallo Wallace",
    "aerospace education",
    "STEM education mission",
    "Space Camp Hall of Fame",
    "Naval Academy professor",
    "engineering education",
    "pre-college STEM",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About TESA | Founder & Mission",
    description:
      "Meet Diallo Wallace, founder of TESA - Space Camp Hall of Fame 2025 inductee and Naval Academy aerospace engineering professor. Learn about our mission to prepare students for STEM success.",
    url: "https://tesa4space.org/about",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About TESA | Founder & Mission",
    description:
      "Meet Diallo Wallace, founder of TESA - Space Camp Hall of Fame 2025 inductee and aerospace education pioneer.",
  },
};

/**
 * JSON-LD Structured Data for About Page
 * EducationalOrganization schema and Person schema for founder
 */
function JsonLdSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TESA - The Engineering and Science Academy",
    alternateName: "TESA",
    url: "https://tesa4space.org",
    logo: "https://tesa4space.org/images/tesa_logo.png",
    description:
      "A pre-college hybrid school offering credit-bearing aerospace courses for grades 6-12, designed to prepare students for academic and technical rigor in STEM majors. TESA addresses the 60% first-year engineering attrition rate through hands-on learning, industry certifications, and mentorship.",
    email: "diallo@tesa4space.org",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      "@id": "https://tesa4space.org/about#founder",
    },
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressRegion: "MD",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "MATLAB Certification",
        credentialCategory: "Industry Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "MathWorks",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Ansys STK Certification",
        credentialCategory: "Industry Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "Ansys",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "PMI CAPM Certification",
        credentialCategory: "Industry Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "Project Management Institute",
        },
      },
    ],
    teaches: [
      "Aerospace Engineering",
      "MATLAB Programming",
      "Physics",
      "Engineering",
      "Mathematics",
      "Rocketry",
      "Orbital Mechanics",
    ],
    educationalLevel: ["Middle School", "High School"],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Grades 6-12",
    },
  };

  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://tesa4space.org/about#founder",
    name: "Diallo Wallace",
    honorificPrefix: "Lt. Commander",
    honorificSuffix: "USN (Ret.)",
    jobTitle: "Founder",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "TESA - The Engineering and Science Academy",
    },
    affiliation: [
      {
        "@type": "EducationalOrganization",
        name: "U.S. Naval Academy",
        department: "Department of Aerospace Engineering",
      },
      {
        "@type": "EducationalOrganization",
        name: "Purdue University",
        department: "Engineering Education",
      },
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Illinois",
      },
      {
        "@type": "EducationalOrganization",
        name: "Naval Postgraduate School",
      },
      {
        "@type": "EducationalOrganization",
        name: "Keller Graduate School",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "B.S. Electronics Engineering",
        educationalLevel: "Bachelor's Degree",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "University of Illinois",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "B.A. Mathematics",
        educationalLevel: "Bachelor's Degree",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "University of Illinois",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "M.S. Astronautical Engineering",
        educationalLevel: "Master's Degree",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Naval Postgraduate School",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "M.P.M. Project Management",
        educationalLevel: "Master's Degree",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Keller Graduate School",
        },
      },
    ],
    award: [
      "Space Camp Hall of Fame 2025",
      "Navy Achievement Medal",
      "Naval Unit Commendation",
      "Military Outstanding Volunteer Service Medal",
    ],
    knowsAbout: [
      "Aerospace Engineering",
      "Engineering Education",
      "MATLAB Programming",
      "Astronautics",
      "Naval Aviation",
      "STEM Curriculum Development",
    ],
    description:
      "Naval Academy aerospace engineering professor, Space Camp Hall of Fame 2025 inductee, and Purdue PhD candidate in Engineering Education. Mission Commander at Flashline Mars Arctic Research Station and NASA Airborne Astronomy Ambassador.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderSchema),
        }}
      />
    </>
  );
}

/**
 * AboutPage Component
 *
 * About TESA page featuring:
 * - TESA Mission and problem statement
 * - The Gap TESA Fills section
 * - Founder bio with Lt. Commander Diallo Wallace
 * - Education credentials
 * - Space & Analog Astronaut experience
 * - Military service background
 * - Vision for the future
 * - Contact CTA
 *
 * Mobile-first responsive design optimized for legislators and funders.
 */
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdSchema />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-800 to-secondary py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About TESA
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            The Engineering and Science Academy: Preparing tomorrow&apos;s
            aerospace leaders through hands-on STEM education.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <div className="flex flex-col">
        {/* TESA Mission Section */}
        <MissionSection />

        {/* The Gap TESA Fills */}
        <GapSection />

        {/* Founder Bio */}
        <FounderBio />

        {/* Education Credentials */}
        <EducationCredentials />

        {/* Space & Analog Astronaut Experience */}
        <SpaceExperience />

        {/* Military Service */}
        <MilitaryService />

        {/* Vision Section */}
        <VisionSection />

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </>
  );
}
