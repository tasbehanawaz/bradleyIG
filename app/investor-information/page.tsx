import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Private Investor Information | Bradley Innovations Group",
  description:
    "Information for qualified institutional and strategic investors regarding Bradley Innovations Group.",
  path: "/investor-information",
});

export default function InvestorInformation() {
  return (
    <SecondaryPage
      title="Private Investor Information"
      path="/investor-information"
      lede="Bradley Innovations Group is privately held."
      intro={
        <>
          <p>
            The company does not publish public financial statements, securities
            filings or detailed investor materials on this website. Qualified
            institutional, family-office and strategic investors may request
            access to current corporate materials through a controlled data
            room. Access is subject to company approval, identity verification
            and applicable confidentiality requirements.
          </p>
          <p className="text-sm">
            Nothing on this website constitutes an offer to sell, or a
            solicitation of an offer to buy, any security. Any offering may be
            made only through definitive documents and in accordance with
            applicable law.
          </p>
        </>
      }
    >
      <div className="flex justify-center">
        <a
          href="mailto:investors@bradleyinnovations.group?subject=Request%20Investor%20Information"
          className="site-cta inline-flex items-center justify-center rounded-lg border border-gold bg-transparent px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Request Investor Information
        </a>
      </div>
    </SecondaryPage>
  );
}
