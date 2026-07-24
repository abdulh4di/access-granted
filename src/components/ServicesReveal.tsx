"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { revealHeading, revealTrigger } from "./revealCore";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Scroll-triggered reveal for the Services section.
 *   - eyebrow:   fades/rises in
 *   - headline:  split into masked lines that slide up in sequence (same as About)
 *   - subhead:   zooms in (scale + fade)
 *   - each row:  zooms in as it scrolls into view
 *
 * This section sits well down the page, so plain element-position triggers work
 * on both desktop and the stacked mobile layout — no fixed-offset workaround.
 * Plays once and stays; `prefers-reduced-motion` skips it entirely.
 */
export default function ServicesReveal() {
  useEffect(() => {
    const section = document.getElementById("services");
    if (!section) return;

    const head = section.querySelector<HTMLElement>("[data-services-head]");
    const eyebrow = section.querySelector<HTMLElement>("[data-services-eyebrow]");
    const headline = section.querySelector<HTMLElement>("[data-services-headline]");
    const sub = section.querySelector<HTMLElement>("[data-services-sub]");
    const rows = section.querySelectorAll<HTMLElement>("[data-service-row]");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const headTrigger = head ?? section;

    const build = (cfg: {
      headStart: string;
      subStart: string;
      rowStart: string;
    }) => {
      // Eyebrow leads in
      if (eyebrow) {
        gsap.from(eyebrow, {
          y: 16,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          ...revealTrigger(headTrigger, cfg.headStart),
        });
      }

      // Headline — masked lines sliding up, one after another
      if (headline) revealHeading(headline, headTrigger, cfg.headStart);

      // Sub-paragraph — zooms in
      if (sub) {
        gsap.from(sub, {
          scale: 0.9,
          opacity: 0,
          transformOrigin: "50% 50%",
          duration: 0.6,
          ease: "power3.out",
          ...revealTrigger(headTrigger, cfg.subStart),
        });
      }

      // Service cards — each row zooms in as it scrolls into view
      rows.forEach((row) => {
        gsap.from(row, {
          scale: 0.9,
          opacity: 0,
          transformOrigin: "50% 50%",
          duration: 0.6,
          ease: "power3.out",
          ...revealTrigger(row, cfg.rowStart),
        });
      });
    };

    const mm = gsap.matchMedia();

    // Desktop — rows are short (card beside image), so they can fire as they
    // first appear at the bottom of the viewport.
    mm.add("(min-width: 992px)", () => {
      build({ headStart: "top 88%", subStart: "top 85%", rowStart: "top 90%" });
    });

    // Column layout (phones/tablets) — rows are much taller (card stacked above
    // image), so hold back a little: a trigger right at the bottom edge would
    // play most of the motion off-screen.
    mm.add("(max-width: 991px)", () => {
      build({ headStart: "top 85%", subStart: "top 82%", rowStart: "top 86%" });
    });

    return () => mm.revert();
  }, []);

  return null;
}
