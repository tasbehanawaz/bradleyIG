import type { Metadata } from "next";
import AccessibilityHero from "@/components/AccessibilityHero";
import AccessibilitySections from "@/components/AccessibilitySections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility | Bradley Innovations Group",
  description:
    "Accessibility information for the Bradley Innovations Group website, including WCAG alignment and how to report barriers.",
  path: "/accessibility",
});

export default function Accessibility() {
  return (
    <div>
      <AccessibilityHero />
      <AccessibilitySections />
    </div>
  );
}
