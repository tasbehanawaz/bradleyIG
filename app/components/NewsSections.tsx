const GLOW = "/assets/multiple-business.png";

const newsItems = [
  {
    date: "2026-09-02",
    headline: "Bradley Innovations Group Launches Official Corporate Website",
    summary:
      "Bradley Innovations Group today launched its official corporate website as a central source for the group, its companies, leadership, Identic AI thesis and governance.",
    href: "/news/bradley-innovations-group-launches-official-corporate-website",
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

export default function NewsSections() {
  return (
    <div className="news-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <div className="relative mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14">
          <div
            className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
            style={{ backgroundImage: `url(${GLOW})` }}
          >
            <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:gap-5 md:px-6">
              {newsItems.map((item) => (
                <li key={item.headline}>
                  <a
                    href={item.href}
                    className="feed-card group flex flex-col bg-black/55 p-5 no-underline md:flex-row md:items-end md:justify-between md:gap-8 md:p-6"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)",
                    }}
                  >
                    <div className="min-w-0">
                      <p className="text-sm text-white/55">
                        {formatDisplayDate(item.date)}
                      </p>
                      <h2 className="mt-2 text-lg font-normal leading-snug tracking-[-0.01em] md:text-xl">
                        {item.headline}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/85">
                        {item.summary}
                      </p>
                    </div>
                    <div className="mt-4 flex shrink-0 justify-end md:mt-0">
                      <ArrowUpRight />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
