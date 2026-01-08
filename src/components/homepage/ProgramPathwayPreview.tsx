import Link from "next/link";

/**
 * ProgramPathwayPreview Component
 *
 * Visual grade progression from 6th to 12th grade showing STEM integration.
 * Mobile-first design: vertical timeline on mobile, horizontal on desktop.
 */
export default function ProgramPathwayPreview() {
  const grades = [
    {
      grade: "6th-7th",
      title: "Foundation",
      focus: "Pre-Engineering, Raspberry Pi",
      color: "bg-primary",
    },
    {
      grade: "8th-9th",
      title: "Exploration",
      focus: "MATLAB, Physics First",
      color: "bg-secondary",
    },
    {
      grade: "10th-11th",
      title: "Specialization",
      focus: "Engineering & Aerospace",
      color: "bg-primary-700",
    },
    {
      grade: "12th",
      title: "Certification",
      focus: "Industry Certifications",
      color: "bg-accent",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-surface to-white"
      aria-labelledby="pathway-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Your Journey
          </p>
          <h2
            id="pathway-heading"
            className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-surface-dark"
          >
            6th Grade to 12th Grade Pathway
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A structured progression from foundational STEM concepts to
            industry-recognized certifications.
          </p>
        </div>

        {/* Pathway visualization - vertical on mobile, horizontal on larger screens */}
        <div className="relative">
          {/* Mobile layout (vertical timeline) */}
          <div className="md:hidden">
            <div className="relative pl-8 border-l-4 border-primary/20 space-y-8">
              {grades.map((item) => (
                <div key={item.grade} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[calc(0.5rem+10px)] top-0 h-5 w-5 rounded-full ${item.color} border-4 border-white shadow`}
                    aria-hidden="true"
                  />

                  {/* Content card */}
                  <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-2">
                      {item.grade}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-surface-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop layout (horizontal flow) */}
          <div className="hidden md:block">
            {/* Connecting line */}
            <div
              className="absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
              aria-hidden="true"
            />

            <div className="grid grid-cols-4 gap-4 relative">
              {grades.map((item, index) => (
                <div key={item.grade} className="relative">
                  {/* Timeline dot */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`h-8 w-8 rounded-full ${item.color} border-4 border-white shadow-lg flex items-center justify-center`}
                    >
                      <span className="text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow text-center h-full">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold text-white ${item.color} rounded-full mb-3`}
                    >
                      {item.grade}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-surface-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STEM Categories summary */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
          {[
            { category: "Science", count: 7, icon: "S" },
            { category: "Technology", count: 3, icon: "T" },
            { category: "Engineering", count: 11, icon: "E" },
            { category: "Mathematics", count: 6, icon: "M" },
          ].map((stem) => (
            <div
              key={stem.category}
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="h-10 w-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {stem.icon}
                </span>
              </div>
              <p className="font-semibold text-surface-dark">{stem.category}</p>
              <p className="text-sm text-gray-500">{stem.count} courses</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/program"
            className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-800 transition-colors focus-visible-ring"
          >
            Learn More About Our Program
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
