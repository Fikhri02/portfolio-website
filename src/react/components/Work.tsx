import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Complete re-architecture of a legacy platform to micro-frontends serving 2M+ daily users.',
    image: '🛒',
    color: 'from-cyan-500 to-blue-500',
    stats: { metric: '60%', label: 'Faster loads' },
    tech: ['React', 'TypeScript', 'AWS'],
    featured: true,
    details: {
      problem: 'Legacy monolith with 3.5s page loads and weekly deployment failures.',
      solution: 'Implemented Module Federation for independent team deployments, TanStack Query for data, feature flags for safe rollouts.',
      outcome: '$2.3M quarterly revenue increase from improved conversion rates.'
    }
  },
  {
    id: '2',
    title: 'Trading Dashboard',
    category: 'Performance',
    description: 'Real-time financial dashboard processing 5,000+ market updates per second at 60fps.',
    image: '📊',
    color: 'from-purple-500 to-pink-500',
    stats: { metric: '5K+', label: 'Updates/sec' },
    tech: ['Canvas', 'WebSockets', 'Workers'],
    featured: true,
    details: {
      problem: 'Legacy dashboard dropped frames, causing traders to miss critical price movements.',
      solution: 'Canvas API for charts, Web Workers for off-thread processing, custom ring buffer for throttling.',
      outcome: '85% reduction in missed trades, 40% improvement in user satisfaction.'
    }
  },
  {
    id: '3',
    title: 'Design System',
    category: 'UI/UX',
    description: 'Comprehensive component library with 80+ accessible components used across 12 products.',
    image: '🎨',
    color: 'from-orange-500 to-red-500',
    stats: { metric: '50%', label: 'Faster dev' },
    tech: ['React', 'Storybook', 'Figma'],
    featured: false,
    details: {
      problem: 'Inconsistent UI patterns and duplicated code across multiple products.',
      solution: 'Built accessible component library with Storybook documentation and visual regression testing.',
      outcome: '100% WCAG compliance, 90% adoption rate across engineering org.'
    }
  },
  {
    id: '4',
    title: 'AI Code Assistant',
    category: 'AI/ML',
    description: 'CLI tool using LLMs for intelligent code generation, refactoring, and documentation.',
    image: '🤖',
    color: 'from-green-500 to-teal-500',
    stats: { metric: '500+', label: 'Downloads' },
    tech: ['Node.js', 'OpenAI', 'CLI'],
    featured: false,
    details: {
      problem: 'Developers spending too much time on boilerplate and documentation.',
      solution: 'Built CLI tool with GPT-4 integration for code generation and auto-documentation.',
      outcome: 'Open sourced with 500+ downloads, used by 3 companies internally.'
    }
  }
];

const Work = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = projects.find(p => p.id === selectedId);

  return (
    <section id="work" className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="badge mb-4">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects that <span className="glow-text">deliver results</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl text-lg">
            A selection of work showcasing my approach to solving complex problems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedId(project.id)}
              className={`bento-card gradient-border cursor-pointer group ${
                project.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 blur-2xl rounded-full -translate-y-8 translate-x-8`} />
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl">{project.image}</span>
                  <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="mb-6 p-4 rounded-xl bg-[var(--bg)]/50 border border-[var(--border)]">
                  <div className="text-2xl font-bold glow-text">{project.stats.metric}</div>
                  <div className="text-xs text-[var(--text-muted)]">{project.stats.label}</div>
                </div>
                
                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>
                
                {/* Arrow */}
                <div className="mt-6 flex items-center text-[var(--accent)] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View case study
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{selected.image}</span>
                      <div>
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{selected.category}</span>
                        <h3 className="text-2xl font-bold">{selected.title}</h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="p-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Stat Card */}
                  <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-br ${selected.color} text-white`}>
                    <div className="text-4xl font-bold mb-1">{selected.stats.metric}</div>
                    <div className="text-white/80">{selected.stats.label}</div>
                  </div>

                  {/* Sections */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider mb-2">The Problem</h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{selected.details.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{selected.details.solution}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <h4 className="text-sm font-medium text-green-400 uppercase tracking-wider mb-2">Outcome</h4>
                      <p className="text-[var(--text)] leading-relaxed">{selected.details.outcome}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-8 pt-6 border-t border-[var(--border)]">
                    <h4 className="text-sm font-medium text-[var(--text-muted)] mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
