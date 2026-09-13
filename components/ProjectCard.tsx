import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isTeacherGradeAnalytics = project.slug === "teacher-grade-analytics";

  return (
    <article className={`project-card ${isTeacherGradeAnalytics ? "project-card-featured" : ""}`}>
      <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Open ${project.name} case study`}>
        {isTeacherGradeAnalytics ? (
          <div className="project-visual project-visual-image">
            <Image
              src="/projects/teacher-grade-analytics/overview-composite.png"
              alt="Teacher Grade Analytics product overview"
              fill
              sizes="(max-width: 930px) 100vw, 40vw"
              className="project-cover-image"
            />
          </div>
        ) : (
          <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
            <span className="visual-kicker">{project.eyebrow}</span>
            <strong>{project.name}</strong>
            <span>{project.stack.slice(0, 4).join(" · ")}</span>
          </div>
        )}
      </Link>
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
