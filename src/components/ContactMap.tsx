"use client";

import { useState } from "react";
import styles from "./ContactMap.module.css";
import SectionReveal from "./SectionReveal";

const ADDRESS = "The Beacon, Westgate Road, Newcastle upon Tyne, NE4 9PN";

export default function ContactMap() {
  // The embed is lazy-loaded and third-party, so it can take a moment (or fail
  // behind a blocker). Hold a shimmering placeholder until it reports ready.
  const [loaded, setLoaded] = useState(false);

  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS,
  )}&output=embed`;

  return (
    <section className={styles.map} aria-label="Our location">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head} data-reveal-head>
          <span className="eyebrow">Where We Cover</span>
          <h2 className={styles.heading} data-reveal-heading>Serving Newcastle &amp; the North East</h2>
          <p className={styles.subhead} data-reveal-sub>
            Based in Newcastle and mobile across Gateshead and more than 40 towns
            and communities throughout the North East.
          </p>
        </header>

        {/* Reveals as its own block, so it arrives after the heading and
            paragraph rather than sitting there fully drawn while they animate. */}
        <div className={styles.frame} data-reveal-block>
          {!loaded && (
            <div className={styles.skeleton} aria-hidden="true">
              <span className={styles.skeletonPin} />
            </div>
          )}
          <iframe
            title="Access Granted Northeast location"
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className={loaded ? styles.iframeLoaded : ""}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>

      <SectionReveal />
    </section>
  );
}
