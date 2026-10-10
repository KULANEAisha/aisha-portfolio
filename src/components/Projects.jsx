import { useState } from "react";
import { projects } from "../projects";
import Reveal from "./Reveal";

function Cover({ p }) {
  const [failed, setFailed] = useState({});

  const wanted = p.cover
    ? [p.cover]
    : (p.screenshots || []).slice(0, p.device === "mobile" ? 2 : 1);
  const shown = wanted.filter((s) => !failed[s]);

  return (
    <div className="visual" style={{ background: p.color, color: p.ink }}>
      {shown.length > 0 ? (
        <div className="visual-imgs">
          {shown.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={i === 0 ? `${p.name} screenshot` : ""}
              loading="lazy"
              onError={() => setFailed((f) => ({ ...f, [src]: true }))}
            />
          ))}
        </div>
      ) : (
        <span className="visual-word">{p.word}</span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work">
      <Reveal>
        <div className="section-head">
          <h2 className="label">Selected work</h2>
          <span className="label muted">{projects.length} projects</span>
        </div>
      </Reveal>

      <div className="work-grid">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.12} className={`work-item ${i % 2 ? "offset" : ""}`}>
            <a className="work-card" href={`#/project/${p.slug}`} aria-label={`Open ${p.name}`}>
              <Cover p={p} />
              <div className="work-meta">
                <div className="work-title">
                  <span className="num">0{i + 1}</span>
                  <h3>{p.name}</h3>
                  <span className="arrow" aria-hidden="true">↗</span>
                </div>
                <p className="label muted">{p.category} · {p.year}</p>
                <p className="desc">{p.description}</p>
                <ul className="tags">
                  {p.tech.slice(0, 4).map((t) => <li key={t}>{t}</li>)}
                </ul>
                <p className="label view-more">View project →</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}