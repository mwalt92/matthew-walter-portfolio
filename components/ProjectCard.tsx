import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const projectCoverImages: Record<string, { src: string; alt: string }> = {
  "teacher-grade-analytics": {
    src: "/projects/teacher-grade-analytics/overview-composite.png",
    alt: "Teacher Grade Analytics product overview"
  },
  "ygosb-course-dashboard": {
    src: "/projects/ygosb-course-dashboard/overview-composite.webp",
    alt: "YGOSB Learning Dashboard product overview"
  },
  "pet-status": {
    src: "/projects/pet-status/Pet-Status-Clean.png",
    alt: "Pet Status multi-device Android app product overview"
  }
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const coverImage = projectCoverImages[project.slug];

  return (
    <article className={`project-card ${coverImage ? "project-card-featured" : ""}`}>
      <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Open ${project.name} case study`}>
        {coverImage ? (
          <div className="project-visual project-visual-image">
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
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
