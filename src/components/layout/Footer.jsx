import { Github, Linkedin } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    className="social-link"
    aria-label={label}
  >
    <Icon size={25} />
  </a>
);

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/leehongc", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/leehungchen/", icon: Linkedin, label: "LinkedIn" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Hong Builds. All rights reserved.
        </p>
        <div className="social-links">
          {socialLinks.map((link) => (
            <SocialLink 
              key={link.label} 
              {...link} 
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;