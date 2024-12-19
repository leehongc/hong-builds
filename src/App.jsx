import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Portfolio from './components/sections/Portfolio';
import Home from './components/sections/Home';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Home />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;