import Link from "next/link";
import styles from "./FormSent.module.css";
import SectionReveal from "./SectionReveal";

const STEPS = [
  {
    title: "Enquiry received",

    desc: "Thanks for getting in touch. Your enquiry has been sent successfully and is now with our team.",
  },
  {
    title: "We read it",

    desc: "Enquiries are picked up throughout the day, including evenings and weekends.",
  },
  {
    title: "We reply",

    desc: "You'll normally hear back the same day with next steps or a quote.",
  },
];

export default function FormSent() {
  return (
    <section className={styles.sent} aria-label="Enquiry sent">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card} data-reveal-zoom-out>
          <span className={styles.tick} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5 13 4.5 4.5L19 7"
              />
            </svg>
          </span>

          <h1 className={styles.heading} data-reveal-heading>
            Thanks, we’ve received your enquiry
          </h1>

          <p className={styles.desc} data-reveal-sub>
            We’ve got everything we need and will review your enquiry shortly. We’ll be in touch
            with the next steps or a quote as soon as possible.
          </p>

          <ol className={styles.steps} data-reveal-block>
            {STEPS.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <h2 className={styles.stepTitle}>{s.title}</h2>
                <p className={styles.stepDesc}>{s.desc}</p>
              </li>
            ))}
          </ol>

          <div className={styles.actions} data-reveal-block>
            <a href="tel:+447777474195" className="btn btn-primary">
              Call Now
            </a>
            <Link href="/" className="btn btn-light">
              Back to home
            </Link>
          </div>

          <p className={styles.urgent} data-reveal-block>
            Locked out right now? Calling is always fastest — 24/7.
          </p>
        </div>
      </div>

      <SectionReveal mode="load" />
    </section>
  );
}
