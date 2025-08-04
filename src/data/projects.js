// src/data/projects.js
const projectsData = [
  {
    title: 'Building Bloq',
    description: 'A full-stack task management application with goal creation, task tracking, and social features. Users can create goals, manage tasks, follow other users\' task lists, and track completion progress with role-based permissions.',
    image: 'https://placehold.co/400x250',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Docker'],
    link: 'https://www.buildingbloq.com'
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