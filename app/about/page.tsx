import type { Metadata } from "next";
import ContentCard from "@/components/ContentCard";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Bradley Innovations Group",
  description:
    "Learn how Bradley Innovations Group builds and operates technology businesses through shared engineering, market access and long-term ownership.",
  path: "/about",
});

const PROVIDES = [
  {
    title: "Shared engineering",
    description:
      "One architecture, one reusable technology core and one engineering organization applied across the portfolio.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "Enterprise business development",
    description:
      "A common commercial engine that opens senior customer relationships in the United States and the GCC.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Finance and capital allocation",
    description:
      "Consolidated planning, governance and disciplined allocation of people and capital.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 3 5-6" />
      </svg>
    ),
  },
  {
    title: "Governance",
    description:
      "Common standards for accountability, security, responsible AI and decision-making.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Market access",
    description:
      "Decades of executive relationships and experience building across enterprise, government and sovereign environments.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Long-term ownership",
    description:
      "No forced fund clock. Businesses are built to compound, with strategic flexibility around partnerships, financing, spin-outs or exits.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
] as const;

const CORE_FACTS = [
  {
    title: "Ownership model",
    description: "Privately held operating group.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M9 14h.01" />
        <path d="M15 14h.01" />
      </svg>
    ),
  },
  {
    title: "Primary markets",
    description: "United States and Gulf Cooperation Council.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Core thesis",
    description:
      "Identic AI - intelligence bound to a person, with authority and accountability to act.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z" />
        <path d="M9 22h6" />
        <path d="M10 18v4" />
        <path d="M14 18v4" />
      </svg>
    ),
  },
  {
    title: "Current focus",
    description:
      "Enterprise intelligence, intelligent membership experiences and distributed computing.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.9 4.9 2.1 2.1" />
        <path d="m17 17 2.1 2.1" />
        <path d="m4.9 19.1 2.1-2.1" />
        <path d="m17 7 2.1-2.1" />
      </svg>
    ),
  },
] as const;

export default function About() {
  return (
    <SecondaryPage
      title="About Bradley Innovations Group"
      path="/about"
      lede="One parent. One operating team. Multiple businesses."
      intro={
        <>
          <p>
            Bradley Innovations Group is a privately held, AI-native operating
            group that builds, owns and scales technology businesses across the
            United States and the GCC.
          </p>
          <p>
            BIG is not a fund and not a passive holding company. We are an
            operating company. The parent owns the long-term platform, brings
            together the leadership team and applies shared capabilities
            directly to the businesses it builds and owns.
          </p>
        </>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-sans">Our Purpose</h2>
        <p className="text-text-body">
          Our purpose is to build enduring companies that scale human
          intelligence.
        </p>
        <p className="text-text-body">
          We focus on opportunities where artificial intelligence, identity,
          enterprise accountability, computing infrastructure and high-value
          human relationships intersect. We seek to create businesses that solve
          important problems, can stand independently and become stronger
          through the shared operating platform of the group.
        </p>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">What BIG Provides</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 list-none p-0 m-0">
          {PROVIDES.map((item) => (
            <li key={item.title}>
              <ContentCard className="h-full">
                <div className="card-row flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-gold">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-sans text-gold mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-text-body text-sm text-left">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ContentCard>
            </li>
          ))}
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Where We Operate</h2>
        <p className="text-text-main font-semibold">United States and GCC</p>
        <p className="text-text-body">
          BIG was designed around a two-way operating corridor. We help bring
          technology and operating capability from the United States into the
          GCC, while connecting Gulf-based opportunities, capital and market
          insight to the United States. This is not a regional sales model. It
          is an operating advantage built into the company.
        </p>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Core Facts</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 list-none p-0 m-0">
          {CORE_FACTS.map((item) => (
            <li key={item.title}>
              <ContentCard className="h-full">
                <div className="card-row flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-gold">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-sans text-gold mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-text-body text-sm text-left">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ContentCard>
            </li>
          ))}
        </ul>
      </section>
    </SecondaryPage>
  );
}
