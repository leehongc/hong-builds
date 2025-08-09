import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' }
];

const NavLink = ({ href, children, className = '' }) => {
  const location = useLocation();
  
  // If we're on a blog post page, go back to homepage first
  if (location.pathname.startsWith('/blog/')) {
    return (
      <Link to={`/${href}`} className={`nav-link ${className}`}>
        {children}
      </Link>
    );
  }
  
  // Otherwise, use regular anchor links for same-page navigation
  return (
    <a href={href} className={`nav-link ${className}`}>
      {children}
    </a>
  );
};

const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <ul className="desktop-nav-list">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <NavLink href={href}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MobileNav = ({ isMenuOpen }) => {
  if (!isMenuOpen) return null;
  
  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav-list">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <NavLink href={href} className="block">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HamburgerButton = ({ isMenuOpen, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="hamburger-button"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-title">Hong Builds</Link>
        
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