import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Bradley Innovations Group",
  description:
    "Learn how Bradley Innovations Group builds and operates technology businesses through shared engineering, market access and long-term ownership.",
  path: "/about",
});

export default function About() {
  return (
    <SecondaryPage
      title="About Bradley Innovations Group"
      path="/about"
      lede="One parent. One operating team. Multiple businesses."
      intro={
        <>
          <p>
            Bradley Innovations Group is a privately held, AI-native operating
            group that builds, owns and scales technology businesses across the
            United States and the GCC.
          </p>
          <p>
            BIG is not a fund and not a passive holding company. We are an
            operating company. The parent owns the long-term platform, brings
            together the leadership team and applies shared capabilities
            directly to the businesses it builds and owns.
          </p>
        </>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-serif">Our Purpose</h2>
        <p className="text-text-body">
          Our purpose is to build enduring companies that scale human
          intelligence.
        </p>
        <p className="text-text-body">
          We focus on opportunities where artificial intelligence, identity,
          enterprise accountability, computing infrastructure and high-value
          human relationships intersect. We seek to create businesses that solve
          important problems, can stand independently and become stronger
          through the shared operating platform of the group.
        </p>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">What BIG Provides</h2>
        <ul className="space-y-4 text-text-body list-none p-0 m-0">
          <li>
            <span className="font-semibold text-text-main">Shared engineering.</span>{" "}
            One architecture, one reusable technology core and one engineering
            organization applied across the portfolio.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Enterprise business development.
            </span>{" "}
            A common commercial engine that opens senior customer relationships
            in the United States and the GCC.
          </li>
          <li>
            <span className="font-semibold text-text-main">
              Finance and capital allocation.
            </span>{" "}
            Consolidated planning, governance and disciplined allocation of
            people and capital.
          </li>
          <li>
            <span className="font-semibold text-text-main">Governance.</span>{" "}
            Common standards for accountability, security, responsible AI and
            decision-making.
          </li>
          <li>
            <span className="font-semibold text-text-main">Market access.</span>{" "}
            Decades of executive relationships and experience building across
            enterprise, government and sovereign environments.
          </li>
          <li>
            <span className="font-semibold text-text-main">Long-term ownership.</span>{" "}
            No forced fund clock. Businesses are built to compound, with
            strategic flexibility around partnerships, financing, spin-outs or
            exits.
          </li>
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">Where We Operate</h2>
        <p className="text-text-main font-semibold">United States and GCC</p>
        <p className="text-text-body">
          BIG was designed around a two-way operating corridor. We help bring
          technology and operating capability from the United States into the
          GCC, while connecting Gulf-based opportunities, capital and market
          insight to the United States. This is not a regional sales model. It
          is an operating advantage built into the company.
        </p>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-serif">Core Facts</h2>
        <dl className="space-y-4 text-text-body">
          <div>
            <dt className="font-semibold text-text-main">Ownership model</dt>
            <dd>Privately held operating group.</dd>
          </div>
          <div>
            <dt className="font-semibold text-text-main">Primary markets</dt>
            <dd>United States and Gulf Cooperation Council.</dd>
          </div>
          <div>
            <dt className="font-semibold text-text-main">Core thesis</dt>
            <dd>
              Identic AI - intelligence bound to a person, with authority and
              accountability to act.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-text-main">Current focus</dt>
            <dd>
              Enterprise intelligence, intelligent membership experiences and
              distributed computing.
            </dd>
          </div>
        </dl>
      </section>
    </SecondaryPage>
  );
}
