import styles from "./WhyChooseUs.module.css";
import WhyChooseUsReveal from "./WhyChooseUsReveal";

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
        <header className={styles.head} data-why-head>
          <span className="eyebrow" data-why-eyebrow>
            Why Choose Us
          </span>
          <h2 className={styles.heading} data-why-heading>
            Why drivers and homeowners
            <br />
            choose Access Granted
          </h2>
          <p className={styles.desc} data-why-desc>
            We take the stress out of lockouts, lost keys and vehicle faults with clear advice,
            reliable support and a professional service from start to finish.
          </p>
        </header>

        <div className={styles.features}>
          <div className={styles.row} data-why-row>
            <article className={`${styles.card} ${styles.cardTags}`} data-why-card>
              <div className={styles.tags}>
                {TAGS.map((t) => (
                  <span key={t} className={styles.tag} data-why-tag>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.est}>
                <p className={styles.estLabel}>EST SINCE</p>
                <p className={styles.estValue} data-why-count>2025</p>
              </div>
              <span className={`${styles.fade} ${styles.fadeLeft}`} aria-hidden="true" />
              <span className={`${styles.fade} ${styles.fadeRight}`} aria-hidden="true" />
            </article>

            <article className={`${styles.card} ${styles.cardBlue}`} data-why-card>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Commitment to customer care</p>
                <p className={styles.metricValue} data-why-count>100%</p>
              </div>
              <p className={styles.metricNote}>
                Clear communication, careful workmanship and dependable results.
              </p>
            </article>
          </div>

          <div className={styles.row} data-why-row>
            <article className={`${styles.card} ${styles.cardWhite}`} data-why-card>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Emergency Support</p>
                <p className={styles.metricValue} data-why-count>24/7</p>
              </div>
              <p className={styles.metricNoteDark}>
                Available whenever urgent keys, locks or access support is required.
              </p>
            </article>

            <article className={`${styles.card} ${styles.cardImage}`} data-why-card>
              <img
                src="/assets/images/ag-feature-jobs.png"
                alt=""
                aria-hidden="true"
                className={styles.cardImageBg}
                loading="lazy"
              />
              <div className={styles.imageContent}>
                <p className={styles.imageValue} data-why-count>200+</p>
                <p className={styles.imageNote}>
                  Vehicle and residential jobs handled across the North East.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <WhyChooseUsReveal />
    </section>
  );
}
