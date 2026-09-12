import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Product · Data · Learning Technology · Implementation</p>
            <h1>I turn complicated work into clear, usable systems.</h1>
            <p className="hero-lede">
              I’m Matthew Walter, a quantitative problem solver and product builder with 10 years in education.
              I define requirements, translate messy business rules, build software, test edge cases, and iterate
              with real users—using modern AI tools to move faster without outsourcing judgment.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/projects">View projects</Link>
              <Link className="button secondary" href="/about">How I work</Link>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Selected proof points">
            <div className="proof-card proof-accent">
              <span className="proof-label">Flagship workflow</span>
              <strong>Problem → rules → product → testing → iteration</strong>
            </div>
            <div className="proof-grid">
              <div className="proof-card">
                <strong>10 years</strong>
                <span>turning difficult concepts into usable experiences</span>
              </div>
              <div className="proof-card">
                <strong>100+ PRs</strong>
                <span>directed on Teacher Grade Analytics</span>
              </div>
              <div className="proof-card">
                <strong>3 products</strong>
                <span>web, data workflow, and Android case studies</span>
              </div>
              <div className="proof-card">
                <strong>99%+</strong>
                <span>calculus pass rate across 10 years</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Products built around real problems.</h2>
            </div>
            <p>
              These are not tutorial projects. Each began with a recurring user or operational problem and
              evolved through requirements, tradeoffs, testing, debugging, real-world use, and repeated iteration.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">How I work</p>
            <h2>AI-assisted development, human-owned decisions.</h2>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Frame the problem</h3>
              <p>I start with the user's job, the friction in the current workflow, and the outcome that would make the work meaningfully better.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Define the rules</h3>
              <p>I turn policies, constraints, edge cases, and ambiguous requests into explicit requirements a system can actually implement.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Build and validate</h3>
              <p>I use AI development tools aggressively for speed while owning architecture choices, testing, debugging, security decisions, and final validation.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Iterate from evidence</h3>
              <p>Real user behavior, performance data, bugs, and repeated friction become the next set of product decisions rather than post-launch noise.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell callout">
          <p className="eyebrow">The through-line</p>
          <h2>My education background is not separate from the technical work. It is part of the advantage.</h2>
          <p>
            A decade of teaching trained me to diagnose where people struggle, communicate across very different levels of expertise,
            use performance data, manage concurrent programs, and redesign a system when the current explanation or workflow is not working.
          </p>
          <Link className="text-link" href="/about">Read more about the transition →</Link>
        </div>
      </section>
    </main>
  );
}
