import { useEffect, useState } from "react";

export default function Rating({ id }) {
  const key = `rating:${id}`;
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    try {
      setValue(Number(localStorage.getItem(key)) || 0);
    } catch {
      /* ignore */
    }
  }, [key]);

  const rate = (n) => {
    setValue(n);
    try {
      localStorage.setItem(key, String(n));
    } catch {
      /* ignore */
    }
  };

  const shown = hover || value;

  return (
    <div className="rating">
      <p className="label">Rate this project</p>
      <div className="stars" onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`star-btn ${n <= shown ? "on" : ""}`}
            onMouseEnter={() => setHover(n)}
            onClick={() => rate(n)}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
          >
            ★
          </button>
        ))}
      </div>
      <p className="muted rating-note">
        {value ? `Thank you! You rated this ${value}/5.` : "Tap a star to leave a rating."}
      </p>
    </div>
  );
}