"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageLoader.module.css";

type PageLoadState = {
  /** The page has settled and the entrance animations may play. */
  ready: boolean;
  /** This route shows the loading curtain. */
  curtained: boolean;
};

/**
 * Defaults describe a page with no loader at all, so a component rendered
 * outside the provider animates normally rather than sitting silently forever.
 */
const PageLoadContext = createContext<PageLoadState>({
  ready: true,
  curtained: false,
});

export function usePageReady() {
  return useContext(PageLoadContext).ready;
}

/**
 * Whether this route is covered by the loading curtain.
 *
 * The navbar and footer sit *above* that curtain and are meant to stay put
 * while it's up — so they use this to skip their own entrance animation, which
 * would otherwise fade them in from nothing while the spinner runs.
 */
export function usePageCurtained() {
  return useContext(PageLoadContext).curtained;
}

/**
 * The homepage is exempt. It's the first thing most visitors see, and a curtain
 * in front of it delays the hero for no gain — the reveals set their "from"
 * state before paint on their own, so there's nothing there to hide.
 */
const NO_LOADER = ["/"];

/** Long enough to read as a deliberate pause rather than a flicker. */
const MIN_MS = 450;
/** Nothing waits on a slow image forever — reveal the page regardless. */
const MAX_MS = 3000;

function afterDelay(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms));
}

/**
 * Every image already on screen, settled — decoded or failed, either is fine.
 * Images further down the page load behind the curtain; only what you'd see the
 * moment it lifts is worth waiting for.
 */
function aboveFoldImages() {
  const pending = Array.from(document.images).filter(
    (img) => !img.complete && img.getBoundingClientRect().top < window.innerHeight
  );

  return Promise.all(
    pending.map(
      (img) =>
        new Promise<void>((resolve) => {
          const done = () => resolve();
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        })
    )
  );
}

/**
 * A spinner that covers the page until it's ready to be seen.
 *
 * The problem it solves: the GSAP entrance animations can only set their "from"
 * state once React has hydrated, so for a frame or two the finished layout is
 * on screen before it snaps back and animates in — content popping, then
 * playing. The web fonts landing a moment later reflow it again.
 *
 * So the page is held behind an opaque overlay until the fonts are in and the
 * visible images have loaded, and only then does `ready` flip. The animation
 * components hang off that flag (see `usePageReady`), which means their "from"
 * state is applied in the same commit the overlay starts fading — the reveal
 * plays into view instead of being caught halfway through.
 *
 * `ready` starts false so the server-rendered HTML already contains the
 * overlay; there's no gap where the raw page shows before hydration.
 */
export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Which route has finished settling, rather than a plain boolean. Navigating
  // makes `ready` false again during the render itself — resetting a boolean
  // from the effect would only do it a paint later, after the new page had
  // already been shown.
  const [settledPath, setSettledPath] = useState<string | null>(null);
  const exempt = NO_LOADER.includes(pathname);
  // Exempt routes are ready from the first render, so their reveals run at
  // hydration exactly as they would with no loader in the tree at all.
  const ready = exempt || settledPath === pathname;

  useEffect(() => {
    if (exempt) return;

    let cancelled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const settled = Promise.all([
      // Skipped under reduced motion: the hold exists to give the animation
      // room to play, and there won't be much of one.
      reduced ? Promise.resolve() : afterDelay(MIN_MS),
      // Fonts change text metrics, so waiting for them keeps the reveal from
      // re-splitting mid-flight.
      document.fonts?.ready ?? Promise.resolve(),
      aboveFoldImages(),
    ]);

    Promise.race([settled, afterDelay(MAX_MS)]).then(() => {
      if (!cancelled) setSettledPath(pathname);
    });

    return () => {
      cancelled = true;
    };
  }, [pathname, exempt]);

  const state = useMemo(
    () => ({ ready, curtained: !exempt }),
    [ready, exempt]
  );

  return (
    <PageLoadContext.Provider value={state}>
      {children}
      {/*
        Rendered unconditionally, and deliberately so. Gating this on `exempt`
        made the markup depend on `usePathname()`, which does not always agree
        between the prerender and the browser — when it disagreed on the
        homepage the server sent a curtain the client did not render, the
        hydration mismatch left that curtain stranded in the DOM with no React
        state behind it to ever hide it, and the page was lost behind a spinner
        that could not lift. Identical markup on both sides makes that
        impossible. Which routes actually *show* it is decided in CSS instead,
        off the server-rendered `data-route-home` marker.
      */}
      <div
        data-page-curtain
        className={`${styles.overlay} ${ready ? styles.hidden : ""}`}
        role="status"
        aria-live="polite"
        aria-label={ready ? "" : "Loading"}
      >
        <span className={styles.spinner} aria-hidden="true" />
      </div>
    </PageLoadContext.Provider>
  );
}
