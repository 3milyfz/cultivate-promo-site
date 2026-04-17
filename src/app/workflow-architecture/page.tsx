import Image from "next/image";

export default function WorkflowArchitecturePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10">
      <header className="space-y-4 border-b border-zinc-200 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          How Cultivate works
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Workflow & Architecture
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
          How a user moves through Cultivate workflow and how the system behaves behind the scenes.
        </p>
      </header>

      <section className="space-y-6">
        <h2 id="workflow" className="text-lg font-semibold text-zinc-900">
          Workflow infographics
        </h2>
        <div className="grid gap-6 lg:grid-cols-[1.7fr,1.3fr] lg:items-start">
          <div className="space-y-3">
            <div className="mx-auto max-w-xl overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm md:max-w-2xl">
              <Image
                src="/farmer_workflow_v1.png"
                alt="Farmer workflow: create a listing with Glean, voice input, and dynamic pricing"
                width={1594}
                height={832}
                className="h-auto w-full object-contain object-top"
                sizes="(max-width: 768px) min(100vw,36rem), min(42rem, 50vw)"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed text-zinc-600">
              The farmer workflow is designed to be simple and intuitive.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 id="architecture" className="text-lg font-semibold text-zinc-900">
          Architecture diagram
        </h2>
        <div className="grid gap-6 lg:grid-cols-[1.7fr,1.3fr] lg:items-start">
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
            <p className="text-sm leading-relaxed text-zinc-600">
              Beta preserves the alpha system topology: a React frontend calls a
              Hono API server through a typed TypeScript SDK, with Auth0 JWT
              middleware protecting sensitive routes. The backend orchestrates
              MongoDB/GridFS storage, Azure Vision for image tagging, Groq for
              LLM inference, and AAFC Infohort for pricing data.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-200 bg-white/90 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">
                Major components
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-zinc-600">
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
            <div className="rounded-xl border border-zinc-200 bg-white/90 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">
                Architecture rationale
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                The beta topology is materially unchanged from alpha. The main
                beta update is about hardening of the existing architecture for
                external use: authenticated sensitive routes, stricter input
                validation on critical API paths, explicit upload failure
                handling, structured upload logs, and a health endpoint. In
                other words, beta extends the alpha architecture operationally
                rather than structurally.
              </p>
              <div className="mt-4 rounded-md border border-zinc-200 bg-[color:var(--color-earth-50)] p-3">
                <p className="text-xs font-semibold text-zinc-900">
                  Changes since alpha
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600">
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
