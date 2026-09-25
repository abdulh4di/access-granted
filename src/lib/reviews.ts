// Live Google reviews via Featurable. Fetched server-side and cached with ISR
// (revalidated every 6h), so new reviews appear automatically. Shared by the
// homepage marquee and the /reviews page.
const FEATURABLE_URL =
  "https://featurable.com/api/v2/widgets/d6340c66-76da-4a4a-bcdc-15203baebac3";

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?cid=7525167148975767354";

export interface Review {
  text: string;
  author: string;
  date: string;
  rating: number;
}

export interface GoogleReviews {
  reviews: Review[];
  /** Overall rating and total review count on the Google listing, when the feed reports them. */
  rating?: number;
  total?: number;
}

interface FeaturableReview {
  id: string;
  author: { name: string };
  text: string;
  rating: { value: number; max: number };
  publishedAt: string;
}

const RTF = new Intl.RelativeTimeFormat("en-GB", { numeric: "always" });

// "3 days ago" / "12 days ago" / "1 month ago". Computed at render time, so it
// refreshes with the ISR revalidation above.
function relativeDate(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return RTF.format(-minutes, "minute");

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return RTF.format(-hours, "hour");

  const days = Math.floor(hours / 24);
  if (days < 30) return RTF.format(-days, "day");

  const months = Math.floor(days / 30.44);
  if (months < 12) return RTF.format(-Math.max(1, months), "month");

  return RTF.format(-Math.max(1, Math.floor(days / 365.25)), "year");
}

/** Newest first. Pass a limit to keep only the most recent reviews. */
export async function getGoogleReviews(limit?: number): Promise<GoogleReviews> {
  try {
    const res = await fetch(FEATURABLE_URL, { next: { revalidate: 21600 } });
    if (!res.ok) return { reviews: [] };
    const data = await res.json();
    const raw: FeaturableReview[] = data?.widget?.reviews ?? [];
    const summary = data?.widget?.gbpLocationSummary;

    const reviews = raw
      .filter((r) => r?.text)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      )
      .slice(0, limit)
      .map((r) => ({
        text: r.text.replace(/\s+/g, " ").trim(),
        author: r.author?.name ?? "Anonymous",
        date: relativeDate(r.publishedAt),
        rating: r.rating.value,
      }));

    return {
      reviews,
      rating: typeof summary?.rating === "number" ? summary.rating : undefined,
      total:
        typeof summary?.reviewsCount === "number" ? summary.reviewsCount : undefined,
    };
  } catch {
    return { reviews: [] };
  }
}
