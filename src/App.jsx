import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="container mx-auto px-4 flex-1">
          <h1 className="text-3xl font-bold text-center py-8">
            Welcome to Hong Builds
          </h1>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;