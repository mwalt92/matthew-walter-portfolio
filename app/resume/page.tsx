import Link from "next/link";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="shell narrow">
          <p className="eyebrow">Resume</p>
          <h1>Product, data systems, implementation, and learning technology.</h1>
          <p>
            My background combines 10 years of quantitative education with hands-on product development, business-rule design, data workflows, testing, deployment, and technical communication.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/Matthew_Walter_Resume.pdf" download>Download resume (PDF)</a>
            <a className="button secondary" href="https://www.linkedin.com/in/matthew-david-walter/" target="_blank" rel="noreferrer">LinkedIn</a>
            <Link className="button secondary" href="/contact">Contact me</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell resume-grid">
          <div>
            <p className="eyebrow">Selected product work</p>
            <h2>Teacher Grade Analytics</h2>
            <p className="muted">Product Owner / Developer · 2026–Present</p>
          </div>
          <div className="prose compact">
            <p>Designed and built a production teacher/student grade-management platform with grading rules, retakes, missing-work workflows, analytics, study recommendations, student self-service, and privacy-conscious access controls.</p>
            <p>Directed a 100+ pull-request workflow using Git branches, automated checks, preview deployments, real-user testing, and repeated UX and performance refinement.</p>
            <Link className="text-link" href="/projects/teacher-grade-analytics">View case study →</Link>
          </div>

          <div>
            <p className="eyebrow">Selected product work</p>
            <h2>YGOSB Learning Dashboard</h2>
            <p className="muted">Product Owner / Developer · 2026–Present</p>
          </div>
          <div className="prose compact">
            <p>Built a dual-mode course platform supporting traditional grading and IXL-based credit recovery with configurable mastery and credit rules.</p>
            <p>Designed CSV ingestion and reconciliation workflows with student matching, duplicate protection, highest-score preservation, change previews, and auditable import history.</p>
            <Link className="text-link" href="/projects/ygosb-course-dashboard">View case study →</Link>
          </div>

          <div>
            <p className="eyebrow">Selected product work</p>
            <h2>Pet Status</h2>
            <p className="muted">Android Product Owner / Developer · 2026–Present</p>
          </div>
          <div className="prose compact">
            <p>Built a multi-device Android app for shared household pet care with event logging, timers, reminders, notes, configurable settings, notification history, and Firebase-backed synchronization.</p>
            <p>Tested across real devices and iterated on synchronization, background behavior, notification reliability, and high-frequency mobile UX.</p>
            <Link className="text-link" href="/projects/pet-status">View case study →</Link>
          </div>

          <div>
            <p className="eyebrow">Experience</p>
            <h2>Mathematics & Computer Science Educator</h2>
            <p className="muted">LaVille Jr–Sr High School · 2016–Present</p>
          </div>
          <div className="prose compact">
            <p>Design and manage concurrent mathematics and computer science programs from foundational algebra through college-level calculus, statistics, and programming.</p>
            <p>Use performance data, assessment results, workflow analysis, and early intervention to continuously improve learning systems; maintained a 99%+ calculus pass rate across 10 years.</p>
            <p>Translate complex quantitative and technical concepts for varied audiences and design digital tools that reduce administrative friction and improve visibility into performance.</p>
          </div>

          <div>
            <p className="eyebrow">Additional experience</p>
            <h2>Education + learner support</h2>
          </div>
          <div className="prose compact">
            <p>Yeshiva Gedolah of South Bend — Mathematics Teacher (Part-Time), 2025–Present</p>
            <p>Sylvan Learning Center — Mathematics & Reading Tutor, 2024–2025</p>
            <p>Michigan State University — Mathematics & Physics Tutor, 2012–2015</p>
          </div>

          <div>
            <p className="eyebrow">Education</p>
            <h2>Mathematics</h2>
          </div>
          <div className="prose compact">
            <p>Indiana University East — Master of Arts for Teachers in Mathematics; Graduate Certificate in Mathematics.</p>
            <p>Michigan State University — B.S. Mathematics, Physics minor.</p>
          </div>

          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2>Build + analyze + ship</h2>
          </div>
          <div className="stack-row large">
            {["Next.js","React","TypeScript","JavaScript","PostgreSQL","Supabase","Python","Kotlin","Jetpack Compose","Firebase","HTML/CSS","Excel","Google Sheets","GitHub","Vercel","ChatGPT","Codex"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>
    </main>
  );
}
