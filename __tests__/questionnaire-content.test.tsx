import { render, screen } from "@testing-library/react";

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Import components after mocking
import Testimonials from "@/components/homepage/Testimonials";
import OurApproach from "@/components/program/OurApproach";
import GraduateProfile from "@/components/program/GraduateProfile";

/**
 * Task Group 15: Questionnaire Content Alignment Tests
 *
 * Tests for new sections added based on TESA Questionnaire requirements:
 * - Testimonials (Homepage)
 * - Our Approach / 4-Step Learning Process (Program)
 * - Graduate Profile (Program)
 */

describe("Questionnaire Content Alignment", () => {
  describe("Testimonials Component (Homepage)", () => {
    it("renders placeholder testimonial cards", () => {
      render(<Testimonials />);
      // Should render 3 placeholder cards
      const testimonialCards = screen.getAllByRole("article");
      expect(testimonialCards.length).toBeGreaterThanOrEqual(3);
    });

    it("displays obvious placeholder text for student testimonials", () => {
      render(<Testimonials />);
      // Should have obvious placeholder text patterns
      const placeholderNames = screen.getAllByText(/\[Student Name\]|\[Parent Name\]/i);
      expect(placeholderNames.length).toBeGreaterThanOrEqual(1);
    });

    it("displays placeholder quote text", () => {
      render(<Testimonials />);
      // Should have placeholder quote text
      const placeholderQuotes = screen.getAllByText(/coming soon|experiences here/i);
      expect(placeholderQuotes.length).toBeGreaterThanOrEqual(1);
    });

    it("includes school and grade placeholders", () => {
      render(<Testimonials />);
      // Should have school/grade placeholders - using more flexible matching
      const schoolPlaceholders = screen.getAllByText(/\[School,?\s*Grade/i);
      expect(schoolPlaceholders.length).toBeGreaterThanOrEqual(1);
    });

    it("has a section heading for testimonials", () => {
      render(<Testimonials />);
      const heading = screen.getByRole("heading", {
        name: /testimonials|student.*experiences|what.*students.*say/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it("uses proper semantic structure", () => {
      render(<Testimonials />);
      const section = document.querySelector("section");
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute("aria-labelledby");
    });
  });

  describe("OurApproach Component (Program Page)", () => {
    it("displays 4-step learning process", () => {
      render(<OurApproach />);
      // Should show all 4 steps - use getAllByText since they appear in mobile and desktop views
      const mathAnalysis = screen.getAllByText(/Mathematical Analysis/i);
      expect(mathAnalysis.length).toBeGreaterThanOrEqual(1);
      const computerProgramming = screen.getAllByText(/Computer Programming/i);
      expect(computerProgramming.length).toBeGreaterThanOrEqual(1);
      const modeling = screen.getAllByText(/Modeling.*Simulation/i);
      expect(modeling.length).toBeGreaterThanOrEqual(1);
      const physical = screen.getAllByText(/Physical Construction/i);
      expect(physical.length).toBeGreaterThanOrEqual(1);
    });

    it("shows step descriptions", () => {
      render(<OurApproach />);
      // Step descriptions from spec - use getAllByText since they appear in mobile and desktop views
      const solveProblems = screen.getAllByText(/solve problems analytically by hand/i);
      expect(solveProblems.length).toBeGreaterThanOrEqual(1);
      const buildPrograms = screen.getAllByText(/build programs to verify/i);
      expect(buildPrograms.length).toBeGreaterThanOrEqual(1);
      const developModels = screen.getAllByText(/develop.*simulated models|validate/i);
      expect(developModels.length).toBeGreaterThanOrEqual(1);
      const buildSystems = screen.getAllByText(/build and test real systems/i);
      expect(buildSystems.length).toBeGreaterThanOrEqual(1);
    });

    it("explains flipped classroom model", () => {
      render(<OurApproach />);
      const flippedClassroom = screen.getByText(/flipped classroom/i);
      expect(flippedClassroom).toBeInTheDocument();
    });

    it("describes dynamic notes with LiveScripts", () => {
      render(<OurApproach />);
      // Dynamic Notes appears as a heading
      const dynamicNotesHeading = screen.getByRole("heading", { name: /dynamic notes/i });
      expect(dynamicNotesHeading).toBeInTheDocument();
      // MATLAB LiveScripts in text
      const liveScripts = screen.getByText(/MATLAB LiveScripts/i);
      expect(liveScripts).toBeInTheDocument();
    });

    it("describes computational foundation", () => {
      render(<OurApproach />);
      // Computational Foundation is a heading
      const computationalHeading = screen.getByRole("heading", { name: /computational foundation/i });
      expect(computationalHeading).toBeInTheDocument();
    });

    it("has visual step indicators", () => {
      render(<OurApproach />);
      // Steps should have numbered indicators (1, 2, 3, 4) - multiple views
      const ones = screen.getAllByText("1");
      expect(ones.length).toBeGreaterThanOrEqual(1);
      const twos = screen.getAllByText("2");
      expect(twos.length).toBeGreaterThanOrEqual(1);
      const threes = screen.getAllByText("3");
      expect(threes.length).toBeGreaterThanOrEqual(1);
      const fours = screen.getAllByText("4");
      expect(fours.length).toBeGreaterThanOrEqual(1);
    });

    it("has a section heading", () => {
      render(<OurApproach />);
      // Use getAllByRole since multiple headings match, then verify at least one
      const headings = screen.getAllByRole("heading", {
        name: /our approach|4-step learning process/i,
      });
      expect(headings.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("GraduateProfile Component (Program Page)", () => {
    it("displays three core capabilities", () => {
      render(<GraduateProfile />);
      // Three core capabilities from spec
      expect(screen.getByText(/articulate the requirements/i)).toBeInTheDocument();
      expect(screen.getByText(/develop three options/i)).toBeInTheDocument();
      expect(screen.getByText(/recommend the option/i)).toBeInTheDocument();
    });

    it("mentions risk assessment components", () => {
      render(<GraduateProfile />);
      // Risk assessment: cost, schedule, performance
      expect(screen.getByText(/cost.*schedule.*performance/i)).toBeInTheDocument();
    });

    it("displays integrity core value", () => {
      render(<GraduateProfile />);
      // Use getAllByText since integrity appears multiple times (heading + text)
      const integrityElements = screen.getAllByText(/integrity/i);
      expect(integrityElements.length).toBeGreaterThanOrEqual(1);
    });

    it("mentions NASA/SpaceX/Lockheed Martin positioning", () => {
      render(<GraduateProfile />);
      // These employers appear multiple times (badges + intro text)
      const nasa = screen.getAllByText(/NASA/);
      expect(nasa.length).toBeGreaterThanOrEqual(1);
      const spaceX = screen.getAllByText(/SpaceX/);
      expect(spaceX.length).toBeGreaterThanOrEqual(1);
      const lockheed = screen.getAllByText(/Lockheed Martin/);
      expect(lockheed.length).toBeGreaterThanOrEqual(1);
    });

    it("has a section heading", () => {
      render(<GraduateProfile />);
      const heading = screen.getByRole("heading", {
        name: /graduate profile|tesa graduate|what.*graduates.*can do/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it("uses proper semantic structure", () => {
      render(<GraduateProfile />);
      const section = document.querySelector("section");
      expect(section).toBeInTheDocument();
    });
  });
});
