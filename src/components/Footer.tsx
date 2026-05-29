import { Link } from 'react-router-dom'

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
  </svg>
)
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

function Mark() {
  return (
    <svg className="brand__mark" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <rect width="34" height="34" rx="9" fill="var(--accent)" />
      <path d="M11 8.5v13.5h9.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22.5" cy="10.5" r="2.6" fill="#fff" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div className="foot__brandcol">
            <Link to="/" className="foot__brand">
              <Mark /><span>Lumabyte</span>
            </Link>
          </div>
          <nav className="foot__nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="#">Case Studies</Link>
            <Link to="/services">Services</Link>
            <Link to="#">Contact</Link>
          </nav>
          <div className="foot__contact">
            <a href="mailto:hello@lumabyte.com"><MailIcon />hello@lumabyte.com</a>
            <a href="tel:+11234567890"><PhoneIcon />(123) 456-7890</a>
            <a href="#"><PinIcon />Remote-first · Worldwide</a>
          </div>
        </div>
        <div className="foot__bottom">
          <span>© {new Date().getFullYear()} Lumabyte. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
