import type { GalleryItem } from "@/components/ProjectGallery";

export const teacherGradeGallery: GalleryItem[] = [
  {
    src: "/projects/teacher-grade-analytics/overview-composite.png",
    title: "Product overview",
    caption: "Illustrated overview of the teacher and student product surface using demo data.",
    alt: "Illustrated overview of Teacher Grade Analytics showing teacher home, dashboard, gradebook, auto grader, settings, student dashboard, and study library."
  },
  {
    src: "/projects/teacher-grade-analytics/teacher-home-dark.png",
    title: "Teacher Home — dark mode",
    caption: "Course-level snapshot with active enrollments, missing work, retakes, and PowerSchool mismatch counts.",
    alt: "Teacher Grade Analytics teacher home in dark mode."
  },
  {
    src: "/projects/teacher-grade-analytics/teacher-home-light.png",
    title: "Teacher Home — light mode",
    caption: "The same workspace in the light theme, demonstrating the shared design system across both modes.",
    alt: "Teacher Grade Analytics teacher home in light mode."
  },
  {
    src: "/projects/teacher-grade-analytics/course-dashboard.png",
    title: "Course Dashboard",
    caption: "A course-level attention view combining class metrics, student review, PowerSchool comparison, and recent work. Student identities are replaced with demo labels.",
    alt: "Sanitized Teacher Grade Analytics course dashboard with demo student labels."
  },
  {
    src: "/projects/teacher-grade-analytics/full-workspace-redacted.png",
    title: "Workspace detail",
    caption: "A representative crop of the course workspace keeps the layout and information density legible without forcing the viewer through an extremely tall page capture. Detailed student-level content remains intentionally blurred for privacy.",
    alt: "Teacher Grade Analytics workspace with detailed student information blurred.",
    cropPosition: "top center"
  },
  {
    src: "/projects/teacher-grade-analytics/score-matrix.png",
    title: "Gradebook / Score Matrix",
    caption: "Spreadsheet-style grade entry with missing, dropped, retake, and best-attempt context visible in the workflow. Student identities are replaced with demo labels.",
    alt: "Sanitized Teacher Grade Analytics score matrix with demo student labels."
  },
  {
    src: "/projects/teacher-grade-analytics/auto-grader.png",
    title: "Auto Grader",
    caption: "Guarded Code.org imports, teacher-confirmed grade writes, AI-assisted review, and pilot evidence in one controlled workflow.",
    alt: "Teacher Grade Analytics Auto Grader page."
  },
  {
    src: "/projects/teacher-grade-analytics/analytics.png",
    title: "Analytics",
    caption: "Grade distribution, category performance, and student workload review built from the same canonical grading engine. Student identities are replaced with demo labels.",
    alt: "Sanitized Teacher Grade Analytics analytics dashboard with demo student labels."
  },
  {
    src: "/projects/teacher-grade-analytics/settings-student-access.png",
    title: "Settings — student access controls",
    caption: "Teacher-controlled Normal, Read-only, and Off safety modes alongside theme preferences and access-change history.",
    alt: "Teacher Grade Analytics settings page showing emergency student access controls."
  },
  {
    src: "/projects/teacher-grade-analytics/student-dashboard.png",
    title: "Student Dashboard",
    caption: "Current grade, category progress, recent work, retake availability, dropped-work context, and clear next steps. Identity is replaced with a demo student.",
    alt: "Sanitized Teacher Grade Analytics student dashboard."
  },
  {
    src: "/projects/teacher-grade-analytics/grade-simulator.png",
    title: "Student Grade Simulator",
    caption: "What-if modeling uses the same configured weights, drop rules, retake logic, late policies, and grading-period composition as the real gradebook.",
    alt: "Sanitized Teacher Grade Analytics grade simulator."
  },
  {
    src: "/projects/teacher-grade-analytics/study-library.png",
    title: "Student Study Library",
    caption: "Assessment-specific study guides, retake readiness, available resources, and a suggested-next workflow based on recorded attempts.",
    alt: "Sanitized Teacher Grade Analytics student study library."
  }
];
