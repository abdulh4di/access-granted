import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FormSent from "@/components/FormSent";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Thanks for getting in touch | Access Granted Northeast",
  description:
    "Your enquiry is on its way to Access Granted Northeast. We'll get back to you shortly — or call 07777474195 for urgent lockouts, 24/7.",
  alternates: { canonical: "/thank-you" },
  // A confirmation page has no value in search results and shouldn't be indexed
  // or counted as a landing page.
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: "/thank-you",
    siteName: "Access Granted Northeast",
    title: "Thanks for getting in touch | Access Granted Northeast",
    description:
      "Your enquiry is on its way to Access Granted Northeast. We'll get back to you shortly.",
  },
};

export default function ThankYouPage() {
  return (
    <>
      <ScrollToTop />
      <span id="top" />
      <Navbar />
      <main id="main">
        <FormSent />
      </main>
      <Footer />
    </>
  );
}
