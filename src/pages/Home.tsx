import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import FinalCTA from '../components/FinalCTA'
import { Icons, CatIcon } from '../components/icons'

/* ============================================================
   Hero
   ============================================================ */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="hero__grid" />
      <div className="wrap hero__inner">
        <Reveal as="h1" className="display hero__title balance">
          Software that moves your<br /><span className="hero__accentword">business forward</span>
        </Reveal>
        <Reveal as="p" className="lead hero__lead pretty" delay={120}>
          We design, build, and modernize software for companies across industries.
        </Reveal>
        <Reveal className="hero__cta" delay={120}>
          <Link to="/contact" className="btn btn-primary">
            Connect With Us
            {Icons.arrow}
          </Link>
        </Reveal>
      </div>
      <div className="hero__scroll">
        <span>Scroll to explore</span>
        <i />
      </div>
    </section>
  )
}

/* ============================================================
   Stats
   ============================================================ */
const STATS = [
  { v: '10+',  l: 'Projects delivered' },
  { v: '7',    l: 'Industries served' },
  { v: '98%',  l: 'Client satisfaction' },
  { v: '<24h', l: 'Avg. response time' },
]

function Stats() {
  return (
    <section className="section--tight stats-band">
      <div className="wrap">
        <div className="stats">
          {STATS.map((s, i) => (
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
   What We Do (accordion)
   ============================================================ */
const WHATWEDO = [
  {
    title: 'AI Integration & Automation',
    icon: CatIcon.ai,
    blurb: 'Bring AI into the core of your operations — practical, measurable, and built around the way your team actually works.',
  },
  {
    title: 'Full-Stack Development',
    icon: CatIcon.code,
    blurb: 'End-to-end engineering of web and application products — scalable, secure, and high-performance from database to interface.',
  },
  {
    title: 'Modernization',
    icon: CatIcon.migrate,
    blurb: 'Bring legacy systems into the present without disrupting the business that depends on them.',
  },
  {
    title: 'Software Development',
    icon: CatIcon.design,
    blurb: 'Custom software built for whatever your business needs — from internal tools to customer-facing platforms.',
  },
]

function WhatWeDo() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section">
      <div className="wrap">
        <div className="sechead left">
          <h2 className="h-sec balance">What we do</h2>
          <p className="lead">From a single integration to a full platform, we work across the entire software lifecycle. Expand any area to see how we help.</p>
        </div>
        <div className="acc">
          {WHATWEDO.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.title} className={`acc__row${isOpen ? ' open' : ''}`}>
                <button
                  className="acc__head"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="acc__ic">{item.icon}</span>
                  <span className="acc__title">{item.title}</span>
                  <span className="acc__toggle">{isOpen ? Icons.minus : Icons.plus}</span>
                </button>
                <div className="acc__panel">
                  <div className="acc__panelinner">
                    <p className="acc__blurb pretty">{item.blurb}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Why Partner (zigzag lifecycle)
   ============================================================ */
function WhyDots() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, dpr = Math.min(2, window.devicePixelRatio || 1)
    let dots: { x: number; baseY: number; r: number; a: number; sp: number; amp: number; wl: number; ph: number }[] = []
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#2563EB'

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width; h = r.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(320, Math.max(140, (w * h) / 5200)))
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        baseY: Math.random() * h,
        r: 1 + Math.random() * 2,
        a: 0.25 + Math.random() * 0.5,
        sp: 0.4 + Math.random() * 1.1,
        amp: 6 + Math.random() * 22,
        wl: 0.004 + Math.random() * 0.01,
        ph: Math.random() * Math.PI * 2,
      }))
    }
    resize()
    window.addEventListener('resize', resize)

    let raf: number, t = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      t += 0.016
      for (const d of dots) {
        d.x += d.sp
        if (d.x > w + 12) d.x = -12
        const y = d.baseY + Math.sin(d.x * d.wl + t * 1.6 + d.ph) * d.amp
        const tw = 0.7 + 0.3 * Math.sin(t * 3 + d.ph)
        ctx.globalAlpha = d.a * tw
        ctx.fillStyle = accent
        ctx.beginPath()
        ctx.arc(d.x, y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    if (reduce) { draw(); cancelAnimationFrame(raf) } else { draw() }

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])
  return <canvas ref={ref} className="why-dots" aria-hidden="true" />
}
const STAGES = [
  { title: 'Discover', icon: CatIcon.train,  body: 'We learn your goals, constraints, and vision through in-depth discovery.' },
  { title: 'Plan',     icon: CatIcon.arch,   body: 'We shape a clear roadmap and strategy aligned to real business outcomes.' },
  { title: 'Build',    icon: CatIcon.code,   body: 'We design and engineer collaboratively, keeping you in the loop throughout.' },
  { title: 'Launch',   icon: CatIcon.migrate, body: 'We deploy smoothly with full documentation and a clean, confident handoff.' },
  { title: 'Evolve',   icon: CatIcon.auto,   body: 'We support, measure, and improve — and the partnership keeps moving forward.' },
]

