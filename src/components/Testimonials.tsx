import styles from "./Testimonials.module.css";

function GoogleLogo() {
  return (
    <svg
      className={styles.googleLogo}
      viewBox="0 0 48 48"
      width="20"
      height="20"
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

const TESTIMONIALS = [
  {
    text: "Really happy with the service. Very friendly, communicated well throughout, and explained everything clearly. He helped fix the issue with my car key quickly and made the process easy. Would definitely recommend. Thanks again!",
    author: "Lisa akther",
  },
  {
    text: "Just been locked out my car today. Called Roo from Access Granted Northeast and he came down within 25 minutes and had my car sorted. Big shout out to these guys really save my day today. Thanks once again",
    author: "rihab issa",
  },
  {
    text: "My key got stuck in the lock. Roo came out about an hour later (kept me informed of the time). Changed the lock. Very quick and didn't charge for the call out. Would highly recommend",
    author: "Angela Desbrow",
  },
  {
    text: "We got our key stuck in the door when our lock broke - lovely guy came round the same night in about an hour, fixed a new lock quicker than we expected, and only charged us for the new lock (no call out fee) as we're local!",
    author: "Jordyn Saris",
  },
  {
    text: "Called Roo quite late, was no problem. Very friendly, arrived fairly quickly given the time, got me sorted and on my way within 20 mins. Worth every penny having this man's number, especially when you never know!",
    author: "Dan Daymond",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <div className={styles.headText}>
            <span className="eyebrow">Testimonials</span>
            <h2 className={styles.heading}>
              What Our <br className={styles.mobileBr} />Customers Say
            </h2>
          </div>
          <a href="#" className={`btn btn-primary ${styles.reviewsBtn}`}>
            View All Google Reviews
          </a>
        </div>

        <ul className={styles.track}>
          {/* Duplicated set (second half aria-hidden) for a seamless marquee loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <li
              key={i}
              className={styles.card}
              aria-hidden={i >= TESTIMONIALS.length}
            >
              <p className={styles.text}>{t.text}</p>
              <p className={styles.author}>
                <GoogleLogo />
                {t.author}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
