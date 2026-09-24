/**
 * The canonical host. Vercel redirects the bare domain to `www`, so `www` is
 * the address that actually serves pages — canonicals, Open Graph URLs and the
 * sitemap must all agree with it.
 */
export const SITE_URL = "https://www.accessgrantednortheast.co.uk";

/**
 * Social share image (1200x630) used for Open Graph and Twitter cards. Every
 * page that defines its own `openGraph` block must include it — a page-level
 * `openGraph` replaces the layout's rather than merging with it.
 */
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Access Granted Auto Locksmith service van",
};
