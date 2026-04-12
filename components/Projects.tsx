'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AyuSutra',
    subtitle: 'Nutrition Decision Engine',
    description: 'Designed logic to process daily meal inputs and analyze nutrient gaps using rule-based and ML-assisted approaches. Built backend services returning structured JSON responses.',
    tech: ['Python', 'Machine Learning', 'REST APIs'],
    image: 'https://picsum.photos/seed/ayusutra/800/600?grayscale',
    featured: true,
  },
  {
    title: 'Threat Detection System',
    subtitle: 'Real-time Monitoring',
    description: 'Developed a real-time object detection system using YOLO and OpenCV to detect weapons and suspicious activities from video feeds.',
    tech: ['YOLO', 'OpenCV', 'Deep Learning'],
    image: 'https://picsum.photos/seed/threat/800/600?grayscale',
    featured: false,
  },
  {
    title: 'Face Recognition Attendance',
    subtitle: 'Automated System',
    description: 'Created an automated attendance system using facial recognition. Developed REST APIs using FastAPI and integrated OpenCV for face detection.',
    tech: ['FastAPI', 'OpenCV', 'Flask'],
    image: 'https://picsum.photos/seed/face/800/600?grayscale',
    featured: false,
  },
  {
    title: 'Loan Approval Prediction',
    subtitle: 'ML Pipeline',
    description: 'Built an end-to-end ML web application to predict loan approval using applicant data. Implemented multiple algorithms including Random Forest, SVM, and KNN.',
    tech: ['Scikit-learn', 'Flask', 'Pandas'],
    image: 'https://picsum.photos/seed/loan/800/600?grayscale',
    featured: false,
  },
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section id="projects" ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        
        <div className="pt-24 px-6 md:px-12 flex-shrink-0">
          <motion.h2 
            className="text-4xl md:text-6xl font-display font-bold uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Works
          </motion.h2>
        </div>

        <div className="flex-1 flex items-center">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[400vw] md:w-[300vw] lg:w-[200vw]">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="relative w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] flex-shrink-0 group cursor-pointer"
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {project.featured && (
                    <div className="absolute top-8 left-8 bg-accent text-background text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Featured Project
                    </div>
                  )}
                  
                  <div className="absolute top-8 right-8 w-12 h-12 bg-foreground/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="text-foreground" />
                  </div>

                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">{project.title}</h3>
                    <p className="text-accent font-mono text-sm uppercase tracking-wider mb-4">{project.subtitle}</p>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <p className="text-foreground/80 mb-6 max-w-lg line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-xs font-mono border border-foreground/30 px-2 py-1 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
