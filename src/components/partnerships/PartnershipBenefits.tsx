/**
 * Partnership benefits data organized by partner type
 */
const benefitCategories = [
  {
    id: "educational",
    title: "Educational Partners",
    description:
      "Universities and schools partnering with TESA gain access to a pipeline of well-prepared students ready for STEM success.",
    benefits: [
      "Access to pre-qualified students with industry certifications",
      "Curriculum alignment with university engineering programs",
      "Research collaboration opportunities in aerospace education",
      "Student mentorship and pathway programs",
    ],
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    id: "industry",
    title: "Industry Partners",
    description:
      "Aerospace companies partnering with TESA invest in the next generation of engineers while building brand recognition among future professionals.",
    benefits: [
      "Early talent identification and recruitment pipeline",
      "Brand visibility among aspiring aerospace professionals",
      "Certification program sponsorship opportunities",
      "Technical mentorship and real-world project collaboration",
    ],
    icon: (
      <svg
        className="h-8 w-8 text-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
  {
    id: "government",
    title: "Government Funders",
    description:
      "Government agencies supporting TESA contribute to national STEM workforce development and aerospace industry competitiveness.",
    benefits: [
      "Direct impact on STEM education outcomes",
      "Workforce development in strategic aerospace sectors",
      "Support for underrepresented students in STEM",
      "Measurable ROI through student achievement metrics",
    ],
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
        />
      </svg>
    ),
  },
];

/**
 * PartnershipBenefits Component
 *
 * Overview of collaboration opportunities with benefits for:
 * - Educational partners
 * - Industry partners
 * - Government funders
 *
 * Mobile-first design with card-based layout.
 */
export default function PartnershipBenefits() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="partnership-benefits-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Why Partner With Us
          </p>
          <h2
            id="partnership-benefits-heading"
            className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-surface-dark"
          >
            Partnership Benefits
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with TESA creates meaningful impact for students while
            advancing your organization&apos;s mission in aerospace education.
          </p>
        </div>

        {/* Benefits cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefitCategories.map((category) => (
            <div
              key={category.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
                {category.icon}
              </div>

              {/* Title and description */}
              <h3 className="font-heading text-xl font-bold text-surface-dark">
                {category.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>

              {/* Benefits list */}
              <ul className="mt-6 space-y-3">
                {category.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
