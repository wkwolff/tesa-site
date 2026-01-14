import { render, screen } from "@testing-library/react";

// Mock next/image - properly handle fill and priority props
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: { alt: string; src: string; fill?: boolean; priority?: boolean; [key: string]: unknown }) => {
    // Extract Next.js Image specific props that shouldn't be passed to img
    const { alt, src, fill, priority, sizes, quality, placeholder, blurDataURL, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img alt={alt} src={src} data-fill={fill?.toString()} data-priority={priority?.toString()} {...rest} />;
  },
}));

// Import components after mocking
import AboutPage from "@/app/about/page";

describe("About TESA Page", () => {
  describe("TESA Mission Section", () => {
    it("renders TESA mission statement", () => {
      render(<AboutPage />);
      expect(
        screen.getByText(/pre-college hybrid.*school/i)
      ).toBeInTheDocument();
    });

    it("displays the 60% engineering attrition problem", () => {
      render(<AboutPage />);
      // Multiple instances of 60% may appear, use getAllByText
      const attritionElements = screen.getAllByText(/60%/);
      expect(attritionElements.length).toBeGreaterThan(0);
      // Multiple mentions of attrition
      const attritionTextElements = screen.getAllByText(/attrition/i);
      expect(attritionTextElements.length).toBeGreaterThan(0);
    });

    it("mentions credit-bearing course format", () => {
      render(<AboutPage />);
      // Check for credit-bearing courses content
      const creditElements = screen.getAllByText(/credit-bearing/i);
      expect(creditElements.length).toBeGreaterThan(0);
    });

    it("lists certifications offered: MATLAB, STK, CAPM", () => {
      render(<AboutPage />);
      // These may appear multiple times due to JSON-LD and content
      const matlabElements = screen.getAllByText(/MATLAB/i);
      expect(matlabElements.length).toBeGreaterThan(0);
      const stkElements = screen.getAllByText(/STK/i);
      expect(stkElements.length).toBeGreaterThan(0);
      const capmElements = screen.getAllByText(/CAPM/i);
      expect(capmElements.length).toBeGreaterThan(0);
    });
  });

  describe("Founder Bio Section", () => {
    it("displays Lt. Commander Diallo Wallace introduction", () => {
      render(<AboutPage />);
      // Multiple mentions of Diallo Wallace across page
      const dialloElements = screen.getAllByText(/Diallo Wallace/i);
      expect(dialloElements.length).toBeGreaterThan(0);
    });

    it("renders professional headshot with descriptive alt text", () => {
      render(<AboutPage />);
      const headshot = screen.getByRole("img", {
        name: /diallo wallace.*founder/i,
      });
      expect(headshot).toBeInTheDocument();
    });

    it("displays founder mission statement about empowering students", () => {
      render(<AboutPage />);
      expect(
        screen.getByText(/empowering students/i)
      ).toBeInTheDocument();
    });
  });

  describe("Education Credentials", () => {
    it("displays B.S. Electronics Engineering, University of Illinois", () => {
      render(<AboutPage />);
      expect(screen.getByText(/Electronics Engineering/i)).toBeInTheDocument();
      // Multiple mentions of University of Illinois
      const uiElements = screen.getAllByText(/University of Illinois/i);
      expect(uiElements.length).toBeGreaterThan(0);
    });

    it("displays M.S. Astronautical Engineering, Naval Postgraduate School", () => {
      render(<AboutPage />);
      expect(screen.getByText(/Astronautical Engineering/i)).toBeInTheDocument();
      // Multiple mentions of Naval Postgraduate School
      const npsElements = screen.getAllByText(/Naval Postgraduate School/i);
      expect(npsElements.length).toBeGreaterThan(0);
    });

    it("displays Ph.D. candidate at Purdue University", () => {
      render(<AboutPage />);
      // Multiple mentions of Ph.D. candidate
      const phdElements = screen.getAllByText(/Ph\.?D\.?.*candidate/i);
      expect(phdElements.length).toBeGreaterThan(0);
      // Multiple mentions of Purdue University
      const purdueElements = screen.getAllByText(/Purdue University/i);
      expect(purdueElements.length).toBeGreaterThan(0);
    });
  });

  describe("Space & Analog Astronaut Experience", () => {
    it("displays ILMAH spacesuit evaluations", () => {
      render(<AboutPage />);
      // ILMAH appears in the Space Experience section content
      // The component uses "ILMAH Spacesuit Evaluations" as title and mentions ILMAH in description
      const ilmahElements = screen.getAllByText((content, element) => {
        return content.includes("ILMAH") || element?.textContent?.includes("ILMAH") || false;
      });
      expect(ilmahElements.length).toBeGreaterThan(0);
    });

    it("displays Flashline Mars Arctic Research Station experience", () => {
      render(<AboutPage />);
      // Multiple mentions of Flashline Mars Arctic Research Station
      const flashlineElements = screen.getAllByText(/Flashline Mars/i);
      expect(flashlineElements.length).toBeGreaterThan(0);
      // Multiple mentions of Mission Commander
      const mcElements = screen.getAllByText(/Mission Commander/i);
      expect(mcElements.length).toBeGreaterThan(0);
    });

    it("highlights Space Camp Hall of Fame 2025 inductee", () => {
      render(<AboutPage />);
      // Multiple mentions of Space Camp Hall of Fame
      const hofElements = screen.getAllByText(/Space Camp Hall of Fame/i);
      expect(hofElements.length).toBeGreaterThan(0);
      // Multiple mentions of 2025
      const yearElements = screen.getAllByText(/2025/);
      expect(yearElements.length).toBeGreaterThan(0);
    });
  });

  describe("Military Service Section", () => {
    it("displays Naval Aviator background", () => {
      render(<AboutPage />);
      // Multiple mentions of Naval Aviator
      const naElements = screen.getAllByText(/Naval Aviator/i);
      expect(naElements.length).toBeGreaterThan(0);
    });

    it("displays Naval Academy professor role", () => {
      render(<AboutPage />);
      // Multiple mentions of Naval Academy
      const naElements = screen.getAllByText(/Naval Academy/i);
      expect(naElements.length).toBeGreaterThan(0);
      // Multiple mentions of Department of Aerospace Engineering
      const deptElements = screen.getAllByText(/Department of Aerospace Engineering/i);
      expect(deptElements.length).toBeGreaterThan(0);
    });
  });

  describe("Contact Information", () => {
    it("displays contact email diallo@tesa4space.org", () => {
      render(<AboutPage />);
      const emailLink = screen.getByRole("link", {
        name: /diallo@tesa4space\.org/i,
      });
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute("href", "mailto:diallo@tesa4space.org");
    });

    it("renders link to contact page", () => {
      render(<AboutPage />);
      // Multiple contact links may exist
      const contactLinks = screen.getAllByRole("link", { name: /contact us/i });
      expect(contactLinks.length).toBeGreaterThan(0);
      // At least one should link to /contact
      const contactPageLinks = contactLinks.filter(
        (link) => link.getAttribute("href") === "/contact"
      );
      expect(contactPageLinks.length).toBeGreaterThan(0);
    });
  });

  describe("Page Structure and Accessibility", () => {
    it("has proper heading hierarchy", () => {
      render(<AboutPage />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toBeInTheDocument();

      const h2Elements = screen.getAllByRole("heading", { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it("uses semantic section elements", () => {
      render(<AboutPage />);
      const sections = document.querySelectorAll("section");
      expect(sections.length).toBeGreaterThan(0);
    });
  });
});
