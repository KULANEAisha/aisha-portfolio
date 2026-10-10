import { skills } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="compact">
      <Reveal>
        <div className="section-head">
          <h2 className="label">Skills</h2>
        </div>
      </Reveal>
      {Object.entries(skills).map(([group, items], i) => (
        <Reveal key={group} delay={i * 0.08}>
          <div className="row">
            <h3 className="row-title">{group}</h3>
            <p className="skill-list">
              {items.map((s, j) => (
                <span key={s}>
                  {s}
                  {j < items.length - 1 && <span className="sep"> / </span>}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}