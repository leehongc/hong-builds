import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
        <p className="text-center text-gray-600 mb-12">
          Here are some of my latest projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;