import Link from "next/link";
import {
  WikiExpandableCard,
  WikiFaqItem,
} from "@/components/wiki/wiki-expandable";

export default function WikiGettingStartedPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4 border-b border-zinc-200 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Getting started
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          Welcome to the Cultivate wiki, structured like a product docs hub, with
          expandable topics and answers so you can skim or go deep.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/setup"
            className="inline-flex items-center rounded-lg bg-[#00674F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00543f]"
          >
            Open setup guide
          </Link>
          <Link
            href="/wiki/features"
            className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50"
          >
            Browse features
          </Link>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900">Discover</h2>
        <p className="text-sm text-zinc-600">
          Expand a card to read more, similar to topic tiles on cloud
          documentation home pages.
        </p>
        <div className="space-y-3">
          <WikiExpandableCard
            title="Before you begin"
            subtitle="Accounts, roles, and what you need installed."
            defaultOpen
          >
            <ul className="list-disc space-y-1.5 pl-4">
              <li>
                Complete the{" "}
                <Link href="/setup" className="text-[#00674F] hover:underline">
                  setup guide
                </Link>{" "}
                if you are running the app or API locally.
              </li>
              <li>
                Sign in with the credentials your team uses for the beta
                environment (farm vs restaurant flows may differ).
              </li>
              <li>
                For API or deployment topics, see{" "}
                <Link
                  href="/wiki/api-or-deployment"
                  className="text-[#00674F] hover:underline"
                >
                  API / Deployment
                </Link>
                .
              </li>
            </ul>
          </WikiExpandableCard>

          <WikiExpandableCard
            title="First successful workflow"
            subtitle="A short path to a visible “it works” moment."
          >
            <ol className="list-decimal space-y-2 pl-4">
              <li>Log in and open the listings area.</li>
              <li>
                As a farmer, create a supply listing; as a restaurant, create or
                browse demand, then connect through a response or message.
              </li>
              <li>
                Confirm you can open a thread and view listing details without
                errors.
              </li>
            </ol>
          </WikiExpandableCard>

          <WikiExpandableCard
            title="Where to go next"
            subtitle="Deeper articles in this wiki."
          >
            <ul className="list-disc space-y-1.5 pl-4">
              <li>
                <Link
                  href="/wiki/features"
                  className="text-[#00674F] hover:underline"
                >
                  Features
                </Link>
                : farmer vs restaurant tabs with expandable capability cards.
              </li>
              <li>
                <Link
                  href="/wiki/troubleshooting"
                  className="text-[#00674F] hover:underline"
                >
                  Troubleshooting &amp; FAQ
                </Link>
                : common errors and questions.
              </li>
            </ul>
          </WikiExpandableCard>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-900">
          Questions
        </h2>
        <p className="text-sm text-zinc-600">
          Quick answers: click a question to expand.
        </p>
        <div className="rounded-xl border border-zinc-200 bg-white px-4 shadow-sm">
          <WikiFaqItem question="What is Cultivate?">
            <p>
              Cultivate connects farmers and restaurants so sourcing and
              selling local product happens in one place: listings, responses, and
              messaging instead of fragmented channels.
            </p>
          </WikiFaqItem>
          <WikiFaqItem question="Is this documentation complete?">
            <p>
              This wiki is a living artifact for the beta. Sections marked as
              TODO in the repo should be filled in as your team finalizes copy
              and behavior.
            </p>
          </WikiFaqItem>
          <WikiFaqItem question="How do I report a bug or contribute?">
            <p>
              See{" "}
              <Link
                href="/contributing"
                className="text-[#00674F] hover:underline"
              >
                Contributions
              </Link>{" "}
              for links to issue trackers and contribution guidelines.
            </p>
          </WikiFaqItem>
        </div>
      </section>
    </div>
  );
}
