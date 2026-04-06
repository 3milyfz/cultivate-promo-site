"use client";

import { useState } from "react";
import { WikiExpandableCard } from "./wiki-expandable";

type FeatureBlock = {
  title: string;
  subtitle: string;
  body: React.ReactNode;
};

const farmerFeatures: FeatureBlock[] = [
  {
    title: "Supply listings & visibility",
    subtitle: "Show what you grow and when it is available.",
    body: (
      <ul className="mt-2 list-disc space-y-1.5 pl-4 text-zinc-700">
        <li>Create supply listings so restaurants can discover your crops.</li>
        <li>Keep harvest windows and quantities up to date for better matches.</li>
        <li>Use search and filters to see demand that fits your operation.</li>
      </ul>
    ),
  },
  {
    title: "Respond to restaurant demand",
    subtitle: "Offer product when a kitchen posts what they need.",
    body: (
      <p>
        When a restaurant publishes a demand listing, you can respond with an
        offer that fits volume, timing, and product specs, keeping the
        conversation in one place instead of scattered emails or texts.
      </p>
    ),
  },
  {
    title: "Messaging & coordination",
    subtitle: "Align on details without leaving Cultivate.",
    body: (
      <p>
        Threaded messaging helps you confirm pickup or delivery, packaging, and
        last-minute changes with the buyer before you commit.
      </p>
    ),
  },
  {
    title: "Profile & trust",
    subtitle: "Help kitchens recognize your farm.",
    body: (
      <p>
        A clear profile with contact basics and how you prefer to work makes it
        easier for restaurants to choose you again for the next season.
      </p>
    ),
  },
];

const restaurantFeatures: FeatureBlock[] = [
  {
    title: "Demand upload",
    subtitle: "Upload a CSV file containing your produce requirements.",
    body: (
      <p>
        Start the restaurant workflow by uploading a structured demand file. The
        system accepts CSV input and uses it as the primary entry point for
        procurement, removing the need to manually create demand item-by-item
        inside the platform.
      </p>
    ),
  },
  {
    title: "Demand extraction",
    subtitle: "Parse uploaded demand into structured sourcing fields.",
    body: (
      <p>
        After file upload, Cultivate extracts procurement-relevant fields from the
        CSV, such as produce name, requested quantity, and other order
        constraints where available. This structured output becomes the input
        for downstream matching and optimization.
      </p>
    ),
  },
  {
    title: "Optimization shopping",
    subtitle: "Generate sourcing recommendations from uploaded demand.",
    body: (
      <p>
        Once demand is extracted, the platform compares the restaurant&apos;s
        requested items against available farmer listings in the database. The
        optimization layer evaluates both listing relevance and price-related
        factors to produce recommendation outputs that reduce manual search and
        comparison work.
      </p>
    ),
  },
  {
    title: "Lowest cost plan",
    subtitle: "Return the sourcing plan with the lowest total purchase cost.",
    body: (
      <p>
        This output prioritizes price efficiency across matched listings. Use
        this mode when the primary procurement objective is minimizing spend
        while still covering as much of the requested demand as possible.
      </p>
    ),
  },
  {
    title: "Best match plan",
    subtitle:
      "Return the sourcing plan with the strongest listing-to-demand alignment.",
    body: (
      <p>
        This output prioritizes semantic and attribute-level fit between the
        uploaded demand and the produce listings available in the system. Use
        this mode when closeness to the requested product characteristics matters
        more than lowest price.
      </p>
    ),
  },
  {
    title: "Balanced plan",
    subtitle: "Return a sourcing plan that balances cost and match quality.",
    body: (
      <p>
        This output combines both price and listing relevance into a
        middle-ground recommendation. Use this mode when neither pure cost
        minimization nor pure match quality should dominate the result.
      </p>
    ),
  },
  {
    title: "Cart review",
    subtitle: "Review and validate the recommended order before checkout.",
    body: (
      <p>
        Before finalizing the purchase, the restaurant user reviews the
        generated cart. This human-in-the-loop step preserves buyer control by
        allowing verification of selected items, quantities, and recommendation
        quality before order submission.
      </p>
    ),
  },
  {
    title: "Browse supply & discovery",
    subtitle: "View available produce manually through the Listings tab.",
    body: (
      <p>
        Restaurant users can also explore active farmer listings directly by
        navigating to the Listings tab. This supports manual browsing and
        discovery when the user wants to inspect available supply, explore
        seasonal inventory, or review grower offerings outside the
        upload-and-optimization workflow.
      </p>
    ),
  },
];

export function WikiFeatureTabs() {
  const [audience, setAudience] = useState<"farmers" | "restaurants">(
    "farmers",
  );

  const blocks =
    audience === "farmers" ? farmerFeatures : restaurantFeatures;

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label="Features by audience"
        className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50/80 p-1"
      >
        <button
          type="button"
          role="tab"
          id="tab-farmers"
          aria-selected={audience === "farmers"}
          aria-controls="panel-features"
          tabIndex={audience === "farmers" ? 0 : -1}
          onClick={() => setAudience("farmers")}
          className={
            audience === "farmers"
              ? "rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#00674F] shadow-sm ring-1 ring-zinc-200/80"
              : "rounded-md px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900"
          }
        >
          Farmers
        </button>
        <button
          type="button"
          role="tab"
          id="tab-restaurants"
          aria-selected={audience === "restaurants"}
          aria-controls="panel-features"
          tabIndex={audience === "restaurants" ? 0 : -1}
          onClick={() => setAudience("restaurants")}
          className={
            audience === "restaurants"
              ? "rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#00674F] shadow-sm ring-1 ring-zinc-200/80"
              : "rounded-md px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900"
          }
        >
          Restaurants
        </button>
      </div>

      <div
        id="panel-features"
        role="tabpanel"
        aria-labelledby={
          audience === "farmers" ? "tab-farmers" : "tab-restaurants"
        }
        className="space-y-3"
      >
        {blocks.map((f) => (
          <WikiExpandableCard key={f.title} title={f.title} subtitle={f.subtitle}>
            {f.body}
          </WikiExpandableCard>
        ))}
      </div>
    </div>
  );
}
