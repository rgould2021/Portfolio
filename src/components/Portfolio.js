import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="work" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="row">
          {/* Example Project */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project Title 1</h5>
                <p className="card-text">Brief description of the project.</p>
                <a href="https://github.com/your-repo1" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
          </div>

          {/* Add more project cards here */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project Title 2</h5>
                <p className="card-text">Brief description of the project.</p>
                <a href="https://github.com/your-repo2" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
       
