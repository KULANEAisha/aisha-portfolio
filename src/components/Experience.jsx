import { experience, activities, education, profile } from "../data";
import { projects } from "../projects";
import Reveal from "./Reveal";

const featuredSlugs = ["disaster-response", "peekevent", "course-advising"];

export default function Experience() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section id="experience" className="experience">
      <Reveal>
        <div className="exp-head">
          <p className="label exp-eyebrow">Experience</p>
          <h2 className="exp-title">Work history</h2>
          <p className="exp-sub">
            Roles, leadership and shipped work from my resume.
          </p>
          <a
            className="pill ghost"
            href={profile.resume}
            download="Aisha_Kulane_Resume.pdf"
          >
            Download resume
          </a>
        </div>
      </Reveal>

      <div className="exp-list">
        {experience.map((e) => (
          <Reveal key={e.role + e.org}>
            <div className="job">
              <div>
                <p className="label job-when">{e.period}</p>
                {e.location && <p className="job-where">{e.location}</p>}
              </div>
              <div>
                <h3 className="job-role">
                  {e.role} <span className="org">· {e.org}</span>
                </h3>
                <ul className="job-points">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>

                {e.projects && (
                  <>
                    <p className="label job-label">Projects</p>
                    <ul className="job-points">
                      {e.projects.map((pr) => <li key={pr}>{pr}</li>)}
                    </ul>
                  </>
                )}

                {e.tags && (
                  <ul className="tags">
                    {e.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="section-head spaced">
          <h2 className="label">Leadership &amp; Activities</h2>
        </div>
      </Reveal>
      <div className="exp-list flush">
        {activities.map((a) => (
          <Reveal key={a.org}>
            <div className="job">
              <p className="label job-when">{a.period}</p>
              <div>
                <h3 className="job-role">
                  {a.role} <span className="org">· {a.org}</span>
                </h3>
                <p className="job-text">{a.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="panels">
        <Reveal>
          <div className="panel">
            <h3 className="panel-title">Selected projects</h3>
            {featured.map((p) => (
              <div className="sel" key={p.slug}>
                <h4>
                  <a href={p.github} target="_blank" rel="noreferrer">
                    {p.name} <span aria-hidden="true">↗</span>
                  </a>
                </h4>
                <p>{p.description}</p>
                <ul className="tags">
                  {p.tech.slice(0, 4).map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="panel">
            <h3 className="panel-title">Education</h3>
            <p className="edu-degree">{education.degree}</p>
            <p>{education.school}</p>
            <p className="edu-date">{education.period}</p>
            <p className="edu-note">{education.honors}</p>
            <p className="edu-note">Coursework: {education.coursework}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}