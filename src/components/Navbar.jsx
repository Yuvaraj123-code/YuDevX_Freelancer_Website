import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';
import logo from "../assets/logo4.png";
import '../styles/Navbar.css';
import SignInModal from './SignInModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [showSignIn, setShowSignIn] = useState(false); // <- modal state

   useEffect(() => {
    setMobileMenuOpen(false);
    setShowSignIn(false);
  }, [location.pathname]);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.location.href = '/';
    }
    handleNavClick();
  };

  const toggleMobileMenu = () => {
    console.log('Mobile menu toggled:', !mobileMenuOpen); // Debug log
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
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
              style={{ width: '70px', height: '70px' }}
            />
          </a>
        ) : (
          <Link 
            to="/" 
            className="logo-link"
            onClick={handleNavClick}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="logo-img"
              style={{ width: '60px', height: '60px' }}
            />
          </Link>
        )}
        
        {/* Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  {/* If this link is the sign-in action, render a button to open modal */}
                  {(link.id === 'signin' || link.path === '/signin') ? (
                    <button
                      className="nav-action-btn"
                      onClick={() => {
                        setShowSignIn(true);
                        setMobileMenuOpen(false); // close mobile menu if open
                      }}
                      type="button"
                    >
                      {link.title}
                    </button>
                  ) : (
                    // existing routing logic for other links
                    link.path === '/' ? (
                      location.pathname === '/' ? (
                        <a href="/" onClick={handleHomeClick} className={location.pathname === '/' ? 'active' : ''}>
                          {link.title}
                        </a>
                      ) : (
                        <Link to="/" onClick={handleNavClick} className={location.pathname === '/' ? 'active' : ''}>
                          {link.title}
                        </Link>
                      )
                    ) : (
                      <Link to={link.path} onClick={handleNavClick} className={location.pathname + location.hash === link.path ? 'active' : ''}>
                        {link.title}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
          </nav>


        {/* Mobile Menu Button - Using HTML entities instead of Font Awesome */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
      <SignInModal open={showSignIn} onClose={() => setShowSignIn(false)} />

    </>
  );
};

export default Navbar;