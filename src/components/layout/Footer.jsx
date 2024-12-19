const Footer = () => {
    return (
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Hong Builds. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-bluesky text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;