"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    const href = `mailto:help@accessgrantednortheast.co.uk?subject=${encodeURIComponent(
      "Website enquiry",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.details}>
          <h2 className={styles.heading}>Get in touch</h2>
          <dl className={styles.info}>
            <div className={styles.infoRow}>
              <dt className={styles.label}>Email:</dt>
              <dd className={styles.value}>
                <a href="mailto:help@accessgrantednortheast.co.uk">
                  help@accessgrantednortheast.co.uk
                </a>
              </dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.label}>Phone:</dt>
              <dd className={styles.value}>
                <a href="tel:+447777474195">07777474195</a>
              </dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.label}>Address:</dt>
              <dd className={styles.value}>
                The Beacon
                <br />
                Westgate Road
                <br />
                Newcastle upon Tyne
                <br />
                NE4 9PN
              </dd>
            </div>
          </dl>
        </div>

        <form className={styles.formCard} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Your Name</span>
              <input
                type="text"
                className={styles.input}
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Email address</span>
              <input
                type="email"
                className={styles.input}
                placeholder="Enter your email"
                value={form.email}
                onChange={update("email")}
              />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Phone Number</span>
            <input
              type="tel"
              className={styles.input}
              placeholder="Enter your Number"
              value={form.phone}
              onChange={update("phone")}
            />
          </label>

          <label className={`${styles.field} ${styles.messageField}`}>
            <span className={styles.fieldLabel}>Messages</span>
            <textarea
              className={styles.textarea}
              placeholder="Your messages..."
              value={form.message}
              onChange={update("message")}
            />
          </label>

          <button type="submit" className={styles.submit}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
