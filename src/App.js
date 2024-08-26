import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  return (
    <div className="container-fluid p-0">
      <header className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-3">Hello there!</h1>
          <h2 className="display-5 mb-4">My name is Ricky</h2>
          <p className="lead mb-4">I will be showcasing my projects and career highlights.</p>
          <p className="text-muted">Lake Worth, FL</p>
        </div>
      </header>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <div className="d-flex justify-content-center mb-2">
            <a href="https://github.com/rgould2021" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FontAwesomeIcon icon={faGithub} className="fa-2x" />
            </a>
            <a href="https://www.linkedin.com/in/rickygould19/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
            </a>
          </div>
          <p>Connect with me!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
