/**
 * SpaceCampLink Component
 *
 * External link section with information about Space Camp
 * and proper security attributes for external links.
 *
 * Mobile-first design with prominent call-to-action.
 */
export default function SpaceCampLink() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary-800 to-secondary"
      aria-labelledby="space-camp-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <svg
              className="h-8 w-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>

          {/* Content */}
          <h2
            id="space-camp-heading"
            className="mt-6 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            About Space Camp
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
            Space Camp at the U.S. Space &amp; Rocket Center in Huntsville, Alabama
            offers immersive aerospace education experiences for students and educators.
            Participants engage in hands-on activities, simulated missions, and learn
            about space exploration from experts in the field.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">40+</div>
              <p className="text-xs text-gray-300">Years Operating</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-accent">1M+</div>
              <p className="text-xs text-gray-300">Alumni</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">150+</div>
              <p className="text-xs text-gray-300">Countries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-accent">NASA</div>
              <p className="text-xs text-gray-300">Partnership</p>
            </div>
          </div>

          {/* External Link */}
          <div className="mt-10">
            <a
              href="https://www.spacecamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-touch px-8 py-4 text-base font-semibold text-primary bg-white rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Learn More About Space Camp
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <p className="mt-4 text-sm text-gray-300">
              External link opens in a new tab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
