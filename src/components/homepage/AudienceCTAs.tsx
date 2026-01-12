"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";
import { cardHover } from "@/lib/animations";

/**
 * AudienceCTAs Component
 *
 * Three distinct call-to-action cards for different audiences:
 * - Funders (legislators, foundations) -> /partnerships
 * - Parents -> /program
 * - Students -> /contact
 *
 * Mobile-first design: single column on mobile, three columns on desktop.
 * Includes scroll-triggered stagger animations and hover effects.
 */
export default function AudienceCTAs() {
  const shouldReduceMotion = useReducedMotion();

  const audiences = [
    {
      id: "funders",
      title: "For Funders & Partners",
      description:
        "Legislators, foundations, and organizations interested in supporting aerospace education for underserved communities.",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
          />
        </svg>
      ),
      cta: "Explore Partnership Opportunities",
      href: "/partnerships",
      color: "primary",
    },
    {
      id: "parents",
      title: "For Parents & Guardians",
      description:
        "Discover how TESA prepares your child for success in STEM majors with credit-bearing courses and industry certifications.",
      icon: (
        <svg
          className="h-8 w-8"
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
      ),
      cta: "View Our Program",
      href: "/program",
      color: "secondary",
    },
    {
      id: "students",
      title: "For Students",
      description:
        "Ready to launch your aerospace career? Join TESA to gain real-world skills, certifications, and mentorship.",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      ),
      cta: "Apply Now",
      href: "/contact",
      color: "accent",
    },
  ];

  const colorStyles = {
    primary: {
      icon: "bg-primary/10 text-primary",
      button: "bg-primary hover:bg-primary-800 text-white",
      border: "border-primary/20 hover:border-primary/40",
    },
    secondary: {
      icon: "bg-secondary/10 text-secondary",
      button: "bg-secondary hover:bg-secondary-dark text-white",
      border: "border-secondary/20 hover:border-secondary/40",
    },
    accent: {
      icon: "bg-accent/10 text-accent-dark",
      button: "bg-accent hover:bg-accent-dark text-white",
      border: "border-accent/20 hover:border-accent/40",
    },
  };

  return (
    <AnimatedSection>
      <section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        aria-labelledby="audience-ctas-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2
              id="audience-ctas-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-surface-dark"
            >
              How Can We Help You?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a funder, parent, or student, TESA has a path
              for you.
            </p>
          </div>

          {/* Audience cards grid with stagger animation */}
          <StaggerList className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {audiences.map((audience) => {
              const styles = colorStyles[audience.color as keyof typeof colorStyles];
              return (
                <StaggerItem key={audience.id}>
                  <motion.article
                    className={`flex flex-col p-6 sm:p-8 bg-white rounded-xl shadow-sm border-2 ${styles.border} transition-all hover:shadow-lg`}
                    whileHover={shouldReduceMotion ? undefined : cardHover}
                  >
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center h-14 w-14 rounded-xl ${styles.icon} mb-5`}
                    >
                      {audience.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-semibold text-surface-dark mb-3">
                      {audience.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 flex-grow">
                      {audience.description}
                    </p>

                    {/* CTA Button - full width on mobile */}
                    <Link
                      href={audience.href}
                      className={`inline-flex items-center justify-center min-h-touch w-full px-6 py-3 text-base font-semibold rounded-lg transition-colors focus-visible-ring ${styles.button}`}
                    >
                      {audience.cta}
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
                  </motion.article>
                </StaggerItem>
              );
            })}
          </StaggerList>
        </div>
      </section>
    </AnimatedSection>
  );
}
