/* ═══════════════════════════════════════════════════════════════
   App layout. To change WORDS or PROJECTS, edit the files in
   src/data/  —  you should not need to touch this file.
   ─────────────────────────────────────────────────────────────── */

import { useState } from "react";
import { site } from "./data/site.js";
import { skills } from "./data/skills.js";
import { projects } from "./data/projects.js";
import { certificates } from "./data/certificates.js";

const ICONS = {
  github:
    "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  behance:
    "M22 7h-6V5h6v2zM8.5 12.5c1.1-.5 1.8-1.4 1.8-2.8C10.3 6.5 8.3 6 6 6H0v12h6.3c2.5 0 4.7-1.2 4.7-4 0-1.7-.8-2.9-2.5-3.5zM3 8.5h2.8c1 0 1.8.3 1.8 1.4 0 1-.7 1.4-1.7 1.4H3V8.5zm3.2 7H3v-3.2h3.3c1.2 0 1.9.5 1.9 1.6 0 1.2-.9 1.6-2 1.6zM24 13.3c0-2.9-1.7-5.3-4.8-5.3-3 0-5 2.3-5 5.2 0 3 1.9 5.1 5 5.1 2.4 0 3.9-1.1 4.6-3.3h-2.6c-.3.8-1 1.1-1.9 1.1-1.3 0-2-.8-2.1-2.1H24v-.8zm-6.6-1c.1-1.1.8-1.9 2-1.9 1.1 0 1.7.8 1.8 1.9h-3.8z",
  website:
    "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.938 6h-2.55c-.28-1.11-.68-2.16-1.19-3.12A8.03 8.03 0 0 1 19.938 6zM12 2.04c.83 1.2 1.48 2.53 1.92 3.96h-3.84c.44-1.43 1.09-2.76 1.92-3.96zM2.26 14a8.06 8.06 0 0 1 0-4h2.95a15.7 15.7 0 0 0 0 4H2.26zm.8 2h2.55c.28 1.11.68 2.16 1.19 3.12A8.03 8.03 0 0 1 3.06 16zm2.55-8H3.06a8.03 8.03 0 0 1 3.74-3.12A13.7 13.7 0 0 0 5.61 8zM12 21.96c-.83-1.2-1.48-2.53-1.92-3.96h3.84A15.3 15.3 0 0 1 12 21.96zM14.34 16H9.66a13.9 13.9 0 0 1 0-4h4.68a13.9 13.9 0 0 1 0 4zm.25 5.12c.51-.96.91-2.01 1.19-3.12h2.55a8.03 8.03 0 0 1-3.74 3.12zM16.36 14a15.7 15.7 0 0 0 0-4h2.95a8.06 8.06 0 0 1 0 4h-2.95z",
};

const SocialIcon = ({ name }) => {
  const key = name.toLowerCase().replace(/[^a-z]/g, "");
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={ICONS[key] || ICONS.website} />
    </svg>
  );
};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">{site.firstName}</a>
      <ul className="nav-links">
        {NAV.map((item, i) => (
          <li key={item.label}>
            <a href={item.href} className={i === 0 ? "is-active" : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Socials({ className }) {
  return (
    <div className={`socials ${className || ""}`}>
      {site.socials.map((s) => (
        <a key={s.name} href={s.url} target="_blank" rel="noopener" aria-label={s.name}>
          <SocialIcon name={s.name} />
        </a>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1 className="hero-name">
          Hi,<br />
          I&rsquo;am <span className="accent">{site.firstName}</span><br />
          {site.role}
        </h1>
        <p className="hero-desc">{site.intro}</p>
        <a href="#contact" className="btn btn-primary">Contact</a>
        <Socials className="socials-hero" />
      </div>

      <div className="hero-photo">
        <img src={site.portrait} alt={`${site.fullName} portrait`} />
      </div>
    </section>
  );
}

function AboutSkills() {
  return (
    <section className="section duo">
      <div className="duo-col" id="about">
        <div className="section-eyebrow">About</div>
        <div className="about-text">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="duo-col" id="skills">
        <div className="section-eyebrow">Skills</div>
        <div className="skills-rows">
          {skills.map((group) => (
            <div className="skill-row" key={group.label}>
              <span className="skill-row-label">{group.label}</span>
              <div className="skill-row-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const allRepos = site.socials.find((s) => s.name === "GitHub")?.url;
  return (
    <section className="section projects" id="projects">
      <div className="section-head">
        <div className="section-eyebrow">Projects</div>
        {allRepos && (
          <a href={allRepos} target="_blank" rel="noopener" className="section-link">
            All repositories ↗
          </a>
        )}
      </div>

      <div className="projects-list">
        {projects.map((project, i) => (
          <article className="project" key={project.title}>
            <div className="project-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="project-body">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.summary}</p>

              {project.tags?.length > 0 && (
                <div className="project-tags">
                  {project.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              )}

              {project.meta?.length > 0 && (
                <div className="project-meta">
                  {project.meta.map((m, j) => (
                    <span key={j}>
                      {m}
                      {j < project.meta.length - 1 && <span className="sep">·</span>}
                    </span>
                  ))}
                </div>
              )}

              {project.links?.length > 0 && (
                <div className="project-actions">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener"
                      className={`btn btn-sm ${link.primary ? "btn-primary" : "btn-outline"}`}
                    >
                      {link.primary && <SocialIcon name="github" />} {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  const [active, setActive] = useState(null);
  if (!certificates.length) return null;

  return (
    <section className="section certificates" id="certificates">
      <div className="section-eyebrow">Certificates</div>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <figure className="cert-card" key={cert.title}>
            <button
              type="button"
              className="cert-thumb"
              onClick={() => setActive(cert)}
              aria-label={`View ${cert.title}`}
            >
              <img src={cert.image} alt={cert.title} loading="lazy" />
            </button>
            <figcaption className="cert-meta">
              <span className="cert-title">{cert.title}</span>
              {cert.issuer && <span className="cert-issuer">{cert.issuer}</span>}
              {cert.date && <span className="cert-date">{cert.date}</span>}
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener" className="cert-verify">
                  Verify ↗
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div className="cert-lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="cert-close" aria-label="Close">×</button>
          <img src={active.image} alt={active.title} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-eyebrow">Contact</div>
      <h2 className="contact-heading">Contact Me!</h2>
      <a href={`mailto:${site.email}`} className="contact-email">
        {site.email}
      </a>
      <div className="contact-socials">
        {site.socials.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener" className="social-item">
            <span className="social-name">
              <SocialIcon name={s.name} /> {s.name}
            </span>
            <span className="social-handle">{s.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="shell">
      <Nav />
      <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {site.fullName}
      </footer>
    </div>
  );
}
