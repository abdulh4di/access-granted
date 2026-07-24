"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Shared scroll-reveal vocabulary used across the marketing sections:
 *   - eyebrow  fades/rises in
 *   - heading  splits into masked lines that slide up in sequence
 *   - sub      zooms in (scale + fade)
 *   - blocks   zoom in as they scroll into view
 *
 * Triggers fire later on the stacked mobile layout, where elements are much
 * taller — an early trigger would play off the bottom edge before it's seen.
 */
/** A start is either a ScrollTrigger string ("top 55%") or a scroll offset in px. */
export type Starts = {
  head: string | number;
  sub: string | number;
  block: string | number;
};

// A section reveals as it comes into view — its top a short way up from the
// bottom edge — rather than waiting until it reaches the middle of the screen.
// The old 55%/50%/65% lines meant scrolling a section most of the way up the
// window before anything moved, which read as sluggish.
//
// Every start is wrapped in clamp(): an element near the end of the document
// (the footer) can never scroll high enough to cross an 85% line, so without
// clamping it would stay hidden forever. clamp() pins the trigger inside the
// scrollable range so those still fire.
export const DESKTOP_STARTS: Starts = {
  head: "clamp(top 88%)",
  sub: "clamp(top 85%)",
  block: "clamp(top 90%)",
};

/**
 * Opt-in starts for a section sitting directly under a hero, where the default
 * percentages demand an awkward amount of scrolling.
 *
 * These are fixed scroll offsets (pixels) rather than viewport percentages: a
 * percentage that reveals quickly on a short window is already *past* the
 * trigger on a tall one, so the section shows itself at load. A pixel offset is
 * blank at scroll 0 on every screen height and reveals a moment later.
 */
export const EARLY_STARTS: Starts = {
  head: 10,
  sub: 22,
  block: 40,
};

// Slightly later than desktop: stacked elements are much taller here, so a
// trigger right at the bottom edge would play most of the motion off-screen.
export const MOBILE_STARTS: Starts = {
  head: "clamp(top 85%)",
  sub: "clamp(top 82%)",
  block: "clamp(top 86%)",
};

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Has `trigger` already passed the point `start` describes?
 *
 * Read straight off the DOM rather than asked of ScrollTrigger, because this
 * runs during page setup when ScrollTrigger's own numbers can't be trusted: a
 * trigger created while the document is still loading hasn't resolved its start
 * yet, and `clamp()` pins a start inside the scrollable range, so on a document
 * short of its final height the last section reads as "already passed".
 */
function alreadyPassed(trigger: Element, start: string | number) {
  const top = trigger.getBoundingClientRect().top;

  // A numeric start is a scroll offset in px, used by sections just under the
  // hero — those are on screen from the outset, so the scroll position decides.
  if (typeof start === "number") return window.scrollY >= start;

  // "top 55%" / "clamp(top 55%)" — the element's top against that viewport line.
  const pct = /top\s+(\d+(?:\.\d+)?)%/.exec(start);
  const line = pct
    ? window.innerHeight * (Number(pct[1]) / 100)
    : window.innerHeight;
  return top < line;
}

/**
 * The `scrollTrigger` vars for a reveal — or nothing at all, when the element is
 * already past its trigger point as the page sets up.
 *
 * That second case is the whole point. Handing a `scrollTrigger` to a tween whose
 * start is already behind you makes ScrollTrigger *snap* it to the end state, so
 * a refresh partway down the page showed finished text with no motion — the
 * reveal was skipped, not delayed. With no trigger attached the tween simply
 * plays, which is what you want for a section you're already looking at.
 */
export function revealTrigger(
  trigger: Element,
  start: string | number
): { scrollTrigger?: ScrollTrigger.Vars } {
  return alreadyPassed(trigger, start)
    ? {}
    : { scrollTrigger: { trigger, start, once: true } };
}

/**
 * Splits a heading into masked lines that slide up in sequence when it's
 * reached. Shared by every section so the motion stays identical.
 */
