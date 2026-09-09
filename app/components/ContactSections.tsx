import ContactForm from "@/components/ContactForm";
import { GlowBand, OverlayCard, SectionHeading } from "@/components/PageSection";

const contacts = [
  {
    title: "General inquiries",
    email: "info@bradleyinnovations.group",
  },
  {
    title: "Partnerships",
    email: "partnerships@bradleyinnovations.group",
  },
  {
    title: "Investor information",
    email: "investors@bradleyinnovations.group",
  },
  {
    title: "Media and speaking",
    email: "media@bradleyinnovations.group",
  },
];

const offices = [
  {
    title: "United States",
    image: "/assets/USA.jpg",
    lines: ["332 South Michigan Ave STE 121 2170", "Chicago, IL 60604"],
  },
  {
    title: "GCC",
    image: "/assets/UAE.jpg",
    lines: [
      "Damac Park Towers, Tower B Unit 301",
      "DIFC, Dubai",
      "P.O. Box 75505",
      "United Arab Emirates",
    ],
  },
];

export default function ContactSections() {
  return (
    <div className="contact-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <SectionHeading>Contact Information</SectionHeading>
        <GlowBand>
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:grid-cols-2 md:gap-5 md:px-6">
            {contacts.map((item) => (
              <li key={item.email}>
                <OverlayCard className="h-full">
                  <h3 className="text-lg font-normal leading-snug tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">
                    <a
                      href={`mailto:${item.email}`}
                      className="text-white underline decoration-white/40 underline-offset-[0.2em] hover:text-white"
                    >
                      {item.email}
                    </a>
                  </p>
                </OverlayCard>
              </li>
            ))}
          </ul>
        </GlowBand>
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading align="center">Offices</SectionHeading>
        <GlowBand>
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 px-4 md:grid-cols-2 md:gap-5 md:px-6">
            {offices.map((office) => (
              <li key={office.title}>
                <OverlayCard className="flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <img
                      src={office.image}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover"
                      decoding="async"
                    />
                    <h3 className="text-lg font-normal leading-snug tracking-[-0.01em]">
                      {office.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </OverlayCard>
              </li>
            ))}
          </ul>
        </GlowBand>
      </section>

      <section className="pt-16 md:pt-24">
        <SectionHeading>Send an inquiry</SectionHeading>
        <div className="mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-12 md:px-10 lg:px-14">
          <OverlayCard className="mx-auto max-w-2xl md:p-8">
            <p className="mb-6 text-sm leading-relaxed text-white/85">
              Please do not send confidential, proprietary or personal
              information through the website contact form.
            </p>
            <ContactForm />
          </OverlayCard>
        </div>
      </section>
    </div>
  );
}
