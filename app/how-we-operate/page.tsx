import type { Metadata } from "next";
import OperateHero from "@/components/OperateHero";
import OperateSections from "@/components/OperateSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Operate | Bradley Innovations Group",
  description:
    "One operating team provides shared engineering, commercial development, governance and market access across the BIG portfolio.",
  path: "/how-we-operate",
});

export default function HowWeOperate() {
  return (
    <div>
      <OperateHero />
      <OperateSections />
    </div>
  );
}
