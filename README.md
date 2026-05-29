# Personal Portfolio

Modern, responsive portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** (Response 1 spec).

## Features

- Hero with typing effect + CTAs (View Projects, Download CV)
- About, Skills (with progress bars), Projects (case-study style)
- Experience & Achievements, Resume download, Contact form with validation
- Dark / light mode, smooth scroll, loading screen, error boundary
- Fully responsive, SEO meta tags, reusable components

## Folder structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, etc.
│   ├── ui/           # Button, SectionHeading
│   ├── ErrorBoundary.tsx
│   └── LoadingScreen.tsx
├── data/
│   └── site.ts       # ← Edit your content here
├── hooks/
├── types/
└── utils/
```

## Quick start

1. **Install Node.js** (LTS) from [nodejs.org](https://nodejs.org) if `npm` is not available.
2. Open a terminal in this folder:

```bash
cd "C:\Users\hijaz trd\Projects\portfolio"
npm install
npm run dev
```

3. Open the URL shown (usually `http://localhost:5173`).

## Customize your content

Edit **`src/data/site.ts`**:

- `siteConfig` — name, role, tagline, email, about text
- `projects` — your real projects, GitHub & live URLs
- `experiences` & `achievements`
- `socialLinks`

Add your CV PDF to **`public/resume.pdf`** (linked as `/resume.pdf`).

Update **`index.html`** `<title>` and meta tags with your name.

## Contact form (real emails)

Follow **`CONTACT-FORM-SETUP.md`** to connect [EmailJS](https://www.emailjs.com/) so Hire Me / Contact submissions arrive at your Gmail inbox. Copy `.env.example` → `.env`, add your three keys, restart `npm run dev`.

## Build & deploy

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).

## Tech stack

| Tool           | Purpose              |
|----------------|----------------------|
| Vite           | Build tool           |
| React 18       | UI                   |
| TypeScript     | Type safety          |
| Tailwind CSS   | Styling              |
| Framer Motion  | Animations           |
| Lucide React   | Icons                |
