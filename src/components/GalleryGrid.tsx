"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./GalleryGrid.module.css";
import SectionReveal from "./SectionReveal";

type GalleryItem = {
  title: string;
  image: string;
  alt: string;
};

const GALLERY: GalleryItem[] = [
  {
    title: "BCM Fault Repair",
    image: "/assets/images/gallery-bcm-fault-repair.jpg",
    alt: "Honda Civic key handover after a body control module communication fault repair",
  },
  {
    title: "Key Programming Tools",
    image: "/assets/images/gallery-key-programming-tools.jpg",
    alt: "Professional car key programming and repair tools used on-site",
  },
  {
    title: "Mercedes Steering Lock Repair",
    image: "/assets/images/gallery-mercedes-steering-lock.jpg",
    alt: "Steering lock emulator device used to fix a Mercedes-Benz steering lock failure",
  },
  {
    title: "Vehicle IMMO Pincode Reading",
    image: "/assets/images/gallery-immo-pincode-reading.jpg",
    alt: "Diagnostic tool reading a vehicle's immobiliser pincode via OBD",
  },
  {
    title: "Key Coding & Matching",
    image: "/assets/images/gallery-key-coding-matching.jpg",
    alt: "Diagnostic tablet coding and matching a replacement car key",
  },
  {
    title: "Mercedes Key Decoding",
    image: "/assets/images/gallery-mercedes-key-decoding.jpg",
    alt: "Decoding a Mercedes key blank by eye using specialist equipment",
  },
  {
    title: "ECU Remapping",
    image: "/assets/images/gallery-ecu-remapping.jpg",
    alt: "ECU bench remapping in progress on diagnostic software",
  },
  {
    title: "Our Workshop",
    image: "/assets/images/gallery-workshop.jpg",
    alt: "Access Granted Northeast workshop bench with lock pick sets and diagnostic equipment",
  },
  {
    title: "Land Rover KVM Repair",
    image: "/assets/images/gallery-land-rover-kvm-repair.jpg",
    alt: "Land Rover KVM module label during a non-start key fault repair",
  },
  {
    title: "VAG Diagnostics",
    image: "/assets/images/gallery-vag-diagnostics.jpg",
    alt: "Diagnostic tool identifying a Volkswagen Group vehicle for key programming",
  },
  {
    title: "Mercedes EIS Programming",
    image: "/assets/images/gallery-mercedes-eis-programming.jpg",
    alt: "Mercedes-Benz EIS programming software showing key and ignition data",
  },
  {
    title: "Vehicle Lock Picking",
    image: "/assets/images/gallery-lock-picking.jpg",
    alt: "Non-destructive lock picking and decoding of a vehicle door lock",
  },
];

// Below this width the grid is a single column (see .grid media queries in
// GalleryGrid.module.css), so the desktop/tablet batch size would mean
// scrolling past 9 full-width photos per "Load more" click.
const MOBILE_QUERY = "(max-width: 767px)";

interface GalleryGridProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  subhead?: React.ReactNode;
  items?: GalleryItem[];
  /** How many items to show before a "Load more" button appears. */
  initialCount?: number;
  /** How many more items each "Load more" click reveals. */
  batchSize?: number;
  /** initialCount override at mobile widths (≤767px). */
  mobileInitialCount?: number;
  /** batchSize override at mobile widths (≤767px). */
  mobileBatchSize?: number;
}

export default function GalleryGrid({
  eyebrow = "Our Work",
  heading = (
    <>See Our Recent Car &amp; Home Locksmith Work Across Newcastle</>
  ),
  subhead = (
    <>
      Recent auto and home locksmith jobs across Newcastle and the North
      East, from vehicle lockouts and car key programming to residential lock
      repairs and replacements.
    </>
  ),
  items = GALLERY,
  initialCount = 9,
  batchSize = 9,
  mobileInitialCount = 5,
  mobileBatchSize = 5,
}: GalleryGridProps) {
  const [isMobile, setIsMobile] = useState(false);
  const effectiveInitialCount = isMobile ? mobileInitialCount : initialCount;
  const effectiveBatchSize = isMobile ? mobileBatchSize : batchSize;

  const [visibleCount, setVisibleCount] = useState(effectiveInitialCount);
  const [selected, setSelected] = useState<number | null>(null);

  // Track the mobile/desktop split so the counts above can differ, and reset
  // back to the (new) initial count on the rare crossover — e.g. a phone
  // rotated to landscape mid-session, not every resize while scrolling.
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const apply = (mobile: boolean) => {
      setIsMobile(mobile);
      setVisibleCount(mobile ? mobileInitialCount : initialCount);
    };
    apply(mql.matches);
    const onChange = (e: MediaQueryListEvent) => apply(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [initialCount, mobileInitialCount]);

  // Content grows over time as the client adds photos/videos through the
  // CMS — cap what renders up front so mobile doesn't turn into an endless
  // scroll, and let "Load more" reveal the rest in batches.
  const visible = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setSelected((i) =>
        i === null ? null : (i + dir + visible.length) % visible.length,
      ),
    [visible.length],
  );

  // Close on Escape, navigate with arrow keys, lock body scroll while open.
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected, close, step]);

  const active = selected === null ? null : visible[selected];

  return (
    <section className={styles.gallery} id="gallery" data-reveal-block-rows>
      <div className={`container ${styles.inner}`}>
        <header className={styles.head} data-reveal-head>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.heading} data-reveal-heading>
            {heading}
          </h2>
          <p className={styles.subhead} data-reveal-sub>
            {subhead}
          </p>
        </header>

        <ul className={styles.grid}>
          {visible.map((item, i) => (
            <li key={item.title} className={styles.cell} data-reveal-block>
              <button
                type="button"
                className={styles.card}
                style={{ backgroundImage: `url(${item.image})` }}
                aria-label={`View ${item.title} photo`}
                onClick={() => setSelected(i)}
              >
                <span className={styles.caption}>{item.title}</span>
              </button>
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={`btn btn-dark ${styles.loadMore}`}
              onClick={() =>
                setVisibleCount((c) =>
                  Math.min(c + effectiveBatchSize, items.length),
                )
              }
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {active && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          <button
            type="button"
            className={`${styles.modalNav} ${styles.modalPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m6-6-6 6 6 6"
              />
            </svg>
          </button>

          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={close}
              aria-label="Close image"
              autoFocus
            >
              &times;
            </button>

            <img
              src={active.image}
              alt={active.alt}
              className={styles.modalImage}
            />

            <span className={styles.modalTitle}>{active.title}</span>
          </div>

          <button
            type="button"
            className={`${styles.modalNav} ${styles.modalNext}`}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      <SectionReveal />
    </section>
  );
}
