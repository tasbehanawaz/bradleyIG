import type { ReactNode } from "react";
import { GlowBand, OverlayCard, SectionHeading } from "@/components/PageSection";

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

const coverageItems: { title: string; icon: ReactNode }[] = [
  {
    title: "Company identity and data-controller contact details",
    icon: (
      <svg {...iconProps}>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Information collected through contact forms and analytics",
    icon: (
      <svg {...iconProps}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </svg>
    ),
  },
  {
    title: "Purpose and legal basis for processing",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l2.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Retention periods",
    icon: (
      <svg {...iconProps}>
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Service providers and cross-border data transfers",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Cookies and tracking, if any",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="8.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="10" cy="14.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title:
      "User rights under applicable United States, UAE and other relevant laws",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Security and breach contact process",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
];

export default function PrivacySections() {
  return (
    <div className="privacy-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <SectionHeading>Minimum coverage</SectionHeading>
        <GlowBand>
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:grid-cols-2 md:gap-5 md:px-6 lg:grid-cols-3">
            {coverageItems.map((item) => (
              <li key={item.title}>
                <OverlayCard className="flex h-full items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-white text-black">
                    {item.icon}
                  </span>
                  <h3 className="text-base font-normal leading-snug tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </OverlayCard>
              </li>
            ))}
          </ul>
        </GlowBand>
      </section>

      <p className="mx-auto mt-16 max-w-4xl px-5 text-center text-sm leading-relaxed text-white md:mt-20 md:px-10 md:text-[0.95rem] lg:px-14">
        For privacy questions, contact{" "}
        <a
          href="mailto:info@bradleyinnovations.group"
          className="text-white underline decoration-white/40 underline-offset-[0.2em] hover:text-white"
        >
          info@bradleyinnovations.group
        </a>
        .
      </p>
    </div>
  );
}
