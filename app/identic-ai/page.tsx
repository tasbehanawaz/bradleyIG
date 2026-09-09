import type { Metadata } from "next";
import IdenticHero from "@/components/IdenticHero";
import IdenticSections from "@/components/IdenticSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Identic AI | Bradley Innovations Group",
  description:
    "Identic AI is intelligence bound to a person, with authority and accountability to act. Learn the core thesis behind BIG.",
  path: "/identic-ai",
});

export default function IdenticAI() {
  return (
    <div>
      <IdenticHero />
      <IdenticSections />
    </div>
  );
}
