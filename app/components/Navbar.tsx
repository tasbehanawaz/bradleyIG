"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
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
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

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
          className="shrink-0 no-underline hover:no-underline rounded-sm"
          aria-label="Bradley Innovations Group home"
        >
          <img
            src={getCdnUrl("BIG_mark_light.svg")}
            alt=""
            width={72}
            height={28}
            className="h-6 w-auto md:h-7"
            decoding="async"
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-x-4 lg:flex xl:gap-x-5"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap no-underline hover:no-underline rounded-sm text-[13px] xl:text-sm tracking-wide transition-colors ${
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

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text-neutral transition-colors hover:text-gold lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
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

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className={`pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="rounded-3xl border border-white/15 bg-black/70 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-glass"
          style={{ WebkitBackdropFilter: "blur(27px)" }}
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block border-b border-white/10 py-3.5 no-underline hover:no-underline rounded-sm text-sm tracking-wide last:border-b-0 ${
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
