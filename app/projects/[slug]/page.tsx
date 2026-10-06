import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Metric from "@/components/Metric";
import ProjectGallery from "@/components/ProjectGallery";
import { allProjects, getProject } from "@/lib/projects";
import { teacherGradeGallery } from "@/lib/teacherGradeGallery";
import { ygosbGallery } from "@/lib/ygosbGallery";
import { petStatusGallery } from "@/lib/petStatusGallery";
import { classroomCaptureGallery } from "@/lib/classroomCaptureGallery";
import { openHouseSitterGallery } from "@/lib/openHouseSitterGallery";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = project.name;
  const description = project.tagline;
  const url = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary", title, description }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const galleryItems =
    project.slug === "teacher-grade-analytics"
      ? teacherGradeGallery
      : project.slug === "ygosb-course-dashboard"
        ? ygosbGallery
        : project.slug === "pet-status"
          ? petStatusGallery
          : project.slug === "classroom-capture"
            ? classroomCaptureGallery
            : project.slug === "open-house-sitter"
              ? openHouseSitterGallery
              : null;

  const galleryDescription =
    project.slug === "ygosb-course-dashboard"
      ? "Click any image to inspect it at full size. Student-identifying information has been replaced in the public copies below. The overview illustration uses demo data; the remaining images are sanitized captures of the working product."
      : project.slug === "pet-status"
        ? "Click any image to inspect it at full size. The overview image is the polished public-facing product visual; the phone images are production captures from the Android app used in real household testing."
        : project.slug === "classroom-capture"
          ? "Click any image to inspect it at full size. The gallery combines the working V1 field-test build with earlier UX explorations that show how the interaction model evolved before and during classroom testing."
          : project.slug === "open-house-sitter"
            ? "Click any image to inspect it at full size. These screenshots document the current private prototype across the main owner and sitter information flows; the product is still in active development."
            : "Click any image to inspect it at full size. Student-identifying information has been replaced, obscured, or blurred in the public copies below. The overview illustration uses demo data; the remaining images are sanitized captures of the working product.";

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

          {galleryItems && (
            <section className="case-section product-tour-section">
              <p className="eyebrow">Product tour</p>
              <h2>See the actual workflows.</h2>
              <p>{galleryDescription}</p>
              <ProjectGallery items={galleryItems} />
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

          {!galleryItems && (
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
