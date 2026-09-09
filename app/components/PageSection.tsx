import type { ReactNode } from "react";

const GLOW = "/assets/multiple-business.png";

export function SectionHeading({
  children,
  align = "left",
}: {
  children: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[90rem] px-5 md:px-10 lg:px-14 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <h2
        className={`section-heading text-3xl font-normal leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-[3.35rem] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {children}
      </h2>
    </div>
  );
}

export function GlowBand({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-12 md:px-10 lg:px-14">
      <div
        className="bg-cover bg-center bg-no-repeat py-8 md:py-10"
        style={{ backgroundImage: `url(${GLOW})` }}
      >
        {children}
      </div>
    </div>
  );
}

export function OverlayCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-black/55 p-5 md:p-6 ${className}`}
      style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)" }}
    >
      {children}
    </div>
  );
}
