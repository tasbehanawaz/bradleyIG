import type { ReactNode } from "react";

type ContentCardProps = {
  children: ReactNode;
  className?: string;
};

/** Card container — use only for companies, leaders, news and letters. */
export default function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div
      className={`content-card rounded-2xl border border-gold-dim/30 bg-white/[0.025] px-5 py-6 md:px-7 md:py-8 ${className}`}
    >
      {children}
    </div>
  );
}
