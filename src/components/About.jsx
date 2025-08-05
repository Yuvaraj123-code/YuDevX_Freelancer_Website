import React from 'react';
import '../styles/About.css'; // Ensure you have a CSS file for about styles
import aboutImage from '../assets/logo05.png'; // Replace with your actual image path

// Updated About component with better typography
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title">About Our Freelance Collective</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              We are a team of top-tier freelancers dedicated to delivering exceptional results. 
            </p>
            <p>
              With professionals from various fields, we provide comprehensive solutions tailored 
              to your specific business needs. Our collaborative approach ensures you get the 
              right expertise for every aspect of your project.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Global Clients</span>
              </div>
            </div>
            
            <div className="about-features">
              <h3 className="features-title">Why Choose Us</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> <strong>Expert Professionals</strong> - Carefully vetted talent in each field</li>
                <li><i className="fas fa-check-circle"></i> <strong>Quality Assurance</strong> - Rigorous quality control processes</li>
                <li><i className="fas fa-check-circle"></i> <strong>On-Time Delivery</strong> - 95% of projects delivered ahead of schedule</li>
                <li><i className="fas fa-check-circle"></i> <strong>Competitive Pricing</strong> - Premium quality at market-competitive rates</li>
              </ul>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <img src={aboutImage} alt="Our professional team working together" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;