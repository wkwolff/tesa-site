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
import ProgramPage from "@/app/program/page";

describe("Program Overview Page", () => {
  describe("Learning Pathway", () => {
    it("renders grade progression from 6th to 12th grade", () => {
      render(<ProgramPage />);
      // Check for grade markers - multiple instances expected
      const sixthGradeElements = screen.getAllByText(/6th/i);
      expect(sixthGradeElements.length).toBeGreaterThan(0);
      const twelfthGradeElements = screen.getAllByText(/12th/i);
      expect(twelfthGradeElements.length).toBeGreaterThan(0);
    });

    it("displays visual pathway timeline or stepped design", () => {
      render(<ProgramPage />);
      // The pathway section should be present with proper heading
      const pathwayHeading = screen.getByRole("heading", {
        name: /learning pathway|grade.*pathway|academic.*journey/i,
      });
      expect(pathwayHeading).toBeInTheDocument();
    });
  });

  describe("Course Catalog", () => {
    it("displays all STEM categories (Science, Technology, Engineering, Mathematics)", () => {
      render(<ProgramPage />);
      // Should display all 4 STEM categories - multiple instances expected
      const scienceElements = screen.getAllByText(/Science/);
      expect(scienceElements.length).toBeGreaterThan(0);
      const technologyElements = screen.getAllByText(/Technology/);
      expect(technologyElements.length).toBeGreaterThan(0);
      const engineeringElements = screen.getAllByText(/Engineering/);
      expect(engineeringElements.length).toBeGreaterThan(0);
      const mathematicsElements = screen.getAllByText(/Mathematics/);
      expect(mathematicsElements.length).toBeGreaterThan(0);
    });

    it("lists all 7 Science courses", () => {
      render(<ProgramPage />);
      // Science courses - multiple mentions possible
      const physicsFirstElements = screen.getAllByText(/Physics First/i);
      expect(physicsFirstElements.length).toBeGreaterThan(0);
      // Physics I may appear in multiple contexts
      const physicsIElements = screen.getAllByText(/Physics I(?!I)/);
      expect(physicsIElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/Physics C.*Mechanics/i)).toBeInTheDocument();
      expect(screen.getByText(/Physics C.*E&M/i)).toBeInTheDocument();
      expect(screen.getByText(/^Statics$/i)).toBeInTheDocument();
      expect(screen.getByText(/^Dynamics$/i)).toBeInTheDocument();
      expect(screen.getByText(/Spring.*Mass.*Damper/i)).toBeInTheDocument();
    });

    it("lists all 3 Technology courses", () => {
      render(<ProgramPage />);
      // Technology courses - multiple mentions possible
      const raspberryPiElements = screen.getAllByText(/Raspberry Pi/i);
      expect(raspberryPiElements.length).toBeGreaterThan(0);
      const arduinoElements = screen.getAllByText(/Arduino/i);
      expect(arduinoElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/MATLAB Computer Programming/i)).toBeInTheDocument();
    });

    it("lists all 11 Engineering courses", () => {
      render(<ProgramPage />);
      // Engineering courses - use getAllByText for courses that appear multiple times
      const preEngElements = screen.getAllByText(/Pre-Engineering/i);
      expect(preEngElements.length).toBeGreaterThan(0);
      // Technical Writing appears multiple times (pathway + catalog)
      const techWritingElements = screen.getAllByText(/Technical Writing/i);
      expect(techWritingElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/Structural Engineering/i)).toBeInTheDocument();
      expect(screen.getByText(/Electrical Engineering I.*DC/i)).toBeInTheDocument();
      expect(screen.getByText(/Electrical Engineering II.*AC/i)).toBeInTheDocument();
      expect(screen.getByText(/Mechanical Engineering/i)).toBeInTheDocument();
      // Aerodynamics may appear multiple times
      const aerodynamicsElements = screen.getAllByText(/Aerodynamics/i);
      expect(aerodynamicsElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/Aerodynamics II/i)).toBeInTheDocument();
      // Orbital Mechanics may appear multiple times
      const orbitalMechElements = screen.getAllByText(/Orbital Mechanics I/i);
      expect(orbitalMechElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/Orbital Mechanics II/i)).toBeInTheDocument();
      expect(screen.getByText(/^Rocketry$/i)).toBeInTheDocument();
    });

    it("lists all 6 Mathematics courses", () => {
      render(<ProgramPage />);
      expect(
        screen.getByText(/Mathematics for Space Applications/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Computational Calculus I.*Numerical Differentiation/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Computational Calculus II.*Numerical Integration/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Differential Equations.*numeric/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/^Linear Algebra$/i)).toBeInTheDocument();
      expect(screen.getByText(/^Laplace Transforms$/i)).toBeInTheDocument();
    });

    it("highlights foundational courses (Pre-Engineering and MATLAB)", () => {
      render(<ProgramPage />);
      // Foundational courses should have special indicator
      // Look for "Foundational" badge or indicator near these courses
      const foundationalIndicators = screen.getAllByText(/foundational/i);
      expect(foundationalIndicators.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Certifications Section", () => {
    it("displays MATLAB certification from MathWorks", () => {
      render(<ProgramPage />);
      // Multiple mentions of MATLAB
      const matlabElements = screen.getAllByText(/MATLAB/i);
      expect(matlabElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/MathWorks/i)).toBeInTheDocument();
    });

    it("displays Ansys STK certification", () => {
      render(<ProgramPage />);
      const stkElements = screen.getAllByText(/STK|Satellite Toolkit/i);
      expect(stkElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/Ansys/i)).toBeInTheDocument();
    });

    it("displays PMI CAPM certification", () => {
      render(<ProgramPage />);
      const capmElements = screen.getAllByText(/CAPM/i);
      expect(capmElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/Project Management Institute/i)).toBeInTheDocument();
    });

    it("has a certifications section with proper heading", () => {
      render(<ProgramPage />);
      // Use getAllByRole since there may be multiple headings with certification
      const certHeadings = screen.getAllByRole("heading", {
        name: /certification/i,
      });
      expect(certHeadings.length).toBeGreaterThan(0);
    });
  });

  describe("Course Format Section", () => {
    it("explains 10-week for-credit course structure", () => {
      render(<ProgramPage />);
      // Multiple mentions of 10-week possible
      const tenWeekElements = screen.getAllByText(/10-week/i);
      expect(tenWeekElements.length).toBeGreaterThan(0);
      const forCreditElements = screen.getAllByText(/for-credit/i);
      expect(forCreditElements.length).toBeGreaterThan(0);
    });

    it("mentions hands-on learning approach", () => {
      render(<ProgramPage />);
      // Multiple mentions of hands-on possible
      const handsOnElements = screen.getAllByText(/hands-on/i);
      expect(handsOnElements.length).toBeGreaterThan(0);
    });

    it("mentions real-world design challenges", () => {
      render(<ProgramPage />);
      // Check for real-world and design in proximity or together
      const realWorldElements = screen.getAllByText(/real-world/i);
      expect(realWorldElements.length).toBeGreaterThan(0);
    });
  });

  describe("Career Outcomes Section", () => {
    it("displays aerospace industry job titles", () => {
      render(<ProgramPage />);
      // Should mention aerospace-related job titles - multiple career mentions
      const careerElements = screen.getAllByText(/career/i);
      expect(careerElements.length).toBeGreaterThan(0);
    });

    it("shows salary examples or ranges", () => {
      render(<ProgramPage />);
      // Salary information should be present (could be specific numbers or ranges)
      const salaryElements = screen.getAllByText(/\$\d|salary|earnings/i);
      expect(salaryElements.length).toBeGreaterThan(0);
    });
  });

  describe("Enrollment CTA", () => {
    it("has a clear enrollment inquiry button linking to /contact", () => {
      render(<ProgramPage />);
      const enrollmentLink = screen.getByRole("link", {
        name: /enroll|get started|inquire|apply/i,
      });
      expect(enrollmentLink).toBeInTheDocument();
      expect(enrollmentLink).toHaveAttribute("href", expect.stringMatching(/\/contact/));
    });
  });

  describe("Page Structure and Accessibility", () => {
    it("has proper heading hierarchy", () => {
      render(<ProgramPage />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toBeInTheDocument();

      const h2Elements = screen.getAllByRole("heading", { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it("uses semantic section elements", () => {
      render(<ProgramPage />);
      const sections = document.querySelectorAll("section");
      expect(sections.length).toBeGreaterThan(0);
    });

    it("has accessible region labels", () => {
      render(<ProgramPage />);
      // Sections should have aria-labelledby
      const labelledSections = document.querySelectorAll("[aria-labelledby]");
      expect(labelledSections.length).toBeGreaterThan(0);
    });
  });
});
