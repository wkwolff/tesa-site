/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import React, { forwardRef } from "react";
import SpaceExperience from "@/components/about/SpaceExperience";
import MilitaryService from "@/components/about/MilitaryService";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";
import {
  fadeInUp,
  fadeIn,
  fadeInScale,
  staggerItem,
  calculateStaggerDelay,
} from "@/lib/animations";

/**
 * Integration Tests for Animation Features
 * Task Group 9: Strategic tests for cross-component animation integration
 *
 * These 5 strategic tests focus on:
 * 1. StaggerList reduced-motion behavior
 * 2. Photo alt text accessibility for SpaceExperience
 * 3. Photo alt text accessibility for MilitaryService
 * 4. Animation variants use GPU-accelerated properties only
 * 5. Stagger delay prevents animations exceeding 1.5s total
 */

/**
 * Mock motion/react module to control useReducedMotion behavior
 */
let mockReducedMotion = false;

jest.mock("motion/react", () => ({
  motion: {
    div: forwardRef(function MockMotionDiv(
      {
        children,
        className,
        initial,
        whileInView,
        viewport,
        variants,
        whileHover,
        ...props
      }: {
        children?: React.ReactNode;
        className?: string;
        initial?: unknown;
        whileInView?: unknown;
        viewport?: unknown;
        variants?: unknown;
        whileHover?: unknown;
        [key: string]: unknown;
      },
      ref: React.Ref<HTMLDivElement>
    ) {
      return (
        <div
          ref={ref}
          className={className}
          data-testid="motion-div"
          data-initial={initial === false ? "false" : "animated"}
          data-hover={whileHover ? "true" : undefined}
          {...props}
        >
          {children}
        </div>
      );
    }),
  },
  useReducedMotion: () => mockReducedMotion,
  useInView: () => true,
}));

describe("Animation Integration Tests", () => {
  beforeEach(() => {
    mockReducedMotion = false;
  });

  it("StaggerList respects reduced-motion preference", () => {
    mockReducedMotion = true;

    render(
      <StaggerList>
        <StaggerItem>Item 1</StaggerItem>
        <StaggerItem>Item 2</StaggerItem>
      </StaggerList>
    );

    // StaggerList should have initial={false} when reduced motion is enabled
    const container = screen.getAllByTestId("motion-div")[0];
    expect(container).toHaveAttribute("data-initial", "false");

    // Items should still render correctly
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("SpaceExperience photos have descriptive alt text for accessibility", () => {
    render(<SpaceExperience />);

    // Verify ILMAH spacesuit photo alt text
    const ilmahPhoto = screen.getByAltText(
      "Diallo Wallace testing spacesuit at University of North Dakota ILMAH facility"
    );
    expect(ilmahPhoto).toBeInTheDocument();

    // Verify Hall of Fame jacket photo alt text
    const jacketPhoto = screen.getByAltText(
      "Space Camp Hall of Fame jacket and medal awarded to Diallo Wallace in 2025"
    );
    expect(jacketPhoto).toBeInTheDocument();
  });

  it("MilitaryService photo has descriptive alt text for accessibility", () => {
    render(<MilitaryService />);

    // Verify pilot cockpit photo alt text
    const cockpitPhoto = screen.getByAltText(
      "Lt. Commander Diallo Wallace in military aircraft cockpit"
    );
    expect(cockpitPhoto).toBeInTheDocument();
  });

  it("all animation variants use only GPU-accelerated properties (opacity, transform)", () => {
    // Define non-GPU properties that should NOT be animated
    const nonGpuProps = ["width", "height", "margin", "padding", "left", "top"];

    // Test all animation variants
    const variants = [
      { name: "fadeInUp", variant: fadeInUp },
      { name: "fadeIn", variant: fadeIn },
      { name: "fadeInScale", variant: fadeInScale },
      { name: "staggerItem", variant: staggerItem },
    ];

    variants.forEach(({ name, variant }) => {
      // Check hidden state
      nonGpuProps.forEach((prop) => {
        expect(variant.hidden).not.toHaveProperty(prop);
      });

      // Verify only GPU-accelerated properties (opacity, y, scale, x)
      const hiddenKeys = Object.keys(variant.hidden || {});
      hiddenKeys.forEach((key) => {
        const isGpuAccelerated = ["opacity", "y", "x", "scale"].includes(key);
        expect(isGpuAccelerated).toBe(true);
      });
    });
  });

  it("stagger delay calculation prevents animations exceeding 1.5s total", () => {
    // For small lists, default 0.1s delay should be used
    const smallListDelay = calculateStaggerDelay(5);
    expect(smallListDelay).toBe(0.1);

    // For large lists, delay should be reduced to stay under 1.5s total
    // With 20 items: (19 * 0.1) + 0.4 = 2.3s > 1.5s
    // So delay should be: (1.5 - 0.4) / 19 = ~0.058
    const largeListDelay = calculateStaggerDelay(20);
    expect(largeListDelay).toBeLessThan(0.1);
    expect(largeListDelay).toBeGreaterThanOrEqual(0.05);

    // Verify total animation time stays under 1.5s
    const baseDuration = 0.4;
    const totalTime = (19 * largeListDelay) + baseDuration;
    expect(totalTime).toBeLessThanOrEqual(1.5);
  });
});
