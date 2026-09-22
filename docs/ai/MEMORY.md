# MEMORY - portfolio

> Current state only. Rewritten when reality changes; never a diary, never contradictory facts side by side. Read top to bottom at every session start. No secrets.

## Current Position

- Next.js 16.3.5 portfolio with Turbopack, Tailwind CSS v4, Framer Motion, and QuickLiquid.
- Working tree: clean on branch main; synchronized with origin/main (commit 8f36be0).
- All 6 routes prerender statically with zero build or type errors.

## Fixed Decisions

- Pure Node runtime tooling (no external script dependencies).
- Strict line limits: all files under 400 lines; functions under 50 lines.
- Zero emojis anywhere across code, documentation, comments, or output.
- QuickLiquid glass effects wrapped via local src/components/LiquidGlassWrapper.tsx to prevent direct bundle issues.
- Project database centralized in src/data/projects.ts.

## Architecture

- Next.js 16 App Router (Turbopack).
- Modular component structure:
  - src/app/ (routes: /, /about, /contact, /projects, /stack)
  - src/components/ (Navbar, Footer, AmbientBackground, TechDock, ContactForm, LiquidGlassWrapper)
  - src/components/ProjectCard.tsx (focused card component)
  - src/components/ProjectHeroPreview.tsx (browser mockup preview)
  - src/components/ProjectModal.tsx (architecture deep-dive dialog)
  - src/data/projects.ts (canonical data for 4 featured projects)

## Features

- High-performance optics: ambient emerald (#00E676) lighting and glass refraction.
- Responsive mobile menu drawer with route-change auto-close and background scroll lock.
- Modal system for project case studies with keyboard Escape and overlay dismiss.
- Interactive Tech Stack dock with Framer Motion staggered transitions.

## Environment

- Node.js >= 18
- Build command: npm run build
- Lint command: npm run lint
- Dev server: npm run dev
