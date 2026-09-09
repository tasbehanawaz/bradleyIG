const GLOW = "/assets/multiple-business.png";

type FactCard = {
  title: string;
  description: string;
  icon: string;
};

const PROVIDES: FactCard[] = [
  {
    title: "Shared engineering",
    description:
      "One architecture, one reusable technology core and one engineering organization applied across the portfolio.",
    icon: "/assets/shared-engineer.png",
  },
  {
    title: "Enterprise business development",
    description:
      "A common commercial engine that opens senior customer relationships in the United States and the GCC.",
    icon: "/assets/enterprise.png",
  },
  {
    title: "Finance and capital allocation",
    description:
      "Consolidated planning, governance and disciplined allocation of people and capital.",
    icon: "/assets/finance.png",
  },
  {
    title: "Governance",
    description:
      "Common standards for accountability, security, responsible AI and decision-making.",
    icon: "/assets/governance.png",
  },
  {
    title: "Market access",
    description:
      "Decades of executive relationships and experience building across enterprise, government and sovereign environments.",
    icon: "/assets/market.png",
  },
  {
    title: "Long-term ownership",
    description:
      "No forced fund clock. Businesses are built to compound, with strategic flexibility around partnerships, financing, spin-outs or exits.",
    icon: "/assets/ownership.png",
  },
];

const CORE_FACTS: FactCard[] = [
  {
    title: "Ownership model",
    description: "Privately held operating group.",
    icon: "/assets/model.png",
  },
  {
    title: "Primary markets",
    description: "United States and Gulf Cooperation Council.",
    icon: "/assets/primary-markets.png",
  },
  {
    title: "Core thesis",
    description:
      "Identic AI - intelligence bound to a person, with authority and accountability to act.",
    icon: "/assets/thesis.png",
  },
  {
    title: "Current focus",
    description:
      "Enterprise intelligence, intelligent membership experiences and distributed computing.",
    icon: "/assets/focus.png",
  },
];

function CardIcon({ src }: { src: string }) {
  return (
    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-white">
      <img
        src={src}
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
        decoding="async"
      />
    </span>
  );
}

function GlowGrid({
  items,
  columns,
}: {
  items: FactCard[];
  columns: "3" | "2";
}) {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-12 md:px-10 lg:px-14">
      <div
        className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
        style={{ backgroundImage: `url(${GLOW})` }}
      >
        <ul
          className={`grid list-none grid-cols-1 gap-4 p-0 px-4 m-0 md:gap-5 md:px-6 ${
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
                  <CardIcon src={item.icon} />
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

function SectionHeading({
  children,
  subtext,
  align = "left",
}: {
  children: string;
  subtext?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <h2
        className={`section-heading text-3xl font-normal leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-[3.35rem] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {children}
      </h2>
      {subtext ? (
        <p
          className={`mt-4 text-sm leading-relaxed text-white md:text-[0.95rem] ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"
          }`}
        >
          {subtext}
        </p>
      ) : null}
    </div>
  );
}

export default function AboutSections() {
  return (
    <div className="about-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <SectionHeading subtext="We focus on opportunities where artificial intelligence, identity, enterprise accountability, computing infrastructure and high-value human relationships intersect.">
          What BIG Provides
        </SectionHeading>
        <GlowGrid items={PROVIDES} columns="3" />
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading
          align="center"
          subtext="BIG was designed around a two-way operating corridor."
        >
          Where We Operate
        </SectionHeading>
        <div className="mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-12 md:px-10 lg:px-14">
          <div className="flex justify-center gap-4 md:gap-6">
            <div
              className="flex w-[9.5rem] flex-col items-center gap-3 px-6 py-6 md:w-44 md:py-8"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)" }}
            >
              <img
                src="/assets/USA.jpg"
                alt=""
                width={72}
                height={72}
                className="h-16 w-16 rounded-full object-cover md:h-[4.5rem] md:w-[4.5rem]"
                decoding="async"
              />
              <p className="text-sm text-white">United States</p>
            </div>
            <div
              className="flex w-[9.5rem] flex-col items-center gap-3 px-6 py-6 md:w-44 md:py-8"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)" }}
            >
              <img
                src="/assets/UAE.jpg"
                alt=""
                width={72}
                height={72}
                className="h-16 w-16 rounded-full object-cover md:h-[4.5rem] md:w-[4.5rem]"
                decoding="async"
              />
              <p className="text-sm text-white">GCC</p>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-relaxed text-white md:text-[0.95rem]">
            We help bring technology and operating capability from the United
            States into the GCC, while connecting Gulf-based opportunities,
            capital and market insight to the United States. This is not a
            regional sales model. It is an operating advantage built into the
            company.
          </p>
        </div>
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>Core Facts</SectionHeading>
        <GlowGrid items={CORE_FACTS} columns="2" />
      </section>
    </div>
  );
}
