import type { Metadata } from "next";
import ContentCard from "@/components/ContentCard";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "News & Announcements | Bradley Innovations Group",
  description:
    "Official news and announcements from Bradley Innovations Group and its approved operating companies.",
  path: "/news",
});

/** Empty until an approved launch announcement is ready for publication. */
const newsItems: Array<{
  date: string;
  headline: string;
  summary: string;
  href: string | null;
}> = [];

function formatDisplayDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function News() {
  return (
    <SecondaryPage
      title="News & Announcements"
      path="/news"
      lede="Official announcements from Bradley Innovations Group and its operating companies."
      intro={
        <p>
          This page is the authoritative source for approved corporate news,
          leadership updates, company launches, strategic partnerships and
          selected portfolio milestones.
        </p>
      }
    >
      {newsItems.length === 0 ? (
        <p className="text-text-body">No news items published yet.</p>
      ) : (
        <div className="space-y-4">
          {newsItems.map((item) => (
            <ContentCard key={item.headline}>
              <p className="text-text-body/70 text-sm mb-2">
                {formatDisplayDate(item.date)}
              </p>
              <h2 className="text-lg font-serif text-text-main mb-2">
                {item.href ? (
                  <a href={item.href}>{item.headline}</a>
                ) : (
                  item.headline
                )}
              </h2>
              <p className="text-text-body">{item.summary}</p>
            </ContentCard>
          ))}
        </div>
      )}
    </SecondaryPage>
  );
}
