import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** Optional Open Graph title override */
  ogTitle?: string;
  /** Optional Open Graph description override */
  ogDescription?: string;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;
  const ogImage = `${SITE_URL}/og?title=${encodeURIComponent(socialTitle)}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true },
  };
}
