/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import React, { forwardRef } from "react";
import { AnimatedSection } from "../AnimatedSection";
import { AnimatedCounter } from "../AnimatedCounter";
import { StaggerList, StaggerItem } from "../StaggerList";

/**
 * Mock motion/react module to control useReducedMotion behavior
 * and provide predictable test conditions
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
        ...props
      }: {
        children?: React.ReactNode;
        className?: string;
        initial?: unknown;
        whileInView?: unknown;
        viewport?: unknown;
        variants?: unknown;
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
          {...props}
        >
          {children}
        </div>
      );
    }),
    span: forwardRef(function MockMotionSpan(
      {
        children,
        className,
        ...props
      }: {
        children?: React.ReactNode;
        className?: string;
        [key: string]: unknown;
      },
      ref: React.Ref<HTMLSpanElement>
    ) {
      return (
        <span ref={ref} className={className} data-testid="motion-span" {...props}>
          {children}
        </span>
      );
    }),
  },
  useReducedMotion: () => mockReducedMotion,
  useInView: () => true,
}));

describe("AnimatedSection", () => {
  beforeEach(() => {
    mockReducedMotion = false;
  });

  it("renders children correctly", () => {
    render(
      <AnimatedSection>
        <p>Test content</p>
      </AnimatedSection>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("respects useReducedMotion and returns static content", () => {
    mockReducedMotion = true;

    render(
      <AnimatedSection>
        <p>Static content</p>
      </AnimatedSection>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toHaveAttribute("data-initial", "false");
    expect(screen.getByText("Static content")).toBeInTheDocument();
  });
});

describe("AnimatedCounter", () => {
  beforeEach(() => {
    mockReducedMotion = false;
  });

  it("displays final value when reduced motion is enabled", () => {
    mockReducedMotion = true;

    render(<AnimatedCounter value={1000} suffix="+" />);

    expect(screen.getByText("1,000+")).toBeInTheDocument();
  });
});

describe("StaggerList", () => {
  beforeEach(() => {
    mockReducedMotion = false;
  });

  it("renders children with correct structure", () => {
    render(
      <StaggerList>
        <StaggerItem>Item 1</StaggerItem>
        <StaggerItem>Item 2</StaggerItem>
        <StaggerItem>Item 3</StaggerItem>
      </StaggerList>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();

    const motionDivs = screen.getAllByTestId("motion-div");
    expect(motionDivs.length).toBeGreaterThanOrEqual(1);
  });
});
