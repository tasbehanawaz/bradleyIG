# Bradley Innovations Group Website

Institutional corporate website for Bradley Innovations Group — Next.js 16, Tailwind CSS v4, TypeScript.

## Project Structure

```
app/
├── components/         # Navbar, SecondaryPage, ContentCard, ContactForm
├── layout.tsx          # Root layout, nav, footer, metadata
├── page.tsx            # Homepage (official corporate index)
├── about/
├── companies/
├── how-we-operate/
├── identic-ai/
├── leadership/
├── letters/
├── news/
├── governance/
├── contact/
├── investor-information/
├── privacy/
├── terms/
├── accessibility/
├── sitemap.ts
├── robots.ts
└── og/                 # Social share image route

lib/
├── cdn.ts              # Asset URL helper (getCdnUrl)
├── seo.ts              # Page metadata helpers
├── schema.ts           # JSON-LD structured data
├── leaders.ts
└── site.ts

public/assets/          # Brand marks, images, documents
```

## Design System

**Colors** (aligned with jmbx.ai):
- Background: `#0B0B0B`
- Text: `#F5F2E8` / `#CFCFCF`
- Gold: `#FDE18C` with depth variants

**Typography** (system fonts only):
- Serif (Georgia): company name and headings
- Sans (Helvetica Neue / system): body copy
- Body line-height: `1.5`

**Utilities:**
- `.container-prose` — ~900px content width
- `.body-stack` — vertical section spacing
- `.text-gold-gradient` — gold gradient text
- `.content-card` — companies, leaders, news, letters only

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm start        # run production server
npm run type-check
npm run lint
```

## Assets

Place brand and media files in `public/assets/`. Reference them with:

```typescript
import { getCdnUrl } from "@/lib/cdn";

getCdnUrl("BIG_mark_light.svg");
```

## Content & SEO

- Public-facing copy follows the development brief
- Per-page titles, meta descriptions, canonical URLs, Open Graph
- Structured data: Organization, Person, Article, Breadcrumb
- Sitemap: `/sitemap.xml` · Robots: `/robots.txt`

## Legal

Pages pending counsel approval:
- `/privacy`
- `/terms`
- `/governance`

## Environment

Copy `.env.example` to `.env` and set:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL
- `NEXT_PUBLIC_CDN_URL` — optional CDN base for assets
