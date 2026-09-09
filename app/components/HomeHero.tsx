import Link from "next/link";

const MESSAGE_HREF = "/letters/a-message-from-joseph-m-bradley";
const MESSAGE_UPDATED = "2026-09-08";
const HOME_BG = "/assets/home-bg.jpg";
const USA_FLAG = "/assets/USA.png";
const UAE_FLAG = "/assets/UAE.png";

function formatUpdated(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomeHero() {
  return (
    <section className="home-hero relative flex min-h-dvh flex-col overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-bg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HOME_BG})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[90rem] flex-col px-5 pb-6 pt-24 md:px-10 md:pb-8 md:pt-28 lg:px-14">
        <div className="flex flex-1 flex-col">
          <div className="mt-[8vh] text-center md:mt-[10vh]">
            <h1 className="mx-auto text-[2.35rem] font-normal leading-[1.1] tracking-[-0.02em] md:text-6xl lg:text-[4.75rem]">
              Bradley Innovations Group
            </h1>
            <p className="mt-4 text-sm tracking-[0.04em] text-white md:mt-5 md:text-base lg:text-lg">
              One parent. One operating team. Multiple businesses.
            </p>
          </div>

          <div className="mt-auto grid gap-8 pt-16 md:grid-cols-2 md:items-end md:gap-10 lg:gap-16">
            <div className="max-w-xl">
              <div className="body-stack text-sm leading-relaxed text-white md:text-[0.95rem]">
                <p>
                  Bradley Innovations Group is a privately held, AI-native
                  operating group that builds, owns and scales technology
                  businesses across the United States and the GCC.
                </p>
                <p>
                  We combine long-term ownership with shared engineering,
                  enterprise business development, governance, market access and
                  executive relationships.
                </p>
              </div>

              <div
                className="mt-8 max-w-md bg-black/40 backdrop-blur-md"
                style={{
                  WebkitBackdropFilter: "blur(21px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.28)",
                }}
              >
                <div className="flex items-center gap-3 px-5 py-3.5 md:px-6">
                  <img
                    src={USA_FLAG}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0 rounded-full object-cover"
                    decoding="async"
                  />
                  <p className="text-sm text-white">
                    Chicago, Illinois, United States.
                  </p>
                </div>
                <div
                  className="mx-10 h-px bg-white/25"
                  role="presentation"
                />
                <div className="flex items-center gap-3 px-5 py-3.5 md:px-6">
                  <img
                    src={UAE_FLAG}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0 rounded-full object-cover"
                    decoding="async"
                  />
                  <p className="text-sm text-white">
                    Dubai, United Arab Emirates.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="message-card relative ml-auto flex w-full max-w-[20.5rem] flex-col bg-black/50 p-6 backdrop-blur-2xl md:max-w-[22rem] md:min-h-[22rem] md:p-7 lg:min-h-[24rem] lg:p-8"
              style={{ WebkitBackdropFilter: "blur(40px)" }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-2 border-[0.5px] border-white/25"
              />
              <h2 className="text-[1.65rem] font-normal leading-[1.2] tracking-[-0.01em] md:text-[1.85rem]">
                A Message From
                <br />
                Joseph M. Bradley
              </h2>
              <p className="mt-5 max-w-[16rem] text-sm leading-relaxed text-white/90 md:mt-6">
                Our purpose, operating philosophy and long-term commitment.
              </p>
              <div className="mt-auto flex items-end justify-between gap-4 pt-10">
                <p className="text-[11px] leading-snug tracking-[0.04em] text-white/50">
                  Updated:
                  <br />
                  {formatUpdated(MESSAGE_UPDATED)}
                </p>
                <Link
                  href={MESSAGE_HREF}
                  className="home-read-more inline-flex h-9 shrink-0 items-center gap-3 bg-white py-1 pl-4 pr-1 no-underline hover:no-underline"
                >
                  <span className="text-[13px] font-semibold tracking-[0.02em] text-black">
                    Read More
                  </span>
                  <span
                    className="flex h-7 w-7 items-center justify-center bg-black text-white"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      className="h-3 w-3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 2l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-8 md:pt-10">
          <a
            href="#home-index"
            className="inline-flex text-white no-underline hover:text-white hover:no-underline"
            aria-label="Scroll to site index"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 64 64"
              fill="none"
              className="h-16 w-16"
              overflow="visible"
            >
              <path
                d="M3 64V33C3 16.4 16.4 3 32 3C47.6 3 61 16.4 61 33V64"
                stroke="currentColor"
                strokeWidth="0.7"
                strokeOpacity="0.32"
                strokeLinejoin="round"
              />
              <path
                d="M32 22v14"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeOpacity="0.85"
                strokeLinecap="round"
              />
              <path
                d="M26.5 31.5L32 37L37.5 31.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeOpacity="0.85"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
