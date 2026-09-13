import type { GalleryItem } from "@/components/ProjectGallery";

const base = "/projects/ygosb-course-dashboard";

export const ygosbGallery: GalleryItem[] = [
  {
    src: `${base}/overview-composite.webp`,
    title: "Product overview",
    caption:
      "A portfolio overview of the dual-mode learning platform: traditional gradebook workflows alongside a configurable IXL-based Credit Recovery system. Demo data is used in this illustration.",
    alt: "YGOSB Learning Dashboard product overview showing traditional grading and Credit Recovery workflows"
  },
  {
    src: `${base}/teacher-home-dual-mode.webp`,
    title: "Teacher Home — dual-mode course management",
    caption:
      "One workspace supports two different operating models without forcing them into the same workflow. In-person courses surface grades, missing work, and retakes; Credit Recovery courses surface mastery, completion, and credit readiness.",
    alt: "YGOSB teacher home showing in-person and Credit Recovery courses in one workspace"
  },
  {
    src: `${base}/traditional-course-dashboard.webp`,
    title: "Traditional course dashboard",
    caption:
      "The in-person course view turns live gradebook data into teacher actions: class performance, missing-work review, recent assignments, retakes, and a direct path into grade auditing. Student identities have been replaced with demo labels.",
    alt: "Traditional course dashboard with class metrics, missing work review, and recent assignments"
  },
  {
    src: `${base}/assignment-matrix-gradebook.webp`,
    title: "Assignment matrix / gradebook",
    caption:
      "A spreadsheet-style grade-entry surface designed for repeated classroom use, with missing-work status, direct score editing, keyboard-first movement, and access to deeper assignment workflows. Student identities have been replaced with demo labels.",
    alt: "Gradebook assignment matrix with demo student identities and multiple assignment columns"
  },
  {
    src: `${base}/credit-recovery-command-center.webp`,
    title: "Credit Recovery command center",
    caption:
      "The dashboard translates policy and IXL progress into an operational view: requirements, eligibility rules, unit targets, next priority, attention states, and recent import activity in one place.",
    alt: "Credit Recovery command center showing requirements, credit eligibility, student progress, and import history"
  },
  {
    src: `${base}/requirements-library.webp`,
    title: "Requirements library — representative section",
    caption:
      "A readable crop of the configurable curriculum library shows how skills and checkpoints are managed as structured requirements rather than a static spreadsheet. Permanent identifiers support reliable reconciliation with future IXL exports.",
    alt: "Credit Recovery requirements library showing skills and checkpoints organized by unit",
    cropPosition: "top center"
  },
  {
    src: `${base}/ixl-import-reconciliation.webp`,
    title: "IXL import and reconciliation",
    caption:
      "Before an import can change records, the system compares students, current scores, course structure, permanent skill IDs, duplicates, and lower historical scores. The teacher reviews the reconciliation result before applying the import.",
    alt: "IXL CSV import preview showing score comparison, student matching, and course-structure reconciliation"
  },
  {
    src: `${base}/import-history-audit-trail.webp`,
    title: "Import history / audit trail",
    caption:
      "Every applied export remains inspectable. The audit trail records observations, score updates, preserved lower scores, ignored rows, collapsed duplicates, warnings, and matching outcomes so data changes remain explainable.",
    alt: "IXL import history showing applied imports, score updates, warnings, and audit details",
    tall: true
  },
  {
    src: `${base}/credit-recovery-settings.webp`,
    title: "Configurable mastery and credit rules",
    caption:
      "Mastery percentages, SmartScore targets, checkpoint behavior, grade calculation, accepted IXL curriculum units, and source links are configuration rather than hard-coded assumptions. The policy preview makes the resulting credit rules visible before use.",
    alt: "Credit Recovery settings for mastery thresholds, grade calculation, and IXL import configuration"
  }
];
