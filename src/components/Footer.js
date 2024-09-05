import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container text-center">
        <div className="social-icons mb-3">
          <a href="https://github.com/rgould2021" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="fa-2x mx-3" />
          </a>
          <a href="https://www.linkedin.com/in/rickygould19/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x mx-3" />
          </a>
        </div>
        <p>© 2024 Ricky Gould. Connect with me!</p>
      </div>
    </footer>
  );
}

export default Footer;
