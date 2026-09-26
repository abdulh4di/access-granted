import "./globals.css";
import type { Metadata } from "next";
import { Anton, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { OG_IMAGE, SITE_URL } from "@/lib/site";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ImageSkeletons from "@/components/ImageSkeletons";
import PageLoader from "@/components/PageLoader";
import ScrollRestore from "@/components/ScrollRestore";

// Self-hosted through next/font: the files are served from our own domain and
// preloaded, so there's no render-blocking request to fonts.googleapis.com.
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});
const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const jakarta = Plus_Jakarta_Sans({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Access Granted Northeast: Auto Locksmith Newcastle upon Tyne",
  description:
    "24/7 mobile auto locksmith in Newcastle & the North East. Lost car keys, lockouts, key programming, vehicle coding and home locksmith. Free call-out.",
  keywords: [
    "auto locksmith Newcastle",
    "car key replacement North East",
    "vehicle coding",
    "car diagnostics",
    "ghost immobiliser",
    "emergency locksmith",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Auto Locksmith Newcastle upon Tyne",
    description:
      "24/7 mobile auto locksmith in Newcastle & the North East. Lost car keys, lockouts, key programming, vehicle coding and home locksmith. Free call-out.",
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  // Google Search Console ownership check (HTML tag method).
  verification: { google: "0BKWBb1fgxaKbMoNKLeX5N_l6uJJKdNIr9PgVaMABhQ" },
  // Square crop of the logo emblem. Google wants a favicon in multiples of 48px.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${jakarta.variable}`}
    >
      <head>
        {/* With scripting off nothing can ever lift the curtain, so it must
            not be drawn in the first place. */}
        <noscript>
          <style>{`[data-page-curtain]{display:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="sr-only">
          Skip to content
        </a>
        <PageLoader>{children}</PageLoader>
        <ImageSkeletons />
        <ScrollRestore />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
