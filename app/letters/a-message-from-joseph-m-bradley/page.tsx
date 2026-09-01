import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SecondaryPage from "@/components/SecondaryPage";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH = "/letters/a-message-from-joseph-m-bradley";
const TITLE = "Building Companies for the Age of Identic AI";
const DESCRIPTION =
  "A message from Joseph M. Bradley on building companies for the age of Identic AI — purpose, operating philosophy and long-term commitment.";

const PUBLISHED = "2026-09-02";

export const metadata: Metadata = pageMetadata({
  title: `${TITLE} | Bradley Innovations Group`,
  description: DESCRIPTION,
  path: PATH,
  ogTitle: TITLE,
});

export default function MessageFromFounder() {
  return (
    <SecondaryPage
      title={TITLE}
      path={PATH}
      published={PUBLISHED}
      breadcrumbs={[{ name: "Letters & Perspectives", path: "/letters" }]}
    >
      <JsonLd
        data={articleSchema({
          title: TITLE,
          description: DESCRIPTION,
          path: PATH,
          datePublished: PUBLISHED,
          dateModified: PUBLISHED,
          authorName: "Joseph M. Bradley",
        })}
      />
      <div className="body-stack">
        <p className="text-text-body">
          Bradley Innovations Group was created around a simple conviction: in
          the age of AI, the most valuable technology companies will be built by
          people who can connect breakthrough technology to real operating
          problems - and then stay long enough to compound what they create.
        </p>

        <p className="text-text-body">
          I have spent more than three decades building and scaling technology
          businesses, from broadband and smart cities to industrial AI and
          sovereign technology platforms. Across AT&T, Cisco, Uptake, NEOM and
          TONOMUS, one lesson has remained constant: capital alone does not
          build enduring companies. Operating capability does. Technology must
          be paired with customers, governance, talent, judgment and the
          discipline to keep improving after the first idea has been proven.
        </p>

        <p className="text-text-body">
          That is why Bradley Innovations Group is not organized as a fund or a
          passive holding company. We are an operating group. We build, own and
          operate businesses through one parent company and one shared team.
          Engineering, enterprise business development, finance, governance,
          market access and executive relationships are applied wherever they
          can create the greatest long-term value.
        </p>

        <p className="text-text-body">
          Our central thesis is Identic AI. Artificial intelligence is moving
          rapidly from systems that create information to systems that take
          action. But action without identity creates an accountability gap. We
          define Identic AI as intelligence bound to a person, with the
          authority and accountability to act. It allows the judgment of an
          experienced leader or expert to be present more consistently without
          severing the human ownership behind the decision.
        </p>

        <p className="text-text-body">
          A few dozen people make many of the decisions that matter most inside
          an enterprise. They cannot be everywhere. AI can be everywhere, but
          someone must still own what it does. We believe the next important
          layer of enterprise technology will scale human judgment while
          preserving authority, responsibility and trust.
        </p>

        <p className="text-text-body">
          Our businesses are being built around that shift. JMB X develops the
          human control layer for enterprise AI. Club 500 by JMB applies
          identity-bound intelligence to high-value real-world relationships and
          experiences. Our work in distributed computing is intended to expand
          the infrastructure on which intelligent applications can run. Each
          business must stand on its own, but all benefit from the same
          operating platform and the same long-term ownership mindset.
        </p>

        <p className="text-text-body">
          We are also deliberately built across the United States and the GCC.
          The team has spent decades developing enterprise relationships in the
          United States and more than a decade building inside the Gulf. BIG is
          designed to move technology, capital, operating experience and market
          access in both directions.
        </p>

        <p className="text-text-body">
          We will measure our progress by the durability of the companies we
          build, the value they create for customers, the quality of the people
          who choose to build with us and the integrity with which we operate.
          We will not measure ourselves by the number of announcements we make
          or by short-term attention.
        </p>

        <p className="text-text-body">
          This website is intentionally simple. It will serve as the official
          source for our companies, leadership, letters, announcements and
          governance principles. As BIG grows, we expect the substance behind
          these links to grow with it.
        </p>

        <p className="text-text-body">
          Thank you for your interest in Bradley Innovations Group.
        </p>

        <div className="pt-4">
          <p className="text-text-main">Joseph M. Bradley</p>
          <p className="text-text-body">Founder and Chief Executive Officer</p>
        </div>
      </div>
    </SecondaryPage>
  );
}
