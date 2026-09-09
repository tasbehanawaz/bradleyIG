import type { ReactNode } from "react";
import { getCdnUrl } from "@/lib/cdn";

const GLOW = "/assets/multiple-business.png";

const iconClass = "h-5 w-5";
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

type Principle = {
  title: string;
  description: string;
  icon: ReactNode;
};

const GOVERNANCE: Principle[] = [
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

const RESPONSIBLE_AI: Principle[] = [
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

const DOCUMENTS = [
  {
    title: "Privacy Policy",
    href: getCdnUrl("documents/privacy-policy.pdf"),
    description: "How we handle information submitted through this site.",
  },
  {
    title: "Website Terms of Use",
    href: getCdnUrl("documents/website-terms-of-use.pdf"),
    description: "Terms governing use of the Bradley Innovations Group website.",
  },
  {
    title: "Responsible AI Principles",
    href: getCdnUrl("documents/responsible-ai-principles.pdf"),
    description:
      "Identity, human authority, traceability and security in how we design AI.",
  },
  {
    title: "Code of Conduct",
    href: getCdnUrl("documents/code-of-conduct.pdf"),
    description: "Group standards for conduct and accountability.",
  },
];

const cardShadow = { boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)" };

function CardIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-white text-black">
      {children}
    </span>
  );
}

function GlowGrid({
  items,
  columns,
}: {
  items: Principle[];
  columns: "3" | "2";
}) {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-12 md:px-10 lg:px-14">
      <div
        className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
        style={{ backgroundImage: `url(${GLOW})` }}
      >
        <ul
          className={`m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:gap-5 md:px-6 ${
            columns === "3" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {items.map((item) => (
            <li key={item.title}>
              <article
                className="flex h-full flex-col bg-black/55 p-5 md:p-6"
                style={cardShadow}
              >
                <div className="flex items-center gap-3">
                  <CardIcon>{item.icon}</CardIcon>
                  <h3 className="text-lg font-normal leading-snug tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-white/50 transition-colors group-hover:text-white"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14">
      <h2 className="section-heading text-3xl font-normal leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-[3.35rem]">
        {children}
      </h2>
    </div>
  );
}

export default function GovernanceSections() {
  return (
    <div className="governance-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <SectionHeading>Governance Principles</SectionHeading>
        <GlowGrid items={GOVERNANCE} columns="3" />
      </section>

      <section id="responsible-ai" className="pt-16 md:pt-24">
        <SectionHeading>Responsible AI Principles</SectionHeading>
        <GlowGrid items={RESPONSIBLE_AI} columns="3" />
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>Documents</SectionHeading>
        <div className="relative mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-12 md:px-10 lg:px-14">
          <div
            className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
            style={{ backgroundImage: `url(${GLOW})` }}
          >
            <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:grid-cols-2 md:gap-5 md:px-6">
              {DOCUMENTS.map((doc) => (
                <li key={doc.href}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="feed-card group flex h-full flex-col bg-black/55 p-5 no-underline md:p-6"
                    style={cardShadow}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-normal leading-snug tracking-[-0.01em]">
                        {doc.title}
                      </h3>
                      <ArrowUpRight />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      {doc.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
