import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LeadershipHero from "@/components/LeadershipHero";
import LeadershipSections from "@/components/LeadershipSections";
import { getCdnUrl } from "@/lib/cdn";
import { leaders } from "@/lib/leaders";
import { personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leadership | Bradley Innovations Group",
  description:
    "Meet the experienced operating team building and scaling Bradley Innovations Group and its companies across the United States and GCC.",
  path: "/leadership",
});

export default function Leadership() {
  return (
    <div>
      <JsonLd
        data={leaders.map((leader) =>
          personSchema({
            ...leader,
            image: leader.image ? getCdnUrl(leader.image) : undefined,
          })
        )}
      />
      <LeadershipHero />
      <LeadershipSections />
    </div>
  );
}
