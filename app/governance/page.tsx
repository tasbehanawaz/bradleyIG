import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContentCard from "@/components/ContentCard";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Governance & Responsible AI | Bradley Innovations Group",
  description:
    "Review the principles guiding accountability, capital allocation, responsible AI and long-term ownership at BIG.",
  path: "/governance",
});

const iconClass = "h-6 w-6";
const iconProps = {
  "aria-hidden": true as const,
  viewBox: "0 0 24 24",
  fill: "none",
  className: iconClass,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const governancePrinciples: {
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    title: "Long-term orientation",
    description:
      "We build companies to create durable customer and enterprise value, not to satisfy a forced exit timetable.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Accountable ownership",
    description:
      "The parent supplies operating capability and remains responsible for the standards applied across the group.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Disciplined capital allocation",
    description:
      "People and capital are assigned to the opportunity where they can create the greatest risk-adjusted long-term value.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 3 5-6" />
      </svg>
    ),
  },
  {
    title: "Operating-company clarity",
    description:
      "Each business maintains its own product, contracts, responsibilities and legal identity.",
    icon: (
      <svg {...iconProps}>
        <path d="M8 6h13" />
        <path d="M8 12h13" />
        <path d="M8 18h13" />
        <path d="M3 6h.01" />
        <path d="M3 12h.01" />
        <path d="M3 18h.01" />
      </svg>
    ),
  },
  {
    title: "Conflict transparency",
    description:
      "Material related-party relationships and conflicts should be documented, reviewed and managed through approved processes.",
    icon: (
      <svg {...iconProps}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Responsible AI",
    description:
      "Identity, human authority, traceability, security and appropriate escalation are built into how we design and deploy intelligent systems.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const responsibleAiPrinciples: {
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    title: "Identity and accountability",
    description:
      "AI behavior should be linked to a clearly defined owner, role or organizational authority.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    title: "Human authority",
    description:
      "Humans retain decision rights over material, high-risk and exceptional cases.",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.7 12.3 19 4" />
        <path d="M15 4h4v4" />
      </svg>
    ),
  },
  {
    title: "Traceability",
    description:
      "Important recommendations and actions should be attributable and reviewable.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Data stewardship",
    description:
      "Information should be used only for authorized purposes and protected according to its sensitivity.",
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "Security by design",
    description:
      "Access controls, identity boundaries and system protections should be designed into the platform.",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    title: "Continuous review",
    description:
      "AI systems should be monitored and improved as outcomes, risks and regulations evolve.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </svg>
    ),
  },
];

function PrincipleCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <ContentCard className="h-full">
      <div className="card-row flex items-start gap-3">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-gold">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-sans text-gold mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-text-body text-sm text-left">{description}</p>
        </div>
      </div>
    </ContentCard>
  );
}

export default function Governance() {
  return (
    <SecondaryPage
      title="Corporate Governance and Responsible AI"
      path="/governance"
      lede="Long-term ownership requires clear accountability."
      intro={
        <p>
          Bradley Innovations Group is committed to disciplined capital
          allocation, responsible technology, transparent decision rights and
          the separate legal accountability of each operating company. Our
          governance is designed to support speed without weakening control.
        </p>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-sans">Governance Principles</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {governancePrinciples.map((item) => (
            <li key={item.title}>
              <PrincipleCard {...item} />
            </li>
          ))}
        </ul>
      </section>

      <section id="responsible-ai" className="body-stack">
        <h2 className="text-2xl font-sans">Responsible AI Principles</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {responsibleAiPrinciples.map((item) => (
            <li key={item.title}>
              <PrincipleCard {...item} />
            </li>
          ))}
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Documents</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {[
            {
              title: "Privacy Policy",
              href: "/privacy",
              description: "How we handle information submitted through this site.",
            },
            {
              title: "Website Terms of Use",
              href: "/terms",
              description: "Terms governing use of the Bradley Innovations Group website.",
            },
            {
              title: "Responsible AI Principles",
              href: "/governance#responsible-ai",
              description:
                "Identity, human authority, traceability and security in how we design AI.",
            },
          ].map((doc) => (
            <li key={doc.href}>
              <a
                href={doc.href}
                className="content-card group flex h-full flex-col no-underline hover:no-underline rounded-2xl border border-gold-dim/30 bg-white/[0.025] px-5 py-5 md:px-6 md:py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-gold text-[1.05rem] leading-snug font-medium">
                    {doc.title}
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 h-5 w-5 shrink-0 text-text-body/70 transition-colors group-hover:text-gold"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </div>
                <p className="mt-2 text-text-body text-sm text-left">{doc.description}</p>
              </a>
            </li>
          ))}
          <li>
            <div className="content-card flex h-full flex-col rounded-2xl border border-gold-dim/30 bg-white/[0.025] px-5 py-5 md:px-6 md:py-6 opacity-80">
              <div className="flex items-start justify-between gap-3">
                <span className="text-gold text-[1.05rem] leading-snug font-medium">
                  Code of Conduct
                </span>
                <span className="shrink-0 text-xs text-text-body/70 mt-1">
                  to be added soon
                </span>
              </div>
              <p className="mt-2 text-text-body text-sm text-left">
                Group standards for conduct and accountability — coming soon.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </SecondaryPage>
  );
}
