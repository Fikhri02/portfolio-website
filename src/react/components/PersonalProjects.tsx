import { motion } from 'framer-motion';

const projects = [
  {
    title: "React Component Library",
    description: "50+ accessible, customizable components built with TypeScript and documented with Storybook.",
    tech: ["React", "TypeScript", "Storybook"],
    stars: 245,
    github: "#",
    demo: "#"
  },
  {
    title: "AI Code Assistant",
    description: "CLI tool using GPT-4 for code generation, refactoring, and auto-documentation.",
    tech: ["Node.js", "OpenAI", "CLI"],
    stars: 128,
    github: "#",
    demo: "#"
  },
  {
    title: "DevTools Extension",
    description: "Browser extension for debugging React apps with state inspection and time travel.",
    tech: ["Chrome API", "React", "Redux"],
    stars: 89,
    github: "#",
    demo: "#"
  }
];

const PersonalProjects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Open Source</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Side Projects</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Things I build in my free time to explore new ideas.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card p-6 group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)]">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                
                <div className="flex items-center gap-1 text-[var(--text-muted)]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-sm font-mono">{project.stars}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag text-xs">{t}</span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-[var(--border-color)]">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
