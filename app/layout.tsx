import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { getCdnUrl } from "@/lib/cdn";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const faviconSvg = getCdnUrl("BIG_mark_dark.svg");
const faviconPng = getCdnUrl("BIG_mark_dark_transparent.png");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | AI-Native Operating Group`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Bradley Innovations Group builds, owns and scales AI-native businesses across the United States and GCC through one operating team.",
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: faviconSvg, type: "image/svg+xml" },
      { url: faviconPng, type: "image/png" },
    ],
    shortcut: faviconSvg,
    apple: [{ url: faviconPng, type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <style>{`
          :root {
            --color-bg: #0B0B0B;
            --color-gold: #FDE18C;
            --color-gold-deep: #D2AB36;
            --color-gold-dim: #B8962E;
            --color-text-main: #F5F2E8;
            --color-text-body: #CFCFCF;
          }
        `}</style>
      </head>
      <body className="bg-bg text-text-main font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" tabIndex={-1} className="pt-24 md:pt-28 outline-none">
          {children}
        </main>

        <footer className="mt-20 border-t border-gold-dim/30">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
            {/* Top row — logo + primary links */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
              <a
                href="/"
                className="inline-flex shrink-0 no-underline hover:no-underline focus-visible:rounded-sm"
                aria-label="Bradley Innovations Group home"
              >
                <img
                  src={getCdnUrl("BIG_mark_light.svg")}
                  alt="Bradley Innovations Group"
                  width={160}
                  height={56}
                  className="h-10 w-auto md:h-12"
                  decoding="async"
                />
              </a>

              <nav
                className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-text-main md:justify-end md:gap-x-6"
                aria-label="Footer primary"
              >
                <a href="/about" className="no-underline hover:text-gold hover:no-underline">
                  About
                </a>
                <a href="/companies" className="no-underline hover:text-gold hover:no-underline">
                  Companies
                </a>
                <a href="/leadership" className="no-underline hover:text-gold hover:no-underline">
                  Leadership
                </a>
                <a href="/letters" className="no-underline hover:text-gold hover:no-underline">
                  Letters
                </a>
                <a href="/news" className="no-underline hover:text-gold hover:no-underline">
                  News
                </a>
                <a href="/governance" className="no-underline hover:text-gold hover:no-underline">
                  Governance
                </a>
                <a href="/contact" className="no-underline hover:text-gold hover:no-underline">
                  Contact
                </a>
              </nav>
            </div>

            {/* Bottom row — copyright/legal + secondary */}
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-8">
              <nav
                className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-body"
                aria-label="Footer legal"
              >
                <span>© 2026 Bradley Innovations Group</span>
                <a href="/terms" className="no-underline hover:text-gold hover:no-underline">
                  Terms
                </a>
                <a href="/privacy" className="no-underline hover:text-gold hover:no-underline">
                  Privacy
                </a>
                <a href="/accessibility" className="no-underline hover:text-gold hover:no-underline">
                  Accessibility
                </a>
              </nav>

              <nav
                className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-body md:justify-end"
                aria-label="Footer secondary"
              >
                <a href="/how-we-operate" className="no-underline hover:text-gold hover:no-underline">
                  How We Operate
                </a>
                <a href="/identic-ai" className="no-underline hover:text-gold hover:no-underline">
                  Identic AI
                </a>
                <a
                  href="/investor-information"
                  className="no-underline hover:text-gold hover:no-underline"
                >
                  Investors
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
