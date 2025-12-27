import { motion } from 'framer-motion';

const principles = [
  {
    icon: "✨",
    title: "Clarity First",
    description: "Code should read like well-written prose. I optimize for the next developer who'll maintain it."
  },
  {
    icon: "🚀",
    title: "Ship Incrementally",
    description: "Small, frequent releases with feature flags beat big-bang deployments every time."
  },
  {
    icon: "📊",
    title: "Data-Driven",
    description: "Instrument everything. Let data guide decisions, not assumptions or opinions."
  },
  {
    icon: "⚡",
    title: "Automate Everything",
    description: "If it's done twice, automate it. CI/CD, testing, and deploys should just work."
  }
];

const TechnicalPhilosophy = () => {
  return (
    <section id="philosophy" className="section bg-[var(--bg-secondary)]/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Core principles that guide my engineering decisions.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card p-6 group"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalPhilosophy;
