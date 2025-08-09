import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import BlogPost from './blog/BlogPost';
import Home from './components/sections/Home';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          {/* Individual blog post pages */}
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Homepage with all sections */}
          <Route path="/*" element={
            <>
              <Home />
              <Portfolio />
              <Blog />
              <Contact />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;