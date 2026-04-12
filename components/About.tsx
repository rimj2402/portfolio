'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const techStack = ['Python', 'TensorFlow', 'PyTorch', 'C\+\+', 'Java', 'SQL', 'Flask', 'FastAPI', 'OpenCV', 'YOLO'];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 border-2 border-accent transform translate-x-6 translate-y-6 -skew-x-6 z-0" />
            <div className="absolute inset-0 bg-foreground/5 transform -skew-x-6 z-10 overflow-hidden">
              <Image 
                src="/images/profile.webp" 
                alt="Rimjhim Shukla" 
                fill 
                className="object-cover rounded-2xl hover:scale-105 transition-all duration-700"              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            
            <div className="space-y-6 text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I am an aspiring AI Engineer and Software Developer with a passion for building scalable backend systems, clean APIs, and data-driven decision logic for real-world production use cases.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Currently pursuing my B.Tech in Computer Science at Dr. A.P.J. Abdul Kalam Technical University, I specialize in Machine Learning, Deep Learning, and Python development.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                When I'm not coding, you can find me solving algorithmic challenges on LeetCode or exploring the latest advancements in Generative AI.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'DSA Problems', value: '160+' },
                { label: 'Hackathons', value: '3' }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <span className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">{stat.value}</span>
                  <span className="text-sm font-mono uppercase tracking-wider text-foreground/60">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-32 overflow-hidden border-y border-foreground/10 py-6 relative flex w-full">
        <motion.div 
          className="flex whitespace-nowrap gap-12 px-6 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-2xl md:text-4xl font-display font-bold text-foreground/20 uppercase tracking-widest">
              {tech} <span className="text-accent mx-4">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
