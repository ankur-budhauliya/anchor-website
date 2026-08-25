<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Project Overview

This project is a premium personal branding website for a professional event anchor.

The primary objective is to convert visitors into clients by showcasing the anchor's personality, professionalism, experience, and previous work.

This is **not** a generic portfolio website.

Every UI and UX decision should increase trust, credibility, and booking conversions.

---

# Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix UI)
- Framer Motion
- Lucide React

---

# Development Principles

Always write production-ready code.

Prioritize:

- readability
- maintainability
- scalability
- accessibility
- performance
- SEO

Avoid hacks.

Avoid unnecessary abstractions.

Avoid duplicate code.

Prefer reusable components.

---

# Folder Structure

app/
components/
components/layout
components/sections
components/ui
hooks/
lib/
types/
constants/
public/

Create new folders only when justified.

---

# Component Guidelines

Components should be:

- reusable
- composable
- small
- type-safe

Avoid giant files.

Extract repeated UI into reusable components.

---

# Styling Rules

Use Tailwind CSS.

Do not use inline styles.

Do not use CSS modules.

Use design tokens consistently.

Maintain consistent spacing.

Use semantic colors.

Avoid arbitrary values unless necessary.

---

# Animations

Use Framer Motion.

Animations should be subtle.

Prefer:

- fade
- slide
- scale
- stagger
- blur
- parallax (only when useful)

Never create distracting animations.

Performance always comes first.

---

# Responsive Design

Desktop-first quality.

Must work perfectly on:

- Mobile
- Tablet
- Laptop
- Desktop

Never break layouts.

---

# Accessibility

Always:

- semantic HTML
- keyboard navigation
- aria labels
- visible focus states
- sufficient color contrast

---

# Performance

Prefer Server Components.

Only use Client Components when required.

Lazy-load heavy components.

Optimize images.

Avoid unnecessary JavaScript.

Avoid unnecessary re-renders.

---

# SEO

Every page should support:

- Metadata
- Open Graph
- Twitter Cards
- JSON-LD
- Sitemap
- Robots

---

# Code Quality

Always use TypeScript.

Never use `any`.

Prefer explicit types.

Avoid commented-out code.

Avoid dead code.

No console.logs in production.

---

# Git Philosophy

Implement one feature at a time.

Each feature should be independently reviewable.

Never modify unrelated files.

Keep commits focused.

---

# Design Language

The website should feel:

- Premium
- Luxury
- Elegant
- Modern
- Minimal
- Cinematic

Inspired by:

- Apple
- Raycast
- Framer
- Porsche
- Awwwards

Avoid template-looking designs.

Avoid clutter.

Use whitespace generously.

---

# Color Palette

Primary:
Deep Maroon

Secondary:
White

Accent:
Soft Gold

Neutral:
Warm Gray

Text:
Near Black

Do not invent additional brand colors.

---

# Typography

Elegant.

Large headings.

Excellent readability.

Strong hierarchy.

Avoid decorative fonts.

---

# Images

Always assume professional photography.

Use placeholders only until real assets exist.

Never use random stock imagery references.

---

# Icons

Use Lucide icons only.

---

# Error Handling

Handle edge cases.

Avoid runtime crashes.

Prefer graceful fallbacks.

---

# Before Writing Code

Before implementing any feature:

1. Understand the requirement.
2. Reuse existing components whenever possible.
3. Minimize code duplication.
4. Keep files organized.
5. Consider accessibility.
6. Consider responsiveness.
7. Consider performance.

---

# When Unsure

Prefer simplicity.

Do not over-engineer.

Ask for clarification rather than making assumptions.

---

# Goal

Create a world-class premium website that impresses visitors within the first five seconds and encourages them to inquire about booking the anchor for events.


# AI Agent Rules

- Never redesign completed sections unless explicitly requested.
- Preserve existing styling and architecture when implementing new features.
- Make the smallest necessary changes for each task.
- Explain any significant architectural decisions.
- If a requirement is ambiguous, ask for clarification instead of making assumptions.   