import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <article className="project-details active" data-page="project-details">
        <header>
          <h2 className="h2 article-title">Project Not Found</h2>
        </header>
        <section className="project-not-found">
          <p>The project you're looking for doesn't exist.</p>
          <button className="back-btn" onClick={() => navigate('/portfolio')}>
            <ion-icon name="arrow-back-outline"></ion-icon>
            <span>Back to Portfolio</span>
          </button>
        </section>
      </article>
    );
  }

  return (
    <article className="project-details active" data-page="project-details">
      <header>
        <button className="back-btn" onClick={() => navigate('/portfolio')}>
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span>Back to Portfolio</span>
        </button>
        <h2 className="h2 article-title">{project.title}</h2>
      </header>

      <section className="project-detail-content">
        <div className="project-hero">
          <figure className="project-hero-img">
            <img src={project.image} alt={project.title} loading="lazy" />
          </figure>
        </div>

        <div className="project-info">
          <div className="info-section">
            <h3 className="h3 section-title">Overview</h3>
            <p className="section-text">{project.description}</p>
          </div>

          <div className="info-section">
            <h3 className="h3 section-title">Background</h3>
            <p className="section-text">{project.background}</p>
          </div>

          <div className="info-section">
            <h3 className="h3 section-title">Ideation</h3>
            <p className="section-text">{project.ideation}</p>
          </div>

          <div className="info-section">
            <h3 className="h3 section-title">Tech Stack</h3>
            <ul className="tech-stack-list">
              {project.techStack.map((tech, index) => (
                <li key={index} className="tech-stack-item">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="info-section">
            <h3 className="h3 section-title">Key Features</h3>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {(project.links.live || project.links.github) && (
            <div className="project-links">
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="globe-outline"></ion-icon>
                  <span>View Live Project</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                  <span>View on GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </article>
  );
}

export default ProjectDetails;
