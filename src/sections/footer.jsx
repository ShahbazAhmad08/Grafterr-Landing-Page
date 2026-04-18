import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Grafterr Logo" className="footer-logo" />
            <p>An award-winning, end-to-end restaurant technology & payments platform.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Products</h4>
              <a href="#">Point of Sale</a>
              <a href="#">Self-service</a>
              <a href="#">Kitchen Management</a>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Grafterr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;