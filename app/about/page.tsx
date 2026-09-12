export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="shell narrow">
          <p className="eyebrow">About</p>
          <h1>Ten years in education. Now building the systems I kept wishing existed.</h1>
          <p>
            I am a mathematics and computer science educator whose work increasingly moved beyond using software
            and into defining, designing, testing, and shipping it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell prose-layout">
          <div>
            <h2>The transition makes sense when you follow the problems.</h2>
          </div>
          <div className="prose">
            <p>
              Teaching has always been a systems job for me. I analyze performance data, identify where users are getting stuck,
              translate difficult rules into understandable workflows, manage several programs at once, and keep redesigning the
              experience until people can succeed more independently.
            </p>
            <p>
              Over time, some of the problems I wanted to solve could not be fixed with a better lesson or spreadsheet. I needed
              better products—and some of those products are now being used with real students and real operational data. That led to full-stack web applications, data-ingestion workflows, an Android app, database design,
              authentication, automated tests, deployment pipelines, and a much deeper understanding of product development.
            </p>
            <p>
              I use ChatGPT and Codex extensively because they dramatically compress the distance between an idea and a working
              prototype. I do not treat that as outsourcing the work. I remain responsible for defining the problem, requirements,
              architecture choices, business rules, edge cases, testing, security, validation, and whether the finished product
              actually solves the user's problem.
            </p>
            <p>
              The result is a professional profile that sits comfortably across product, business analysis, implementation,
              learning technology, technical enablement, and process improvement: quantitative enough to reason about systems,
              technical enough to build them, and experienced enough with people to make them understandable.
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
            <article><h3>Business rules → requirements</h3><p>Turning policy, edge cases, and messy operational logic into requirements a product can implement and users can understand.</p></article>
            <article><h3>Technical communication</h3><p>Explaining complex systems to people with very different levels of technical knowledge without losing the important details.</p></article>
            <article><h3>Product iteration</h3><p>Using actual behavior, bugs, data, and feedback to prioritize what should change next rather than treating launch as the finish line.</p></article>
            <article><h3>AI-assisted execution</h3><p>Using modern AI tools to move quickly from research and requirements into prototypes, debugging, testing, documentation, and shipped improvements.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
