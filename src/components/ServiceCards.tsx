import styles from "./ServiceCards.module.css";

const SERVICES = [
  {
    title: "Lost Car Keys",
    href: "#",
    image: "/assets/images/service-lost-car-keys.png",
    desc: "Lost your car keys? We provide replacement keys and programming for many vehicle makes and models.",
  },
  {
    title: "Spare Car Keys",
    href: "#",
    image: "/assets/images/service-spare-car-keys.png",
    desc: "Protect against future lockouts with a professionally cut and programmed spare car key.",
  },
  {
    title: "Vehicle Lockouts",
    href: "#",
    image: "/assets/images/service-vehicle-lockouts.png",
    desc: "Fast, non-destructive vehicle entry when your keys are locked inside your car.",
  },
  {
    title: "Key Programming & Smart Keys",
    href: "#",
    image: "/assets/images/service-key-programming.png",
    desc: "Professional key programming, remote coding and smart key solutions for compatible vehicles.",
  },
  {
    title: "Broken Key Extraction",
    href: "#",
    image: "/assets/images/service-broken-key-extraction.png",
    desc: "Safe removal of broken keys from vehicle locks and ignitions without unnecessary damage.",
  },
  {
    title: "Ignition Repair",
    href: "#",
    image: "/assets/images/service-ignition-repair.png",
    desc: "Ignition repair and replacement services for worn, damaged or faulty ignition systems.",
  },
];

export default function ServiceCards() {
  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">Our Services</span>
          <h2 className={styles.heading}>
            Explore Our{" "}
            <br className={styles.tabletBr} />
            Auto Locksmith Services
          </h2>
          <p className={styles.subhead}>
            Browse our range of auto locksmith services, from lost car keys and
            vehicle lockouts to key programming, spare car keys, broken key
            extraction and ignition repairs. Select a service below to learn
            more about how we can help.
          </p>
        </header>

        <ul className={styles.grid}>
          {SERVICES.map((s) => (
            <li key={s.title} className={styles.cell}>
              <a href={s.href} className={styles.card}>
                <span
                  className={styles.image}
                  style={{ backgroundImage: `url(${s.image})` }}
                  role="img"
                  aria-label={s.title}
                />
                <span className={styles.body}>
                  <span className={styles.titleRow}>
                    <span className={styles.title}>{s.title}</span>
                    <span className={styles.arrow} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m-6-6 6 6-6 6"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className={styles.desc}>{s.desc}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
