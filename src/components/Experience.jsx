import { experience, education } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="compact">
      <Reveal>
        <div className="section-head">
          <h2 className="label">Experience</h2>
        </div>
      </Reveal>
      {experience.map((e, i) => (
        <Reveal key={e.role + e.org} delay={i * 0.08}>
          <div className="row">
            <p className="label muted">{e.period}</p>
            <div>
              <h3 className="row-title">{e.role} · {e.org}</h3>
              <ul className="points">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal>
        <div className="section-head spaced">
          <h2 className="label">Education</h2>
        </div>
        <div className="row">
          <p className="label muted">{education.school}</p>
          <h3 className="row-title">{education.degree}</h3>
        </div>
      </Reveal>
    </section>
  );
}