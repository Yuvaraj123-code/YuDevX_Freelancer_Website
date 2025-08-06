import React, { useState } from 'react';
import '../styles/Contact.css';
import db from "../firebaseConfig"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


   const [notification, setNotification] = useState({
    show: false,
    message: '',
    isSuccess: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contacts"), {
      ...formData,
      createdAt: Timestamp.now()
    });
     setNotification({
        show: true,
        message: "Thank you for your message! We will contact you soon.",
        isSuccess: true
      });
    // alert("Thank you for your message! We will contact you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' }); // reset
     setTimeout(() => {
        setNotification({...notification, show: false});
      }, 4000);
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Something went wrong. Please try again later.");
      setNotification({
        show: true,
        message: "Something went wrong. Please try again later.",
        isSuccess: false
      });
      
      // Hide notification after 4 seconds
      setTimeout(() => {
        setNotification({...notification, show: false});
      }, 4000);
  }
};


  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch to discuss your project</p>

          {notification.show && (
          <div className={`notification-popup ${notification.isSuccess ? 'success' : 'error'}`}>
            <div className="notification-content">
              <p>{notification.message}</p>
            </div>
          </div>
        )}
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>Chennai (600125),<br/>Tamil Nadu,India</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>yudevx@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <h3>Phone</h3>
              <p>+91-6309376010</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;