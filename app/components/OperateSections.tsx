import type { ReactNode } from "react";

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

type OperateCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

const PROCESS: OperateCard[] = [
  {
    title: "1. Identify",
    description:
      "Find an important problem where the group has a differentiated insight, technology advantage or market access.",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "2. Evaluate",
    description:
      "Test the customer problem, technical foundation, commercial model, ownership path and strategic fit.",
    icon: (
      <svg {...iconProps}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "3. Own",
    description:
      "Create, acquire or partner into a structure that gives BIG meaningful long-term participation and operating influence.",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.7 12.3 19 4" />
        <path d="M15 4h4v4" />
      </svg>
    ),
  },
  {
    title: "4. Apply resources",
    description:
      "Deploy the shared engineering team, leadership, governance, finance and market-development platform.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="m4.9 4.9 2.8 2.8" />
        <path d="m16.3 16.3 2.8 2.8" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="m4.9 19.1 2.8-2.8" />
        <path d="m16.3 7.7 2.8-2.8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "5. Generate pipeline",
    description:
      "Use enterprise relationships, thought leadership, partnerships and market access to create named opportunities.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 4h18" />
        <path d="M6 4v4l5 5v7l2-1v-6l5-5V4" />
      </svg>
    ),
  },
  {
    title: "6. Convert",
    description:
      "Turn opportunities into pilots, contracts, recurring revenue and repeatable commercial execution.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
  {
    title: "7. Compound",
    description:
      "Reinvest talent, intellectual property, cash flow and learning into the next stage of the business and the next opportunity.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 3 5-6" />
      </svg>
    ),
  },
];

const CAPABILITIES: OperateCard[] = [
  {
    title: "Engineering",
    description:
      "Reusable architecture, platform components, integration and delivery.",
    icon: (
      <svg {...iconProps}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "Commercial development",
    description:
      "One enterprise engine serving the company best suited to each customer problem.",
    icon: (
      <svg {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Finance",
    description:
      "One planning, reporting and capital-allocation discipline across the group.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Governance",
    description:
      "Common standards for security, responsible AI, accountability and operating control.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Brand and market access",
    description:
      "A shared category, reputation and route into the United States and GCC.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Executive relationships",
    description:
      "Customer and partner access built over decades, available to a new business from its first day.",
    icon: (
      <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function CardIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-white text-black">
      {children}
    </span>
  );
}

function GlowGrid({ items }: { items: OperateCard[] }) {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-12 md:px-10 lg:px-14">
      <div
        className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
        style={{ backgroundImage: `url(${GLOW})` }}
      >
        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:grid-cols-2 md:gap-5 md:px-6 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <article
                className="flex h-full flex-col bg-black/55 p-5 md:p-6"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)",
                }}
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

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14">
      <h2 className="section-heading text-3xl font-normal leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-[3.35rem]">
        {children}
      </h2>
    </div>
  );
}

export default function OperateSections() {
  return (
    <div className="operate-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <SectionHeading>The Seven-Step Process</SectionHeading>
        <GlowGrid items={PROCESS} />
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>Shared Capabilities</SectionHeading>
        <GlowGrid items={CAPABILITIES} />
      </section>
    </div>
  );
}
