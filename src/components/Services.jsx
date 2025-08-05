import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './common/SectionTitle';
import { services } from '../constants/services';
import '../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode,
  faPencilRuler,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';


const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const iconComponents = {
    'fa-laptop-code': faLaptopCode,
    'fa-pencil-ruler': faPencilRuler,
    'fa-mobile-alt': faMobileAlt
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.dataset.cardId;
            if (cardId) {
              setVisibleCards(prev => new Set([...prev, parseInt(cardId)]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleServiceClick = (service) => {
    // Handle service selection/navigation
    console.log('Service clicked:', service.title);
    // You can add navigation or modal logic here
  };

  const getCardClassName = (service, index) => {
    let className = 'service-card';
    
    // Add animation class if visible
    if (visibleCards.has(service.id)) {
      className += ' animate-in';
    }
    
    // Add premium class for highlighted services
    if (service.featured || index === Math.floor(services.length / 2)) {
      className += ' service-card-premium';
    }
    
    return className;
  };

  const getAnimationDelay = (index) => ({
    animationDelay: `${index * 0.1}s`
  });

  return (
    <section id="services" className="section services " ref={sectionRef}>
      <div className="container">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive solutions tailored to your business needs" 
        />
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={getCardClassName(service, index)}
              data-card-id={service.id}
              style={getAnimationDelay(index)}
              onMouseEnter={() => handleCardHover(service.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleServiceClick(service)}
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${service.title}`}
            >
              <div className="service-icon">
                <FontAwesomeIcon 
  icon={service.icon} 
  className="service-icon"
  style={{
    transform: hoveredCard === service.id ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease'
  }}
/>
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              {service.features && service.features.length > 0 && (
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      style={{
                        animationDelay: `${(index * 0.1) + (featureIndex * 0.1)}s`
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Optional CTA Button */}
              {service.cta && (
                <button 
                  className="service-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`CTA clicked for ${service.title}`);
                  }}
                  aria-label={`${service.cta} for ${service.title}`}
                >
                  {service.cta}
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* Optional Bottom CTA Section */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px',
          opacity: visibleCards.size > 0 ? 1 : 0,
          transform: visibleCards.size > 0 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h3 style={{ 
            color: 'white', 
            marginBottom: '16px',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}>
            Ready to get started?
          </h3>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            marginBottom: '32px',
            fontSize: '1.1rem'
          }}>
            Let's discuss how we can help transform your business
          </p>
          <button 
            className="service-cta"
            style={{
              padding: '16px 40px',
              fontSize: '1.1rem',
              borderRadius: '50px',
              bottom:'40px',
            }}
            onClick={() => {
              // Handle main CTA click
              console.log('Main CTA clicked');
            }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;