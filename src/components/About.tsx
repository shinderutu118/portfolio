import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">About Me</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card">
              <div className="card-body p-5">
                <p className="lead mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          Full Stack Developer with 2+ years of experience in building responsive, scalable web applications using
                  React.js and Angular, and 8 months of backend development experience with Node.js and MongoDB. Skilled
                  in API integration, performance optimization, and writing clean, maintainable code. Passionate about
                  delivering seamless user experiences and collaborating with cross-functional teams to build impactful
                  products.
                </p>
                
                <div className="row mt-5">
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <svg width="24" height="24" fill="currentColor" className="text-primary">
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Email:</strong>
                        <br/>
                        <span className="text-muted">rutujabshinde23@gmail.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <svg width="24" height="24" fill="currentColor" className="text-primary">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Location:</strong>
                        <br/>
                        <span className="text-muted">Kaspate Wasti,Wakad,411057</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <svg width="24" height="24" fill="currentColor" className="text-primary">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      </div>
                      <div>
                        <strong>LinkedIn:</strong>
                        <br/>
                        <a href="https://www.linkedin.com/in/rutuja-shinde-452732a29" target="_blank" className="text-primary text-decoration-none">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
