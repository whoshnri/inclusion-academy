# Inclusion Academy

A Next.js website for Inclusion Academy — built with Next.js, Tailwind CSS, and Phosphor Icons.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **Phosphor Icons** (`@phosphor-icons/react`)
- **TypeScript**

## Preview locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev        # local development
pnpm typecheck  # TypeScript check (no build output)
pnpm lint       # ESLint
```

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About Inclusion Academy |
| `/services` | Services and Inclusion Health Check |
| `/faq` | Inclusion Health Check FAQs |
| `/contact` | Discovery conversation enquiry form |

All page content lives in `src/app/` (pages) and `src/content/site.ts` (shared copy).

## Photography

Replace the placeholder files in `public/assets/` with your Pexels photographs:

- `lagos-leadership-meeting.jpg` — hero image
- `inclusive-team-meeting.jpg` — about page
- `educator-workshop.png` — services page

The enquiry form shows an on-page confirmation. Connect it to your preferred form or CRM service before launch.

## Legacy static site

The original HTML files (`index.html`, `about.html`, etc.) remain in the project root for reference and can be removed once you are happy with the Next.js version.
