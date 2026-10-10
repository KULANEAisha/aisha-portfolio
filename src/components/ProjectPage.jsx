import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";
import { projects } from "../projects";
import Lightbox from "./Lightbox";
import Rating from "./Rating";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1];

export default function ProjectPage({ slug }) {
  const p = projects.find((x) => x.slug === slug);
  const [missing, setMissing] = useState({});
  const [open, setOpen] = useState(null);

  if (!p) {
    return (
      <section className="project-page">
        <a className="back label" href="#work">← Back</a>
        <h1 className="detail-title">Project not found.</h1>
      </section>
    );
  }

  const shots = (p.screenshots || []).filter((s) => !missing[s]);
  const markMissing = (src) => setMissing((m) => ({ ...m, [src]: true }));

  return (
    <>
      <section className="project-page">
        <a className="back label" href="#work">← Back</a>

        <div className="detail-title-wrap">
          <motion.h1
            className="detail-title"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease }}
          >
            {p.name}
          </motion.h1>
        </div>

        <motion.p
          className="label muted detail-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {p.category} · {p.year}
        </motion.p>

        <motion.div
          className="detail-links"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
        >
          {p.demo && (
            <a className="pill primary" href={p.demo} target="_blank" rel="noreferrer">
              View live ↗
            </a>
          )}
          {p.github && (
            <a
              className={`pill ${p.demo ? "ghost" : "primary"}`}
              href={p.github}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>
          )}
          {!p.demo && <span className="label muted">Not deployed · source code on GitHub</span>}
        </motion.div>

        

        <Reveal>
          <div className="row">
            <p className="label muted">Year</p>
            <p>{p.year}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="row">
            <p className="label muted">Tech &amp; Technique</p>
            <p>{p.tech.join(", ")}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="row">
            <p className="label muted">Description</p>
            <p className="detail-text">{p.overview}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="row">
            <p className="label muted">Key Features</p>
            <ul className="detail-list">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="row">
            <p className="label muted">Technical Highlights</p>
            <ul className="detail-list">
              {p.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="row">
            <p className="label muted">My Role</p>
            <div>
              <p className="detail-role">{p.role.title}</p>
              <ul className="detail-list">
                {p.role.items.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="section-head spaced">
            <h2 className="label">Screenshots</h2>
            {shots.length > 0 && (
              <span className="label muted">Click to enlarge</span>
            )}
          </div>
        </Reveal>

        {shots.length > 0 ? (
                    <div className={`shots ${p.device || "web"}`}>
            {shots.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 0.1}>
                <button
                  className="shot"
                  onClick={() => setOpen(i)}
                  aria-label={`Open screenshot ${i + 1} of ${p.name}`}
                >
                  <img
                    src={src}
                    alt={`${p.name} screenshot ${i + 1}`}
                    loading="lazy"
                    onError={() => markMissing(src)}
                  />
                </button>
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="muted">Screenshots coming soon.</p>
        )}

        <Reveal>
          <div className="detail-end">
            <Rating id={p.slug} />
            <div className="gh-links">
              {p.github && (
                <a className="pill ghost" href={p.github} target="_blank" rel="noreferrer">
                  ★ View this project on GitHub ↗
                </a>
              )}
              <a className="label" href={profile.github} target="_blank" rel="noreferrer">
                More projects on GitHub →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Lightbox
        images={shots}
        index={open}
        onClose={() => setOpen(null)}
        onChange={setOpen}
      />
    </>
  );
}