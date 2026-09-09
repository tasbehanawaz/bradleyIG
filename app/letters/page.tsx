import type { Metadata } from "next";
import LettersHero from "@/components/LettersHero";
import LettersSections from "@/components/LettersSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Letters & Perspectives | Bradley Innovations Group",
  description:
    "Read founder letters and perspectives on Identic AI, enterprise intelligence, company building and long-term ownership.",
  path: "/letters",
});

export default function Letters() {
  return (
    <div>
      <LettersHero />
      <LettersSections />
    </div>
  );
}
