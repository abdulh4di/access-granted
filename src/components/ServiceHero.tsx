import styles from "./ServiceHero.module.css";
import SectionReveal from "./SectionReveal";

type TrustCard = {
  value: string;
  label: string;
  tone: "blue" | "grey" | "dark" | "light";
};

const DEFAULT_TRUST: TrustCard[] = [
  { value: "24/7", label: "Emergency Call-Out Service", tone: "blue" },
  { value: "Fast", label: "Response to Urgent Lockouts", tone: "grey" },
  { value: "100%", label: "Mobile Service Across the North East", tone: "dark" },
  { value: "Access", label: "Vehicle & Residential Services", tone: "light" },
];

interface ServiceHeroProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  trust?: TrustCard[];
  /** hide the row of trust cards */
  showTrust?: boolean;
}

export default function ServiceHero({
  eyebrow = "Auto Locksmith Services",
  title = (
    <>
      Auto Locksmith
      <br />
      Newcastle &amp; the
      <br />
      North East
    </>
  ),
  description = (
    <>
      Access Granted Northeast provides mobile locksmith services across the
      North East, including lost car keys, vehicle lockouts, spare keys, key
      programming and ignition repairs.
    </>
  ),
  trust = DEFAULT_TRUST,
  showTrust = true,
}: ServiceHeroProps) {
  const TRUST = trust;
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <span className="eyebrow">{eyebrow}</span>

          <div className={styles.header}>
            <h1 className={styles.heading} data-reveal-heading>{title}</h1>
            <div className={styles.headerRight} data-reveal-sub>
              <p className={styles.desc}>{description}</p>
              <a
                href="https://wa.me/447777474195"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.cta}`}
              >
                Get In Touch
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {showTrust && (
          <ul className={styles.cards}>
            {TRUST.map((c) => (
              <li key={c.label} className={styles.card} data-reveal-block>
                <div className={`${styles.cardContent} ${styles[c.tone]}`}>
                  <div className={styles.cardInner}>
                    <span className={styles.cardValue}>{c.value}</span>
                    <span className={styles.cardLabel}>{c.label}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <SectionReveal mode="load" />
    </section>
  );
}
