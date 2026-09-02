/* ═══════════════════════════════════════════════════════════════
   App layout. To change WORDS or PROJECTS, edit the files in
   src/data/  —  you should not need to touch this file.
   ─────────────────────────────────────────────────────────────── */

import { site } from "./data/site.js";
import { skills } from "./data/skills.js";
import { projects } from "./data/projects.js";

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

function Nav() {
  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">
        {site.firstName} <em>{site.lastName}</em>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1 className="hero-name">
          {site.firstName}<br />
          <span className="line2">{site.lastName}.</span>
        </h1>
        <p className="hero-role">{site.role}</p>
        <p className="hero-desc">{site.intro}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a
            href={site.socials.find((s) => s.name === "GitHub")?.url || "#"}
            target="_blank"
            rel="noopener"
            className="btn btn-outline"
          >
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>

      <div className="hero-card">
        {site.infoCard.map((row) => (
          <div className="hero-card-row" key={row.label}>
            <div className="hero-card-label">{row.label}</div>
            <div className="hero-card-value">{row.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-eyebrow">About</div>
      <div className="about-grid">
        <div className="about-portrait">
          <img src={site.portrait} alt={`${site.fullName} portrait`} />
        </div>
        <div className="about-text">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills" id="skills">
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
                      {link.primary && <GitHubIcon />} {link.label}
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

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-eyebrow">Contact</div>
      <h2 className="contact-heading">Let's build something.</h2>
      <a href={`mailto:${site.email}`} className="contact-email">
        {site.email}
      </a>
      <div className="contact-socials">
        {site.socials.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener" className="social-item">
            <span className="social-name">{s.name}</span>
            <span className="social-handle">{s.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {site.fullName}
      </footer>
    </>
  );
}
