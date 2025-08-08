import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';
import Image from '../assets/Person005.png'
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: Image,
      review: "Outstanding work! The team delivered exactly what we needed on time and within budget. Their attention to detail and professional approach made the entire project seamless.",
      rating: 5,
      project: "E-commerce Platform Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, InnovateCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      review: "Exceptional service and remarkable results. They transformed our digital presence completely. The ROI has been incredible, and our conversion rates have doubled since launch.",
      rating: 5,
      project: "Digital Marketing Campaign"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, Creative Studios",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      review: "Working with this team was a game-changer for our business. They understood our vision perfectly and brought it to life with stunning design and flawless functionality.",
      rating: 4,
      project: "Brand Identity & Website Redesign"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CTO, DataFlow Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      review: "Impressive technical expertise and problem-solving skills. They tackled complex challenges with ease and delivered a robust solution that exceeded our expectations.",
      rating: 5,
      project: "Custom Software Development"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Operations Manager, GreenTech",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      review: "Professional, reliable, and innovative. They not only met our requirements but also suggested improvements that enhanced the overall project outcome significantly.",
      rating: 4,
      project: "Business Process Automation"
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "Startup Founder, AppVenture",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      review: "From concept to deployment, they guided us through every step. Their expertise in mobile development helped us launch a successful app that our users absolutely love.",
      rating: 5,
      project: "Mobile App Development"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="Testimonial-Title">What Our Clients Say</h2>
          <p className="Testimonial-subtitle">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                {testimonials[currentTestimonial].review}
              </p>
              <div className="rating">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <div className="project-tag">
                {testimonials[currentTestimonial].project}
              </div>
            </div>
            
            <div className="client-info">
              <div className="client-image">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                />
              </div>
              <div className="client-details">
                <h4 className="client-name">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="client-position">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={prevTestimonial}>
              &#8249;
            </button>
            <button className="carousel-btn next" onClick={nextTestimonial}>
              &#8250;
            </button>
          </div>

          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Grid View for Desktop */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-grid-item">
              <div className="grid-testimonial-content">
                <div className="grid-quote-icon">"</div>
                <p className="grid-testimonial-text">{testimonial.review}</p>
                <div className="grid-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="grid-project-tag">{testimonial.project}</div>
              </div>
              <div className="grid-client-info">
                <div className="grid-client-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="grid-client-details">
                  <h5 className="grid-client-name">{testimonial.name}</h5>
                  <p className="grid-client-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;