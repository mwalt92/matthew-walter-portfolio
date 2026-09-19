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
              <h2>Earlier-stage work where the product is still taking shape.</h2>
            </div>
            <p>
              I keep this section intentionally smaller. A project belongs here when there is enough substance to show the problem, product direction, and early implementation without presenting unfinished work as complete.
            </p>
          </div>

          <article className="development-card">
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
          </article>
        </div>
      </section>
    </main>
  );
}
