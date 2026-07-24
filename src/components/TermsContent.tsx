import styles from "./TermsContent.module.css";
import SectionReveal from "./SectionReveal";

interface TermsSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

const SECTIONS: TermsSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <>
        <p>
          These Terms &amp; Conditions govern the locksmith, vehicle coding,
          diagnostics and related services provided by Access Granted Northeast
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) across Newcastle
          and the North East. By requesting or accepting our services you agree to
          be bound by these terms.
        </p>
        <p>
          Please read them carefully. If you do not agree with any part of these
          terms, you should not book or accept our services.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "2. Our Services",
    body: (
      <>
        <p>
          We provide mobile auto and residential locksmith services, including
          vehicle entry, lost car keys, spare keys, key programming, ignition
          repairs, vehicle coding and diagnostics, mileage correction, Ghost
          immobiliser installation and emergency lockout assistance.
        </p>
        <p>
          All work is carried out with reasonable care and skill. The scope of any
          particular job will be confirmed with you before work begins, either
          verbally or in writing.
        </p>
      </>
    ),
  },
  {
    id: "bookings",
    title: "3. Bookings & Call-Outs",
    body: (
      <>
        <p>
          Bookings can be made by phone, WhatsApp or through our website. For
          emergency call-outs we will provide an estimated arrival time, though
          this may vary due to traffic, weather or workload.
        </p>
        <p>
          A call-out does not guarantee that a repair or entry can be completed on
          the first visit. Some jobs may require additional parts, tools or a
          return visit.
        </p>
      </>
    ),
  },
  {
    id: "identification",
    title: "4. Proof of Ownership & Identification",
    body: (
      <>
        <p>
          For your security and ours, we may ask for proof of ownership of the
          vehicle or property and proof of your identity before carrying out any
          work. This may include vehicle documents, photo ID or proof of address.
        </p>
        <p>
          We reserve the right to refuse service where ownership or authorisation
          cannot be reasonably established.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    title: "5. Pricing & Payment",
    body: (
      <>
        <p>
          Prices are based on the type of work required, parts used and the time
          of the call-out. Where possible we will provide a quote or estimate
          before work begins. Estimates are given in good faith and may change if
          the job differs from what was initially described.
        </p>
        <p>
          Payment is due on completion of the work unless otherwise agreed in
          writing. We accept the payment methods advertised at the time of
          booking.
        </p>
      </>
    ),
  },
  {
    id: "cancellations",
    title: "6. Cancellations",
    body: (
      <p>
        If you need to cancel a booking, please let us know as soon as possible. A
        cancellation fee may apply where a technician has already been dispatched
        or has arrived on site, to cover travel and time.
      </p>
    ),
  },
  {
    id: "guarantee",
    title: "7. Workmanship & Guarantees",
    body: (
      <>
        <p>
          We stand behind the quality of our work. Where a fault arises from our
          workmanship within a reasonable period after completion, we will put it
          right at no additional labour cost.
        </p>
        <p>
          Guarantees do not cover faults caused by misuse, further damage, wear and
          tear, or work carried out by a third party after our visit.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "8. Liability",
    body: (
      <>
        <p>
          Locksmithing and vehicle access work occasionally requires invasive
          methods. Where a lock, cylinder or component must be drilled or replaced
          to gain entry, this will be explained to you beforehand wherever
          possible.
        </p>
        <p>
          We will not be liable for any pre-existing damage, faults or wear, nor
          for indirect or consequential losses. Nothing in these terms limits our
          liability where it would be unlawful to do so, including for death or
          personal injury caused by negligence.
        </p>
      </>
    ),
  },
  {
    id: "customer",
    title: "9. Your Responsibilities",
    body: (
      <p>
        You are responsible for providing safe and reasonable access to the
        vehicle or property, and for giving us accurate information about the job.
        Please ensure that any pets, hazards or access restrictions are made known
        to us in advance.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "10. Privacy",
    body: (
      <p>
        Any personal information you provide is used solely to deliver our services
        and communicate with you. We do not sell your data. Details you share with
        us are handled in line with applicable UK data protection law.
      </p>
    ),
  },
  {
    id: "law",
    title: "11. Governing Law",
    body: (
      <p>
        These Terms &amp; Conditions are governed by the laws of England and Wales,
        and any disputes will be subject to the exclusive jurisdiction of the
        courts of England and Wales.
      </p>
    ),
  },
  {
    id: "contact",
    title: "12. Contact Us",
    body: (
      <p>
        If you have any questions about these terms, please contact us on{" "}
        <a href="tel:+447777474195" className={styles.inlineLink}>
          07777 474195
        </a>{" "}
        or by email at{" "}
        <a
          href="mailto:help@accessgrantednortheast.co.uk"
          className={styles.inlineLink}
        >
          help@accessgrantednortheast.co.uk
        </a>
        .
      </p>
    ),
  },
];

export default function TermsContent() {
  return (
    <section className={styles.terms}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.updated}>Last updated: 19 July 2026</p>

        <div className={styles.body}>
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id} className={styles.block} data-reveal-block>
              <h2 className={styles.blockTitle}>{s.title}</h2>
              <div className={styles.prose}>{s.body}</div>
            </div>
          ))}
        </div>
      </div>

      <SectionReveal />
    </section>
  );
}
