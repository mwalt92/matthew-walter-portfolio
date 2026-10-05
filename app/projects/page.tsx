import ProjectCard from "@/components/ProjectCard";
import { developmentProjects, projects } from "@/lib/projects";

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
            {developmentProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                status={project.slug === "classroom-capture" ? "Working V1" : "Working prototype"}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
