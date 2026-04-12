'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Animated Background Blob */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's Build<br/>Something<br/>Together.
            </motion.h2>
            
            <motion.p 
              className="text-xl text-foreground/70 font-light mb-12 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </motion.p>

            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="mailto:rimj2402@gmail.com" className="flex items-center gap-4 text-2xl font-display hover:text-accent transition-colors group w-fit">
                <Mail className="w-8 h-8" />
                rimj2402@gmail.com
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="https://linkedin.com/in/rimjhim-shukla-1842112b0" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-2xl font-display hover:text-accent transition-colors group w-fit">
                <Linkedin className="w-8 h-8" />
                LinkedIn
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="https://github.com/rimj2402" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-2xl font-display hover:text-accent transition-colors group w-fit">
                <Github className="w-8 h-8" />
                GitHub
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="w-full flex flex-col gap-8 bg-foreground/5 p-8 md:p-12 rounded-3xl border border-foreground/10 backdrop-blur-sm">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm uppercase tracking-wider text-foreground/60">Name</label>
                <input type="text" className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-light text-xl" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm uppercase tracking-wider text-foreground/60">Email</label>
                <input type="email" className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-light text-xl" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-sm uppercase tracking-wider text-foreground/60">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-light text-xl resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <Magnetic>
                <button type="button" className="w-full mt-4 py-4 bg-foreground text-background font-bold uppercase tracking-widest rounded-full hover:bg-accent transition-colors">
                  Send Message
                </button>
              </Magnetic>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
