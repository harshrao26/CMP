import React from 'react';
import './footer.css'; // Ensure to create a footer.css file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Phone: +91-9452052583</p>
          <p>Email: <a href="mailto:contact@techsseract.com">contact@techsseract.com</a></p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-twitter-fill"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-fill"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechSseract. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
