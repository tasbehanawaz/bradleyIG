import { GlowBand, OverlayCard, SectionHeading } from "@/components/PageSection";

export default function TermsSections() {
  return (
    <div className="terms-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <SectionHeading>Disclaimer</SectionHeading>
        <GlowBand>
          <div className="px-4 md:px-6">
            <OverlayCard className="body-stack text-sm leading-relaxed text-white/85 md:p-8 md:text-[0.95rem]">
              <p>
                The information on this website is provided for general
                informational purposes only. It is not intended to be, and
                should not be construed as, investment, legal, accounting, tax
                or other professional advice.
              </p>
              <p>
                Bradley Innovations Group is privately held. Nothing on this
                website constitutes an offer to sell, or a solicitation of an
                offer to buy, any security. Any securities offering may be made
                only through definitive offering documents and in compliance with
                applicable law.
              </p>
              <p>
                Descriptions of operating companies, strategic ventures,
                relationships and ownership are subject to change and may be
                qualified by definitive legal agreements. References to third
                parties, former employers, customers, partners, advisors or
                other organizations do not imply endorsement unless expressly
                stated.
              </p>
              <p>
                Forward-looking statements, if any, involve risks and
                uncertainties. Actual results may differ materially. Bradley
                Innovations Group undertakes no obligation to update
                forward-looking information except as required by law.
              </p>
            </OverlayCard>
          </div>
        </GlowBand>
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>Portfolio-company separation</SectionHeading>
        <div className="mx-auto mt-6 w-full max-w-[90rem] px-5 md:mt-8 md:px-10 lg:px-14">
          <p className="text-sm leading-relaxed text-white/85 md:text-[0.95rem]">
            Bradley Innovations Group and its operating companies are separate
            legal entities. Each company is responsible for its own products,
            services, contracts and obligations. Links to operating-company
            websites are provided for convenience and are subject to the terms
            and privacy practices of those websites.
          </p>
        </div>
      </section>
    </div>
  );
}
