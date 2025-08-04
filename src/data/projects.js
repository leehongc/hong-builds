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
    title: 'Recipe Ingredient List Creator',
    description: 'A streamlined web tool for generating clean, well-formatted ingredient lists for recipes. Features ingredient autosuggest, multiple export formats (plaintext/CSV), responsive design, and dynamic ingredient management.',
    image: 'https://placehold.co/400x250',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://leehongc.github.io/recipe_ingredients_formatter/'
  },
];

export const projects = projectsData.map((project, index) => ({
  id: index + 1,
  ...project
}));