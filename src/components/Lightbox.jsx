import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Lightbox({ images, index, onClose, onChange }) {
  const src = index !== null ? images[index] : null;
  const open = Boolean(src);

  useEffect(() => {
    if (!open) return;
    const next = () => onChange((index + 1) % images.length);
    const prev = () => onChange((index - 1 + images.length) % images.length);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, index, images.length, onClose, onChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
        >
          <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>

          {images.length > 1 && (
            <>
              <button
                className="lb-nav prev"
                aria-label="Previous screenshot"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange((index - 1 + images.length) % images.length);
                }}
              >
                ←
              </button>
              <button
                className="lb-nav next"
                aria-label="Next screenshot"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange((index + 1) % images.length);
                }}
              >
                →
              </button>
            </>
          )}

          <motion.img
            key={src}
            src={src}
            alt=""
            className="lb-img"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease }}
            onClick={(e) => e.stopPropagation()}
          />

          <p className="lb-count label">{index + 1} / {images.length}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}