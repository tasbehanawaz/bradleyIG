import PageHero from "@/components/PageHero";

function ProblemIcon() {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function IdenticHero() {
  return (
    <PageHero
      current="Identic AI"
      path="/identic-ai"
      heading="Identic AI"
      aside={
        <div
          className="bg-black/45 p-6 backdrop-blur-md md:p-8"
          style={{
            WebkitBackdropFilter: "blur(21px)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)",
          }}
        >
          <div className="flex items-center gap-3 text-white">
            <ProblemIcon />
            <h2 className="text-xl font-normal tracking-[-0.01em] md:text-2xl">
              The Problem
            </h2>
          </div>
          <div className="mt-5 body-stack text-sm leading-relaxed text-white md:text-[0.95rem]">
            <p>
              AI is moving from systems that answer questions to systems that
              make recommendations, coordinate work and take action. As that
              capability spreads, enterprises face a new problem: intelligence
              can scale faster than human ownership of the decisions it
              produces.
            </p>
            <p>
              A few dozen leaders and experts often make the decisions that
              matter most. They cannot be everywhere. Generic AI can be
              everywhere, but it does not naturally carry a person&apos;s
              judgment, authority, reputation or accountability.
            </p>
          </div>
        </div>
      }
    >
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-white md:text-[0.95rem]">
        Intelligence should never become anonymous.
      </p>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-white md:text-[0.95rem]">
        Identic AI is intelligence bound to a person, with authority and
        accountability to act.
      </p>
    </PageHero>
  );
}
