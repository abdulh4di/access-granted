"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Navbar.module.css";

// Layout effect before paint on the client (falls back to useEffect on the
// server to avoid the React warning) so the entrance "from" state is applied
// without a flash of the settled layout.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Placeholder hrefs — these will point to dedicated service pages once designed.
const SERVICE_LINKS = [
  { label: "Auto Locksmith Services", href: "/services/auto-locksmith" },
  {
    label: "Vehicle Coding & Diagnostics",
    href: "/services/vehicle-coding-diagnostics",
  },
  { label: "VAG Specialist Services", href: "/services/vag-specialist" },
  {
    label: "Ghost Immobiliser Installation",
    href: "/services/ghost-immobiliser",
  },
  {
    label: "Residential Locksmith Services",
    href: "/services/residential-locksmith",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Page-load entrance: the nav pill reveals (fade + rise + scale), then its
  // inner elements stagger in. Ported from the "Plasticity" spec — timings and
  // easings preserved; markup restyled to reuse this project's tokens.
  useIsomorphicLayoutEffect(() => {
    const root = navRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return; // leave everything in its default visible state

    const staggerEls = root.querySelectorAll<HTMLElement>("[data-stagger]");
    const logo = root.querySelector<HTMLElement>("[data-nav-logo]");
    const burger = root.querySelector<HTMLElement>("[data-nav-burger]");

    const mm = gsap.matchMedia();

    // Desktop: full pill entrance — reveal, then stagger logo + links + CTA.
    mm.add("(min-width: 992px)", () => {
      gsap.set(root, { opacity: 0, y: 24, scale: 0.96 });
      gsap.set(staggerEls, { opacity: 0, y: 10 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(root, { opacity: 1, y: 0, scale: 1, duration: 0.8 }).to(
        staggerEls,
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: "power3.out" },
        0.2
      );
    });

    // Mobile/tablet: bar entrance — the links live behind the burger, so only
    // the visible bar elements (logo + burger) stagger in.
    mm.add("(max-width: 991px)", () => {
      const barEls = [logo, burger].filter(Boolean) as HTMLElement[];
      gsap.set(root, { opacity: 0, y: 24, scale: 0.96 });
      gsap.set(barEls, { opacity: 0, y: 10 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(root, { opacity: 1, y: 0, scale: 1, duration: 0.8 }).to(
        barEls,
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
        0.2
      );
    });

    return () => mm.revert();
  }, []);

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
    <nav
      ref={navRef}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      aria-label="Primary"
    >
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={styles.logo}
          aria-label="Access Granted — home"
          onClick={closeAll}
          data-stagger
          data-nav-logo
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
          data-nav-burger
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
            <li key={l.label} data-stagger>
              <a href={l.href} className={styles.link} onClick={closeAll}>
                {l.label}
              </a>
            </li>
          ))}

          <li className={styles.hasDropdown} ref={servicesRef} data-stagger>
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

        <a
          href="tel:+447777474195"
          className={`btn btn-primary ${styles.cta}`}
          data-stagger
        >
          Emergency Call Out
        </a>
      </div>
    </nav>
  );
}
