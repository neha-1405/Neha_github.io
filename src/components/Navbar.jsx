import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="nav">
      {/* FLOATING IOS GLASSMORPHISM CAPSULE DOCK */}
      <div className="nav__glass-container">
        {/* LINKS & MOBILE MENU PANEL */}
        <nav className={`nav__nav ${isOpen ? 'is-open' : ''}`} id="site-menu">
          <ul className="nav__links">
            <li className="rise" style={{ '--i': 2 }}>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="rise" style={{ '--i': 3 }}>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li className="rise" style={{ '--i': 4 }}>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="rise" style={{ '--i': 5 }}>
              <a href="#research" onClick={closeMenu}>Research</a>
            </li>
            <li className="rise" style={{ '--i': 6 }}>
              <a href="#experience" onClick={closeMenu}>Experience</a>
            </li>
            <li className="rise" style={{ '--i': 7 }}>
              <a href="mailto:nancyyy1405@gmail.com" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
          <div className="menu__cta-mobile">
            <a className="btn-dark menu__cta" href="mailto:nancyyy1405@gmail.com" onClick={closeMenu}>
              Contact
            </a>
            <a
              className="btn-dark menu__cta"
              href="Resume_Neha.pdf"
              download="Resume_Neha.pdf"
              style={{ background: '#2e7d32', color: '#fff' }}
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </div>
        </nav>

        {/* CTA BUTTONS (DESKTOP BAR) */}
        <div className="nav__cta rise" style={{ '--i': 6 }}>
          <a className="btn-dark" href="mailto:nancyyy1405@gmail.com">Contact</a>
          <a
            className="btn-dark"
            href="Resume_Neha.pdf"
            download="Resume_Neha.pdf"
            style={{ background: '#2e7d32', color: '#fff' }}
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* HAMBURGER BUTTON */}
      <button
        className="nav__toggle rise"
        style={{ '--i': 6 }}
        id="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="site-menu"
        onClick={toggleMenu}
      >
        <span className="nav__toggle-box" aria-hidden="true">
          <span className="bar bar--top"></span>
          <span className="bar bar--bot"></span>
        </span>
      </button>
    </header>
  );
}
