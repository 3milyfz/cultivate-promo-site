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
    title: "Glean: speech to text",
    subtitle:
      "Dictate from the chat composer in the Ask Glean tab instead of typing.",
    body: (
      <p>
        Open the Ask Glean tab in the top navigation (next to Listings and
        Messages). At the bottom of the Glean screen, use voice input in the
        chat composer so your speech is turned into text. Glean can then help
        draft or refine a supply listing from what you said, still inside the
        Ask Glean tab.
      </p>
    ),
  },
  {
    title: "Glean: image upload & processing",
    subtitle:
      "Attach a photo from the composer in the Ask Glean tab so Glean can read your produce.",
    body: (
      <p>
        Stay on the Ask Glean tab and add an image through the multimodal
        controls in the bottom chat composer. After you send it, image
        processing runs in that same conversation to suggest titles, items,
        quantities, or other listing fields. You confirm or edit those details
        on the draft card Glean shows before anything is posted.
      </p>
    ),
  },
  {
    title: "Glean: dynamic pricing",
    subtitle:
      "Turn on dynamic pricing on the Glean draft card in Ask Glean, or on the new-listing form from the Listings tab.",
    body: (
      <p>
        When you post supply from the Ask Glean tab, the inventory draft card
        includes a dynamic pricing checkbox before you confirm. You can also
        open the Listings tab, start New listing (or edit an existing supply
        listing), and use the same kind of checkbox on that form. Either path
        keeps you on Cultivate while pricing can follow reference or market
        signals you still review before publishing.
      </p>
    ),
  },
  {
    title: "Supply listings & visibility",
    subtitle:
      "Create and manage supply from the Listings tab using New listing and listing detail views.",
    body: (
      <p>
        Go to the Listings tab to see every listing you can access. Use New
        listing from that area to publish supply, or open an existing card to
        edit quantity, price, or description. Search and filters on the Listings
        page also help you spot demand listings that fit your operation without
        leaving that tab.
      </p>
    ),
  },
  {
    title: "Respond to restaurant demand",
    subtitle:
      "Open a demand listing from the Listings tab to submit an offer in context.",
    body: (
      <p>
        In the Listings tab, filter or browse until you find a demand-type
        listing from a restaurant. Open it to read the request and add your
        response (volume, timing, and product details) in the listing flow. For
        ongoing coordination after that, continue in the Messages tab so the
        thread stays tied to the deal.
      </p>
    ),
  },
  {
    title: "Messaging & coordination",
    subtitle:
      "Use the Messages tab to read and reply to all conversation threads.",
    body: (
      <p>
        Choose Messages in the top navigation to leave Ask Glean or Listings
        and focus on chat. The Messages tab lists every thread so you can
        confirm pickup or delivery, packaging, and last-minute changes in one
        place before you commit to a buyer.
      </p>
    ),
  },
  {
    title: "Profile & trust",
    subtitle:
      "Open Profile from the account menu in the header (avatar or name, top right).",
    body: (
      <p>
        Profile is not one of the three main tabs; open it from the profile
        dropdown next to your role badge. There you can update how restaurants
        see your farm (contact and preferences). A complete Profile page makes
        it easier for kitchens to recognize you when they return to the Listings
        tab or message you from the Messages tab.
      </p>
    ),
  },
];

const restaurantFeatures: FeatureBlock[] = [
  {
    title: "Demand upload",
    subtitle:
      "Send a CSV attachment or type demand in the chat composer in the Ask Glean tab.",
    body: (
      <p>
        Open the Ask Glean tab (top navigation, same row as Listings and
        Messages). In the restaurant Glean experience, use the file attachment
        area in the bottom composer to upload a structured CSV, or type a
        natural-language order in the same composer. Either input stays in the
        Ask Glean thread as the starting point for parsing and optimization in
        that tab.
      </p>
    ),
  },
  {
    title: "Demand extraction",
    subtitle:
      "After you send a CSV or typed order in Ask Glean, parsing runs inside that chat thread.",
    body: (
      <p>
        You do not switch tabs for this step: once a file or natural-language
        demand is sent from the Ask Glean tab, the assistant extracts fields
        such as produce name, requested quantity, and other constraints when the
        input allows it. The structured result is shown in the same Ask Glean
        conversation and feeds the next optimization messages below it.
      </p>
    ),
  },
  {
    title: "Optimization shopping",
    subtitle:
      "Matching and scoring against live listings happen in the Ask Glean tab after demand is ready.",
    body: (
      <p>
        Still in Ask Glean, the system compares your extracted lines to farmer
        listings in the database and evaluates fit and price-style factors. You
        see recommendation-style assistant messages and product grids in that
        same tab rather than on a separate shopping page, which cuts down manual
        search across the Listings tab unless you choose to browse there later.
      </p>
    ),
  },
  {
    title: "Lowest cost plan",
    subtitle:
      "Pick the lowest-total-cost strategy from the options Glean presents in Ask Glean.",
    body: (
      <p>
        When Ask Glean offers multiple sourcing strategies, choose the one
        labeled around lowest cost while you remain in the Ask Glean tab. That
        selection tells the flow to prioritize spend across matched listings
        while still trying to cover your demand. Follow-up cards and carts in the
        same thread reflect that choice.
      </p>
    ),
  },
  {
    title: "Best match plan",
    subtitle:
      "Select the strongest match-quality strategy from the Ask Glean strategy choices.",
    body: (
      <p>
        From the strategy options shown in the Ask Glean conversation, pick
        the mode that emphasizes how closely listings align with your requested
        items and attributes. You stay in the Ask Glean tab for the handoff into
        product grids and allocations; use this when fit matters more than
        shaving every dollar from the total.
      </p>
    ),
  },
  {
    title: "Balanced plan",
    subtitle:
      "Choose the balanced strategy card inside the Ask Glean thread for a middle ground.",
    body: (
      <p>
        In Ask Glean, select the balanced strategy when you want neither pure
        lowest cost nor pure best match to dominate. The assistant continues the
        flow in that same tab, blending price and relevance before you review
        quantities in the interactive cart UI that appears in the chat.
      </p>
    ),
  },
  {
    title: "Cart review",
    subtitle:
      "Review the generated cart in the Ask Glean conversation before confirming.",
    body: (
      <p>
        After a plan is selected, the interactive checkout block renders inside
        the Ask Glean thread (not on a separate checkout-only screen in the main
        nav). Scroll within that tab to verify line items, quantities, and
        farmer assignments. This human-in-the-loop step keeps control in Ask
        Glean until you explicitly confirm or adjust.
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
