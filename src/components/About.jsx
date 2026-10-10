import { profile } from "../data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="split">
        <Reveal>
          <h2 className="label">About</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="statement">{profile.about}</p>
        </Reveal>
      </div>
    </section>
  );
}