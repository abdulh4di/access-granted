import styles from "./Services.module.css";

interface Service {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  overlay?: boolean;
  icon:
    | { type: "img"; src: string; w: number; h: number }
    | { type: "scan" };
}

const SERVICES: Service[] = [
  {
    title: "Auto Locksmith Services",
    subtitle:
      "Vehicle lockouts, lost car keys, car key replacement, spare keys, key coding, remote programming and keyless entry support",
    image: "/assets/images/ag-service-locksmith.jpg",
    imageAlt: "Auto locksmith working on a car key",
    imageLeft: false,
    icon: { type: "img", src: "/assets/images/ag-icon-locksmith.svg", w: 52, h: 52 },
  },
  {
    title: "Vehicle Coding & Diagnostics",
    subtitle:
      "Advanced vehicle diagnostics, fault code reading, ECU coding, module programming and electronic fault finding.",
    image: "/assets/images/ag-service-coding.png",
    imageAlt: "Vehicle diagnostics equipment",
    imageLeft: true,
    icon: { type: "scan" },
  },
  {
    title: "Ghost Immobiliser Installation",
    subtitle:
      "Ghost Immobiliser installation designed to protect your vehicle against key cloning, relay theft and unauthorised use.",
    image: "/assets/images/ag-service-immobiliser.png",
    imageAlt: "Ghost immobiliser installation",
    imageLeft: false,
    icon: { type: "img", src: "/assets/images/ag-icon-immobiliser.svg", w: 54, h: 56 },
  },
  {
    title: "Residential Locksmith Services",
    subtitle:
      "Household lock repairs, lock replacements, key cutting and emergency home lockout assistance.",
    image: "/assets/images/ag-service-residential.png",
    imageAlt: "Residential locksmith repairing a door lock",
    imageLeft: true,
    overlay: true,
    icon: { type: "img", src: "/assets/images/ag-icon-residential.svg", w: 52, h: 54 },
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">Services</span>
          <h2 className={styles.headline}>
            Auto Locksmith, Coding &amp;{" "}
            <br />
            Diagnostic Services
          </h2>
          <p className={styles.subhead}>
            Supporting drivers and homeowners across Newcastle and the North East with fast,
            practical help for lockouts, lost keys, vehicle faults and access issues.
          </p>
        </header>

        <div className={styles.rows}>
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`${styles.row} ${s.imageLeft ? styles.imageLeftRow : ""}`}
            >
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  {s.icon.type === "scan" ? (
                    <span className={styles.scanBox}>
                      <img
                        src="/assets/images/ag-icon-scanline.svg"
                        alt=""
                        width={24}
                        height={24}
                        aria-hidden="true"
                      />
                    </span>
                  ) : (
                    <img
                      src={s.icon.src}
                      alt=""
                      width={s.icon.w}
                      height={s.icon.h}
                      aria-hidden="true"
                      className={styles.icon}
                    />
                  )}
                </div>
                <div className={styles.text}>
                  <h3 className={styles.title}>{s.title}</h3>
                  <p className={styles.subtitle}>{s.subtitle}</p>
                </div>
              </article>

              <div className={`${styles.imageTile} ${s.overlay ? styles.overlay : ""}`}>
                <img src={s.image} alt={s.imageAlt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
