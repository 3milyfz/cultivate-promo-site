import Image from "next/image";

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

const btnPrimary =
  "mx-auto inline-flex w-[220px] max-w-full items-center justify-center rounded-md bg-[#00674F] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#00543f]";

const btnOutline =
  "mx-auto inline-flex w-[220px] max-w-full items-center justify-center rounded-md border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-800 shadow-sm hover:border-[#00674F]/50 hover:text-[#00674F]";

const docLinkClass =
  "font-medium text-[#00674F] underline decoration-[#00674F]/30 underline-offset-2 hover:text-[#00543f]";

const cardClass =
  "rounded-lg border border-zinc-200 bg-white/90 p-4 shadow-sm";

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
        leftAside={
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Before you contribute
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-zinc-700">
              Review standards and community expectations before filing issues or
              suggestions.
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
        }
      >
        {/* Layered mockup: triage (back) left, issue (front) right; object-left shows the left of each screenshot. */}
        <div className="relative mx-auto flex w-full flex-col gap-3 pb-1 md:grid md:grid-cols-1 md:gap-0">
          <div className="relative z-0 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg md:col-start-1 md:row-start-1 md:w-[min(54%,min(460px,100%))] md:justify-self-start md:self-start">
            <Image
              src="/triage_example_new.png"
              alt="Official triage comment on the example issue"
              width={676}
              height={507}
              className="h-auto w-full object-contain object-top-left"
              sizes="(max-width: 768px) 100vw, min(460px, 36vw)"
              priority
              fetchPriority="high"
            />
          </div>
          <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-xl md:col-start-1 md:row-start-1 md:mt-0 md:w-[min(66%,min(720px,100%))] md:max-w-[66%] md:-translate-y-4 md:justify-self-end md:self-start">
            <Image
              src="/external_issue_example.png"
              alt="GitHub issue #42: price hint when switching unit type"
              width={890}
              height={791}
              className="h-auto w-full object-contain object-top-left"
              sizes="(max-width: 768px) 100vw, min(720px, 56vw)"
              priority
            />
          </div>
        </div>
      </SectionWithMockup>

      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Get started
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className={cardClass}>
            <h2 className="text-lg font-semibold text-zinc-900">
              Reporting bugs &amp; suggestions
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              Use GitHub issue templates. Include reproduction steps, expected vs.
              actual behavior, and screenshots or logs when available.
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              <a href={LINKS.bugReportNew} className={btnPrimary}>
                Report a bug
              </a>
              <a href={LINKS.suggestionNew} className={btnPrimary}>
                Suggest a feature
              </a>
              <a href={LINKS.issueTemplates} className={btnOutline}>
                View issue templates
              </a>
            </div>
          </div>

          <div className={cardClass}>
            <h2 className="text-lg font-semibold text-zinc-900">
              Example external issue
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              A tester reported a farmer listing bug: the suggested price hint
              did not update correctly when switching unit type (#42).
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              <a href={LINKS.exampleIssue} className={btnPrimary}>
                View filed external issue
              </a>
            </div>
          </div>

          <div className={cardClass}>
            <h2 className="text-lg font-semibold text-zinc-900">
              Team triage &amp; resolution
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              Beta SLA:{" "}
              <span className="font-medium text-zinc-900">24h</span>{" "}
              acknowledgement,{" "}
              <span className="font-medium text-zinc-900">48h</span> severity
              classification,{" "}
              <span className="font-medium text-zinc-900">
                5 business days
              </span>{" "}
              for resolution or formal deferral.
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              <a href={LINKS.triageComment} className={btnPrimary}>
                View team triage response
              </a>
              <a href={LINKS.resolutionPr} className={btnPrimary}>
                View resolution
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
