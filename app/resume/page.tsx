export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="shell narrow">
          <p className="eyebrow">Resume</p>
          <h1>Product, systems, learning technology, and implementation experience.</h1>
          <p>
            This page is the web summary. A downloadable job-search resume can be added here once the portfolio version is finalized.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:mattwalt92@gmail.com">Contact me</a>
            <a className="button secondary" href="https://www.linkedin.com/in/matthew-david-walter/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell resume-grid">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Mathematics & Computer Science Educator</h2>
            <p className="muted">LaVille Jr–Sr High School · 2016–Present</p>
          </div>
          <div className="prose compact">
            <p>Design and manage concurrent mathematics and computer science programs from foundational algebra through college-level calculus, statistics, and programming.</p>
            <p>Use performance data, assessment results, workflow analysis, and early intervention to continuously improve learning systems; maintained a 99%+ calculus pass rate across 10 years.</p>
            <p>Design and implement digital tools and workflows that improve grade management, assessment tracking, feedback, and decision-making.</p>
          </div>

          <div>
            <p className="eyebrow">Education</p>
            <h2>Indiana University East</h2>
            <p className="muted">Graduate mathematics / teacher preparation</p>
          </div>
          <div className="prose compact">
            <p>Master of Arts for Teachers in Mathematics and Graduate Certificate in Mathematics.</p>
            <p>Michigan State University — B.S. Mathematics, Physics minor.</p>
          </div>

          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2>Build + analyze + ship</h2>
          </div>
          <div className="stack-row large">
            {["Next.js","React","TypeScript","PostgreSQL","Supabase","Python","Kotlin","Jetpack Compose","Firebase","GitHub","Vercel","ChatGPT","Codex"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>
    </main>
  );
}
