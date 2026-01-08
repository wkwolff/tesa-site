import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header, Footer, SkipNavLink } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

/**
 * Site URL for canonical URLs and metadata
 */
const SITE_URL = "https://tesa4space.org";

/**
 * Root layout metadata configuration
 *
 * Includes:
 * - Default title template for all pages
 * - Base description and keywords
 * - Open Graph and Twitter Card defaults
 * - Canonical URL configuration via metadataBase
 * - Robots configuration for SEO
 */
export const metadata: Metadata = {
  title: {
    default: "TESA | The Engineering and Science Academy",
    template: "%s | TESA",
  },
  description:
    "Credit-bearing aerospace courses for grades 6-12. TESA prepares students for academic and technical rigor with hands-on STEM education, industry certifications, and mentorship.",
  keywords: [
    "aerospace education",
    "STEM courses",
    "pre-college engineering",
    "MATLAB certification",
    "space education",
    "6-12 grade courses",
  ],
  authors: [{ name: "TESA - The Engineering and Science Academy" }],
  creator: "TESA",
  publisher: "TESA - The Engineering and Science Academy",
  // metadataBase is used for resolving relative URLs in metadata
  // This automatically handles canonical URLs for all pages
  metadataBase: new URL(SITE_URL),
  // Alternates configuration for canonical URLs
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "TESA - The Engineering and Science Academy",
    title: "TESA | The Engineering and Science Academy",
    description:
      "Credit-bearing aerospace courses for grades 6-12. Preparing students for success in STEM majors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TESA | The Engineering and Science Academy",
    description:
      "Credit-bearing aerospace courses for grades 6-12. Preparing students for success in STEM majors.",
    creator: "@tesa4space",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Verification tags can be added when needed
  // verification: {
  //   google: "google-site-verification-code",
  //   yandex: "yandex-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <SkipNavLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
