/**
 * Component: ProjectModal
 * 
 * Deep-dive overlay dialog with Framer Motion spring entrance:
 * - Full project narrative, category, badges, and tagline
 * - Architecture pipeline / data flow block
 * - Key highlights and technology tags
 * - External repository and live deployment links
 * - Keyboard accessible (Escape closes, autofocus on close button)
 * 
 * Data source: src/data/portfolio.js (project selected object)
 */

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Network, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
        className="relative w-full max-w-3xl glass-card bg-navy-950/95 dark:bg-navy-950/95 bg-white/95 border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 dark:border-white/10 border-slate-200">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan">{project.category}</span>
              {project.badges?.map((badge, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-white/10 text-slate-300 border border-white/15">
                  {badge}
                </span>
              ))}
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 text-slate-900">
              {project.title}
            </h3>
          </div>
          <button ref={closeButtonRef} onClick={onClose} aria-label="Close modal" className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Tagline & Description */}
        <div className="mt-6 space-y-3">
          <p className="text-sm sm:text-base font-semibold text-accent-blue dark:text-accent-blue text-blue-600">{project.tagline}</p>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed">{project.description}</p>
        </div>

        {/* Architecture */}
        {project.architecture && (
          <div className="mt-6 p-4 rounded-xl bg-navy-900/80 dark:bg-navy-900/80 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Network size={16} className="text-accent-cyan" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 dark:text-slate-200 text-slate-800 font-semibold">Architecture &amp; Data Pipeline</h4>
            </div>
            <p className="font-mono text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed bg-black/20 p-3 rounded-lg border border-white/5 overflow-x-auto">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600 font-semibold mb-3">Key Highlights</h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 dark:text-slate-300 text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 border-slate-200">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600 font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700 border border-white/10 dark:border-white/10 border-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-wrap items-center justify-end gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 text-slate-200 dark:text-slate-200 text-slate-800 border border-white/10 flex items-center gap-2 transition-all">
              <Github size={15} />
              <span>View Repository</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-gradient-primary px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2">
              <span>Live Deployment</span>
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
