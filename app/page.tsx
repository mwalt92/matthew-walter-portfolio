import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Product & Data Systems Builder · Business Analysis · Implementation</p>
            <h1>I turn complicated rules, data, and workflows into software people can actually use.</h1>
            <p className="hero-lede">
              I define requirements, model business rules, build and test full-stack and mobile products, and improve
              them through real use. My 10 years in quantitative education sharpened the same skills: diagnosing
              friction, explaining complexity, and designing systems people can navigate.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/projects">View shipped products</Link>
              <Link className="button secondary" href="/resume">Resume + experience</Link>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Selected proof points">
            <div className="proof-card proof-accent">
              <span className="proof-label">How I work</span>
              <strong>Requirements → rules → build → QA → deployment</strong>
            </div>
            <div className="proof-grid">
              <div className="proof-card">
                <strong>3 shipped</strong>
                <span>full-stack web, data-workflow, and Android products</span>
              </div>
              <div className="proof-card">
                <strong>100+ PRs</strong>
                <span>directed on Teacher Grade Analytics</span>
              </div>
              <div className="proof-card">
                <strong>Real users</strong>
                <span>student rollout and multi-device household testing</span>
              </div>
              <div className="proof-card">
                <strong>1 active build</strong>
                <span>Open House Sitter in development</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Shipped products</p>
              <h2>Three products. Different users. Same systems thinking.</h2>
            </div>
            <p>
              A teacher/student grade platform, a dual-mode course and data-reconciliation system, and a multi-device
              Android app—each built around a recurring real-world problem and iterated through testing and use.
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
