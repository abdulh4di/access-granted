# Site Map — Access Granted

**Figma File Key**: `XXFO0ssBgFoLifZZMRMF1R`
**Source URL**: `https://www.figma.com/design/XXFO0ssBgFoLifZZMRMF1R/Access-Granted?node-id=173-5985`
**Container Max-Width**: `1280px` (content band 1176px, padding 52px)
**Theme**: Light — page `#f7f6f3`, section band `#e2e2df`, accent `#006bc7`

## Pages

### Page: Home
Node ID: `173:5985`

#### Sections

| Order | Section | Node ID | Component | Background | Notes |
|-------|---------|---------|-----------|------------|-------|
| — | Header (wraps Nav+Hero) | `173:5986` | — | gray `#e2e2df` | container only |
| 1 | Nav | `173:6016` | Navbar | gray `#e2e2df` | logo, links (Home/Gallery/Contact/Services▾), blue "Emergency Call Out" CTA |
| 2 | Hero | `173:5987` | Hero | gray `#e2e2df` | white card w/ title + desc + social chips + "Get In Touch"; right image tile |
| 3 | About Us | `173:6035` | About | white `#f7f6f3` | "About us" tag + statement; right = 4 stat cards on blue Union shape |
| 4 | Services | `173:6065` | Services | white `#f7f6f3` | tag + headline + subhead + 4 alternating icon/text/image rows |
| 5 | Why Choose Us | `173:6111` | WhyChooseUs | white `#f7f6f3` | centered "Benefits" tag + title + desc + feature/info cards (incl. dark card) |
| 6 | Areas | `173:6170` | Areas | white `#f7f6f3` | headline + subhead + "Areas" location grid rows |
| 7 | Testimonials | `173:6272` | Testimonials | white `#f7f6f3` | "What Our Customers Say" + CTA + horizontal testimonial row |
| 8 | Footer | `173:6308` | Footer | dark `#070607` | "Need Urgent Help?" + Contact Now CTA, logo + tagline, socials, link columns |

## Shared Components / Atoms

| Component | Source Node | Description |
|-----------|-------------|-------------|
| Tag chip (`.eyebrow`) | `173:6037` | `#111` pill, white Inter-Medium 16px, "About us" etc. |
| Button primary (`.btn-primary`) | `173:6032` | blue `#006bc7` pill, white text, h56 |
| Button light (`.btn-light`) | `173:6280` | white pill, dark text |
| Social chip | `173:5996` | `#bfe7ff` circular chip, 16px svg |
| Stat card | `173:6052` | 24px radius, white text on blue Union |

## Assets (written by Figma MCP to `public/assets/images/`)

Assets are written to disk per-section as `get_design_context` is called in Phase 2 (`dirForAssetWrites`). Hashed filenames are mapped to semantic names during component build. Key assets so far:
- Hero image: `47aff7e5a8bf4e07c8bbb8b0b915c78ab98ba5b8.png`
- Nav/footer logo: `c1bc5c59bef7f287790a66789a74f98c6a5eefc2.png`
- Stat Union shape: `48f7d0373967f7505b89e9b746e67c302614e0ef.svg` (`#006bc7`)
