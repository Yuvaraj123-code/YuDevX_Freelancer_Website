import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">⚡</span>
              <span>Professional Solutions</span>
            </div>
            
            <h1 className="hero-title">
              Transform Your Business with
              <span className="gradient-text"> Expert Freelancers</span>
            </h1>
            
            <p className="hero-description">
              Connect with top-tier freelance professionals who deliver exceptional 
              results. From web development to digital marketing, we provide 
              comprehensive solutions that drive growth and innovation.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <span>Get Started Today</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"/>
                </svg>
              </button>
              
              <button className="btn btn-secondary">
                <svg className="btn-icon play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="hero-trust">
              <p className="trust-text">Trusted by leading companies</p>
              <div className="trust-logos">
                {/* <div className="trust-logo">Google</div>
                <div className="trust-logo">Microsoft</div>
                <div className="trust-logo">Amazon</div>
                <div className="trust-logo">Meta</div> */}
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              <div className="main-card">
                <div className="card-header">
                  <div className="card-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="card-title">Project Dashboard</div>
                </div>
                <div className="card-content">
                  <div className="progress-item">
                    <div className="progress-info">
                      <span className="progress-label">Web Development</span>
                      <span className="progress-value">95%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div className="progress-item">
                    <div className="progress-info">
                      <span className="progress-label">UI/UX Design</span>
                      <span className="progress-value">92%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div className="progress-item">
                    <div className="progress-info">
                      <span className="progress-label">Digital Marketing</span>
                      <span className="progress-value">80%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="floating-card card-1">
                <div className="mini-icon">📊</div>
                <div className="mini-text">Analytics</div>
              </div>
              
              <div className="floating-card card-2">
                <div className="mini-icon">🚀</div>
                <div className="mini-text">Growth</div>
              </div>
              
              <div className="floating-card card-3">
                <div className="mini-icon">⭐</div>
                <div className="mini-text">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;