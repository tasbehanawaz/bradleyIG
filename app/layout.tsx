import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import SiteFooter from "@/components/SiteFooter";
import { getCdnUrl } from "@/lib/cdn";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

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
    <html lang="en" data-scroll-behavior="smooth" className={ptSerif.variable}>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-reveal')`,
          }}
        />
      </head>
      <body className="bg-bg text-text-main font-serif antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />
        <ScrollReveal />

        <main
          id="main-content"
          tabIndex={-1}
          className="pt-20 md:pt-24 outline-none has-[.home-hero]:pt-0 has-[.page-hero]:pt-0"
        >
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
