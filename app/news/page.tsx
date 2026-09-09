import type { Metadata } from "next";
import NewsHero from "@/components/NewsHero";
import NewsSections from "@/components/NewsSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "News & Announcements | Bradley Innovations Group",
  description:
    "Official news and announcements from Bradley Innovations Group and its approved operating companies.",
  path: "/news",
});

export default function News() {
  return (
    <div>
      <NewsHero />
      <NewsSections />
    </div>
  );
}
