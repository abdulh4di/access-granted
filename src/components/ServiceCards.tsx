import styles from "./ServiceCards.module.css";

type ServiceCard = {
  title: string;
  href: string;
  image: string;
  desc: string;
};

const DEFAULT_SERVICES: ServiceCard[] = [
  {
    title: "Lost Car Keys",
    href: "/services/auto-locksmith/lost-car-keys",
    image: "/assets/images/service-lost-car-keys.png",
    desc: "Lost your car keys? We provide replacement keys and programming for many vehicle makes and models.",
  },
  {
    title: "Spare Car Keys",
    href: "/services/auto-locksmith/spare-keys",
    image: "/assets/images/service-spare-car-keys.png",
    desc: "Protect against future lockouts with a professionally cut and programmed spare car key.",
  },
  {
    title: "Vehicle Lockouts",
    href: "/services/auto-locksmith/vehicle-lockouts",
    image: "/assets/images/service-vehicle-lockouts.png",
    desc: "Fast, non-destructive vehicle entry when your keys are locked inside your car.",
  },
  {
    title: "Key Programming & Smart Keys",
    href: "/services/auto-locksmith/key-programming",
    image: "/assets/images/service-key-programming.png",
    desc: "Professional key programming, remote coding and smart key solutions for compatible vehicles.",
  },
  {
    title: "Broken Key Extraction",
    href: "/services/auto-locksmith/broken-key-extraction",
    image: "/assets/images/service-broken-key-extraction.png",
    desc: "Safe removal of broken keys from vehicle locks and ignitions without unnecessary damage.",
  },
  {
    title: "Ignition Repair",
    href: "/services/auto-locksmith/ignition-repair",
    image: "/assets/images/service-ignition-repair.png",
    desc: "Ignition repair and replacement services for worn, damaged or faulty ignition systems.",
  },
];

interface ServiceCardsProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  subhead?: React.ReactNode;
  services?: ServiceCard[];
}

export default function ServiceCards({
  eyebrow = "Our Services",
  heading = (
    <>
      Explore Our <br className={styles.tabletBr} />
      Auto Locksmith Services
    </>
  ),
  subhead = (
    <>
      Browse our range of auto locksmith services, from lost car keys and
      vehicle lockouts to key programming, spare car keys, broken key extraction
      and ignition repairs. Select a service below to learn more about how we can
      help.
    </>
  ),
  services = DEFAULT_SERVICES,
}: ServiceCardsProps) {
  const SERVICES = services;
  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subhead}>{subhead}</p>
        </header>

        <ul className={styles.grid}>
          {SERVICES.map((s) => (
            <li key={s.title} className={styles.cell}>
              <div className={styles.card}>
                <a
                  href={s.href}
                  className={styles.image}
                  style={{ backgroundImage: `url(${s.image})` }}
                  aria-label={s.title}
                />
                <div className={styles.body}>
                  <div className={styles.titleRow}>
                    <span className={styles.title}>{s.title}</span>
                    <a
                      href={s.href}
                      className={styles.arrow}
                      aria-label={`${s.title} — learn more`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        aria-hidden="true"
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
                  <span className={styles.desc}>{s.desc}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
