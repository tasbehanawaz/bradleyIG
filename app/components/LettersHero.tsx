import PageHero from "@/components/PageHero";

export default function LettersHero() {
  return (
    <PageHero
      current="Letters & Perspectives"
      path="/letters"
      heading="Letters & Perspectives"
      align="center"
    >
      <p className="mt-3 text-sm text-white/50">Updated September 2, 2026</p>
      <p className="mt-6 text-sm leading-relaxed text-white md:text-[0.95rem]">
        We believe long-term ownership should be accompanied by clear thinking
        in public.
      </p>
      <p className="mt-5 text-sm leading-relaxed text-white md:text-[0.95rem]">
        From time to time, Bradley Innovations Group publishes letters and
        perspectives on company building, Identic AI, enterprise intelligence,
        capital allocation and the relationship between the United States and
        the GCC. These materials explain how we think; they are not investment
        research or a promise of future performance.
      </p>
    </PageHero>
  );
}
