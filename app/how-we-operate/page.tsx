import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Operate | Bradley Innovations Group",
  description:
    "One operating team provides shared engineering, commercial development, governance and market access across the BIG portfolio.",
  path: "/how-we-operate",
});

const processSteps = [
  {
    title: "Identify",
    body: "Find an important problem where the group has a differentiated insight, technology advantage or market access.",
  },
  {
    title: "Evaluate",
    body: "Test the customer problem, technical foundation, commercial model, ownership path and strategic fit.",
  },
  {
    title: "Own",
    body: "Create, acquire or partner into a structure that gives BIG meaningful long-term participation and operating influence.",
  },
  {
    title: "Apply resources",
    body: "Deploy the shared engineering team, leadership, governance, finance and market-development platform.",
  },
  {
    title: "Generate pipeline",
    body: "Use enterprise relationships, thought leadership, partnerships and market access to create named opportunities.",
  },
  {
    title: "Convert",
    body: "Turn opportunities into pilots, contracts, recurring revenue and repeatable commercial execution.",
  },
  {
    title: "Compound",
    body: "Reinvest talent, intellectual property, cash flow and learning into the next stage of the business and the next opportunity.",
  },
];

const capabilities = [
  {
    title: "Engineering",
    body: "Reusable architecture, platform components, integration and delivery.",
  },
  {
    title: "Commercial development",
    body: "One enterprise engine serving the company best suited to each customer problem.",
  },
  {
    title: "Finance",
    body: "One planning, reporting and capital-allocation discipline across the group.",
  },
  {
    title: "Governance",
    body: "Common standards for security, responsible AI, accountability and operating control.",
  },
  {
    title: "Brand and market access",
    body: "A shared category, reputation and route into the United States and GCC.",
  },
  {
    title: "Executive relationships",
    body: "Customer and partner access built over decades, available to a new business from its first day.",
  },
];

export default function HowWeOperate() {
  return (
    <SecondaryPage
      title="How We Operate"
      path="/how-we-operate"
      lede="One core. One operating team. Assigned where it is needed."
      intro={
        <p>
          BIG can operate multiple businesses because they share the
          capabilities that matter most: engineering, commercial development,
          finance, governance, market access and executive relationships.
          Running three companies does not require building three separate
          versions of the same operating infrastructure.
        </p>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-serif">The Seven-Step Process</h2>
        <ol className="space-y-4 text-text-body list-none p-0 m-0">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span className="font-semibold text-text-main">
                {index + 1}. {step.title}.
              </span>{" "}
              {step.body}
            </li>
          ))}
        </ol>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">Shared Capabilities</h2>
        <ul className="space-y-4 text-text-body list-none p-0 m-0">
          {capabilities.map((item) => (
            <li key={item.title}>
              <span className="font-semibold text-text-main">{item.title}.</span>{" "}
              {item.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">Our Operating Advantage</h2>
        <p className="text-text-body">
          We run our own companies on the same Identic AI principles and
          technology that we bring to customers. The operating group is
          therefore both the builder and a continuous proving environment for
          the platform.
        </p>
      </section>
    </SecondaryPage>
  );
}
