import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactInfo } from "@/components/contact";

/**
 * Contact page metadata configuration
 * Unique title and description with Open Graph and Twitter Card tags
 */
export const metadata: Metadata = {
  title: "Contact TESA | Get in Touch",
  description:
    "Contact The Engineering and Science Academy (TESA) for enrollment information, partnership inquiries, scholarship applications, or general questions. Reach out to start your aerospace education journey.",
  keywords: [
    "contact TESA",
    "aerospace education inquiry",
    "STEM enrollment",
    "partnership inquiry",
    "scholarship application",
    "space education",
    "TESA contact form",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact TESA | Get in Touch",
    description:
      "Contact The Engineering and Science Academy for enrollment information, partnership inquiries, and more. Start your aerospace education journey today.",
    url: "https://tesa4space.org/contact",
    siteName: "TESA - The Engineering and Science Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TESA | Get in Touch",
    description:
      "Reach out to TESA for enrollment, partnerships, scholarships, or general inquiries.",
  },
};

/**
 * Loading fallback for the contact form
 */
function ContactFormFallback() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-12 bg-gray-200 rounded-lg" />
      <div className="h-12 bg-gray-200 rounded-lg" />
      <div className="h-12 bg-gray-200 rounded-lg" />
      <div className="h-32 bg-gray-200 rounded-lg" />
      <div className="h-12 w-40 bg-gray-200 rounded-lg" />
    </div>
  );
}

/**
 * ContactPage Component
 *
 * Contact page featuring:
 * - Accessible contact form with validation
 * - Direct contact information section
 * - Mobile-first responsive two-column layout
 * - URL query parameter support for pre-selecting subject
 *
 * Designed for:
 * - Funders seeking partnership information
 * - Parents inquiring about enrollment
 * - Students asking questions
 * - Media/press inquiries
 */
export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative bg-gradient-to-br from-primary via-primary-800 to-secondary py-12 sm:py-16 lg:py-20 overflow-hidden"
        aria-labelledby="contact-heading"
      >
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
          <h1
            id="contact-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Have questions about TESA? We&apos;d love to hear from you. Fill out the form
            below or email us directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        aria-labelledby="contact-form-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form - Takes 2/3 width on desktop */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2
                  id="contact-form-heading"
                  className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-2"
                >
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as
                  possible.
                </p>

                {/* Wrap ContactForm in Suspense for searchParams */}
                <Suspense fallback={<ContactFormFallback />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            {/* Contact Information - Takes 1/3 width on desktop */}
            <div className="lg:col-span-1">
              <ContactInfo />

              {/* FAQ/Quick Links */}
              <div className="mt-8 bg-primary/5 rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/program"
                      className="text-secondary hover:text-primary transition-colors underline underline-offset-2 focus-visible-ring rounded inline-block"
                    >
                      View our courses and programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/scholarships"
                      className="text-secondary hover:text-primary transition-colors underline underline-offset-2 focus-visible-ring rounded inline-block"
                    >
                      Learn about scholarships
                    </a>
                  </li>
                  <li>
                    <a
                      href="/partnerships"
                      className="text-secondary hover:text-primary transition-colors underline underline-offset-2 focus-visible-ring rounded inline-block"
                    >
                      Partnership opportunities
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-secondary hover:text-primary transition-colors underline underline-offset-2 focus-visible-ring rounded inline-block"
                    >
                      About TESA and our mission
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject-Specific Information */}
      <section
        className="py-12 sm:py-16 bg-gray-50"
        aria-labelledby="inquiry-types-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="inquiry-types-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-primary text-center mb-8"
          >
            How Can We Help?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Enrollment */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                Enrollment Information
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Questions about courses, requirements, schedules, or the enrollment
                process for high school students.
              </p>
              <a
                href="/contact?subject=Enrollment%20Information"
                className="text-sm font-medium text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
              >
                Ask about enrollment
              </a>
            </div>

            {/* Partnerships */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                Partnership Inquiries
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Interested in partnering with TESA? Learn about collaboration
                opportunities for organizations and institutions.
              </p>
              <a
                href="/contact?subject=Partnership%20Inquiry"
                className="text-sm font-medium text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
              >
                Explore partnerships
              </a>
            </div>

            {/* Scholarships */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-highlight"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                Scholarship Applications
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Apply for the Fari, Mr. Veri, or Jim Irwin scholarships for Space Camp
                opportunities.
              </p>
              <a
                href="/contact?subject=Scholarship%20Application"
                className="text-sm font-medium text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
              >
                Apply for scholarships
              </a>
            </div>

            {/* Media/Press */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                Media & Press
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Media inquiries, interview requests, and press-related questions about
                TESA and our programs.
              </p>
              <a
                href="/contact?subject=Media%2FPress"
                className="text-sm font-medium text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
              >
                Media contact
              </a>
            </div>

            {/* General */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                General Inquiries
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Any other questions about TESA, our mission, founder Diallo Wallace, or
                aerospace education in general. We&apos;re happy to help!
              </p>
              <a
                href="/contact?subject=General%20Inquiry"
                className="text-sm font-medium text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
              >
                Ask a question
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
