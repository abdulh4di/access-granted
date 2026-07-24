import styles from "./About.module.css";
import AboutReveal from "./AboutReveal";

const STATS = [
  { desc: "Customer satisfaction rate, reflecting our service", value: "100%" },
  { desc: "Emergency call out available when required", value: "24/7" },
  { desc: "Vehicle and property access successfully restored", value: "200+" },
  { desc: "Areas covered across Newcastle and the North East", value: "40+" },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <span className="eyebrow" data-about-eyebrow>
            About us
          </span>
          <h2 className={styles.heading} data-about-heading>
            Built on trust, professional service and support you can rely on
          </h2>
        </div>

        <AboutReveal />

        <div className={styles.stats} data-stats>
          <img
            src="/assets/images/ag-stat-union.svg"
            alt=""
            aria-hidden="true"
            className={styles.union}
            data-stat-union
          />
          <ul className={styles.grid}>
            {STATS.map((s) => (
              <li key={s.value} className={styles.stat} data-stat-card>
                <p className={styles.statDesc} data-stat-desc>
                  {s.desc}
                </p>
                <p className={styles.statValue} data-stat-value>
                  {s.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
