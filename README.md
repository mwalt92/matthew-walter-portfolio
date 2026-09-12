# Matthew Walter Portfolio — V1

A focused Next.js portfolio built around evidence, case studies, and career-transition positioning. Project claims are written as durable snapshots (for example, “100+ PRs” rather than a precise count) so the public site stays accurate without requiring daily edits.

## Site structure

- `/` — positioning, proof points, three flagship projects, working style
- `/projects` — project index
- `/projects/teacher-grade-analytics`
- `/projects/ygosb-course-dashboard`
- `/projects/pet-status`
- `/about`
- `/resume`

## Design principles

1. Real evidence over generic skill lists.
2. Case studies tell the story: problem → requirements → decisions → testing → evidence → learning.
3. Public pages never expose real student-identifying data.
4. AI is described as a development accelerator; product judgment, requirements, testing, and validation remain human-owned.
5. Both light and dark mode are first-class.

## Next pass

- Add sanitized screenshots for all three projects.
- Keep Teacher Grade Analytics evidence synced to major milestones only (student rollout, security, major product capabilities), not every PR.
- Add one or two annotated workflow diagrams.
- Add a downloadable current resume PDF.
- Add a professional headshot only if desired; the site does not depend on one.
- Confirm exact graduate degree wording before final public launch.
- Add analytics only if useful; do not add unnecessary tracking.
- Connect the GitHub repository to Vercel.
- Consider a custom domain after the content is stable.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
