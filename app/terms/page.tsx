import type { Metadata } from "next";
import TermsHero from "@/components/TermsHero";
import TermsSections from "@/components/TermsSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | Bradley Innovations Group",
  description:
    "Website terms of use and legal disclaimers for Bradley Innovations Group.",
  path: "/terms",
});

export default function Terms() {
  return (
    <div>
      <TermsHero />
      <TermsSections />
    </div>
  );
}
