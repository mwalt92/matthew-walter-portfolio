import Image from "next/image";
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
              <div className="development-visual">
                <Image
                  src="/projects/classroom-capture/Classroom%20Capture%20UX%20Modes%200.2.png"
                  alt="Classroom Capture tablet interface showing teacher-focused classroom workflow modes"
                  fill
                  sizes="(max-width: 930px) 100vw, 50vw"
                  className="development-image"
                />
              </div>
              <div className="development-card-body">
                <div>
                  <span className="status-pill">Field testing</span>
                  <p className="eyebrow">Tablet-first classroom workflow</p>
                  <h3>Classroom Capture / Formative Assessment</h3>
                  <p>
                    A tablet-first participation and formative-assessment layer designed around the pace of a live classroom. The product is being field-tested on Android with S Pen input and is intended to connect with Teacher Grade Analytics.
                  </p>
                </div>
                <div className="development-details">
                  <strong>Product work</strong>
                  <span>Workflow discovery, fast attendance and participation capture, opportunity/point tracking, undo behavior, PWA ergonomics, and tablet-focused interaction design.</span>
                  <strong>Current stage</strong>
                  <span>Active classroom field testing. Feedback from real use is driving density, navigation, interaction, and future seating-chart decisions before broader release.</span>
                </div>
              </div>
            </article>

            <article className="development-card">
              <div className="development-placeholder" aria-hidden="true">
                <span>Open House Sitter</span>
                <strong>Household coordination in progress</strong>
              </div>
              <div className="development-card-body">
                <div>
                  <span className="status-pill">Active development</span>
                  <p className="eyebrow">Household coordination web app</p>
                  <h3>Open House Sitter</h3>
                  <p>
                    A separate web product for planning sitter visits, storing pet and house-care information, generating day-by-day checklists, and tracking completion while an owner is away. It may eventually integrate with Pet Status, but it is being designed to stand on its own first.
                  </p>
                </div>
                <div className="development-details">
                  <strong>Current focus</strong>
                  <span>Owner trip setup, reusable routines, daily task generation, pet and house information, sitter navigation, completion tracking, and persistent trip state.</span>
                  <strong>Why it belongs here</strong>
                  <span>The product has a working private prototype, but access, sitter permissions, notifications, richer scheduling, and integration decisions are still evolving.</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
