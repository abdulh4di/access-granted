"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { countUp, revealHeading, revealTrigger } from "./revealCore";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Scroll-triggered reveal for the "Why Choose Us" section — same language as the
 * About and Services sections:
 *   - eyebrow:  fades/rises in
 *   - heading:  split into masked lines that slide up in sequence
 *   - desc:     zooms in (scale + fade)
 *   - cards:    zoom in, staggered per row as each row scrolls into view
 *   - tags:     pop in with a quick stagger once their card is in
 *
 * Triggers fire later on the stacked mobile layout so the motion is actually
 * seen rather than playing off the bottom edge. Plays once and stays;
 * `prefers-reduced-motion` skips it entirely.
 */
export default function WhyChooseUsReveal() {
  useEffect(() => {
    const section = document.getElementById("why-choose-us");
    if (!section) return;

    const head = section.querySelector<HTMLElement>("[data-why-head]");
    const eyebrow = section.querySelector<HTMLElement>("[data-why-eyebrow]");
    const heading = section.querySelector<HTMLElement>("[data-why-heading]");
    const desc = section.querySelector<HTMLElement>("[data-why-desc]");
    const rows = section.querySelectorAll<HTMLElement>("[data-why-row]");
    const tags = section.querySelectorAll<HTMLElement>("[data-why-tag]");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const headTrigger = head ?? section;

    const build = (cfg: {
      headStart: string;
      descStart: string;
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

      // Heading — masked lines sliding up, one after another
      if (heading) revealHeading(heading, headTrigger, cfg.headStart);

      // Description — zooms in
      if (desc) {
        gsap.from(desc, {
          scale: 0.9,
          opacity: 0,
          transformOrigin: "50% 50%",
          duration: 0.6,
          ease: "power3.out",
          ...revealTrigger(headTrigger, cfg.descStart),
        });
      }

      // Big numbers count up from 0 as their row scrolls in
      rows.forEach((row) => {
        row
          .querySelectorAll<HTMLElement>("[data-why-count]")
          .forEach((el) => countUp(el, row, cfg.rowStart));
      });

      // Cards — zoom in, staggered across each row as that row scrolls in
      rows.forEach((row) => {
        const cards = row.querySelectorAll<HTMLElement>("[data-why-card]");
        if (!cards.length) return;
        gsap.from(cards, {
          scale: 0.9,
          opacity: 0,
          transformOrigin: "50% 50%",
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          ...revealTrigger(row, cfg.rowStart),
        });
      });

      // Tags — quick pop-in once the first card is in view
      if (tags.length) {
        gsap.from(tags, {
          scale: 0.8,
          opacity: 0,
          transformOrigin: "50% 50%",
          duration: 0.55,
          stagger: 0.03,
          ease: "back.out(1.6)",
          delay: 0.2,
          ...revealTrigger(rows[0] ?? section, cfg.rowStart),
        });
      }
    };

    const mm = gsap.matchMedia();

    // Desktop — cards sit side-by-side, so they can fire as the row appears.
    mm.add("(min-width: 992px)", () => {
      build({ headStart: "top 88%", descStart: "top 85%", rowStart: "top 90%" });
    });

    // Column layout (phones/tablets) — cards stack and are much taller, so hold
    // back a little or most of the motion plays off the bottom edge.
    mm.add("(max-width: 991px)", () => {
      build({ headStart: "top 85%", descStart: "top 82%", rowStart: "top 86%" });
    });

    return () => mm.revert();
  }, []);

  return null;
}
