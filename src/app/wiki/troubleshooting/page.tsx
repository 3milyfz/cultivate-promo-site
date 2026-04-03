import { WikiFaqItem } from "@/components/wiki/wiki-expandable";

export default function WikiTroubleshootingPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <header className="space-y-3 border-b border-zinc-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Troubleshooting &amp; FAQ
        </h1>
        <p className="text-base leading-relaxed text-zinc-600">
          Common issues and questions from beta testing. Expand an item to read
          the full answer.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-900">Common issues</h2>
        <div className="rounded-xl border border-zinc-200 bg-white px-4 shadow-sm">
          <WikiFaqItem question="I cannot sign in or the session drops unexpectedly.">
            <p>
              Confirm your environment variables and identity provider settings
              match the deployment you are using. Clear cookies for the app
              origin and retry; if the problem persists, capture the browser
              console error and file an issue with your team.
            </p>
          </WikiFaqItem>
          <WikiFaqItem question="Listings or messages fail to load.">
            <p>
              Check network connectivity and that the API base URL is correct.
              Verify the backend health endpoint if your deployment exposes one.
            </p>
          </WikiFaqItem>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-900">
          Frequently asked questions
        </h2>
        <div className="rounded-xl border border-zinc-200 bg-white px-4 shadow-sm">
          <WikiFaqItem question="Where is the full setup documented?">
            <p>
              Use the public setup guide from the site navigation, or follow the
              repository README for developer-specific steps.
            </p>
          </WikiFaqItem>
          <WikiFaqItem question="How do I tell a farmer flow from a restaurant flow?">
            <p>
              See the{" "}
              <a href="/wiki/features" className="text-[#00674F] hover:underline">
                Features
              </a>{" "}
              page. Tabs separate farmer-focused and restaurant-focused
              capabilities.
            </p>
          </WikiFaqItem>
        </div>
      </section>
    </div>
  );
}
