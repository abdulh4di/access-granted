# Project Brief — Access Granted

> Auto-generated from the first Figma page (node `173:5985`, "Home").
> Figma file: https://www.figma.com/design/XXFO0ssBgFoLifZZMRMF1R/Access-Granted
> File key: `XXFO0ssBgFoLifZZMRMF1R`

## Project

- **Name:** Access Granted
- **Business:** Auto Locksmith serving Newcastle & the North East
- **Framework:** Next.js (App Router) — existing, kept
- **Design frame width:** 1280px → `--size-container-ideal: 1280`
- **Theme:** Light. Off-white page (`#f7f6f3`) / gray section bands (`#e2e2df`), black text, bright-blue accent, occasional dark cards.

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Text Black | `#070607` | Primary text, headings, dark surfaces |
| Text Secondary Black | `#565656` | Body / muted text on light |
| Text White | `#ffffff` | Text on dark/blue surfaces |
| Text Secondary White | `#a3a3a3` | Muted text on dark surfaces |
| Bg White | `#f7f6f3` | Page background, cards |
| Bg Gray | `#e2e2df` | Section band backgrounds (header, etc.) |
| Blue (primary) | `#006bc7` | Buttons, stat cards, accents |
| Blue Light | `#bfe7ff` | Social-icon chips |
| Nav link | `#222222` | Nav link text |

## Typography

- **Display / Headings:** `Anton` (Google Fonts), weight 400
- **Body:** `Inter` (Google Fonts), weights 400 (Regular) & 500 (Medium)

| Style | Size | Line-height | Ratio | Letter-spacing |
|-------|------|-------------|-------|----------------|
| Hero Title | 64px | 72px | 1.125 | 0 |
| Heading 6xl | 72px | 96px | 1.333 | 0 |
| Heading 4xl | 48px | 56px | 1.167 | 0 |
| Heading 3xl | 36px | 40px | 1.111 | 0 |
| Body Lg | 20px | 28px | 1.4 | -0.8% (≈-0.16px) |
| Body base | 16px | 24px | 1.5 | -0.8% (≈-0.128px) |
| Nav / label | 14px | 20px | 1.429 | -0.07px |

## Spacing scale (Figma variables)

`0, 4, 8, 24, 240` px → `0, 0.25em, 0.5em, 1.5em, 15em`

## Border radius

- Cards / image tiles: `24px` → `1.5em`
- Nav pill / small: `20px` → `1.25em`
- Pill buttons: `240px` → fully rounded (`15em`)
- Social-icon chips: `42.236px` → circular (`2.64em`)

## Shadows

None observed in the base design (flat surfaces).

## Container / layout

- Content max-width band: 1176px inside a 1280px frame → section horizontal padding 52px (`3.25em`) desktop
- `--size-container-max: 1440px`, responsive `--container-padding`: 3.25em → 1.5em (≤991) → 1em (≤767)

## Sections (Home, single page)

1. **Nav** — logo, links (Home, Gallery, Contact, Services▾), blue "Emergency Call Out" CTA. On gray band.
2. **Hero** — off-white card: "Auto Locksmith / Newcastle" (64px Anton), description, social chips + blue "Get In Touch" pill; right: rounded image tile. On gray band.
3. **About Us** — "About Us" tag, hero statement; right: 4 stat cards on a joined blue "Union" shape (100% / 24/7 / 200+ / 40+).
4. **Services** — tag, headline "Auto Locksmith, Coding & Diagnostic Services", subheadline, 4 alternating rows (icon + title + subtitle + image): Auto Locksmith Services, Vehicle Coding & Diagnostics, Smart Immobiliser Installation, Residential Locksmith Services.
5. **Why Choose Us** — centered "Benefits" tag, title "Why drivers and homeowners choose Access Granted", description, feature cards (tag cloud + stat cards, incl. dark card).
6. **Areas** — headline "Auto Locksmith Covering Newcastle & the North East", subheadline, "Areas" table of covered locations (4-col grid rows).
7. **Testimonials / Blog** — "What Our Customers Say" heading, CTA, horizontal testimonial row.
8. **Footer** — "Need Urgent Help?" heading + Contact Now CTA, logo + tagline, social chips, Pages / link columns.

## Special interactions

None specified beyond standard hover on buttons/links. No parallax/scroll animation in the design.

## Component patterns

- Pill buttons (blue solid; white solid), tag/eyebrow chips, stat cards (24px radius), service rows, feature/info cards, pricing/area grid rows, testimonial cards, social-icon chips.
