import type { Metadata } from "next";
import {
  LearningPathway,
  CourseCatalog,
  Certifications,
  CourseFormat,
  CareerOutcomes,
  EnrollmentCTA,
  OurApproach,
  GraduateProfile,
} from "@/components/program";

/**
 * Program page metadata configuration
 * Unique title and description with Open Graph and Twitter Card tags
 */
export const metadata: Metadata = {
  title: "Program Overview | TESA Aerospace Courses",
  description:
    "Explore TESA's comprehensive STEM curriculum: 27 credit-bearing courses across Science, Technology, Engineering, and Mathematics for grades 6-12. Earn industry certifications in MATLAB, STK, and CAPM.",
  keywords: [
    "STEM curriculum",
    "aerospace courses",
    "engineering education grades 6-12",
    "MATLAB certification high school",
    "pre-college engineering program",
    "UC A-G approved courses",
    "aerospace career preparation",
    "physics courses for students",
    "orbital mechanics education",
    "rocketry courses",
  ],
  alternates: {
    canonical: "/program",
  },
  openGraph: {
    title: "Program Overview | TESA Aerospace Courses",
    description:
      "27 credit-bearing STEM courses for grades 6-12. Earn industry certifications and prepare for aerospace careers with hands-on learning.",
    url: "https://tesa4space.org/program",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Overview | TESA Aerospace Courses",
    description:
      "27 credit-bearing STEM courses for grades 6-12. Industry certifications and hands-on aerospace education.",
  },
};

/**
 * JSON-LD Structured Data for Program Page
 * Course schema for educational offerings
 */
function JsonLdSchema() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "TESA Aerospace Engineering Program",
    description:
      "Comprehensive STEM curriculum spanning grades 6-12, featuring 27 credit-bearing courses in Science, Technology, Engineering, and Mathematics with industry-recognized certifications.",
    provider: {
      "@type": "EducationalOrganization",
      name: "TESA - The Engineering and Science Academy",
      url: "https://tesa4space.org",
    },
    educationalLevel: ["Middle School", "High School"],
    educationalCredentialAwarded: [
      "MATLAB Certification",
      "Ansys STK Certification",
      "PMI CAPM Certification",
    ],
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Hybrid",
        duration: "P10W",
        courseSchedule: {
          "@type": "Schedule",
          repeatFrequency: "P1W",
        },
      },
    ],
    about: [
      "Aerospace Engineering",
      "Physics",
      "MATLAB Programming",
      "Orbital Mechanics",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Rocketry",
      "Mathematics",
    ],
    teaches: [
      "Engineering design process",
      "Scientific methodology",
      "Programming fundamentals",
      "Project management",
      "Technical writing",
      "Problem-solving skills",
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Grades 6-12",
    },
    numberOfCredits: 27,
    occupationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      name: "UC A-G Approved",
      credentialCategory: "Academic Credit",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
  );
}

/**
 * ProgramPage Component
 *
 * Program Overview page featuring:
 * - Visual learning pathway from 6th to 12th grade (with KSAs and opportunities)
 * - Complete course catalog organized by STEM categories
 * - 10-week course format explanation
 * - Our Approach: 4-step learning process and teaching methods
 * - Industry certifications section
 * - Career outcomes and salary information
 * - TESA Graduate Profile
 * - Enrollment inquiry CTA
 *
 * Mobile-first responsive design optimized for parents and students.
 */
export default function ProgramPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdSchema />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-800 to-secondary py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Grades 6-12 Curriculum
          </p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Program Overview
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            A comprehensive STEM curriculum designed to prepare students for
            success in aerospace engineering and beyond.
          </p>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white">27</div>
              <p className="text-sm text-gray-200">Courses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent">4</div>
              <p className="text-sm text-gray-200">STEM Categories</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white">3</div>
              <p className="text-sm text-gray-200">Certifications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent">7</div>
              <p className="text-sm text-gray-200">Years of Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <div className="flex flex-col">
        {/* Visual Learning Pathway (with KSAs and Opportunities) */}
        <LearningPathway />

        {/* Course Catalog */}
        <CourseCatalog />

        {/* 10-Week Course Format */}
        <CourseFormat />

        {/* Our Approach: 4-Step Learning Process */}
        <OurApproach />

        {/* Industry Certifications */}
        <Certifications />

        {/* Career Outcomes */}
        <CareerOutcomes />

        {/* TESA Graduate Profile */}
        <GraduateProfile />

        {/* Enrollment CTA */}
        <EnrollmentCTA />
      </div>
    </>
  );
}
