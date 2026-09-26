"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./GalleryGrid.module.css";
import SectionReveal from "./SectionReveal";

export type GalleryItem = {
  title: string;
  alt: string;
} & (
  | { kind: "image"; src: string }
  | { kind: "video"; src: string; poster?: string }
);

function cardBackground(item: GalleryItem): React.CSSProperties | undefined {
  const cover = item.kind === "video" ? item.poster : item.src;
  return cover ? { backgroundImage: `url(${cover})` } : undefined;
}

// Below this width the grid is a single column (see .grid media queries in
// GalleryGrid.module.css), so the desktop/tablet batch size would mean
// scrolling past 9 full-width photos per "Load more" click.
const MOBILE_QUERY = "(max-width: 767px)";

interface GalleryGridProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  subhead?: React.ReactNode;
  /** Photos managed in the CMS at /keystatic (Gallery). */
  items: GalleryItem[];
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
  items,
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
      // Arrow keys on a focused video seek it — don't also switch items.
      if (e.target instanceof HTMLVideoElement) return;
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
            <li
              key={`${i}-${item.src}`}
              className={styles.cell}
              data-reveal-block
            >
              <button
                type="button"
                className={styles.card}
                style={cardBackground(item)}
                aria-label={`View ${item.title} ${item.kind === "video" ? "video" : "photo"}`}
                onClick={() => setSelected(i)}
              >
                {item.kind === "video" && !item.poster && (
                  // No cover image: show the video's first frame instead.
                  <video
                    className={styles.cardVideo}
                    src={`${item.src}#t=0.1`}
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    tabIndex={-1}
                  />
                )}
                {item.kind === "video" && (
                  <span className={styles.play} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M8 5.14v13.72L19 12z" />
                    </svg>
                  </span>
                )}
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

            {active.kind === "video" ? (
              // Opening it was a click, so autoplay with sound is allowed.
              <video
                key={active.src}
                src={active.src}
                poster={active.poster}
                aria-label={active.alt}
                className={styles.modalImage}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={active.src}
                alt={active.alt}
                className={styles.modalImage}
              />
            )}

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
