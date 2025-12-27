import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Tech Corp Inc.",
    role: "Senior Frontend Engineer",
    period: "2023 - Present",
    description: "Leading frontend architecture for a platform serving 2M+ users. Spearheaded migration to React 18 with 40% performance gains. Mentoring team of 5 engineers.",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    current: true
  },
  {
    company: "Creative Solutions",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built and maintained 8 client projects. Implemented CI/CD pipelines reducing deployment time by 60%. Led API design for 3 major products.",
    skills: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    current: false
  },
  {
    company: "StartUp X",
    role: "Frontend Developer",
    period: "2019 - 2021",
    description: "First frontend hire. Built entire UI from scratch. Collaborated directly with founders to define product direction and UX.",
    skills: ["React", "JavaScript", "CSS", "Figma"],
    current: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Career Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Building products that matter at companies pushing boundaries.
          </p>
        </motion.div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-transparent md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-2 w-4 h-4 rounded-full border-4 border-[var(--bg-primary)] ${
                exp.current 
                  ? 'bg-green-500 shadow-lg shadow-green-500/50' 
                  : 'bg-[var(--accent)]'
              } left-0 md:left-1/2 md:-translate-x-1/2`}>
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                )}
              </div>
              
              {/* Card */}
              <div className="glass-card p-6">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  <span className="text-xs font-mono text-[var(--accent)] mb-2">{exp.period}</span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-[var(--accent-secondary)] font-medium mb-3">{exp.company}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{exp.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
