import styles from "./Testimonials.module.css";

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
              <p className={styles.author}>{t.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
