import { useState, useRef } from 'react'
import FinalCTA from '../components/FinalCTA'
import Reveal from '../components/Reveal'

/* ---- Data ---- */
const SERVICES = [
  {
    title: 'Full-Stack Web Application Development',
    short: 'Design and develop scalable, secure, and high-performance web applications.',
    items: ['Custom Web App Development (Frontend + Backend)', 'REST API & GraphQL Development', 'SaaS Product Development', 'Authentication Systems (JWT, OAuth)', 'Progressive Web Apps (PWA)', 'Cloud Deployment & Scaling'],
  },
  {
    title: 'System Architecture & Infrastructure Design',
    short: 'Engineer systems built for scale, security, and long-term performance.',
    items: ['Cloud Infrastructure Design (AWS, GCP, Azure)', 'API Architecture & Microservices', 'Monolith-to-Microservices Transition', 'Load Balancing & High Availability', 'CI/CD Pipeline Setup', 'DevOps Strategy'],
  },
  {
    title: 'Database Architecture & Management',
    short: 'Structured, optimized data systems built to last.',
    items: ['Database Design & Schema Planning', 'Performance Tuning & Index Optimization', 'Backup & Recovery Planning', 'Secure Data Storage', 'Cloud Database Setup', 'Ongoing Database Maintenance'],
  },
  {
    title: 'Data Migration & System Transitions',
    short: 'Move data and systems safely, without disrupting the business.',
    items: ['EMR to EMR migration', 'WordPress to Shopify migration', 'CRM migrations', 'Legacy system modernization', 'Hosting migration', 'Email marketing platform transitions'],
  },
  {
    title: 'Custom Website Design & Modern Development',
    short: 'High-performance, modern web experiences built on a solid base.',
    items: ['Custom UI/UX Design', 'Responsive & Mobile-Optimized Layouts', 'SEO-Optimized Structure', 'ADA Accessibility Compliance', 'Custom Animations & Interactive UI', 'CMS Integration'],
  },
  {
    title: 'E-Commerce Solutions & Platform Integration',
    short: 'Sell and scale online with custom commerce systems and integrations.',
    items: ['Automated payout systems', 'Revenue splitting logic', 'Inventory management systems', 'Accounting sync & reporting automation', 'POS integrations', 'Subscription platforms'],
  },
  {
    title: 'AI Integration & Intelligent Automation',
    short: 'Modern business, powered by practical, measurable AI.',
    items: ['AI Chatbots & Support Systems', 'OpenAI API Integrations', 'Predictive Analytics', 'AI Sales Assistants', 'Workflow Automation', 'AI Content & Marketing Tools'],
  },
  {
    title: 'Marketing Technology & Growth Systems',
    short: 'Technology that turns traffic into measurable growth.',
    items: ['Technical SEO', 'On-Page SEO', 'Schema Markup', 'Google Analytics 4 Setup', 'Conversion Tracking', 'Funnel Optimization'],
  },
  {
    title: 'Code Audits & Technical Reviews',
    short: 'An expert second opinion on your codebase and architecture.',
    items: ['Full Codebase Review', 'Security Vulnerability Assessment', 'Performance Bottleneck Identification', 'Refactoring Strategy', 'Architecture Evaluation', 'Technical Debt Assessment'],
  },
  {
    title: 'Technical & System Documentation',
    short: 'Clear documentation that makes systems easy to run and extend.',
    items: ['API Documentation', 'System Architecture Diagrams', 'Database Schema Documentation', 'Developer Onboarding Guides', 'Deployment & DevOps Documentation', 'SOP Documentation'],
  },
  {
    title: 'Staff Training & Technical Workshops',
    short: 'We empower teams to operate independently and confidently.',
    items: ['Platform Training (Shopify, WordPress, CRM systems)', 'Marketing Tool Training (Klaviyo, Mailchimp, Google Ads)', 'Internal Software Training', 'Developer Onboarding Workshops', 'Cybersecurity Best Practices', 'Workflow Automation Training'],
  },
  {
    title: 'Business Process Automation & Digital Transformation',
    short: 'We streamline operations and reduce overhead.',
    items: ['Workflow Automation (Zapier, Make)', 'CRM Automation', 'Lead Scoring Systems', 'Reporting Dashboards', 'Internal KPI Tracking', 'Digital Transformation Strategy'],
  },
]

const PLATFORMS = [
  { cat: 'Web Development',        logos: ['Next.js', 'Node.js', 'Flask', 'Tailwind CSS', 'React'] },
  { cat: 'Data & Infrastructure',  logos: ['MongoDB', 'Supabase', 'MySQL', 'PostgreSQL', 'Redis'] },
  { cat: 'Cloud & Hosting',        logos: ['Google Cloud', 'Vercel', 'Docker', 'AWS', 'Azure'] },
  { cat: 'AI & Automation',        logos: ['Claude', 'Gemini', 'OpenAI', 'Copilot', 'LangChain'] },
  { cat: 'Integrations',           logos: ['Stripe', 'QuickBooks', 'Amazon', 'Klaviyo', 'Shopify'] },
  { cat: 'Analytics & Monitoring', logos: ['Google Analytics', 'Power BI', 'Sentry', 'Datadog', 'Mixpanel'] },
]

