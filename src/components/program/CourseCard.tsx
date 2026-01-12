"use client";

/**
 * CourseCard Component
 *
 * Individual course card displaying:
 * - Course name
 * - Category badge (Science, Technology, Engineering, Mathematics)
 * - Foundational indicator for Pre-Engineering and MATLAB
 * - Brief description placeholder
 *
 * Mobile-first responsive design with accessible markup.
 * Enhanced with hover animation (scale 1.02, shadow lift).
 */

import { motion, useReducedMotion } from "motion/react";
import { cardHover } from "@/lib/animations";

interface CourseCardProps {
  name: string;
  category: "Science" | "Technology" | "Engineering" | "Mathematics";
  isFoundational?: boolean;
  description?: string;
}

const categoryColors = {
  Science: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    badge: "bg-blue-100 text-blue-800",
    border: "border-blue-200",
  },
  Technology: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    badge: "bg-purple-100 text-purple-800",
    border: "border-purple-200",
  },
  Engineering: {
    bg: "bg-green-50",
    text: "text-green-700",
    badge: "bg-green-100 text-green-800",
    border: "border-green-200",
  },
  Mathematics: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    badge: "bg-orange-100 text-orange-800",
    border: "border-orange-200",
  },
};

const categoryIcons = {
  Science: (
    <svg
      className="h-4 w-4"
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
  Technology: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Engineering: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Mathematics: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
};

export default function CourseCard({
  name,
  category,
  isFoundational = false,
  description,
}: CourseCardProps) {
  const colors = categoryColors[category];
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`rounded-lg border ${colors.border} ${colors.bg} p-4 transition-all duration-200 ease-out hover:shadow-lg`}
      whileHover={shouldReduceMotion ? undefined : cardHover}
    >
      {/* Header with badges */}
      <div className="flex flex-wrap items-start gap-2 mb-2">
        {/* Category Badge */}
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${colors.badge}`}
        >
          {categoryIcons[category]}
          {category}
        </span>

        {/* Foundational Badge */}
        {isFoundational && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-accent/20 text-accent-dark border border-accent/30">
            <svg
              className="h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            Foundational
          </span>
        )}
      </div>

      {/* Course Name */}
      <h3 className={`font-heading font-semibold ${colors.text} text-sm sm:text-base`}>
        {name}
      </h3>

      {/* Description */}
      {description && (
        <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      )}
    </motion.article>
  );
}
