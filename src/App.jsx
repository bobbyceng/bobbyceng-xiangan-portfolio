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

  const heroLines = c.t(content.hero.headline).split('\n')
  const heroPrimary = heroLines[0] ?? ''
  const heroSecondary = heroLines[1]

  const navItems = content.nav.items
  const projects = [
    ...content.projects.personal.map((project) => ({
      ...project,
      tag: content.projects.personalHeading,
    })),
    ...content.projects.experience.map((project) => ({
      ...project,
      tag: content.projects.experienceHeading,
    })),
  ]

  const timelineIcon = (name) => {
    const map = { brain: '🧠', book: '📘', shield: '🛡️', target: '◎' }
    return map[name] ?? '•'
  }

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#hero">
            {c.t(content.hero.name)}
          </a>

          <nav className="nav" aria-label={c.t(content.ui.a11y.primaryNav)}>
            {navItems.map((item) => (
              <a key={item.id} className="nav__link" href={`#${item.id}`}>
                {c.t(item.label)}
              </a>
            ))}
          </nav>

          <div className="lang">
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
      </header>

      <main className="main">
        <section id="hero" className="section hero">
          <div className="hero__badges">
            <span className="hero__badge">{c.t(content.hero.badge)}</span>
            <span className="hero__status">{c.t(content.hero.status)}</span>
          </div>

          <h1 className="hero__title">
            {heroPrimary}
            {heroSecondary ? (
              <>
                <br />
                <span>{heroSecondary}</span>
              </>
            ) : null}
          </h1>

          <p className="hero__subtitle">{c.t(content.hero.subtitle)}</p>

          <div className="hero__skills">
            {content.hero.skills.map((skill) => (
              <div key={c.t(skill.label)} className="skill-pill">
                <span className="skill-pill__dot" aria-hidden="true" />
                <span>{c.t(skill.label)}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section self-eval">
          <h2 className="section__title">{c.t(content.selfEvaluation.heading)}</h2>
          <div className="self-grid">
            {content.selfEvaluation.items.map((item) => (
              <div key={c.t(item.title)} className="self-card">
                <h3>{c.t(item.title)}</h3>
                <p>{c.t(item.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section work">
          <h2 className="section__title">{c.t(content.projects.heading)}</h2>
          <div className="bento-grid">
            {projects.map((project) => (
              <article key={project.key} className="bento-card">
                <div className="bento-header">
                  <div>
                    <div className="bento-tag">{c.t(project.tag)}</div>
                    <h3 className="bento-title">{c.t(project.title)}</h3>
                    <p className="bento-subtitle">{c.t(project.subtitle)}</p>
                  </div>
                  <div className="bento-summary">“{c.t(project.desc)}”</div>
                </div>

                {project.insight ? (
                  <div className="bento-insight">
                    <strong>Product Insight</strong>
                    <div>{c.t(project.insight)}</div>
                  </div>
                ) : null}

                {project.logicSteps ? (
                  <div className="logic">
                    <div className="logic__title">Thinking Process</div>
                    <div className="logic__grid">
                      {project.logicSteps.map((step, index) => (
                        <div key={step.step} className="logic__item">
                          <div className="logic__label">{step.step}</div>
                          <div className="logic__text">{c.t(step.text)}</div>
                          {index !== project.logicSteps.length - 1 ? (
                            <span className="logic__arrow">→</span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {project.bullets ? (
                  <ul className="bento-bullets">
                    {project.bullets[lang].map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {project.links ? (
                  <div className="bento-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        className="bento-link"
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {c.t(link.label)}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <h2 className="section__title">{c.t(content.experience.heading)}</h2>
          <div className="experience-grid">
            {content.experience.items.map((item) => (
              <article key={`${c.t(item.org)}-${item.time}`} className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{c.t(item.org)}</h3>
                    <div className="experience-role">{c.t(item.role)}</div>
                  </div>
                  <div className="experience-time">{item.time}</div>
                </div>
                <ul className="experience-bullets">
                  {item.bullets[lang].map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section id="timeline" className="timeline">
        <div className="timeline__inner">
          <h2 className="timeline__title">{c.t(content.timeline.heading)}</h2>
          <div className="timeline__wrap">
            <div className="timeline__line" aria-hidden="true" />
            {content.timeline.items.map((item, index) => (
              <div
                key={`${c.t(item.title)}-${item.year}`}
                className={`timeline__item ${index % 2 === 0 ? 'timeline__item--reverse' : ''}`}
              >
                <div className="timeline__card">
                  <div className="timeline__year">{item.year}</div>
                  <h3>{c.t(item.title)}</h3>
                  <div className="timeline__role">{c.t(item.role)}</div>
                  <p className="timeline__desc">{c.t(item.desc)}</p>
                </div>
                <div className="timeline__marker" aria-hidden="true">
                  {timelineIcon(item.icon)}
                </div>
              </div>
            ))}
          </div>
          <div className="timeline__quote">{c.t(content.timeline.quote)}</div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact__card">
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
          <div className="contact__actions">
            <a className="bento-link" href={`mailto:${content.contact.email}`}>
              {c.t(content.ui.cta.emailMe)}
            </a>
            <a className="bento-link" href={content.contact.github} target="_blank" rel="noreferrer">
              {c.t(content.ui.cta.openGithub)}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-dark">
        <p>{c.t(content.ui.footer.note)}</p>
      </footer>
    </div>
  )
}

export default App
