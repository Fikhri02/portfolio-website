import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'AWS', level: 75 },
];

const experience = [
  { year: '2023', role: 'Senior Frontend Engineer', company: 'Tech Corp' },
  { year: '2021', role: 'Full Stack Developer', company: 'Creative Solutions' },
  { year: '2019', role: 'Frontend Developer', company: 'StartUp X' },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="badge mb-4">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building for the <span className="glow-text">future</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bento-card h-full">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                I'm a software engineer with 5+ years of experience building web applications 
                that scale. I specialize in React, TypeScript, and cloud architecture.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                My approach combines technical excellence with user-centered design. 
                I believe the best solutions come from deeply understanding both 
                the problem space and the people using the product.
              </p>
              
              {/* Philosophy cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '✨', title: 'Clarity', desc: 'Code that reads like prose' },
                  { icon: '🚀', title: 'Speed', desc: 'Ship fast, iterate faster' },
                  { icon: '📊', title: 'Data', desc: 'Decisions backed by metrics' },
                  { icon: '⚡', title: 'Scale', desc: 'Built to grow' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[var(--bg)]/50 border border-[var(--border)]">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Skills & Experience */}
          <div className="space-y-6">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card"
            >
              <h3 className="text-lg font-semibold mb-6">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[var(--text-muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[var(--bg)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card"
            >
              <h3 className="text-lg font-semibold mb-6">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-sm font-mono text-[var(--accent)]">{exp.year}</span>
                    <div>
                      <h4 className="font-medium">{exp.role}</h4>
                      <p className="text-sm text-[var(--text-muted)]">{exp.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
