const GLOW = "/assets/multiple-business.png";

const letters = [
  {
    year: "2026",
    title: "Building Companies for the Age of Identic AI",
    summary: "A message from Joseph M. Bradley.",
    href: "/letters/a-message-from-joseph-m-bradley",
    author: "Joseph M. Bradley",
    published: "2026-09-02",
  },
  {
    year: null,
    title: "Identic AI",
    summary:
      "Why intelligence must remain bound to human identity, authority and accountability.",
    href: "/identic-ai",
    author: "Bradley Innovations Group",
    published: null,
  },
  {
    year: null,
    title: "You to the Power of Two",
    summary:
      "Joseph M. Bradley and Don Tapscott on identity-bound intelligence and human potential.",
    href: null,
    author: "Joseph M. Bradley and Don Tapscott",
    published: null,
  },
  {
    year: null,
    title: "Questioneering",
    summary: "Joseph M. Bradley on the discipline of asking better questions.",
    href: null,
    author: "Joseph M. Bradley",
    published: null,
  },
  {
    year: null,
    title: "Selected Articles and Speeches",
    summary: "Approved external writing, interviews and speaking appearances.",
    href: null,
    author: null,
    published: null,
  },
] as const;

function formatDisplayDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-white/50 transition-colors group-hover:text-white"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

const cardShadow = { boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)" };

export default function LettersSections() {
  return (
    <div className="letters-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <div className="relative mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14">
          <div
            className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
            style={{ backgroundImage: `url(${GLOW})` }}
          >
            <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:grid-cols-2 md:gap-5 md:px-6 lg:grid-cols-3">
              {letters.map((item) => {
                const heading = (
                  <>
                    {item.year ? `${item.year} — ` : null}
                    {item.title}
                  </>
                );

                const inner = (
                  <>
                    <h2 className="text-lg font-normal leading-snug tracking-[-0.01em] md:text-xl">
                      {heading}
                    </h2>
                    {item.author || item.published ? (
                      <p className="mt-2 text-sm text-white/55">
                        {item.author}
                        {item.author && item.published ? " · " : null}
                        {item.published
                          ? `Published ${formatDisplayDate(item.published)}`
                          : null}
                      </p>
                    ) : null}
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      {item.summary}
                    </p>
                    {item.href ? (
                      <div className="mt-auto flex justify-end pt-6">
                        <ArrowUpRight />
                      </div>
                    ) : null}
                  </>
                );

                return (
                  <li key={item.title} className="h-full">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="feed-card group flex h-full flex-col bg-black/55 p-5 no-underline md:p-6"
                        style={cardShadow}
                      >
                        {inner}
                      </a>
                    ) : (
                      <article
                        className="flex h-full flex-col bg-black/55 p-5 md:p-6"
                        style={cardShadow}
                      >
                        {inner}
                      </article>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
