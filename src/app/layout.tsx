import "./globals.css";
import type { Metadata } from "next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollRestore from "@/components/ScrollRestore";

export const metadata: Metadata = {
  metadataBase: new URL("https://accessgrantednortheast.co.uk"),
  title: "Access Granted Northeast — Auto Locksmith Newcastle & North East",
  description:
    "Trusted 24/7 auto locksmith in Newcastle & the North East. Vehicle entry, lost car keys, key coding, diagnostics, Ghost immobiliser installation and residential locksmith services.",
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
    title: "Access Granted Northeast — Auto Locksmith Newcastle & North East",
    description:
      "Trusted 24/7 auto locksmith in Newcastle & the North East. Vehicle entry, lost car keys, key coding, diagnostics and residential locksmith services.",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="sr-only">
          Skip to content
        </a>
        {children}
        <ScrollRestore />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
