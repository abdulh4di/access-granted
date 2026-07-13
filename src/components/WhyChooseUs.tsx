import styles from "./WhyChooseUs.module.css";

const TAGS = [
  "Protection",
  "Reliability",
  "Specialist",
  "Fast Response",
  "Solutions",
  "Professional",
  "Quick Support",
  "Speed",
  "Security",
  "Dependable",
  "Efficiency",
];

export default function WhyChooseUs() {
  return (
    <section className={styles.choose} id="why-choose-us">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">Why Choose Us</span>
          <h2 className={styles.heading}>
            Why drivers and homeowners
            <br />
            choose Access Granted
          </h2>
          <p className={styles.desc}>
            We take the stress out of lockouts, lost keys and vehicle faults with clear advice,
            reliable support and a professional service from start to finish.
          </p>
        </header>

        <div className={styles.features}>
          <div className={styles.row}>
            <article className={`${styles.card} ${styles.cardTags}`}>
              <div className={styles.tags}>
                {TAGS.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.est}>
                <p className={styles.estLabel}>EST SINCE</p>
                <p className={styles.estValue}>2025</p>
              </div>
              <span className={`${styles.fade} ${styles.fadeLeft}`} aria-hidden="true" />
              <span className={`${styles.fade} ${styles.fadeRight}`} aria-hidden="true" />
            </article>

            <article className={`${styles.card} ${styles.cardBlue}`}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Commitment to customer care</p>
                <p className={styles.metricValue}>100%</p>
              </div>
              <p className={styles.metricNote}>
                Clear communication, careful workmanship and dependable results.
              </p>
            </article>
          </div>

          <div className={styles.row}>
            <article className={`${styles.card} ${styles.cardWhite}`}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Emergency Support</p>
                <p className={styles.metricValue}>24/7</p>
              </div>
              <p className={styles.metricNoteDark}>
                Available whenever urgent keys, locks or access support is required.
              </p>
            </article>

            <article className={`${styles.card} ${styles.cardImage}`}>
              <img
                src="/assets/images/ag-feature-jobs.png"
                alt=""
                aria-hidden="true"
                className={styles.cardImageBg}
                loading="lazy"
              />
              <div className={styles.imageContent}>
                <p className={styles.imageValue}>200+</p>
                <p className={styles.imageNote}>
                  Vehicle and residential jobs handled across the North East.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
