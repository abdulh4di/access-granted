"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import {
  buildReveal,
  prefersReducedMotion,
  withBreakpoints,
  EARLY_STARTS,
  ZOOM_OUT,
  ZOOM_OUT_STAGGER,
  type Starts,
} from "./revealCore";

/**
 * Groups grid cells into the rows they visually form.
 *
 * A CSS grid has no per-row element to hang a trigger on — the rows are implied
 * by where the cells land — so they're derived from measured positions.
 */
function gridRows(els: HTMLElement[]) {
  const rows: { top: number; els: HTMLElement[] }[] = [];

  els.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    // A few px of tolerance: cells in one row rarely agree to the sub-pixel.
    const row = rows.find((r) => Math.abs(r.top - top) < 8);
    if (row) row.els.push(el);
    else rows.push({ top, els: [el] });
  });

  return rows.map((r) => r.els);
}

/**
 * Drop-in scroll reveal for any section.
 *
 * Renders a hidden marker, walks up to its nearest section/footer/header, then
 * animates whatever it finds inside using the shared vocabulary:
 *
 *   data-reveal-head     → element the head animations trigger off (optional)
 *   data-reveal-eyebrow  → fades/rises in   (falls back to a global `.eyebrow`)
 *   data-reveal-heading  → masked lines slide up
 *   data-reveal-sub      → zooms in
 *   data-reveal-block    → zooms in as it scrolls into view (repeatable)
 *   data-reveal-fade     → opacity-only (for marquees / transform-driven UI)
 *
 * `mode="load"` plays immediately instead of on scroll — for above-the-fold
 * heroes, where a scroll trigger would never be seen.
 */
