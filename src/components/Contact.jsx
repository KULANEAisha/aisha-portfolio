import { useEffect, useState } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";

const GitHub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Mail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const encode = (data) => new URLSearchParams(data).toString();

function useNairobiTime() {
  const get = () =>
    new Date().toLocaleTimeString("en-US", {
      timeZone: "Africa/Nairobi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  const [time, setTime] = useState(get);

  useEffect(() => {
    const id = setInterval(() => setTime(get()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Contact({ compact = false }) {
  const time = useNairobiTime();
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

    if (compact) {
    return (
      <section id="contact" className="contact contact-compact">
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

  return (
    <section id="contact" className="contact">
      <Reveal>
        <p className="label contact-eyebrow">Contact</p>
        <h2 className="contact-title">
          Start a <em>conversation.</em>
        </h2>
        <p className="contact-lead">
          Open to frontend, product design and software engineering opportunities.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal>
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hp">
              <label>
                Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <label className="field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea name="message" placeholder="What are you building?" required />
            </label>

            <button className="send-btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {status === "sent" && "Thank you! Your message was sent. I'll reply soon."}
              {status === "error" && (
                <>
                  Something went wrong. Please email me directly at{" "}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </>
              )}
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.12}>
          <aside className="contact-card">
            <div className="info">
              <h3>Email</h3>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="info">
              <h3>Based in</h3>
              <p>Nairobi, Kenya</p>
            </div>
            <div className="info">
              <h3>Local time</h3>
              <p className="clock">{time}</p>
            </div>
            <div className="info">
              <h3>Social</h3>
              <div className="c-socials">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedIn />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Mail />
                </a>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>

      <div className="contact-foot label">
        <span>Designed and built by {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </section>
  );
}