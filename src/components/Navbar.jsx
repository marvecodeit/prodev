import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`nav-header${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-brand">Promise Ochornma</a>

        <button
          className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <a href="#about" onClick={close}>About</a>
          <a href="#projects" onClick={close}>Experience</a>
          <a href="#stack" onClick={close}>Stack</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <a
          href="/resume.pdf"
          className="nav-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default Navbar
