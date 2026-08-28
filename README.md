# Shayan Ali Portfolio

A fast, editorial portfolio for **Shayan Ali Jalbani**—a full-stack developer who builds useful web products with clear interfaces, dependable systems, and a calm path from brief to launch.

**Live site:** [shayanali.vercel.app](https://shayanali.vercel.app)

**Source:** [github.com/ShayanAliProgrammer/Portfolio](https://github.com/ShayanAliProgrammer/Portfolio)

## The point of this repository

This portfolio is built to be understood quickly and maintained confidently. The page keeps the surface area small, the content explicit, and the runtime predictable. There is no request-time GitHub scraping, no unnecessary database layer, and no hidden dependency that changes the professional story after deployment.

The implementation is intentionally split between exact editorial presentation and typed Next.js infrastructure. The reference design owns the visual language and interaction rhythm; the application owns routing, metadata, server-rendered theme state, and the structured content that powers case studies and search discovery.

> Ship useful work. Keep the interfaces clear. Leave the next change obvious.

## Architecture and stack

| Layer       | Choice                                                                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework   | Next.js 16 App Router with React 19                                                                                                                                             |
| Language    | TypeScript with strict checking                                                                                                                                                 |
| Styling     | Tailwind CSS 4 plus the reference stylesheet for exact editorial layout and tokens                                                                                              |
| Typography  | Space Grotesk for display, Geist Sans for supporting UI, Space Mono for technical metadata, Instrument Serif for editorial emphasis                                             |
| Interaction | Lightweight browser-native lifecycle code for loader, scroll progress, marquee, reveals, scramble text, cursor states, magnetic controls, and cursor-following project previews |
| Icons       | lucide-react for the reusable theme control and supporting UI                                                                                                                   |
| Content     | Typed local data for identity, projects, navigation, capabilities, FAQs, and case studies                                                                                       |
| Theme       | Cookie-persisted Light, Dark, and System modes resolved in the server layout                                                                                                    |
| Deployment  | Vercel or another Node-compatible Next.js host                                                                                                                                  |

### TALL-stack capability

I can also work with the **TALL stack**: **Tailwind CSS, Alpine.js, Laravel, and Livewire**. In this portfolio, TALL is represented as an honest capability in the stack narrative—it is not being presented as the runtime architecture of this repository. This repository itself runs on Next.js and React because the portfolio needs server-rendered metadata, App Router case-study routes, and a lightweight content-first frontend.

When a project calls for Laravel and Livewire, the same engineering principles apply: keep the first screen useful, keep state understandable, keep server boundaries explicit, and avoid adding complexity that does not create product value.

## Project map

```text
src/
├── app/
│   ├── layout.tsx        # Server theme resolution, metadata, fonts, and root shell
│   ├── page.tsx          # JSON-LD plus the exact reference portfolio shell
│   ├── projects/page.tsx # Full selected-work route
│   ├── work/[slug]/      # Crawlable project case studies
│   ├── not-found.tsx     # Branded 404 recovery page
│   ├── robots.ts         # Crawler rules
│   └── sitemap.ts        # Indexable routes
├── components/
│   ├── layout/           # Shared theme control and reusable route chrome
│   └── portfolio/
│       ├── reference-markup.ts      # Exact reference body markup
│       └── reference-portfolio.tsx  # Reference interaction lifecycle in React
├── data/
│   ├── projects.ts       # Curated project content and verified links
│   ├── site.ts           # Brand, contact, navigation, and social data
│   └── skills.ts         # Capability groups, including Laravel and TALL
├── lib/
│   ├── theme.ts          # Theme cookie contract and safe normalization
│   └── utils.ts          # Small shared utilities
├── styles/
│   ├── globals.css       # Shared application tokens and base rules
│   └── reference.css     # Exact editorial reference tokens, layout, and motion CSS
└── types/
    └── portfolio.ts      # Shared domain types
```

## The visual system

The homepage is a direct conversion of the provided editorial HTML reference rather than a card-grid reinterpretation. It keeps the oversized **Developer who builds.** hero, restrained metadata rail, marquee, featured work, project ledger, About/spec sheet, process sequence, stack rows, contact statement, footer, loader, grain, grid, scroll progress, reveal motion, scramble labels, custom cursor, magnetic buttons, and cursor-following project previews.

The palette is now blue-led. Light mode uses a deep royal blue accent on a warm editorial surface; Dark mode uses a brighter electric blue against the dark ink palette; System mode selects the matching palette through `prefers-color-scheme`. The blue treatment is used consistently for links, status indicators, buttons, focus states, progress indicators, active controls, and editorial emphasis.

## Theme behavior

The selected theme is stored in the `portfolio-theme` cookie. `src/app/layout.tsx` reads that cookie on the server and applies `light`, `dark`, or `system` directly to the root `<html>` element before the page is rendered. System mode is resolved through CSS media queries, so the browser does not need to wait for hydration before choosing its palette.

The three-state selector lives in the reference footer. Its buttons expose accessible pressed states, and the computer icon represents System mode. Changing the mode updates the cookie for the next request while also updating the current document immediately.

## Local development

Requirements: Node.js 20.9 or newer and npm 10 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Verification

Run the full quality gate before opening a pull request:

```bash
npm run check
npm run format:check
npm run build
```

The combined check runs TypeScript and ESLint:

```bash
npm run typecheck
npm run lint
```

## Updating portfolio content

Edit the typed data files instead of duplicating copy inside page components:

- `src/data/site.ts` owns the name, positioning, contact path, social links, and navigation.
- `src/data/projects.ts` owns the projects, case-study slugs, roles, stacks, and verified source/live links.
- `src/data/skills.ts` owns the capability taxonomy shown in the portfolio narrative.
- `src/lib/theme.ts` owns the cookie name and Light/Dark/System normalization contract.

The homepage reference markup is intentionally exact and presentation-led. If the visual reference changes, update `reference-markup.ts` and `reference.css` together, then verify the interaction lifecycle in `reference-portfolio.tsx` across desktop, mobile, and reduced-motion settings.

## Engineering principles

I prefer a useful first screen over a decorative one, typed boundaries over clever abstractions, and small dependencies over a large framework footprint. Performance and accessibility are product features, not afterthoughts. Motion should explain hierarchy or add feedback; it should never make the page harder to use.

I also keep the professional narrative truthful. Projects, technologies, links, and capabilities are documented because they belong to the work—not because the README needs more impressive words.

## License

MIT
