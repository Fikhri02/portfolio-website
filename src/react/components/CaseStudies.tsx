import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  overview: string;
  problem: string;
  role: string;
  solution: string;
  outcome: string;
  tech: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-Commerce Platform Migration',
    category: 'Architecture',
    overview: 'Led the migration of a legacy monolithic platform to micro-frontends, serving 2M+ daily users.',
    problem: '3.5s page loads, weekly deployment failures, 15+ teams unable to work independently.',
    role: 'Lead Architect • Team of 8',
    solution: 'Implemented Module Federation for micro-frontends, TanStack Query for data, feature flags for gradual rollout.',
    outcome: '60% faster loads • 15x more deployments • $2.3M revenue increase',
    tech: ['React', 'TypeScript', 'Module Federation', 'AWS'],
    image: '🏗️'
  },
  {
    id: '2',
    title: 'Real-time Trading Dashboard',
    category: 'Performance',
    overview: 'Built a high-performance dashboard processing 5,000+ market updates per second.',
    problem: 'Legacy dashboard dropped frames, traders missing price movements, $500K annual losses.',
    role: 'Senior Engineer • Performance Lead',
    solution: 'Canvas API for charts, Web Workers for processing, custom ring buffer for data throttling.',
    outcome: '5K updates/sec at 60fps • 85% fewer missed trades • 40% satisfaction increase',
    tech: ['React', 'Canvas', 'WebSockets', 'Web Workers'],
    image: '📊'
  },
  {
    id: '3',
    title: 'Design System & Component Library',
    category: 'Design System',
    overview: 'Created a comprehensive design system used across 12 products and 40+ developers.',
    problem: 'Inconsistent UI patterns, duplicated code, slow feature development, accessibility issues.',
    role: 'Tech Lead • 3 Engineers',
    solution: 'Built 80+ accessible components with Storybook docs, automated visual regression testing.',
    outcome: '50% faster development • 100% WCAG compliance • 90% adoption rate',
    tech: ['React', 'Storybook', 'Figma', 'Testing Library'],
    image: '🎨'
  }
];

const CaseStudies = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedStudy = caseStudies.find(s => s.id === selectedId);

  return (
    <section id="case-studies" className="section bg-[var(--bg-secondary)]/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Case studies showcasing complex problems and elegant solutions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card p-6 cursor-pointer group"
              onClick={() => setSelectedId(study.id)}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{study.image}</div>
              
              <span className="tag mb-3">{study.category}</span>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                {study.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                {study.overview}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {study.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-xs text-[var(--text-muted)] font-mono">{t}</span>
                ))}
              </div>
              
              <div className="flex items-center text-[var(--accent)] font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                View case study
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selectedStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-8 border-b border-[var(--border-color)]">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{selectedStudy.image}</span>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="p-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--accent)] text-[var(--text-muted)] hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <span className="tag mb-3">{selectedStudy.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedStudy.title}</h2>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <Section icon="🎯" title="The Problem" content={selectedStudy.problem} />
                  <Section icon="👤" title="My Role" content={selectedStudy.role} />
                  <Section icon="💡" title="Solution" content={selectedStudy.solution} />
                  
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span>✨</span>
                      <h4 className="font-bold text-green-500">Outcome</h4>
                    </div>
                    <p className="text-[var(--text-primary)] font-medium">{selectedStudy.outcome}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-[var(--text-muted)]">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.tech.map((t, i) => (
                        <span key={i} className="tag">{t}</span>
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

const Section = ({ icon, title, content }: { icon: string; title: string; content: string }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <span>{icon}</span>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-[var(--text-secondary)] leading-relaxed">{content}</p>
  </div>
);

export default CaseStudies;
