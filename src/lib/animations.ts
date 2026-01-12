import type { Variants, TargetAndTransition } from "motion/react";

/**
 * Animation variants for TESA website
 * All variants use GPU-accelerated properties only: transform, opacity
 * Respects prefers-reduced-motion through component-level useReducedMotion hook
 */

/**
 * Fade in from below with upward movement
 * Used for section reveals and content appearance
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * Simple fade in without movement
 * Used for subtle content reveals
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Fade in with subtle scale up
 * Used for images and cards that need emphasis
 */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Container variant for staggered children
 * Delays children animation by 0.1s between each
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

/**
 * Child item variant for staggered lists
 * Used with staggerContainer parent
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/**
 * Card hover effect with scale and shadow
 * Applied via whileHover prop on motion elements
 * Note: Shadow changes handled via CSS classes
 */
export const cardHover: TargetAndTransition = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: "easeOut" as const,
  },
};

/**
 * Default viewport configuration for scroll-triggered animations
 * Triggers when element is 100px into viewport
 * Only animates once (no repeat on scroll)
 */
export const defaultViewport = {
  once: true,
  margin: "-100px",
};

/**
 * Animation duration constants for consistency
 */
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  counter: 2,
} as const;

/**
 * Calculate maximum stagger delay to prevent animations exceeding 1.5s total
 * @param itemCount - Number of items being staggered
 * @param baseDuration - Duration of each item's animation
 * @returns Adjusted stagger delay in seconds
 */
export function calculateStaggerDelay(
  itemCount: number,
  baseDuration: number = 0.4
): number {
  const maxTotalDuration = 1.5;
  const baseDelay = 0.1;

  // Calculate if default delay would exceed max duration
  const totalWithBaseDelay = (itemCount - 1) * baseDelay + baseDuration;

  if (totalWithBaseDelay <= maxTotalDuration) {
    return baseDelay;
  }

  // Calculate adjusted delay to fit within max duration
  return Math.max(0.05, (maxTotalDuration - baseDuration) / (itemCount - 1));
}
