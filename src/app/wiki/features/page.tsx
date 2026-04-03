import { WikiFeatureTabs } from "@/components/wiki/wiki-feature-tabs";

export default function WikiFeaturesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <header className="space-y-3 border-b border-zinc-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Features
        </h1>
        <p className="text-base leading-relaxed text-zinc-600">
          Explore what Cultivate offers for each side of the marketplace. Use
          the tabs to switch between farmer-focused and restaurant-focused
          capabilities, each section expands for more detail.
        </p>
      </header>

      <WikiFeatureTabs />
    </div>
  );
}
