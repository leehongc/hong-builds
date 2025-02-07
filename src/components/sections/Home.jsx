const Home = () => {
    return (
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
            Hello, I'm a Software Engineer with a Biology Background
            </h1>
            <p className="hero-description">
            I'm passionate about bridging the gap between scientific research and public understanding. I love working with data and creating applications that make complex scientific concepts accessible to everyone.
            </p>
            {/* <div className="flex justify-center gap-4">
              <a 
                href="#portfolio" 
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                Contact Me
              </a>
            </div> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;