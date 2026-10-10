import { projects } from "../data";
import Reveal from "./Reveal";

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
          <Reveal key={p.name} delay={(i % 2) * 0.12} className={`work-item ${i % 2 ? "offset" : ""}`}>
            <article>
              <div className="visual" style={{ background: p.color, color: p.ink }}>
                {p.image ? (
                  <img src={p.image} alt={`${p.name} screenshot`} />
                ) : (
                  <span className="visual-word">{p.word}</span>
                )}
              </div>

              <div className="work-meta">
                <div className="work-title">
                  <span className="num">0{i + 1}</span>
                  <h3>{p.name}</h3>
                  {p.github && (
                    <a className="arrow" href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`}>
                      ↗
                    </a>
                  )}
                </div>
                <p className="label muted">{p.category} · {p.year}</p>
                <p className="desc">{p.description}</p>
                <ul className="tags">
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="work-links label">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}