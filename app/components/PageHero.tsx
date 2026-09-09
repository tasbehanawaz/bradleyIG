import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { breadcrumbSchema } from "@/lib/schema";

const HOME_BG = "/assets/home-bg.jpg";

type Crumb = {
  name: string;
  path: string;
};

type PageHeroProps = {
  className?: string;
  current: string;
  path: string;
  crumbs?: Crumb[];
  heading: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  align?: "left" | "center";
};

export default function PageHero({
  className = "",
  current,
  path,
  crumbs = [],
  heading,
  children,
  aside,
  align = "left",
}: PageHeroProps) {
  const centered = align === "center";
  return (
    <section className={`page-hero relative overflow-hidden ${className}`.trim()}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          ...crumbs,
          { name: current, path },
        ])}
      />
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-bg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HOME_BG})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-14">
        <PageBreadcrumb current={current} items={crumbs} />

        {aside ? (
          <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-normal leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-[3.35rem]">
                {heading}
              </h1>
              {children}
            </div>
            {aside}
          </div>
        ) : (
          <div
            className={`mt-10 lg:mt-14 ${centered ? "text-center" : "max-w-3xl"}`}
          >
            <h1
              className={`text-4xl font-normal leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-[3.35rem] ${
                centered ? "mx-auto" : ""
              }`}
            >
              {heading}
            </h1>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
