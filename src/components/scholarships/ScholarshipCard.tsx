"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { cardHover } from "@/lib/animations";

/**
 * ScholarshipCard Props
 */
interface ScholarshipCardProps {
  /** Name of the scholarship */
  name: string;
  /** Name of the honoree */
  honoreeName: string;
  /** Story and background of the honoree */
  story: string;
  /** Type of scholarship recipient */
  type: "Student" | "Educator";
  /** What the scholarship supports */
  supports: string;
  /** Contact subject for inquiry */
  contactSubject: string;
  /** Optional icon for visual interest (used if no image provided) */
  icon?: "star" | "graduation" | "rocket";
  /** Optional image path for the honoree */
  imageSrc?: string;
}

/**
 * ScholarshipCard Component
 *
 * Displays a scholarship card with:
 * - Scholarship name
 * - Honoree name and story
 * - Type (Student/Educator)
 * - Application/inquiry CTA
 *
 * Mobile-first design with compelling storytelling focus.
 * Includes hover animation for enhanced interactivity.
 */
export default function ScholarshipCard({
  name,
  honoreeName,
  story,
  type,
  supports,
  contactSubject,
  icon = "star",
  imageSrc,
}: ScholarshipCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const iconMap = {
    star: (
      <svg
        className="h-8 w-8 text-accent"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    graduation: (
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
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
    rocket: (
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
    ),
  };

  const typeColorClass =
    type === "Student"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-secondary/10 text-secondary border-secondary/20";

  return (
    <motion.article
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all"
      whileHover={shouldReduceMotion ? undefined : cardHover}
    >
      {/* Card Header */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 sm:p-8 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Type Badge */}
            <span
              className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${typeColorClass}`}
            >
              {type === "Student" ? "Space Camp Student" : "Space Camp Educator"}
            </span>

            {/* Scholarship Name */}
            <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-surface-dark">
              {name}
            </h3>

            {/* Honoree Name */}
            <p className="mt-2 text-base text-gray-600">
              In honor of{" "}
              <span className="font-semibold text-primary">{honoreeName}</span>
            </p>
          </div>

          {/* Honoree Photo or Icon */}
          {imageSrc ? (
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md border-2 border-white">
              <Image
                src={imageSrc}
                alt={`Photo of ${honoreeName}`}
                width={96}
                height={96}
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          ) : (
            <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm">
              {iconMap[icon]}
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Story */}
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed">{story}</p>
        </div>

        {/* Supports Info */}
        <div className="mt-6 p-4 bg-surface rounded-lg border border-gray-100">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-accent flex-shrink-0"
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
            <span className="text-sm font-medium text-surface-dark">
              {supports}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/contact?subject=${encodeURIComponent(contactSubject)}`}
          className="mt-6 inline-flex items-center justify-center min-h-touch w-full px-6 py-4 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <svg
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Inquire About This Scholarship
        </Link>
      </div>
    </motion.article>
  );
}
