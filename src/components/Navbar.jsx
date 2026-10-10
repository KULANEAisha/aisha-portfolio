import { motion } from "framer-motion";
import { profile } from "../data";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <a href="#top" className="brand">{profile.name}</a>
      <nav aria-label="Main navigation" className="label">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Let&apos;s talk</a>
        <button
          className="theme-toggle label"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>
    </motion.header>
  );
}