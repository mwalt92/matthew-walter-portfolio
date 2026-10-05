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
                  src="/projects/classroom-capture/V1.jpg"
                  alt="Working V1 of Classroom Capture running as a tablet-first classroom participation and formative-assessment interface"
                  fill
                  sizes="(max-width: 930px) 100vw, 50vw"
                  className="development-image"
                />
              </div>
              <div className="development-card-body">
                <div>
                  <span className="status-pill">Working V1</span>
                  <p className="eyebrow">Tablet-first classroom workflow</p>
                  <h3>Classroom Capture / Formative Assessment</h3>
                  <p>
                    A working tablet-first participation and formative-assessment layer designed around the pace of a live classroom. V1 establishes the core interaction model and teacher workflow before broader functionality is added, with the product intended to connect with Teacher Grade Analytics.
                  </p>
                </div>
                <div className="development-details">
                  <strong>Product work</strong>
                  <span>Workflow discovery, fast attendance and participation capture, opportunity/point tracking, undo behavior, PWA ergonomics, Android/S Pen use, and tablet-focused interaction design.</span>
                  <strong>Current stage</strong>
                  <span>The first working version is being used to validate the app itself and settle the interface through real classroom use. Those findings are shaping density, navigation, controls, and the product roadmap before functionality expands.</span>
                </div>
              </div>
            </article>

            <article className="development-card development-card-visual">
              <div className="development-visual">
                <Image
                  src="/projects/open-house-sitter/Front%20Page.png"
                  alt="Open House Sitter front page showing the developing household and sitter coordination experience"
                  fill
                  sizes="(max-width: 930px) 100vw, 50vw"
                  className="development-image"
                />
              </div>
              <div className="development-card-body">
                <div>
                  <span className="status-pill">Working prototype</span>
                  <p className="eyebrow">Household coordination web app</p>
                  <h3>Open House Sitter</h3>
                  <p>
                    A separate web product for organizing the information and workflows a house sitter needs while an owner is away. The working prototype brings pet care, house care, emergency information, trip setup, and day-by-day coordination into one place while remaining distinct from Pet Status.
                  </p>
                </div>
                <div className="development-details">
                  <strong>Product work</strong>
                  <span>Owner setup, pet and house information architecture, emergency-reference design, reusable care instructions, sitter navigation, daily task generation, completion tracking, and persistent trip state.</span>
                  <strong>Current stage</strong>
                  <span>A working private prototype now spans the core owner and sitter information flows. Access, sitter permissions, notifications, richer scheduling, and eventual Pet Status integration are still being worked through before release.</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
