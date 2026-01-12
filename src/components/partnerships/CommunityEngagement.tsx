"use client";

/**
 * Community Engagement Component
 *
 * Showcases TESA's community partnership activities,
 * featuring photos from Shades of Blue events demonstrating
 * active engagement with partner organizations.
 *
 * Mobile-first responsive design with optimized images.
 */

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";

interface EventImage {
  src: string;
  alt: string;
  caption: string;
}

const eventImages: EventImage[] = [
  {
    src: "/images/partnerships/shades-of-blue/speaker-presentation.jpg",
    alt: "Diallo Wallace speaking at Shades of Blue event in Ocean City",
    caption: "Inspiring Future Aviators",
  },
  {
    src: "/images/partnerships/shades-of-blue/with-attendees.jpg",
    alt: "Diallo Wallace with Shades of Blue event attendees",
    caption: "Building Community Connections",
  },
  {
    src: "/images/partnerships/shades-of-blue/with-student.jpg",
    alt: "Diallo Wallace mentoring YES WE CAN student at Shades of Blue event",
    caption: "Mentoring the Next Generation",
  },
];

export default function CommunityEngagement() {
  return (
    <AnimatedSection>
      <section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        aria-labelledby="community-engagement-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Partnerships in Action
            </p>
            <h2
              id="community-engagement-heading"
              className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
            >
              Community Engagement
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              TESA actively partners with organizations like{" "}
              <strong>Our Shades of Blue</strong> to inspire students from
              diverse backgrounds to pursue careers in aviation and aerospace.
            </p>
          </div>

          {/* Event Photos Grid */}
          <StaggerList
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.15}
          >
            {eventImages.map((image) => (
              <StaggerItem key={image.src}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Caption Overlay */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 sm:p-5">
                    <p className="text-sm sm:text-base font-semibold text-white">
                      {image.caption}
                    </p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerList>

          {/* Partner Highlight */}
          <div className="mt-10 bg-surface rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
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
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-surface-dark">
                  Our Shades of Blue
                </h3>
                <p className="mt-2 text-gray-600">
                  A community organization dedicated to increasing diversity in
                  aviation. Through this partnership, TESA reaches
                  underrepresented students and provides pathways to aerospace
                  careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
