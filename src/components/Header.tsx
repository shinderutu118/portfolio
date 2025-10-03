import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set initial theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''} theme-${theme}`}>
      <div className="header-container">
        <Link className="brand-logo" to="/" onClick={closeMenu}>
          <span className="brand-text">Rutuja Shinde</span>
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-menu-overlay" onClick={closeMenu}></div>
          <div className="nav-menu-content">
            <ul className="nav-links">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                  onClick={closeMenu}
                >
                  <span className="nav-icon">🏠</span>
                  <span className="nav-text">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/about' || location.pathname.startsWith('/about') ? 'active' : ''}`}
                  to="/about"
                  onClick={closeMenu}
                >
                  <span className="nav-icon">👨‍💼</span>
                  <span className="nav-text">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/skills' || location.pathname.startsWith('/skills') ? 'active' : ''}`}
                  to="/skills"
                  onClick={closeMenu}
                >
                  <span className="nav-icon">⚡</span>
                  <span className="nav-text">Skills</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/experience' || location.pathname.startsWith('/experience') ? 'active' : ''}`}
                  to="/experience"
                  onClick={closeMenu}
                >
                  <span className="nav-icon">💼</span>
                  <span className="nav-text">Experience</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/projects' || location.pathname.startsWith('/projects') ? 'active' : ''}`}
                  to="/projects"
                  onClick={closeMenu}
                >
                  <span className="nav-icon">🚀</span>
                  <span className="nav-text">Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/contact' || location.pathname.startsWith('/contact') ? 'active' : ''}`}
                  to="/contact"
                  onClick={closeMenu}
                >
                  <span className="nav-icon">📧</span>
                  <span className="nav-text">Contact</span>
                </Link>
              </li>
            </ul>
            
            <div className="nav-footer">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
