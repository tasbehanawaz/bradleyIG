import type { Metadata } from "next";
import GovernanceHero from "@/components/GovernanceHero";
import GovernanceSections from "@/components/GovernanceSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Governance & Responsible AI | Bradley Innovations Group",
  description:
    "Review the principles guiding accountability, capital allocation, responsible AI and long-term ownership at BIG.",
  path: "/governance",
});

export default function Governance() {
  return (
    <div>
      <GovernanceHero />
      <GovernanceSections />
    </div>
  );
}
