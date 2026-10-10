import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

const links = [
  { label: "Home", id: "top" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Moon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Sun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <a href="#top" className="brand">
        <span className="logo-mark">AK</span>
        <span>{profile.name}</span>
      </a>

      <nav aria-label="Main navigation" className="nav-links">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? "active" : ""}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </motion.header>
  );
}