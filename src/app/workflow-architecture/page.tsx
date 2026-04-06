import Image from "next/image";

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
            <div className="mx-auto max-w-xl overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm md:max-w-2xl">
              <Image
                src="/architecture_diagram.png"
                alt="System architecture: React frontend and TypeScript SDK calling Hono API with Auth0 JWT, MongoDB and GridFS, Azure Vision, Groq LLM, and AAFC Infohort pricing"
                width={1594}
                height={832}
                className="h-auto w-full object-contain object-top"
                sizes="(max-width: 768px) min(100vw,36rem), min(42rem, 50vw)"
                priority
              />
            </div>
            <p className="text-xs leading-relaxed text-zinc-700">
              Beta preserves the alpha system topology: a React frontend calls a
              Hono API server through a typed TypeScript SDK, with Auth0 JWT
              middleware protecting sensitive routes. The backend orchestrates
              MongoDB/GridFS storage, Azure Vision for image tagging, Groq for
              LLM inference, and AAFC Infohort for pricing data.
            </p>
          </div>
          <div className="space-y-4 text-xs">
            <div className="rounded-lg border border-zinc-200 bg-white/90 p-3 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">
                Major components
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-zinc-700">
                <li>
                  <span className="font-medium text-zinc-900">
                    React frontend:
                  </span>{" "}
                  user-facing web client
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    TypeScript SDK:
                  </span>{" "}
                  typed API client generated from OpenAPI spec
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    Hono API server:
                  </span>{" "}
                  request handling, orchestration, and integration layer
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    Auth0 JWT middleware:
                  </span>{" "}
                  authentication and route protection
                </li>
                <li>
                  <span className="font-medium text-zinc-900">MongoDB:</span>{" "}
                  application and listing metadata
                </li>
                <li>
                  <span className="font-medium text-zinc-900">GridFS:</span>{" "}
                  uploaded image storage
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    Azure Vision:
                  </span>{" "}
                  image tagging for listing generation
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    Groq / LLM inference:
                  </span>{" "}
                  structured draft generation and retrieval-based matching
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    AAFC Infohort:
                  </span>{" "}
                  external pricing dependency for daily market data
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white/90 p-3 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">
                Architecture rationale
              </h3>
              <p className="mt-1 leading-relaxed text-zinc-700">
                The beta topology is materially unchanged from alpha. The main
                beta update is about hardening of the existing architecture for
                external use: authenticated sensitive routes, stricter input
                validation on critical API paths, explicit upload failure
                handling, structured upload logs, and a health endpoint. In
                other words, beta extends the alpha architecture operationally
                rather than structurally.
              </p>
              <div className="mt-3 rounded-md border border-zinc-200 bg-[color:var(--color-earth-50)] p-2">
                <p className="text-[11px] font-semibold text-zinc-900">
                  Changes since alpha
                </p>
                <p className="mt-1 text-[11px] text-zinc-700">
                  No changes since alpha
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
