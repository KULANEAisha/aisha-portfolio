import { profile } from "../data";

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <p>{profile.about}</p>
    </section>
  );
}