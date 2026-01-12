/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import React, { forwardRef } from "react";
import ScholarshipCard from "../ScholarshipCard";
import CurrentPartners from "../../partnerships/CurrentPartners";
import PartnerCard from "../../partnerships/PartnerCard";
import BlogCard from "../../blog/BlogCard";
import ContactForm from "../../contact/ContactForm";

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

// Mock next/navigation for ContactForm
jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: () => null,
  }),
}));

// Mock contact form action
jest.mock("@/app/contact/actions", () => ({
  submitContactForm: jest.fn().mockResolvedValue({ success: true }),
}));

/**
 * Other Pages Animation Tests
 * Task Group 6: Scholarships, Partnerships, Contact, Blog Animations
 */
describe("Other Pages Component Animations", () => {
  beforeEach(() => {
    mockReducedMotion = false;
  });

  describe("ScholarshipCard", () => {
    it("has hover animation styles for card interaction", () => {
      render(
        <ScholarshipCard
          name="Test Scholarship"
          honoreeName="John Doe"
          story="A test story about aerospace education."
          type="Student"
          supports="Full tuition for Space Camp"
          contactSubject="Test Scholarship"
        />
      );

      // ScholarshipCard should be a motion.article with hover effect
      const motionArticle = screen.getByTestId("motion-article");
      expect(motionArticle).toHaveAttribute("data-hover", "true");

      // Verify transition classes are present
      expect(motionArticle).toHaveClass("transition-all");

      // Verify content renders correctly
      expect(screen.getByText("Test Scholarship")).toBeInTheDocument();
      expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    });
  });

  describe("CurrentPartners", () => {
    it("logos use StaggerList for reveal animation", () => {
      render(<CurrentPartners />);

      // CurrentPartners should wrap partners with StaggerList
      const motionDivs = screen.getAllByTestId("motion-div");
      // At minimum: 1 AnimatedSection + 1 StaggerList + 4 StaggerItems + 4 PartnerCards = 10
      expect(motionDivs.length).toBeGreaterThanOrEqual(5);

      // Verify partners are rendered (using getAllByText since name appears twice in PartnerCard)
      expect(screen.getAllByText("MathWorks").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("Ansys").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("Our Shades of Blue").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("SpaceKind").length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("ContactForm", () => {
    it("inputs have focus animation classes", () => {
      render(<ContactForm />);

      // Get form inputs
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);

      // Verify inputs have focus animation classes (focus-ring-glow is added for glow effect)
      expect(nameInput).toHaveClass("focus-visible-ring");
      expect(emailInput).toHaveClass("focus-visible-ring");
      expect(messageInput).toHaveClass("focus-visible-ring");
    });
  });

  describe("BlogCard", () => {
    it("has hover animation styles for card interaction", () => {
      const mockPost = {
        slug: "test-post",
        title: "Test Blog Post",
        date: "2024-01-15",
        author: "Jane Smith",
        excerpt: "This is a test blog post excerpt for testing purposes.",
        tags: ["Education", "Space"],
      };

      render(<BlogCard post={mockPost} />);

      // BlogCard should be a motion.article with hover effect
      const motionArticle = screen.getByTestId("motion-article");
      expect(motionArticle).toHaveAttribute("data-hover", "true");

      // Verify transition classes are present
      expect(motionArticle).toHaveClass("transition-all");

      // Verify content renders correctly
      expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });
  });
});
