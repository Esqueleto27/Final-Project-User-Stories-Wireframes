import { useState } from 'react'

const navLinks = [
  {
    href: '#dashboard',
    label: 'Dashboard',
  },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm" aria-label="Pet QR main navigation">
      <div className="container py-2">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-primary" href="#home" onClick={closeMenu}>
          <span className="fs-3" aria-hidden="true">
            🐾
          </span>
          <span>Pet QR</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="petQrNavbar"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="petQrNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link fw-semibold" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-grid d-lg-block ms-lg-3">
            <a className="btn btn-primary fw-semibold" href="#login" onClick={closeMenu}>
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
