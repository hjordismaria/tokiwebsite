# TÓKI website

Marketing site for TÓKI, built from a Figma design. Next.js 16 (App Router) + React 19 +
Tailwind v4, in TypeScript. Four pages — home, about, services, book — in English and
Icelandic.

Live design source: [Figma — Team 9](https://www.figma.com/design/Dx2mds6dyDccTegh5pMal1/Team-9),
main frame ["Frontpage" 468:558](https://www.figma.com/design/Dx2mds6dyDccTegh5pMal1/Team-9?node-id=468-558).

---

## Getting started

**You need Node 20.19 or newer.** The project was developed on 20.17, which works but prints
an `EBADENGINE` warning from `eslint-visitor-keys`. Anything newer is fine; Node 22 LTS is a
safe choice.

```bash
git clone https://github.com/hjordismaria/tokiwebsite.git
cd tokiwebsite
npm install
npm run dev
```

Then open **http://localhost:3000** — you'll be redirected to `/en` or `/is` depending on
your browser's language.

No environment variables are needed to run the site. (The one env var this repo mentions,
`FIGMA_API_KEY`, is only for pulling fresh assets out of Figma — see
[Working with the design](#working-with-the-design).)

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload on :3000 |
| `npm run build` | Production build — run this before pushing; it type-checks too |
| `npm start` | Serve the production build (requires `npm run build` first) |
| `npm run lint` | ESLint. Must exit 0 |

`npm run build` is the real gate: it runs TypeScript across the whole project, which
`npm run dev` does not do exhaustively.

---

## Project structure

```
src/
├── app/
│   ├── globals.css          ← ALL design tokens live here (@theme block)
│   └── [lang]/              ← every page is under a locale segment
│       ├── layout.tsx       ← fonts, <html lang>, header + footer
│       ├── page.tsx         ← home
│       ├── about/page.tsx
│       ├── services/page.tsx
│       └── book/page.tsx
├── components/
│   ├── ui/                  ← generic, prop-driven primitives
│   │   ├── Accordion, ArrowCircle, Blob, Button, Container,
│   │   ├── Input, LanguageSwitcher, Marquee, StarDoodle, TalkBlob
│   └── sections/            ← page sections, composed from ui/
│       ├── SiteHeader, SiteFooter        (on every page)
│       ├── Hero, ServicesMarquee, Faq, Partners, Manifesto   (home)
│       ├── ServicesExplorer              (services)
│       └── BookingForm                   (book)
├── i18n/
│   ├── config.ts            ← locale list, path helpers
│   └── dictionaries.ts      ← EVERY user-facing string, EN + IS
└── proxy.ts                 ← redirects locale-less URLs

public/images/ , public/icons/    ← assets exported from Figma
docs/improvements.md              ← running punch list from design review
CLAUDE.md                         ← coding rules (read this before writing components)
```

The layering rule: **pages compose sections, sections compose ui primitives, ui primitives
are generic.** Don't put page-specific copy in `ui/`.

---

## How the two languages work

This is the least obvious part of the codebase, so read this before touching anything with
text in it.

**All copy lives in [`src/i18n/dictionaries.ts`](src/i18n/dictionaries.ts).** Nothing else.
Components receive strings as props — they never hard-code user-facing text. The English
object defines the shape (`export type Dictionary = typeof en`), so if you add an English key
and forget the Icelandic one, `npm run build` fails. That's deliberate.

To change a headline, edit the dictionary — not the component.

**Routing.** Every page lives under `src/app/[lang]/`, and both locales are statically
generated at build time (`/en`, `/is`, `/en/about`, `/is/about`, …). `generateStaticParams`
in the layout produces them; `dynamicParams = false` makes any other value 404.

**Redirects.** [`src/proxy.ts`](src/proxy.ts) catches URLs without a locale (`/book`) and
redirects to one (`/en/book`), choosing in this order:

1. the `NEXT_LOCALE` cookie, if the visitor has picked a language before
2. the browser's `Accept-Language` header
3. English

> In Next.js 16 middleware was renamed **proxy** — the file must be `src/proxy.ts` exporting
> a function named `proxy`. If you go looking for `middleware.ts`, that's why it isn't there.
>
> Also note: this proxy filters paths in plain JavaScript rather than with a `matcher` config.
> An earlier version used `matcher: ["/((?!_next|images|icons|.*\\..*).*)"]`, which silently
> matched **only** `/` — Next compiles matchers with its own path-to-regexp, and that negative
> lookahead does not survive the trip. If you add path filtering, verify it with an actual
> request, not by reading the regex.

**Adding a language.** Add the code to `locales` and `localeNames` in
[`src/i18n/config.ts`](src/i18n/config.ts), then add a matching object to `dictionaries.ts`.
Routing, static generation, the switcher dropdown and redirects all follow automatically.

⚠️ **The Icelandic copy has not been reviewed by a native speaker.** There was no Icelandic in
the Figma file, so it was written from scratch as a first draft. Worth a proper pass —
particularly the declension of the brand name (`Tóka` vs `Tóki`) and the FAQ heading
("Spurt og svarað").

---

## Styling and design tokens

Tailwind v4. **All tokens are in the `@theme` block of
[`src/app/globals.css`](src/app/globals.css)** — colours, fonts, type scale, radii, spacing,
animations.

Tailwind's default palette is deliberately wiped (`--color-*: initial;`), so only TÓKI colours
exist. `bg-slate-500` won't work, and that's intentional.

The house rules, in full in [CLAUDE.md](CLAUDE.md):

- **No hex values and no arbitrary values** — not `text-[#333]`, not `p-[13px]`, not
  `grid-cols-[minmax(0,1fr)_2fr]`. If a value doesn't have a token, add a token.
- Flexbox/grid for layout. Absolute positioning only where things genuinely overlap.
- Mobile-first.
- Fonts via `next/font`. Semantic HTML, accessible names, visible focus states.

To check you haven't broken the first rule:

```bash
grep -rnE "#[0-9a-fA-F]{3,6}|\-\[" src/ --include=*.tsx
```

That should print nothing.

**Fonts** (all Google Fonts, loaded in the `[lang]` layout): Montserrat, Raleway,
Reenie Beanie, Newsreader, Hi Melody, Elms Sans. The build prints
`Failed to find font override values for font 'Elms Sans'` — harmless, it just means no
fallback-metric optimisation for that one face.

`Helvetica` appears throughout the Figma file but isn't on Google Fonts, so `--font-sans`
falls back to a `Helvetica Neue → Arial` system stack. If TÓKI licenses Helvetica, drop the
files in and point that token at them.

---

## Working with the design

Assets were pulled from Figma via the **`figma-developer-mcp`** server, configured in
[`.mcp.json`](.mcp.json). It reads a personal access token from the `FIGMA_API_KEY`
**environment variable**:

```powershell
[Environment]::SetEnvironmentVariable('FIGMA_API_KEY','<your-figma-token>','User')
```

Restart your editor afterwards so the MCP server picks it up.

> 🚨 **Never put the token in `.mcp.json`.** The file must keep the literal string
> `"${FIGMA_API_KEY}"`. Pasting a real token there has already caused one blocked push —
> GitHub's secret scanning rejects it, and cleaning it out means rewriting history. The file
> is committed precisely *because* it only names the variable.

Note this repo has no `figma-developer-mcp` MCP tool for `whoami` or Dev Mode features — it's
the REST-based server with two tools (`get_figma_data`, `download_figma_images`). Figma's
official Dev Mode MCP needs a Full/Dev seat on a Professional plan, which this project
doesn't have.

Raw Figma API dumps get cached in `.figma-cache/` (gitignored). Re-fetch with
`get_figma_data` on file key `Dx2mds6dyDccTegh5pMal1` if you need them.

---

## Known gaps

Running punch list: [`docs/improvements.md`](docs/improvements.md). Open items as of the last
handover:

- **The hero photo is soft.** Figma only contains an 826×924 screenshot of a product mockup.
  It's displayed small enough not to upscale, but it needs the original photograph to be
  genuinely sharp. Every other photo on the site is high-resolution.
- **General polish** — "ratio, centering etc." Needs specifics from whoever's reviewing.
- **The booking form doesn't send anything.** [`BookingForm.tsx`](src/components/sections/BookingForm.tsx)
  validates input and shows a success state, but there's no backend. Wire it to a form handler
  (Formspree, Resend, a route handler — whatever fits) before launch.
- **No favicon.** The Next.js default was removed during scaffolding. Drop a `favicon.ico` (or
  `icon.png`) into `src/app/` and Next will pick it up automatically.
- **Placeholder content**: phone number is `+012345678910`, social links point at
  `instagram.com` / `facebook.com` / `linkedin.com` root, and the About + Services body copy is
  lorem ipsum — all straight from Figma, all needs real content.
- **All five FAQ answers are identical.** The Figma component had one placeholder answer
  repeated; only the questions were written.

### Unused assets

These were exported from Figma but are no longer referenced, after decorative blobs were
rebuilt as CSS/SVG. Safe to delete, kept in case the design changes back:

```
public/images/story-1.png, story-2.png, showcase-wide.png, showcase-tall.png,
public/images/lets-talk.png, about-doodle.svg,
public/images/service-card-icon.png, service-card-icon-active.png
public/icons/plus.svg, chevron-down.svg
```

---

## Deploying to Netlify

Nothing is deployed yet. Netlify supports Next.js 16 natively with zero configuration, via its
[OpenNext adapter](https://github.com/opennextjs/opennextjs-netlify) — it detects Next.js and
installs the runtime for you. **This app needs no environment variables**, so there is nothing
to configure beyond connecting the repo.

Always sanity-check locally first:

```bash
npm run lint && npm run build
```

### First deploy (connect the GitHub repo — recommended)

1. Sign in at [app.netlify.com](https://app.netlify.com) and choose
   **Add new site → Import an existing project**.
2. Pick **GitHub**, authorise Netlify, and select **`hjordismaria/tokiwebsite`**.
3. Netlify auto-detects Next.js and pre-fills the build settings. They should read:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Branch to deploy:** `main`

   These are also committed in [`netlify.toml`](netlify.toml), which wins over the UI — so if
   you need to change them, edit that file rather than the dashboard.
4. **Do not add any environment variables.** In particular never add `FIGMA_API_KEY` — it is
   only used locally to pull assets out of Figma, is not needed to build, and Netlify's secret
   scanner will fail the build if it finds a token's value in the output.
5. Click **Deploy**. First build takes a few minutes; afterwards you get a URL like
   `random-name-123.netlify.app`.

From then on **every push to `main` deploys automatically**, and every pull request gets its
own Deploy Preview URL.

### Deploying from your machine instead

```bash
npm install -g netlify-cli
netlify login
netlify init          # links this folder to a Netlify site (first time only)
netlify deploy --build            # draft URL, safe for checking
netlify deploy --build --prod     # promotes to the live site
```

`netlify init` writes a `.netlify/` folder, which is already gitignored.

### What Netlify does with this particular site

- **All 8 pages are prerendered** (`/en`, `/is`, and the three sub-pages in each language), so
  they are served as static files from the CDN.
- **`src/proxy.ts` becomes a Netlify Edge Function.** That is what makes `/book` redirect to
  `/en/book` or `/is/book`. It is the only server-side piece, and it is edge-safe: it imports
  nothing but `next/server` and our own config, with no Node built-ins and no CommonJS
  dependencies (the usual cause of "Failed to load external module" build failures on Netlify).
- **`next/image` is handled by Netlify's image CDN** automatically — no config needed.

### Custom domain

Once the site is live: **Site configuration → Domain management → Add a domain**. Netlify walks
you through either delegating the domain's nameservers to Netlify (simplest) or adding a
`CNAME` record at your existing DNS provider. HTTPS is provisioned free via Let's Encrypt and
renews itself.

### Worth knowing

- **Node version** is pinned to 22 in both [`.nvmrc`](.nvmrc) and `netlify.toml`. Next 16 needs
  20.19+, so don't lower it.
- **Don't pin the Netlify adapter.** There is deliberately no `[[plugins]]` block in
  `netlify.toml`; Netlify keeps the runtime updated itself, and freezing it means missing fixes
  for new Next.js releases.
- **The booking form still goes nowhere.** If you want the quickest fix, [Netlify
  Forms](https://docs.netlify.com/manage/forms/setup/) is built into the platform — it needs a
  `data-netlify="true"` attribute and a real `POST` submission rather than the current
  `preventDefault()` handler in
  [`BookingForm.tsx`](src/components/sections/BookingForm.tsx). Submissions then show up in the
  Netlify dashboard with no backend to run.

---

## Conventions worth keeping

- `AGENTS.md` is generated by `next dev` and re-added if deleted — commit it with your changes
  rather than fighting it.
- Branch off `main`; `main` is what's on GitHub.
- Run `npm run build` before pushing. It catches type errors that `dev` won't.
