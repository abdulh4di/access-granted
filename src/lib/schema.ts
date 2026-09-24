import { AREAS } from "@/lib/areas";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

// Everything below is published on the site already (contact page, footer,
// areas section, testimonials button) — structured data must only describe
// what a visitor can see.
const BUSINESS_ID = `${SITE_URL}/#business`;
const NAME = "Access Granted Northeast";
const PHONE = "+447777474195";
const EMAIL = "help@accessgrantednortheast.co.uk";

const SAME_AS = [
  "https://www.facebook.com/AccessGrantedNortheast/",
  "https://www.instagram.com/accessgranted_northeast/",
  "https://www.tiktok.com/@accsessgranted_northeast",
  "https://www.google.com/maps?cid=7525167148975767354",
];

/** Full business entity — homepage and contact page. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "AutomotiveBusiness"],
    "@id": BUSINESS_ID,
    name: NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/ag-logo-northeast.png`,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    description:
      "Mobile auto and home locksmith covering Newcastle and the North East: lost car keys, vehicle lockouts, key programming, vehicle coding and diagnostics, Ghost immobiliser installation and residential locksmith services. 24/7 call-outs.",
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Beacon, Westgate Road",
      addressLocality: "Newcastle upon Tyne",
      postalCode: "NE4 9PN",
      addressCountry: "GB",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: AREAS.map((name) => ({ "@type": "City", name })),
    sameAs: SAME_AS,
  };
}

const HUBS: Record<string, string> = {
  "/services/auto-locksmith": "Auto Locksmith",
  "/services/residential-locksmith": "Residential Locksmith",
  "/services/vehicle-coding-diagnostics": "Vehicle Coding & Diagnostics",
};

/** Home > (service hub) > page. There is no /services index page, so none is claimed. */
export function breadcrumbJsonLd(path: string, name: string) {
  const trail = [{ name: "Home", url: SITE_URL }];
  const hub = Object.keys(HUBS).find((h) => path.startsWith(`${h}/`));
  if (hub) trail.push({ name: HUBS[hub], url: `${SITE_URL}${hub}` });
  trail.push({ name, url: `${SITE_URL}${path}` });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** A service page. The provider is inlined because @id references don't resolve across pages. */
export function serviceJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": ["Locksmith", "AutomotiveBusiness"],
      "@id": BUSINESS_ID,
      name: NAME,
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: { "@type": "AdministrativeArea", name: "North East England" },
  };
}

/** Q&A that is on the page (the FAQ accordion renders every answer in the DOM). */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
