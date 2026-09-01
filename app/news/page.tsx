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
      <div className="space-y-4">
        {newsItems.map((item) => (
          <ContentCard key={item.headline} className="group">
            <a
              href={item.href}
              className="no-underline hover:no-underline block"
            >
              <p className="text-text-body/70 text-sm mb-2 text-left">
                {formatDisplayDate(item.date)}
              </p>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="text-lg font-sans text-gold leading-snug text-left">
                  {item.headline}
                </h2>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-5 w-5 shrink-0 text-text-body/70 transition-colors group-hover:text-gold"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </div>
              <p className="text-text-body text-sm text-left">{item.summary}</p>
            </a>
          </ContentCard>
        ))}
      </div>
    </SecondaryPage>
  );
}
