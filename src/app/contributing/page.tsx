export default function ContributingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Contributions
        </h1>
        <p className="max-w-2xl text-sm text-zinc-700">
          Explain how external users can file bug reports, propose ideas, and
          contribute code or wiki content to Cultivate.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-sm shadow-sm">
          <h2 className="text-sm font-semibold text-zinc-900">
            How to contribute
          </h2>
          <p className="mt-1 text-xs text-zinc-700">
            TODO: Describe the preferred paths for external contributions.
          </p>
          <ul className="mt-3 space-y-2 text-xs text-zinc-700">
            <li>
              <a
                href="https://github.com/csc454-team-main-catzo/Cultivate/blob/main/CONTRIBUTING.md"
                className="text-[#00674F] hover:text-[#00543f]"
              >
                Read CONTRIBUTING.md
              </a>
            </li>
            <li>
              <a
                href="https://github.com/csc454-team-main-catzo/Cultivate/blob/main/CODE_OF_CONDUCT.md"
                className="text-[#00674F] hover:text-[#00543f]"
              >
                Read CODE_OF_CONDUCT.md
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-sm shadow-sm">
          <h2 className="text-sm font-semibold text-zinc-900">
            Bug reports &amp; suggestions
          </h2>
          <p className="mt-1 text-xs text-zinc-700">
            TODO: Explain how to file issues and what information you need.
          </p>
          <ul className="mt-3 space-y-2 text-xs text-zinc-700">
            <li>
              <span className="font-semibold text-zinc-900">
                GitHub Issue templates:
              </span>{" "}
              <span className="text-zinc-600">
                LINK TO GITHUB ISSUE TEMPLATE
              </span>
            </li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-3 text-xs">
            <a
              href="https://github.com/csc454-team-main-catzo/Cultivate/issues/new"
              className="rounded-md bg-[#00674F] px-3 py-1.5 font-semibold text-white hover:bg-[#00543f]"
            >
              Open an Issue
            </a>
            <a
              href="https://github.com/csc454-team-main-catzo/Cultivate/blob/main/CONTRIBUTING.md"
              className="rounded-md border border-zinc-300 px-3 py-1.5 font-semibold text-zinc-800 hover:border-[#00674F]/70 hover:text-[#00674F]"
            >
              Read Contribution Guidelines
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-900">
          Issue lifecycle evidence
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-xs shadow-sm">
            <p className="font-semibold text-zinc-900">
              Example external issue
            </p>
            <p className="mt-1 text-zinc-700">
              TODO: Link to a real example issue and summarize the team’s
              response.
            </p>
            <a
              href="[EXTERNAL_ISSUE_URL]"
              className="mt-2 inline-flex text-[#00674F] hover:text-[#00543f]"
            >
              Link to example issue
            </a>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-xs shadow-sm">
            <p className="font-semibold text-zinc-900">
              Triage SLA &amp; resolution
            </p>
            <p className="mt-1 text-zinc-700">
              TODO: Describe your triage SLA (e.g., response within N business
              days) and how you communicate resolution or deferral.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

