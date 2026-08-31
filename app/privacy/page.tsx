import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Bradley Innovations Group",
  description:
    "Privacy policy outline for Bradley Innovations Group website visitors and inquiry contacts.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <SecondaryPage
      title="Privacy Policy"
      path="/privacy"
      intro={
        <p className="text-sm">
          Draft outline pending legal review and approval. The published policy
          will cover at least the topics below.
        </p>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-serif">Minimum coverage</h2>
        <ul className="space-y-3 text-text-body list-none p-0 m-0">
          <li>Company identity and data-controller contact details</li>
          <li>Information collected through contact forms and analytics</li>
          <li>Purpose and legal basis for processing</li>
          <li>Retention periods</li>
          <li>Service providers and cross-border data transfers</li>
          <li>Cookies and tracking, if any</li>
          <li>
            User rights under applicable United States, UAE and other relevant
            laws
          </li>
          <li>Security and breach contact process</li>
        </ul>
      </section>

      <section>
        <p className="text-text-body text-sm">
          For privacy questions, contact{" "}
          <a href="mailto:info@bradleyinnovations.group">
            info@bradleyinnovations.group
          </a>
          .
        </p>
      </section>
    </SecondaryPage>
  );
}
