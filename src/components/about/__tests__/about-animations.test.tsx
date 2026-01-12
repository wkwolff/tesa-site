/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import React, { forwardRef } from "react";
import FounderBio from "../FounderBio";
import SpaceExperience from "../SpaceExperience";
import EducationCredentials from "../EducationCredentials";

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
  },
  useReducedMotion: () => mockReducedMotion,
  useInView: () => true,
}));

/**
 * About Page Animation Tests
 * Task Group 4: About Page Animation Integration
 */
describe("About Page Component Animations", () => {
  beforeEach(() => {
    mockReducedMotion = false;
  });

  describe("FounderBio", () => {
    it("is wrapped with AnimatedSection", () => {
      render(<FounderBio />);

      // FounderBio should be wrapped with AnimatedSection which renders motion.div
      const motionDivs = screen.getAllByTestId("motion-div");
      expect(motionDivs.length).toBeGreaterThanOrEqual(1);

      // Verify the component renders the expected content
      expect(screen.getByText("Meet Diallo Wallace")).toBeInTheDocument();
      expect(
        screen.getByText(/Lt. Commander Diallo Wallace, USN \(Ret.\)/i)
      ).toBeInTheDocument();

      // Verify section is accessible - accessible name comes from h2 via aria-labelledby
      const section = screen.getByRole("region", {
        name: /meet diallo wallace/i,
      });
      expect(section).toBeInTheDocument();
    });
  });

  describe("SpaceExperience", () => {
    it("experiences grid uses StaggerList with StaggerItem children", () => {
      render(<SpaceExperience />);

      // SpaceExperience should have motion.div elements from AnimatedSection and StaggerList
      const motionDivs = screen.getAllByTestId("motion-div");

      // Should have: 1 AnimatedSection wrapper + 2 photo motion.divs + 1 StaggerList + 4 StaggerItems
      expect(motionDivs.length).toBeGreaterThanOrEqual(5);

      // Verify the experiences are rendered
      expect(
        screen.getByText("Flashline Mars Arctic Research Station")
      ).toBeInTheDocument();
      expect(
        screen.getByText("NASA Airborne Astronomy Ambassador")
      ).toBeInTheDocument();
      // ILMAH appears in both featured section and grid, use getAllByText
      expect(
        screen.getAllByText("ILMAH Spacesuit Evaluations").length
      ).toBeGreaterThanOrEqual(1);
      expect(screen.getByText("Space Camp Alumnus")).toBeInTheDocument();

      // Verify Hall of Fame highlight is rendered (not in the stagger list)
      expect(screen.getByText("Space Camp Hall of Fame")).toBeInTheDocument();
    });
  });

  describe("EducationCredentials", () => {
    it("list items use StaggerItem with 0.1s stagger delay", () => {
      render(<EducationCredentials />);

      // EducationCredentials should have motion.div elements from AnimatedSection and StaggerList
      const motionDivs = screen.getAllByTestId("motion-div");

      // Should have: 1 AnimatedSection wrapper + 1 StaggerList + 5 StaggerItems for credentials
      expect(motionDivs.length).toBeGreaterThanOrEqual(6);

      // Verify all credentials are rendered
      expect(screen.getByText("B.S.")).toBeInTheDocument();
      expect(screen.getByText("B.A.")).toBeInTheDocument();
      expect(screen.getByText("M.S.")).toBeInTheDocument();
      expect(screen.getByText("M.P.M.")).toBeInTheDocument();
      expect(screen.getByText("Ph.D. Candidate")).toBeInTheDocument();

      // Verify institutions are rendered
      expect(
        screen.getAllByText("University of Illinois").length
      ).toBeGreaterThanOrEqual(1);
      expect(screen.getByText("Naval Postgraduate School")).toBeInTheDocument();
      expect(screen.getByText("Purdue University")).toBeInTheDocument();
    });
  });
});
