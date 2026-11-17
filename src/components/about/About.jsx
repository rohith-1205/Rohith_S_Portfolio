/**
 * Component: About
 * 
 * Two-column section with Framer Motion entrance:
 * - Left column: Engineering ethos, distributed systems, applied AI ownership
 * - Right column: "Currently" card with active degrees and research directions
 * 
 * Data source: src/data/portfolio.js (personal.bio, personal.currently)
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';
import { personal } from '../../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="Engineering philosophy, academic background, and focus areas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Detailed Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 space-y-4"
          >
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 text-slate-900 flex items-center gap-2">
              <span className="text-gradient">End-to-End Ownership</span> &amp; Systems Thinking
            </h3>

            <p className="text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed text-base sm:text-lg">
              {personal.bio}
            </p>

            <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-400 dark:text-slate-400 text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                <span>Distributed Dispatch &amp; Queues</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                <span>LLM Agents &amp; Tool Orchestration</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                <span>Deep Learning &amp; Computer Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero-Downtime Microservices</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: "Currently" Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 glass-card glass-card-hover p-6 sm:p-8"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 dark:border-white/10 border-slate-200 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-accent-cyan" />
                <h4 className="font-mono text-sm uppercase tracking-wider text-slate-200 dark:text-slate-200 text-slate-800 font-semibold">
                  Currently
                </h4>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            <ul className="space-y-4">
              {personal.currently.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-slate-100/60 border border-white/5 dark:border-white/5 border-slate-200 hover:border-accent-blue/30 transition-colors"
                >
                  <span className="text-xl shrink-0" role="img" aria-label="Icon">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-200 dark:text-slate-200 text-slate-700 leading-snug">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
