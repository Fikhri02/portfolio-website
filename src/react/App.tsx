import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import ProjectsGallery from './components/Projects/ProjectsGallery';
import VueInReact from '@integration/VueInReact';

// Import Vue components
import SkillsShowcase from '@vue-components/components/Skills/SkillsShowcase.vue';
import AboutSection from '@vue-components/components/About/AboutSection.vue';
import ContactForm from '@vue-components/components/Contact/ContactForm.vue';

import '@styles/design-system.css';
import '@styles/animations.css';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      
      {/* React Components */}
      <Hero />
      
      {/* Vue Component - About Section */}
      <VueInReact component={AboutSection} />
      
      {/* Vue Component - Skills */}
      <VueInReact component={SkillsShowcase} />
      
      {/* React Component - Projects */}
      <ProjectsGallery />
      
      {/* Vue Component - Contact */}
      <VueInReact component={ContactForm} />
      
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2025 Alex Johnson. Built with React & Vue.
          </p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
