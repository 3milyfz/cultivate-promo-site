import { GitPullRequest } from "lucide-react";

import { SectionWithMockup } from "@/components/ui/section-with-mockup";

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

const docLinkClass =
  "font-medium text-[#00674F] underline decoration-[#00674F]/30 underline-offset-2 hover:text-[#00543f]";

export default function ContributingPage() {
  return (
    <div className="space-y-10">
      <SectionWithMockup
        title={
          <>
            Contributions,{" "}
            <span className="text-[#00674F]">grounded in clarity</span>
          </>
        }
        description={
          <p className="flex items-start gap-2">
            <GitPullRequest
              className="mt-0.5 size-4 shrink-0 text-[#00674F]"
              aria-hidden
            />
            <span>
              External testers and contributors use GitHub issue templates for
              bugs and product ideas. Read the docs before participating; triage
              follows the beta SLA below.
            </span>
          </p>
        }
      >
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Before you contribute
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-zinc-700">
              Review standards and community expectations, then use structured
              templates for bugs and suggestions.
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a href={LINKS.contributing} className={docLinkClass}>
                  Read CONTRIBUTING.md
                </a>
              </li>
              <li>
                <a href={LINKS.codeOfConduct} className={docLinkClass}>
                  Read CODE_OF_CONDUCT.md
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              File bugs &amp; suggestions
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-zinc-700">
              Include reproduction steps, expected vs. actual behavior, and
              screenshots or logs when available.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={LINKS.bugReportNew} className={evidenceLinkClass}>
                Report a bug
              </a>
              <a href={LINKS.suggestionNew} className={evidenceLinkClass}>
                Suggest a feature
              </a>
              <a
                href={LINKS.issueTemplates}
                className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-800 shadow-sm hover:border-[#00674F]/50 hover:text-[#00674F]"
              >
                View issue templates
              </a>
            </div>
          </div>
        </div>
      </SectionWithMockup>

      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Example contributions
        </p>

        <section className="grid gap-4 md:grid-cols-2">
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
              . The example issue was reproduced, classified as Medium, and
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
    </div>
  );
}
