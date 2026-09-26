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
  title: "Car Key Replacement Newcastle upon Tyne | Access Granted",
  description:
    "Need a replacement car key? We cut and program new keys on-site for all makes across Newcastle upon Tyne & the North East. Free call-out. Call 07777 474195.",
  alternates: { canonical: "/services/auto-locksmith/car-key-replacement" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith/car-key-replacement",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Car Key Replacement Newcastle upon Tyne",
    description:
      "Need a replacement car key? We cut and program new keys on-site for all makes across Newcastle upon Tyne & the North East. Free call-out. Call 07777 474195.",
  },
};

const REPLACEMENT_STEPS = [
  {
    title: "Tell Us Your Vehicle",
    desc: "Give us your make, model, year and location, and we confirm the key you need.",
  },
  {
    title: "Cut & Programmed On-Site",
    desc: "We cut the key and program its chip or remote to your vehicle at your location.",
  },
  {
    title: "Tested Before We Leave",
    desc: "Your new key is tested to lock, unlock and start the car before we finish.",
  },
];

const REPLACEMENT_BENEFITS = [
  {
    label: "All Makes",
    heading: "All Makes",
    sub: "Every Make, Every Key Type",
    desc: "We replace transponder keys, remote flip keys and keyless smart keys for all car makes and models.",
    icon: "car" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "No Dealer Trip Needed",
    desc: "We cut and program the key at your home, work or roadside, so there is no towing and no waiting room.",
    icon: "key" as const,
  },
  {
    label: "Save Money",
    heading: "Save Money",
    sub: "Usually Below Dealer Prices",
    desc: "Our mobile service and specialist equipment usually cost considerably less than a main dealer.",
    icon: "money" as const,
  },
  {
    label: "Any Reason",
    heading: "Any Reason",
    sub: "Lost, Stolen or Broken",
    desc: "Lost your only key, had one stolen, or snapped or worn out a remote? We replace it, with or without a spare.",
    icon: "lock" as const,
  },
];

const REPLACEMENT_FAQS = [
  {
    q: "How much does a car key replacement cost?",
    a: "The price depends on your make, model, year and key type. A basic transponder key costs less than a keyless smart key. Call or message us with your vehicle details for a quote.",
  },
  {
    q: "Can you replace a car key for any make and model?",
    a: "Yes. We replace keys for all car makes and models, including transponder keys, remote flip keys and keyless smart keys.",
  },
  {
    q: "Do I need a spare key to get a replacement?",
    a: "No. Even if you have lost every key, we can create and program a new one on-site.",
  },
  {
    q: "Is it cheaper than going to the main dealer?",
    a: "Usually, yes. Our mobile service and specialist equipment mean we can replace keys for considerably less than a main dealer, and we come to you.",
  },
  {
    q: "How long does a car key replacement take?",
    a: "Most key jobs take around 20 to 60 minutes on-site, depending on your vehicle's make, model and security system.",
  },
  {
    q: "What is the difference between key replacement and key programming?",
    a: "Replacement means supplying and cutting a new key for one you have lost or damaged. Programming pairs the new key's chip or remote with your vehicle. We do both on-site as one job.",
  },
  {
    q: "Which areas do you cover for car key replacement?",
    a: "We cover Newcastle upon Tyne, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function CarKeyReplacementPage() {
  return (
    <>
      <span id="top" />
      <JsonLd
        data={[
          serviceJsonLd(
            "/services/auto-locksmith/car-key-replacement",
            "Car Key Replacement Newcastle upon Tyne",
            String(metadata.description),
          ),
          breadcrumbJsonLd(
            "/services/auto-locksmith/car-key-replacement",
            "Car Key Replacement Newcastle upon Tyne",
          ),
        ]}
      />
      <Navbar />
      <header>
        <BlogHero
          title="Car Key Replacement Newcastle"
          image="/assets/images/ag-service-locksmith.jpg"
          imageAlt="Locksmith handing over a replacement car key"
          description={
            <>
              We replace lost, stolen, broken or worn out car keys for all makes and
              models, cutting and programming the new key at your location. Most
              jobs take around 20 to 60 minutes, and the call-out is free.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="How Does Car Key Replacement Work?"
          subhead="Cut, program and test on-site"
          steps={REPLACEMENT_STEPS}
        />
        <LostKeysBenefits
          eyebrow="Why Us?"
          heading={<>Replacement Keys, Without the Dealer</>}
          subhead={
            <>
              Whatever car you drive, we can replace the key where you are. We
              cover Newcastle upon Tyne and the wider North East, 24/7.
            </>
          }
          steps={REPLACEMENT_BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about replacing a car key: cost, timings and what we can do."
          items={REPLACEMENT_FAQS}
        />
        <RelatedServices path="/services/auto-locksmith/car-key-replacement" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
