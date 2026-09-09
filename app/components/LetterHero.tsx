import PageHero from "@/components/PageHero";
import { getCdnUrl } from "@/lib/cdn";

export default function LetterHero() {
  return (
    <PageHero
      current="Building Companies for the Age of Identic AI"
      path="/letters/a-message-from-joseph-m-bradley"
      crumbs={[{ name: "Letters & Perspectives", path: "/letters" }]}
      heading="Building Companies for the Age of Identic AI"
      aside={
        <div
          className="flex items-center gap-5 bg-black/45 p-6 backdrop-blur-md md:gap-6 md:p-8"
          style={{
            WebkitBackdropFilter: "blur(21px)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)",
          }}
        >
          <img
            src={getCdnUrl("joseph.jpg")}
            alt="Joseph M. Bradley, Founder & Chief Executive Officer"
            width={160}
            height={160}
            className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-white/25 md:h-32 md:w-32"
            decoding="async"
          />
          <div className="min-w-0">
            <h2 className="text-xl font-normal tracking-[-0.01em] md:text-2xl">
              Joseph M. Bradley
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Founder & Chief Executive Officer
            </p>
          </div>
        </div>
      }
    >
      <p className="mt-6 text-sm text-white/50">Published September 2, 2026</p>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-white md:text-[0.95rem]">
        A message from Joseph M. Bradley on building companies for the age of
        Identic AI — purpose, operating philosophy and long-term commitment.
      </p>
    </PageHero>
  );
}
