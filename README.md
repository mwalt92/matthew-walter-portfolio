# Matthew Walter — Product & Data Systems Portfolio

Public portfolio for my transition from quantitative education into product, business analysis, implementation, and data-systems work.

**Positioning:** Product & Data Systems Builder · Business Analysis · Learning Technology · Continuous Process Improvement · AI-Assisted Development

[View the live portfolio](https://matthew-walter-portfolio.vercel.app)

## What this repository is

This repository powers the public case-study site for my current product work.

The site is intentionally designed around evidence rather than generic skill lists. Each project is presented through:

- the problem being solved;
- requirements and business rules;
- product and architecture decisions;
- testing and validation;
- deployment/release discipline;
- real-use evidence;
- sanitized screenshots;
- my role and ownership.

Most production application repositories remain private because they contain security-sensitive implementation details or support real student/household data. The public portfolio is the safe presentation layer for that work.

## Featured products

### Teacher Grade Analytics

A production teacher/student grade-management platform built around explicit grading rules, retakes, missing work, analytics, student self-service, study resources, and PowerSchool reconciliation.

The broader product direction is becoming a connected teacher-software ecosystem:

- **Teacher Grade Analytics** — production grading, analytics, and student-facing workflows;
- **Classroom Capture** — tablet-first attendance, participation, and formative-assessment capture in real classroom field testing;
- **Seating Chart** — an emerging connected classroom-management workflow designed to work with Classroom Capture.

The goal is not a collection of disconnected classroom tools. It is a coherent operational system for repeated teacher workflows.

[Teacher Grade Analytics case study](https://matthew-walter-portfolio.vercel.app/projects/teacher-grade-analytics)  
[Classroom Capture case study](https://matthew-walter-portfolio.vercel.app/projects/classroom-capture)

### YGOSB Learning Dashboard

A dual-mode learning platform supporting both traditional assignment-based grading and IXL-based credit recovery.

The product models academic policy as configurable business logic and includes data-import reconciliation, progress history, completion rules, credit eligibility, and teacher/student workflows.

[YGOSB Learning Dashboard case study](https://matthew-walter-portfolio.vercel.app/projects/ygosb-course-dashboard)

### Pet Status

A Kotlin/Jetpack Compose Android app for shared household pet-care coordination across multiple devices.

The product combines synchronized Firebase state, event logging, timers, reminders, notification controls, reconnection behavior, and real two-phone testing.

[Pet Status case study](https://matthew-walter-portfolio.vercel.app/projects/pet-status)

### House Sitter

A private household-coordination web app for reusable owner setup, sitter-facing workflows, scoped access, protected photos, invitations, and verified migration/deployment planning.

Current architecture includes Vinext, Cloudflare Workers, D1, R2, Better Auth, and Resend.

[House Sitter case study](https://matthew-walter-portfolio.vercel.app/projects/open-house-sitter)

## How I work

My role across these products includes:

- problem framing and requirements;
- business-rule definition;
- workflow and information architecture;
- data-model and architecture decisions;
- testing, debugging, and validation;
- security/privacy decisions;
- release sequencing and deployment approval;
- documentation and stakeholder communication.

I use ChatGPT and Codex heavily as development accelerators. They shorten the path from requirement to implementation, but product judgment, business rules, architecture choices, validation, and release decisions remain human-owned.

## Portfolio site stack

- Next.js 15
- React
- TypeScript
- Vercel
- GitHub Actions

The site supports responsive layouts, light/dark mode, project galleries/lightboxes, project-specific metadata, and accessible keyboard interaction.

## Local development

```bash
npm install
npm run dev
```

Run a production build with:

```bash
npm run build
```

## Privacy

Public portfolio material is sanitized. Real student-identifying information, household data, credentials, and other private production data are not included in this repository.