export function revealHeading(
  heading: HTMLElement,
  trigger: Element,
  start: string | number,
  vars: { duration?: number; stagger?: number; delay?: number } = {}
) {
  // Set on COMPLETE, not when the trigger fires: `autoSplit` re-splits the
  // moment the web fonts land, which is right after the first split. Flagging it
  // early meant that second split saw it as done and snapped the lines visible,
  // wiping the animation before it was ever seen. A re-split mid-flight simply
  // restarts it — re-evaluating the trigger, so a heading you're already looking
  // at keeps animating rather than waiting for a crossing that has been and gone.
  let done = false;

  SplitText.create(heading, {
    type: "lines",
    mask: "lines",
    autoSplit: true,
    onSplit: (self) => {
      if (done) {
        gsap.set(self.lines, { yPercent: 0 });
        return;
      }
      return gsap.from(self.lines, {
        yPercent: 100,
        duration: vars.duration ?? 0.75,
        stagger: vars.stagger ?? 0.12,
        delay: vars.delay ?? 0,
        ease: "power4.out",
        ...revealTrigger(trigger, start),
        onComplete: () => {
          done = true;
        },
      });
    },
  });
}

/**
 * A container settling in from slightly enlarged — the camera pulling back to
 * frame it, rather than the element growing into place. Deliberately gentle and
 * slower than the reveals inside it, so it reads as the backdrop for the content
 * arriving rather than competing with it.
 */
export const ZOOM_OUT = {
  scale: 1.14,
  opacity: 0,
  transformOrigin: "50% 50%",
  duration: 0.9,
  ease: "power3.out",
} as const;

/** Second and later frames follow the first rather than all settling at once. */
export const ZOOM_OUT_STAGGER = 0.14;

/**
 * Per-element transform origins that make a set of elements scale as if they
 * were a single object: each one takes its origin from the centre of the group's
 * bounding box, so the gaps between them grow and shrink along with the cards.
 *
 * Scaling each card about its own centre keeps those gaps fixed, which reads as
 * three separate cards moving in sync rather than one row zooming.
 *
 * Origins are measured now, before any tween has applied a transform — asking
 * for them later would return rects that are already scaled.
 */
function groupOrigins(els: HTMLElement[]) {
  const rects = els.map((el) => el.getBoundingClientRect());
  const cx =
    (Math.min(...rects.map((r) => r.left)) +
      Math.max(...rects.map((r) => r.right))) /
    2;
  const cy =
    (Math.min(...rects.map((r) => r.top)) +
      Math.max(...rects.map((r) => r.bottom))) /
    2;

  const origins = rects.map((r) => `${cx - r.left}px ${cy - r.top}px`);
  return (i: number) => origins[i];
}

export interface RevealTargets {
  headTrigger: Element;
  eyebrow?: HTMLElement | null;
  heading?: HTMLElement | null;
  sub?: HTMLElement | null;
  /** Containers that settle in from enlarged, framing their contents. */
  zoomOut?: HTMLElement[] | null;
  /** Elements that zoom in, each triggered by itself unless `trigger` is given. */
  blocks?: {
    el: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[];
    trigger: Element;
    stagger?: number;
    /**
     * "group" scales the whole set as one object rather than each member about
     * its own centre — for a row of cards that should arrive as a single unit.
     */
    origin?: "self" | "group";
  }[];
  /** Elements that only fade (no transform) — safe for marquees/animated tracks. */
  fades?: { el: HTMLElement; trigger: Element }[];
}

