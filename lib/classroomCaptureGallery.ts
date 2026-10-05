import type { GalleryItem } from "@/components/ProjectGallery";

const base = "/projects/classroom-capture";

export const classroomCaptureGallery: GalleryItem[] = [
  {
    src: `${base}/V1.jpg`,
    title: "Working V1",
    caption: "The first live field-test build used to validate the core classroom capture workflow, interaction model, and tablet ergonomics before broader functionality is added.",
    alt: "Working V1 of Classroom Capture on a tablet-first classroom workflow.",
    featured: true
  },
  {
    src: `${base}/Classroom Capture UX Modes 0.1.png`,
    title: "UX mode exploration — 0.1",
    caption: "Early interaction-mode exploration used to compare how fast classroom actions could be grouped and surfaced on a tablet.",
    alt: "Classroom Capture UX mode design exploration version 0.1."
  },
  {
    src: `${base}/Classroom Capture UX Modes 0.2.png`,
    title: "UX mode exploration — 0.2",
    caption: "A refined concept pass focused on clearer grouping, control density, and teacher scanning during repeated classroom use.",
    alt: "Classroom Capture UX mode design exploration version 0.2."
  },
  {
    src: `${base}/Classroom Capture UX Modes 0.3.png`,
    title: "UX mode exploration — 0.3",
    caption: "A later design pass showing the product direction that informed the working field-test build and subsequent UI iteration.",
    alt: "Classroom Capture UX mode design exploration version 0.3."
  }
];
