import type { Metadata } from "next";
import KeystaticApp from "./keystatic";

// The CMS admin has its own root layout (the site's lives in app/(site)), so
// none of the site's global CSS, page curtain or floating buttons load here.
export const metadata: Metadata = {
  title: "Access Granted CMS",
  robots: { index: false, follow: false },
};

export default function KeystaticLayout() {
  return (
    <html lang="en">
      <body>
        <KeystaticApp />
      </body>
    </html>
  );
}
