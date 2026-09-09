import { getCdnUrl } from "@/lib/cdn";

const SITEMAP = [
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "Leadership", href: "/leadership" },
  { label: "Letters", href: "/letters" },
  { label: "News", href: "/news" },
  { label: "Governance", href: "/governance" },
] as const;

const LEGAL = [
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-bg pb-8 pt-16 md:pb-12 md:pt-24">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14">
        <div
          className="flex min-h-[17rem] flex-col justify-between gap-12 bg-cover bg-center bg-no-repeat p-8 md:min-h-[19rem] md:p-10 lg:flex-row lg:p-12"
          style={{ backgroundImage: "url(/assets/Footer.png)" }}
        >
          <div className="flex flex-col justify-between gap-10">
            <a
              href="/"
              className="inline-flex w-fit shrink-0 no-underline hover:no-underline"
              aria-label="Bradley Innovations Group home"
            >
              <img
                src={getCdnUrl("BIG_mark_light.svg")}
                alt="Bradley Innovations Group"
                width={160}
                height={56}
                className="h-10 w-auto md:h-12"
                decoding="async"
              />
            </a>
            <p className="text-sm text-white">
              Copyright © 2026 Bradley Innovations Group
            </p>
          </div>

          <div className="flex flex-col justify-between gap-10 lg:items-end">
            <nav aria-label="Sitemap">
              <p className="text-[11px] font-medium tracking-[0.18em] text-white/45">
                SITEMAP
              </p>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-white lg:items-end">
                {SITEMAP.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="no-underline hover:text-white hover:no-underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white lg:justify-end"
              aria-label="Legal"
            >
              {LEGAL.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="no-underline hover:text-white hover:no-underline"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
