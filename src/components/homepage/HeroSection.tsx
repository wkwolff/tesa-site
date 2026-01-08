import Link from "next/link";

/**
 * HeroSection Component
 *
 * Homepage hero section with value proposition and primary CTA.
 * Mobile-first design with responsive typography and full-width CTAs on mobile.
 *
 * Key messaging: "Credit-bearing aerospace courses for grades 6-12"
 */
export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-primary via-primary-800 to-secondary overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Main heading */}
          <h1
            id="hero-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="block">Preparing Tomorrow&apos;s</span>
            <span className="block text-accent mt-2">Aerospace Leaders</span>
          </h1>

          {/* Value proposition */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl">
            Credit-bearing aerospace courses for{" "}
            <span className="font-semibold text-white">grades 6-12</span>
          </p>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-300 sm:text-lg">
            Hands-on STEM education with industry certifications, real-world
            design challenges, and mentorship from aerospace professionals.
          </p>

          {/* CTA Buttons - full width on mobile, inline on larger screens */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4 md:mt-10">
            <Link
              href="/program"
              className="inline-flex items-center justify-center min-h-touch w-full sm:w-auto px-8 py-4 text-base font-semibold text-primary bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors focus-visible-ring"
            >
              Explore Our Program
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-touch w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors focus-visible-ring"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 sm:h-16 md:h-20 text-white"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,85.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
