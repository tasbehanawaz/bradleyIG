import { getCdnUrl } from "@/lib/cdn";
import { leaders, type Leader } from "@/lib/leaders";

const GLOW = "/assets/multiple-business.png";

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article
      id={leader.slug}
      className="flex h-full flex-col bg-black/55 p-5 md:p-6"
      style={{
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)",
      }}
    >
      {leader.image ? (
        <img
          src={getCdnUrl(leader.image)}
          alt={`${leader.name}, ${leader.role}`}
          width={144}
          height={144}
          className="mb-5 h-24 w-24 rounded-full object-cover ring-1 ring-white/25 md:h-28 md:w-28"
          decoding="async"
          loading="lazy"
        />
      ) : null}
      <h2 className="text-xl font-normal leading-snug tracking-[-0.01em]">
        {leader.name}
      </h2>
      <p className="mt-1 text-sm text-white/70">{leader.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-white/85">{leader.bio}</p>
    </article>
  );
}

export default function LeadershipSections() {
  return (
    <div className="leadership-sections bg-black pb-16 md:pb-24">
      <section className="pt-16 md:pt-24">
        <div className="relative mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14">
          <div
            className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
            style={{ backgroundImage: `url(${GLOW})` }}
          >
            <div className="px-4 md:px-6">
              <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
                {leaders.slice(0, 3).map((leader) => (
                  <li key={leader.slug}>
                    <LeaderCard leader={leader} />
                  </li>
                ))}
              </ul>
              <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-4 p-0 md:mt-10 md:grid-cols-2 md:gap-5">
                {leaders.slice(3).map((leader) => (
                  <li key={leader.slug}>
                    <LeaderCard leader={leader} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
