import { render, screen } from "@testing-library/react";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: { alt: string; src: string; [key: string]: unknown }) => {
    const { alt, src, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} src={src} {...rest} />;
  },
}));

// Import components after mocking
import HeroSection from "@/components/homepage/HeroSection";
import TrustSignals from "@/components/homepage/TrustSignals";
import AudienceCTAs from "@/components/homepage/AudienceCTAs";
import ProgramPathwayPreview from "@/components/homepage/ProgramPathwayPreview";
import PartnerLogos from "@/components/homepage/PartnerLogos";

describe("Homepage Components", () => {
  describe("HeroSection", () => {
    it("renders value proposition text", () => {
      render(<HeroSection />);
      expect(
        screen.getByText(/credit-bearing aerospace courses/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/high school students/i)).toBeInTheDocument();
    });

    it("renders primary CTA button", () => {
      render(<HeroSection />);
      const ctaButton = screen.getByRole("link", { name: /get started|learn more|explore/i });
      expect(ctaButton).toBeInTheDocument();
    });

    it("has accessible heading structure", () => {
      render(<HeroSection />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });

  describe("TrustSignals", () => {
    it("renders Space Camp Hall of Fame 2025", () => {
      render(<TrustSignals />);
      expect(screen.getByText(/space camp hall of fame/i)).toBeInTheDocument();
      expect(screen.getByText(/2025/)).toBeInTheDocument();
    });

    it("renders Naval Academy affiliation", () => {
      render(<TrustSignals />);
      expect(screen.getByText(/naval academy/i)).toBeInTheDocument();
    });

    it("renders Purdue PhD candidate", () => {
      render(<TrustSignals />);
      expect(screen.getByText(/purdue/i)).toBeInTheDocument();
      expect(screen.getByText(/ph\.?d\.?/i)).toBeInTheDocument();
    });
  });

  describe("AudienceCTAs", () => {
    it("renders Funders CTA linking to /partnerships", () => {
      render(<AudienceCTAs />);
      const fundersLink = screen.getByRole("link", { name: /funder|partner|invest/i });
      expect(fundersLink).toHaveAttribute("href", "/partnerships");
    });

    it("renders Parents CTA linking to /program", () => {
      render(<AudienceCTAs />);
      const parentsLink = screen.getByRole("link", { name: /parent|program|enroll/i });
      expect(parentsLink).toHaveAttribute("href", "/program");
    });

    it("renders Students CTA linking to /contact", () => {
      render(<AudienceCTAs />);
      const studentsLink = screen.getByRole("link", { name: /student|contact|apply/i });
      expect(studentsLink).toHaveAttribute("href", "/contact");
    });

    it("renders three distinct audience paths", () => {
      render(<AudienceCTAs />);
      const links = screen.getAllByRole("link");
      const hrefs = links.map((link) => link.getAttribute("href"));
      expect(hrefs).toContain("/partnerships");
      expect(hrefs).toContain("/program");
      expect(hrefs).toContain("/contact");
    });
  });

  describe("ProgramPathwayPreview", () => {
    it("renders high school grade progression from 9th to 12th", () => {
      render(<ProgramPathwayPreview />);
      // Use getAllByText since 9th appears in badges
      const ninthElements = screen.getAllByText(/9th/i);
      expect(ninthElements.length).toBeGreaterThan(0);
      const twelfthElements = screen.getAllByText(/12th/i);
      expect(twelfthElements.length).toBeGreaterThan(0);
    });

    it("renders Learn More link to /program", () => {
      render(<ProgramPathwayPreview />);
      const learnMoreLink = screen.getByRole("link", { name: /learn more|view program/i });
      expect(learnMoreLink).toHaveAttribute("href", "/program");
    });
  });

  describe("PartnerLogos", () => {
    it("renders partner logos grid", () => {
      render(<PartnerLogos />);
      const section = screen.getByRole("region", { name: /partner/i });
      expect(section).toBeInTheDocument();
    });

    it("renders placeholder for MathWorks", () => {
      render(<PartnerLogos />);
      // MathWorks appears twice - in placeholder and in name
      const elements = screen.getAllByText(/MathWorks/i);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("renders placeholder for Ansys", () => {
      render(<PartnerLogos />);
      // Ansys appears twice - in placeholder and in name
      const elements = screen.getAllByText(/Ansys/i);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("renders placeholder for Our Shades of Blue", () => {
      render(<PartnerLogos />);
      // Partner name appears twice - in placeholder and in name
      const elements = screen.getAllByText(/Our Shades of Blue/i);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("renders placeholder for SpaceKind", () => {
      render(<PartnerLogos />);
      // SpaceKind appears twice - in placeholder and in name
      const elements = screen.getAllByText(/SpaceKind/i);
      expect(elements.length).toBeGreaterThan(0);
    });
  });
});
