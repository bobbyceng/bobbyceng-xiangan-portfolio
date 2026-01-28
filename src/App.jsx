import { useEffect, useMemo, useState } from 'react'
import './App.css'
import content from './content'

const LANG_STORAGE_KEY = 'xiangan_portfolio_lang'

function getInitialLang() {
  if (typeof window === 'undefined') return 'cn'

  const saved = window.localStorage.getItem(LANG_STORAGE_KEY)
  if (saved === 'cn' || saved === 'en') return saved
  return 'cn'
}

function App() {
  const [lang, setLang] = useState(getInitialLang)

  const c = useMemo(() => {
    const t = (maybeBilingual) => {
      if (typeof maybeBilingual === 'string') return maybeBilingual
      if (!maybeBilingual) return ''
      return maybeBilingual[lang] ?? ''
    }

    return { t }
  }, [lang])

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang)
  }, [lang])

  useEffect(() => {
    document.title = content.meta.title[lang]
  }, [lang])

  const navItems = content.nav.items

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#hero">
            <span className="brand__name">{c.t(content.hero.name)}</span>
            <span className="brand__dot" aria-hidden="true">
              {c.t(content.ui.brand.separator)}
            </span>
            <span className="brand__title">{c.t(content.hero.title)}</span>
          </a>

          <nav className="nav" aria-label={c.t(content.ui.a11y.primaryNav)}>
            {navItems.map((item) => (
              <a key={item.id} className="nav__link" href={`#${item.id}`}>
                {c.t(item.label)}
              </a>
            ))}
          </nav>

          <div className="topbar__actions">
            <div className="lang" aria-label={c.t(content.ui.language.label)}>
              <button
                type="button"
                className={`lang__btn ${lang === 'cn' ? 'is-active' : ''}`}
                onClick={() => setLang('cn')}
              >
                {c.t(content.ui.language.cn)}
              </button>
              <button
                type="button"
                className={`lang__btn ${lang === 'en' ? 'is-active' : ''}`}
                onClick={() => setLang('en')}
              >
                {c.t(content.ui.language.en)}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="section hero">
          <div className="hero__inner">
            <div className="hero__identity">
              <img
                className="avatar"
                src="/assets/headshot.jpg"
                alt={c.t(content.hero.avatarAlt)}
                loading="eager"
                width="112"
                height="112"
              />

              <div className="hero__text">
                <p className="hero__eyebrow">{c.t(content.hero.title)}</p>
                <h1 className="hero__name">{c.t(content.hero.name)}</h1>
                <p className="hero__tagline">{c.t(content.hero.tagline)}</p>
                <p className="hero__intro">{c.t(content.hero.intro)}</p>

                <div className="hero__cta">
                  <a className="btn btn--primary" href="/downloads/resume.pdf">
                    {c.t(content.ui.cta.downloadResume)}
                  </a>
                  <a className="btn" href="#projects">
                    {c.t(content.ui.cta.viewProjects)}
                  </a>
                </div>
              </div>
            </div>

            <div className="hero__meta">
              <div className="card metaCard">
                <div className="metaCard__label">{c.t(content.contact.emailLabel)}</div>
                <a className="metaCard__value" href={`mailto:${content.contact.email}`}>
                  {content.contact.email}
                </a>
              </div>
              <div className="card metaCard">
                <div className="metaCard__label">{c.t(content.contact.githubLabel)}</div>
                <a className="metaCard__value" href={content.contact.github} target="_blank" rel="noreferrer">
                  {content.contact.github}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="section">
          <div className="section__header">
            <h2 className="section__title">{c.t(content.highlights.heading)}</h2>
          </div>

          <div className="grid3">
            {content.highlights.items.map((item) => (
              <article key={c.t(item.title)} className="card">
                <h3 className="card__title">{c.t(item.title)}</h3>
                <p className="card__desc">{c.t(item.desc)}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section__header section__header--split">
            <div>
              <h2 className="section__title">{c.t(content.projects.heading)}</h2>
              <p className="section__note">{c.t(content.projects.note)}</p>
            </div>
          </div>

          <div className="stack">
            {content.projects.items.map((project) => (
              <article key={project.key} className="card card--project">
                <div className="project__header">
                  <div>
                    <h3 className="project__title">{c.t(project.title)}</h3>
                    <p className="project__subtitle">{c.t(project.subtitle)}</p>
                  </div>
                  <div className="project__links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        className="chip"
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {c.t(link.label)}
                      </a>
                    ))}
                  </div>
                </div>

                <p className="project__desc">{c.t(project.desc)}</p>

                <ul className="bullets">
                  {project.bullets[lang].map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {project.gallery ? (
                  <div className="gallery" aria-label={c.t(project.title)}>
                    {project.gallery.map((img) => (
                      <figure key={img.src} className="gallery__item">
                        <img
                          src={img.src}
                          alt={c.t(img.alt)}
                          loading="lazy"
                          className="gallery__img"
                        />
                      </figure>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section__header">
            <h2 className="section__title">{c.t(content.experience.heading)}</h2>
          </div>

          <div className="stack">
            {content.experience.items.map((item) => (
              <article key={`${c.t(item.org)}-${item.time}`} className="card">
                <div className="row">
                  <div className="row__main">
                    <h3 className="row__title">{c.t(item.org)}</h3>
                    <p className="row__subtitle">{c.t(item.role)}</p>
                  </div>
                  <div className="row__meta">{item.time}</div>
                </div>
                <ul className="bullets">
                  {item.bullets[lang].map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section__header">
            <h2 className="section__title">{c.t(content.skills.heading)}</h2>
          </div>

          <div className="card">
            <div className="tags" role="list">
              {content.skills.tags[lang].map((tag) => (
                <span key={tag} className="tag" role="listitem">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section__header">
            <h2 className="section__title">{c.t(content.education.heading)}</h2>
          </div>

          <div className="grid2">
            {content.education.items.map((item) => (
              <article key={`${c.t(item.org)}-${item.time}`} className="card">
                <div className="row">
                  <div className="row__main">
                    <h3 className="row__title">{c.t(item.org)}</h3>
                    <p className="row__subtitle">{c.t(item.detail)}</p>
                  </div>
                  <div className="row__meta">{item.time}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section__header">
            <h2 className="section__title">{c.t(content.contact.heading)}</h2>
          </div>

          <div className="card contact">
            <div className="contact__grid">
              <div>
                <div className="contact__label">{c.t(content.contact.emailLabel)}</div>
                <a className="contact__value" href={`mailto:${content.contact.email}`}>
                  {content.contact.email}
                </a>
              </div>
              <div>
                <div className="contact__label">{c.t(content.contact.githubLabel)}</div>
                <a className="contact__value" href={content.contact.github} target="_blank" rel="noreferrer">
                  {content.contact.github}
                </a>
              </div>
              <div className="contact__cta">
                <a className="btn btn--primary" href={`mailto:${content.contact.email}`}>
                  {c.t(content.ui.cta.emailMe)}
                </a>
                <a className="btn" href={content.contact.github} target="_blank" rel="noreferrer">
                  {c.t(content.ui.cta.openGithub)}
                </a>
              </div>
            </div>
          </div>

          <footer className="footer">{c.t(content.ui.footer.note)}</footer>
        </section>
      </main>
    </div>
  )
}

export default App
