import React, { useState, useRef, useEffect } from 'react'
import Reveal from '../components/Reveal'
import FinalCTA from '../components/FinalCTA'
import { CatIcon } from '../components/icons'

const CASE_INDUSTRIES = [
  { key: 'all',     label: 'All work',                 icon: CatIcon.arch },
  { key: 'fintech', label: 'Fintech & Insurance',       icon: CatIcon.fintech },
  { key: 'health',  label: 'Healthcare',                icon: CatIcon.health },
  { key: 'logi',    label: 'Logistics & Supply Chain',  icon: CatIcon.logi },
  { key: 'retail',  label: 'E-Commerce & Retail',       icon: CatIcon.retail },
  { key: 'edu',     label: 'Education',                 icon: CatIcon.edu },
]

const CASES = [
  {
    ind: 'edu', title: 'Bytewise STEM Lab', client: 'STEM education provider', year: '2024',
    summary: 'A full educational platform for a STEM lab — course catalog, summer-camp registration, class enrollment, and a competitions program, built to help young learners discover and grow real skills.',
    tags: ['Full-Stack Development', 'Educational Website'], result: 'End-to-end learning platform',
  },
  {
    ind: 'health', title: 'Skin Perfect Brothers', client: 'Medical aesthetics clinic', year: '2026',
    summary: 'Migrated a medical-aesthetics brand from WordPress to Shopify, rebuilding their treatment showcase and storefront for V-Lift, PDO threads, and wellness programs.',
    tags: ['E-Commerce', 'Platform Conversion'], result: 'WordPress → Shopify migration',
  },
  {
    ind: 'retail', title: 'Kamparts', client: 'Fitness equipment retailer', year: '2025',
    summary: 'A Shopify storefront for gym and fitness-equipment replacement parts — repair components, weights, and accessories organized for fast, reliable shopping across major brands.',
    tags: ['E-Commerce', 'Shopify Store'], result: 'Conversion-focused parts store',
  },
  {
    ind: 'retail', title: 'Antlers', client: 'Automotive accessory brand', year: '2025',
    summary: 'Designed and built the storefront for a festive Tesla accessory brand — model-compatibility selection, product pages, and cart, crafted to turn a seasonal product into a smooth buying experience.',
    tags: ['Full-Stack Development', 'E-Commerce', 'Shopify Store'], result: 'Launched DTC storefront',
  },
]

const GROUPS = CASE_INDUSTRIES
  .filter(i => i.key !== 'all')
  .map(i => ({ ...i, cases: CASES.filter(c => c.ind === i.key) }))
  .filter(g => g.cases.length > 0)

function CaseCard({ c }: { c: typeof CASES[0] }) {
  const label = CASE_INDUSTRIES.find(i => i.key === c.ind)?.label ?? ''
  return (
    <Reveal className="ccard card">
      <div className="ccard__top">
        <span className="ccard__ind">{label}</span>
        <span className="ccard__year">{c.year}</span>
      </div>
      <h3 className="ccard__title">{c.title}</h3>
      <p className="ccard__client">{c.client}</p>
      <p className="muted ccard__sum pretty">{c.summary}</p>
      <div className="ccard__tags">
        {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="ccard__result">
        <span className="ccard__rdot" />
        {c.result}
      </div>
    </Reveal>
  )
}

function CaseExplorer() {
  const [active, setActive] = useState('all')
  const refs = useRef<Record<string, HTMLDivElement | null>>({})
  const lockUntil = useRef(0)

  const scrollTo = (key: string) => {
    setActive(key)
    lockUntil.current = Date.now() + 700
    const el = key === 'all' ? refs.current.__top : refs.current[key]
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const io = new IntersectionObserver(() => {
      if (Date.now() < lockUntil.current) return
      let current = 'all'
      GROUPS.forEach(g => {
        const el = refs.current[g.key]
        if (el && el.getBoundingClientRect().top - 140 <= 0) current = g.key
      })
      setActive(current)
    }, { threshold: 0, rootMargin: '-140px 0px -60% 0px' })
    GROUPS.forEach(g => { const el = refs.current[g.key]; if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <section className="section">
      <div className="wrap">
        <div className="explorer" ref={el => { refs.current.__top = el }}>
          <aside className="explorer__nav">
            <div className="explorer__navinner">
              <h4 className="explorer__label">Industries</h4>
              {CASE_INDUSTRIES.map(i => (
                <button
                  key={i.key}
                  className={`explorer__item${active === i.key ? ' active' : ''}`}
                  onClick={() => scrollTo(i.key)}
                >
                  <span>{i.label}</span>
                  <span className="explorer__count">
                    {i.key === 'all' ? CASES.length : CASES.filter(c => c.ind === i.key).length}
                  </span>
                </button>
              ))}
            </div>
          </aside>
          <div className="explorer__list">
            {GROUPS.map(g => (
              <div key={g.key} className="casegroup" ref={el => { refs.current[g.key] = el }}>
                <div className="casegroup__head">
                  <h3 className="casegroup__title">{g.label}</h3>
                  <span className="casegroup__count">{g.cases.length}</span>
                </div>
                <div className="casegroup__grid">
                  {g.cases.map(c => <CaseCard key={c.title} c={c} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Cases() {
  return (
    <>
      <section className="subhero">
        <div className="subhero__glow" />
        <div className="wrap subhero__inner">
          <Reveal as="h1" className="display subhero__title balance" delay={60}>Our work, by industry</Reveal>
          <Reveal as="p" className="lead subhero__lead pretty" delay={120}>
            We build software for whatever a business needs — not just websites. Browse selected projects by the
            industries we've partnered with so far.
          </Reveal>
        </div>
      </section>
      <CaseExplorer />
      <FinalCTA />
    </>
  )
}
