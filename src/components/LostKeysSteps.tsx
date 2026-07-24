import styles from "./LostKeysSteps.module.css";
import SectionReveal from "./SectionReveal";

type Step = { title: string; desc: string };

const DEFAULT_STEPS: Step[] = [
  {
    title: "New Key Cut",
    desc: "A new replacement car key cut precisely for your vehicle.",
  },
  {
    title: "Programmed On-Site",
    desc: "Your new car key is programmed and tested at your location.",
  },
  {
    title: "Lost key disabled",
    desc: "The lost key is removed from your vehicle’s system for security.",
  },
];

interface LostKeysStepsProps {
  eyebrow?: string;
  heading?: string;
  subhead?: string;
  steps?: Step[];
}

export default function LostKeysSteps({
  eyebrow = "Steps",
  heading = "What We Do For Lost Keys",
  subhead = "Cut, program, and secure your car",
  steps = DEFAULT_STEPS,
}: LostKeysStepsProps) {
  const STEPS = steps;
  return (
    // Sits directly under a short hero, so it reveals on a small fixed scroll
    // rather than waiting to climb the viewport — by the time the default
    // percentage line was crossed it had been sat on screen for a while.
    <section className={styles.steps} data-reveal-early>
      <div className={`container ${styles.inner}`}>
        <header className={styles.head} data-reveal-head>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.heading} data-reveal-heading>{heading}</h2>
          <p className={styles.subhead} data-reveal-sub>{subhead}</p>
        </header>

        <ol className={styles.grid}>
          {STEPS.map((step, i) => (
            <li key={step.title} className={styles.step} data-reveal-block>
              <div className={styles.markerRow}>
                <span
                  className={`${styles.line} ${i === 0 ? styles.lineFadeStart : ""}`}
                  aria-hidden="true"
                />
                <span className={styles.badgeRing}>
                  <span className={styles.badge}>{i + 1}</span>
                </span>
                <span
                  className={`${styles.line} ${
                    i === STEPS.length - 1 ? styles.lineFadeEnd : ""
                  }`}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.text}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <SectionReveal />
    </section>
  );
}
