import type { Metadata } from "next";
import ContentCard from "@/components/ContentCard";
import JsonLd from "@/components/JsonLd";
import SecondaryPage from "@/components/SecondaryPage";
import { getCdnUrl } from "@/lib/cdn";
import { leaders } from "@/lib/leaders";
import { personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leadership | Bradley Innovations Group",
  description:
    "Meet the experienced operating team building and scaling Bradley Innovations Group and its companies across the United States and GCC.",
  path: "/leadership",
});

export default function Leadership() {
  return (
    <SecondaryPage
      title="Leadership"
      path="/leadership"
      lede="Not a founder with hires. An operating team."
      intro={
        <p>
          The Bradley Innovations Group leadership team has built and scaled
          technology businesses across enterprise, government and sovereign
          environments. Several members have worked together across multiple
          ventures. BIG brings that experience into a parent company in which
          the team owns and operates the businesses it is building.
        </p>
      }
    >
      <JsonLd
        data={leaders.map((leader) =>
          personSchema({
            ...leader,
            image: leader.image ? getCdnUrl(leader.image) : undefined,
          })
        )}
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {leaders.map((leader) => (
          <ContentCard key={leader.slug}>
            <div id={leader.slug} className="text-center">
              {leader.image ? (
                <div className="mb-5 flex justify-center">
                  <img
                    src={getCdnUrl(leader.image)}
                    alt={`${leader.name}, ${leader.role}`}
                    width={144}
                    height={144}
                    className="h-28 w-28 rounded-full object-cover border border-gold-dim/40 md:h-32 md:w-32"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <h2 className="text-xl font-sans text-gold mb-1">{leader.name}</h2>
              <p className="text-gold text-sm mb-4">{leader.role}</p>
              <p className="text-text-body text-sm leading-relaxed text-left md:text-center">
                {leader.bio}
              </p>
            </div>
          </ContentCard>
        ))}
      </div>
    </SecondaryPage>
  );
}
