import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bradley Innovations Group | AI-Native Operating Group",
  description:
    "Bradley Innovations Group builds, owns and scales AI-native businesses across the United States and GCC through one operating team.",
  path: "/",
});

export default function Home() {
  const links = [
    {
      title: "A Message from Joseph M. Bradley",
      description: "Our purpose, operating philosophy and long-term commitment.",
      href: "/letters/a-message-from-joseph-m-bradley",
      updated: "2026-09-02",
    },
    {
      title: "About Bradley Innovations Group",
      description: "What BIG is, where we operate and how we create value.",
      href: "/about",
    },
    {
      title: "Our Companies",
      description: "The businesses and strategic ventures built and operated through BIG.",
      href: "/companies",
    },
    {
      title: "How We Operate",
      description: "One operating team, one shared platform and a repeatable process.",
      href: "/how-we-operate",
    },
    {
      title: "Identic AI",
      description: "Intelligence bound to a person, with authority and accountability to act.",
      href: "/identic-ai",
    },
    {
      title: "Leadership",
      description: "The team building and scaling the group.",
      href: "/leadership",
    },
    {
      title: "Letters & Perspectives",
      description: "Founder letters, books and selected thinking.",
      href: "/letters",
      updated: "2026-09-02",
    },
    {
      title: "News & Announcements",
      description: "Official company and portfolio updates.",
      href: "/news",
      updated: "2026-09-02",
    },
    {
      title: "Corporate Governance",
      description: "The principles that guide ownership, capital allocation and responsible AI.",
      href: "/governance",
      updated: "2026-09-02",
    },
    {
      title: "Investor Information",
      description: "Information for qualified institutional and strategic investors.",
      href: "/investor-information",
    },
    {
      title: "Contact",
      description: "Partnership, media, investor and general inquiries.",
      href: "/contact",
    },
  ];

  return (
    <div className="container-prose py-12 md:py-20">
      <JsonLd data={organizationSchema()} />
      {/* Header — centered wordmark, locations, thin rule, official label */}
      <header className="mb-12 md:mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-sans text-gold">
          Bradley Innovations Group
        </h1>
        <p className="mt-3 text-text-body">
          United States&nbsp;&nbsp;|&nbsp;&nbsp;Dubai, United Arab Emirates
        </p>
        <div
          className="mx-auto my-5 h-px w-16 border-0 bg-gold-dim/50"
          role="presentation"
        />
        <p className="text-text-body text-sm">Official Corporate Website</p>
      </header>

      {/* Positioning */}
      <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gold-dim/30">
        <p className="text-gold-gradient text-lg md:text-xl font-sans mb-4">
          One parent. One operating team. Multiple businesses.
        </p>
        <p className="text-text-body">
          Bradley Innovations Group is a privately held, AI-native operating group that builds, owns and scales technology businesses across the United States and the GCC. We combine long-term ownership with shared engineering, enterprise business development, governance, market access and executive relationships.
        </p>
      </section>

      {/* Link index — card grid */}
      <section className="mb-12 md:mb-16 home-index" aria-label="Site index">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="home-index-card group flex h-full flex-col no-underline hover:no-underline rounded-2xl border border-gold-dim/30 bg-white/[0.025] px-5 py-5 md:px-6 md:py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-text-main text-[1.05rem] leading-snug group-hover:text-gold transition-colors">
                    {link.title}
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
                <p className="mt-2 text-text-body text-sm no-underline">
                  {link.description}
                </p>
                {link.updated ? (
                  <p className="mt-auto pt-3 text-text-body/70 text-xs no-underline">
                    Updated{" "}
                    {new Date(link.updated + "T00:00:00").toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </p>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Company strip */}
      <section className="pt-12 md:pt-16 border-t border-gold-dim/30">
        <h2 className="text-gold text-base font-normal mb-3">
          Current businesses and strategic ventures
        </h2>
        <p className="text-text-body">
          JMB X&nbsp;&nbsp;|&nbsp;&nbsp;Club 500 by JMB&nbsp;&nbsp;|&nbsp;&nbsp;Acurast AI Solutions
        </p>
      </section>
    </div>
  );
}
