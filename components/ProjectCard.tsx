import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
        <span className="visual-kicker">{project.eyebrow}</span>
        <strong>{project.name}</strong>
        <span>{project.stack.slice(0, 4).join(" · ")}</span>
      </div>
      <div className="project-card-body">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <div className="stack-row">
          {project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Read the case study <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
