import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { CatIcon, Icons } from '../components/icons'

const PERKS = [
  { icon: CatIcon.cloud,   title: 'Remote-first',       body: 'Work from wherever you do your best thinking — we\'ve been remote since day one.' },
  { icon: CatIcon.code,    title: 'Real ownership',      body: 'Small team, big impact. Your work ships and shapes how we build.' },
  { icon: CatIcon.train,   title: 'Always learning',     body: 'Every project sharpens your skills across new tools, stacks, and industries.' },
  { icon: CatIcon.shield,  title: 'Honest culture',      body: 'Clear expectations, straight talk, and respect for your time and growth.' },
]

const ROLES = [
  {
    title: 'Full-Stack Engineer', type: 'Remote & In-person',
    body: 'Build web applications end to end across our client projects, from database to interface.',
  },
  {
    title: 'AI / ML Engineer', type: 'Remote & In-person',
    body: 'Design and ship practical AI integrations, agents, and automation for real business workflows.',
  },
  {
    title: 'Product Designer', type: 'Remote & In-person',
    body: 'Shape clean, usable interfaces and help define the design language across our work.',
  },
]

function Perks() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sechead">
          <h2 className="h-sec balance">Why work at Lumabyte</h2>
          <p className="lead">We're building a place where good engineers and designers can do meaningful work without the noise.</p>
        </div>
        <div className="values">
          {PERKS.map((p, i) => (
            <Reveal className="value card" key={p.title} delay={i * 70}>
              <span className="value__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h-card">{p.title}</h3>
              <p className="muted pretty">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Roles() {
  return (
    <section className="section bg-alt">
      <div className="wrap">
        <div className="sechead left">
          <h2 className="h-sec balance">Open roles</h2>
          <p className="lead">Don't see a perfect fit? We're always glad to meet talented people — reach out and tell us what you do best.</p>
        </div>
        <div className="roles">
          {ROLES.map((r, i) => (
            <Reveal className="role card" key={r.title} delay={i * 70}>
              <div className="role__main">
                <h3 className="role__title">{r.title}</h3>
                <p className="muted role__body pretty">{r.body}</p>
              </div>
              <div className="role__side">
                <span className="role__type">{r.type}</span>
                <Link
                  to={`/contact?type=job&role=${encodeURIComponent(r.title)}`}
                  className="btn btn-ghost role__apply"
                >
                  Apply {Icons.arrow}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Careers() {
  return (
    <>
      <section className="subhero">
        <div className="subhero__glow" />
        <div className="wrap subhero__inner">
          <Reveal as="h1" className="display subhero__title balance" delay={60}>Join Our Team</Reveal>
          <Reveal as="p" className="lead subhero__lead pretty" delay={120}>
            We're a small, fast-growing team that cares about craft, clear communication, and doing right by our clients.
            If that sounds like you, we'd love to talk.
          </Reveal>
        </div>
      </section>
      <Perks />
      <Roles />
    </>
  )
}
