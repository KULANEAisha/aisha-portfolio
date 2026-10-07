import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid">
        {Object.entries(skills).map(([group, items]) => (
          <div className="card" key={group}>
            <h3>{group}</h3>
            <ul className="tags">
              {items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}