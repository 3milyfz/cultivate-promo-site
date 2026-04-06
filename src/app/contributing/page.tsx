const REPO = "https://github.com/csc454-team-main-catzo/Cultivate";

const LINKS = {
  contributing: `${REPO}/blob/main/CONTRIBUTING.md`,
  codeOfConduct: `${REPO}/blob/main/CODE_OF_CONDUCT.md`,
  bugReportNew: `${REPO}/issues/new?template=bug_report.md`,
  suggestionNew: `${REPO}/issues/new?template=feature_suggestion.md`,
  issueTemplates: `${REPO}/tree/main/.github/ISSUE_TEMPLATE`,
  exampleIssue: `${REPO}/issues/42`,
  triageComment: `${REPO}/issues/42#issuecomment-4180067950`,
  resolutionPr: `${REPO}/pull/43`,
} as const;

const evidenceLinkClass =
  "inline-flex w-full items-center justify-center rounded-md bg-[#00674F] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#00543f]";

export default function ContributingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Contributions
        </h1>
        <p className="max-w-2xl text-sm text-zinc-700">
          External testers and contributors file bugs and suggestions on GitHub
          using our issue templates. Read CONTRIBUTING.md and the code of conduct
          before participating; triage follows the beta SLA below.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-sm shadow-sm">
          <h2 className="text-sm font-semibold text-zinc-900">
            How to contribute
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-zinc-700">
            External contributors can report bugs, suggest improvements, and
            review contribution standards before participating.
          </p>
          <ul className="mt-3 space-y-2 text-xs">
            <li>
              <a
                href={LINKS.contributing}
                className="font-medium text-[#00674F] underline decoration-[#00674F]/30 underline-offset-2 hover:text-[#00543f]"
              >
                Read CONTRIBUTING.md
              </a>
            </li>
            <li>
              <a
                href={LINKS.codeOfConduct}
                className="font-medium text-[#00674F] underline decoration-[#00674F]/30 underline-offset-2 hover:text-[#00543f]"
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
          <p className="mt-1 text-xs leading-relaxed text-zinc-700">
            Use our GitHub issue templates to submit structured bug reports and
            product suggestions. Include reproduction steps, expected vs. actual
            behavior, and screenshots or logs when available.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a href={LINKS.bugReportNew} className={evidenceLinkClass}>
              Open a bug report
            </a>
            <a href={LINKS.suggestionNew} className={evidenceLinkClass}>
              Open a suggestion
            </a>
            <a
              href={LINKS.issueTemplates}
              className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-800 shadow-sm hover:border-[#00674F]/50 hover:text-[#00674F]"
            >
              View issue templates
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-sm shadow-sm">
          <h2 className="text-sm font-semibold text-zinc-900">
            Example external issue
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-zinc-700">
            An external tester reported a farmer listing bug where the suggested
            price hint did not update correctly when switching unit type.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a href={LINKS.exampleIssue} className={evidenceLinkClass}>
              View filed external issue
            </a>
            <a href={LINKS.triageComment} className={evidenceLinkClass}>
              View team triage response
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-sm shadow-sm">
          <h2 className="text-sm font-semibold text-zinc-900">
            Triage SLA &amp; outcome
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-zinc-700">
            Our beta triage SLA is{" "}
            <span className="font-medium text-zinc-900">
              acknowledgement within 24 hours
            </span>
            ,{" "}
            <span className="font-medium text-zinc-900">
              severity classification within 48 hours
            </span>
            , and{" "}
            <span className="font-medium text-zinc-900">
              resolution or formal deferral within 5 business days
            </span>
            . The issue above was reproduced, classified as Medium, and
            resolved or formally deferred.
          </p>
          <div className="mt-4">
            <a href={LINKS.resolutionPr} className={evidenceLinkClass}>
              View resolution / deferral
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
