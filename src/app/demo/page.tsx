import { PromoTutorialScroll } from "@/components/promo-tutorial-scroll";

export default function DemoPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10">
      <section className="space-y-6">
        <header className="space-y-4 border-b border-zinc-200 pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            How to use Cultivate
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Cultivate beta demo &amp; tutorial
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
            Demonstrate the main end-to-end workflows supported in the Cultivate
            beta release. Scroll through each step to see how farmer-side listing
            creation and restaurant-side sourcing are completed in the current
            product.
          </p>
        </header>

        <div>
          <PromoTutorialScroll />
        </div>
      </section>
    </div>
  );
}
