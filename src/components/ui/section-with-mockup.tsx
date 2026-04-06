import React from "react";

import { cn } from "@/lib/utils";

export interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  leftAside?: React.ReactNode;
  children: React.ReactNode;
  reverseLayout?: boolean;
  className?: string;
}

/**
 * Hero layout with CSS enter animation only — no Framer Motion. FM + App Router
 * client navigations were leaving columns stuck at opacity:0 after returning
 * via in-app links.
 */
export function SectionWithMockup({
  title,
  description,
  leftAside,
  children,
  reverseLayout = false,
  className,
}: SectionWithMockupProps) {
  const layoutClasses = reverseLayout
    ? "md:grid-cols-[minmax(0,1fr)_minmax(0,16.5rem)] md:grid-flow-col-dense"
    : "md:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)]";

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
          "grid w-full grid-cols-1 items-start gap-8 md:gap-8 lg:gap-10",
          layoutClasses,
        )}
      >
        <div
          className={cn(
            "section-mockup-text-col flex min-w-0 max-w-full flex-col gap-6",
            textOrderClass,
          )}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-3xl">
              {title}
            </h2>
            {description ? (
              <div className="text-sm leading-relaxed text-zinc-700 md:text-[15px]">
                {description}
              </div>
            ) : null}
          </div>
          {leftAside ? <div className="min-w-0">{leftAside}</div> : null}
        </div>

        <div className={cn("section-mockup-media-col min-w-0", sideOrderClass)}>
          {children}
        </div>
      </div>
    </section>
  );
}
