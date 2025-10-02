import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <a href="mailto:your.email@example.com" className="cta-button">Get In Touch</a>
        <div className="social-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;