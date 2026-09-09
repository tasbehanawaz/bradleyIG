import type { Metadata } from "next";
import CompaniesHero from "@/components/CompaniesHero";
import CompaniesSections from "@/components/CompaniesSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Companies | Bradley Innovations Group",
  description:
    "Explore the operating companies and strategic ventures built and supported by Bradley Innovations Group.",
  path: "/companies",
});

export default function Companies() {
  return (
    <div>
      <CompaniesHero />
      <CompaniesSections />
    </div>
  );
}
