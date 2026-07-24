import styles from "./Testimonials.module.css";
import TestimonialsTrack, { type Testimonial } from "./TestimonialsTrack";
import TestimonialsReveal from "./TestimonialsReveal";

// Live Google reviews via Featurable. Fetched server-side and cached with ISR
// (revalidated every 6h), so new reviews appear automatically.
const FEATURABLE_URL =
  "https://featurable.com/api/v2/widgets/89c4b9e0-d0ce-4841-b1a6-d507b0df0b5f";
const MAX_REVIEWS = 8; // show the 8 most recent

interface FeaturableReview {
  id: string;
  author: { name: string };
  text: string;
  rating: { value: number; max: number };
  publishedAt: string;
}

const RTF = new Intl.RelativeTimeFormat("en-GB", { numeric: "always" });

// "3 days ago" / "2 weeks ago" / "1 month ago". Computed at render time, so it
// refreshes with the ISR revalidation above.
function relativeDate(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return RTF.format(-minutes, "minute");

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return RTF.format(-hours, "hour");

  const days = Math.floor(hours / 24);
  if (days < 7) return RTF.format(-days, "day");
  if (days < 30) return RTF.format(-Math.floor(days / 7), "week");

  const months = Math.floor(days / 30.44);
  if (months < 12) return RTF.format(-Math.max(1, months), "month");

  return RTF.format(-Math.max(1, Math.floor(days / 365.25)), "year");
}

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(FEATURABLE_URL, { next: { revalidate: 21600 } });
    if (!res.ok) return [];
    const data = await res.json();
    const reviews: FeaturableReview[] = data?.widget?.reviews ?? [];

    return reviews
      .filter((r) => r?.text)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      )
      .slice(0, MAX_REVIEWS)
      .map((r) => ({
        text: r.text.replace(/\s+/g, " ").trim(),
        author: r.author?.name ?? "Anonymous",
        date: relativeDate(r.publishedAt),
        rating: r.rating.value,
      }));
  } catch {
    return [];
  }
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();

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
            href="https://www.google.com/maps?cid=7525167148975767354"
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
