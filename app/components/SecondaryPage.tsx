import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = {
  name: string;
  path: string;
};

type SecondaryPageProps = {
  title: string;
  /** Current page path for breadcrumbs, e.g. /about */
  path: string;
  /** Optional short lede shown under the H1 */
  lede?: string;
  /** Short introduction — prefer one or two short paragraphs */
  intro?: ReactNode;
  /** ISO date string, e.g. 2026-03-01 */
  published?: string;
  /** ISO date string, e.g. 2026-03-01 */
  updated?: string;
  /** Extra middle crumbs between Home and the current page */
  breadcrumbs?: Crumb[];
  children?: ReactNode;
};

function formatDisplayDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function SecondaryPage({
  title,
  path,
  lede,
  intro,
  published,
  updated,
  breadcrumbs = [],
  children,
}: SecondaryPageProps) {
  const hasDates = Boolean(published || updated);
  const crumbItems = [
    { name: "Home", path: "/" },
    ...breadcrumbs,
    { name: title, path },
  ];

  return (
    <article className="secondary-page container-prose py-12 md:py-20">
      <JsonLd data={breadcrumbSchema(crumbItems)} />

      <p className="mb-8">
        <a href="/" className="text-sm text-text-body secondary-link">
          ← Back to Home
        </a>
      </p>

      <header className="mb-10 md:mb-12 pb-8 border-b border-gold-dim/25">
        <h1 className="text-4xl md:text-[2.75rem] font-serif mb-4 leading-tight">
          {title}
        </h1>

        {hasDates ? (
          <p className="mb-4 text-sm text-text-body/70">
            {published ? (
              <span>Published {formatDisplayDate(published)}</span>
            ) : null}
            {published && updated ? <span aria-hidden="true"> · </span> : null}
            {updated ? (
              <span>Updated {formatDisplayDate(updated)}</span>
            ) : null}
          </p>
        ) : null}

        {lede ? (
          <p className="text-gold-gradient text-lg md:text-xl font-serif mb-4">
            {lede}
          </p>
        ) : null}

        {intro ? (
          <div className="body-stack text-text-body max-w-3xl">{intro}</div>
        ) : null}
      </header>

      {children ? <div className="secondary-body">{children}</div> : null}
    </article>
  );
}
