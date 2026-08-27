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
| Motion     | motion/react with reduced-motion support   |
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
│   ├── work/[slug]/      # Crawlable project case studies
│   ├── not-found.tsx     # Branded 404 recovery page
│   ├── robots.ts         # Crawler rules
│   └── sitemap.ts        # Indexable routes
├── components/
│   ├── layout/           # Site-wide navigation, footer, and theme control
│   ├── motion/           # Small reduced-motion-aware animation primitives
│   └── portfolio/        # Hero, portrait, FAQ, process, work, and cards
├── data/
│   ├── projects.ts       # Curated project content and links
│   ├── site.ts           # Brand, navigation, contact, and social data
│   └── skills.ts         # Capability groups and technologies
├── lib/
│   ├── theme.ts          # Server/client theme cookie contract
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

The application does not scrape GitHub at request time. This is deliberate: a portfolio should present a controlled professional narrative, not change unexpectedly because a repository description or API response changed. Each project also has a crawlable `/work/[slug]` case-study route with structured CreativeWork metadata.

The approved brand asset lives at `public/brand/shayan-pencil-art.webp` and is used as the recognizable portrait mark in the header, hero identity card, footer, and Person schema image. The motion layer is intentionally small: `motion/react` handles only meaningful entrance transitions and respects `prefers-reduced-motion`; it is not used for perpetual background animation. The hero keeps personal narrative, UI, and technical project proof separate rather than presenting self-description as code.

The homepage includes a visible FAQ and JSON-LD for Person, WebSite, and FAQPage. This is designed to make the portfolio easier for search engines and answer engines to understand while keeping the same content useful to human visitors.

## Design principles

The visual system combines a warm editorial cream/sky treatment with a restrained Vercel-like layout, Laravel-red accent, portrait-led identity, CSS-only atmosphere, and a small set of reusable primitives. Typography uses self-hosted Space Grotesk for display headings, Geist Sans for readable body copy, and Space Mono reserved for technical details. The light/dark theme is server-resolved from a cookie to avoid the initial flash. Motion uses `motion/react` only for short, reduced-motion-aware entrance transitions. No shader, WebGL, perpetual animation, or image-heavy hero media is used.

## License

MIT
