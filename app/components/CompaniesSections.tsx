const GLOW = "/assets/multiple-business.png";

const companies = [
  {
    name: "JMB X",
    relationship: "a Bradley Innovations Group company",
    tagline: "The human control layer for enterprise AI.",
    paragraphs: [
      "JMB X develops Enterprise Intelligence Infrastructure, an identity-bound platform that helps organizations capture, govern and scale the judgment of their best people. The platform connects AI decisions to named human owners, persistent institutional memory, clear authority boundaries, human escalation and auditable decision records.",
      "JMB X is built for enterprises that want the speed and reach of AI without giving up accountability.",
    ],
    cta: "Visit JMB X",
    href: "https://jmbx.ai",
  },
  {
    name: "Club 500 by JMB",
    relationship: "a Bradley Innovations Group company",
    tagline: "Intelligent experiences for automotive enthusiasts.",
    paragraphs: [
      "Club 500 is a private automotive membership and connection platform built around extraordinary vehicles, curated experiences and high-value relationships. Each member is supported by an Identic AI Delegate that helps discover opportunities, make relevant introductions and turn shared interests into meaningful connections.",
      "The platform brings together cars, people and intelligent experiences in one membership model.",
    ],
    cta: "Visit Club 500 by JMB",
    href: "https://c500.ai/",
  },
  {
    name: "Acurast AI Solutions",
    relationship: "a strategic venture",
    tagline: "Enterprise access to distributed compute.",
    paragraphs: [
      "Acurast AI Solutions is developing the enterprise commercialization layer for a live distributed computing network that transforms existing devices into secure, metered computing resources. Bradley Innovations Group supports commercial strategy, enterprise go-to-market and market access.",
      "The objective is to make distributed compute practical for enterprise, telecommunications and public-sector use cases.",
    ],
    cta: "Visit Acurast",
    href: "https://acurast.com/",
  },
];

function VisitCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="home-read-more inline-flex h-8 w-fit shrink-0 items-center gap-2 bg-white py-0.5 pl-3 pr-0.5 no-underline hover:no-underline"
    >
      <span className="text-xs font-semibold tracking-[0.02em] text-black">
        {label}
      </span>
      <span
        className="flex h-6 w-6 items-center justify-center bg-black text-white"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 12 12"
          fill="none"
          className="h-2.5 w-2.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 2l4 4-4 4" />
        </svg>
      </span>
    </a>
  );
}

export default function CompaniesSections() {
  return (
    <div className="companies-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <div className="relative mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14">
          <div
            className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
            style={{ backgroundImage: `url(${GLOW})` }}
          >
            <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:gap-5 md:px-6 lg:grid-cols-3">
              {companies.map((company) => (
                <li key={company.name}>
                  <article
                    className="flex h-full flex-col bg-black/55 p-5 md:p-6"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)",
                    }}
                  >
                    <h2 className="text-xl font-normal leading-snug tracking-[-0.01em] md:text-2xl">
                      {company.name}
                    </h2>
                    <p className="mt-1 text-sm text-white/70">
                      {company.relationship}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white md:text-[0.95rem]">
                      {company.tagline}
                    </p>
                    <div className="mt-4 body-stack text-sm leading-relaxed text-white/85">
                      {company.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-auto pt-6">
                      <VisitCta href={company.href} label={company.cta} />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
