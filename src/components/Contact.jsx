import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal>
        <p className="contact-lead">
          Open to frontend, product design and software engineering opportunities.
        </p>

        <a className="contact-email" href={`mailto:${profile.email}`}>
          <span>{profile.email}</span>
          <span className="big-arrow" aria-hidden="true">→</span>
        </a>

        <p className="contact-credit label">Designed and built by {profile.name}</p>
      </Reveal>
    </section>
  );
}