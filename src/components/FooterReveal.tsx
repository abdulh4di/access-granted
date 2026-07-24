"use client";

import { useEffect } from "react";
import { buildReveal, prefersReducedMotion, withBreakpoints } from "./revealCore";

/**
 * Scroll reveal for the footer — the whole footer card zooms in as one block
 * (scale + fade), rather than animating its parts individually.
 */
export default function FooterReveal() {
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer || prefersReducedMotion()) return;

    const card = footer.querySelector<HTMLElement>("[data-footer-card]");
    if (!card) return;

    // The footer always sits at the very end of the document, so the shared
    // "65% up the viewport" target is frequently unreachable — you hit the
    // bottom of the page before the footer ever climbs that high, and the
    // reveal would never fire. Trigger as it enters the viewport instead.
    return withBreakpoints((starts) =>
      buildReveal(
        { headTrigger: card, blocks: [{ el: card, trigger: card }] },
        { ...starts, block: "top bottom-=80" }
      )
    );
  }, []);

  return null;
}
