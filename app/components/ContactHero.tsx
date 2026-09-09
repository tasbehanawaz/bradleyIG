import PageHero from "@/components/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      current="Contact Bradley Innovations Group"
      path="/contact"
      heading="Contact Bradley Innovations Group"
      align="center"
    >
      <p className="mt-6 text-sm leading-relaxed text-white md:text-[0.95rem]">
        For partnerships, media, investor information, speaking inquiries or
        general corporate matters, please use the appropriate contact below.
      </p>
    </PageHero>
  );
}
