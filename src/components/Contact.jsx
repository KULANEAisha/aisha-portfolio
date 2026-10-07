import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p>I'm open to cybersecurity, cloud and software engineering opportunities.</p>
      <div className="buttons">
        <a className="btn primary" href={`mailto:${profile.email}`}>Email Me</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </section>
  );
}