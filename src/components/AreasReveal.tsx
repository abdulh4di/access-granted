"use client";

import { useEffect } from "react";
import { buildReveal, prefersReducedMotion, withBreakpoints } from "./revealCore";

/** Scroll reveal for the Areas Covered section — heading lines, sub zoom, table zoom. */
export default function AreasReveal() {
  useEffect(() => {
    const section = document.getElementById("areas");
    if (!section || prefersReducedMotion()) return;

    const head = section.querySelector<HTMLElement>("[data-areas-head]");
    const table = section.querySelector<HTMLElement>("[data-areas-table]");
    const headTrigger = head ?? section;

    return withBreakpoints((starts) =>
      buildReveal(
        {
          headTrigger,
          eyebrow: section.querySelector<HTMLElement>("[data-areas-eyebrow]"),
          heading: section.querySelector<HTMLElement>("[data-areas-heading]"),
          sub: section.querySelector<HTMLElement>("[data-areas-sub]"),
          blocks: table ? [{ el: table, trigger: table }] : [],
        },
        starts
      )
    );
  }, []);

  return null;
}
