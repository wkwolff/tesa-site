"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ANIMATION_DURATION } from "@/lib/animations";

interface AnimatedCounterProps {
  /** The target value to count up to */
  value: number;
  /** Animation duration in seconds (default: 2s) */
  duration?: number;
  /** Text to display after the number (e.g., "+", "%") */
  suffix?: string;
  /** Text to display before the number (e.g., "$") */
  prefix?: string;
  /** CSS class for styling */
  className?: string;
}

/**
 * Formats a number with locale-specific separators
 * e.g., 1000 -> "1,000"
 */
function formatNumber(num: number): string {
  return Math.round(num).toLocaleString("en-US");
}

/**
 * Easing function for deceleration effect
 * Creates smooth slow-down as counter approaches target
 */
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

/**
 * Animated counter that counts up from 0 to target value
 * Triggers on scroll into view and only animates once
 * Returns final value immediately when reduced motion is enabled
 *
 * @example
 * <AnimatedCounter value={1000} suffix="+" />
 * // Renders: "1,000+"
 *
 * @example
 * <AnimatedCounter value={95} suffix="%" prefix="" />
 * // Renders: "95%"
 */
export function AnimatedCounter({
  value,
  duration = ANIMATION_DURATION.counter,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Skip animation if reduced motion is preferred
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    // Only animate once when coming into view
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    const startTime = performance.now();
    const durationMs = duration * 1000;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = easedProgress * value;

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, hasAnimated, value, duration, shouldReduceMotion]);

  // Show final value immediately for reduced motion
  const displayText = shouldReduceMotion
    ? `${prefix}${formatNumber(value)}${suffix}`
    : `${prefix}${formatNumber(displayValue)}${suffix}`;

  return (
    <motion.span ref={ref} className={className}>
      {displayText}
    </motion.span>
  );
}
