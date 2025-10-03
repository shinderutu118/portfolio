import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Featured Projects</h2>
          </div>
        </div>
        <div className="row g-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="card-title h5 mb-3">{project.title}</h3>
                  <p className="card-text mb-3 flex-grow-1">{project.description}</p>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary">{project.role}</span>
                      <small className="text-muted">{project.duration}</small>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="badge bg-light text-dark border">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="badge bg-secondary">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/project/${project.id}`} 
                      className="btn btn-outline-primary w-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
