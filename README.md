# Nordamp Energy — website

Independent owner's engineer & electrical-safety advisory for the Nordic energy build-out.
Service brand **Nordamp Energy**, operated through **Nordamp Oy** (Finland) and **AKOSKI AB** (Sweden & Norway).

## Stack
React + Vite + TypeScript + Tailwind CSS. Same structure as the AKOSKI site.

- `src/config/siteContent.ts` — all copy, bilingual (EN / SV). Edit content here.
- `src/context/LanguageContext.tsx` — EN/SV toggle (persisted in localStorage).
- `src/components/` — one component per section (Nav, Hero, FlipBoard, ContextBand, Services, Approach, OneLineDiagram, Markets, BackedBy, Contact, Footer).
- `src/pages/Home.tsx` — composes the landing page + scroll-reveal.
- `public/nordamp-logo-dark.png` — dark-mode logo (transparent, NORD blue / AMP white).

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build      # outputs to dist/
npm run preview
```

## Deploy (GitHub → Vercel)
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel — framework preset **Vite**, build `npm run build`, output `dist`.
3. Every push to main auto-deploys.

## To do / placeholders
- Fill contact details and org numbers (search for `[` in `siteContent.ts`).
- Sub-pages marked `soon` in the nav (Projects, Paper & Pulp, Radiation, …) are navigation stubs — build them as routes/sections when ready.
- Swap the flip-board line-art placeholders in `FlipBoard.tsx` (`ART`) for real photos.

## Pages
- Home (`/`) — one-page landing (bilingual EN/SV).
- Who We Are: `/this-is-nordamp`, `/creating-the-future`, `/values`, `/strategy`, `/management`.
- What We Do: `/projects`, `/paper-and-pulp`, `/renewable-energy`, `/agriculture`, `/maintenance`, `/services`, `/electrification-automation`, `/radiation`, `/digital-ai`.

All sub-page copy lives in `src/config/pagesContent.ts`. `vercel.json` rewrites all paths to `index.html` so client-side routing / deep links work.
Sub-pages are currently English; add Swedish by extending `pagesContent.ts` per language when ready.
