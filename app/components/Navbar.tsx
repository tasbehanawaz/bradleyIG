"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCdnUrl } from "@/lib/cdn";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "How We Operate", href: "/how-we-operate" },
  { label: "Identic AI", href: "/identic-ai" },
  { label: "Leadership", href: "/leadership" },
  { label: "Letters & Perspectives", href: "/letters" },
  { label: "News", href: "/news" },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-4 md:px-5 md:pt-5">
      <div
        className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/15 bg-black/45 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-glass md:gap-6 md:px-6 md:py-3"
        style={{ WebkitBackdropFilter: "blur(27px)" }}
      >
        <Link
          href="/"
          className="shrink-0 no-underline hover:no-underline"
          aria-label="Bradley Innovations Group home"
        >
          <img
            src={getCdnUrl("BIG_mark_light.svg")}
            alt="Bradley Innovations Group"
            width={72}
            height={28}
            className="h-6 w-auto md:h-7"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-x-4 lg:flex xl:gap-x-5"
          aria-label="Main"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap no-underline hover:no-underline text-[13px] xl:text-sm tracking-wide transition-colors ${
                  active
                    ? "text-gold"
                    : "text-text-neutral hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text-neutral transition-colors hover:text-gold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-px w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-px w-full bg-current transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={`pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="rounded-3xl border border-white/15 bg-black/70 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-glass"
          style={{ WebkitBackdropFilter: "blur(27px)" }}
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block border-b border-white/10 py-3.5 no-underline hover:no-underline text-sm tracking-wide last:border-b-0 ${
                      active
                        ? "text-gold"
                        : "text-text-neutral hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
