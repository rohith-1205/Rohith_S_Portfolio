/**
 * Component: ExperienceTimeline
 * 
 * Vertical timeline component with Framer Motion staggered entrance:
 * - Animated timeline marker with subtle pulse ring
 * - Professional software engineering internships and impacts
 * - Production tech stack badges
 * 
 * Data source: src/data/portfolio.js (experience)
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';
import { experience } from '../../data/portfolio';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          title="Experience"
          subtitle="Production engineering internships and real-world system delivery."
        />

        <div className="relative border-l border-white/10 dark:border-white/10 border-slate-200 ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-8 md:pl-10 space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              className="relative group"
            >
              {/* Timeline Node Indicator with pulse ping */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-navy-950 dark:bg-navy-950 bg-white border-2 border-accent-blue flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                <span className="absolute w-full h-full rounded-full bg-accent-blue/30 animate-ping opacity-75" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan relative z-10" />
              </div>

              {/* Timeline Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 dark:border-white/10 border-slate-200 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 text-slate-900">
                      {item.role} <span className="text-accent-blue">@ {item.company}</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={14} className="text-accent-cyan" />
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs text-slate-300 dark:text-slate-300 text-slate-700 bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 self-start sm:self-center">
                    <Calendar size={13} className="text-accent-cyan" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed">
                      <span className="text-accent-blue text-base font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 dark:border-white/10 border-slate-200">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700 border border-white/10 dark:border-white/10 border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
