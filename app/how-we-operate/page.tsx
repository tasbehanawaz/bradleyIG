import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContentCard from "@/components/ContentCard";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Operate | Bradley Innovations Group",
  description:
    "One operating team provides shared engineering, commercial development, governance and market access across the BIG portfolio.",
  path: "/how-we-operate",
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

const processSteps: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Identify",
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
    title: "Evaluate",
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
    title: "Own",
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
    title: "Apply resources",
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
    title: "Generate pipeline",
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
    title: "Convert",
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
    title: "Compound",
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

const capabilities: { title: string; description: string; icon: ReactNode }[] = [
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

function CapabilityCard({
  title,
  description,
  icon,
  step,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  step?: number;
}) {
  return (
    <ContentCard className="h-full">
      <div className="card-row flex items-start gap-3">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-gold">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-sans text-gold mb-2 leading-snug">
            {step != null ? `${step}. ${title}` : title}
          </h3>
          <p className="text-text-body text-sm text-left">{description}</p>
        </div>
      </div>
    </ContentCard>
  );
}

export default function HowWeOperate() {
  return (
    <SecondaryPage
      title="How We Operate"
      path="/how-we-operate"
      lede="One core. One operating team. Assigned where it is needed."
      intro={
        <p>
          BIG can operate multiple businesses because they share the
          capabilities that matter most: engineering, commercial development,
          finance, governance, market access and executive relationships.
          Running three companies does not require building three separate
          versions of the same operating infrastructure.
        </p>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-sans">The Seven-Step Process</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <CapabilityCard
                title={step.title}
                description={step.description}
                icon={step.icon}
                step={index + 1}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Shared Capabilities</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {capabilities.map((item) => (
            <li key={item.title}>
              <CapabilityCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Our Operating Advantage</h2>
        <p className="text-text-body">
          We run our own companies on the same Identic AI principles and
          technology that we bring to customers. The operating group is
          therefore both the builder and a continuous proving environment for
          the platform.
        </p>
      </section>
    </SecondaryPage>
  );
}
