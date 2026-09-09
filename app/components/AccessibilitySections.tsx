import { GlowBand, OverlayCard, SectionHeading } from "@/components/PageSection";

const SUPPORT = [
  "Keyboard navigation with a visible focus indicator and a skip link to main content.",
  "Semantic headings, landmarks and labeled form fields for screen readers.",
  "Text that can be resized to at least 200% without loss of content.",
  "Meaningful alternative text for approved images such as the brand mark and leadership portraits.",
];

export default function AccessibilitySections() {
  return (
    <div className="accessibility-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <SectionHeading>What we support</SectionHeading>
        <GlowBand>
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:grid-cols-2 md:gap-5 md:px-6">
            {SUPPORT.map((item) => (
              <li key={item}>
                <OverlayCard className="h-full">
                  <p className="text-sm leading-relaxed text-white/85">{item}</p>
                </OverlayCard>
              </li>
            ))}
          </ul>
        </GlowBand>
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>Known limitations</SectionHeading>
        <GlowBand>
          <div className="px-4 md:px-6">
            <OverlayCard className="mx-auto max-w-4xl text-sm leading-relaxed text-white/85 md:p-8 md:text-[0.95rem]">
              <p>
                Some linked operating-company sites and third-party destinations
                are outside our control and may not meet the same standard. PDF
                or other downloadable documents, when published, will be
                reviewed for accessibility as they are approved.
              </p>
            </OverlayCard>
          </div>
        </GlowBand>
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>Report a barrier</SectionHeading>
        <GlowBand>
          <div className="px-4 md:px-6">
            <OverlayCard className="mx-auto max-w-4xl text-sm leading-relaxed text-white/85 md:p-8 md:text-[0.95rem]">
              <p>
                If you encounter an accessibility barrier on this website,
                please contact{" "}
                <a
                  href="mailto:info@bradleyinnovations.group"
                  className="text-white underline decoration-white/40 underline-offset-[0.2em] hover:text-white"
                >
                  info@bradleyinnovations.group
                </a>
                . Include the page URL and a short description of the issue so
                we can improve it.
              </p>
            </OverlayCard>
          </div>
        </GlowBand>
      </section>
    </div>
  );
}
