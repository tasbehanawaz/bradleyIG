export default function InvestorSections() {
  return (
    <div className="investor-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <div className="mx-auto w-full max-w-[90rem] px-5 text-center md:px-10 lg:px-14">
          <p className="text-sm leading-relaxed text-white/85 md:text-[0.95rem]">
            Nothing on this website constitutes an offer to sell, or a
            solicitation of an offer to buy, any security. Any offering may be
            made only through definitive documents and in accordance with
            applicable law.
          </p>
          <a
            href="mailto:investors@bradleyinnovations.group?subject=Request%20Investor%20Information"
            className="page-cta mt-10 inline-flex items-center justify-center border border-white bg-white px-6 py-3 text-sm text-black no-underline hover:bg-white/90 hover:text-black hover:no-underline"
          >
            Request Investor Information
          </a>
        </div>
      </section>
    </div>
  );
}
