import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ServiceCards from "@/components/ServiceCards";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Residential Locksmith Newcastle & the North East | Access Granted Northeast",
  description:
    "Mobile residential locksmith in Newcastle & the North East — emergency home lockouts, lock repairs, lock replacements and household key cutting. 24/7.",
  alternates: { canonical: "/services/residential-locksmith" },
  openGraph: {
    type: "website",
    url: "/services/residential-locksmith",
    siteName: "Access Granted Northeast",
    title: "Residential Locksmith Newcastle & the North East",
    description:
      "Mobile residential locksmith across Newcastle & the North East — emergency home lockouts, lock repairs, replacements and key cutting.",
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
    image: "/assets/images/ag-service-residential.png",
    desc: "Locked out of your home? We reach you fast and get you back inside without unnecessary damage.",
  },
  {
    title: "Lock Repairs",
    href: "/services/residential-locksmith/lock-repairs",
    image: "/assets/images/lockrepair.png",
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
        />
        <HowItWorks />
        <Testimonials />
        <ServiceFaq
          subhead="Answers to common questions about our residential locksmith services."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
