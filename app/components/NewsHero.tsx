import PageHero from "@/components/PageHero";

export default function NewsHero() {
  return (
    <PageHero
      current="News & Announcements"
      path="/news"
      heading="News & Announcements"
      align="center"
    >
      <p className="mt-6 text-sm leading-relaxed text-white md:text-[0.95rem]">
        Official announcements from Bradley Innovations Group and its operating
        companies.
      </p>
      <p className="mt-5 text-sm leading-relaxed text-white md:text-[0.95rem]">
        This page is the authoritative source for approved corporate news,
        leadership updates, company launches, strategic partnerships and
        selected portfolio milestones.
      </p>
    </PageHero>
  );
}
