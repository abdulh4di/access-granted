import styles from "./Testimonials.module.css";
import TestimonialsTrack from "./TestimonialsTrack";
import { GOOGLE_REVIEWS_URL, getGoogleReviews } from "@/lib/reviews";
import TestimonialsReveal from "./TestimonialsReveal";

const MAX_REVIEWS = 8; // show the 8 most recent

export default async function Testimonials() {
  const { reviews: testimonials } = await getGoogleReviews(MAX_REVIEWS);

  if (testimonials.length === 0) return null;

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head} data-tst-head>
          <div className={styles.headText}>
            <span className="eyebrow" data-tst-eyebrow>
              Testimonials
            </span>
            <h2 className={styles.heading} data-tst-heading>
              What Our <br className={styles.mobileBr} />Customers Say
            </h2>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.reviewsBtn}`}
            data-tst-btn
          >
            View All Google Reviews
          </a>
        </div>

        <TestimonialsTrack testimonials={testimonials} />
      </div>

      <TestimonialsReveal />
    </section>
  );
}
