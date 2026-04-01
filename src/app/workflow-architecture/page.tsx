export default function WorkflowArchitecturePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Workflow &amp; Architecture
        </h1>
        <p className="max-w-2xl text-sm text-zinc-700">
          Use this page to tell a clear story about how a user moves through the
          Cultivate workflow and how the system behaves behind the scenes.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          Primary user workflow
        </h2>
        <div className="grid gap-4 lg:grid-cols-[1.7fr,1.3fr] lg:items-start">
          <div className="rounded-xl border border-dashed border-[#E0F2EB] bg-[#E0F2EB]/40 p-4 text-xs text-zinc-700">
            WORKFLOW INFOGRAPHIC (CUSTOM DIAGRAM) HERE
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold text-zinc-600">
              TODO: Use the fields below to describe each step in the workflow.
            </p>
            <ol className="space-y-3 text-xs">
              {[1, 2, 3, 4].map((step) => (
                <li
                  key={step}
                  className="rounded-md border border-zinc-200 bg-white/90 p-3 shadow-sm"
                >
                  <p className="text-[11px] font-semibold text-[#00674F]">
                    TODO: Step {step} title
                  </p>
                  <p className="mt-1 text-zinc-800">
                    What the user does: TODO: Describe the user action.
                  </p>
                  <p className="mt-1 text-zinc-700">
                    What the system does: TODO: Describe system behavior,
                    calls, and side-effects.
                  </p>
                  <p className="mt-1 text-zinc-600">
                    Decision points / error states: TODO: Explain any branches,
                    retries, or failure modes for this step.
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="architecture" className="text-lg font-semibold text-zinc-900">
          Architecture diagram
        </h2>
        <div className="grid gap-4 lg:grid-cols-[1.7fr,1.3fr] lg:items-start">
          <div className="space-y-3">
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-[#E0F2EB] bg-[#E0F2EB]/40 text-xs text-zinc-700">
              ARCHITECTURE DIAGRAM IMAGE PLACEHOLDER
            </div>
            <p className="text-xs text-zinc-700">
              TODO: Add caption and alt text describing the architecture
              diagram, major components, and important data flows.
            </p>
          </div>
          <div className="space-y-4 text-xs">
            <div className="rounded-lg border border-zinc-200 bg-white/90 p-3 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">
                Major components &amp; data flows
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-700">
                <li>TODO: Component A and its responsibilities.</li>
                <li>TODO: Component B and how it interacts with A.</li>
                <li>TODO: External dependency X and data it handles.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white/90 p-3 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">
                Architecture rationale
              </h3>
              <p className="mt-1 text-zinc-700">
                TODO: Describe why this architecture is appropriate for the
                beta, including trade-offs and constraints.
              </p>
              <div className="mt-2 rounded-md border border-zinc-200 bg-[color:var(--color-earth-50)] p-2">
                <p className="text-[11px] font-semibold text-zinc-900">
                  Changes since alpha
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-[11px] text-zinc-600">
                  <li>
                    TODO: Either list specific changes here or state{" "}
                    <span className="font-semibold text-zinc-800">
                      “No changes since alpha”
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

