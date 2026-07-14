"use client";

import { useRef } from "react";
import styles from "./Areas.module.css";

const AREAS = [
  "Alnwick", "East Denton", "Lemington", "South Shields",
  "Bensham", "Felling", "Low Fell", "Sunderland",
  "Benwell", "Fenham", "Low Top", "Swalwell",
  "Byker", "Gateshead", "Morpeth", "Throckley",
  "Chapel House", "Hazlerigg", "Newcastle upon Tyne", "Wallsend",
  "Chapel Park", "Heaton", "North Shields", "Washington",
  "Chester-le-Street", "Hexham", "Rowlands Gill", "West Denton",
  "Choppington", "High Heaton", "Sandyford", "Westerhope",
  "Dunston", "Houghton-le-Spring", "Scotswood", "Whickham",
  "Durham", "Jesmond", "Seaham", "Whitley Bay",
];

const COLUMN_COUNT = 4;
// Split the row-ordered list into 4 columns of (max) 10, keeping each column
// alphabetical top-to-bottom. On tablet/mobile these become carousel slides.
const COLUMNS = Array.from({ length: COLUMN_COUNT }, (_, c) =>
  AREAS.filter((_, i) => i % COLUMN_COUNT === c),
);

export default function Areas() {
  const gridRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = gridRef.current;
    // Mouse only — touch/pen keep native swipe scrolling
    if (!el || e.pointerType !== "mouse") return;
    drag.current = { down: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.classList.add(styles.dragging);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = gridRef.current;
    if (!drag.current.down || !el) return;
    el.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.down = false;
    gridRef.current?.classList.remove(styles.dragging);
  };

  return (
    <section className={styles.areas} id="areas">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <span className="eyebrow">Areas Covered</span>
          <h2 className={styles.headline}>
            Locksmith Covering Newcastle &amp; the North East
          </h2>
          <p className={styles.subhead}>
            Providing trusted locksmith, vehicle coding, diagnostics and residential
            locksmith services across Newcastle, Gateshead and more than 40 towns and communities
            throughout the North East.
          </p>
        </header>

        <div className={styles.table}>
          <div className={styles.tableHead}>
            <span>Areas</span>
          </div>
          <div
            ref={gridRef}
            className={styles.grid}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {COLUMNS.map((col, ci) => (
              <ul key={ci} className={styles.column}>
                {col.map((area) => (
                  <li key={area} className={styles.cell}>
                    {area}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
