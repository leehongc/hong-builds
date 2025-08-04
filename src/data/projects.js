// src/data/projects.js
const projectsData = [
  {
    title: 'Building Bloq',
    description: 'A full-stack task management application with goal creation, task tracking, and social features. Users can create goals, manage tasks, follow other users\' task lists, and track completion progress with role-based permissions.',
    image: 'https://picsum.photos/id/19/400/250',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Docker'],
    link: 'https://www.buildingbloq.com'
  },
  {
    title: 'Boobaloo\'s Kitchen',
    description: 'A modern recipe management web application built with React for sharing and organizing dessert and main dish recipes. Features responsive design, component-based architecture, and client-side routing.',
    image: 'https://picsum.photos/id/74/400/250',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'GitHub Pages'],
    link: 'https://leehongc.github.io/BooBaLoosKitchen/'
  },
  {
    title: 'Recipe Ingredient List Creator',
    description: 'A streamlined web tool for generating clean, well-formatted ingredient lists for recipes. Features ingredient autosuggest, multiple export formats (plaintext/CSV), responsive design, and dynamic ingredient management.',
    image: 'https://picsum.photos/id/57/400/250',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://leehongc.github.io/recipe_ingredients_formatter/'
  },
];

export const projects = projectsData.map((project, index) => ({
  id: index + 1,
  ...project
}));