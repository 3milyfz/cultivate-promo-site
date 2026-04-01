import Link from "next/link";

const docsNav = [
  { href: "/docs", label: "Getting Started" },
  { href: "/docs/features", label: "Features" },
  { href: "/docs/troubleshooting", label: "Troubleshooting & FAQ" },
  { href: "/docs/api-or-deployment", label: "API / Deployment" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[260px,minmax(0,1fr)]">
      <aside className="space-y-4 rounded-lg border border-zinc-200 bg-white/80 p-4 text-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Docs / Wiki
          </p>
          <p className="mt-1 text-xs text-zinc-600">
            Navigate all public documentation content from here.
          </p>
        </div>
        <nav className="space-y-1 text-xs">
          {docsNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded px-2 py-1 text-zinc-700 hover:bg-[color:var(--color-earth-100)] hover:text-[#00674F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="rounded-md border border-zinc-200 bg-[color:var(--color-harvest-50)] p-2 text-[11px] text-zinc-600">
          <p>
            Status:{" "}
            <span className="font-semibold text-amber-600">Beta</span>
          </p>
          <p className="mt-1">
            Last updated: TODO: Insert date or automation hook.
          </p>
        </div>
      </aside>
      <section className="space-y-4">{children}</section>
    </div>
  );
}

