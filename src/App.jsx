import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <MotionConfig reducedMotion="user">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <About />
      </main>
      <Contact />
    </MotionConfig>
  );
}