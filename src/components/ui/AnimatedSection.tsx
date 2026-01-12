"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { fadeInUp, defaultViewport } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Delay before animation starts in seconds */
  delay?: number;
}

/**
 * Wrapper component for scroll-triggered fade-in animations
 * Automatically disables animation when user prefers reduced motion
 *
 * @example
 * <AnimatedSection className="py-12">
 *   <h2>Section Title</h2>
 *   <p>Section content</p>
 * </AnimatedSection>
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
