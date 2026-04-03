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
        offer that fits volume, timing, and product specs—keeping the
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
    title: "Demand listings & sourcing",
    subtitle: "Post what you need and collect farmer responses.",
    body: (
      <ul className="mt-2 list-disc space-y-1.5 pl-4 text-zinc-700">
        <li>Publish demand for ingredients, quantities, and delivery windows.</li>
        <li>Compare farmer offers in context with the original request.</li>
        <li>Reduce back-and-forth by keeping sourcing on-platform.</li>
      </ul>
    ),
  },
  {
    title: "Browse supply & discovery",
    subtitle: "Find farms that already have what you need.",
    body: (
      <p>
        Explore supply-side listings to discover seasonal product and build
        relationships with growers who match your menu and volume.
      </p>
    ),
  },
  {
    title: "Checkout & handoff (where enabled)",
    subtitle: "Structured next steps after you agree.",
    body: (
      <p>
        When your deployment includes checkout or ordering flows, use them to
        confirm totals and handoff details in line with your team&apos;s
        process.
      </p>
    ),
  },
  {
    title: "Team alignment",
    subtitle: "Keep procurement decisions traceable.",
    body: (
      <p>
        Centralized threads and listing history help your kitchen or
        procurement staff see what was agreed and with whom—useful for audits
        and repeat orders.
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
