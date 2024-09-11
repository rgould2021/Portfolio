import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="work" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="row">
          {/* Pug Post Project */}
          <div className="col-md-4">
            <div className="card">
              <img 
                src="/assets/screenshot1.png" 
                alt="Pug Post Screenshot" 
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Pug Post</h5>
                <p className="card-text">
                  Pug Post is a social media platform for pug lovers! Users can post pug-related content, upload images, and engage with the community by commenting and upvoting. It includes features like:
                  <ul>
                    <li>Create posts with a title, text, and image uploads</li>
                    <li>Home feed showing posts with upvotes and timestamps</li>
                    <li>Sort posts by creation time or upvotes</li>
                    <li>Search functionality by title</li>
                    <li>Individual post pages with comments and upvotes</li>
                    <li>Edit or delete your posts</li>
                  </ul>
                  Backend powered by Supabase for managing posts, comments, and upvotes.
                </p>
                <a 
                  href="https://pugpost.netlify.app/" 
                  className="btn btn-custom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Live Project
                </a>
                <a 
                  href="https://github.com/rgould2021/Pugsite" 
                  className="btn btn-secondary-custom mt-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Example of another project */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project Without Link</h5>
                <p className="card-text">Brief description of a project that does not have a public link available.</p>
                {/* No link, so the button won't appear */}
              </div>
            </div>
          </div>

          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
