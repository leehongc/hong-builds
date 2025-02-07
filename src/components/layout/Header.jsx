import { useState } from 'react';

const DesktopNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
        <li><a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
        <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>
  );
};

const MobileNav = ({ isMenuOpen }) => {
  if (!isMenuOpen) return null;
  
  return (
    <nav className="md:hidden mt-4">
      <ul className="flex flex-col space-y-4">
        <li><a href="#home" className="text-gray-600 hover:text-gray-900 block">Home</a></li>
        <li><a href="#portfolio" className="text-gray-600 hover:text-gray-900 block">Portfolio</a></li>
        <li><a href="#contact" className="text-gray-600 hover:text-gray-900 block">Contact</a></li>
      </ul>
    </nav>
  );
};

const HamburgerButton = ({ isMenuOpen, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="md:hidden"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      {isMenuOpen ? (
        <i className="fas fa-times text-2xl"></i>
      ) : (
        <i className="fas fa-bars text-2xl"></i>
      )}
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hong Builds</h1>
        
        <HamburgerButton 
          isMenuOpen={isMenuOpen} 
          onClick={toggleMenu} 
        />
        
        <DesktopNav />
      </div>

      <MobileNav isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;