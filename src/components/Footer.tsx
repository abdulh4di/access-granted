import styles from "./Footer.module.css";
import SocialLinks from "./SocialLinks";
import FooterReveal from "./FooterReveal";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
  { label: "Terms & Conditions", href: "/terms" },
];

const SERVICES = [
  { label: "Locksmith Services", href: "/services/auto-locksmith" },
  {
    label: "Vehicle Coding & Diagnostics",
    href: "/services/vehicle-coding-diagnostics",
  },
  { label: "VAG Specialist Services", href: "/services/vag-specialist" },
  { label: "Ghost Immobiliser Installation", href: "/services/ghost-immobiliser" },
  {
    label: "Residential Locksmith Services",
    href: "/services/residential-locksmith",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card} data-footer-card>
          <div className={styles.topbar}>
            <h2 className={styles.heading}>Need Urgent Help?</h2>
            <a href="#contact" className={`btn btn-dark ${styles.contactBtn}`}>
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
                <a href="tel:+447777474195" className={styles.tagline}>
                  07777474195
                </a>
                <a
                  href="mailto:help@accessgrantednortheast.co.uk"
                  className={styles.tagline}
                >
                  help@accessgrantednortheast.co.uk
                </a>
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
                    <li key={s.label}>
                      <a href={s.href} className={styles.link}>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <FooterReveal />
    </footer>
  );
}
