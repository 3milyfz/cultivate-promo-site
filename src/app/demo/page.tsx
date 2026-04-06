import { PromoTutorialScroll } from "@/components/promo-tutorial-scroll";

export default function DemoPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Cultivate beta demo & tutorial
          </h1>
          <p className="max-w-2xl text-sm text-zinc-700">
          Demonstrate the main end-to-end workflows supported in the Cultivate beta release. Scroll through each step to see how farmer-side listing creation and restaurant-side sourcing are completed in the current product.
          </p>
        </div>
        </div>

        <div>
          <PromoTutorialScroll />
        </div>
      </section>
    </div>
  );
}
