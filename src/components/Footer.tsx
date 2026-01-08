import Image from "next/image";
import Link from "next/link";

/**
 * Quick navigation links for footer
 */
const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/program", label: "Program" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/**
 * Footer Component
 *
 * Site footer with TESA logo, contact information, quick navigation,
 * social links placeholder, and copyright notice.
 * Mobile-first responsive design.
 *
 * Performance optimizations:
 * - Logo uses next/image with proper sizes attribute
 * - Footer logo is below-fold so no priority needed
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 focus-visible-ring rounded-lg"
              aria-label="TESA - Home"
            >
              <Image
                src="/images/tesa_logo.png"
                alt="TESA logo"
                width={40}
                height={40}
                className="h-10 w-10"
                sizes="40px"
              />
              <span className="font-heading text-lg font-bold">TESA</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              The Engineering and Science Academy - Credit-bearing aerospace
              courses for grades 6-12.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors focus-visible-ring rounded inline-block min-h-touch py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-gray-300">
                <a
                  href="mailto:diallo@tesa4space.org"
                  className="hover:text-white transition-colors focus-visible-ring rounded inline-block"
                >
                  diallo@tesa4space.org
                </a>
              </p>
            </div>
          </div>

          {/* Social Links Placeholder */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Connect
            </h3>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Social links coming soon
              </p>
              {/* Social icons will be added here when available */}
              <div className="mt-4 flex space-x-4">
                {/* Placeholder for social icons */}
                <span className="sr-only">Social media links placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-primary-500 pt-8 lg:mt-12">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} TESA - The Engineering and Science Academy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
