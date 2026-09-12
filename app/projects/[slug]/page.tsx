import { notFound } from "next/navigation";
import Metric from "@/components/Metric";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="page-main">
      <section className="case-hero">
        <div className="shell">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.name}</h1>
          <p className="case-tagline">{project.tagline}</p>
          <p className="case-summary">{project.summary}</p>
          <div className="stack-row large">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
            {project.privateCodebase && <span>Private codebase</span>}
          </div>
          <div className="metrics-row">
            {project.metrics.map((metric) => <Metric key={metric.label} {...metric} />)}
          </div>
        </div>
      </section>

      <div className="shell case-layout">
        <aside className="case-sidebar">
          <p className="eyebrow">What I owned</p>
          <ul>
            {project.ownership.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>

        <div className="case-content">
          <section className="case-section">
            <p className="eyebrow">The problem</p>
            <h2>Start with the work, not the technology.</h2>
            {project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="case-section">
            <p className="eyebrow">Key product decisions</p>
            <h2>Decisions that shaped the product.</h2>
            <div className="decision-grid">
              {project.decisions.map((decision) => (
                <article key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section evidence-panel">
            <p className="eyebrow">Evidence</p>
            <h2>How the work was validated.</h2>
            <ul className="evidence-list">
              {project.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="case-section">
            <p className="eyebrow">What I learned</p>
            <h2>Lessons I carry into the next product.</h2>
            <ul className="evidence-list">
              {project.lessons.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="case-section screenshot-placeholder">
            <div>
              <p className="eyebrow">Next content pass</p>
              <h2>Real screenshots and workflow evidence go here.</h2>
              <p>
                The layout is intentionally ready for sanitized product screenshots, annotated workflows,
                architecture diagrams, and before/after examples. No student-identifying data should be published.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
