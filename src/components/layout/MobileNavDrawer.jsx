/**
 * Component: MobileNavDrawer
 * 
 * Slide-in navigation drawer for mobile viewports (< 768px).
 * Handles click-away, active state indicators, and keyboard focus.
 * 
 * Data source: src/data/portfolio.js (personal, navLinks)
 */

import React from 'react';
import { X, FileText } from 'lucide-react';
import { personal, navLinks } from '../../data/portfolio';

export default function MobileNavDrawer({ isOpen, onClose, activeSection }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-navy-950 dark:bg-navy-950 bg-white border-l border-white/10 dark:border-white/10 border-slate-200 z-50 md:hidden p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10 dark:border-white/10 border-slate-200">
            <span className="font-mono font-bold text-sm text-gradient">
              {personal.monogram} Navigation
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={onClose}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center ${
                    isActive
                      ? 'bg-accent-blue/15 text-accent-cyan font-semibold border border-accent-blue/30'
                      : 'text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-white/5'
                  }`}
                >
                  <span className="font-mono text-xs text-accent-cyan mr-3">
                    {link.number}.
                  </span>
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 dark:border-white/10 border-slate-200">
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-gradient-primary w-full py-2.5 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
          >
            <FileText size={15} />
            View Resume PDF
          </a>
        </div>
      </div>
    </>
  );
}
