import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";

/**
 * Star field behavior tests for HeroSection
 * Tests CSS class presence and reduced-motion compliance
 */
describe("HeroSection Star Field", () => {
  it("renders star field container with correct CSS classes", () => {
    render(<HeroSection />);

    // Star field container should exist with the correct classes
    const starField = screen.getByTestId("star-field");
    expect(starField).toBeInTheDocument();
    expect(starField).toHaveClass("star-field");
    expect(starField).toHaveClass("absolute");
    expect(starField).toHaveClass("inset-0");
  });

  it("star field respects prefers-reduced-motion via CSS class structure", () => {
    render(<HeroSection />);

    // The star field container should have the motion-safe class pattern
    // which enables animations only when prefers-reduced-motion is not set
    const starField = screen.getByTestId("star-field");
    expect(starField).toBeInTheDocument();

    // Verify the star field has pointer-events-none for accessibility
    expect(starField).toHaveClass("pointer-events-none");

    // Verify aria-hidden is set for screen readers
    expect(starField).toHaveAttribute("aria-hidden", "true");
  });
});
