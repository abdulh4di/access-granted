"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ContactSection.module.css";
import SectionReveal from "./SectionReveal";

// Public by design — Web3Forms access keys live in client-side markup and only
// permit sending to the address the key is registered to. Kept in an env var so
// swapping the developer's test key for the client's is a config change, not a
// code change.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactSection() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setError(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Website enquiry — Access Granted Northeast",
          from_name: "Access Granted Northeast website",
          // Lets you hit reply in the inbox and reach the sender directly.
          replyto: form.email,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          // Web3Forms drops any submission where this is filled — bots complete
          // every field they find, people never see it.
          botcheck: "",
        }),
      });

      const data = await res.json();

      // Web3Forms answers 200 with `success: false` for a bad key or a rejected
      // submission, so the status code alone isn't enough to go on.
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }

      router.push("/thank-you");
    } catch {
      setSending(false);
      setError(
        "Sorry — that didn't send. Please try again, or call us on 07777474195.",
      );
    }
  };

  return (
    <section className={styles.contact} id="contact" data-reveal-block-group>
      <div className={`container ${styles.inner}`}>
        <div className={styles.details} data-reveal-block>
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

        <form className={styles.formCard} onSubmit={handleSubmit} data-reveal-block>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Your Name</span>
              <input
                type="text"
                className={styles.input}
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                required
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
                required
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
              required
            />
          </label>

          {/* Off-screen rather than display:none — bots skip hidden fields but
              fill this one, and Web3Forms rejects anything that arrives with it
              set. tabIndex/autoComplete keep it away from real users. */}
          <input
            type="checkbox"
            name="botcheck"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button type="submit" className={styles.submit} disabled={sending}>
            {sending ? "Sending…" : "Send Message"}
          </button>

          {/* aria-live so screen readers hear the failure without moving focus. */}
          {error && (
            <p className={styles.error} role="alert" aria-live="polite">
              {error}
            </p>
          )}

          {/* Covers the card between submit and the redirect, so the form can't
              be edited or resubmitted while the request is in flight. The status
              text is for screen readers; sighted users get the spinner. */}
          {sending && (
            <div className={styles.sendingOverlay}>
              <span className={styles.spinner} aria-hidden="true" />
              <span className="sr-only" role="status" aria-live="polite">
                Sending your message…
              </span>
            </div>
          )}
        </form>
      </div>

      <SectionReveal />
    </section>
  );
}
