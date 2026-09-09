import PageHero from "@/components/PageHero";

function PurposeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function AboutHero() {
  return (
    <PageHero
      current="About Bradley Innovations Group"
      path="/about"
      heading={
        <>
          A Privately Held,
          <br />
          AI-Native Operating Group
        </>
      }
      aside={
        <div
          className="bg-black/45 p-6 backdrop-blur-md md:p-8"
          style={{
            WebkitBackdropFilter: "blur(21px)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)",
          }}
        >
          <div className="flex items-center gap-3 text-white">
            <PurposeIcon />
            <h2 className="text-xl font-normal tracking-[-0.01em] md:text-2xl">
              Our Purpose
            </h2>
          </div>
          <div className="mt-5 body-stack text-sm leading-relaxed text-white md:text-[0.95rem]">
            <p>
              Our purpose is to build enduring companies that scale human
              intelligence.
            </p>
            <p>
              We focus on opportunities where artificial intelligence, identity,
              enterprise accountability, computing infrastructure and high-value
              human relationships intersect. We seek to create businesses that
              solve important problems, can stand independently and become
              stronger through the shared operating platform of the group.
            </p>
          </div>
        </div>
      }
    >
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-white md:text-[0.95rem]">
        BIG is not a fund and not a passive holding company. We are an
        operating company. The parent owns the long-term platform, brings
        together the leadership team and applies shared capabilities directly
        to the businesses it builds and owns.
      </p>
    </PageHero>
  );
}
