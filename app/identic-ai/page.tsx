import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContentCard from "@/components/ContentCard";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Identic AI | Bradley Innovations Group",
  description:
    "Identic AI is intelligence bound to a person, with authority and accountability to act. Learn the core thesis behind BIG.",
  path: "/identic-ai",
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

const differenceItems: { title: string; description: string; icon: ReactNode }[] =
  [
    {
      title: "Identity",
      description:
        "The intelligence is bound to a named human owner rather than an anonymous assistant.",
      icon: (
        <svg {...iconProps}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20a8 8 0 0 1 16 0" />
        </svg>
      ),
    },
    {
      title: "Judgment",
      description:
        "It reflects how a person evaluates trade-offs, risk, context and exceptions - not only what that person knows.",
      icon: (
        <svg {...iconProps}>
          <path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z" />
          <path d="M9 22h6" />
          <path d="M10 18v4" />
          <path d="M14 18v4" />
        </svg>
      ),
    },
    {
      title: "Continuity",
      description: "Memory and learning remain scoped to the identity over time.",
      icon: (
        <svg {...iconProps}>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 3v6h-6" />
        </svg>
      ),
    },
    {
      title: "Authority",
      description:
        "The system understands what it may recommend, what it may do and when it must escalate.",
      icon: (
        <svg {...iconProps}>
          <circle cx="8" cy="15" r="4" />
          <path d="M10.7 12.3 19 4" />
          <path d="M15 4h4v4" />
        </svg>
      ),
    },
    {
      title: "Accountability",
      description:
        "Actions and recommendations remain attributable, reviewable and governed.",
      icon: (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

const progressionItems: {
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    title: "Narrow AI",
    description: "Performs a defined task.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Generative AI",
    description: "Creates content from learned patterns.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v18" />
        <path d="M5 8h14" />
        <path d="M7 12h10" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Agentic AI",
    description: "Takes action toward a goal.",
    icon: (
      <svg {...iconProps}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "Identic AI",
    description:
      "Acts for someone and remains bound to that person's judgment, authority and accountability.",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2 20a7 7 0 0 1 14 0" />
        <path d="M16 11h6" />
        <path d="M19 8v6" />
      </svg>
    ),
  },
];

const buildsItems: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Compute",
    description: "The infrastructure that makes intelligence available.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Control",
    description:
      "The enterprise layer that governs intelligence, decisions and accountability.",
    icon: (
      <svg {...iconProps}>
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
  {
    title: "Contact",
    description:
      "The applications and experiences through which identity-bound intelligence creates real-world value.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </svg>
    ),
  },
];

function FeatureCard({
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

export default function IdenticAI() {
  return (
    <SecondaryPage
      title="Identic AI"
      path="/identic-ai"
      lede="Intelligence should never become anonymous."
      intro={
        <p>
          Identic AI is intelligence bound to a person, with authority and
          accountability to act.
        </p>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-sans">The Problem</h2>
        <p className="text-text-body">
          AI is moving from systems that answer questions to systems that make
          recommendations, coordinate work and take action. As that capability
          spreads, enterprises face a new problem: intelligence can scale faster
          than human ownership of the decisions it produces.
        </p>
        <p className="text-text-body">
          A few dozen leaders and experts often make the decisions that matter
          most. They cannot be everywhere. Generic AI can be everywhere, but it
          does not naturally carry a person&apos;s judgment, authority,
          reputation or accountability.
        </p>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">The Identic AI Difference</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {differenceItems.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} />
            </li>
          ))}
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">The Category Progression</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {progressionItems.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} />
            </li>
          ))}
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Where BIG Builds</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {buildsItems.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p className="pull-quote">
          A few dozen people make every decision that matters. They cannot be
          everywhere. Identic AI allows their judgment to be present without
          making accountability disappear.
        </p>
      </section>
    </SecondaryPage>
  );
}
