/**
 * Component: Hero
 * 
 * First-fold hero section featuring:
 * - Subtle floating ambient mesh orbs with Framer Motion
 * - Smooth AnimatePresence role switcher for engineering specializations
 * - High-impact one-line engineering pitch and primary CTA buttons
 * - Animated quick stats count-up row (MetricTicker)
 * - Desktop CodeCard interactive element
 * 
 * Data source: src/data/portfolio.js (personal)
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, FileText, Github, Mail } from 'lucide-react';
import CodeCard from './CodeCard';
import MetricTicker from './MetricTicker';
import { personal } from '../../data/portfolio';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.rotatingRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center hero-grid-pattern overflow-hidden">
      {/* Subtle Floating Ambient Glowing Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-blue/15 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-accent-violet/15 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Pitch & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-accent-cyan tracking-wider uppercase font-semibold">
                Hi, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-100 dark:text-slate-100 text-slate-900 leading-tight"
            >
              <span className="text-gradient">{personal.name}</span>
            </motion.h1>

            {/* Rotating Role with Smooth AnimatePresence */}
            <div className="h-10 sm:h-12 flex items-center mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-accent-cyan inline-block"
                >
                  {personal.rotatingRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600 max-w-xl leading-relaxed mb-8"
            >
              {personal.pitch}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a href="#projects" className="btn-gradient-primary px-6 py-3.5 text-sm font-semibold tracking-wide flex items-center gap-2 shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40">
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>

              <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn-gradient-outline px-6 py-3.5 text-sm font-semibold tracking-wide text-slate-100 dark:text-slate-100 text-slate-800 flex items-center gap-2 hover:bg-white/5">
                <FileText size={16} className="text-accent-cyan" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 ml-1">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white hover:border-accent-blue/40 transition-all">
                  <Github size={18} />
                </a>
                <a href={`mailto:${personal.email}`} aria-label="Send Email" className="p-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white hover:border-accent-blue/40 transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Code Editor */}
          <div className="lg:col-span-5 hidden lg:block">
            <CodeCard />
          </div>
        </div>

        {/* Quick-Stats Row with Count-Up Animation */}
        <div className="mt-14 pt-8 border-t border-white/10 dark:border-white/10 border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                <MetricTicker
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-400 text-slate-600 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
