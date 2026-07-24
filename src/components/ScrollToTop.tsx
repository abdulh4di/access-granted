"use client";

import { useLayoutEffect } from "react";

/**
 * Forces the page to open at the top.
 *
 * The contact form submits from near the bottom of its page, then
 * `router.push`es here. App Router doesn't reliably reset scroll on a
 * programmatic navigation, so without this you land at whatever offset you
 * submitted from — the footer. Scrolling to 0 is immune to later layout shifts
 * (images/fonts growing the document), so a single call on mount is enough.
 *
 * `instant` overrides the `scroll-behavior: smooth` on <html>, which would
 * otherwise animate a long scroll up from the footer.
 */
export default function ScrollToTop() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
