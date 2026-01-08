import type { Metadata } from "next";
import {
  ScholarshipCard,
  ScholarshipsOverview,
  SpaceCampLink,
} from "@/components/scholarships";

/**
 * Scholarships page metadata configuration
 * Unique title and description with Open Graph and Twitter Card tags
 */
export const metadata: Metadata = {
  title: "Scholarships | TESA Space Camp Opportunities",
  description:
    "TESA scholarship programs honor individuals who inspired dreams of space. Support student and educator attendance at Space Camp through the Fari, Mr. Veri, and Jim Irwin Scholarships.",
  keywords: [
    "TESA scholarships",
    "Space Camp scholarship",
    "aerospace education funding",
    "STEM scholarship",
    "student space camp",
    "educator space camp",
    "Fari Scholarship",
    "Jim Irwin Scholarship",
    "aerospace opportunity",
  ],
  alternates: {
    canonical: "/scholarships",
  },
  openGraph: {
    title: "Scholarships | TESA Space Camp Opportunities",
    description:
      "TESA scholarship programs honor individuals who inspired dreams of space. Support student and educator Space Camp attendance.",
    url: "https://tesa4space.org/scholarships",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarships | TESA Space Camp Opportunities",
    description:
      "Support student and educator Space Camp attendance through TESA scholarship programs.",
  },
};

/**
 * Scholarship data for the three TESA scholarships
 */
const scholarships = [
  {
    name: "Fari Scholarship",
    honoreeName: "Jafari Wallace",
    story:
      "Jafari Wallace devoted his life to understanding technology and encouraged his brother Diallo's dreams of aviation and space. His passion for learning and unwavering support helped shape the vision that would become TESA. This scholarship honors his memory by opening doors for students who share that same curiosity about the universe.",
    type: "Student" as const,
    supports: "Provides a student with the opportunity to attend Space Camp",
    contactSubject: "Fari Scholarship Inquiry",
    icon: "star" as const,
  },
  {
    name: "Mr. Veri Scholarship",
    honoreeName: "Richard Veri",
    story:
      "Richard Veri was a cherished mentor who embodied what it means to be a scientist, teacher, and human being. His patience in answering questions about science and engineering inspired many victories. He showed that great educators create ripples of inspiration that last for generations. This scholarship enables an educator to experience Space Camp and bring that inspiration back to their classrooms.",
    type: "Educator" as const,
    supports: "Enables an educator to attend Space Camp",
    contactSubject: "Mr. Veri Scholarship Inquiry",
    icon: "graduation" as const,
  },
  {
    name: "Jim Irwin Scholarship",
    honoreeName: "Jim Irwin",
    story:
      "Apollo 15 astronaut Jim Irwin walked on the Moon and befriended Diallo during his senior year of high school. Jim and Commander Dave Scott discovered the \"Genesis Rock,\" providing vital clues about the Moon's origins and demonstrating the profound impact of human space exploration. This scholarship supports a student's journey to Space Camp, inspired by the same wonder that drove Apollo missions.",
    type: "Student" as const,
    supports: "Supports a student's opportunity to attend Space Camp",
    contactSubject: "Jim Irwin Scholarship Inquiry",
    icon: "rocket" as const,
  },
];

/**
 * ScholarshipsPage Component
 *
 * Scholarships page featuring:
 * - Overview of TESA's commitment to accessibility
 * - Three scholarship cards (Fari, Mr. Veri, Jim Irwin)
 * - Space Camp information and external link
 *
 * Mobile-first responsive design optimized for parents and students.
 */
export default function ScholarshipsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-800 to-secondary py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Space Camp Opportunities
          </p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Scholarships
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Honoring those who inspired us by creating opportunities for the next
            generation of aerospace explorers.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <div className="flex flex-col">
        {/* Scholarships Overview */}
        <ScholarshipsOverview />

        {/* Scholarship Cards */}
        <section
          className="py-12 sm:py-16 lg:py-20 bg-surface"
          aria-labelledby="scholarship-cards-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="scholarship-cards-heading"
              className="text-center font-heading text-2xl sm:text-3xl font-bold text-surface-dark mb-10 sm:mb-12"
            >
              Our Scholarship Programs
            </h2>

            {/* Scholarship Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {scholarships.map((scholarship) => (
                <ScholarshipCard
                  key={scholarship.name}
                  name={scholarship.name}
                  honoreeName={scholarship.honoreeName}
                  story={scholarship.story}
                  type={scholarship.type}
                  supports={scholarship.supports}
                  contactSubject={scholarship.contactSubject}
                  icon={scholarship.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Space Camp Link */}
        <SpaceCampLink />

        {/* Additional CTA Section */}
        <section
          className="py-12 sm:py-16 lg:py-20 bg-white"
          aria-labelledby="support-cta-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id="support-cta-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-surface-dark"
              >
                Support Our Scholarships
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600">
                Your contribution helps send deserving students and educators to
                Space Camp, creating life-changing experiences that inspire
                careers in aerospace and STEM fields.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact?subject=Scholarship%20Donation"
                  className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Donate to Scholarships
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
