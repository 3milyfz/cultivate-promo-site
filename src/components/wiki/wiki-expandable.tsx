"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type ExpandableCardProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export function WikiExpandableCard({
  title,
  subtitle,
  children,
  defaultOpen = false,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <details
      className="group rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md open:shadow-md"
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-3 rounded-xl px-4 py-3.5 text-left [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-zinc-900">
            {title}
          </span>
          {subtitle ? (
            <span className="mt-0.5 block text-xs text-zinc-600">
              {subtitle}
            </span>
          ) : null}
        </span>
        <ChevronDown
          className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="border-t border-zinc-100 px-4 pb-4 pt-1 text-sm leading-relaxed text-zinc-700">
        {children}
      </div>
    </details>
  );
}

type FaqItemProps = {
  question: string;
  children: React.ReactNode;
};

export function WikiFaqItem({ question, children }: FaqItemProps) {
  return (
    <details className="group border-b border-zinc-200 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3.5 text-left text-sm font-medium text-zinc-900 [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown
          className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="pb-4 pl-0 text-sm leading-relaxed text-zinc-600">{children}</div>
    </details>
  );
}
