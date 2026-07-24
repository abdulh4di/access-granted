"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Keeps your place in the page across a refresh.
 *
 * Next's App Router sets `history.scrollRestoration = "manual"` so it can own
 * scroll position across client-side navigations — which also means a plain
 * browser refresh drops you back at the top. This restores the position itself,
 * but only for a reload: link clicks, back/forward and fresh visits are left to
 * the router.
 *
 * Restoring is retried for a moment rather than done once. Images and web fonts
 * land after hydration and the document grows as they do, so an early single
 * jump would stop short at whatever the page height was at that instant.
 */
const KEY = "scroll-restore:";
const RETRY_MS = 1500;
/** Below this, restoring is indistinguishable from starting at the top. */
const MIN_OFFSET = 40;

export default function ScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    const key = KEY + pathname;

    const read = () => {
      try {
        return Number(sessionStorage.getItem(key)) || 0;
      } catch {
        return 0;
      }
    };
    const write = (y: number) => {
      try {
        sessionStorage.setItem(key, String(Math.round(y)));
      } catch {
        /* private mode / storage disabled — restoring is optional */
      }
    };

    // --- remember ------------------------------------------------------
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        write(window.scrollY);
      });
    };
    const onLeave = () => write(window.scrollY);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", onLeave);

    // --- restore -------------------------------------------------------
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const target = read();
    const shouldRestore =
      nav?.type === "reload" && !window.location.hash && target >= MIN_OFFSET;

    let stopped = !shouldRestore;
    // An explicit scroll from the user wins immediately — nothing is more
    // annoying than the page yanking itself away while you're already moving.
    const takeOver = () => {
      stopped = true;
    };
    const inputs = ["wheel", "touchstart", "keydown", "pointerdown"] as const;

    if (shouldRestore) {
      inputs.forEach((t) =>
        window.addEventListener(t, takeOver, { passive: true })
      );

      const deadline = performance.now() + RETRY_MS;
      const apply = () => {
        if (stopped) return;
        // `instant` overrides the `scroll-behavior: smooth` on <html>, which
        // would otherwise animate a long scroll down the page on every refresh.
        window.scrollTo({ top: target, behavior: "instant" });
        if (window.scrollY < target - 1 && performance.now() < deadline) {
          requestAnimationFrame(apply);
        } else {
          stopped = true;
        }
      };
      apply();
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", onLeave);
      inputs.forEach((t) => window.removeEventListener(t, takeOver));
      stopped = true;
    };
  }, [pathname]);

  return null;
}
