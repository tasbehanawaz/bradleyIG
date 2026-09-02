import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = {
  name: string;
  path: string;
};

type Portrait = {
  src: string;
  alt: string;
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
  /** Optional portrait shown left of the page title */
  portrait?: Portrait;
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
  portrait,
  children,
}: SecondaryPageProps) {
  const hasDates = Boolean(published || updated);
  const showUpdated = Boolean(updated && updated !== published);
  const crumbItems = [
    { name: "Home", path: "/" },
    ...breadcrumbs,
    { name: title, path },
  ];

  const dates = hasDates ? (
    <p className="mb-4 text-sm text-text-body/70">
      {published ? <span>Published {formatDisplayDate(published)}</span> : null}
      {!published && updated ? (
        <span>Updated {formatDisplayDate(updated)}</span>
      ) : null}
      {published && showUpdated ? <span aria-hidden="true"> · </span> : null}
      {published && showUpdated ? (
        <span>Updated {formatDisplayDate(updated!)}</span>
      ) : null}
    </p>
  ) : null;

  return (
    <article className="secondary-page container-page py-12 md:py-20">
      <JsonLd data={breadcrumbSchema(crumbItems)} />

      <p className="mb-8">
        <a href="/" className="text-sm text-text-body secondary-link">
          ← Back to Home
        </a>
      </p>

      <header
        className={`mb-10 md:mb-12 pb-8 border-b border-gold-dim/25 ${
          portrait ? "page-header-with-portrait" : ""
        }`}
      >
        {portrait ? (
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <img
              src={portrait.src}
              alt={portrait.alt}
              width={160}
              height={160}
              className="h-28 w-28 shrink-0 rounded-full object-cover border border-gold-dim/40 sm:h-36 sm:w-36 md:h-40 md:w-40"
              decoding="async"
            />
            <div className="portrait-heading-block min-w-0 flex-1">
              <h1 className="page-title-beside-portrait text-3xl md:text-[2.5rem] font-sans text-gold mb-3 leading-tight">
                {title}
              </h1>
              {dates}
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-4xl md:text-[2.75rem] font-sans text-gold mb-4 leading-tight">
              {title}
            </h1>
            {dates}
          </>
        )}

        {lede ? (
          <p
            className={`text-gold-gradient text-lg md:text-xl font-sans mb-4 ${
              portrait ? "mt-6" : ""
            }`}
          >
            {lede}
          </p>
        ) : null}

        {intro ? (
          <div className="body-stack text-text-body">{intro}</div>
        ) : null}
      </header>

      {children ? <div className="secondary-body">{children}</div> : null}
    </article>
  );
}
