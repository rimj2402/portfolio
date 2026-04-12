'use client';

import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python (Strong)', 'Java (Basic)', 'JavaScript (Basic)', 'C++ (DSA)', 'SQL']
  },
  {
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'Pandas', 'NumPy', 'Matplotlib']
  },
  {
    title: 'Technologies & Tools',
    skills: ['Flask', 'FastAPI', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'MySQL', 'REST APIs']
  }
];

export default function Skills() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-display font-bold mb-16 uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="text-xl font-mono uppercase tracking-widest text-accent mb-8 border-b border-foreground/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 border border-foreground/20 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIndex * 0.2 + i * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
