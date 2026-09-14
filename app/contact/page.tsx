export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="shell narrow">
          <p className="eyebrow">Contact</p>
          <h1>Let’s talk about the problem you’re trying to solve.</h1>
          <p>
            I’m interested in product, business analysis, implementation, learning technology, technical enablement, and process-improvement roles where systems thinking and clear communication matter.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-grid">
          <a className="contact-card" href="mailto:mattwalt92@gmail.com">
            <span className="eyebrow">Email</span>
            <h2>mattwalt92@gmail.com</h2>
            <p>Best for opportunities, project conversations, and direct introductions.</p>
            <span className="text-link">Send an email →</span>
          </a>

          <a className="contact-card" href="https://www.linkedin.com/in/matthew-david-walter/" target="_blank" rel="noreferrer">
            <span className="eyebrow">LinkedIn</span>
            <h2>Professional profile</h2>
            <p>Experience, current positioning, and the fastest way to connect professionally.</p>
            <span className="text-link">Open LinkedIn ↗</span>
          </a>

          <a className="contact-card" href="https://github.com/mwalt92" target="_blank" rel="noreferrer">
            <span className="eyebrow">GitHub</span>
            <h2>Code + development history</h2>
            <p>Public repositories, commit history, and technical work that complements the case studies on this site.</p>
            <span className="text-link">Open GitHub ↗</span>
          </a>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell callout">
          <p className="eyebrow">Where I’m a strong fit</p>
          <h2>Roles at the intersection of people, process, data, and technology.</h2>
          <p>
            I’m especially interested in work where someone needs to understand an ambiguous operational problem, translate it into requirements and business rules, build or configure a solution, validate the result, and make the system understandable to the people using it.
          </p>
        </div>
      </section>
    </main>
  );
}