function WhyPartner() {
  return (
    <section className="section bg-alt why-sec">
      <WhyDots />
      <div className="wrap">
        <div className="sechead">
          <h2 className="h-sec balance">Why partner with us</h2>
          <p className="lead">We don't just start and finish a project — we work as an ongoing technology partner across a continuous lifecycle of discovery, delivery, and improvement.</p>
        </div>
        <div className="zz">
          {STAGES.map((s, i) => (
            <React.Fragment key={s.title}>
              <Reveal className={`zz__card card ${i % 2 ? 'is-down' : 'is-up'}`} delay={i * 80}>
                <h3 className="zz__title">{s.title}</h3>
                <p className="muted zz__body pretty">{s.body}</p>
              </Reveal>
              {i < STAGES.length - 1 && (
                <span className={`zz__arrow ${i % 2 ? 'to-up' : 'to-down'}`} aria-hidden="true">
                  <svg className="zz__curve" viewBox="0 0 48 96" fill="none">
                    <path className="zz__curveline"
                      d={i % 2 ? 'M4 84 C 22 84 24 30 44 14' : 'M4 14 C 22 14 24 68 44 84'}
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path
                      d={i % 2 ? 'M32 16 L44 14 L40 25' : 'M32 82 L44 84 L40 73'}
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Industry Case Studies teaser
   ============================================================ */
const INDUSTRY_CARDS = [
  { name: 'Education',               img: '/images/edu-card.png' },
  { name: 'Healthcare',              img: '/images/slot-indx-health.webp' },
  { name: 'E-Commerce & Retail',     img: '/images/retail-card.png' },
  { name: 'Fintech & Insurance',     img: '/images/fintech-card-2.png' },
  { name: 'Logistics & Supply Chain', img: '/images/logi-card.png' },
]

function CasesTeaser() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="indx-box card">
          <div className="indx__head">
            <h2 className="h-sec balance">Industry-specific software experience</h2>
            <Link to="/case-studies" className="btn btn-primary">
              View case studies
              {Icons.arrow}
            </Link>
          </div>
          <div className="indx__grid">
            {INDUSTRY_CARDS.map(c => (
              <Link className="indx__card" to="/case-studies" key={c.name}>
                <img className="indx__img" alt={c.name} src={c.img} />
                <div className="indx__overlay" />
                <div className="indx__content">
                  <h3 className="indx__name">{c.name}</h3>
                  <span className="indx__more">Learn more {Icons.arrow}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Services preview (sticky split)
   ============================================================ */
const SERVICES_PREVIEW = [
  { title: 'Full-Stack Web App Development',              icon: CatIcon.code,    tags: ['Scalable', 'Secure'] },
  { title: 'System Architecture & Infrastructure Design', icon: CatIcon.arch,    tags: ['Resilient', 'High-performance'] },
  { title: 'Database Architecture & Management',          icon: CatIcon.db,      tags: ['Structured', 'Fast queries'] },
  { title: 'Data Migrations & System Transitions',        icon: CatIcon.migrate, tags: ['Zero-downtime', 'Safe'] },
  { title: 'Custom Website Design & Modern Development',  icon: CatIcon.design,  tags: ['SEO-ready', 'Fast loading'] },
  { title: 'E-Commerce Solutions & Platform Integration', icon: CatIcon.cart,    tags: ['Conversion-focused', 'Scalable'] },
  { title: 'AI Integration & Intelligent Automation',     icon: CatIcon.ai,      tags: ['Smart', 'Automated'] },
  { title: 'Marketing Technology & Growth Systems',       icon: CatIcon.growth,  tags: ['Analytics', 'Automation'] },
  { title: 'Code Audits & Technical Reviews',             icon: CatIcon.audit,   tags: ['Thorough', 'Actionable'] },
  { title: 'Technical & System Documentation',            icon: CatIcon.doc,     tags: ['Clear', 'Maintainable'] },
  { title: 'Staff Training & Technical Workshops',        icon: CatIcon.train,   tags: ['Hands-on', 'Tailored'] },
  { title: 'Business Process Automation & Digital Transformation', icon: CatIcon.auto, tags: ['Efficient', 'Modern'] },
]

function ServicesPreview() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="spv-split">
          <div className="spv-aside">
            <div className="spv-aside__inner">
              <h2 className="h-sec balance">Get high-quality services</h2>
              <p className="lead">Engineered to scale with your business.</p>
              <Link to="/services" className="btn btn-primary">
                Explore our services
                {Icons.arrow}
              </Link>
            </div>
          </div>
          <div className="spv-grid">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal className="spv card" key={s.title} delay={i % 2 * 60}>
                <span className="iconbox">{s.icon}</span>
                <h3 className="spv__name">{s.title}</h3>
                <div className="spv__tags">
                  {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Testimonials
   ============================================================ */
const TESTIMONIALS = [
  {
    quote: "Lumabyte felt like an extension of our own team. They understood our business before writing a line of code, and it showed in the result.",
    name: 'Operations Lead', org: 'Fintech platform', initials: 'FP',
  },
  {
    quote: "The modernization project they led took a system we were afraid to touch and turned it into something we actually enjoy building on.",
    name: 'Engineering Manager', org: 'Logistics company', initials: 'LC',
  },
  {
    quote: "Clear communication, honest timelines, and software that just works. They've become our default technology partner.",
    name: 'Founder', org: 'Healthcare startup', initials: 'HS',
  },
]

function Testimonials() {
  return (
    <section className="section bg-alt">
      <div className="wrap">
        <div className="sechead">
          <h2 className="h-sec balance">What our clients say</h2>
          <p className="lead">We measure success by the long-term partnerships we build. Here's what working with us feels like.</p>
        </div>
        <div className="quotes">
          {TESTIMONIALS.map((q, i) => (
            <Reveal className="quote card" key={i} delay={i * 80}>
              <p className="quote__mark">&ldquo;</p>
              <p className="quote__text pretty">{q.quote}</p>
              <div className="quote__who">
                <span className="quote__avatar">{q.initials}</span>
                <div>
                  <div className="quote__name">{q.name}</div>
                  <div className="quote__org">{q.org}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Trusted by
   ============================================================ */
const LOGOS = ['Northwind', 'Vertex Pay', 'Carewell', 'Shipline', 'Lumen Retail', 'Scholar', 'Atlas Bank', 'Forge']

function TrustedBy() {
  return (
    <section className="section--tight trusted">
      <div className="wrap">
        <p className="trusted__label">Trusted by teams across industries</p>
        <div className="trusted__row">
          {LOGOS.map(l => <span key={l} className="trusted__logo">{l}</span>)}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Page
   ============================================================ */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhatWeDo />
      <WhyPartner />
      <CasesTeaser />
      <ServicesPreview />
      <Testimonials />
      <TrustedBy />
      <FinalCTA />
    </>
  )
}
