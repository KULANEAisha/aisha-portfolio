import { experience, education } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      {experience.map((e) => (
        <div className="card" key={e.role + e.org}>
          <h3>{e.role} · {e.org}</h3>
          <p className="muted">{e.period}</p>
          <ul>
            {e.points.map((pt) => <li key={pt}>{pt}</li>)}
          </ul>
        </div>
      ))}

      <h2 className="section-title">Education</h2>
      <div className="card">
        <h3>{education.degree}</h3>
        <p className="muted">{education.school}</p>
      </div>
    </section>
  );
}