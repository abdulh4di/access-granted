import styles from "./Hero.module.css";
import SocialLinks from "./SocialLinks";
import HeroAnimations from "./HeroAnimations";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <h1 className={styles.title} data-hero-heading>
            24/7 Locksmith
            <br />
            Newcastle
          </h1>
          <div className={styles.bottom}>
            <p className={styles.desc} data-hero-text>
              Access Granted Northeast is a mobile auto and home locksmith covering
              Newcastle and the North East, 24/7, with a free call-out. We help with
              lost car keys, lockouts, key programming, vehicle coding and
              diagnostics.
            </p>
            <div className={styles.pillbar} data-hero-socials>
              <SocialLinks variant="light" />
              <a
                href="https://wa.me/447777474195"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.getInTouch}`}
                data-hero-cta
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className={styles.imageTile}>
          <img
            src="/assets/images/ag-hero.webp"
            srcSet="/assets/images/ag-hero-640.webp 640w, /assets/images/ag-hero-900.webp 900w, /assets/images/ag-hero.webp 1200w"
            sizes="(max-width: 767px) 440px, 1200px"
            alt="Access Granted auto locksmith service van"
            width={1200}
            height={600}
            fetchPriority="high"
            data-hero-image
          />
        </div>
      </div>

      <HeroAnimations />
    </section>
  );
}