export function buildReveal(t: RevealTargets, starts: Starts) {
  // One tween across all the frames, keyed to the first: they settle in DOM
  // order regardless of how they're laid out. Triggering each by itself would
  // fire two frames sitting side by side at the same instant, since their tops
  // cross the line together.
  if (t.zoomOut?.length) {
    gsap.from(t.zoomOut, {
      ...ZOOM_OUT,
      stagger: ZOOM_OUT_STAGGER,
      ...revealTrigger(t.zoomOut[0], starts.block),
    });
  }

  if (t.eyebrow) {
    gsap.from(t.eyebrow, {
      y: 16,
      opacity: 0,
      duration: 0.55,
      ease: "power3.out",
      ...revealTrigger(t.headTrigger, starts.head),
    });
  }

  if (t.heading) revealHeading(t.heading, t.headTrigger, starts.head);

  // Deliberately identical to the `mode="load"` sub in SectionReveal — same
  // scale, ease, origin and duration — so a paragraph zooms in exactly the same
  // way whether it's in a hero or a section further down. Only the trigger
  // differs. Keep the two in step if either is retuned.
  if (t.sub) {
    gsap.from(t.sub, {
      scale: 0.9,
      opacity: 0,
      transformOrigin: "50% 50%",
      duration: 0.8,
      ease: "power3.out",
      ...revealTrigger(t.headTrigger, starts.sub),
    });
  }

  t.blocks?.forEach(({ el, trigger, stagger, origin }) => {
    const els =
      el instanceof HTMLElement ? [el] : (Array.from(el) as HTMLElement[]);

    gsap.from(els, {
      scale: 0.9,
      opacity: 0,
      transformOrigin: origin === "group" ? groupOrigins(els) : "50% 50%",
      duration: 0.6,
      ease: "power3.out",
      ...(stagger ? { stagger } : {}),
      ...revealTrigger(trigger, starts.block),
    });
  });

  // Opacity-only: never sets a transform, so it can't clobber a CSS marquee.
  t.fades?.forEach(({ el, trigger }) => {
    gsap.from(el, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      ...revealTrigger(trigger, starts.block),
    });
  });
}

/**
 * Counts a numeric label up from 0 to its value as it scrolls into view —
 * "200+" runs 0+ → 200+, "100%" runs 0% → 100%.
 *
 * Only plain `<digits><suffix>` labels animate. Something like "24/7" is a
 * phrase rather than a quantity and would read as nonsense mid-count ("13/7"),
 * so it's left alone.
 */
export function countUp(
  el: HTMLElement,
  trigger: Element,
  start: string | number
) {
  // Cache the original text: a re-run (matchMedia rebuild, StrictMode
  // double-invoke) would otherwise read the counter's current "0" as the target.
  const raw = el.dataset.countRaw ?? el.textContent?.trim() ?? "";
  el.dataset.countRaw = raw;

  const m = /^(\d[\d,]*)([^\d]*)$/.exec(raw);
  if (!m) return;

  const target = Number(m[1].replace(/,/g, ""));
  const suffix = m[2];
  const grouped = m[1].includes(",");
  const fmt = (n: number) =>
    (grouped ? n.toLocaleString("en-GB") : String(n)) + suffix;

  // Keep the real value available to assistive tech while the digits churn.
  el.setAttribute("aria-label", raw);

  const proxy = { v: 0 };
  el.textContent = fmt(0);
  gsap.to(proxy, {
    v: target,
    duration: 1.4,
    ease: "power2.out",
    onUpdate: () => {
      el.textContent = fmt(Math.round(proxy.v));
    },
    ...revealTrigger(trigger, start),
  });
}

let assetRefreshHooked = false;

/**
 * Keep ScrollTrigger's measurements honest.
 *
 * Web fonts change text metrics and lazy-loaded images change the document
 * height — both shift every trigger below them. ScrollTrigger only auto-refreshes
 * on load/resize, so an image that loads while scrolling leaves stale positions
 * behind. That pushed the footer's trigger past the end of the scrollable range,
 * so it could never fire and the footer stayed invisible.
 */
function hookAssetRefresh() {
  if (assetRefreshHooked || typeof window === "undefined") return;
  assetRefreshHooked = true;

  const refresh = () => ScrollTrigger.refresh();

  document.fonts?.ready.then(refresh).catch(() => {});

  // `load` doesn't bubble, so listen in the capture phase; debounce so a burst
  // of images results in one refresh.
  let timer: number | undefined;
  window.addEventListener(
    "load",
    (e) => {
      const el = e.target as HTMLElement | null;
      if (!el || el.tagName !== "IMG") return;
      window.clearTimeout(timer);
      timer = window.setTimeout(refresh, 200);
    },
    true
  );
}

/** Runs `build` for desktop and mobile start values; returns a cleanup fn. */
export function withBreakpoints(build: (starts: Starts) => void) {
  hookAssetRefresh();
  const mm = gsap.matchMedia();
  mm.add("(min-width: 992px)", () => build(DESKTOP_STARTS));
  mm.add("(max-width: 991px)", () => build(MOBILE_STARTS));
  return () => mm.revert();
}
