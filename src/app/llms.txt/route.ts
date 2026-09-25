import { AREAS } from "@/lib/areas";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

// Built from the same registries the site itself reads (service pages and
// towns served), so this file cannot drift from what the pages say. Only facts
// already published on the site are stated here.
export const dynamic = "force-static";

const GROUPS: { heading: string; prefix: string }[] = [
  { heading: "Auto locksmith services", prefix: "/services/auto-locksmith" },
  { heading: "Home locksmith services", prefix: "/services/residential-locksmith" },
  {
    heading: "Vehicle coding and diagnostics",
    prefix: "/services/vehicle-coding-diagnostics",
  },
];

const OTHER_SERVICES = ["/services/vag-specialist", "/services/ghost-immobiliser"];

function link(path: string) {
  const s = SERVICES[path];
  return `- [${s.title}](${SITE_URL}${path}): ${s.desc}`;
}

export function GET() {
  const grouped = GROUPS.map(({ heading, prefix }) => {
    const paths = Object.keys(SERVICES).filter(
      (p) => p === prefix || p.startsWith(`${prefix}/`)
    );
    return `## ${heading}\n\n${paths.map(link).join("\n")}`;
  });

  const body = `# Access Granted Northeast

> Access Granted Northeast is a mobile auto and home locksmith covering Newcastle upon Tyne and the North East of England, available 24 hours a day, 7 days a week, with a free call-out. It helps with lost car keys, car key replacement, vehicle lockouts, key programming, vehicle coding and diagnostics, and emergency home lockouts. The locksmith comes to the customer.

## Business details

- Name: Access Granted Northeast
- Address: The Beacon, Westgate Road, Newcastle upon Tyne NE4 9PN
- Phone: 07777 474195
- Email: help@accessgrantednortheast.co.uk
- Hours: open 24 hours, 7 days a week
- Call-out: free. The price of the work depends on the job.
- Car makes: keys are replaced and programmed for all makes and models.
- Not to be confused with any other business called "Access Granted Locksmith". This business is Access Granted Northeast, based in Newcastle upon Tyne.

${grouped.join("\n\n")}

## Other specialist services

${OTHER_SERVICES.map(link).join("\n")}

## Areas covered

${AREAS.join(", ")}.

## Other pages

- [Home](${SITE_URL}/): overview of services, customer reviews and common questions.
- [Reviews](${SITE_URL}/reviews): real Google reviews of Access Granted Northeast.
- [Gallery](${SITE_URL}/gallery): photos of recent jobs and equipment.
- [Contact](${SITE_URL}/contact): phone, WhatsApp, email, contact form and map.
- [Terms and conditions](${SITE_URL}/terms)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
