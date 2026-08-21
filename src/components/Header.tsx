import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="header-inner">
        <Link to="/" className="header-logo" aria-label="Liquid Ko Space home">
          <img
            src="/logo.png"
            alt="Liquid Ko Space"
            className="header-logo-img"
          />
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>

        <div className="header-cta">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-header"
            id="header-cta"
          >
            Start your order
          </a>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
