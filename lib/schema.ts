import { SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_LEGAL_NAME,
    legalName: SITE_LEGAL_NAME,
    alternateName: "BIG",
    url: SITE_URL,
    logo: `${SITE_URL}/og?title=${encodeURIComponent(SITE_NAME)}`,
    description:
      "Bradley Innovations Group is a privately held, AI-native operating group that builds, owns and scales technology businesses across the United States and the GCC.",
    foundingLocation: {
      "@type": "Place",
      name: "United States",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "AdministrativeArea", name: "Gulf Cooperation Council" },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "332 South Michigan Ave STE 121 2170",
        addressLocality: "Chicago",
        addressRegion: "IL",
        postalCode: "60604",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Damac Park Towers, Tower B Unit 301, DIFC",
        addressLocality: "Dubai",
        postalCode: "75505",
        addressCountry: "AE",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "general inquiries",
        email: "info@bradleyinnovations.group",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "partnerships",
        email: "partnerships@bradleyinnovations.group",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "investor relations",
        email: "investors@bradleyinnovations.group",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "media",
        email: "media@bradleyinnovations.group",
        availableLanguage: ["English"],
      },
    ],
    sameAs: ["https://jmbx.ai"],
  };
}

export function personSchema(input: {
  name: string;
  slug: string;
  role: string;
  bio: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/leadership#${input.slug}`,
    name: input.name,
    jobTitle: input.role,
    description: input.bio,
    ...(input.image ? { image: input.image } : {}),
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
    url: `${SITE_URL}/leadership#${input.slug}`,
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName,
      url: `${SITE_URL}/leadership#joseph-m-bradley`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${input.path}`,
    },
    url: `${SITE_URL}${input.path}`,
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
