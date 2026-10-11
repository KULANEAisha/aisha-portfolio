import { motion } from "framer-motion";
import { profile } from "../data";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="about-dark">
      <div className="about-grid">
        <div className="about-left">
          <Reveal>
            <p className="label about-label">About</p>
          </Reveal>

          <motion.div
            className="about-badge"
            initial={{ opacity: 0, scale: 0.6, rotate: -120 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease }}
          >
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <clipPath id="badge-clip">
                  <circle cx="50" cy="50" r="50" />
                </clipPath>
              </defs>
              <circle cx="50" cy="50" r="50" fill="#d16545" />
              <polygon
                points="55,-2 102,-2 102,102 55,102 13,50"
                fill="#f4e9a8"
                clipPath="url(#badge-clip)"
              />
            </svg>
          </motion.div>
        </div>

        <Reveal delay={0.1}>
          <p className="about-text">{profile.about}</p>

          <p className="about-closing">
            I believe in combining <em>thoughtful product design</em> with clean,
            efficient frontend development to create intuitive,{" "}
            <em>visually engaging</em> digital experiences that solve real-world
            problems and meet users’ needs.
          </p>

          <p className="label about-lang">Languages: {profile.languages}</p>
        </Reveal>
      </div>
    </section>
  );
}