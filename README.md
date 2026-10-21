# Spidr Air Fryer Interest Form

[![CI](https://github.com/rohanreddy79/spidr-airfryer-form/actions/workflows/ci.yml/badge.svg)](https://github.com/rohanreddy79/spidr-airfryer-form/actions/workflows/ci.yml)

> ✨ A submission for Spidr Design’s Full-Stack Engineer coding challenge

A React application for collecting interest in Spidr Design's fictional air fryer product. This form captures user information including contact details, cost guesses, and a unique 16-digit PIN with automatic formatting.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Spidr Design Branding**: Dark theme with teal accents matching Spidr's visual identity
- **Form Validation**: Required field validation and input formatting
- **PIN Formatting**: Auto-formatted 16-digit PIN with dashes (####-####-####-####)
- **Cost Input**: Dollar-only input field
- **Console Logging**: Form data is logged to browser console on submission

## Form Fields

1. **First Name** – Text input  
2. **Last Name** – Text input  
3. **Phone Number** – Tel input  
4. **Email Address** – Email input with validation  
5. **Cost Guess** – Numeric input with dollar sign prefix  
6. **16-Digit Spidr PIN** – Auto-formatted with dashes

## Technology Stack

- **React 19** – Frontend framework
- **Vite** – Build tool and development server
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – UI component library (the generated component set is in `src/components/ui/`; the form itself uses `Button`)
- **Lucide React** – Icon library

## Live Demo

🟢 **Live App**: [https://rohanreddy79.github.io/spidr-airfryer-form](https://rohanreddy79.github.io/spidr-airfryer-form)  
📁 **Source Code**: [https://github.com/rohanreddy79/spidr-airfryer-form](https://github.com/rohanreddy79/spidr-airfryer-form)

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Setup

```bash
git clone https://github.com/rohanreddy79/spidr-airfryer-form.git
cd spidr-airfryer-form
npm install    # or pnpm install
npm run dev    # or pnpm run dev
npm run build  # or pnpm run build -> dist/
npm run preview
```

Then open <http://localhost:5173/spidr-airfryer-form/> (the Vite `base` matches the GitHub Pages path).

`npm install` / `npm ci` need `--legacy-peer-deps`: `react-day-picker` 8.x declares a `date-fns` ^2/^3 peer dependency while `date-fns` 4 is pinned, so npm 7+ stops with `ERESOLVE`; pnpm only warns. Both lockfiles are in sync with `package.json`.

### Verified build

Run on macOS with Node 25 / pnpm 10.4.1 / npm 11 (2026-10):

```
$ pnpm install --frozen-lockfile && pnpm run build
✓ 37 modules transformed.
dist/assets/index-B3YqkUgz.css   83.60 kB │ gzip: 13.59 kB
dist/assets/index-CEp1_vr-.js   221.89 kB │ gzip: 69.58 kB
✓ built in 456ms

$ npm ci --legacy-peer-deps && npm run build
✓ built in 470ms
```

CI (`.github/workflows/ci.yml`) runs `npm ci --legacy-peer-deps && npm run build` on Node 22.

### Deploying to GitHub Pages

`vite.config.js` sets `base: '/spidr-airfryer-form/'`, and `npm run deploy` builds and pushes `dist/` to the `gh-pages` branch with the `gh-pages` package (not run here).

## Notes / Limitations

- Submitting the form only logs the data to the browser console (`console.log('Form Data Submitted:', formData)`); nothing is sent to a server.
- Most dependencies (Radix primitives, recharts, react-router-dom, zod, …) come from the shadcn/ui scaffold and are not used by the single form.

## License

MIT, see [LICENSE](LICENSE).

## Changelog

- 2026-10: refreshed `pnpm-lock.yaml` (it lacked the `gh-pages` dev dependency, so `pnpm install --frozen-lockfile` failed) and set the real `homepage`; completed the README (build, preview, deploy, npm peer-dependency note); added MIT license and CI.
