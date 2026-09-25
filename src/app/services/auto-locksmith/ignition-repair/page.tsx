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
  title: "Car Ignition Repair Newcastle upon Tyne | Access Granted",
  description:
    "Key won't turn or ignition jammed? We repair or replace faulty ignition barrels on-site across Newcastle & the North East. Free call-out, call 07777 474195.",
  alternates: { canonical: "/services/auto-locksmith/ignition-repair" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith/ignition-repair",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Car Ignition Repair Newcastle upon Tyne",
    description:
      "Key won't turn or ignition jammed? We repair or replace faulty ignition barrels on-site across Newcastle & the North East. Free call-out, call 07777 474195.",
  },
};

const STEPS = [
  {
    title: "Fault Diagnosis",
    desc: "We identify whether the problem is the key, the barrel or the lock.",
  },
  {
    title: "Repair or Replace",
    desc: "We repair the fault or fit a new ignition barrel on-site.",
  },
  {
    title: "Keys Matched",
    desc: "We make sure your key works smoothly with the repaired ignition.",
  },
];

const BENEFITS = [
  {
    label: "Expert Diagnosis",
    heading: "Expert Diagnosis",
    sub: "Find the Real Fault",
    desc: "We pinpoint whether it’s your key, the barrel or the lock before any work begins.",
    icon: "search" as const,
  },
  {
    label: "On-Site Repair",
    heading: "On-Site Repair",
    sub: "Fixed at Your Location",
    desc: "Most ignition faults are repaired where you are, with no need for a garage visit.",
    icon: "wrench" as const,
  },
  {
    label: "Barrel Replacement",
    heading: "Barrel Replacement",
    sub: "New Barrel Fitted",
    desc: "We replace worn or jammed ignition barrels and match them to your existing key.",
    icon: "key" as const,
  },
  {
    label: "All Makes",
    heading: "All Makes",
    sub: "Modern & Older Cars",
    desc: "Ignition work across a wide range of makes and models, old and new.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "My key won’t turn in the ignition — can you fix it?",
    a: "Yes. A key that won’t turn is often caused by a worn ignition barrel or a worn key. We diagnose the cause and repair or replace as needed.",
  },
  {
    q: "Do I need a new key as well?",
    a: "Sometimes. If the barrel is replaced we make sure your key is matched to it, and can cut a new key where required.",
  },
  {
    q: "Can you do this at my home?",
    a: "Yes. Our service is fully mobile, so most ignition repairs are carried out at your home, work or wherever your vehicle is.",
  },
  {
    q: "How long does ignition repair take?",
    a: "It varies with the fault and vehicle, but many ignition repairs are completed in under an hour.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function IgnitionRepairPage() {
  return (
    <>
      <span id="top" />
      <JsonLd
        data={[
          serviceJsonLd(
            "/services/auto-locksmith/ignition-repair",
            "Ignition Repair Newcastle upon Tyne",
            String(metadata.description),
          ),
          breadcrumbJsonLd("/services/auto-locksmith/ignition-repair", "Ignition Repair Newcastle upon Tyne"),
        ]}
      />
      <Navbar />
      <header>
        <BlogHero
          title="Ignition Repair Newcastle"
          image="/assets/images/service-ignition-repair.webp"
          imageAlt="Auto locksmith repairing a car ignition"
          description={
            <>
              Key won&rsquo;t turn, sticking, or ignition jammed? We diagnose and
              repair or replace faulty ignition barrels on-site, so your car
              starts reliably again.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="How Do We Repair a Car Ignition?"
          subhead="Diagnose, repair or replace, and match your key"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Ignition Trouble? We&rsquo;ll Fix It</>}
          subhead={
            <>
              We get to the bottom of ignition faults and repair or replace the
              barrel on-site, so you can start your car with confidence again.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about ignition repair — faults we fix, keys and timings."
          items={FAQS}
        />
        <RelatedServices path="/services/auto-locksmith/ignition-repair" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
