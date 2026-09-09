import PageHero from "@/components/PageHero";

export default function AccessibilityHero() {
  return (
    <PageHero
      current="Accessibility"
      path="/accessibility"
      heading="Accessibility"
      align="center"
    >
      <p className="mt-6 text-sm leading-relaxed text-white md:text-[0.95rem]">
        This website is intended to be usable by as many people as possible.
      </p>
      <p className="mt-5 text-sm leading-relaxed text-white md:text-[0.95rem]">
        Bradley Innovations Group aims to meet WCAG 2.2 Level AA for contrast,
        keyboard access, focus visibility, headings and form labels. Essential
        content on this site does not depend on cookies or third-party tracking.
      </p>
    </PageHero>
  );
}
