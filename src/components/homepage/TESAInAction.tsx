"use client";

/**
 * TESA in Action Component
 *
 * Showcases real photos from TESA activities:
 * - Teaching/classroom instruction
 * - Space experiences (spacesuit, Hall of Fame)
 * - Community engagement events
 *
 * Mobile-first responsive grid with optimized images.
 */

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";

interface ActionImage {
  src: string;
  alt: string;
  caption: string;
}

const actionImages: ActionImage[] = [
  {
    src: "/images/homepage/tesa-in-action/spacesuit.jpg",
    alt: "Diallo Wallace in spacesuit during Mars simulation research",
    caption: "Mars Research Mission",
  },
  {
    src: "/images/homepage/tesa-in-action/hall-of-fame-jacket.jpg",
    alt: "Space Camp Hall of Fame jacket worn by Diallo Wallace",
    caption: "Space Camp Hall of Fame 2025",
  },
  {
    src: "/images/homepage/tesa-in-action/elite-week-event.jpg",
    alt: "Diallo Wallace speaking at Elite Week aerospace education event",
    caption: "Elite Week Aerospace Event",
  },
  {
    src: "/images/homepage/tesa-in-action/classroom-instruction.jpg",
    alt: "TESA classroom instruction with students engaged in STEM learning",
    caption: "Hands-On STEM Instruction",
  },
];

export default function TESAInAction() {
  return (
    <AnimatedSection>
      <section
        className="py-12 sm:py-16 lg:py-20 bg-surface"
        aria-labelledby="tesa-action-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Real Impact
            </p>
            <h2
              id="tesa-action-heading"
              className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
            >
              TESA in Action
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              From Mars research missions to classroom instruction, see how TESA
              brings real-world aerospace experience to students.
            </p>
          </div>

          {/* Image Grid with Stagger Animation */}
          <StaggerList
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            staggerDelay={0.1}
          >
            {actionImages.map((image) => (
              <StaggerItem key={image.src}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Caption Overlay */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-medium text-white">
                      {image.caption}
                    </p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>
    </AnimatedSection>
  );
}
