/**
 * Component: Research
 * 
 * Showcases peer-reviewed scientific publications and applied deep learning research:
 * - IEEE SPACE 2026 conference paper on Chandrayaan lunar hazard detection
 * - YOLOv8-CBAM attention-guided neck fusion for small drone detection
 * - Digital Twin for renewable-aware IoT edge task offloading
 * - Key evaluation metrics rendered as technical stat chips
 * - Subtle Framer Motion scroll and hover interactions
 * 
 * Data source: src/data/portfolio.js (research)
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';
import { research } from '../../data/portfolio';

export default function Research() {
  return (
    <section id="research" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          title="Research & Publications"
          subtitle="Applied machine learning, aerospace computer vision, and autonomous edge systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {research.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-card glass-card-hover p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    <Award size={13} />
                    {item.type}
                  </span>

                  <span className="font-mono text-xs text-slate-400 dark:text-slate-400 text-slate-600">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-accent-cyan transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-accent-blue dark:text-accent-blue text-blue-600 font-semibold mb-3">
                  {item.venue}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600 mb-2 font-semibold">
                    Evaluated Benchmarks
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {item.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2 rounded-lg bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/5 dark:border-white/5 border-slate-200"
                      >
                        <div className="font-mono text-xs font-bold text-gradient-amber">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-400 text-slate-600 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:underline"
                  >
                    <span>View Repository</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500 italic">
                    Paper In Press (IEEE)
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
