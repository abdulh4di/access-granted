import styles from "./ReviewsList.module.css";
import SectionReveal from "./SectionReveal";
import { GoogleLogo, StarRating } from "./TestimonialsTrack";
import { GOOGLE_REVIEWS_URL, getGoogleReviews } from "@/lib/reviews";

/**
 * Every review from the Google feed, in full, as plain text on the page — so
 * visitors and search engines can read what customers actually said.
 */
export default async function ReviewsList() {
  const { reviews, rating, total } = await getGoogleReviews();

  if (reviews.length === 0) return null;

  return (
    <section className={styles.reviews} id="reviews" data-reveal-block-rows>
      <div className={`container ${styles.inner}`}>
        {rating !== undefined && total !== undefined && (
          <div className={styles.summary} data-reveal-block>
            <div className={styles.score}>
              <span className={styles.scoreValue}>{rating.toFixed(1)}</span>
              <div className={styles.scoreMeta}>
                <StarRating rating={Math.round(rating)} />
                <span className={styles.scoreText}>
                  Rated {rating.toFixed(1)} out of 5 from {total} Google reviews
                </span>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read All Reviews on Google
            </a>
          </div>
        )}

        <ul className={styles.grid}>
          {reviews.map((r, i) => (
            <li key={`${r.author}-${i}`} className={styles.card} data-reveal-block>
              <StarRating rating={r.rating} />
              <p className={styles.text}>{r.text}</p>
              <div className={styles.author}>
                <GoogleLogo />
                <span className={styles.authorMeta}>
                  <span className={styles.authorName}>{r.author}</span>
                  <span className={styles.authorDate}>{r.date}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <SectionReveal />
    </section>
  );
}
