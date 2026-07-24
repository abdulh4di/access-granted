"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { revealHeading, revealTrigger } from "./revealCore";

gsap.registerPlugin(ScrollTrigger, SplitText);

type TriggerCfg = { trigger: Element; start: number | string };
type BuildCfg = { intro: TriggerCfg; box: TriggerCfg; text: TriggerCfg };

/**
 * Scroll-triggered reveal for the About section.
 *
 * Desktop (heading + stats side-by-side, near the top of the page): reveal at
 * fixed scroll offsets so it appears with just a small scroll, right as the
 * navbar condenses.
 *
 * Column layout (≤991px, e.g. phones): the stats stack BELOW the heading and
 * sit far down, so a tiny fixed offset would fire long before you reach them.
 * There we key each part to its own position entering the viewport, which
 * naturally delays the stats until they're actually scrolled to.
 *
 * `prefers-reduced-motion` skips all of it.
 */
export default function AboutReveal() {
  useEffect(() => {
    const section = document.getElementById("about");
    if (!section) return;

    const heading = section.querySelector<HTMLElement>("[data-about-heading]");
    const eyebrow = section.querySelector<HTMLElement>("[data-about-eyebrow]");
    const statsRoot = section.querySelector<HTMLElement>("[data-stats]");
    if (!heading) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const build = (cfg: BuildCfg) => {
      // Eyebrow leads in
      if (eyebrow) {
        gsap.from(eyebrow, {
          y: 16,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          ...revealTrigger(cfg.intro.trigger, cfg.intro.start),
        });
      }

      // Heading: split into masked lines that slide up in sequence.
      revealHeading(heading, cfg.intro.trigger, cfg.intro.start);

      // Stats — the blue box (union SVG) scales in blank, then the text inside.
      if (statsRoot) {
        const union = statsRoot.querySelector<HTMLElement>("[data-stat-union]");
        const descs = statsRoot.querySelectorAll<HTMLElement>("[data-stat-desc]");
        const values =
          statsRoot.querySelectorAll<HTMLElement>("[data-stat-value]");

        gsap.set(descs, { opacity: 0, y: 12 });
        gsap.set(values, { opacity: 0, y: 16 });

        if (union) {
          gsap.from(union, {
            scale: 0.9,
            opacity: 0,
            transformOrigin: "50% 50%",
            duration: 0.6,
            ease: "power3.out",
            ...revealTrigger(cfg.box.trigger, cfg.box.start),
          });
        }

        const innerTl = gsap.timeline(
          revealTrigger(cfg.text.trigger, cfg.text.start)
        );
        innerTl
          .to(
            descs,
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 },
            0
          )
          .to(
            values,
            { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.4)", stagger: 0.1 },
            0.3
          );
      }
    };

    const statsTrigger = statsRoot ?? section;
    const mm = gsap.matchMedia();

    // Desktop — side-by-side, near the top: reveal at fixed scroll offsets.
    mm.add("(min-width: 992px)", () => {
      build({
        intro: { trigger: section, start: 40 },
        box: { trigger: section, start: 40 },
        text: { trigger: section, start: 60 },
      });
    });

    // Column layout (phones/tablets) — reveal each part as it enters the view,
    // the stats a little after the heading since they sit below it.
    mm.add("(max-width: 991px)", () => {
      build({
        intro: { trigger: section, start: "top 75%" },
        box: { trigger: statsTrigger, start: "top 73%" },
        text: { trigger: statsTrigger, start: "top 67%" },
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
