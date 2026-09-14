import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="shell narrow">
          <p className="eyebrow">About</p>
          <h1>Ten years of teaching taught me how to diagnose complicated problems. Building software gave me a new way to solve them.</h1>
          <p>
            I’m a quantitative problem solver and product builder whose work has expanded from mathematics and computer science education into requirements, business rules, data workflows, full-stack development, implementation, testing, and product iteration.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">See the work</Link>
            <Link className="button secondary" href="/resume">View resume</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell prose-layout">
          <div>
            <p className="eyebrow">The through-line</p>
            <h2>The transition makes sense when you follow the problems.</h2>
          </div>
          <div className="prose">
            <p>
              Teaching has always been a systems job for me. I analyze performance data, identify where people are getting stuck,
              translate difficult rules into understandable workflows, manage several programs at once, and keep redesigning the
              experience until people can succeed more independently.
            </p>
            <p>
              Over time, some of the problems I wanted to solve could not be fixed with a better lesson or spreadsheet. I needed
              better products. That led to production web applications, database-backed workflows, CSV ingestion and reconciliation,
              authentication and privacy controls, automated tests, deployment pipelines, and an Android app used across multiple devices.
            </p>
            <p>
              I use ChatGPT and Codex extensively because they compress the distance between an ambiguous problem and a testable solution.
              The speed comes from the tools; the judgment still has to come from me. I remain responsible for the problem definition,
              requirements, architecture choices, business rules, edge cases, testing, security, validation, and whether the finished
              product actually solves the user’s problem.
            </p>
            <p>
              That combination is why I’m especially interested in product, business analysis, implementation, learning technology,
              technical enablement, and process-improvement work: roles where quantitative reasoning, technical execution, and clear
              communication all matter.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Core strengths</p>
            <h2>Where I create the most value.</h2>
          </div>
          <div className="strength-grid">
            <article><h3>Requirements + business rules</h3><p>Turning policy, edge cases, and messy operational logic into requirements a product can implement and users can understand.</p></article>
            <article><h3>Data + reconciliation</h3><p>Designing workflows that preserve history, validate changes, surface discrepancies, and make imported or calculated data explainable.</p></article>
            <article><h3>Implementation + QA</h3><p>Moving from prototype to real use through testing, debugging, previews, deployment, validation, and repeated workflow refinement.</p></article>
            <article><h3>Technical communication</h3><p>Explaining complex systems to people with very different levels of technical knowledge without losing the important details.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell callout">
          <p className="eyebrow">What I’m looking for</p>
          <h2>Work where complicated systems need to become clearer, safer, and easier to use.</h2>
          <p>
            I’m most useful when a problem sits between people, process, data, and technology—especially when someone needs to understand the rules, build or configure the solution, validate it, and explain it clearly to the people who will use it.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">Contact me</Link>
            <Link className="button secondary" href="/resume">Resume + experience</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
