"use client";

import { useState } from "react";
import styles from "./LostKeysBenefits.module.css";

const ICONS = {
  phone: {
    viewBox: "16 16 24 24",
    path: "M39.5591 34.7998L34.0827 29.8205C33.8238 29.5853 33.4836 29.4598 33.134 29.4706C32.7843 29.4814 32.4526 29.6276 32.2087 29.8785L28.9848 33.1939C28.2088 33.0457 26.6488 32.5594 25.0429 30.9576C23.437 29.3504 22.9507 27.7863 22.8065 27.0157L26.1193 23.7905C26.3704 23.5468 26.5169 23.215 26.5277 22.8652C26.5385 22.5155 26.4128 22.1752 26.1772 21.9165L21.1993 16.4415C20.9636 16.1819 20.636 16.0245 20.2861 16.0026C19.9362 15.9807 19.5915 16.0961 19.3253 16.3243L16.4018 18.8314C16.1689 19.0652 16.0299 19.3763 16.0112 19.7057C15.9909 20.0425 15.6056 28.0207 21.7921 34.2097C27.189 39.6053 33.9493 40 35.8112 40C36.0833 40 36.2503 39.9919 36.2948 39.9892C36.6242 39.9708 36.9352 39.8311 37.1678 39.5972L39.6736 36.6724C39.9027 36.4071 40.0189 36.0627 39.9975 35.7128C39.9761 35.3629 39.8188 35.0353 39.5591 34.7998Z",
  },
  pin: {
    // viewBox cropped to the glyph so it fills the box like the phone icon
    viewBox: "2 2 20 20",
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  },
  key: {
    viewBox: "1 1 22 22",
    path: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
  },
  car: {
    viewBox: "2 3 20 20",
    path: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
  },
  money: {
    viewBox: "2 1 20 22",
    path: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
  },
  lock: {
    viewBox: "3 1 18 22",
    path: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
  },
  unlock: {
    viewBox: "3 1 18 22",
    path: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z",
  },
  clock: {
    viewBox: "2 2 20 20",
    path: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  },
  shield: {
    viewBox: "3 1 18 22",
    path: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
  },
  chip: {
    viewBox: "3 3 18 18",
    path: "M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2v-2h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z",
  },
  wrench: {
    viewBox: "1 2 22 20",
    path: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",
  },
  search: {
    viewBox: "3 3 18 18",
    path: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  },
  gear: {
    viewBox: "2 2 20 20",
    path: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
  },
  // Brand logos supplied by the client (public/assets/images)
  audi: { img: "/assets/images/audi.png" },
  vw: { img: "/assets/images/vw.png" },
  seat: { img: "/assets/images/seat.png" },
  skoda: { img: "/assets/images/skoda.png" },
} as const;

type BenefitStep = {
  label: string;
  heading: string;
  sub: string;
  desc: string;
  icon: keyof typeof ICONS;
};

const DEFAULT_STEPS: BenefitStep[] = [
  {
    label: "Call",
    heading: "Call",
    sub: "Tell Us What’s Happened",
    desc: "Call us with your vehicle details and location. We’ll confirm what you need and arrange a suitable call-out.",
    icon: "phone",
  },
  {
    label: "We Come",
    heading: "We Come",
    sub: "Mobile Locksmith to Your Location",
    desc: "We travel directly to you, whether you’re at home, work or stranded roadside.",
    icon: "pin",
  },
  {
    label: "Cut + Code",
    heading: "Cut + Code",
    sub: "Replacement Key Made On-Site",
    desc: "Your new car key is cut, programmed and tested using specialist equipment at your location.",
    icon: "key",
  },
  {
    label: "Drive Away",
    heading: "Drive Away",
    sub: "Secure and Ready to Go",
    desc: "Once everything is working correctly, you can access your vehicle and get back on the road.",
    icon: "car",
  },
];

interface LostKeysBenefitsProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  subhead?: React.ReactNode;
  steps?: BenefitStep[];
  /** stack layout: tabs in a 2-col grid with the panel below (good for 5-6 tabs) */
  stacked?: boolean;
}

export default function LostKeysBenefits({
  eyebrow = "How It Works",
  heading = (
    <>Lost Your Car Keys? We&rsquo;ll Get You Moving</>
  ),
  subhead = (
    <>
      Our mobile auto locksmith service makes replacing lost car keys simple.
      Call us, and we&rsquo;ll come to your location to cut, program and test your
      new key.
    </>
  ),
  steps = DEFAULT_STEPS,
  stacked = false,
}: LostKeysBenefitsProps) {
  const STEPS = steps;
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  const icon = ICONS[step.icon];

  return (
    <section className={styles.benefits}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subhead}>{subhead}</p>
        </header>

        <div className={`${styles.content} ${stacked ? styles.stacked : ""}`}>
          <ol className={styles.list} role="tablist" aria-label="Our process">
            {STEPS.map((s, i) => (
              <li key={s.label}>
                <button
                  type="button"
                  role="tab"
                  id={`benefit-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls="benefit-panel"
                  className={`${styles.item} ${active === i ? styles.itemActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.itemNum}>{i + 1}.</span>
                  <span className={styles.itemLabel}>{s.label}</span>
                </button>
              </li>
            ))}
          </ol>

          <div
            className={styles.detail}
            id="benefit-panel"
            role="tabpanel"
            aria-labelledby={`benefit-tab-${active}`}
          >
            {/* keyed so the content re-mounts and replays the fade on each change */}
            <div key={active} className={styles.detailBody}>
              <span className={styles.icon} aria-hidden="true">
                {"img" in icon ? (
                  <img src={icon.img} alt="" className={styles.iconImg} />
                ) : (
                  <svg viewBox={icon.viewBox} width="24" height="24">
                    <path fill="currentColor" d={icon.path} />
                  </svg>
                )}
              </span>

              <div className={styles.detailText}>
                <h3 className={styles.detailHeading}>{step.heading}</h3>
                <p className={styles.detailSub}>{step.sub}</p>
                <p className={styles.detailDesc}>{step.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
