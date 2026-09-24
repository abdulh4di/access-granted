"use client";

import Link from "next/link";

/**
 * The footer's "Contact Now" button. Pages with their own enquiry form have a
 * `#contact` section, and there the button jumps straight to it as before.
 * Every other page (home, gallery, thank-you) has no such section, so the old
 * bare `#contact` link did nothing — the real href is now the contact page,
 * which is also what crawlers and no-JS visitors follow.
 */
export default function ContactNowLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className={className}
      onClick={(e) => {
        if (document.getElementById("contact")) {
          e.preventDefault();
          window.location.hash = "contact";
        }
      }}
    >
      {children}
    </Link>
  );
}
