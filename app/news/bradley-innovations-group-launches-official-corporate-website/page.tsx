import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SecondaryPage from "@/components/SecondaryPage";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH =
  "/news/bradley-innovations-group-launches-official-corporate-website";
const TITLE = "Bradley Innovations Group Launches Official Corporate Website";
const DESCRIPTION =
  "Bradley Innovations Group today launched its official corporate website as a central source for the group, its companies, leadership, Identic AI thesis and governance.";
const PUBLISHED = "2026-09-02";

export const metadata: Metadata = pageMetadata({
  title: `${TITLE} | Bradley Innovations Group`,
  description: DESCRIPTION,
  path: PATH,
  ogTitle: TITLE,
});

export default function LaunchAnnouncement() {
  return (
    <SecondaryPage
      title={TITLE}
      path={PATH}
      published={PUBLISHED}
      breadcrumbs={[{ name: "News & Announcements", path: "/news" }]}
    >
      <JsonLd
        data={articleSchema({
          title: TITLE,
          description: DESCRIPTION,
          path: PATH,
          datePublished: PUBLISHED,
          dateModified: PUBLISHED,
          authorName: "Bradley Innovations Group",
        })}
      />

      <div className="body-stack text-text-body">
        <p className="text-sm text-text-body/70">
          Dubai, United Arab Emirates,{" "}
          {new Date(`${PUBLISHED}T00:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          — Bradley Innovations Group, a privately held AI-native operating
          group that builds, owns and scales technology businesses across the
          United States and the GCC, today launched its official corporate
          website.
        </p>

        <p>
          The website provides a central source for information about the group,
          its operating companies, leadership, Identic AI thesis, founder
          letters, corporate announcements and governance principles.
        </p>

        <p>
          Bradley Innovations Group is organized around one parent company, one
          operating team and multiple businesses. Rather than operating as a
          fund or passive holding company, BIG directly applies shared
          engineering, enterprise business development, finance, governance,
          market access and executive relationships to the companies it builds
          and owns.
        </p>

        <blockquote className="pull-quote">
          &ldquo;The next generation of valuable AI companies will require more
          than capital and technology,&rdquo; said Joseph M. Bradley, Founder
          and Chief Executive Officer of Bradley Innovations Group. &ldquo;They
          will require experienced operators who can connect intelligence to
          real customer problems, preserve accountability and build for the long
          term. BIG was created to provide that operating platform.&rdquo;
        </blockquote>

        <p>
          The group&apos;s core thesis is Identic AI: intelligence bound to a
          person, with authority and accountability to act. BIG is building
          across enterprise intelligence, intelligent real-world experiences and
          distributed computing infrastructure.
        </p>

        <p>
          The initial website includes information about{" "}
          <a href="https://jmbx.ai" target="_blank" rel="noopener noreferrer">
            JMB X
          </a>
          ,{" "}
          <a href="https://c500.ai/" target="_blank" rel="noopener noreferrer">
            Club 500 by JMB
          </a>{" "}
          and other approved strategic ventures, together with profiles of the
          leadership team and a{" "}
          <a href="/letters/a-message-from-joseph-m-bradley">
            message from Joseph M. Bradley
          </a>{" "}
          outlining the group&apos;s long-term operating philosophy.
        </p>

        <section className="body-stack pt-6 mt-2 border-t border-gold-dim/25">
          <h2 className="text-2xl font-sans">About Bradley Innovations Group</h2>
          <p>
            Bradley Innovations Group is a privately held, AI-native operating
            group that builds, owns and scales technology businesses across the
            United States and the GCC. BIG brings one operating team, shared
            technology, enterprise business development, governance and
            long-term ownership to multiple businesses. Its core thesis is
            Identic AI: intelligence bound to a person, with authority and
            accountability to act.
          </p>
        </section>

        <p className="text-sm">
          Media contact:{" "}
          <a href="mailto:media@bradleyinnovations.group">
            media@bradleyinnovations.group
          </a>
        </p>
      </div>
    </SecondaryPage>
  );
}
