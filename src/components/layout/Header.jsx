const Header = () => {
    return (
      <header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Hong Builds</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;