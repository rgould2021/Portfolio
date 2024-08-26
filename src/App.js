import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <header className="hero-section text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-3">Hello there!</h1>
          <h2 className="display-5 mb-4">My name is Ricky</h2>
          <p className="lead mb-4">I am a developer from Lake Worth, FL</p>
          <a href="#contact" className="btn btn-light btn-lg">Let's Work Together</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="lead">I’m a passionate developer specializing in creating high-quality applications and websites. With a keen eye for detail and a drive for excellence, I strive to deliver outstanding results for all my clients.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What I Offer</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box text-center">
                <h3>App Design</h3>
                <p>Crafting intuitive and engaging mobile applications for iOS and Android platforms.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box text-center">
                <h3>Web Design</h3>
                <p>Designing modern and responsive websites to enhance your online presence.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box text-center">
                <h3>Software Development</h3>
                <p>Building robust and scalable software solutions tailored to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">My Work</h2>
          <p className="text-center">Showcase of selected projects will go here.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <div className="text-center mb-4">
            <a href="https://github.com/rgould2021" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FontAwesomeIcon icon={faGithub} className="fa-2x" />
            </a>
            <a href="https://www.linkedin.com/in/rickygould19/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
            </a>
          </div>
          <form className="text-center">
            <div className="form-group">
              <input type="text" className="form-control mb-3" placeholder="Your Name" />
              <input type="email" className="form-control mb-3" placeholder="Your Email" />
              <textarea className="form-control mb-3" rows="4" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn-light">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
