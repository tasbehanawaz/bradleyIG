"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { getCdnUrl } from "@/lib/cdn";

const NAV_PRIMARY = [
  { label: "Companies", href: "/companies" },
  { label: "How We Operate", href: "/how-we-operate" },
  { label: "Identic AI", href: "/identic-ai" },
  { label: "Leadership", href: "/leadership" },
  { label: "About", href: "/about" },
] as const;

const NAV_SECONDARY = [
  { label: "Letters & Perspectives", href: "/letters" },
  { label: "News", href: "/news" },
] as const;

const NAV_ITEMS = [...NAV_PRIMARY, ...NAV_SECONDARY];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const active = isActive(pathname, href);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`whitespace-nowrap no-underline hover:no-underline rounded-sm text-[13px] tracking-[0.06em] transition-colors xl:text-sm ${
        active ? "text-white" : "text-white/85 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto max-w-[90rem] px-5 md:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-6 pt-5 pb-3 md:pt-6 md:pb-3.5">
          <div className="flex min-w-0 items-end gap-8 lg:gap-10 xl:gap-12">
            <Link
              href="/"
              className="relative z-10 shrink-0 no-underline hover:no-underline rounded-sm"
              aria-label="Bradley Innovations Group home"
            >
              <img
                src={getCdnUrl("BIG_mark_light.svg")}
                alt=""
                width={72}
                height={28}
                className="h-7 w-auto md:h-8"
                decoding="async"
              />
            </Link>

            <nav
              className="hidden min-w-0 items-end gap-x-5 lg:flex xl:gap-x-7"
              aria-label="Primary"
            >
              {NAV_PRIMARY.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  pathname={pathname}
                />
              ))}
            </nav>
          </div>

          <nav
            className="hidden items-end gap-x-5 lg:flex xl:gap-x-7"
            aria-label="Secondary"
          >
            {NAV_SECONDARY.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                pathname={pathname}
              />
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-white transition-colors hover:text-white/80 lg:hidden"
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

        <div className="h-px w-full bg-white/25" role="presentation" />
      </div>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className={`pointer-events-auto mx-auto max-w-[90rem] overflow-hidden px-5 transition-[max-height,opacity] duration-300 md:px-10 lg:hidden lg:px-14 ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mt-3 border border-white/15 bg-black/75 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-glass"
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
                    className={`block border-b border-white/10 py-3.5 no-underline hover:no-underline rounded-sm text-sm tracking-[0.06em] last:border-b-0 ${
                      active ? "text-white" : "text-white/80 hover:text-white"
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
