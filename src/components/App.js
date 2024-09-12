import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Portfolio from './Portfolio'; // Correctly importing Portfolio component

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? 'scrolled' : ''}`}>
        <span className="navbar-brand">My Portfolio</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <header id="home" className="hero-section text-center">
        <div className="hero-content">
          <h1 className="display-4">Hello there!</h1>
          <h2 className="display-5">My name is Ricky</h2>
          <p className="lead">I am a developer from Lake Worth, FL</p>
        </div>
      </header>

      <section id="about" className="section-about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-content">
            I am passionate about technology and design, with a strong background in software development. I enjoy working on a variety of projects including app design, web design, iOS/Android applications, and more. Let's collaborate and create something amazing together!
          </p>
        </div>
      </section>

      <Portfolio />

      <section id="contact" className="section-contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="section-content">
            Want to get in touch? Send me an email at <a href="mailto:Rickygould1997@icloud.com">Rickygould1997@icloud.com</a> 
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-social-icons">
            <a href="https://github.com/rgould2021" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/rickygould19/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </div>
          <p className="footer-text">Connect with me!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
