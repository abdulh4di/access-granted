import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Household Key Cutting Newcastle | Access Granted Northeast",
  description:
    "Mobile household key cutting across Newcastle & the North East — accurate spare and replacement house keys cut on-site for family, tenants and lodgers.",
  alternates: {
    canonical: "/services/residential-locksmith/household-key-cutting",
  },
  openGraph: {
    type: "website",
    url: "/services/residential-locksmith/household-key-cutting",
    siteName: "Access Granted Northeast",
    title: "Household Key Cutting Newcastle",
    description:
      "Accurate spare and replacement house keys cut on-site across Newcastle & the North East.",
  },
};

const STEPS = [
  {
    title: "Match Your Key",
    desc: "We identify your key type and blank so the copy fits your lock exactly.",
  },
  {
    title: "Cut On-Site",
    desc: "We cut accurate spare or replacement keys there and then at your home.",
  },
  {
    title: "Test in the Lock",
    desc: "We check every key turns smoothly in your lock before we hand them over.",
  },
];

const BENEFITS = [
  {
    label: "Accurate Copies",
    heading: "Accurate Copies",
    sub: "Cut to Fit First Time",
    desc: "Precisely cut keys that turn smoothly, so you avoid the sticking copies high-street machines produce.",
    icon: "key" as const,
  },
  {
    label: "Spares for All",
    heading: "Spares for All",
    sub: "Family, Tenants & Lodgers",
    desc: "Cut as many spares as you need for everyone who should have access to your home.",
    icon: "chip" as const,
  },
  {
    label: "Most Key Types",
    heading: "Most Key Types",
    sub: "Standard & Security Keys",
    desc: "We cut standard household keys and many security and dimple key types.",
    icon: "gear" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "No trip to the shops — we cut your keys at your home across the region.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "Can you cut house keys at my home?",
    a: "Yes. Our key cutting is fully mobile — we cut accurate spare and replacement house keys on-site at your home.",
  },
  {
    q: "Why are your keys better than a high-street copy?",
    a: "We cut precisely to your original and test each key in your lock, avoiding the sticking or non-working copies that fast machines sometimes produce.",
  },
  {
    q: "Can you cut security or dimple keys?",
    a: "We cut standard household keys and many security and dimple key types. Send us a photo of your key and we’ll confirm.",
  },
  {
    q: "How many spares can I have cut?",
    a: "As many as you need — a common choice for families, tenants, lodgers or keeping a safe spare with someone you trust.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function HouseholdKeyCuttingPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Residential Locksmith"
          title="Household Key Cutting"
          image="/assets/images/keycutting.jpg"
          imageAlt="Locksmith cutting a household key"
          description={
            <>
              Need spare house keys? We cut accurate spare and replacement keys
              on-site for family, tenants or lodgers — tested in your lock so they
              work first time, with no trip to the shops.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Key Cutting"
          subhead="Match, cut, and test"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Spare Keys, Cut at Your Door</>}
          subhead={
            <>
              We cut precise household keys on-site and test them in your lock, so
              every copy works smoothly first time.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about household key cutting — key types, spares and what to expect."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
