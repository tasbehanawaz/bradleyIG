import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Governance & Responsible AI | Bradley Innovations Group",
  description:
    "Review the principles guiding accountability, capital allocation, responsible AI and long-term ownership at BIG.",
  path: "/governance",
});

export default function Governance() {
  return (
    <SecondaryPage
      title="Corporate Governance and Responsible AI"
      path="/governance"
      lede="Long-term ownership requires clear accountability."
      intro={
        <p>
          Bradley Innovations Group is committed to disciplined capital
          allocation, responsible technology, transparent decision rights and
          the separate legal accountability of each operating company. Our
          governance is designed to support speed without weakening control.
        </p>
      }
      updated="2026-03-01"
    >
      <section className="body-stack">
        <h2 className="text-2xl font-serif">Governance Principles</h2>
        <ul className="space-y-4 text-text-body list-none p-0 m-0">
          <li>
            <span className="font-semibold text-text-main">
              Long-term orientation.
            </span>{" "}
            We build companies to create durable customer and enterprise value,
            not to satisfy a forced exit timetable.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Accountable ownership.
            </span>{" "}
            The parent supplies operating capability and remains responsible for
            the standards applied across the group.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Disciplined capital allocation.
            </span>{" "}
            People and capital are assigned to the opportunity where they can
            create the greatest risk-adjusted long-term value.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Operating-company clarity.
            </span>{" "}
            Each business maintains its own product, contracts, responsibilities
            and legal identity.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Conflict transparency.
            </span>{" "}
            Material related-party relationships and conflicts should be
            documented, reviewed and managed through approved processes.
          </li>
          <li>
            <span className="font-semibold text-text-main">Responsible AI.</span>{" "}
            Identity, human authority, traceability, security and appropriate
            escalation are built into how we design and deploy intelligent
            systems.
          </li>
        </ul>
      </section>

      <section id="responsible-ai" className="body-stack">
        <h2 className="text-2xl font-serif">Responsible AI Principles</h2>
        <ul className="space-y-4 text-text-body list-none p-0 m-0">
          <li>
            <span className="font-semibold text-text-main">
              Identity and accountability.
            </span>{" "}
            AI behavior should be linked to a clearly defined owner, role or
            organizational authority.
          </li>
          <li>
            <span className="font-semibold text-text-main">Human authority.</span>{" "}
            Humans retain decision rights over material, high-risk and
            exceptional cases.
          </li>
          <li>
            <span className="font-semibold text-text-main">Traceability.</span>{" "}
            Important recommendations and actions should be attributable and
            reviewable.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Data stewardship.
            </span>{" "}
            Information should be used only for authorized purposes and
            protected according to its sensitivity.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Security by design.
            </span>{" "}
            Access controls, identity boundaries and system protections should
            be designed into the platform.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Continuous review.
            </span>{" "}
            AI systems should be monitored and improved as outcomes, risks and
            regulations evolve.
          </li>
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">Documents</h2>
        <ul className="space-y-3 text-text-body list-none p-0 m-0">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Website Terms of Use</a>
          </li>
          <li>
            <a href="/governance#responsible-ai">Responsible AI Principles</a>
          </li>
          <li className="text-text-body/70">
            Code of Conduct — publish when approved
          </li>
        </ul>
      </section>
    </SecondaryPage>
  );
}
