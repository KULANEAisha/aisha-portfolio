import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="card-links">
              {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}