export default function SectionReveal({
  mode = "scroll",
}: {
  mode?: "scroll" | "load";
}) {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = markerRef.current?.closest<HTMLElement>(
      "section, footer, header, [data-reveal-root]"
    );
    if (!root || prefersReducedMotion()) return;

    const eyebrow =
      root.querySelector<HTMLElement>("[data-reveal-eyebrow]") ??
      root.querySelector<HTMLElement>(".eyebrow");
    const heading = root.querySelector<HTMLElement>("[data-reveal-heading]");
    const sub = root.querySelector<HTMLElement>("[data-reveal-sub]");
    const blocks = root.querySelectorAll<HTMLElement>("[data-reveal-block]");
    const fades = root.querySelectorAll<HTMLElement>("[data-reveal-fade]");
    const zoomOut = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal-zoom-out]")
    );
    const headTrigger =
      root.querySelector<HTMLElement>("[data-reveal-head]") ?? root;

    // Above-the-fold: play on load, staggered, with no scroll dependency.
    // Uses the exact same motion as the scroll sections (masked heading lines,
    // scale-0.9 zoom) so heroes match the rest of the site — only the trigger
    // differs (a delay instead of a ScrollTrigger).
    if (mode === "load") {
      let played = false;
      const ctx = gsap.context(() => {
        // Leads the sequence with no delay: the frame settles first, then its
        // contents arrive inside it.
        if (zoomOut.length) {
          gsap.fromTo(
            zoomOut,
            { scale: ZOOM_OUT.scale, opacity: ZOOM_OUT.opacity },
            {
              scale: 1,
              opacity: 1,
              transformOrigin: ZOOM_OUT.transformOrigin,
              duration: ZOOM_OUT.duration,
              ease: ZOOM_OUT.ease,
              stagger: ZOOM_OUT_STAGGER,
            }
          );
        }
        if (eyebrow) {
          gsap.from(eyebrow, {
            y: 16,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: 0.08,
          });
        }
        if (heading) {
          SplitText.create(heading, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            // Mark played on COMPLETE, not at split time: `autoSplit` re-splits
            // as soon as the web fonts land, which is right after the first
            // split. Flagging it early meant that second split saw played=true
            // and snapped the lines visible, wiping the animation before it was
            // ever seen. Re-splits mid-flight simply restart it; only once it
            // has finished do later re-splits (resize) skip straight to visible.
            onSplit: (self) => {
              if (played) {
                gsap.set(self.lines, { yPercent: 0 });
                return;
              }
              return gsap.from(self.lines, {
                yPercent: 100,
                duration: 0.95,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.15,
                onComplete: () => {
                  played = true;
                },
              });
            },
          });
        }
        // fromTo (not from): on a StrictMode double-invoke, `from` would read the
        // previous run's leftover hidden state as its destination and animate
        // 0 → 0, leaving these stuck invisible. An explicit end state is safe.
        if (sub) {
          gsap.fromTo(
            sub,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              transformOrigin: "50% 50%",
              duration: 0.8,
              ease: "power3.out",
              delay: 0.5,
            }
          );
        }
        if (blocks.length) {
          // Load mode plays immediately, which is only right for what's actually
          // on screen. A hero that stacks tall on a phone pushes its lower blocks
          // below the fold — animating those now burns the reveal off-screen, so
          // they read as "already there" once you scroll down. Split the two:
          // on-screen blocks play on load; the rest wait for a scroll trigger.
          const fold = window.innerHeight;
          const arr = Array.from(blocks);
          const onLoad = arr.filter((b) => b.getBoundingClientRect().top < fold);
          const deferred = arr.filter(
            (b) => b.getBoundingClientRect().top >= fold
          );

          if (onLoad.length) {
            gsap.fromTo(
              onLoad,
              { scale: 0.9, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                transformOrigin: "50% 50%",
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                delay: 0.7,
              }
            );
          }

          deferred.forEach((b) => {
            gsap.fromTo(
              b,
              { scale: 0.9, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                transformOrigin: "50% 50%",
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: { trigger: b, start: "top 82%", once: true },
              }
            );
          });
        }
      }, root);
      return () => ctx.revert();
    }

    // By default each block triggers off itself, so a stack of cards reveals one
    // at a time as you scroll past. Two opt-ins change that:
    //
    //   data-reveal-block-group  every block shares one trigger and staggers in
    //                            DOM order — for blocks side by side that should
    //                            arrive in a deliberate sequence.
    //   data-reveal-block-rows   blocks are grouped into grid rows; each row
    //                            arrives as one unit, scaling about the row's
    //                            centre, and the next row waits its turn.
    const grouped = root.hasAttribute("data-reveal-block-group");
    const byRow = root.hasAttribute("data-reveal-block-rows");

    // Opt-in per section: reveal on a short fixed scroll instead of the default
    // viewport percentages, for a section sitting right beneath a hero.
    const early = root.hasAttribute("data-reveal-early");

    return withBreakpoints((starts: Starts) => {
      const headStarts = early ? EARLY_STARTS : starts;

      // Rows are measured here rather than once outside, because the row shape
      // changes with the breakpoint (3-up → 2-up → 1-up).
      const blockEntries = !blocks.length
        ? []
        : byRow
          ? gridRows(Array.from(blocks)).map((row) => ({
              el: row,
              trigger: row[0],
              origin: "group" as const,
            }))
          : grouped
            ? [{ el: blocks, trigger: blocks[0], stagger: 0.18 }]
            : Array.from(blocks).map((el) => ({ el, trigger: el }));

      buildReveal(
        {
          headTrigger,
          eyebrow,
          heading,
          sub,
          zoomOut,
          blocks: blockEntries,
          fades: Array.from(fades).map((el) => ({ el, trigger: el })),
        },
        {
          ...headStarts,
          // Rows always key off their own position. `data-reveal-early` exists to
          // bring a section's *heading* in after a short scroll; applied to a tall
          // grid it fires every row within the first 40px, long before any of them
          // are on screen.
          block: byRow ? starts.block : headStarts.block,
        }
      );
    });
  }, [mode]);

  return <span ref={markerRef} aria-hidden="true" style={{ display: "none" }} />;
}
