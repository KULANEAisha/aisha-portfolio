import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hello, I'm</p>
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p className="lead">{profile.intro}</p>
      <div className="buttons">
        <a className="btn primary" href="#projects">View Projects</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}