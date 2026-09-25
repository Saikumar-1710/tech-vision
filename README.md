# Sksoft — Software Development Collective Website

**Ideas In. Products Out.**

A fully static, premium showcase + lead-generation website built with **React + TypeScript + Tailwind CSS** (Vite). No backend, no database, no authentication — everything is frontend-only.

## Quick Start

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/ (fully static)
npm run preview  # preview the production build
```

## What's Inside

| Section | Description |
|---|---|
| Navbar | Sticky, shrinks/glassy on scroll, theme toggle, hamburger on mobile |
| Theme | Light cream (default) + dark mode — ☀/🌙 toggle in the navbar, saved in `localStorage` |
| Design | Glassmorphism surfaces (cards, navbar, modal, chips, inputs) + animated footer |
| Hero | Headline, CTAs, trust line, composed developer-workspace visual |
| Capabilities | Icon strip — Web & Mobile Apps / SaaS Platforms / AI & Automation / Custom Software (no numbers) |
| Services | 8 service cards with icons + tech tags |
| Team | 4 profile cards in a swipeable cascading carousel + static "View Profile" modal |
| Technologies | Grouped stack badges (Frontend, Backend, Mobile, DB, Cloud, Tools) |
| Projects | 9 projects with **frontend-only category filtering** |
| Process | "From Idea to Launch" — horizontal/vertical timeline |
| Why Us | 6 differentiator cards |
| Industries | 10 industry cards |
| Testimonials | Client quotes (edit in src/data/testimonials.ts) |
| About | "We Are Developers Who Build." + workspace visual |
| CTA | "Have an Idea? Let's Build It." |
| Contact | Validated static form + contact info cards |
| Footer | Brand, link columns, socials, legal row |
| WhatsApp | Floating button with pre-filled message |

## Customization (the easy parts)

### 1. Brand & contact details — ONE file
`src/config/siteConfig.ts`
- Brand name, tagline, description
- Email, phone, location
- **WhatsApp number** (used by the floating button + contact card)
- Social links (GitHub, LinkedIn, Instagram, X)

### 2. Content data files
| File | What to edit |
|---|---|
| `src/data/developers.ts` | Team members, roles, bios, skills, GitHub/LinkedIn, optional `photo` |
| `src/data/projects.ts` | Portfolio items, categories, tech, optional real `image` |
| `src/data/services.ts` | Service cards, icons, tags |
| `src/data/technologies.ts` | Tech stack groups |
| `src/data/testimonials.ts` | Client quotes, names, ratings |
| `src/data/misc.ts` | Capability strip, process steps, why-us points, industries |

### 4. Theme — light cream (default) & dark
The palette lives entirely in **CSS variables** at the top of `src/index.css`:
- `:root` → light cream values (default: `#FAF7F0` cream, warm espresso text, deepened indigo/teal accents)
- `[data-theme='dark']` → dark overrides

`tailwind.config.js` maps every color (`ink`, `white`, `slate`, `brand`, …) to those variables, so
switching `<html data-theme>` re-themes the whole site — no component changes needed.
`src/components/ui/ThemeToggle.tsx` toggles it and saves the choice in `localStorage`
(`sksoft-theme`); an inline script in `index.html` applies it before first paint (no flash).

**Glassmorphism:** surfaces are translucent with backdrop blur — tuned per theme via the
`--glass-*` variables in the same file (`.card`, `.glass`, `.chip`, `.btn-secondary`, `.input-glass`).

### 5. Real photos & screenshots
- **Developer photos:** set `photo: '/images/team/name.jpg'` in `developers.ts` (put files in `public/images/team/`).
- **Project screenshots:** set `image: '/images/projects/x.jpg'` in `projects.ts` (files in `public/images/projects/`).
- Without photos, the site uses generated gradient avatars and CSS mockups.

### 6. Contact form — receive real inquiries
The form validates in the browser and shows a success message. To receive actual submissions, pick ONE integration in `src/components/Contact.tsx` (commented instructions at the top of the file):
- **EmailJS** (`npm i @emailjs/browser`)
- **Formspree** (form `action` URL)
- **WhatsApp** (build a `wa.me` link from form data)
- **Google Forms**

## Architecture

```
src/
├─ config/siteConfig.ts      ← brand + contact + WhatsApp (edit first)
├─ data/                     ← all content, separated from UI
├─ hooks/useScrollReveal.ts  ← IntersectionObserver scroll animations
├─ lib/utils.ts              ← cn(), scrollToSection(), initials(), accents
├─ components/
│  ├─ ui/                    ← Section, SectionHeading, Logo, Avatar, Mockups
│  └─ …                      ← one component per section
├─ pages/Home.tsx            ← single-page composition
├─ App.tsx / main.tsx
└─ index.css                 ← Tailwind + design tokens
```

## Notes

- **Fully static:** the only interactivity is navigation, smooth scrolling, the mobile menu, project filtering, subtle animations, form validation, WhatsApp link and social links. No auth, dashboards, payments or APIs.
- **Performance:** no animation libraries; scroll reveal uses a tiny IntersectionObserver hook; `prefers-reduced-motion` is respected.
- **Responsive:** tested layouts for 1440 / 1200 / 768 / 480 / 375 px — hamburger nav, single-column cards, vertical timeline, stacked contact on mobile.