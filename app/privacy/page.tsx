import type { Metadata } from "next";
import PrivacyHero from "@/components/PrivacyHero";
import PrivacySections from "@/components/PrivacySections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Bradley Innovations Group",
  description:
    "Privacy policy outline for Bradley Innovations Group website visitors and inquiry contacts.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <div>
      <PrivacyHero />
      <PrivacySections />
    </div>
  );
}
