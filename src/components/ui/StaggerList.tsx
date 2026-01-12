"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode, Children } from "react";
import {
  staggerContainer,
  staggerItem,
  defaultViewport,
  calculateStaggerDelay,
} from "@/lib/animations";

interface StaggerListProps {
  children: ReactNode;
  className?: string;
  /** Custom stagger delay between items in seconds (default: 0.1s) */
  staggerDelay?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container component for staggered list animations
 * Children appear sequentially with configurable delay
 * Automatically adjusts delay to ensure total animation < 1.5s
 *
 * @example
 * <StaggerList className="grid grid-cols-3 gap-4">
 *   <StaggerItem>Card 1</StaggerItem>
 *   <StaggerItem>Card 2</StaggerItem>
 *   <StaggerItem>Card 3</StaggerItem>
 * </StaggerList>
 */
export function StaggerList({
  children,
  className,
  staggerDelay,
}: StaggerListProps) {
  const shouldReduceMotion = useReducedMotion();
  const childCount = Children.count(children);

  // Calculate appropriate stagger delay to stay under 1.5s total
  const effectiveDelay = staggerDelay ?? calculateStaggerDelay(childCount);

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: staggerContainer.hidden,
        visible: {
          ...staggerContainer.visible,
          transition: {
            staggerChildren: effectiveDelay,
            delayChildren: 0,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child component for items within a StaggerList
 * Must be used as direct child of StaggerList for animation to work
 *
 * @example
 * <StaggerItem className="p-4 bg-white rounded">
 *   Item content
 * </StaggerItem>
 */
export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
