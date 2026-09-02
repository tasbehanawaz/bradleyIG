import type { Metadata } from "next";
import ContentCard from "@/components/ContentCard";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Companies | Bradley Innovations Group",
  description:
    "Explore the operating companies and strategic ventures built and supported by Bradley Innovations Group.",
  path: "/companies",
});

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
    href: "https://jmbx.ai" as string | null,
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
    href: "https://c500.ai/" as string | null,
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
    href: "https://acurast.com/" as string | null,
  },
];

export default function Companies() {
  return (
    <SecondaryPage
      title="Our Companies"
      path="/companies"
      lede="BIG builds businesses that can stand on their own and become stronger together."
      intro={
        <p>
          Each company owns its product, customers and commercial future. The
          parent supplies shared technology, enterprise business development,
          finance, governance and market access. This structure allows each
          business to move quickly while benefiting from capabilities it would
          be expensive and slow to build independently.
        </p>
      }
    >
      <div className="space-y-6">
        {companies.map((company) => (
          <ContentCard key={company.name}>
            <div className="body-stack">
              <div>
                <h2 className="text-2xl font-sans text-gold mb-1 !text-left">
                  {company.name}
                </h2>
                <p className="text-text-body text-sm mb-3">
                  {company.relationship}
                </p>
                <p className="text-gold">{company.tagline}</p>
              </div>
              {company.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-text-body">
                  {paragraph}
                </p>
              ))}
              {company.href ? (
                <p>
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-[0.2em]"
                  >
                    {company.cta}
                  </a>
                </p>
              ) : null}
            </div>
          </ContentCard>
        ))}
      </div>
    </SecondaryPage>
  );
}
