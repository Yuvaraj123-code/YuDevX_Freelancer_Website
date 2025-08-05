import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';
import logo from "../assets/logo4.png";
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling for hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    if (window.location.pathname === '/') {
      // If already on home page, force reload
      e.preventDefault();
      window.location.href = '/';
    }
    handleNavClick();
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} >
      <div className="container">
        {/* Home Link - special handling */}
        {location.pathname === '/' ? (
          <a 
            href="/" 
            className="logo-link"
            onClick={handleHomeClick}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="logo-img"
              style={{ width: '100px', height: '100px' }}
            />
          </a>
        ) : (
          <Link 
            to="/" 
            className="logo-link"
            onClick={handleNavClick}
          >
            <img 
              src="/assets/logo.svg" 
              alt="Logo" 
              className="logo-img"
              style={{ width: '40px', height: '40px' }}
            />
          </Link>
        )}
        
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.path === '/' ? (
                  // Special handling for Home link
                  location.pathname === '/' ? (
                    <a 
                      href="/"
                      onClick={handleHomeClick}
                      className="active"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link 
                      to="/"
                      onClick={handleNavClick}
                      className={location.pathname === '/' ? 'active' : ''}
                    >
                      {link.title}
                    </Link>
                  )
                ) : (
                  // Normal handling for other links
                  <Link 
                    to={link.path}
                    onClick={handleNavClick}
                    className={
                      location.pathname + location.hash === link.path ? 'active' : ''
                    }
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;