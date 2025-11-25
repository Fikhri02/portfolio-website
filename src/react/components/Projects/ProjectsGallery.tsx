import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioItemFactory from '@core/factories/PortfolioItemFactory';
import { sampleProjects } from '@core/data/portfolioData';
import type { IProject } from '@core/interfaces/IComponent';
import './ProjectsGallery.css';

const ProjectsGallery: React.FC = () => {
  const factory = new PortfolioItemFactory();
  const projects = factory.createMultiple<IProject>('project', sampleProjects);
  
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="projects-filter">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  {project.featured && (
                    <span className="featured-badge">⭐ Featured</span>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="project-technologies">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;
