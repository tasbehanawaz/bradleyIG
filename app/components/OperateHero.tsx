import PageHero from "@/components/PageHero";

function AdvantageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 1 0 9-9" />
      <path d="M3 4v8h8" />
    </svg>
  );
}

export default function OperateHero() {
  return (
    <PageHero
      current="How We Operate"
      path="/how-we-operate"
      heading="How We Operate"
      aside={
        <div
          className="bg-black/45 p-6 backdrop-blur-md md:p-8"
          style={{
            WebkitBackdropFilter: "blur(21px)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)",
          }}
        >
          <div className="flex items-center gap-3 text-white">
            <AdvantageIcon />
            <h2 className="text-xl font-normal tracking-[-0.01em] md:text-2xl">
              Our Operating Advantage
            </h2>
          </div>
          <div className="mt-5 body-stack text-sm leading-relaxed text-white md:text-[0.95rem]">
            <p>
              We run our own companies on the same Identic AI principles and
              technology that we bring to customers. The operating group is
              therefore both the builder and a continuous proving environment
              for the platform.
            </p>
          </div>
        </div>
      }
    >
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-white md:text-[0.95rem]">
        One core. One operating team. Assigned where it is needed.
      </p>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-white md:text-[0.95rem]">
        BIG can operate multiple businesses because they share the capabilities
        that matter most: engineering, commercial development, finance,
        governance, market access and executive relationships. Running three
        companies does not require building three separate versions of the same
        operating infrastructure.
      </p>
    </PageHero>
  );
}
