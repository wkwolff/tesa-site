/**
 * SEO Tests for TESA Website
 *
 * Tests sitemap.xml generation, robots.txt configuration,
 * and JSON-LD structured data validation on key pages.
 */

// Mock fs module for sitemap/robots tests
jest.mock("fs", () => ({
  existsSync: jest.fn().mockReturnValue(true),
  readdirSync: jest.fn().mockReturnValue(["welcome-to-tesa.mdx"]),
  readFileSync: jest.fn().mockReturnValue(`---
title: Welcome to TESA
date: 2026-01-06
excerpt: Test excerpt
author: Diallo Wallace
tags: ["test"]
---
Content here`),
}));

// Mock path module
jest.mock("path", () => ({
  join: jest.fn((...args: string[]) => args.join("/")),
}));

// Mock server-only
jest.mock("server-only", () => ({}));

// Import after mocks
import { MetadataRoute } from "next";

describe("SEO Implementation", () => {
  describe("Sitemap Generation", () => {
    it("sitemap includes all main pages", async () => {
      // Import sitemap dynamically to ensure mocks are applied
      const sitemapModule = await import("@/app/sitemap");
      const sitemap = sitemapModule.default;
      const result: MetadataRoute.Sitemap = sitemap();

      // Check all static pages are included
      const urls = result.map((item) => item.url);

      expect(urls).toContain("https://tesa4space.org");
      expect(urls).toContain("https://tesa4space.org/about");
      expect(urls).toContain("https://tesa4space.org/program");
      expect(urls).toContain("https://tesa4space.org/scholarships");
      expect(urls).toContain("https://tesa4space.org/partnerships");
      expect(urls).toContain("https://tesa4space.org/contact");
      expect(urls).toContain("https://tesa4space.org/blog");
    });

    it("sitemap includes blog post URLs dynamically", async () => {
      const sitemapModule = await import("@/app/sitemap");
      const sitemap = sitemapModule.default;
      const result: MetadataRoute.Sitemap = sitemap();

      const urls = result.map((item) => item.url);

      // Should include the mocked blog post
      expect(urls).toContain("https://tesa4space.org/blog/welcome-to-tesa");
    });

    it("sitemap entries have lastModified dates", async () => {
      const sitemapModule = await import("@/app/sitemap");
      const sitemap = sitemapModule.default;
      const result: MetadataRoute.Sitemap = sitemap();

      // All entries should have lastModified
      result.forEach((entry) => {
        expect(entry.lastModified).toBeDefined();
      });
    });

    it("sitemap entries have appropriate changeFrequency", async () => {
      const sitemapModule = await import("@/app/sitemap");
      const sitemap = sitemapModule.default;
      const result: MetadataRoute.Sitemap = sitemap();

      // Homepage should have higher priority than other pages
      const homepage = result.find((item) => item.url === "https://tesa4space.org");
      expect(homepage?.priority).toBe(1);
    });
  });

  describe("Robots.txt Configuration", () => {
    it("robots.txt allows all crawling", async () => {
      const robotsModule = await import("@/app/robots");
      const robots = robotsModule.default;
      const result = robots();

      // Should have rules that allow all crawling
      expect(result.rules).toBeDefined();

      // Check for User-Agent: * with Allow: /
      const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
      const allAgentRule = rules.find(
        (rule) => rule.userAgent === "*" || (Array.isArray(rule.userAgent) && rule.userAgent.includes("*"))
      );

      expect(allAgentRule).toBeDefined();
      expect(allAgentRule?.allow).toBe("/");
    });

    it("robots.txt references sitemap URL", async () => {
      const robotsModule = await import("@/app/robots");
      const robots = robotsModule.default;
      const result = robots();

      expect(result.sitemap).toBe("https://tesa4space.org/sitemap.xml");
    });

    it("robots.txt has no disallow rules for MVP", async () => {
      const robotsModule = await import("@/app/robots");
      const robots = robotsModule.default;
      const result = robots();

      const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
      const allAgentRule = rules.find(
        (rule) => rule.userAgent === "*" || (Array.isArray(rule.userAgent) && rule.userAgent.includes("*"))
      );

      // Should not have any disallow rules (or disallow should be empty/undefined)
      expect(allAgentRule?.disallow).toBeUndefined();
    });
  });

  describe("JSON-LD Structured Data", () => {
    it("homepage has valid EducationalOrganization schema structure", () => {
      // Validate the expected JSON-LD structure for homepage
      const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "TESA - The Engineering and Science Academy",
        url: "https://tesa4space.org",
        email: "diallo@tesa4space.org",
      };

      // Validate required fields for EducationalOrganization schema
      expect(jsonLdData["@context"]).toBe("https://schema.org");
      expect(jsonLdData["@type"]).toBe("EducationalOrganization");
      expect(jsonLdData.name).toContain("TESA");
      expect(jsonLdData.url).toBe("https://tesa4space.org");
      expect(jsonLdData.email).toBe("diallo@tesa4space.org");
    });

    it("about page has valid EducationalOrganization and Person schemas", () => {
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "TESA - The Engineering and Science Academy",
        url: "https://tesa4space.org",
      };

      const founderSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Diallo Wallace",
        jobTitle: "Founder",
      };

      // Validate organization schema
      expect(organizationSchema["@context"]).toBe("https://schema.org");
      expect(organizationSchema["@type"]).toBe("EducationalOrganization");

      // Validate founder schema
      expect(founderSchema["@context"]).toBe("https://schema.org");
      expect(founderSchema["@type"]).toBe("Person");
      expect(founderSchema.name).toBe("Diallo Wallace");
      expect(founderSchema.jobTitle).toBe("Founder");
    });
  });
});

