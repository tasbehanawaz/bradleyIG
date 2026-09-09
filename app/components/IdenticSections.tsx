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

type IdenticCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

const DIFFERENCE: IdenticCard[] = [
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

const PROGRESSION: IdenticCard[] = [
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

const BUILDS: IdenticCard[] = [
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
  items: IdenticCard[];
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

export default function IdenticSections() {
  return (
    <div className="identic-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <SectionHeading>The Identic AI Difference</SectionHeading>
        <GlowGrid items={DIFFERENCE} columns="3" />
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>The Category Progression</SectionHeading>
        <GlowGrid items={PROGRESSION} columns="2" />
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>Where BIG Builds</SectionHeading>
        <GlowGrid items={BUILDS} columns="3" />
      </section>

      <p className="mx-auto mt-16 max-w-4xl px-5 text-center font-serif text-lg leading-relaxed text-white md:mt-24 md:px-10 md:text-xl lg:px-14">
        A few dozen people make every decision that matters. They cannot be
        everywhere. Identic AI allows their judgment to be present without
        making accountability disappear.
      </p>
    </div>
  );
}
