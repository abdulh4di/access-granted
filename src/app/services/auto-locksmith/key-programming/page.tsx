import type { Metadata } from "next";
import RelatedServices from "@/components/RelatedServices";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Car Key Programming Newcastle upon Tyne | Access Granted",
  description:
    "Car key programming, key fob repair and battery replacement on-site across Newcastle upon Tyne & the North East, often cheaper than a dealer. Free call-out.",
  alternates: { canonical: "/services/auto-locksmith/key-programming" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith/key-programming",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Car Key Programming Newcastle upon Tyne",
    description:
      "Car key programming, key fob repair and battery replacement on-site across Newcastle upon Tyne & the North East, often cheaper than a dealer. Free call-out.",
  },
};

const STEPS = [
  {
    title: "Diagnostic Check",
    desc: "We connect to your vehicle and read its key and security data.",
  },
  {
    title: "Key Coded On-Site",
    desc: "Your key or smart fob is programmed to your car at your location.",
  },
  {
    title: "Tested & Ready",
    desc: "We confirm locking, unlocking and starting all work before we leave.",
  },
];

const KEY_FOB_STEPS = [
  {
    title: "Check the Fob",
    desc: "We find out whether it is a flat battery, worn buttons or a fault with the fob itself.",
  },
  {
    title: "Battery or Repair",
    desc: "We fit a new battery or repair the fob, and re-sync it to your car if it needs it.",
  },
  {
    title: "Replaced if Needed",
    desc: "If a key fob cannot be repaired, we supply and program a replacement on-site.",
  },
];

const BENEFITS = [
  {
    label: "All Key Types",
    heading: "All Key Types",
    sub: "Transponder, Remote & Smart",
    desc: "We code traditional transponder keys, remote fobs and keyless smart keys.",
    icon: "key" as const,
  },
  {
    label: "Keyless Entry",
    heading: "Keyless Entry",
    sub: "Push-to-Start Supported",
    desc: "Proximity smart keys programmed for a wide range of modern vehicles.",
    icon: "chip" as const,
  },
  {
    label: "On-Site Service",
    heading: "On-Site Service",
    sub: "No Dealer Needed",
    desc: "Programmed at your location with specialist equipment — no trip to a garage.",
    icon: "pin" as const,
  },
  {
    label: "Wide Coverage",
    heading: "Wide Coverage",
    sub: "Most Makes & Models",
    desc: "Key coding for a broad range of manufacturers, both modern and older.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "Can you program a key without the original?",
    a: "In many cases, yes. We can carry out all-keys-lost programming to code a brand-new key to your vehicle even if no working key remains.",
  },
  {
    q: "Do you program keyless / smart keys?",
    a: "Yes. We program proximity smart keys and push-to-start fobs for a wide range of modern vehicles.",
  },
  {
    q: "Is it cheaper than a main dealer?",
    a: "Usually, yes. Our mobile service and specialist equipment mean we can program keys for considerably less than a main dealer — and we come to you.",
  },
  {
    q: "How long does programming take?",
    a: "Most jobs take around 20 to 45 minutes, depending on your vehicle’s make, model and security system.",
  },
  {
    q: "Can you replace my car key battery?",
    a: "Yes. If your remote has stopped locking or unlocking the car, a new battery is often the fix. We can replace it for you on-site.",
  },
  {
    q: "Can you repair a broken key fob?",
    a: "In many cases, yes. We repair key fobs with worn or unresponsive buttons and other faults. If a fob cannot be repaired, we can supply and program a replacement key fob.",
  },
  {
    q: "Will my key need reprogramming after a battery change?",
    a: "Usually not, as most keys keep their programming when the battery is changed. If yours needs re-syncing to the car, we can do that on-site.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function KeyProgrammingPage() {
  return (
    <>
      <span id="top" />
      <JsonLd
        data={[
          serviceJsonLd(
            "/services/auto-locksmith/key-programming",
            "Key Programming & Smart Keys Newcastle upon Tyne",
            String(metadata.description),
          ),
          breadcrumbJsonLd("/services/auto-locksmith/key-programming", "Key Programming & Smart Keys Newcastle upon Tyne"),
        ]}
      />
      <Navbar />
      <header>
        <BlogHero
          title="Key Programming & Smart Keys"
          image="/assets/images/service-key-programming.webp"
          imageAlt="Auto locksmith programming a car smart key"
          description={
            <>
              Need a key or fob coded to your car? We program transponder keys,
              remotes and keyless smart keys on-site for a wide range of vehicles
              — often for far less than a main dealer.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="How Is a Car Key Programmed?"
          subhead="Diagnose, code, and test your key"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Keys &amp; Smart Fobs Coded On-Site</>}
          subhead={
            <>
              We program keys and smart fobs directly to your vehicle using
              specialist equipment, so everything locks, unlocks and starts as it
              should.
            </>
          }
          steps={BENEFITS}
        />
        <LostKeysSteps
          eyebrow="Key Fobs"
          heading="Key Fob Repair & Battery Replacement"
          subhead="Remote not working? It may only need a new battery or a repair"
          steps={KEY_FOB_STEPS}
        />
        <ServiceFaq
          subhead="Answers to common questions about key programming — key types, keyless entry and timings."
          items={FAQS}
        />
        <RelatedServices path="/services/auto-locksmith/key-programming" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
