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
import ScholarshipsPage from "@/app/scholarships/page";

describe("Scholarships Page", () => {
  describe("All Scholarships Render", () => {
    it("renders the Fari Scholarship card", () => {
      render(<ScholarshipsPage />);
      expect(screen.getByText(/Fari Scholarship/i)).toBeInTheDocument();
      // Jafari Wallace appears multiple times (name + story)
      const jafariElements = screen.getAllByText(/Jafari Wallace/i);
      expect(jafariElements.length).toBeGreaterThan(0);
    });

    it("renders the Mr. Veri Scholarship card", () => {
      render(<ScholarshipsPage />);
      expect(screen.getByText(/Mr\. Veri Scholarship/i)).toBeInTheDocument();
      // Richard Veri appears multiple times (name + story)
      const richardElements = screen.getAllByText(/Richard Veri/i);
      expect(richardElements.length).toBeGreaterThan(0);
    });

    it("renders the Jim Irwin Scholarship card", () => {
      render(<ScholarshipsPage />);
      expect(screen.getByText(/Jim Irwin Scholarship/i)).toBeInTheDocument();
      expect(screen.getByText(/Apollo 15/i)).toBeInTheDocument();
    });

    it("displays all three scholarships with their types", () => {
      render(<ScholarshipsPage />);
      // Two student scholarships, one educator scholarship
      const studentElements = screen.getAllByText(/Student/i);
      expect(studentElements.length).toBeGreaterThanOrEqual(2);
      const educatorElements = screen.getAllByText(/Educator/i);
      expect(educatorElements.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Application/Inquiry CTAs", () => {
    it("has application/inquiry links for each scholarship", () => {
      render(<ScholarshipsPage />);
      const ctaLinks = screen.getAllByRole("link", {
        name: /apply|inquire|learn more/i,
      });
      // At least 3 CTA links (one per scholarship)
      expect(ctaLinks.length).toBeGreaterThanOrEqual(3);
    });

    it("CTA links route to contact page", () => {
      render(<ScholarshipsPage />);
      // Get the scholarship inquiry links specifically
      const inquireLinks = screen.getAllByRole("link", {
        name: /Inquire About This Scholarship/i,
      });
      // Each scholarship card should have an inquiry link to contact
      expect(inquireLinks.length).toBe(3);
      inquireLinks.forEach((link) => {
        expect(link).toHaveAttribute("href", expect.stringContaining("/contact"));
      });
    });
  });

  describe("Honoree Stories", () => {
    it("displays Jafari Wallace story elements", () => {
      render(<ScholarshipsPage />);
      // Brother of Diallo, technology advocate - multiple matches possible
      const technologyElements = screen.getAllByText(/technology/i);
      expect(technologyElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/brother/i)).toBeInTheDocument();
    });

    it("displays Richard Veri story elements", () => {
      render(<ScholarshipsPage />);
      // Mentor and science teacher
      expect(screen.getByText(/mentor/i)).toBeInTheDocument();
    });

    it("displays Jim Irwin story elements", () => {
      render(<ScholarshipsPage />);
      // Genesis Rock discovery
      expect(screen.getByText(/Genesis Rock/i)).toBeInTheDocument();
    });
  });

  describe("Space Camp Link", () => {
    it("has external link to Space Camp information", () => {
      render(<ScholarshipsPage />);
      const spaceCampLink = screen.getByRole("link", {
        name: /Learn More About Space Camp/i,
      });
      expect(spaceCampLink).toBeInTheDocument();
      expect(spaceCampLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
      expect(spaceCampLink).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
    });
  });

  describe("Page Structure and Accessibility", () => {
    it("has proper heading hierarchy", () => {
      render(<ScholarshipsPage />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toBeInTheDocument();

      const h2Elements = screen.getAllByRole("heading", { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it("uses semantic section elements", () => {
      render(<ScholarshipsPage />);
      const sections = document.querySelectorAll("section");
      expect(sections.length).toBeGreaterThan(0);
    });

    it("has accessible region labels", () => {
      render(<ScholarshipsPage />);
      const labelledSections = document.querySelectorAll("[aria-labelledby]");
      expect(labelledSections.length).toBeGreaterThan(0);
    });

    it("displays TESA commitment to accessibility", () => {
      render(<ScholarshipsPage />);
      // Overview section should mention accessibility - using a more specific query
      expect(screen.getByText(/Making Space Education Accessible/i)).toBeInTheDocument();
    });
  });
});
