import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | Bradley Innovations Group",
  description:
    "Website terms of use and legal disclaimers for Bradley Innovations Group.",
  path: "/terms",
});

export default function Terms() {
  return (
    <SecondaryPage
      title="Terms of Use"
      path="/terms"
      // intro={
      //   // <p className="text-sm">
      //   //   Draft for legal review. Counsel must approve before treating this as
      //   //   final.
      //   // </p>
      // }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-sans">Disclaimer</h2>
        <p className="text-text-body text-sm">
          The information on this website is provided for general informational
          purposes only. It is not intended to be, and should not be construed
          as, investment, legal, accounting, tax or other professional advice.
        </p>
        <p className="text-text-body text-sm">
          Bradley Innovations Group is privately held. Nothing on this website
          constitutes an offer to sell, or a solicitation of an offer to buy,
          any security. Any securities offering may be made only through
          definitive offering documents and in compliance with applicable law.
        </p>
        <p className="text-text-body text-sm">
          Descriptions of operating companies, strategic ventures, relationships
          and ownership are subject to change and may be qualified by definitive
          legal agreements. References to third parties, former employers,
          customers, partners, advisors or other organizations do not imply
          endorsement unless expressly stated.
        </p>
        <p className="text-text-body text-sm">
          Forward-looking statements, if any, involve risks and uncertainties.
          Actual results may differ materially. Bradley Innovations Group
          undertakes no obligation to update forward-looking information except
          as required by law.
        </p>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Portfolio-company separation</h2>
        <p className="text-text-body text-sm">
          Bradley Innovations Group and its operating companies are separate
          legal entities. Each company is responsible for its own products,
          services, contracts and obligations. Links to operating-company
          websites are provided for convenience and are subject to the terms and
          privacy practices of those websites.
        </p>
      </section>
    </SecondaryPage>
  );
}
