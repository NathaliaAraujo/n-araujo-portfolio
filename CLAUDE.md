# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

Scaffolded: Vite + React + TypeScript + Tailwind CSS v4 + React Router, with the 4 planned routes (Home, Selected Works, About, Playground) wired up in [src/App.tsx](src/App.tsx) through a shared [Layout](src/components/Layout.tsx) (nav + footer). Page content is placeholder/TODO — see [src/pages/](src/pages/) — awaiting real copy, project data, and imagery.

Motion stack is installed (`gsap`, `split-type`, `lenis`) per the design-reference study (see project memory / prior planning conversation) but **not yet wired up** — no ScrollTrigger, custom cursor, char-hover stagger, route-transition timeline, or Lenis smooth scroll exists in the code yet. That is the next implementation phase. Decided approach: GSAP + ScrollTrigger for everything, including route transitions (a GSAP timeline keyed off React Router navigation), rather than mixing in Framer Motion.

`api/contact.ts` exists with request validation only (see TODO comment inside) — actual email sending is not implemented yet.

Vercel Analytics is listed in the stack below but not yet added as a dependency.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Router for page navigation
- GSAP + ScrollTrigger, Lenis (smooth scroll), split-type (text splitting) — installed, not yet wired up
- Vercel Serverless Functions (`/api`) for the contact form
- Vercel Analytics (not yet added)
- Hosting: Vercel

## Folder structure

```
api/            Serverless functions (Vercel) — contact.ts (validation only so far)
src/
  assets/       Images, fonts, and other static files imported in code (currently empty)
  components/   Reusable components — Layout.tsx (nav+footer+Outlet), Seo.tsx (per-page title/meta)
  pages/        Routed pages — Home, SelectedWorks, About, Playground (placeholder content)
public/         Files served as-is (favicon.svg)
```

## Commands

- `npm install` — install dependencies
- `npm run dev` — Vite dev server at `http://localhost:5173`. Calls to `/api/*` do **not** work in this mode since Vite doesn't execute serverless functions.
- `vercel dev` — runs frontend + `/api` serverless functions together, emulating the Vercel environment locally (requires `npm install -g vercel` and `vercel link` on first run).
- `npm run build` — type-checks the project (`tsc -b`, including `api/`) and produces the production build in `dist/`.
- `npm run lint` — lint the project.

## Environment variables

Used by the serverless function at `api/contact.ts` (copy `.env.example` to `.env`):

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | API key for the transactional email provider (e.g. Resend). |
| `CONTACT_TO_EMAIL` | Address that receives contact-form messages. |
| `CONTACT_FROM_EMAIL` | Verified sender address with the email provider. |

Note: actual email sending is not yet implemented in the planned `api/contact.ts` — only validation and function structure (see `TODO` comment mentioned in the README). Set the same variables in Vercel's Project Settings → Environment Variables for Production/Preview/Development as needed.

## Deploy

- Import the repo at vercel.com/new — Vercel auto-detects the Vite framework and the `api/` folder.
- Configure environment variables in the Vercel project settings.
- Push to `main` → production deploy. Push to other branches/PRs → automatic preview deployment.
- `vercel.json` includes the rewrite needed for React Router to work on direct routes (e.g. visiting `/about` directly), without interfering with `/api` routes.
