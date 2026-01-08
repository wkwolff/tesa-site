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

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...props} />,
}));

// Import component after mocking
import PartnershipsPage from "@/app/partnerships/page";

describe("Partnerships Page", () => {
  describe("Current Partners Grid", () => {
    it("renders the current partners section", () => {
      render(<PartnershipsPage />);
      expect(screen.getByText(/Current Partners/i)).toBeInTheDocument();
    });

    it("displays all four partner logos/placeholders", () => {
      render(<PartnershipsPage />);
      // Partner names appear multiple times (placeholder and label), so use getAllByText
      const mathworksElements = screen.getAllByText(/MathWorks/i);
      expect(mathworksElements.length).toBeGreaterThan(0);
      const ansysElements = screen.getAllByText(/Ansys/i);
      expect(ansysElements.length).toBeGreaterThan(0);
      const shadesOfBlueElements = screen.getAllByText(/Our Shades of Blue/i);
      expect(shadesOfBlueElements.length).toBeGreaterThan(0);
      const spacekindElements = screen.getAllByText(/SpaceKind/i);
      expect(spacekindElements.length).toBeGreaterThan(0);
    });

    it("shows partner descriptions", () => {
      render(<PartnershipsPage />);
      expect(screen.getByText(/MATLAB Certification Partner/i)).toBeInTheDocument();
      expect(screen.getByText(/STK Certification Partner/i)).toBeInTheDocument();
    });

    it("has responsive grid layout", () => {
      render(<PartnershipsPage />);
      const partnersGrid = document.querySelector('[data-testid="partners-grid"]');
      expect(partnersGrid).toBeInTheDocument();
    });
  });

  describe("Accreditation Badge", () => {
    it("displays Cognia Accreditation status badge", () => {
      render(<PartnershipsPage />);
      // Cognia appears multiple times (header and badge), so use getAllByText
      const cogniaElements = screen.getAllByText(/Cognia/i);
      expect(cogniaElements.length).toBeGreaterThan(0);
    });

    it("shows accreditation in progress status", () => {
      render(<PartnershipsPage />);
      expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    });

    it("has explanation of accreditation process", () => {
      render(<PartnershipsPage />);
      // Accreditation appears multiple times, so use getAllByText
      const accreditationElements = screen.getAllByText(/accreditation/i);
      expect(accreditationElements.length).toBeGreaterThan(0);
    });
  });

  describe("Potential Funders Section", () => {
    it("displays potential funders with Coming Soon treatment", () => {
      render(<PartnershipsPage />);
      // Funder names appear multiple times (placeholder and label), so use getAllByText
      const usdaElements = screen.getAllByText(/USDA/i);
      expect(usdaElements.length).toBeGreaterThan(0);
      const faaElements = screen.getAllByText(/FAA/i);
      expect(faaElements.length).toBeGreaterThan(0);
      const nsfElements = screen.getAllByText(/NSF/i);
      expect(nsfElements.length).toBeGreaterThan(0);
    });

    it("shows Coming Soon badges for potential funders", () => {
      render(<PartnershipsPage />);
      const comingSoonBadges = screen.getAllByText(/Coming Soon/i);
      expect(comingSoonBadges.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("Partnership Benefits Section", () => {
    it("displays partnership benefits overview", () => {
      render(<PartnershipsPage />);
      expect(screen.getByText(/Partnership Benefits/i)).toBeInTheDocument();
    });

    it("shows benefits for different partner types", () => {
      render(<PartnershipsPage />);
      expect(screen.getByText(/Educational Partners/i)).toBeInTheDocument();
      expect(screen.getByText(/Industry Partners/i)).toBeInTheDocument();
      expect(screen.getByText(/Government Funders/i)).toBeInTheDocument();
    });
  });

  describe("Partnership CTA", () => {
    it("has partnership inquiry CTA linking to contact", () => {
      render(<PartnershipsPage />);
      const ctaLink = screen.getByRole("link", {
        name: /Partner with TESA|Become a Partner/i,
      });
      expect(ctaLink).toBeInTheDocument();
      expect(ctaLink).toHaveAttribute("href", expect.stringContaining("/contact"));
    });

    it("pre-fills subject for partnership inquiries", () => {
      render(<PartnershipsPage />);
      const ctaLink = screen.getByRole("link", {
        name: /Partner with TESA|Become a Partner/i,
      });
      expect(ctaLink).toHaveAttribute(
        "href",
        expect.stringContaining("subject=")
      );
    });
  });

  describe("Page Structure and Accessibility", () => {
    it("has proper heading hierarchy", () => {
      render(<PartnershipsPage />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toBeInTheDocument();

      const h2Elements = screen.getAllByRole("heading", { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it("uses semantic section elements", () => {
      render(<PartnershipsPage />);
      const sections = document.querySelectorAll("section");
      expect(sections.length).toBeGreaterThan(0);
    });

    it("has accessible region labels", () => {
      render(<PartnershipsPage />);
      const labelledSections = document.querySelectorAll("[aria-labelledby]");
      expect(labelledSections.length).toBeGreaterThan(0);
    });
  });
});
