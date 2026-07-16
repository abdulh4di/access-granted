import styles from "./HowItWorks.module.css";

// Exact glyph paths from the Figma icons (node 225:1100), white on the blue tile.
const ICONS = {
  phone: {
    viewBox: "16 16 24 24",
    content: (
      <path
        fill="currentColor"
        d="M39.5591 34.7998L34.0827 29.8205C33.8238 29.5853 33.4836 29.4598 33.134 29.4706C32.7843 29.4814 32.4526 29.6276 32.2087 29.8785L28.9848 33.1939C28.2088 33.0457 26.6488 32.5594 25.0429 30.9576C23.437 29.3504 22.9507 27.7863 22.8065 27.0157L26.1193 23.7905C26.3704 23.5468 26.5169 23.215 26.5277 22.8652C26.5385 22.5155 26.4128 22.1752 26.1772 21.9165L21.1993 16.4415C20.9636 16.1819 20.636 16.0245 20.2861 16.0026C19.9362 15.9807 19.5915 16.0961 19.3253 16.3243L16.4018 18.8314C16.1689 19.0652 16.0299 19.3763 16.0112 19.7057C15.9909 20.0425 15.6056 28.0207 21.7921 34.2097C27.189 39.6053 33.9493 40 35.8112 40C36.0833 40 36.2503 39.9919 36.2948 39.9892C36.6242 39.9708 36.9352 39.8311 37.1678 39.5972L39.6736 36.6724C39.9027 36.4071 40.0189 36.0627 39.9975 35.7128C39.9761 35.3629 39.8188 35.0353 39.5591 34.7998Z"
      />
    ),
  },
  search: {
    viewBox: "0 0 20 20",
    content: (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9L8 11L12 7" />
        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" />
        <path d="M19 19L14.7 14.7" />
      </g>
    ),
  },
  truck: {
    viewBox: "16 14 24 24",
    content: (
      <path
        fill="currentColor"
        d="M17.8 16C16.8063 16 16 16.8398 16 17.875V30.375C16 31.4102 16.8063 32.25 17.8 32.25H18.4C18.4 34.3203 20.0125 36 22 36C23.9875 36 25.6 34.3203 25.6 32.25H30.4C30.4 34.3203 32.0125 36 34 36C35.9875 36 37.6 34.3203 37.6 32.25H38.8C39.4638 32.25 40 31.6914 40 31C40 30.3086 39.4638 29.75 38.8 29.75V27.25V26V25.2695C38.8 24.6055 38.5488 23.9688 38.0988 23.5L35.2 20.4805C34.75 20.0117 34.1388 19.75 33.5013 19.75H31.6V17.875C31.6 16.8398 30.7938 16 29.8 16H17.8ZM31.6 22.25H33.5013L36.4 25.2695V26H31.6V22.25ZM20.2 32.25C20.2 31.7527 20.3896 31.2758 20.7272 30.9242C21.0648 30.5725 21.5226 30.375 22 30.375C22.4774 30.375 22.9352 30.5725 23.2728 30.9242C23.6104 31.2758 23.8 31.7527 23.8 32.25C23.8 32.7473 23.6104 33.2242 23.2728 33.5758C22.9352 33.9275 22.4774 34.125 22 34.125C21.5226 34.125 21.0648 33.9275 20.7272 33.5758C20.3896 33.2242 20.2 32.7473 20.2 32.25ZM34 30.375C34.4774 30.375 34.9352 30.5725 35.2728 30.9242C35.6104 31.2758 35.8 31.7527 35.8 32.25C35.8 32.7473 35.6104 33.2242 35.2728 33.5758C34.9352 33.9275 34.4774 34.125 34 34.125C33.5226 34.125 33.0648 33.9275 32.7272 33.5758C32.3896 33.2242 32.2 32.7473 32.2 32.25C32.2 31.7527 32.3896 31.2758 32.7272 30.9242C33.0648 30.5725 33.5226 30.375 34 30.375Z"
      />
    ),
  },
  check: {
    viewBox: "16 16 24 24",
    content: (
      <path
        fill="currentColor"
        d="M28 40C31.1826 40 34.2348 38.7357 36.4853 36.4853C38.7357 34.2348 40 31.1826 40 28C40 24.8174 38.7357 21.7652 36.4853 19.5147C34.2348 17.2643 31.1826 16 28 16C24.8174 16 21.7652 17.2643 19.5147 19.5147C17.2643 21.7652 16 24.8174 16 28C16 31.1826 17.2643 34.2348 19.5147 36.4853C21.7652 38.7357 24.8174 40 28 40ZM33.2969 25.7969L27.2969 31.7969C26.8563 32.2375 26.1438 32.2375 25.7078 31.7969L22.7078 28.7969C22.2672 28.3563 22.2672 27.6438 22.7078 27.2078C23.1484 26.7719 23.8609 26.7672 24.2969 27.2078L26.5 29.4109L31.7031 24.2031C32.1437 23.7625 32.8562 23.7625 33.2922 24.2031C33.7281 24.6437 33.7328 25.3562 33.2922 25.7922L33.2969 25.7969Z"
      />
    ),
  },
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
    icon: "truck" as const,
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
                <svg
                  viewBox={ICONS[s.icon].viewBox}
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  {ICONS[s.icon].content}
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
