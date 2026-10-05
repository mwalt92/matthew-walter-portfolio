import type { GalleryItem } from "@/components/ProjectGallery";

const base = "/projects/open-house-sitter";

export const openHouseSitterGallery: GalleryItem[] = [
  {
    src: `${base}/Front Page.png`,
    title: "Front page",
    caption: "The sitter-facing starting point for trip context, today's work, and navigation into the household information that matters while the owner is away.",
    alt: "Open House Sitter front page showing the developing sitter coordination experience.",
    featured: true
  },
  {
    src: `${base}/Owner Setup Page.png`,
    title: "Owner setup",
    caption: "The owner configuration flow begins turning recurring household knowledge and trip details into reusable structured information.",
    alt: "Open House Sitter owner setup page."
  },
  {
    src: `${base}/Pet Info Page.png`,
    title: "Pet information",
    caption: "Pet-specific care details are separated into a dedicated reference flow so sitters can find instructions without searching through general house notes.",
    alt: "Open House Sitter pet information page."
  },
  {
    src: `${base}/House Info Page.png`,
    title: "House information",
    caption: "Household instructions and reference information are organized separately from pet care to keep operational details easy to locate.",
    alt: "Open House Sitter house information page."
  },
  {
    src: `${base}/Emergency Info Page.png`,
    title: "Emergency information",
    caption: "Critical contacts and emergency guidance receive their own dedicated surface so high-priority information is easy to reach when needed.",
    alt: "Open House Sitter emergency information page."
  }
];
