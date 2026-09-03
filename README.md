# Divyansh Jha — Portfolio

Personal site for Divyansh Jha, software engineer at SAP Labs India.

**Live:** [divyanshjha.in](https://divyanshjha.in)

## Stack

| Tool                  | Role                                      |
| --------------------- | ----------------------------------------- |
| React 18 + TypeScript | UI, strict mode                           |
| Vite 5                | Build and dev server                      |
| Tailwind CSS 3        | Styling and design tokens                 |
| Framer Motion 11      | Reveals, page transitions, magnetic hover |
| Lenis                 | Smooth scrolling                          |
| React Router 6        | Client-side routing                       |
| Vercel                | Hosting and analytics                     |

## Structure

```
src/
├─ data/          Content layer — profile, experience, projects, skills
├─ components/
│  ├─ layout/     Nav, footer, page-transition shell
│  ├─ home/       Home page sections
│  ├─ work/       Project row
│  └─ ui/         Animation and layout primitives
├─ pages/         One component per route
└─ lib/           Lenis instance, per-route SEO
```

Content lives in `src/data` as typed modules. Editing copy, projects or
experience should not require touching a component.

## Routes

| Path          | Page                                                       |
| ------------- | ---------------------------------------------------------- |
| `/`           | Index — hero, stats, selected work, trajectory, principles |
| `/work`       | All projects, filterable by discipline                     |
| `/work/:slug` | Project case study                                         |
| `/experience` | Career timeline, education, recognition                    |
| `/about`      | Bio, toolkit, interests                                    |
| `/contact`    | Contact details                                            |

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint
```

## Notes

- Work done inside SAP is described without internal links, hostnames or
  repository names. Projects marked confidential render an explanatory note
  instead of a link.
- Animations respect `prefers-reduced-motion`: smooth scroll, the custom
  cursor, the interactive dot field and the intro curtain all disable
  themselves, and Framer Motion runs under `reducedMotion="user"`.
- `vercel.json` handles SPA rewrites, security headers and asset caching.
