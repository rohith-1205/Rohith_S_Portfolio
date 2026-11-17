/**
 * Component: SectionHeading
 * 
 * Renders consistent section headers with Framer Motion scroll entrance:
 * - Technical mono section index number (e.g. "01.")
 * - Bold title with smooth fade/slide-up
 * - Optional descriptive subtitle and accent line
 */

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ number, title, subtitle, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <div className={`inline-flex items-center gap-3 ${centered ? 'justify-center' : ''} mb-3`}>
        {number && (
          <span className="font-mono text-sm font-semibold tracking-wider text-accent-cyan">
            {number}.
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 text-slate-900">
          {title}
        </h2>
        <div className="hidden sm:block h-[1px] w-20 md:w-32 bg-gradient-to-r from-accent-blue/40 to-transparent" />
      </div>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
