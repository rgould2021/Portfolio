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
                  A platform for pug lovers to share content and interact. Users can create and manage posts, view a home feed of content, sort by time or upvotes, search by title, and engage through comments and upvotes. Front-end using React Native and back-end managed by Supabase.
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

          {/* LifePath Chatbot Project */}
          <div className="col-md-4">
            <div className="card">
              <img 
                src="/assets/LifePath.gif" 
                alt="LifePath Chatbot Screenshot" 
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">LifePath AI Chatbot</h5>
                <p className="card-text">
                  LifePath Chatbot is a universal AI chatbot application developed using React Native. It allows businesses to train the chatbot
                  on their specific datasets for seamless integration. Built with Firebase/Firestore for the backend/Authentication, Python for AI model training, and React Native to connect everything in between.
                </p>
                <a 
                  href="https://github.com/rgould2021/ChatBotAI" 
                  className="btn btn-custom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* NoteSnap Project */}
          <div className="col-md-4">
            <div className="card">
              <img 
                src="/assets/sprint1.gif" 
                alt="NoteSnap App Screenshot" 
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">NoteSnap</h5>
                <p className="card-text">
                  NoteSnap is a simple and intuitive note-taking app developed in Swift for iOS. It allows users to create, edit, organize, and search for notes quickly. Built with offline access, text formatting options, and an optional dark mode for ease of use.
                </p>
                <a 
                  href="https://github.com/rgould2021/Notesnap/tree/main/Notesnap" 
                  className="btn btn-custom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;
