# Ram Gopal M · Personal site

My portfolio at [mrgb.in](https://mrgb.in), focused on enterprise search, applied AI, and developer tooling. Built with Astro, Tailwind CSS, and TypeScript, based on Astro Nano.

## Content

- `src/pages/index.astro`: profile, recent work summaries, projects, and contact links.
- `src/content/work/`: career timeline. Each Markdown entry defines a company, role, summary, start date, and end date. The homepage displays the two latest summaries; `/work` displays the full entries.
- `src/content/projects/`: personal projects. Set `draft: true` to keep an entry unpublished.
- `src/consts.ts`: site metadata, contact details, and social links.

The site has no blog or RSS feed. The sitemap is generated at build time.

## Development

Use Node.js 22.23.4 or newer and pnpm. Keep TypeScript on the supported 6.0.x line.

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local development server |
| `pnpm dev --host 0.0.0.0` | Expose the development server on the network |
| `pnpm build` | Run Astro's type checks and build to `dist/` |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Run ESLint |

There is no automated test suite; run the build and lint checks, then verify affected routes in a browser.
