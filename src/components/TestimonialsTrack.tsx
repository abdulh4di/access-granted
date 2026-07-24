"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";

export interface Testimonial {
  text: string;
  author: string;
  date: string;
  rating: number;
}

function GoogleLogo() {
  return (
    <svg
      className={styles.googleLogo}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Google"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className={styles.stars}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={i < rating ? styles.starFilled : styles.starEmpty}
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M10 1.5l2.6 5.27 5.82.846-4.21 4.104.994 5.79L10 14.79l-5.204 2.736.994-5.79-4.21-4.104 5.82-.846z" />
        </svg>
      ))}
    </div>
  );
}

function AuthorLine({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={styles.author}>
      <GoogleLogo />
      <span className={styles.authorMeta}>
        <span className={styles.authorName}>{testimonial.author}</span>
        <span className={styles.authorDate}>{testimonial.date}</span>
      </span>
    </div>
  );
}

export default function TestimonialsTrack({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const [truncated, setTruncated] = useState<boolean[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // A card needs a "Read more" only when its text is actually clamped.
  const measure = useCallback(() => {
    setTruncated(
      textRefs.current.map(
        (el) => !!el && el.scrollHeight > el.clientHeight + 1,
      ),
    );
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    // Re-measure once web fonts finish loading (affects line wrapping).
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Close the modal on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  const cards = [...testimonials, ...testimonials];

  return (
    <>
      <ul className={styles.track} data-tst-track>
        {/* Second half is aria-hidden — it exists only for the seamless loop. */}
        {cards.map((t, i) => {
          const isClone = i >= testimonials.length;
          return (
            <li key={i} className={styles.card} aria-hidden={isClone}>
              <StarRating rating={t.rating} />
              <div className={styles.textGroup}>
                <p
                  className={styles.text}
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                >
                  {t.text}
                </p>
                {truncated[i] && (
                  <button
                    type="button"
                    className={styles.readMore}
                    onClick={() => setSelected(t)}
                    tabIndex={isClone ? -1 : 0}
                    aria-hidden={isClone}
                  >
                    Read more
                  </button>
                )}
              </div>
              <AuthorLine testimonial={t} />
            </li>
          );
        })}
      </ul>

      {selected && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`Review from ${selected.author}`}
          onClick={() => setSelected(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSelected(null)}
              aria-label="Close review"
              autoFocus
            >
              &times;
            </button>
            <StarRating rating={selected.rating} />
            <p className={styles.modalText}>{selected.text}</p>
            <AuthorLine testimonial={selected} />
          </div>
        </div>
      )}
    </>
  );
}
