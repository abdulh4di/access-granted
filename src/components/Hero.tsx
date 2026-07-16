import styles from "./Hero.module.css";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            24/7 Locksmith
            <br />
            Newcastle
          </h1>
          <div className={styles.bottom}>
            <p className={styles.desc}>
              Trusted 24/7 Locksmith services across Newcastle and the surrounding North
              East, helping with vehicle entry, lost car keys, key coding, diagnostics, vehicle
              coding and emergency lockouts.
            </p>
            <div className={styles.pillbar}>
              <SocialLinks variant="light" />
              <a
                href="https://wa.me/447777474195"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.getInTouch}`}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className={styles.imageTile}>
          <img
            src="/assets/images/ag-hero.png"
            alt="Access Granted auto locksmith service van"
            width={1774}
            height={887}
          />
        </div>
      </div>
    </section>
  );
}
