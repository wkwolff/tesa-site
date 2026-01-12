"use client";

/**
 * Program in Action Component
 *
 * Showcases real classroom and teaching photos:
 * - Student project work
 * - Hands-on learning activities
 * - Collaborative classroom environment
 *
 * Mobile-first responsive design with optimized images.
 */

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";

interface ClassroomImage {
  src: string;
  alt: string;
  caption: string;
}

const classroomImages: ClassroomImage[] = [
  {
    src: "/images/program/classroom/student-project-work.jpg",
    alt: "Student working on aerospace engineering project",
    caption: "Hands-On Project Work",
  },
  {
    src: "/images/program/classroom/hands-on-learning.jpg",
    alt: "Students engaged in hands-on STEM learning activities",
    caption: "Interactive STEM Learning",
  },
  {
    src: "/images/program/classroom/classroom-collaboration.jpg",
    alt: "Students collaborating on engineering challenges",
    caption: "Collaborative Problem Solving",
  },
];

export default function ProgramInAction() {
  return (
    <AnimatedSection>
      <section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        aria-labelledby="program-action-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              See It In Action
            </p>
            <h2
              id="program-action-heading"
              className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-dark"
            >
              The TESA Experience
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              Real moments from our classrooms showing students engaged in
              hands-on aerospace and engineering education.
            </p>
          </div>

          {/* Image Grid */}
          <StaggerList
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.15}
          >
            {classroomImages.map((image) => (
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

          {/* Supporting Text */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our project-based learning approach ensures students don&apos;t
              just learn theory—they apply it through real engineering
              challenges and hands-on experimentation.
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
