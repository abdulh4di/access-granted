import styles from "./ComingSoon.module.css";

interface ComingSoonProps {
  eyebrow?: string;
  heading?: string;
  description?: React.ReactNode;
}

export default function ComingSoon({
  eyebrow = "Gallery",
  heading = "Coming Soon",
  description = (
    <>
      Our gallery is on its way. We&rsquo;re putting together photos of recent
      work across Newcastle &amp; the North East. In the meantime, get in touch or
      explore our services.
    </>
  ),
}: ComingSoonProps) {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.desc}>{description}</p>
        <div className={styles.actions}>
          <a href="/contact" className={`btn btn-primary ${styles.cta}`}>
            Contact Us
          </a>
          <a href="tel:+447777474195" className={`btn ${styles.call}`}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
