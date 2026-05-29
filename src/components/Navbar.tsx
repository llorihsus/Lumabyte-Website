import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Mark() {
  return (
    <svg className="brand__mark" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <rect width="34" height="34" rx="9" fill="var(--accent)" />
      <path d="M11 8.5v13.5h9.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22.5" cy="10.5" r="2.6" fill="#fff" />
    </svg>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [megaOpen, setMegaOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const megaTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const aboutTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
    setAboutOpen(false)
  }, [pathname])

  const openMega = () => { clearTimeout(megaTimer.current); setMegaOpen(true) }
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 120) }
  const openAbout = () => { clearTimeout(aboutTimer.current); setAboutOpen(true) }
  const closeAbout = () => { aboutTimer.current = setTimeout(() => setAboutOpen(false), 120) }

  return (
    <header className="hdr">
      <div className="hdr__bar">
        <Link to="/" className="brand">
          <Mark />
          <span>Lumabyte</span>
        </Link>

        <nav className="nav">
          <Link to="/" className={`nav__link${pathname === '/' ? ' is-active' : ''}`}>Home</Link>
          <div className="has-mega" onMouseEnter={openAbout} onMouseLeave={closeAbout}>
            <Link to="/about" className={`nav__link${pathname.startsWith('/about') ? ' is-active' : ''}`}>About</Link>
          </div>
          <Link to="#" className="nav__link">Case Studies</Link>
          <div className="has-mega" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <Link to="/services" className={`nav__link${pathname.startsWith('/services') ? ' is-active' : ''}`}>Services</Link>
          </div>
        </nav>

        <div className="nav__right">
          <Link to="#" className="btn btn-primary">Get In Touch</Link>
          <button className="burger" aria-label="Open menu" onClick={() => setMobileOpen(o => !o)}>
            <span />
          </button>
        </div>
      </div>

      {/* About submenu */}
      <div className={`mega${aboutOpen ? ' open' : ''}`} onMouseEnter={openAbout} onMouseLeave={closeAbout}>
        <div className="mega__inner" style={{ gridTemplateColumns: '200px' }}>
          <div className="mega__col">
            <div className="mega__list">
              <Link to="/about" className="mega__item">About Us</Link>
              <Link to="#" className="mega__item">Careers</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services mega menu */}
      <div className={`mega${megaOpen ? ' open' : ''}`} onMouseEnter={openMega} onMouseLeave={closeMega}>
        <div className="mega__inner">
          <div className="mega__col">
            <h4>What We Do</h4>
            <div className="mega__list">
              <Link to="/services" className="mega__item">AI Integration & Automation</Link>
              <Link to="/services" className="mega__item">Full-Stack Development</Link>
              <Link to="/services" className="mega__item">Modernization</Link>
              <Link to="/services" className="mega__item">Software Development</Link>
            </div>
          </div>
          <div className="mega__col">
            <h4>Industries</h4>
            <div className="mega__list">
              <Link to="#" className="mega__item">Fintech & Insurance</Link>
              <Link to="#" className="mega__item">Healthcare</Link>
              <Link to="#" className="mega__item">Logistics & Supply Chain</Link>
              <Link to="#" className="mega__item">E-Commerce & Retail</Link>
              <Link to="#" className="mega__item">Education</Link>
            </div>
          </div>
          <div className="mega__col">
            <h4>Expertise</h4>
            <div className="mega__list">
              <Link to="/services" className="mega__item">Artificial Intelligence</Link>
              <Link to="/services" className="mega__item">Microsoft</Link>
              <Link to="/services" className="mega__item">Salesforce</Link>
              <Link to="/services" className="mega__item">Shopify</Link>
              <Link to="/services" className="mega__item">WordPress</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile${mobileOpen ? ' open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="#">Case Studies</Link>
        <Link to="/about">About</Link>
        <Link to="#">Careers</Link>
        <Link to="#">Contact</Link>
        <Link to="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16, display: 'inline-flex' }}>
          Get In Touch
        </Link>
      </div>
    </header>
  )
}
