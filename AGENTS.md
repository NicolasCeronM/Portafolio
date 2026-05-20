# AGENTS.md

## Project

Astro personal portfolio site with Tailwind CSS v4.

## Tech Stack

- **Framework**: Astro 6.x
- **Styling**: Tailwind CSS 4.x (via Vite plugin, not PostCSS)
- **Package Manager**: pnpm
- **Node**: >=22.12.0

## Commands

```bash
pnpm dev      # Start dev server at localhost:4321
pnpm build    # Build to ./dist
pnpm preview  # Preview production build
pnpm astro <cmd>  # Run Astro CLI (e.g., pnpm astro check)
```

## Notes

- Uses pnpm (not npm/yarn)
- Tailwind v4 uses Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`
- TypeScript config extends `astro/tsconfigs/strict`