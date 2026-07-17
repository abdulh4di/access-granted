import styles from "./BlogHero.module.css";

// Faded partner-brand strip. Figma reuses 4 exported sprites across 8 slots with
// per-slot crop transforms — ported verbatim so the framing matches the design.
type Crop = { top: string; left: string; width: string; height: string };
const LOGOS: {
  w: number;
  h: number;
  src: string;
  alt: string;
  cover?: boolean;
  contain?: boolean;
  flipY?: boolean;
  img?: Crop;
}[] = [
  { w: 3.125, h: 3.125, src: "ag-partner-vw.png", alt: "Volkswagen", cover: true },
  {
    w: 3.125,
    h: 3.25,
    src: "ag-partner-merc-skoda.png",
    alt: "Mercedes-Benz",
    img: { top: "-85.99%", left: "0%", width: "262%", height: "274.74%" },
  },
  {
    w: 3.75,
    h: 1.875,
    src: "ag-partner-ford.png",
    alt: "Ford",
    img: { top: "-103.06%", left: "-13.95%", width: "120.93%", height: "311.39%" },
  },
  {
    w: 3.125,
    h: 3.125,
    src: "ag-partner-merc-skoda.png",
    alt: "Škoda",
    img: { top: "-85.99%", left: "-113.18%", width: "238.18%", height: "274.74%" },
  },
  {
    w: 3.125,
    h: 3.0625,
    src: "ag-partner-audi-bmw.png",
    alt: "BMW",
    img: { top: "-112.38%", left: "-176.08%", width: "281.34%", height: "324.76%" },
  },
  {
    w: 4.5,
    h: 1.75,
    src: "ag-partner-audi-bmw.png",
    alt: "Audi",
    img: { top: "-219%", left: "-2%", width: "162%", height: "474%" },
  },
  { w: 3.25, h: 3.25, src: "ag-partner-volvo.svg", alt: "Volvo", contain: true },
];

interface BlogHeroProps {
  tag?: string;
  title?: string;
  description?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

export default function BlogHero({
  tag = "Auto Locksmith",
  title = "Lost Car Keys Newcastle",
  description = (
    <>
      Lost your only car key? Don&rsquo;t panic. Even if you don&rsquo;t have a
      spare, we can create a new key, program it to your vehicle, and get you
      back on the road quickly.
    </>
  ),
  image = "/assets/images/lost-keys-hero.png",
  imageAlt = "Auto locksmith handing over a freshly cut car key",
}: BlogHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <article className={styles.card}>
          <div className={styles.media}>
            <img src={image} alt={imageAlt} width={550} height={400} />
          </div>

          <div className={styles.content}>
            <div className={styles.details}>
              <span className="eyebrow">{tag}</span>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{description}</p>
            </div>

            <div className={styles.actions}>
              <a
                href="https://wa.me/447777474195"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.help}`}
              >
                Get Help Now
              </a>
              <a href="tel:+447777474195" className={`btn ${styles.call}`}>
                Call Now
              </a>
            </div>
          </div>
        </article>

        <div
          className={styles.logos}
          role="img"
          aria-label="Vehicle manufacturers we work with"
        >
          {/* 4 copies → seamless infinite marquee that stays full at the -25%
              loop point regardless of container width (see .logoTrack) */}
          <div className={styles.logoTrack}>
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className={styles.logoSlot}
                style={{ width: `${logo.w}em`, height: `${logo.h}em` }}
              >
                <img
                  src={`/assets/images/${logo.src}`}
                  alt=""
                  aria-hidden="true"
                  className={
                    logo.cover
                      ? styles.logoCover
                      : logo.contain
                        ? styles.logoContain
                        : styles.logoCrop
                  }
                  style={
                    logo.img
                      ? {
                          top: logo.img.top,
                          left: logo.img.left,
                          width: logo.img.width,
                          height: logo.img.height,
                          transform: logo.flipY ? "scaleY(-1)" : undefined,
                        }
                      : undefined
                  }
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
