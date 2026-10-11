import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

const getSlug = () => {
  const m = window.location.hash.match(/^#\/project\/([\w-]+)/);
  return m ? m[1] : null;
};

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  const [slug, setSlug] = useState(getSlug);
  const prevSlug = useRef(slug);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    const onHash = () => {
      const next = getSlug();
      const wasProject = prevSlug.current;
      prevSlug.current = next;
      setSlug(next);

      if (next) {
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (wasProject) {
        const id = window.location.hash.slice(1);
        setTimeout(() => {
          const el = id ? document.getElementById(id) : null;
          if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
          else window.scrollTo({ top: 0, behavior: "instant" });
        }, 60);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <MotionConfig reducedMotion="user">
      <Navbar route={slug} theme={theme} toggleTheme={toggleTheme} />
      <main>
        {slug ? (
          <ProjectPage key={slug} slug={slug} />
        ) : (
          <>
            <Hero />
            <Stack />
            <Projects />
            <Experience />
            <About />
          </>
        )}
      </main>
            <Contact compact={Boolean(slug)} />
    </MotionConfig>
  );
}