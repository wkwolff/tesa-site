"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  cardHover,
  defaultViewport,
} from "@/lib/animations";

/**
 * ProgramPathwayPreview Component
 *
 * Visual progression through high school STEM pathway.
 * Mobile-first design: vertical timeline on mobile, horizontal on desktop.
 * Features enhanced card styling, distinct STEM category colors, and stagger animations.
 */

// Pathway stage colors - gradient pairs for visual progression
// NOTE: Stages are category-based, NOT grade-level tied. Students progress at their own pace.
const pathwayColors = {
  foundation: {
    bg: "bg-primary",
    gradient: "from-primary to-primary-700",
    light: "bg-primary-50",
  },
  exploration: {
    bg: "bg-secondary",
    gradient: "from-secondary to-secondary-dark",
    light: "bg-secondary/10",
  },
  specialization: {
    bg: "bg-primary-700",
    gradient: "from-primary-700 to-primary-800",
    light: "bg-primary-100",
  },
  certification: {
    bg: "bg-accent",
    gradient: "from-accent to-accent-dark",
    light: "bg-accent/10",
  },
};

// STEM category colors - matching CourseCard for consistency
const categoryColors = {
  Science: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    icon: "bg-blue-100",
    hoverBorder: "hover:border-blue-300",
  },
  Technology: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
    icon: "bg-purple-100",
    hoverBorder: "hover:border-purple-300",
  },
  Engineering: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    icon: "bg-green-100",
    hoverBorder: "hover:border-green-300",
  },
  Mathematics: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    icon: "bg-orange-100",
    hoverBorder: "hover:border-orange-300",
  },
};

// Category icons matching CourseCard
const categoryIcons = {
  Science: (
    <svg
      className="h-5 w-5"
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
      className="h-5 w-5"
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
      className="h-5 w-5"
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
      className="h-5 w-5"
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

export default function ProgramPathwayPreview() {
  const shouldReduceMotion = useReducedMotion();

  // Pathway stages are category-based, NOT tied to specific grade levels
  // Students can enter at any point and progress through stages at their own pace
  const stages = [
    {
      stage: "foundation" as const,
      title: "Foundation",
      focus: "Pre-Engineering & MATLAB",
      description: "Core concepts and computational skills",
    },
    {
      stage: "exploration" as const,
      title: "Exploration",
      focus: "Physics & Technical Writing",
      description: "Building on fundamentals",
    },
    {
      stage: "specialization" as const,
      title: "Specialization",
      focus: "Aerospace & Engineering",
      description: "Advanced aerospace disciplines",
    },
    {
      stage: "certification" as const,
      title: "Certification",
      focus: "Industry Credentials",
      description: "Professional certifications",
    },
  ];

  const stemCategories = [
    { category: "Science" as const, count: 7, icon: "S" },
    { category: "Technology" as const, count: 3, icon: "T" },
    { category: "Engineering" as const, count: 11, icon: "E" },
    { category: "Mathematics" as const, count: 6, icon: "M" },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-surface to-white"
      aria-labelledby="pathway-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerItem}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Your Journey
          </p>
          <h2
            id="pathway-heading"
            className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-surface-dark"
          >
            High School STEM Pathway
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A flexible, category-based progression from foundational STEM concepts to
            industry-recognized certifications. Enter at any stage and advance at your own pace.
          </p>
        </motion.div>

        {/* Pathway visualization - vertical on mobile, horizontal on larger screens */}
        <div className="relative">
          {/* Mobile layout (vertical timeline) */}
          <div className="md:hidden">
            <motion.div
              className="relative pl-10"
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              {/* Vertical timeline line */}
              <div
                className="absolute left-[15px] top-4 bottom-4 w-1.5 bg-gradient-to-b from-primary via-secondary via-primary-700 to-accent rounded-full"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {stages.map((item, index) => {
                  const colors = pathwayColors[item.stage];
                  return (
                    <motion.div
                      key={item.stage}
                      className="relative"
                      variants={staggerItem}
                    >
                      {/* Timeline node */}
                      <div
                        className={`absolute -left-10 top-4 h-8 w-8 rounded-full ${colors.bg} border-4 border-white shadow-md flex items-center justify-center`}
                        aria-hidden="true"
                      >
                        <span className="text-white text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>

                      {/* Content card */}
                      <motion.div
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-primary/20"
                        whileHover={shouldReduceMotion ? undefined : cardHover}
                      >
                        {/* Top accent bar */}
                        <div
                          className={`h-1 bg-gradient-to-r ${colors.gradient}`}
                          aria-hidden="true"
                        />
                        <div className="p-5">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-semibold text-white ${colors.bg} rounded-full mb-2`}
                          >
                            Stage {index + 1}
                          </span>
                          <h3 className="font-heading text-lg font-semibold text-surface-dark">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {item.focus}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Desktop layout (horizontal flow) */}
          <div className="hidden md:block">
            {/* Connecting line - enhanced */}
            <div
              className="absolute top-[28px] left-[10%] right-[10%] h-1.5 bg-gradient-to-r from-primary via-secondary via-primary-700 to-accent rounded-full shadow-sm"
              aria-hidden="true"
            />

            <motion.div
              className="grid grid-cols-4 gap-4 lg:gap-6 relative"
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              {stages.map((item, index) => {
                const colors = pathwayColors[item.stage];
                return (
                  <motion.div
                    key={item.stage}
                    className="relative"
                    variants={staggerItem}
                  >
                    {/* Timeline node - enhanced */}
                    <div className="flex justify-center mb-4">
                      <div
                        className={`h-10 w-10 lg:h-12 lg:w-12 rounded-full ${colors.bg} border-4 border-white shadow-lg flex items-center justify-center`}
                        aria-hidden="true"
                      >
                        <span className="text-white text-sm lg:text-base font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content card - enhanced */}
                    <motion.div
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20"
                      whileHover={shouldReduceMotion ? undefined : cardHover}
                    >
                      {/* Top accent bar */}
                      <div
                        className={`h-1 bg-gradient-to-r ${colors.gradient}`}
                        aria-hidden="true"
                      />
                      <div className="p-5">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold text-white ${colors.bg} rounded-full mb-3`}
                        >
                          Stage {index + 1}
                        </span>
                        <h3 className="font-heading text-lg font-semibold text-surface-dark">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          {item.focus}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* STEM Categories summary - enhanced with distinct colors, centered under pathway cards */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {stemCategories.map((stem) => {
            const colors = categoryColors[stem.category];
            return (
              <motion.div
                key={stem.category}
                className="flex justify-center"
                variants={staggerItem}
              >
                <div
                  className={`p-5 ${colors.bg} rounded-xl border-2 ${colors.border} ${colors.hoverBorder} shadow-sm transition-all duration-200 hover:shadow-lg text-center w-[85%]`}
                >
                {/* Icon container - enhanced */}
                <div
                  className={`h-12 w-12 mx-auto mb-3 rounded-xl ${colors.icon} flex items-center justify-center ${colors.text}`}
                  aria-hidden="true"
                >
                  {categoryIcons[stem.category]}
                </div>
                  <p className={`font-semibold ${colors.text}`}>
                    {stem.category}
                  </p>
                  <p className="text-sm text-gray-600">{stem.count} courses</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerItem}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