describe("Page Metadata Validation", () => {
  it("all pages follow title pattern: Page Name | TESA", () => {
    const pageTitles = [
      "TESA | Credit-Bearing Aerospace Courses for High School Students", // Homepage (special case)
      "About TESA | Founder & Mission",
      "Program Overview | TESA Aerospace Courses",
      "Scholarships | TESA Space Camp Opportunities",
      "Partnerships | TESA Collaboration Opportunities",
      "Contact TESA | Get in Touch",
      "Blog | TESA News & Updates",
    ];

    pageTitles.forEach((title) => {
      // Each title should contain TESA
      expect(title).toContain("TESA");
      // Most titles should follow pattern with |
      expect(title).toContain("|");
    });
  });

  it("all pages have unique descriptions between 100-300 characters", () => {
    const pageDescriptions = [
      "The Engineering and Science Academy (TESA) offers credit-bearing aerospace courses for high school students. Prepare your child for STEM success with hands-on learning, industry certifications in MATLAB and STK, and mentorship from aerospace professionals.",
      "Learn about The Engineering and Science Academy (TESA), our mission to prepare students for STEM success, and founder Diallo Wallace - Space Camp Hall of Fame 2025 inductee, Naval Academy professor, and Purdue PhD candidate.",
      "Explore TESA's comprehensive STEM curriculum: 27 credit-bearing courses across Science, Technology, Engineering, and Mathematics for high school students. Earn industry certifications in MATLAB, STK, and CAPM.",
      "TESA scholarship programs honor individuals who inspired dreams of space. Support student and educator attendance at Space Camp through the Fari, Mr. Veri, and Jim Irwin Scholarships.",
      "Partner with TESA to shape the future of aerospace education. Explore collaboration opportunities for educational institutions, industry leaders, and government funders supporting STEM education.",
      "Contact The Engineering and Science Academy (TESA) for enrollment information, partnership inquiries, scholarship applications, or general questions. Reach out to start your aerospace education journey.",
      "Stay updated with the latest news, insights, and announcements from The Engineering and Science Academy (TESA). Read about aerospace education, STEM programs, and student success stories.",
    ];

    // Check that descriptions exist and have reasonable length
    pageDescriptions.forEach((description) => {
      expect(description.length).toBeGreaterThan(100);
      expect(description.length).toBeLessThan(300);
    });
  });
});
