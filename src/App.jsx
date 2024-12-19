import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Portfolio from './components/sections/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Home Section */}
        <Portfolio />
        {/* Contact Section */}
      </main>
      <Footer />
    </div>
  );
}

export default App;