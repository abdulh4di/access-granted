import type { Metadata } from "next";
import RelatedServices from "@/components/RelatedServices";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ServiceCards from "@/components/ServiceCards";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home Locksmith Newcastle upon Tyne | Access Granted",
  description:
    "Mobile home locksmith in Newcastle upon Tyne & the North East: emergency lockouts, lock repairs, replacements and key cutting. Free call-out, call 07777 474195.",
  alternates: { canonical: "/services/residential-locksmith" },
  openGraph: {
    type: "website",
    url: "/services/residential-locksmith",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Home Locksmith Newcastle upon Tyne",
    description:
      "Mobile home locksmith in Newcastle upon Tyne & the North East: emergency lockouts, lock repairs, replacements and key cutting. Free call-out, call 07777 474195.",
  },
};

const TRUST = [
  { value: "24/7", label: "Emergency Home Lockouts", tone: "blue" as const },
  { value: "Fast", label: "Response Across the North East", tone: "grey" as const },
  { value: "100%", label: "Mobile Locksmith Service", tone: "dark" as const },
  { value: "All", label: "Locks Repaired & Replaced", tone: "light" as const },
];

const RESIDENTIAL_SERVICES = [
  {
    title: "Emergency Home Lockouts",
    href: "/services/residential-locksmith/emergency-home-lockouts",
    image: "/assets/images/ag-service-residential.webp",
    desc: "Locked out of your home? We reach you fast and get you back inside without unnecessary damage.",
  },
  {
    title: "Lock Repairs",
    href: "/services/residential-locksmith/lock-repairs",
    image: "/assets/images/lockrepair.webp",
    desc: "Sticking, seized or faulty locks repaired so your doors lock and unlock smoothly again.",
  },
  {
    title: "Lock Replacements",
    href: "/services/residential-locksmith/lock-replacements",
    image: "/assets/images/lockreplacement.jpg",
    desc: "New locks supplied and fitted, from upgrades to insurance-approved and anti-snap cylinders.",
  },
  {
    title: "Household Key Cutting",
    href: "/services/residential-locksmith/household-key-cutting",
    image: "/assets/images/keycutting.jpg",
    desc: "Spare and replacement house keys cut accurately on-site for family, tenants or lodgers.",
  },
];

const FAQS = [
  {
    q: "Do you offer emergency home lockout call-outs?",
    a: "Yes. We provide emergency call-out for home lockouts across the North East. For urgent situations it is best to call us directly.",
  },
  {
    q: "Can you get me in without damaging my door?",
    a: "In the vast majority of cases, yes. We use non-destructive entry techniques to open your door without damaging the lock or frame where possible.",
  },
  {
    q: "Can you fit insurance-approved locks?",
    a: "Yes. We can supply and fit British Standard and insurance-approved locks, including anti-snap cylinders for uPVC doors.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our residential locksmith service is fully mobile — we come to your home across Newcastle and the North East.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function ResidentialLocksmithPage() {
  return (
    <>
      <span id="top" />
      <JsonLd
        data={[
          serviceJsonLd(
            "/services/residential-locksmith",
            "Home Locksmith Newcastle upon Tyne",
            String(metadata.description),
          ),
          breadcrumbJsonLd("/services/residential-locksmith", "Home Locksmith Newcastle upon Tyne"),
        ]}
      />
      <Navbar />
      <header>
        <ServiceHero
          eyebrow="Residential Locksmith Services"
          title={
            <>
              Residential Locksmith
              <br />
              Northeast
            </>
          }
          description={
            <>
              Access Granted Northeast provides mobile residential locksmith
              services across the North East, including emergency home lockouts,
              lock repairs, lock replacements and household key cutting.
            </>
          }
          trust={TRUST}
        />
      </header>
      <main id="main">
        <ServiceCards
          heading={
            <>
              Explore Our Residential
              <br />
              Locksmith Services
            </>
          }
          subhead={
            <>
              Browse our range of residential locksmith services, from emergency
              home lockouts and lock repairs to lock replacements and household
              key cutting. Select a service below to learn more.
            </>
          }
          services={RESIDENTIAL_SERVICES}
          earlyReveal
        />
        <HowItWorks />
        <Testimonials />
        <ServiceFaq
          subhead="Answers to common questions about our residential locksmith services."
          items={FAQS}
        />
        <RelatedServices path="/services/residential-locksmith" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
