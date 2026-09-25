import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Indexable pages only. /thank-you is deliberately left out (it is noindex).
// Add new pages here when they are created.
const PATHS = [
  "/",
  "/contact",
  "/gallery",
  "/reviews",
  "/terms",
  "/services/auto-locksmith",
  "/services/auto-locksmith/lost-car-keys",
  "/services/auto-locksmith/car-key-replacement",
  "/services/auto-locksmith/spare-keys",
  "/services/auto-locksmith/vehicle-lockouts",
  "/services/auto-locksmith/key-programming",
  "/services/auto-locksmith/broken-key-extraction",
  "/services/auto-locksmith/ignition-repair",
  "/services/ghost-immobiliser",
  "/services/vag-specialist",
  "/services/residential-locksmith",
  "/services/residential-locksmith/emergency-home-lockouts",
  "/services/residential-locksmith/household-key-cutting",
  "/services/residential-locksmith/lock-repairs",
  "/services/residential-locksmith/lock-replacements",
  "/services/vehicle-coding-diagnostics",
  "/services/vehicle-coding-diagnostics/advanced-diagnostics",
  "/services/vehicle-coding-diagnostics/apple-carplay-activation",
  "/services/vehicle-coding-diagnostics/ecu-coding",
  "/services/vehicle-coding-diagnostics/fault-code-reading",
  "/services/vehicle-coding-diagnostics/gearbox-coding",
  "/services/vehicle-coding-diagnostics/module-programming",
];

// Date of the last real content change. Bump it when page content changes —
// search engines discount lastmod values that change on every build.
const LAST_MODIFIED = new Date("2026-09-24");

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
  }));
}
