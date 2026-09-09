import HomeBusinesses from "@/components/HomeBusinesses";
import HomeHero from "@/components/HomeHero";
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
    <div>
      <JsonLd data={organizationSchema()} />
      <HomeHero />
      <HomeBusinesses links={links} />

      {/*
      <div className="container-page py-12 md:py-20">
        <section className="pt-12 md:pt-16 border-t border-gold-dim/30">
          <h2 className="text-base font-normal mb-3">
            Current businesses and strategic ventures
          </h2>
          <p className="text-text-body">
            JMB X&nbsp;&nbsp;|&nbsp;&nbsp;Club 500 by JMB&nbsp;&nbsp;|&nbsp;&nbsp;Acurast AI Solutions
          </p>
        </section>
      </div>
      */}
    </div>
  );
}
