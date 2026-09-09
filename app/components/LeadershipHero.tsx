import PageHero from "@/components/PageHero";

export default function LeadershipHero() {
  return (
    <PageHero
      current="Leadership"
      path="/leadership"
      heading="Leadership"
      align="center"
    >
      <p className="mt-6 text-sm leading-relaxed text-white md:text-[0.95rem]">
        Not a founder with hires. An operating team.
      </p>
      <p className="mt-5 text-sm leading-relaxed text-white md:text-[0.95rem]">
        The Bradley Innovations Group leadership team has built and scaled
        technology businesses across enterprise, government and sovereign
        environments. Several members have worked together across multiple
        ventures. BIG brings that experience into a parent company in which the
        team owns and operates the businesses it is building.
      </p>
    </PageHero>
  );
}
