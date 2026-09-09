"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  "main section:not(.page-hero):not(.home-hero)",
  "main .letter-body",
  "main .secondary-page",
  "footer",
].join(",");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(SELECTOR));
    if (nodes.length === 0) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      nodes.forEach((node) => node.classList.add("is-inview"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
