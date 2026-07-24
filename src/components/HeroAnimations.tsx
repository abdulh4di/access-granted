"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

// Run layout effects before paint on the client to set each element's "from"
// state, avoiding a flash of the final layout. Falls back to useEffect during
// SSR (where layout effects don't run) to silence the React warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Page-load entrance animations for the Hero, scoped to `#hero`.
 * Timing/easing preserved from the source spec:
 *   - hero image:   scale 1.2 -> 1  + blur 10 -> 0   (1.2s, power3.out, 0.1s delay)
 *   - CTA button:   scale 0.5 -> 1  + opacity 0 -> 1 (0.7s, back.out(1.6))
 *   - social chips: translateX 300% -> 0 + blur 20 -> 0 + opacity 0 -> 1
 *                   (0.8s, power3.out, stagger 100ms)
 * Renders nothing — it only drives the animation of already-rendered elements.
 */
export default function HeroAnimations() {
  useIsomorphicLayoutEffect(() => {
    const root = document.getElementById("hero");
    if (!root) return;

    const heading = root.querySelector<HTMLElement>("[data-hero-heading]");
    const text = root.querySelector<HTMLElement>("[data-hero-text]");
    const image = root.querySelector<HTMLElement>("[data-hero-image]");
    const cta = root.querySelector<HTMLElement>("[data-hero-cta]");
    const chips = root.querySelectorAll<HTMLElement>("[data-hero-socials] li");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      [heading, text, image, cta, ...Array.from(chips)].forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Heading + paragraph — staggered rise (stair pattern, 100ms apart)
      const staggerEls = [heading, text].filter(Boolean) as HTMLElement[];
      if (staggerEls.length) {
        gsap.fromTo(
          staggerEls,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.15, stagger: 0.1 }
        );
      }

      // 1. Hero image — scale + blur cinematic reveal
      if (image) {
        gsap.fromTo(
          image,
          { scale: 1.2, filter: "blur(10px)" },
          { scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.1 }
        );
      }

      // 2. CTA button — balloon entrance
      if (cta) {
        gsap.fromTo(
          cta,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.6)", delay: 0.5 }
        );
      }

      // 3. Social chips — slide in from right with blur, stagger 100ms
      if (chips.length) {
        gsap.fromTo(
          chips,
          { x: "300%", filter: "blur(20px)", opacity: 0 },
          {
            x: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.6,
            stagger: 0.1,
          }
        );
      }
    }, root);

    // Revert on unmount/HMR — clears all inline styles gsap added.
    return () => ctx.revert();
  }, []);

  return null;
}
