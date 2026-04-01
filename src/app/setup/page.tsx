type Step = {
  title: string;
  description: string;
  details: string;
};

const prerequisiteItems: Step[] = [
  {
    title: "Operating system & environment",
    description:
      "Cultivate is developed and tested on modern macOS and Linux environments.",
    details:
      "- Recommended: macOS 13+ or Ubuntu 22.04+ with a recent x64 CPU\n- Node.js 20+ and npm 10+ installed\n- MongoDB 7+ reachable from your machine (local or remote)\n- Stable internet connection for Auth0 and OpenAI-compatible LLMs during Glean usage",
  },
  {
    title: "Required tools",
    description:
      "You will run a React/Vite frontend and a Hono + MongoDB backend locally.",
    details:
      "- Install Node.js from https://nodejs.org (LTS or current)\n- Install MongoDB Community Server or use a managed cluster\n- (Optional, for SDK work) `curl` and `git` for cloning and scripting\n- A modern browser (Chrome, Edge, or Firefox) for the app UI",
  },
  {
    title: "Accounts & access",
    description:
      "Cultivate uses Auth0 for authentication and can optionally call an LLM provider for Glean.",
    details:
      "- Auth0 tenant with a SPA + API application configured\n- Auth0 domain, client ID, and audience values\n- Optional: `OPENAI_API_KEY` or compatible key for richer Glean drafts\n- Make sure you have access to the GitHub repo: `[GITHUB_REPO_URL]`",
  },
];

const installationSteps: Step[] = [
  {
    title: "Clone the repo",
    description:
      "Fetch the Cultivate monorepo and move into the project directory.",
    details:
      "```bash\n# Clone the Cultivate repository\ngit clone [GITHUB_REPO_URL] cultivate\ncd cultivate\n```",
  },
  {
    title: "Install dependencies",
    description:
      "Install Node dependencies for both the frontend app and the backend server.",
    details:
      "```bash\n# From the repo root\ncd pkgs/app\nnpm install\n\ncd ../server\nnpm install\n```\n\nIf installation succeeds you should see `added`/`audited` package summaries and no fatal errors.",
  },
  {
    title: "Verify SDK generation (optional)",
    description:
      "If you plan to call the API programmatically, build the generated TypeScript SDK.",
    details:
      "```bash\ncd ../sdk\nnpm install\nnpm run build\n```\n\nA successful build will emit compiled files under `dist/` with no TypeScript errors.",
  },
];

const configurationSteps: Step[] = [
  {
    title: "Backend environment variables",
    description:
      "Configure the Hono server (`pkgs/server`) with MongoDB, Auth0, and optional LLM credentials.",
    details:
      "Create `pkgs/server/.env` with values similar to:\n\n```bash\nPORT=3000\nMONGODB_URI=mongodb://localhost:27017/cultivate\nAPI_URL=http://localhost:3000\n\n# Auth0\nAUTH0_DOMAIN=[YOUR_AUTH0_DOMAIN]\nAUTH0_AUDIENCE=[YOUR_AUTH0_API_AUDIENCE]\nAUTH0_CLIENT_ID=[YOUR_AUTH0_MACHINE_CLIENT_ID]\nAUTH0_CLIENT_SECRET=[YOUR_AUTH0_MACHINE_CLIENT_SECRET]\n\n# Optional: LLM for Glean\nOPENAI_API_KEY=[OPTIONAL_OPENAI_API_KEY]\n# or GROQ_API_KEY / OPENROUTER_API_KEY\n```",
  },
  {
    title: "Frontend environment variables",
    description:
      "Configure the React/Vite app (`pkgs/app`) to talk to your local API and Auth0 tenant.",
    details:
      "Create `pkgs/app/.env` with at least:\n\n```bash\nVITE_API_URL=http://localhost:3000\nVITE_AUTH0_DOMAIN=[YOUR_AUTH0_DOMAIN]\nVITE_AUTH0_CLIENT_ID=[YOUR_AUTH0_SPA_CLIENT_ID]\nVITE_AUTH0_AUDIENCE=[YOUR_AUTH0_API_AUDIENCE]\n```",
  },
  {
    title: "Seed produce items (optional)",
    description:
      "Populate reference produce items used by listings and Glean suggestions.",
    details:
      "```bash\ncd pkgs/server\nnpm run seed:produce\n```\n\nOn success you should see a log summary of inserted produce items. If MongoDB is unreachable, this command will exit with a connection error.",
  },
];

