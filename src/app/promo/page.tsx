const featureVideos = [
  {
    id: "register",
    title: "1. Sign up and choose your role",
    description:
      "Walk through registering with Auth0, choosing farmer or restaurant, and setting your Canadian postal code so listings are location‑aware.",
    urlPlaceholder: "[TUTORIAL_SIGNUP_AND_ROLE_VIDEO_URL]",
  },
  {
    id: "farmer-listing",
    title: "2. Farmer: draft a listing with Glean",
    description:
      "See how a farmer snaps a photo of their harvest, lets Glean draft price and description from market data, and posts a supply listing in under a minute.",
    urlPlaceholder: "[TUTORIAL_FARMER_LISTING_VIDEO_URL]",
  },
  {
    id: "restaurant-sourcing",
    title: "3. Restaurant: source local produce in chat",
    description:
      "Follow a restaurant as they ask Glean for specific produce, browse matching listings, and start a conversation with a farmer.",
    urlPlaceholder: "[TUTORIAL_RESTAURANT_SOURCING_VIDEO_URL]",
  },
  {
    id: "matching-fulfilment",
    title: "4. Match, chat, and mark fulfilled",
    description:
      "Learn how responses, chat threads, and the matched/fulfilled states work once buyer and seller agree on terms.",
    urlPlaceholder: "[TUTORIAL_MATCH_AND_FULFILL_VIDEO_URL]",
  },
];

export default function PromoPage() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Promo
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Cultivate beta overview
          </h1>
          <p className="max-w-2xl text-sm text-zinc-700">
            Cultivate connects farmers with restaurants through{" "}
            <span className="font-semibold">Glean</span>, an AI assistant that
            turns harvests into listings and helps buyers source nearby produce
            in natural language. It is designed for small and mid‑sized farms
            and restaurant teams who want local, transparent supply without the
            overhead of traditional marketplaces.
          </p>
          <p className="max-w-xl text-xs text-zinc-500">
            Use this page if you are evaluating the beta, capturing screenshots
            for a review, or just want to see an end‑to‑end flow before diving
            into the full wiki.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-xs shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00674F] text-white text-xs font-semibold">
            C
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Cultivate · Beta</p>
            <p className="text-[11px] text-zinc-600">
              Connect farmers with restaurants. Source local, eat local.
            </p>
          </div>
        </div>
      </section>

      <section id="demo-tutorial" className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-zinc-900">
            Demo &amp; Tutorial
          </h2>
          <p className="max-w-2xl text-sm text-zinc-700">
            Use either a single end‑to‑end video or the short feature
            walkthroughs below to go from zero to completing the primary
            Cultivate workflow{" "}
            <span className="font-semibold text-zinc-900">
              without reading additional wiki pages.
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-200 bg-white/90 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Option A
            </p>
            <h3 className="mt-1 text-sm font-semibold text-zinc-900">
              End-to-end tutorial video
            </h3>
            <div className="mt-3 grid gap-4 md:grid-cols-[1.7fr,1.3fr]">
              <div className="flex h-52 items-center justify-center rounded-md border border-dashed border-[#E0F2EB] bg-[#E0F2EB]/40 text-xs text-zinc-700">
                <a
                  href="[TUTORIAL_MAIN_VIDEO_URL]"
                  className="inline-flex items-center justify-center rounded-full bg-[#00674F] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#00543f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A27A]/70"
                >
                  Open end‑to‑end tutorial
                </a>
              </div>
              <p className="text-xs text-zinc-700">
                This video starts from a clean checkout, walks through Auth0
                sign‑in and registration, shows a farmer creating a listing with
                Glean, then switches to a restaurant account to search, chat,
                and mark the listing as fulfilled. If you only watch one thing,
                watch this.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white/90 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Option B
            </p>
            <h3 className="mt-1 text-sm font-semibold text-zinc-900">
              Feature walkthrough videos
            </h3>
            <p className="mt-2 text-xs text-zinc-600">
              Prefer focused clips? Use these short videos that map to real
              workflows in the app. Each card links to a separate recording.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {featureVideos.map((video) => (
                <article
                  key={video.id}
                  className="flex flex-col gap-3 rounded-md border border-zinc-200 bg-white p-3 text-xs shadow-sm"
                >
                  <div className="flex h-24 items-center justify-center rounded border border-dashed border-[#E0F2EB] bg-[#E0F2EB]/40 text-[10px] text-zinc-700">
                    <a
                      href={video.urlPlaceholder}
                      className="rounded-full bg-[#00674F] px-3 py-1.5 font-semibold text-white hover:bg-[#00543f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A27A]/70"
                    >
                      Open clip
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">
                      {video.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-zinc-700">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

