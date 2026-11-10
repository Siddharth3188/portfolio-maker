# PortfolioForge

A premium portfolio website generator. This repository contains **Milestone 1: the product foundation**.

## What's included

- Premium marketing landing page
- Dashboard shell with sample project cards
- Create-project onboarding route
- Wizard choice between guided setup and AI prompt
- Zustand project draft state
- Responsive UI and reusable components
- GitHub → Vercel deployment-ready structure

## Important milestone boundary

Milestone 1 is a frontend foundation. Authentication, database persistence, AI generation, template rendering, custom domains, hosted publishing and source-code export are intentionally not represented as working features yet. They are planned milestones.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Zustand
- Lucide icons

## GitHub-first setup

1. Create a new empty GitHub repository named `portfolioforge`.
2. Upload the contents of this folder to the repository root (not the containing folder).
3. Commit the files to the `main` branch.
4. In Vercel, choose **Add New → Project**, import `portfolioforge`, and keep the detected Next.js settings.
5. Deploy. No environment variables are required for Milestone 1.
6. For future updates, commit and push to `main`; Vercel will create a deployment automatically.

## Routes

- `/` — landing page
- `/dashboard` — workspace overview
- `/create` — project onboarding

## Next milestones

- M2: Supabase authentication, user profiles and saved projects
- M3: portfolio templates and live preview editor
- M4: publish hosted portfolio pages and export source code
- M5: AI-assisted content generation
- M6: custom domains, billing, security and production hardening
