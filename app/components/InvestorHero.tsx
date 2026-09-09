import PageHero from "@/components/PageHero";

export default function InvestorHero() {
  return (
    <PageHero
      current="Private Investor Information"
      path="/investor-information"
      heading="Private Investor Information"
      align="center"
    >
      <p className="mt-6 text-sm leading-relaxed text-white md:text-[0.95rem]">
        Bradley Innovations Group is privately held.
      </p>
      <p className="mt-5 text-sm leading-relaxed text-white md:text-[0.95rem]">
        The company does not publish public financial statements, securities
        filings or detailed investor materials on this website. Qualified
        institutional, family-office and strategic investors may request access
        to current corporate materials through a controlled data room. Access is
        subject to company approval, identity verification and applicable
        confidentiality requirements.
      </p>
    </PageHero>
  );
}
