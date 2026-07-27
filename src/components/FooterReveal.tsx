"use client";

import { useEffect, useLayoutEffect } from "react";
import { buildReveal, prefersReducedMotion, withBreakpoints } from "./revealCore";
import { usePageCurtained } from "./PageLoader";

// Before paint, not after: the footer sits above the page loader's curtain, so
// a frame of the settled card before it snapped back to animate would be seen.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Scroll reveal for the footer — the whole footer card zooms in as one block
 * (scale + fade), rather than animating its parts individually.
 */
export default function FooterReveal() {
  const curtained = usePageCurtained();

  useIsomorphicLayoutEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer || prefersReducedMotion()) return;

    const card = footer.querySelector<HTMLElement>("[data-footer-card]");
    if (!card) return;

    // On a short page the footer is already on screen while the curtain is up,
    // and it sits above that curtain — so it has to be solidly there, not
    // zooming itself into existence behind a spinner. Left alone it keeps its
    // default visible styling.
    //
    // Narrowed to that case on purpose: on a full-length page the footer is far
    // below the fold during loading, nobody sees it either way, and its scroll
    // reveal is worth keeping.
    const onScreenNow =
      card.getBoundingClientRect().top < window.innerHeight;
    if (curtained && onScreenNow) return;

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
  }, [curtained]);

  return null;
}
