import styles from "./HowItWorks.module.css";

const ICONS = {
  phone: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 21a8.5 8.5 0 0 1-8.5-8.5V6a2 2 0 0 1 2-2h1.6a1 1 0 0 1 1 .76l.8 3.2a1 1 0 0 1-.5 1.1l-1.3.75a11 11 0 0 0 4.3 4.3l.75-1.3a1 1 0 0 1 1.1-.5l3.2.8a1 1 0 0 1 .76 1V18a2 2 0 0 1-2 2z"
    />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="m20 20-4.3-4.3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M9 4h6v2H9z" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 13 2 2 4-4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
};

const STEPS = [
  {
    icon: "phone" as const,
    title: "Contact Us",
    desc: "Call or message us with your vehicle or property details, location and the issue you are experiencing.",
  },
  {
    icon: "search" as const,
    title: "We Assess the Problem",
    desc: "We ask the right questions to understand whether you need entry, key support, coding, diagnostics or another service.",
  },
  {
    icon: "clipboard" as const,
    title: "We Attend or Advise",
    desc: "Where possible, we attend the job and carry out the required service. If another solution is needed, we will advise you clearly.",
  },
  {
    icon: "check" as const,
    title: "You Are Back on Track",
    desc: "Our aim is to resolve the issue smoothly and help you move forward with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.how}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">How It Works</span>
          <h2 className={styles.heading}>Getting Help Is Simple</h2>
        </header>

        <ul className={styles.grid}>
          {STEPS.map((s) => (
            <li key={s.title} className={styles.card}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  {ICONS[s.icon]}
                </svg>
              </span>
              <div className={styles.content}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