export default function SetupPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Setup Guide
        </h1>
        <p className="max-w-2xl text-sm text-zinc-700">
          A step-by-step guide for installing, configuring, and verifying
          Cultivate for the beta. Follow these instructions if you are setting
          up a local environment from scratch.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900">Prerequisites</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {prerequisiteItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white/90 p-4 text-sm shadow-sm"
            >
              <h3 className="text-sm font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-700">
                {item.description}
              </p>
              <pre className="mt-2 whitespace-pre-wrap rounded bg-[color:var(--color-earth-50)] p-2 text-[11px] text-zinc-700">
                {item.details}
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          Installation steps
        </h2>
        <ol className="space-y-3 text-sm">
          {installationSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-zinc-200 bg-white/90 p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E0F2EB] text-xs font-semibold text-[#00674F]">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-700">
                    {step.description}
                  </p>
                  <div className="rounded-md bg-[color:var(--color-earth-50)] p-3">
                    <p className="mb-2 text-[11px] font-semibold text-zinc-900">
                      Commands &amp; expected output
                    </p>
                    <pre className="overflow-x-auto rounded bg-white p-2 text-[11px] text-[#00674F]">
                      {step.details}
                    </pre>
                    <p className="mt-2 text-[11px] text-zinc-600">
                      If you see dependency or TypeScript errors here, check your Node
                      version and retry after clearing{" "}
                      <code className="mx-1">node_modules</code> and{" "}
                      <code className="mx-1">package-lock.json</code>.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          Configuration steps
        </h2>
        <ol className="space-y-3 text-sm">
          {configurationSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-zinc-200 bg-white/90 p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-harvest-50)] text-xs font-semibold text-[color:var(--color-earth-700)]">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-700">
                    {step.description}
                  </p>
                  <div className="rounded-md bg-[color:var(--color-earth-50)] p-3 text-[11px]">
                    <p className="mb-2 font-semibold text-zinc-900">
                      Config snippet
                    </p>
                    <pre className="overflow-x-auto rounded bg-white p-2 text-[11px] text-zinc-700">
                      {step.details}
                    </pre>
                    <p className="mt-2 text-zinc-600">
                      If the app cannot reach Auth0 or MongoDB, double‑check these
                      values first.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          Launch &amp; verification
        </h2>
        <div className="grid gap-4 md:grid-cols-[1.7fr,1.3fr]">
          <div className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-sm shadow-sm">
            <p className="text-xs font-semibold text-zinc-700">
              Start the backend API, then the frontend app, and verify both are
              healthy.
            </p>
            <pre className="mt-3 overflow-x-auto rounded bg-[color:var(--color-earth-50)] p-2 text-[11px] text-[#00674F]">
{`# Terminal 1: API server
cd pkgs/server
npm run dev

# Expected: Hono server listening on http://localhost:3000
# and /health returning {"healthy": true, ...}

# Terminal 2: Frontend app
cd pkgs/app
npm run dev

# Expected: Vite dev server on http://localhost:5173 (or similar)
# Visiting the URL should show the Cultivate landing screen with the logo.`}
            </pre>
          </div>
          <div className="rounded-lg border border-[#E0F2EB] bg-[#E0F2EB]/40 p-4 text-xs text-zinc-700">
            <p className="font-semibold text-[#00674F]">
              What you should see if things work
            </p>
            <p className="mt-2">
              After login with Auth0, new users land on the Glean page or the
              registration flow, with role selection (Farmer / Restaurant) and
              postal code capture. As a farmer you should be able to create a new
              listing with a photo; as a restaurant you should be able to browse
              listings and open a listing detail page with responses and chat
              actions available.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-900">
          If something fails
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {["Install errors", "Configuration issues", "Runtime failures"].map(
            (category) => (
              <div
                key={category}
                className="rounded-lg border border-zinc-200 bg-white/90 p-4 text-xs shadow-sm"
              >
                <h3 className="text-sm font-semibold text-zinc-900">
                  {category}
                </h3>
                <p className="mt-1 text-zinc-700">
                  Common issues in this category and how to recover.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-zinc-600">
                  {category === "Install errors" && (
                    <>
                      <li>
                        <span className="font-semibold">
                          `npm install` fails with Node version errors:
                        </span>{" "}
                        ensure you are on Node 20+ and delete{" "}
                        <code className="mx-1">node_modules</code> and{" "}
                        <code className="mx-1">package-lock.json</code> before
                        retrying.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Sharp or native module build failures:
                        </span>{" "}
                        install Xcode Command Line Tools (macOS) or
                        build‑essentials (Linux), then rerun the install.
                      </li>
                    </>
                  )}
                  {category === "Configuration issues" && (
                    <>
                      <li>
                        <span className="font-semibold">
                          Auth0 login loops or 401 from `/users`:
                        </span>{" "}
                        confirm `VITE_AUTH0_DOMAIN`, `VITE_AUTH0_AUDIENCE`, and
                        backend Auth0 values match your tenant.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Cannot connect to MongoDB:
                        </span>{" "}
                        check `MONGODB_URI`, ensure MongoDB is running, and that
                        your IP is whitelisted for managed clusters.
                      </li>
                    </>
                  )}
                  {category === "Runtime failures" && (
                    <>
                      <li>
                        <span className="font-semibold">
                          Glean chat returns fallback responses only:
                        </span>{" "}
                        set `OPENAI_API_KEY` or another compatible LLM key in{" "}
                        <code className="mx-1">pkgs/server/.env</code> and
                        restart the server.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Listing creation fails with postal code errors:
                        </span>{" "}
                        update your profile postal code to a valid Canadian
                        format (e.g. <code className="mx-1">K1A 0B1</code>)
                        before posting listings.
                      </li>
                    </>
                  )}
                </ul>
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}


