import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line">
        Made with <span className="heart">♥</span> by Shivam Arora for Lia Plus AI
      </div>
      <div className="footer-link">
        Learn About Me:{" "}
        <a
          href="https://aroratech.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          aroratech.tech
        </a>
      </div>
    </footer>
  );
};

export default Footer;
