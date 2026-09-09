import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LetterBody from "@/components/LetterBody";
import LetterHero from "@/components/LetterHero";
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
    <div>
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
      <LetterHero />
      <LetterBody />
    </div>
  );
}
