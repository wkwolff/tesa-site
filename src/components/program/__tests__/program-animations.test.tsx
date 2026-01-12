/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import React, { forwardRef } from "react";
import CourseCatalog from "../CourseCatalog";
import CourseCard from "../CourseCard";
import Certifications from "../Certifications";

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
    article: forwardRef(function MockMotionArticle(
      {
        children,
        className,
        whileHover,
        variants,
        ...props
      }: {
        children?: React.ReactNode;
        className?: string;
        whileHover?: unknown;
        variants?: unknown;
        [key: string]: unknown;
      },
      ref: React.Ref<HTMLElement>
    ) {
      return (
        <article
          ref={ref}
          className={className}
          data-testid="motion-article"
          data-hover={whileHover ? "true" : undefined}
          {...props}
        >
          {children}
        </article>
      );
    }),
  },
  useReducedMotion: () => mockReducedMotion,
  useInView: () => true,
}));

/**
 * Program Page Animation Tests
 * Task Group 5: Program Page Animation Integration
 */
describe("Program Page Component Animations", () => {
  beforeEach(() => {
    mockReducedMotion = false;
  });

  describe("CourseCatalog", () => {
    it("grid uses StaggerList for course cards animation", () => {
      render(<CourseCatalog />);

      // CourseCatalog should use StaggerList which renders motion.div containers
      const motionDivs = screen.getAllByTestId("motion-div");
      // At minimum: 1 AnimatedSection + 1 StaggerList + multiple StaggerItems for cards
      expect(motionDivs.length).toBeGreaterThanOrEqual(3);

      // Verify the component renders courses
      expect(screen.getByText(/Course Catalog/i)).toBeInTheDocument();
      expect(screen.getByRole("tablist")).toBeInTheDocument();
    });
  });

  describe("CourseCard", () => {
    it("has hover animation styles for card interaction", () => {
      render(
        <CourseCard
          name="Physics I"
          category="Science"
          description="Classical mechanics"
        />
      );

      // CourseCard should be a motion.article with hover effect
      const motionArticle = screen.getByTestId("motion-article");
      expect(motionArticle).toHaveAttribute("data-hover", "true");

      // Verify transition classes are present
      expect(motionArticle).toHaveClass("transition-all");

      // Verify content renders correctly
      expect(screen.getByText("Physics I")).toBeInTheDocument();
      expect(screen.getByText("Science")).toBeInTheDocument();
    });
  });

  describe("Certifications", () => {
    it("badges use StaggerItem for reveal animation", () => {
      render(<Certifications />);

      // Certifications should wrap with AnimatedSection and use StaggerList
      const motionDivs = screen.getAllByTestId("motion-div");
      // At minimum: 1 AnimatedSection + 1 StaggerList + 3 StaggerItems for badges
      expect(motionDivs.length).toBeGreaterThanOrEqual(5);

      // Verify all 3 certifications are rendered
      expect(screen.getByText("MATLAB Certification")).toBeInTheDocument();
      expect(screen.getByText(/Satellite Toolkit/i)).toBeInTheDocument();
      expect(screen.getByText("CAPM Certification")).toBeInTheDocument();
    });
  });
});
