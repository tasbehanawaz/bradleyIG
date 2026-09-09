import PageHero from "@/components/PageHero";

export default function CompaniesHero() {
  return (
    <PageHero
      current="Our Companies"
      path="/companies"
      heading="Our Companies"
      align="center"
    >
      <p className="mt-6 text-sm leading-relaxed text-white md:text-[0.95rem]">
        BIG builds businesses that can stand on their own and become stronger
        together.
      </p>
      <p className="mt-5 text-sm leading-relaxed text-white md:text-[0.95rem]">
        Each company owns its product, customers and commercial future. The
        parent supplies shared technology, enterprise business development,
        finance, governance and market access. This structure allows each
        business to move quickly while benefiting from capabilities it would be
        expensive and slow to build independently.
      </p>
    </PageHero>
  );
}
