# Hong Builds - Personal Portfolio

A clean, modern portfolio website built with React and Tailwind CSS.

## Features

- Responsive design
- Clean and minimal UI
- Sections for:
  - About me
  - Portfolio projects
  - Contact form
- Custom Tailwind components
- Mobile-friendly navigation

## Built With

- React
- Tailwind CSS
- Lucide Icons
- Vite

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hong-builds.git
cd hong-builds
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

4. To build the project for production:
```bash
npm run build
```

5. (Optional) Preview the production build locally:
```bash
npm run preview
```

6. To deploy this site to GitHub pages:
```bash
npm run deploy
```

## Folder Structure
* `src/` - Source code containing components, styles, and assets
  * `components/` - React components (Header, Home, Contact, Footer)
  * `styles/` - CSS files including Tailwind custom classes
  * `App.jsx` - Main application component
  * `main.jsx` - Application entry point
* `public/` - Static assets available in the build
* `vite.config.js` - Vite configuration file