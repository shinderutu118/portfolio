import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/projects" replace />;
  }

  const project = getProjectById(id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="project-detail">
      <div className="project-hero">
        <div className="container">
          <Link to="/" className="back-btn">
            ← Back to Portfolio
          </Link>
          <h1>{project.title}</h1>
          <p className="project-meta">
            <span>{project.role}</span> | <span>{project.duration}</span>
            {project.company && <span> | {project.company}</span>}
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          <section className="project-overview">
            <h2>Overview</h2>
            <p>{project.fullDescription}</p>
          </section>

          <section className="project-technologies">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          <section className="project-features">
            <h2>Key Features</h2>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="project-challenges">
            <h2>Challenges & Solutions</h2>
            <ul className="challenges-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>

          {(project.liveUrl || project.githubUrl) && (
            <section className="project-links">
              <h2>Project Links</h2>
              <div className="links-container">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn primary">
                    View Live Project
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn secondary">
                    View on GitHub
                  </a>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
