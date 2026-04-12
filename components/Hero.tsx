'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';

const roles = ['AI Developer', 'Python Developer', 'Creative Coder', 'Full Stack Engineer'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const headline = "I Design & Build Digital Experiences";
  const words = headline.split(" ");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="overflow-hidden mb-4">
          <motion.p
            className="text-accent font-mono text-sm md:text-base uppercase tracking-widest"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Hello, I'm Rimjhim Shukla
          </motion.p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tighter mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + i * 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        <div className="h-12 overflow-hidden mb-10">
          <motion.div
            key={currentRole}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xl md:text-3xl font-light text-foreground/70"
          >
            {roles[currentRole]}
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <Magnetic>
            <a href="#projects" className="block px-8 py-4 bg-foreground text-background font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform">
              View My Work
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="block px-8 py-4 border border-foreground/30 text-foreground font-bold uppercase tracking-wider rounded-full hover:bg-foreground/10 transition-colors">
              Contact Me
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        className="absolute bottom-12 right-6 md:right-12 flex items-center gap-3 bg-background/50 backdrop-blur-sm border border-foreground/10 px-4 py-2 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-wider">Available for work ✦</span>
      </motion.div>
    </section>
  );
}
