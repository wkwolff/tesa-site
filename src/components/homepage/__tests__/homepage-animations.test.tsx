/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import React, { forwardRef } from "react";
import TrustSignals from "../TrustSignals";
import AudienceCTAs from "../AudienceCTAs";
import PartnerLogos from "../PartnerLogos";

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
        ...props
      }: {
        children?: React.ReactNode;
        className?: string;
        whileHover?: unknown;
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
 * Homepage Animation Tests
 * Task Group 3: Homepage Animation Integration
 */
describe("Homepage Component Animations", () => {
  beforeEach(() => {
    mockReducedMotion = false;
  });

  describe("TrustSignals", () => {
    it("renders AnimatedCounter components for statistics", () => {
      render(<TrustSignals />);

      // TrustSignals should render AnimatedCounter components
      // which use motion.span internally
      const motionSpans = screen.getAllByTestId("motion-span");
      expect(motionSpans.length).toBeGreaterThanOrEqual(1);

      // Verify the component renders the expected content
      expect(screen.getByText(/Space Camp Hall of Fame/i)).toBeInTheDocument();
      expect(screen.getByText(/Naval Academy/i)).toBeInTheDocument();
    });
  });

  describe("AudienceCTAs", () => {
    it("cards have hover animation classes and motion article elements", () => {
      render(<AudienceCTAs />);

      // AudienceCTAs should have motion articles with hover effects
      const motionArticles = screen.getAllByTestId("motion-article");
      expect(motionArticles.length).toBe(3);

      // Each card should have hover animation enabled
      motionArticles.forEach((article) => {
        expect(article).toHaveAttribute("data-hover", "true");
      });

      // Verify hover classes are present on cards
      motionArticles.forEach((article) => {
        expect(article).toHaveClass("transition-all");
      });
    });
  });

  describe("PartnerLogos", () => {
    it("renders with stagger animation wrapper using StaggerList", () => {
      render(<PartnerLogos />);

      // PartnerLogos should use StaggerList which renders motion.div containers
      const motionDivs = screen.getAllByTestId("motion-div");
      expect(motionDivs.length).toBeGreaterThanOrEqual(1);

      // Verify all 4 partners are rendered (using getAllByText since names appear twice)
      expect(screen.getAllByText("MathWorks").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("Ansys").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("Our Shades of Blue").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("SpaceKind").length).toBeGreaterThanOrEqual(1);

      // Verify we have 6 motion divs total: 1 outer AnimatedSection + 1 StaggerList + 4 StaggerItems
      expect(motionDivs.length).toBe(6);
    });
  });
});
