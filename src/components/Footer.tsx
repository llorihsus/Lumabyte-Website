import { Link } from 'react-router-dom'
import { Icons } from './icons'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div className="foot__brandcol">
            <Link to="/" className="foot__brand">
              <img className="brand__mark" src="/images/lumabyte-logo.png" alt="Lumabyte" />
              <span>Lumabyte</span>
            </Link>
          </div>
          <nav className="foot__nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="foot__contact">
            <a href="mailto:info@lumatechlab.com">{Icons.mail}info@lumatechlab.com</a>
            <a href="tel:+15626066058">{Icons.phone}562 606 6058</a>
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
