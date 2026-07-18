import styles from "./ContactMap.module.css";

const ADDRESS = "The Beacon, Westgate Road, Newcastle upon Tyne, NE4 9PN";

export default function ContactMap() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS,
  )}&output=embed`;

  return (
    <section className={styles.map} aria-label="Our location">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">Where We Cover</span>
          <h2 className={styles.heading}>Serving Newcastle &amp; the North East</h2>
          <p className={styles.subhead}>
            Based in Newcastle and mobile across Gateshead and more than 40 towns
            and communities throughout the North East.
          </p>
        </header>

        <div className={styles.frame}>
          <iframe
            title="Access Granted Northeast location"
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
