"use client";

import { useState } from "react";
import styles from "./ServiceFaq.module.css";

const FAQS = [
  {
    q: "Do you offer emergency call outs?",
    a: "Yes. We offer emergency call out services for both vehicle and residential locksmith situations. For urgent issues, it is best to call directly.",
  },
  {
    q: "Can you unlock my vehicle without causing damage?",
    a: "In the vast majority of cases, yes. We use non-destructive entry techniques to open your vehicle without damaging the lock, door or paintwork.",
  },
  {
    q: "Is it cheaper than the main dealer?",
    a: "Usually, yes. Our mobile service and specialist equipment mean we can replace keys and carry out coding for considerably less than a main dealer — and we come to you.",
  },
  {
    q: "How fast can you get to me?",
    a: "Response times vary by location and time of day, but for local emergencies we typically aim to reach you within around 30 minutes.",
  },
  {
    q: "Do I need a spare key?",
    a: "It's not essential, but a spare car key is well worth having — it protects you against a full lockout and is much cheaper to cut while you still have a working key.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function ServiceFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.faq} id="faq">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">FAQs</span>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.subhead}>
            Find answers to common questions about our locksmith, vehicle
            coding, diagnostics and emergency call out services.
          </p>
        </header>

        <ul className={styles.list}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.toggle} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        d="M6 12h12"
                      />
                      {!isOpen && (
                        <path
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          d="M12 6v12"
                        />
                      )}
                    </svg>
                  </span>
                </button>
                <div
                  className={`${styles.answerWrap} ${isOpen ? styles.open : ""}`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
