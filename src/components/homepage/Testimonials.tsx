/**
 * Testimonials Component
 *
 * Placeholder testimonial cards for Homepage.
 * Displays 3 testimonials: 2 students, 1 parent.
 * Uses obvious placeholder text to indicate content is coming.
 *
 * Mobile-first design: 1 column on mobile, 3 columns on desktop.
 */

interface TestimonialData {
  id: string;
  type: "student" | "parent";
  namePlaceholder: string;
  detailPlaceholder: string;
  quote: string;
}

const testimonials: TestimonialData[] = [
  {
    id: "student-1",
    type: "student",
    namePlaceholder: "[Student Name]",
    detailPlaceholder: "[School, Grade 10]",
    quote:
      "Testimonial coming soon. TESA students share their experiences here.",
  },
  {
    id: "student-2",
    type: "student",
    namePlaceholder: "[Student Name]",
    detailPlaceholder: "[School, Grade 12]",
    quote:
      "Testimonial coming soon. TESA students share their experiences here.",
  },
  {
    id: "parent-1",
    type: "parent",
    namePlaceholder: "[Parent Name]",
    detailPlaceholder: "[Parent of TESA Graduate]",
    quote:
      "Testimonial coming soon. TESA parents share their experiences here.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-surface"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Real Stories
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
          >
            What Our Students Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            Hear from students and parents who have experienced the TESA
            difference firsthand.
          </p>
        </div>

        {/* Testimonials Grid - 1 col mobile, 3 cols desktop */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Type Badge */}
              <div className="flex justify-end mb-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    testimonial.type === "student"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  {testimonial.type === "student" ? "Student" : "Parent"}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution - Placeholder */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {/* Avatar Placeholder */}
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-surface-dark">
                    {testimonial.namePlaceholder}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.detailPlaceholder}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Want to share your TESA experience?
          </p>
          <a
            href="/contact?subject=testimonial"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors min-h-touch min-w-touch focus-visible-ring"
          >
            Submit Your Story
            <svg
              className="ml-2 h-4 w-4"
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
          </a>
        </div>
      </div>
    </section>
  );
}
