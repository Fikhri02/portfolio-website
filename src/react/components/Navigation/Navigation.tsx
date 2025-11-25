import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './Navigation.css';

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="gradient-text">Portfolio</span>
          </div>

          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection('hero')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
