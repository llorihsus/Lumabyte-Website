import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const [megaOpen, setMegaOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [aboutLeft, setAboutLeft] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const megaTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const aboutTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const aboutRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
    setAboutOpen(false)
  }, [pathname])

  const openMega = () => { clearTimeout(megaTimer.current); setMegaOpen(true) }
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 120) }
  const openAbout = () => {
    clearTimeout(aboutTimer.current)
    if (aboutRef.current) setAboutLeft(aboutRef.current.getBoundingClientRect().left)
    setAboutOpen(true)
  }
  const closeAbout = () => { aboutTimer.current = setTimeout(() => setAboutOpen(false), 120) }

  return (
    <header className="hdr">
      <div className="hdr__bar">
        <Link to="/" className="brand">
          <img className="brand__mark" src="/images/lumabyte-logo.png" alt="" aria-hidden="true" />
          <span>Lumabyte</span>
        </Link>

        <nav className="nav">
          <Link to="/" className={`nav__link${pathname === '/' ? ' is-active' : ''}`}>Home</Link>
          <div className="has-mega" onMouseEnter={openAbout} onMouseLeave={closeAbout}>
            <Link ref={aboutRef} to="/about" className={`nav__link${pathname.startsWith('/about') ? ' is-active' : ''}`}>About</Link>
          </div>
          <Link to="/case-studies" className={`nav__link${pathname === '/case-studies' ? ' is-active' : ''}`}>Case Studies</Link>
          <Link to="/services" className={`nav__link${pathname.startsWith('/services') ? ' is-active' : ''}`}>Services</Link>
        </nav>

        <div className="nav__right">
          <Link to="/contact" className="btn btn-primary btn-sm">Get In Touch</Link>
          <button className="burger" aria-label="Open menu" onClick={() => setMobileOpen(o => !o)}>
            <span />
          </button>
        </div>
      </div>

      {/* About submenu — column positioned under the trigger */}
      <div className={`mega${aboutOpen ? ' open' : ''}`} onMouseEnter={openAbout} onMouseLeave={closeAbout}>
        <div className="submenu">
          <div className="submenu__col" style={{ left: aboutLeft + 'px' }}>
            <div className="mega__list">
              <Link to="/about" className="mega__item">About Us</Link>
              <Link to="/careers" className="mega__item">Careers</Link>
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
              <Link to="/case-studies" className="mega__item">Fintech & Insurance</Link>
              <Link to="/case-studies" className="mega__item">Healthcare</Link>
              <Link to="/case-studies" className="mega__item">Logistics & Supply Chain</Link>
              <Link to="/case-studies" className="mega__item">E-Commerce & Retail</Link>
              <Link to="/case-studies" className="mega__item">Education</Link>
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
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
      </div>
    </header>
  )
}