/* ---- Icons ---- */
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
)
const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14" />
  </svg>
)
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 13 4 4L19 7" />
  </svg>
)
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

/* ---- Service card ---- */
function ServiceCard({ s }: { s: typeof SERVICES[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`svc${open ? ' open' : ''}`}>
      <div className="svc__head">
        <h3 className="svc__title">{s.title}</h3>
        <button
          className="svc__toggle"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label={open ? 'Collapse' : 'Expand'}
        >
          {open ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>

      {open ? (
        <ul className="svc__deliv">
          {s.items.map(item => (
            <li key={item}>
              <span className="svc__check"><CheckIcon /></span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="svc__short pretty">{s.short}</p>
      )}

      <span className="svc__mark" />
    </article>
  )
}

/* ---- Carousel ---- */
function ServiceList() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const idxRef = useRef(0)

  const step = (dir: number) => {
    const el = scrollerRef.current
    if (!el) return
    const cards = el.querySelectorAll<HTMLElement>('.svc')
    if (!cards.length) return
    const next = Math.max(0, Math.min(cards.length - 1, idxRef.current + dir))
    idxRef.current = next
    el.scrollTo({ left: cards[next].offsetLeft - el.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section className="section--tight" style={{ paddingTop: 0 }}>
      <div className="carousel">
        <div className="carousel__scroller" ref={scrollerRef}>
          {SERVICES.map(s => <ServiceCard key={s.title} s={s} />)}
        </div>
      </div>
      <div className="carousel__nav">
        <button className="carousel__btn" onClick={() => step(-1)} aria-label="Previous">
          <ChevronLeft />
        </button>
        <button className="carousel__btn" onClick={() => step(1)} aria-label="Next">
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}

/* ---- Dashboard widget ---- */
function Dashboard() {
  return (
    <div className="dash">
      <div className="dash__bar">
        <div className="dash__brand"><span className="d-mark" />LUMABYTE</div>
        <div className="dash__dots"><i /><i /><i /></div>
      </div>
      <div className="dash__hi">Good evening, Alex</div>
      <div className="dash__sub">Here's what's happening with your projects today.</div>
      <div className="dash__cards">
        <div className="dash__card">
          <div className="dash__klabel">Active Projects</div>
          <div className="dash__kval">24</div>
          <div className="dash__kbar">
            <i style={{ height: '40%' }} /><i style={{ height: '70%' }} />
            <i style={{ height: '55%' }} /><i style={{ height: '90%' }} />
          </div>
        </div>
        <div className="dash__card">
          <div className="dash__klabel">Deployments</div>
          <div className="dash__kval">7</div>
          <div className="dash__kbar">
            <i style={{ height: '60%' }} /><i style={{ height: '35%' }} />
            <i style={{ height: '80%' }} /><i style={{ height: '50%' }} />
          </div>
        </div>
        <div className="dash__card">
          <div className="dash__klabel">System Health</div>
          <div className="dash__health">
            <div className="dash__ring"><span>99.9%</span></div>
          </div>
        </div>
      </div>
      <div className="dash__panel">
        <div className="dash__plabel">Recent Activity</div>
        <div className="dash__row"><i />API service deployed to production<time>2m</time></div>
        <div className="dash__row"><i />Database backup completed<time>15m</time></div>
        <div className="dash__row"><i />New integration connected<time>1h</time></div>
        <div className="dash__row"><i />Analytics report generated<time>2h</time></div>
      </div>
    </div>
  )
}

/* ---- Platforms section ---- */
function Platforms() {
  return (
    <section className="section bg-alt">
      <div className="wrap">
        <div className="sechead left">
          <h2 className="h-sec balance">Platforms and Tools</h2>
          <p className="lead">We work across a modern, proven stack — and stay flexible to fit your existing systems.</p>
        </div>
        <div className="platforms">
          <div className="plat-rows">
            {PLATFORMS.map(row => (
              <div className="plat-row" key={row.cat}>
                <span className="plat-row__cat">{row.cat}</span>
                <div className="plat-row__logos">
                  {row.logos.map(name => (
                    <span key={name} className="plat-logo">{name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="plat-dash">
            <Dashboard />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---- Page ---- */
export default function Services() {
  return (
    <>
      <section className="section--tight" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Reveal as="h1" className="svc-title">Services</Reveal>
          <Reveal as="p" className="lead svc-sub pretty" delay={60}>
            End-to-end software services across the full lifecycle. Expand any card to see what's included.
          </Reveal>
        </div>
      </section>
      <ServiceList />
      <Platforms />
      <FinalCTA />
    </>
  )
}
