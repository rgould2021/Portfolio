import React from 'react';

function Work() {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2>My Work</h2>
        <p>Here are some of the projects I've worked on. Feel free to browse through my portfolio to see the range of work I've done.</p>
        {/* Add your project details here */}
        <div className="row">
          {/* Example Project */}
          <div className="col-md-4">
            <div className="card">
              <img src="path-to-image" alt="Project 1" className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">Project Title</h3>
                <p className="card-text">Brief description of the project.</p>
                <a href="https://github.com/rgould2021/project-repo" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Repeat for more projects */}
        </div>
      </div>
    </section>
  );
}

export default Work;
