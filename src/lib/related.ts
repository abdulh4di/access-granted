import { SERVICES } from "@/lib/services";

const AUTO = "/services/auto-locksmith";
const RESI = "/services/residential-locksmith";
const CODING = "/services/vehicle-coding-diagnostics";

/**
 * Which pages each service page points to. Chosen by what a visitor on that
 * page is likely to need next; a few deliberately cross the auto / home /
 * coding clusters (e.g. lockouts <-> emergency home lockouts). Three each.
 */
export const RELATED: Record<string, [string, string, string]> = {
  // Auto locksmith
  [AUTO]: ["/services/ghost-immobiliser", CODING, RESI],
  [`${AUTO}/car-key-replacement`]: [`${AUTO}/lost-car-keys`, `${AUTO}/spare-keys`, `${AUTO}/key-programming`],
  [`${AUTO}/lost-car-keys`]: [`${AUTO}/car-key-replacement`, `${AUTO}/key-programming`, `${AUTO}/spare-keys`],
  [`${AUTO}/spare-keys`]: [`${AUTO}/lost-car-keys`, `${AUTO}/car-key-replacement`, `${RESI}/household-key-cutting`],
  [`${AUTO}/vehicle-lockouts`]: [`${AUTO}/lost-car-keys`, `${AUTO}/broken-key-extraction`, `${RESI}/emergency-home-lockouts`],
  [`${AUTO}/key-programming`]: [`${AUTO}/lost-car-keys`, `${AUTO}/car-key-replacement`, `${AUTO}/ignition-repair`],
  [`${AUTO}/broken-key-extraction`]: [`${AUTO}/ignition-repair`, `${AUTO}/car-key-replacement`, `${AUTO}/vehicle-lockouts`],
  [`${AUTO}/ignition-repair`]: [`${AUTO}/broken-key-extraction`, `${AUTO}/key-programming`, `${AUTO}/lost-car-keys`],
  // Home locksmith
  [RESI]: [AUTO, "/services/ghost-immobiliser", CODING],
  [`${RESI}/emergency-home-lockouts`]: [`${RESI}/lock-repairs`, `${RESI}/lock-replacements`, `${AUTO}/vehicle-lockouts`],
  [`${RESI}/household-key-cutting`]: [`${RESI}/lock-replacements`, `${RESI}/lock-repairs`, `${AUTO}/spare-keys`],
  [`${RESI}/lock-repairs`]: [`${RESI}/lock-replacements`, `${RESI}/emergency-home-lockouts`, `${RESI}/household-key-cutting`],
  [`${RESI}/lock-replacements`]: [`${RESI}/lock-repairs`, `${RESI}/household-key-cutting`, `${RESI}/emergency-home-lockouts`],
  // Coding and diagnostics
  [CODING]: ["/services/vag-specialist", `${AUTO}/key-programming`, "/services/ghost-immobiliser"],
  [`${CODING}/advanced-diagnostics`]: [`${CODING}/fault-code-reading`, `${CODING}/ecu-coding`, `${CODING}/module-programming`],
  [`${CODING}/fault-code-reading`]: [`${CODING}/advanced-diagnostics`, `${CODING}/ecu-coding`, `${CODING}/module-programming`],
  [`${CODING}/ecu-coding`]: [`${CODING}/fault-code-reading`, `${CODING}/gearbox-coding`, "/services/vag-specialist"],
  [`${CODING}/gearbox-coding`]: [`${CODING}/ecu-coding`, `${CODING}/module-programming`, "/services/vag-specialist"],
  [`${CODING}/module-programming`]: [`${CODING}/advanced-diagnostics`, `${CODING}/gearbox-coding`, `${CODING}/apple-carplay-activation`],
  [`${CODING}/apple-carplay-activation`]: [`${CODING}/module-programming`, "/services/vag-specialist", `${CODING}/ecu-coding`],
  // Standalone
  "/services/vag-specialist": [`${CODING}/ecu-coding`, `${CODING}/apple-carplay-activation`, `${AUTO}/key-programming`],
  "/services/ghost-immobiliser": [`${AUTO}/key-programming`, `${AUTO}/car-key-replacement`, `${AUTO}/vehicle-lockouts`],
};

/** The hub a child page belongs to, or null for hubs and standalone pages. */
export function hubOf(path: string): string | null {
  return [AUTO, RESI, CODING].find((h) => path.startsWith(`${h}/`)) ?? null;
}

// Fail loudly at build time rather than ship a link to nowhere.
for (const [page, targets] of Object.entries(RELATED)) {
  for (const t of [page, ...targets]) {
    if (!SERVICES[t]) throw new Error(`related.ts: unknown service path ${t}`);
  }
}
