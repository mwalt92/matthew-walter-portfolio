export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  stack: string[];
  privateCodebase?: boolean;
  metrics: { value: string; label: string }[];
  problem: string[];
  ownership: string[];
  decisions: { title: string; body: string }[];
  evidence: string[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "teacher-grade-analytics",
    name: "Teacher Grade Analytics",
    eyebrow: "Full-stack learning technology",
    tagline: "Turning complicated grading rules into a transparent product for teachers and students.",
    summary:
      "A production teacher/student grade-management platform now in real student rollout, built around real classroom workflows: grading rules, retakes, missing work, analytics, student self-service, personalized study support, PowerSchool comparison, and privacy-conscious access controls.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Google OAuth", "Vitest", "Vercel"],
    privateCodebase: true,
    metrics: [
      { value: "100+", label: "pull requests directed" },
      { value: "Live", label: "real student rollout" },
      { value: "Security", label: "RLS + emergency access controls" }
    ],
    problem: [
      "Traditional gradebook workflows make it difficult to represent retakes, best attempts, dropped quizzes, missing-work rules, and student-facing explanations cleanly.",
      "Teachers need efficient entry and audit workflows; students need to understand not just a grade, but what changed and what to do next.",
      "Once real students began signing in, privacy and authorization became first-class product requirements alongside historical roster integrity and calculation parity with the existing SIS."
    ],
    ownership: [
      "Problem framing and product requirements",
      "Business-rule definition and edge cases",
      "Teacher and student workflow design",
      "Database and access-model decisions",
      "Testing, debugging, release validation, and iteration",
      "Student privacy, authorization, and production-safety validation",
      "AI-assisted development workflow using ChatGPT and Codex"
    ],
    decisions: [
      {
        title: "Make grading rules explicit",
        body:
          "Best-attempt logic, missing work, configurable quiz drops, quarter/semester calculations, and retakes are modeled as product rules instead of being hidden in manual spreadsheets."
      },
      {
        title: "Design for auditability",
        body:
          "PowerSchool comparison, status flags, role-aware access, historical data preservation, and test coverage make discrepancies easier to identify and explain."
      },
      {
        title: "Give students useful next actions",
        body:
          "Student views emphasize recent grade changes, study resources, assessment detail, category performance, and what-if simulation rather than presenting a single opaque number."
      },
      {
        title: "Iterate in production-sized slices",
        body:
          "The product evolved through a 100+ pull-request workflow with preview deployments, automated checks, real-user testing, and repeated performance and UX refinements."
      },
      {
        title: "Treat student access as safety-critical",
        body:
          "Real-student rollout triggered dedicated authorization testing, least-privilege hardening, teacher-controlled Normal / Read-only / Off emergency modes, immutable access-change auditing, and fail-closed behavior when access context cannot be resolved."
      }
    ],
    evidence: [
      "School-managed Google authentication and exact roster-email linking are working in production as real students begin using the student experience.",
      "Cross-student and cross-section access probes confirmed that student identities could retrieve only their own permitted records; unlinked authenticated identities saw no student academic data.",
      "All current public application tables use row-level security, and teacher-controlled emergency access modes can make student data read-only or temporarily unavailable without removing teacher access for investigation.",
      "Authorization helpers were hardened to fail closed when a student's section context cannot be resolved.",
      "Batch-save, keyboard grade entry, loading states, dark mode, and action feedback were redesigned after real workflow testing exposed latency and usability problems.",
      "Automated tests and preview deployments cover calculation behavior, high-risk grading edge cases, builds, and security-sensitive changes before production."
    ],
    lessons: [
      "Business rules are part of product design, not an implementation detail.",
      "The best workflow improvements often come from watching where users hesitate or repeat work.",
      "A system can be technically correct and still fail if it does not explain itself to the user."
    ]
  },
  {
    slug: "ygosb-course-dashboard",
    name: "YGOSB Learning Dashboard",
    eyebrow: "Business rules + data workflows",
    tagline: "A dual-mode course system for traditional grading and IXL-based credit recovery.",
    summary:
      "A configurable learning platform that supports two very different course models while sharing a common technical foundation. The credit-recovery side turns IXL exports and academic policies into clear progress, eligibility, import, and next-work workflows.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "CSV ingestion", "Vercel"],
    privateCodebase: true,
    metrics: [
      { value: "30+", label: "pull requests across two course modes" },
      { value: "Configurable", label: "mastery and credit rules" },
      { value: "Auditable", label: "import history and reconciliation" }
    ],
    problem: [
      "Credit-recovery progress lives primarily in exported IXL data, but students and teachers need a simpler answer to: What is complete? What counts? What is next? Am I eligible for credit?",
      "The same platform also needs to support conventional in-person courses without forcing one model's assumptions onto the other."
    ],
    ownership: [
      "Workflow and requirements design",
      "Translation of academic policy into configurable rules",
      "CSV import and reconciliation behavior",
      "Student progress and teacher attention views",
      "Testing, deployment, and iterative refinement"
    ],
    decisions: [
      {
        title: "Treat policy as configurable product logic",
        body:
          "SmartScore thresholds, required skills, checkpoints, unit completion, and credit eligibility can be configured rather than hard-coded into a single course."
      },
      {
        title: "Protect historical progress",
        body:
          "Imports preserve highest scores, collapse duplicate standards by permanent IXL ID, reject duplicate files, and distinguish new, improved, unchanged, and completed records."
      },
      {
        title: "Preview before committing",
        body:
          "Import previews make data changes visible before they affect student records, reducing accidental overwrite and making reconciliation understandable."
      },
      {
        title: "Prioritize action, not just reporting",
        body:
          "The dashboard identifies next work and attention areas instead of making users interpret a spreadsheet export manually."
      }
    ],
    evidence: [
      "The import workflow is database-aware, comparing new files against existing records before changes are committed.",
      "Progress dates ignore unchanged exports so activity history reflects meaningful student progress.",
      "The in-person gradebook now includes safer blank-only bulk fill, verified undo behavior, retake feedback, keyboard-first entry, and teacher-scoped database permissions.",
      "Production and beta environments are separated so real grading can remain stable while workflow changes are manually validated before merge.",
      "Course creation and settings-copy concepts are designed for reuse rather than one-off configuration."
    ],
    lessons: [
      "Reliable data ingestion requires preserving context, not merely parsing rows.",
      "Configurable rules make a product more reusable without making the interface harder to understand.",
      "Good analytics should reduce the next decision a user has to make."
    ]
  },
  {
    slug: "pet-status",
    name: "Pet Status",
    eyebrow: "Android product development",
    tagline: "Shared household pet-care tracking across multiple devices.",
    summary:
      "An Android application for coordinating pet care between household members: quick event logging, shared history, timers, summaries, notes, reminders, configurable pets and event types, and cloud synchronization.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Android Studio", "Gradle"],
    privateCodebase: true,
    metrics: [
      { value: "1.1 RC", label: "release-candidate workflow" },
      { value: "2-phone", label: "real household testing" },
      { value: "Private", label: "authenticated household sync" }
    ],
    problem: [
      "In a multi-person household, simple pet-care questions become coordination problems: Who took the dog out? When did a pet last eat? Was medication already given?",
      "The product needs to stay fast enough for repeated daily use while synchronizing state reliably across devices."
    ],
    ownership: [
      "Product concept and requirements",
      "Mobile information architecture and interaction design",
      "Firebase-backed shared state",
      "Background, reconnection, and notification troubleshooting",
      "Release testing and iteration based on household use"
    ],
    decisions: [
      {
        title: "Optimize the frequent action",
        body:
          "Core event entry is designed around quick pet selection, multi-select events, optional notes, and minimal steps because logging has to remain easier than not logging."
      },
      {
        title: "Turn history into status",
        body:
          "Timers, summaries, and shared history convert individual log events into an at-a-glance picture of household state."
      },
      {
        title: "Treat background behavior as product behavior",
        body:
          "Reconnection after lock, notification reliability, synchronization, and device lifecycle issues are handled as major UX concerns rather than invisible technical details."
      },
      {
        title: "Let complexity live in settings",
        body:
          "Notification filters, quiet hours, pets, events, reminders, and household joining are configurable while the main logging flow stays simple."
      }
    ],
    evidence: [
      "The app has been tested in real two-phone household use rather than only in an emulator.",
      "Shared data moved from public-style synchronization to authenticated private households with invitation-based joining and device-token notifications.",
      "The 1.1 release-candidate work adds per-device notification categories, filters, quiet hours, grouped history, independent reminders, event notes, and reconnect-on-resume behavior.",
      "User feedback directly drove UI changes such as card density, control ordering, success feedback, and settings organization."
    ],
    lessons: [
      "Small interaction friction matters disproportionately in high-frequency mobile workflows.",
      "Reliability is part of user experience, especially when the product coordinates multiple people.",
      "Real use exposes edge cases that scripted happy-path testing does not."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
