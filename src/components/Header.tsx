"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Navigation link configuration
 */
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/program", label: "Program" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/**
 * Header Component
 *
 * Responsive header with mobile hamburger menu and desktop horizontal navigation.
 * Mobile-first design: hamburger menu is default, horizontal nav appears at lg breakpoint.
 * Touch targets are minimum 44x44px for accessibility.
 *
 * Performance optimizations:
 * - Logo uses next/image with priority for LCP optimization
 * - Proper sizes attribute for responsive image loading
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible-ring rounded-lg"
          >
            <Image
              src="/images/tesa_logo.png"
              alt="TESA logo"
              width={48}
              height={48}
              className="h-10 w-10 lg:h-12 lg:w-12"
              priority
              sizes="(min-width: 1024px) 48px, 40px"
            />
            <span className="font-heading text-lg font-bold text-primary lg:text-xl">
              TESA
            </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile, visible at lg breakpoint */}
          <nav
            className="hidden lg:flex lg:items-center lg:gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors focus-visible-ring min-h-touch flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Visible on mobile, hidden at lg breakpoint */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center min-h-touch min-w-touch p-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors focus-visible-ring"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            {/* Hamburger Icon */}
            <svg
              className={`h-6 w-6 transition-transform ${isMenuOpen ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`h-6 w-6 transition-transform ${isMenuOpen ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        id="mobile-menu"
        className={`lg:hidden border-t border-gray-200 ${isMenuOpen ? "block" : "hidden"}`}
        aria-label="Mobile navigation"
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors focus-visible-ring min-h-touch flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
