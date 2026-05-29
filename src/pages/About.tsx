import Reveal from '../components/Reveal'
import FinalCTA from '../components/FinalCTA'
import { CatIcon } from '../components/icons'

/* ============================================================
   About Hero
   ============================================================ */
function AboutHero() {
  return (
    <section className="subhero">
      <div className="subhero__glow" />
      <div className="wrap subhero__inner">
        <Reveal as="h1" className="display subhero__title balance" delay={60}>
          We build with you,<br />not just for you
        </Reveal>
        <Reveal as="p" className="lead subhero__lead pretty" delay={120}>
          Lumabyte started in November 2024 with two developers. From the beginning we've focused on
          continuous improvement — every project sharpens our process, deepens our technical skills,
          and helps us better understand the businesses we work with. We grow alongside our clients
          as they scale, launch, and evolve.
        </Reveal>
        <Reveal as="p" className="lead subhero__lead pretty" delay={160}>
          Today we're a team of four with a long-term vision: to support ambitious businesses through
          thoughtful digital solutions. This is just the beginning.
        </Reveal>
      </div>
    </section>
  )
}

/* ============================================================
   Stats
   ============================================================ */
const ABOUT_STATS = [
  { v: '2024', l: 'Founded' },
  { v: '4',    l: 'Team members' },
  { v: '5',    l: 'Industries served' },
]

function AboutStats() {
  return (
    <section className="section--tight">
      <div className="wrap">
        <div className="stats">
          {ABOUT_STATS.map((s, i) => (
            <Reveal className="stat" key={s.l} delay={i * 70}>
              <div className="stat__v">{s.v}</div>
              <div className="stat__l">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Mission
   ============================================================ */
function Mission() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="mission card">
          <div className="mission__visual">
            <div className="mission__dots" />
            <div className="mission__emblem">
              <svg viewBox="0 0 80 80" fill="none">
                <rect x="10" y="10" width="60" height="60" rx="14" fill="white" fillOpacity=".12" />
                <path d="M24 22v32h32" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="60" cy="57" r="5" fill="white" />
              </svg>
            </div>
          </div>
          <div className="mission__text">
            <h2 className="h-sec balance">Our Mission</h2>
            <p className="muted mission__p pretty">
              Our goal is to become a trusted technology partner for every client we work with. We earn
              that trust by taking the time to understand their business, identifying where technology can
              create the greatest impact, and building solutions that are practical, scalable, and aligned
              with their goals.
            </p>
            <p className="muted mission__p pretty">
              Through clear communication, honest guidance, reliable execution, and measurable results,
              we help clients feel confident that their technology investment is moving their business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Values
   ============================================================ */
const VALUES = [
  {
    icon: CatIcon.train,
    title: 'Clear communication',
    body: 'No jargon, no surprises. You always know where a project stands and why.',
  },
  {
    icon: CatIcon.shield,
    title: 'Honest guidance',
    body: "We recommend what's right for your business — even when it's not the biggest project.",
  },
  {
    icon: CatIcon.code,
    title: 'Solid engineering',
    body: 'Thoughtful, maintainable code built to last well beyond launch day.',
  },
  {
    icon: CatIcon.growth,
    title: 'Continuous improvement',
    body: 'Every project makes us better — we bring those lessons to the next one.',
  },
]

function Values() {
  return (
    <section className="section bg-alt">
      <div className="wrap">
        <div className="sechead">
          <h2 className="h-sec balance">What we stand for</h2>
          <p className="lead">
            Strong digital products come from clear communication, thoughtful design, and solid
            engineering. These principles guide every engagement.
          </p>
        </div>
        <div className="values">
          {VALUES.map((v, i) => (
            <Reveal className="value card" key={v.title} delay={i * 70}>
              <span className="iconbox">{v.icon}</span>
              <h3 className="h-card">{v.title}</h3>
              <p className="muted pretty">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Page
   ============================================================ */
export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <Mission />
      <Values />
      <FinalCTA />
    </>
  )
}
