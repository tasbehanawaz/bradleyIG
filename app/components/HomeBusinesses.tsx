"use client";

import Link from "next/link";
import { useRef } from "react";

export type HomeLink = {
  title: string;
  description: string;
  href: string;
  updated?: string;
};

const BG = "/assets/multiple-business.png";

function formatUpdated(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ReadMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="home-read-more inline-flex h-8 shrink-0 items-center gap-2 bg-white py-0.5 pl-3 pr-0.5 no-underline hover:no-underline"
    >
      <span className="text-xs font-semibold tracking-[0.02em] text-black">
        Read More
      </span>
      <span
        className="flex h-6 w-6 items-center justify-center bg-black text-white"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 12 12"
          fill="none"
          className="h-2.5 w-2.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 2l4 4-4 4" />
        </svg>
      </span>
    </Link>
  );
}

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "prev" ? (
        <path d="M10 3L5 8l5 5" />
      ) : (
        <path d="M6 3l5 5-5 5" />
      )}
    </svg>
  );
}

export default function HomeBusinesses({ links }: { links: HomeLink[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-index-card]");
    const gap = 16;
    const amount = (card?.offsetWidth ?? scroller.clientWidth * 0.7) + gap;
    scroller.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section
      id="home-index"
      aria-label="Site index"
      className="home-index relative overflow-hidden bg-[#141414] py-16 md:py-24"
    >
      <div className="relative mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="min-w-0 flex-1">
            <h2 className="section-heading text-3xl font-normal leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-[3.35rem]">
              One Parent. One Operating Team. Multiple Businesses.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white md:text-[0.95rem]">
              Bradley Innovations Group is a privately held, AI-native operating
              group that builds, owns and scales technology businesses across
              the United States and the GCC.
            </p>
          </div>

          <div className="flex shrink-0 gap-2 self-end">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center bg-white text-black"
              aria-label="Previous cards"
              onClick={() => scrollByCard(-1)}
            >
              <Chevron dir="prev" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center bg-white text-black"
              aria-label="Next cards"
              onClick={() => scrollByCard(1)}
            >
              <Chevron dir="next" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-14 md:px-10 lg:px-14">
        <div
          className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
          style={{ backgroundImage: `url(${BG})` }}
        >
          <div
            ref={scrollerRef}
            className="home-carousel relative flex items-stretch gap-3 overflow-x-auto px-4 scroll-smooth md:gap-4 md:px-6"
          >
            {links.map((link) => (
              <article
                key={link.href}
                data-index-card
                className="flex w-[min(16.5rem,78vw)] shrink-0 flex-col bg-black/55 p-4 md:w-[17.5rem] md:min-h-[14.5rem] md:p-5"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)" }}
              >
                <h3 className="text-base font-normal leading-snug tracking-[-0.01em] md:text-lg">
                  {link.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-white/85 md:text-[13px]">
                  {link.description}
                </p>
                <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                  {link.updated ? (
                    <p className="text-[10px] leading-snug tracking-[0.04em] text-white/45">
                      Updated:
                      <br />
                      {formatUpdated(link.updated)}
                    </p>
                  ) : (
                    <span />
                  )}
                  <ReadMore href={link.href} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <p className="relative mx-auto mt-12 max-w-[90rem] px-5 text-sm leading-relaxed text-white md:mt-16 md:px-10 md:text-[0.95rem] lg:px-14">
        We combine long-term ownership with shared engineering, enterprise
        business development, governance, market access and executive
        relationships.
      </p>
    </section>
  );
}
