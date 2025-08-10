import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

const Portfolio = () => {
  return (
    <section id="portfolio" className="dark-section">
      <div className="portfolio-container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-description">
          Here are some of my latest projects
        </p>
        <div className="portfolio-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;