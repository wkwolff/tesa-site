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
  ProgramInAction,
} from "@/components/program";

/**
 * Program page metadata configuration
 * Unique title and description with Open Graph and Twitter Card tags
 */
export const metadata: Metadata = {
  title: "Program Overview | TESA Aerospace Courses",
  description:
    "Explore TESA's comprehensive STEM curriculum: 27 credit-bearing courses across Science, Technology, Engineering, and Mathematics for high school students. Earn industry certifications in MATLAB, STK, and CAPM.",
  keywords: [
    "STEM curriculum",
    "aerospace courses",
    "high school engineering education",
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
      "27 credit-bearing STEM courses for high school students. Earn industry certifications and prepare for aerospace careers with hands-on learning.",
    url: "https://tesa4space.org/program",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Overview | TESA Aerospace Courses",
    description:
      "27 credit-bearing STEM courses for high school students. Industry certifications and hands-on aerospace education.",
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
      "Comprehensive STEM curriculum for high school students, featuring 27 credit-bearing courses in Science, Technology, Engineering, and Mathematics with industry-recognized certifications.",
    provider: {
      "@type": "EducationalOrganization",
      name: "TESA - The Engineering and Science Academy",
      url: "https://tesa4space.org",
    },
    educationalLevel: ["High School"],
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
      audienceType: "High School Students",
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
            High School Curriculum
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
              <div className="text-2xl sm:text-3xl font-bold text-accent">4</div>
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

        {/* Program in Action - Classroom Photos */}
        <ProgramInAction />

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
