'use client';

import { ArrowUp } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-xl font-display font-bold tracking-tighter">
        RS<span className="text-accent">.</span>
      </div>
      
      <div className="text-sm font-mono text-foreground/60 uppercase tracking-wider text-center">
        © {new Date().getFullYear()} Rimjhim Shukla. All rights reserved.
      </div>

      <Magnetic>
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </Magnetic>
    </footer>
  );
}
