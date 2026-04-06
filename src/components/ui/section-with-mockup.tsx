import React from "react";

import { cn } from "@/lib/utils";

export interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  /** Right column: instructions, links, and contribution actions (replaces image mockups). */
  children: React.ReactNode;
  reverseLayout?: boolean;
  className?: string;
}

/**
 * Static hero/layout for contributing — no Framer Motion here. Motion + App Router
 * client navigation was leaving content at opacity:0 until full reload.
 */
export function SectionWithMockup({
  title,
  description,
  children,
  reverseLayout = false,
  className,
}: SectionWithMockupProps) {
  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";

  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const sideOrderClass = reverseLayout ? "md:col-start-1 md:row-start-1" : "";

  return (
    <section
      className={cn(
        "w-full rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm md:p-8",
        className,
      )}
    >
      <div
        className={cn(
          "grid w-full grid-cols-1 items-start gap-10 md:gap-12 lg:gap-16",
          layoutClasses,
        )}
      >
        <div
          className={cn(
            "flex max-w-xl flex-col gap-4",
            textOrderClass,
          )}
        >
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-3xl">
            {title}
          </h2>
          <div className="text-sm leading-relaxed text-zinc-700 md:text-[15px]">
            {description}
          </div>
        </div>

        <div className={cn("min-w-0", sideOrderClass)}>{children}</div>
      </div>
    </section>
  );
}
