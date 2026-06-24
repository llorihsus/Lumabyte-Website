import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="band-dark cta">
          <div className="glow" />
          <div className="cta__inner">
            <h2 className="h-sec balance">Ready to create?</h2>
            <p className="cta__sub pretty">
              Tell us about your project. We'll help you find the clearest path from idea to working software.
            </p>
            <Link to="/contact" className="btn btn-light btn-lg">
              Get In Touch
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
