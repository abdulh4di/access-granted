"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

// Placeholder hrefs — these will point to dedicated service pages once designed.
const SERVICE_LINKS = [
  { label: "Auto Locksmith Services", href: "/services/auto-locksmith" },
  { label: "Vehicle Coding & Diagnostics", href: "#" },
  { label: "VAG Specialist Services", href: "#" },
  { label: "Ghost Immobiliser Installation", href: "#" },
  { label: "Residential Locksmith Services", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    // Hysteresis: condense above 80px, expand below 20px. The wide gap keeps
    // the sticky nav's height change (and any scroll-anchoring nudge it causes)
    // from flipping the state back and forth near a single threshold.
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 20 : y > 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    function onDocClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="Primary">
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={styles.logo}
          aria-label="Access Granted — home"
          onClick={closeAll}
        >
          <img
            src="/assets/images/ag-logo-northeast.png"
            alt="Access Granted Northeast"
            width={310}
            height={56}
          />
        </a>

        <button
          className={styles.burger}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => {
            setOpen((v) => !v);
            setServicesOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={styles.link} onClick={closeAll}>
                {l.label}
              </a>
            </li>
          ))}

          <li className={styles.hasDropdown} ref={servicesRef}>
            <button
              type="button"
              className={`${styles.link} ${styles.dropdownToggle}`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <img
                src="/assets/images/ag-icon-chevron.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ""}`}
              />
            </button>

            <ul className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ""}`}>
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={styles.dropdownLink} onClick={closeAll}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <a href="tel:+447777474195" className={`btn btn-primary ${styles.cta}`}>
          Emergency Call Out
        </a>
      </div>
    </nav>
  );
}
