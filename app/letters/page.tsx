import type { Metadata } from "next";
import ContentCard from "@/components/ContentCard";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Letters & Perspectives | Bradley Innovations Group",
  description:
    "Read founder letters and perspectives on Identic AI, enterprise intelligence, company building and long-term ownership.",
  path: "/letters",
});

const letters = [
  {
    year: "2026",
    title: "Building Companies for the Age of Identic AI",
    summary: "A message from Joseph M. Bradley.",
    href: "/letters/a-message-from-joseph-m-bradley",
    author: "Joseph M. Bradley",
    published: "2026-03-01",
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
    summary:
      "Approved external writing, interviews and speaking appearances.",
    href: null,
    author: null,
    published: null,
  },
];

function formatDisplayDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Letters() {
  return (
    <SecondaryPage
      title="Letters & Perspectives"
      path="/letters"
      lede="We believe long-term ownership should be accompanied by clear thinking in public."
      intro={
        <p>
          From time to time, Bradley Innovations Group publishes letters and
          perspectives on company building, Identic AI, enterprise intelligence,
          capital allocation and the relationship between the United States and
          the GCC. These materials explain how we think; they are not investment
          research or a promise of future performance.
        </p>
      }
      updated="2026-03-01"
    >
      <div className="space-y-4">
        {letters.map((item) => (
          <ContentCard key={item.title}>
            <h2 className="text-lg font-serif text-text-main mb-2">
              {item.href ? (
                <a href={item.href}>
                  {item.year ? `${item.year} — ` : null}
                  {item.title}
                </a>
              ) : (
                <>
                  {item.year ? `${item.year} — ` : null}
                  {item.title}
                </>
              )}
            </h2>
            {(item.author || item.published) && (
              <p className="text-text-body/70 text-sm mb-2">
                {item.author}
                {item.author && item.published ? " · " : null}
                {item.published
                  ? `Published ${formatDisplayDate(item.published)}`
                  : null}
              </p>
            )}
            <p className="text-text-body">{item.summary}</p>
          </ContentCard>
        ))}
      </div>
    </SecondaryPage>
  );
}
