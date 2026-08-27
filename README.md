# Shayan Ali Portfolio

A fast, content-first personal portfolio for **Shayan Ali Jalbani**, a full-stack developer focused on reliable web products, clear interfaces, and practical delivery.

**Live site:** [shayanali.vercel.app](https://shayanali.vercel.app)

**Source:** [github.com/ShayanAliProgrammer/Portfolio](https://github.com/ShayanAliProgrammer/Portfolio)

## Why this repository is structured this way

This portfolio is intentionally server-rendered and dependency-light. Its content is explicit in typed files, its page routes are easy to discover, and its runtime has no database, tRPC layer, or GitHub API dependency. That keeps the visitor experience fast and makes the repository simple for a human developer or an AI coding agent to understand and change safely.

## Stack

| Layer      | Choice                                     |
| ---------- | ------------------------------------------ |
| Framework  | Next.js 16 with the App Router             |
| UI         | React 19 and Tailwind CSS 4                |
| Language   | TypeScript with strict checking            |
| Icons      | lucide-react                               |
| Formatting | Prettier with Tailwind class sorting       |
| Quality    | ESLint and TypeScript checks               |
| Deployment | Vercel or any Node-compatible Next.js host |

## Project map

```text
src/
├── app/
│   ├── layout.tsx        # Global metadata, shell, header, and footer
│   ├── page.tsx          # Homepage composition
│   ├── projects/page.tsx # Full selected-work route
│   ├── not-found.tsx     # Branded 404 recovery page
│   ├── robots.ts         # Crawler rules
│   └── sitemap.ts        # Indexable routes
├── components/
│   ├── layout/           # Site-wide navigation, footer, and theme control
│   └── portfolio/        # Hero, capabilities, selected work, and project cards
├── data/
│   ├── projects.ts       # Curated project content and links
│   ├── site.ts           # Brand, navigation, contact, and social data
│   └── skills.ts         # Capability groups and technologies
├── lib/
│   └── utils.ts          # Small shared utilities
├── styles/
│   └── globals.css       # Design tokens, base styles, and accessibility rules
├── types/
│   └── portfolio.ts      # Shared domain types
└── next-env.d.ts
```

## Local development

Requirements: Node.js 20.9 or newer and npm 10 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Verification commands

Run the full local quality gate before opening a pull request:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

The combined check is also available as:

```bash
npm run check
```

## Updating portfolio content

Edit the typed data files rather than placing repeated copy inside page components:

- `src/data/site.ts` owns the name, positioning, contact path, social links, and navigation.
- `src/data/projects.ts` owns the project cards. Add a real outcome, role, stack, source link, and live link where available.
- `src/data/skills.ts` owns the capability taxonomy shown on the homepage.

The application does not scrape GitHub at request time. This is deliberate: a portfolio should present a controlled professional narrative, not change unexpectedly because a repository description or API response changed.

## Design principles

The visual system uses a dark-first developer-tool direction with a neutral black/white base and a Laravel-red accent, CSS-only grid and spotlight surfaces, and a small set of reusable primitives. Typography uses self-hosted Geist Sans for display and body copy, with Geist Mono reserved for technical details. This creates a sharper, more modern minimalist hierarchy without adding a runtime font dependency. Cards use consistent radii and spacing, all interactive elements have visible focus states, and non-essential motion respects `prefers-reduced-motion`. The light/dark theme is dependency-free and persists locally in the browser. No shader, WebGL, perpetual animation, or animation-library dependency is used.

## License

MIT
