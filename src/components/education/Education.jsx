/**
 * Component: Education
 * 
 * Showcases dual academic degrees and verified credentials with Framer Motion:
 * - B.Tech in Computer & Communication Engineering @ Amrita Vishwa Vidyapeetham (CGPA: 8.92)
 * - B.S. in Data Science and Applications @ IIT Madras
 * - Foundation Level in Data Science (IIT Madras) & MATLAB Onramp (MathWorks)
 * 
 * Data source: src/data/portfolio.js (education, certifications)
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';
import { education, certifications } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          title="Education & Certifications"
          subtitle="Formal academic degrees in Computer Engineering and Data Science, plus verified credentials."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600 font-semibold mb-2">
              Academic Degrees
            </h3>

            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card glass-card-hover p-6 sm:p-7 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 text-slate-900">
                      {item.institution}
                    </h4>
                    <p className="text-sm font-semibold text-accent-blue dark:text-accent-blue text-blue-600 mt-0.5">
                      {item.degree}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-blue/15 text-accent-cyan border border-accent-blue/30">
                      {item.score}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 dark:text-slate-400 text-slate-600 mb-4">
                  <Calendar size={13} className="text-accent-cyan" />
                  <span>{item.period}</span>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-white/10 dark:border-white/10 border-slate-200">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700">
                      <span className="text-accent-blue font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600 font-semibold mb-2">
              Verified Certifications
            </h3>

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card glass-card-hover p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-1 mb-2">
                      <span className="text-accent-cyan font-semibold">{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                    </div>
                    <p className="text-xs text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
