'use client';

import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Evertime Learning Pvt. Ltd.',
    role: 'Artificial Intelligence Intern',
    duration: 'April 2026 - Present',
    description: 'Working on the development, testing, and optimization of AI/ML models using Python, TensorFlow, and PyTorch. Collaborating with cross-functional teams to build solutions aligned with business needs.',
  },
  {
    company: 'Dr. A.P.J. Abdul Kalam Technical University',
    role: 'B.Tech in Computer Science',
    duration: 'Oct 2023 - July 2027',
    description: 'Focusing on Operating Systems, Data Structures, Analysis of Algorithms, Artificial Intelligence, and Machine Learning.',
  },
  {
    company: 'Open Source',
    role: 'GSSoC ’24 Contributor',
    duration: '2024',
    description: 'Contributed to various open-source projects, enhancing skills in Python, Java, C++, and DSA.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-display font-bold mb-24 uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <div className="relative border-l border-foreground/20 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[0.5px]">
          {experiences.map((exp, index) => {
            const isEven = exp.role.includes("B.Tech") ? true : index % 2 === 0;
            return (
              <motion.div 
                key={index}
                className={`relative mb-16 md:mb-24 pl-8 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-4 h-4 bg-accent rounded-full transform -translate-y-1/2 ${isEven ? 'left-[-8.5px] md:left-auto md:-right-[8.5px]' : 'left-[-8.5px] md:-left-[8.5px]'}`} />
                
                <div className="flex flex-col gap-2">
                  <span className="text-accent font-mono text-sm uppercase tracking-widest">{exp.duration}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">{exp.role}</h3>
                  <h4 className="text-lg text-foreground/60 font-medium mb-4">{exp.company}</h4>
                  <p className="text-foreground/80 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
