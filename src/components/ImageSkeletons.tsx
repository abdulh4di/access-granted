"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

// Before paint: an image that arrived ahead of hydration must never be tagged,
// and one that hasn't must be tagged in the same frame the page is drawn.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * The homepage hero, excluded by request. It's the first thing on the page and
 * has its own scale-and-blur entrance — a shimmer underneath would fight it.
 */
const EXCLUDE = "[data-hero-image]";

/**
 * Marks every image that hasn't loaded yet so CSS can paint a shimmering
 * placeholder in its place, and unmarks each one as it arrives.
 *
 * Done by attribute from a single component rather than by wrapping each
 * `<img>`: a wrapper element would land in the middle of flex and grid layouts
 * all over the site and in the `object-fit` rules that size these images, and
 * every image would have to be rewritten to use it. Tagging the image itself
 * changes no markup, so a photo's box is reserved and filled without anything
 * around it shifting.
 *
 * Below-the-fold images are covered too — a `loading="lazy"` image reports
 * itself incomplete until it is scrolled to, so it holds a placeholder until
 * the moment it actually loads rather than only from first paint.
 */
export default function ImageSkeletons() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const images = Array.from(
      document.querySelectorAll<HTMLImageElement>(`img:not(${EXCLUDE})`)
    );

    const cleanups = images
      // `complete` covers both a cached hit and an already-failed request, and
      // is true before hydration for anything the browser already had.
      .filter((img) => !img.complete)
      .map((img) => {
        img.dataset.skeleton = "";

        // On error as well as load: a broken image should show its own broken
        // state, not shimmer forever waiting for something that isn't coming.
        const settle = () => delete img.dataset.skeleton;
        img.addEventListener("load", settle, { once: true });
        img.addEventListener("error", settle, { once: true });

        return () => {
          img.removeEventListener("load", settle);
          img.removeEventListener("error", settle);
          delete img.dataset.skeleton;
        };
      });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
