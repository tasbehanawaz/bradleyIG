import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactSections from "@/components/ContactSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Bradley Innovations Group",
  description:
    "Contact Bradley Innovations Group regarding partnerships, investor information, media, speaking and general corporate inquiries.",
  path: "/contact",
});

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactSections />
    </div>
  );
}
