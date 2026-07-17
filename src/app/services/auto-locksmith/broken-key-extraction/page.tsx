import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Broken Key Extraction Newcastle | Access Granted Northeast",
  description:
    "Snapped your key in the door, boot or ignition? Our mobile auto locksmith carefully removes the broken piece and cuts a fresh key across Newcastle & the North East.",
  alternates: { canonical: "/services/auto-locksmith/broken-key-extraction" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith/broken-key-extraction",
    siteName: "Access Granted Northeast",
    title: "Broken Key Extraction Newcastle",
    description:
      "Careful broken-key removal and a fresh key cut on-site across Newcastle & the North East — door, boot or ignition.",
  },
};

const STEPS = [
  {
    title: "Careful Removal",
    desc: "We extract the broken key without damaging the lock or barrel.",
  },
  {
    title: "Lock Checked",
    desc: "We make sure the barrel still turns freely and works as it should.",
  },
  {
    title: "New Key Cut",
    desc: "A replacement key cut and coded so you can get back on the road.",
  },
];

const BENEFITS = [
  {
    label: "No Lock Damage",
    heading: "No Lock Damage",
    sub: "Careful Extraction",
    desc: "We remove the broken piece using specialist tools without harming the lock or barrel.",
    icon: "shield" as const,
  },
  {
    label: "Any Lock",
    heading: "Any Lock",
    sub: "Door, Boot or Ignition",
    desc: "We extract keys snapped in any lock on the vehicle, wherever the break happened.",
    icon: "search" as const,
  },
  {
    label: "Replacement Cut",
    heading: "Replacement Cut",
    sub: "Fresh Key On-Site",
    desc: "We cut and program a new key there and then, so you’re not left stranded.",
    icon: "key" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "Home, work or roadside — we bring the extraction service to your location.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "Can you get my snapped key out without damaging the lock?",
    a: "Yes. We use specialist extraction tools to remove the broken piece without harming the lock, barrel or surrounding trim in the vast majority of cases.",
  },
  {
    q: "My key broke in the ignition — can you help?",
    a: "Yes. We regularly extract keys snapped in the ignition, as well as door and boot locks, and can cut you a replacement.",
  },
  {
    q: "Can you cut a new key after extraction?",
    a: "Yes. Once the broken piece is removed we can cut and program a fresh key to your vehicle on-site.",
  },
  {
    q: "How long does it take?",
    a: "Most broken-key jobs take around 20 to 45 minutes, depending on the lock and your vehicle.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function BrokenKeyExtractionPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          title="Broken Key Extraction"
          image="/assets/images/service-broken-key-extraction.png"
          imageAlt="Auto locksmith extracting a broken car key"
          description={
            <>
              Snapped your key in the door, boot or ignition? We carefully remove
              the broken piece and can cut you a fresh key on-site, so
              you&rsquo;re back on the road without a costly tow.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Broken Keys"
          subhead="Remove the break, check the lock, cut a new key"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Snapped a Key? We&rsquo;ll Sort It</>}
          subhead={
            <>
              We remove the broken piece without damaging your lock and cut a
              replacement key on-site, so a snapped key doesn&rsquo;t leave you
              stranded.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about broken key extraction — lock safety, replacements and timings."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
