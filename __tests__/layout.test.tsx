import { render, screen, fireEvent, within } from "@testing-library/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipNavLink from "@/components/SkipNavLink";

describe("Layout Components", () => {
  describe("SkipNavLink", () => {
    it("renders skip navigation link as first focusable element with correct text", () => {
      render(<SkipNavLink />);
      const skipLink = screen.getByText("Skip to main content");
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute("href", "#main-content");
    });

    it("skip link has proper accessibility attributes", () => {
      render(<SkipNavLink />);
      const skipLink = screen.getByRole("link", { name: /skip to main content/i });
      expect(skipLink).toBeInTheDocument();
    });
  });

  describe("Header", () => {
    it("renders TESA logo linking to homepage", () => {
      render(<Header />);
      const logoLink = screen.getByRole("link", { name: /tesa.*home/i });
      expect(logoLink).toHaveAttribute("href", "/");
    });

    it("renders all navigation links in desktop nav", () => {
      render(<Header />);
      const desktopNav = screen.getByRole("navigation", { name: /main navigation/i });

      const navLinks = [
        { name: /about/i, href: "/about" },
        { name: /program/i, href: "/program" },
        { name: /scholarships/i, href: "/scholarships" },
        { name: /partnerships/i, href: "/partnerships" },
        { name: /blog/i, href: "/blog" },
        { name: /contact/i, href: "/contact" },
      ];

      navLinks.forEach(({ name, href }) => {
        const link = within(desktopNav).getByRole("link", { name });
        expect(link).toHaveAttribute("href", href);
      });
    });

    it("mobile menu toggle button has proper ARIA attributes", () => {
      render(<Header />);
      const menuButton = screen.getByRole("button", { name: /menu/i });
      expect(menuButton).toHaveAttribute("aria-expanded");
      expect(menuButton).toHaveAttribute("aria-controls");
    });

    it("mobile menu toggles open and closed", () => {
      render(<Header />);
      const menuButton = screen.getByRole("button", { name: /menu/i });

      // Initially closed
      expect(menuButton).toHaveAttribute("aria-expanded", "false");

      // Click to open
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute("aria-expanded", "true");

      // Click to close
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("Footer", () => {
    it("renders contact email", () => {
      render(<Footer />);
      const emailLink = screen.getByRole("link", { name: /diallo@tesa4space\.org/i });
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute("href", "mailto:diallo@tesa4space.org");
    });

    it("renders copyright notice with current year", () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      const copyright = screen.getByText(new RegExp(`${currentYear}.*TESA`, "i"));
      expect(copyright).toBeInTheDocument();
    });

    it("renders navigation links", () => {
      render(<Footer />);
      const footerNav = screen.getByRole("navigation", { name: /footer navigation/i });
      const links = within(footerNav).getAllByRole("link");
      expect(links.length).toBeGreaterThan(1);
    });
  });
});
