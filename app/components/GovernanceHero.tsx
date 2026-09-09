import PageHero from "@/components/PageHero";

export default function GovernanceHero() {
  return (
    <PageHero
      current="Corporate Governance and Responsible AI"
      path="/governance"
      heading="Corporate Governance and Responsible AI"
      align="center"
    >
      <p className="mt-6 text-sm leading-relaxed text-white md:text-[0.95rem]">
        Long-term ownership requires clear accountability.
      </p>
      <p className="mt-5 text-sm leading-relaxed text-white md:text-[0.95rem]">
        Bradley Innovations Group is committed to disciplined capital
        allocation, responsible technology, transparent decision rights and the
        separate legal accountability of each operating company. Our governance
        is designed to support speed without weakening control.
      </p>
    </PageHero>
  );
}
