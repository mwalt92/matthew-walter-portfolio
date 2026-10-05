import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="shell narrow">
          <p className="eyebrow">Case studies</p>
          <h1>Work that shows how I think.</h1>
          <p>
            Shipped products show what I can take from problem to real use. In-development work shows how I frame a newer problem before the product is finished.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Shipped products</p>
              <h2>Working products built around real problems.</h2>
            </div>
            <p>
              These products have crossed the line from concept into working software, real workflows, or real-user testing—even though each continues to evolve.
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
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">In development</p>
              <h2>Active products still being shaped through use and iteration.</h2>
            </div>
            <p>
              These projects are substantial enough to show the problem, product direction, and working decisions without presenting unfinished work as shipped.
            </p>
          </div>

          <div className="development-grid">
            <article className="development-card development-card-visual">
              <Link className="development-visual" href="/projects/classroom-capture" aria-label="Open Classroom Capture case study">
                <Image
                  src="/projects/classroom-capture/V1.jpg"
                  alt="Working V1 of Classroom Capture running as a tablet-first classroom participation and formative-assessment interface"
                  fill
                  sizes="(max-width: 930px) 100vw, 50vw"
                  className="development-image"
                />
              </Link>
              <div className="development-card-body">
                <div>
                  <span className="status-pill">Working V1</span>
                  <p className="eyebrow">Tablet-first classroom workflow</p>
                  <h3>Classroom Capture / Formative Assessment</h3>
                  <p>
                    A field-tested classroom capture layer focused first on fast teacher interactions, tablet UX, and workflow validation before broader functionality expands.
                  </p>
                </div>
                <Link className="text-link" href="/projects/classroom-capture">
                  View the in-development case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="development-card development-card-visual">
              <Link className="development-visual" href="/projects/open-house-sitter" aria-label="Open Open House Sitter case study">
                <Image
                  src="/projects/open-house-sitter/Front%20Page.png"
                  alt="Open House Sitter front page showing the developing household and sitter coordination experience"
                  fill
                  sizes="(max-width: 930px) 100vw, 50vw"
                  className="development-image"
                />
              </Link>
              <div className="development-card-body">
                <div>
                  <span className="status-pill">Working prototype</span>
                  <p className="eyebrow">Household coordination web app</p>
                  <h3>Open House Sitter</h3>
                  <p>
                    A private web prototype that organizes pet care, house care, emergency information, and sitter-facing household instructions into one structured workflow.
                  </p>
                </div>
                <Link className="text-link" href="/projects/open-house-sitter">
                  View the in-development case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
