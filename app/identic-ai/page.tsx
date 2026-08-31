import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Identic AI | Bradley Innovations Group",
  description:
    "Identic AI is intelligence bound to a person, with authority and accountability to act. Learn the core thesis behind BIG.",
  path: "/identic-ai",
});

export default function IdenticAI() {
  return (
    <SecondaryPage
      title="Identic AI"
      path="/identic-ai"
      lede="Intelligence should never become anonymous."
      intro={
        <p>
          Identic AI is intelligence bound to a person, with authority and
          accountability to act.
        </p>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-serif">The Problem</h2>
        <p className="text-text-body">
          AI is moving from systems that answer questions to systems that make
          recommendations, coordinate work and take action. As that capability
          spreads, enterprises face a new problem: intelligence can scale faster
          than human ownership of the decisions it produces.
        </p>
        <p className="text-text-body">
          A few dozen leaders and experts often make the decisions that matter
          most. They cannot be everywhere. Generic AI can be everywhere, but it
          does not naturally carry a person&apos;s judgment, authority,
          reputation or accountability.
        </p>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">The Identic AI Difference</h2>
        <ul className="space-y-4 text-text-body list-none p-0 m-0">
          <li>
            <span className="font-semibold text-text-main">Identity.</span> The
            intelligence is bound to a named human owner rather than an
            anonymous assistant.
          </li>
          <li>
            <span className="font-semibold text-text-main">Judgment.</span> It
            reflects how a person evaluates trade-offs, risk, context and
            exceptions - not only what that person knows.
          </li>
          <li>
            <span className="font-semibold text-text-main">Continuity.</span>{" "}
            Memory and learning remain scoped to the identity over time.
          </li>
          <li>
            <span className="font-semibold text-text-main">Authority.</span> The
            system understands what it may recommend, what it may do and when it
            must escalate.
          </li>
          <li>
            <span className="font-semibold text-text-main">Accountability.</span>{" "}
            Actions and recommendations remain attributable, reviewable and
            governed.
          </li>
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">The Category Progression</h2>
        <ul className="space-y-3 text-text-body list-none p-0 m-0">
          <li>
            <span className="font-semibold text-text-main">Narrow AI</span>{" "}
            performs a defined task.
          </li>
          <li>
            <span className="font-semibold text-text-main">Generative AI</span>{" "}
            creates content from learned patterns.
          </li>
          <li>
            <span className="font-semibold text-text-main">Agentic AI</span> takes
            action toward a goal.
          </li>
          <li>
            <span className="font-semibold text-text-main">Identic AI</span> acts
            for someone and remains bound to that person&apos;s judgment,
            authority and accountability.
          </li>
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">Where BIG Builds</h2>
        <ul className="space-y-4 text-text-body list-none p-0 m-0">
          <li>
            <span className="font-semibold text-text-main">Compute.</span> The
            infrastructure that makes intelligence available.
          </li>
          <li>
            <span className="font-semibold text-text-main">Control.</span> The
            enterprise layer that governs intelligence, decisions and
            accountability.
          </li>
          <li>
            <span className="font-semibold text-text-main">Contact.</span> The
            applications and experiences through which identity-bound
            intelligence creates real-world value.
          </li>
        </ul>
      </section>

      <section>
        <p className="pull-quote">
          A few dozen people make every decision that matters. They cannot be
          everywhere. Identic AI allows their judgment to be present without
          making accountability disappear.
        </p>
      </section>
    </SecondaryPage>
  );
}
