const ProjectCard = ({ project }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" // Increased height to h-64
          />
        </a>
        <div className="p-6"> {/* Added consistent padding around content */}
          <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-gray-600">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1.5 bg-gray-100 text-sm text-gray-700 rounded-full 
                           hover:bg-gray-200 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;