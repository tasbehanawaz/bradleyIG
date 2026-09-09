import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutSections from "@/components/AboutSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Bradley Innovations Group",
  description:
    "Learn how Bradley Innovations Group builds and operates technology businesses through shared engineering, market access and long-term ownership.",
  path: "/about",
});

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutSections />
    </div>
  );
}
