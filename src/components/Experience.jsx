import { experience, activities, education } from "../data";
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
          <h2 className="label">Leadership &amp; Activities</h2>
        </div>
      </Reveal>
      {activities.map((a, i) => (
        <Reveal key={a.org} delay={i * 0.06}>
          <div className="row">
            <p className="label muted">{a.period}</p>
            <div>
              <h3 className="row-title">{a.role} · {a.org}</h3>
              <p className="muted">{a.text}</p>
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal>
        <div className="section-head spaced">
          <h2 className="label">Education</h2>
        </div>
        <div className="row">
          <p className="label muted">{education.period}</p>
          <div>
            <h3 className="row-title">{education.degree}</h3>
            <p>{education.school}</p>
            <p className="muted">{education.honors}</p>
            <p className="muted">Coursework: {education.coursework}</p>
          </div>
        </div>
        <div className="row">
          <p className="label muted">{education.certDate}</p>
          <div>
            <h3 className="row-title">{education.certification}</h3>
            <p className="muted">Certification</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}