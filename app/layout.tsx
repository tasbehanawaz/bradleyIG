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
    <html lang="en">
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
        <Navbar />

        <main className="pt-24 md:pt-28">
          {children}
        </main>

        <footer style={{ borderTopColor: 'rgba(184, 150, 46, 0.3)' }} className="border-t mt-20 py-12">
          <div className="container-prose flex flex-col gap-5">
            <div>
              <p className="font-serif text-lg text-text-main">
                Bradley Innovations Group
              </p>
              <p className="mt-1 text-sm text-gold">
                One parent. One operating team. Multiple businesses.
              </p>
            </div>

            <p style={{ color: 'var(--color-text-body)' }} className="text-sm">
              Copyright © 2026 Bradley Innovations Group. All rights reserved.
            </p>

            <nav className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-text-body" aria-label="Footer primary">
              <a href="/about">About</a>
              <span aria-hidden="true">|</span>
              <a href="/companies">Companies</a>
              <span aria-hidden="true">|</span>
              <a href="/leadership">Leadership</a>
              <span aria-hidden="true">|</span>
              <a href="/letters">Letters</a>
              <span aria-hidden="true">|</span>
              <a href="/news">News</a>
              <span aria-hidden="true">|</span>
              <a href="/governance">Governance</a>
              <span aria-hidden="true">|</span>
              <a href="/contact">Contact</a>
            </nav>

            <nav className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-text-body" aria-label="Footer legal">
              <a href="/privacy">Privacy</a>
              <span aria-hidden="true">|</span>
              <a href="/terms">Terms</a>
              <span aria-hidden="true">|</span>
              <a href="/accessibility">Accessibility</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
