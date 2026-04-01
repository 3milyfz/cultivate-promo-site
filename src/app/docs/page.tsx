export default function DocsGettingStartedPage() {
  return (
    <article className="prose max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-code:text-[#00674F]">
      <h1>Getting Started</h1>
      <p>
        TODO: Overview text for brand-new users of Cultivate. Explain what they
        can accomplish in the first 10–15 minutes.
      </p>

      <h2>Before you begin</h2>
      <ul>
        <li>TODO: Link back to the Setup Guide for full installation steps.</li>
        <li>TODO: Note any account / permission requirements.</li>
      </ul>

      <h2>First successful run</h2>
      <p>
        TODO: Provide a concise step-by-step sequence that results in a visible
        “it works” moment for the user.
      </p>
      <pre>
        <code>{`# TODO: Insert minimal first-run command or script
# Example:
# cultivate init
# cultivate run demo`}</code>
      </pre>
    </article>
  );
}

