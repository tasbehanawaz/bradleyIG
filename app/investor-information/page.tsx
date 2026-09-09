import type { Metadata } from "next";
import InvestorHero from "@/components/InvestorHero";
import InvestorSections from "@/components/InvestorSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Private Investor Information | Bradley Innovations Group",
  description:
    "Information for qualified institutional and strategic investors regarding Bradley Innovations Group.",
  path: "/investor-information",
});

export default function InvestorInformation() {
  return (
    <div>
      <InvestorHero />
      <InvestorSections />
    </div>
  );
}
