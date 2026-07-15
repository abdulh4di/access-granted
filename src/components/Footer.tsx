import styles from "./Footer.module.css";
import SocialLinks from "./SocialLinks";

const PAGES = [
  { label: "Home", href: "#top" },
  { label: "Gallery", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
  { label: "Blog", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const SERVICES = [
  "Locksmith Services",
  "Vehicle Coding & Diagnostics",
  "VAG Specialist Services",
  "Ghost Immobiliser Installation",
  "Residential Locksmith Services",
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <div className={styles.topbar}>
            <h2 className={styles.heading}>Need Urgent Help?</h2>
            <a href="#" className={`btn btn-dark ${styles.contactBtn}`}>
              Contact Now
            </a>
          </div>

          <div className={styles.body}>
            <div className={styles.brand}>
              <img
                src="/assets/images/ag-logo-northeast.png"
                alt="Access Granted Northeast"
                width={245}
                height={44}
                className={styles.logo}
              />

              <div className={styles.brandBottom}>
                <p className={styles.tagline}>07777474195</p>
                <p className={styles.tagline}>help@accessgrantednortheast.co.uk</p>
                <SocialLinks variant="white" />
              </div>
            </div>

            <div className={styles.cols}>
              <nav className={styles.col} aria-label="Pages">
                <h3 className={styles.colTitle}>Pages</h3>
                <ul className={styles.links}>
                  {PAGES.map((p) => (
                    <li key={p.label}>
                      <a href={p.href} className={styles.link}>
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className={styles.col} aria-label="Services">
                <h3 className={styles.colTitle}>Services</h3>
                <ul className={styles.links}>
                  {SERVICES.map((s) => (
                    <li key={s}>
                      <a href="#services" className={styles.link}>
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
