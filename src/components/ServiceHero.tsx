import styles from "./ServiceHero.module.css";

const TRUST = [
  { value: "24/7", label: "Emergency Call-Out Service", tone: "blue" },
  { value: "Fast", label: "Response to Urgent Lockouts", tone: "grey" },
  { value: "100%", label: "Mobile Service Across the North East", tone: "dark" },
  { value: "Access", label: "Vehicle & Residential Services", tone: "light" },
] as const;

export default function ServiceHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Auto Locksmith Services</span>

        <div className={styles.header}>
          <h1 className={styles.heading}>
            Auto Locksmith Newcastle &amp; the
            <br />
            North East
          </h1>
          <div className={styles.headerRight}>
            <p className={styles.desc}>
              Access Granted Northeast provides mobile locksmith services across
              the North East, including lost car keys, vehicle lockouts, spare
              keys, key programming and ignition repairs.
            </p>
            <a
              href="tel:+447777474195"
              className={`btn btn-primary ${styles.cta}`}
            >
              Call Now
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

        <ul className={styles.cards}>
          {TRUST.map((c) => (
            <li key={c.label} className={styles.card}>
              <div className={`${styles.cardContent} ${styles[c.tone]}`}>
                <div className={styles.cardInner}>
                  <span className={styles.cardValue}>{c.value}</span>
                  <span className={styles.cardLabel}>{c.label}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
