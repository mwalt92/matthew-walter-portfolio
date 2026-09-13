import { notFound } from "next/navigation";
import Metric from "@/components/Metric";
import ProjectGallery from "@/components/ProjectGallery";
import { getProject, projects } from "@/lib/projects";
import { teacherGradeGallery } from "@/lib/teacherGradeGallery";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const showTeacherGallery = project.slug === "teacher-grade-analytics";

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

          {showTeacherGallery && (
            <section className="case-section product-tour-section">
              <p className="eyebrow">Product tour</p>
              <h2>See the actual workflows.</h2>
              <p>
                Click any image to inspect it at full size. Student-identifying information has been replaced,
                obscured, or blurred in the public copies below. The overview illustration uses demo data; the
                remaining images are sanitized captures of the working product.
              </p>
              <ProjectGallery items={teacherGradeGallery} />
            </section>
          )}

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

          {!showTeacherGallery && (
            <section className="case-section screenshot-placeholder">
              <div>
                <p className="eyebrow">Next content pass</p>
                <h2>Real screenshots and workflow evidence go here.</h2>
                <p>
                  The layout is intentionally ready for sanitized product screenshots, annotated workflows,
                  architecture diagrams, and before/after examples.
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
