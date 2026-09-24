import Link from "next/link";
import ServiceCards from "./ServiceCards";
import { RELATED, hubOf } from "@/lib/related";
import { SERVICES } from "@/lib/services";

/**
 * "You may also need" cards at the foot of a service page. They give every
 * service page real, descriptive links into its neighbours — the page-content
 * links search engines weigh most, unlike the navbar/footer that repeat on
 * every page.
 */
export default function RelatedServices({ path }: { path: string }) {
  const targets = RELATED[path];
  if (!targets) return null;

  const hub = hubOf(path);
  const services = targets.map((href) => ({ href, ...SERVICES[href] }));

  return (
    <ServiceCards
      id="related-services"
      eyebrow="Related Services"
      heading={hub ? "You May Also Need" : "Explore Our Other Services"}
      subhead={
        hub ? (
          <>
            More ways we can help across Newcastle &amp; the North East. Or
            see all of our{" "}
            <Link href={hub}>
              {SERVICES[hub].title}
            </Link>
            .
          </>
        ) : (
          <>
            Browse more of our locksmith, vehicle coding and diagnostic
            services across Newcastle &amp; the North East.
          </>
        )
      }
      services={services}
    />
  );
}
