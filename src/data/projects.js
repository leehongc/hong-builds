// src/data/projects.js
const projectsData = [
  {
    title: 'Recipe Application',
    description: 'A full-stack recipe management application built with React, Node.js, Express, and Mongo. Features include user authentication, recipe creation, and search functionality.',
    image: 'https://placehold.co/400x250',
    technologies: ['React', 'Node.js', 'Express', 'Mongo'],
    link: 'https://your-project-url.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts. Built using React and integrates with the OpenWeather API.',
    image: 'https://placehold.co/400x250',
    technologies: ['React', 'OpenWeather API', 'TailwindCSS'],
    link: 'https://your-project-url.com'
  },
];

export const projects = projectsData.map((project, index) => ({
  id: index + 1,
  ...project
}));