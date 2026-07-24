"use client";

import { useEffect } from "react";
import { buildReveal, prefersReducedMotion, withBreakpoints } from "./revealCore";

/**
 * Scroll reveal for the Testimonials section — heading lines, CTA zoom, and a
 * fade-in for the review track. The track is deliberately opacity-only: it runs
 * a CSS marquee on `transform`, which a GSAP scale/translate would clobber.
 */
export default function TestimonialsReveal() {
  useEffect(() => {
    const section = document.getElementById("testimonials");
    if (!section || prefersReducedMotion()) return;

    const head = section.querySelector<HTMLElement>("[data-tst-head]");
    const btn = section.querySelector<HTMLElement>("[data-tst-btn]");
    const track = section.querySelector<HTMLElement>("[data-tst-track]");
    const headTrigger = head ?? section;

    return withBreakpoints((starts) =>
      buildReveal(
        {
          headTrigger,
          eyebrow: section.querySelector<HTMLElement>("[data-tst-eyebrow]"),
          heading: section.querySelector<HTMLElement>("[data-tst-heading]"),
          blocks: btn ? [{ el: btn, trigger: headTrigger }] : [],
          fades: track ? [{ el: track, trigger: track }] : [],
        },
        starts
      )
    );
  }, []);

  return null;
}
