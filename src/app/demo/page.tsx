import { PromoTutorialScroll } from "@/components/promo-tutorial-scroll";

export default function DemoPage() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Promo
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Cultivate beta demo & tutorial
          </h1>
          <p className="max-w-2xl text-sm text-zinc-700">
            Use this page if you are evaluating the beta, capturing screenshots
            for a review, or just want to see an end‑to‑end flow before diving
            into the full wiki.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-zinc-900">
            Demo &amp; Tutorial
          </h2>
          <p className="max-w-2xl text-sm text-zinc-700">
            Scroll through each step: a tutorial frame (video when you plug in a
            URL, otherwise a stock still) with the instruction copy underneath.
            Prefer one long walkthrough? Use the end‑to‑end link first.
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-[color:var(--color-earth-50)]/80 p-1 md:p-2">
          <PromoTutorialScroll />
        </div>
      </section>
    </div>
  );
}
