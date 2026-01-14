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
 * Clicking any image opens a fullscreen gallery with all TESA photos.
 */

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { galleryImages } from "@/data/gallery-images";

// Featured images shown in the grid (first 4 from gallery)
const featuredImages = galleryImages.slice(0, 4);

export default function TESAInAction() {
  const [galleryState, setGalleryState] = useState<{
    isOpen: boolean;
    startIndex: number;
  } | null>(null);

  const openGallery = (index: number) => {
    setGalleryState({ isOpen: true, startIndex: index });
  };

  const closeGallery = () => {
    setGalleryState(null);
  };
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
            {featuredImages.map((image, index) => (
              <StaggerItem key={image.id}>
                <button
                  onClick={() => openGallery(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`View ${image.caption} - opens gallery`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Caption Overlay */}
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                    <span className="block text-xs sm:text-sm font-medium text-white text-left">
                      {image.caption}
                    </span>
                  </span>
                  {/* View gallery indicator */}
                  <span className="absolute top-2 right-2 p-1.5 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </span>
                </button>
              </StaggerItem>
            ))}
          </StaggerList>

          {/* Hint text */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Click any image to view the full gallery
          </p>
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      <ImageGallery
        isOpen={galleryState?.isOpen ?? false}
        startIndex={galleryState?.startIndex ?? 0}
        images={galleryImages}
        onClose={closeGallery}
      />
    </AnimatedSection>
  );
}
