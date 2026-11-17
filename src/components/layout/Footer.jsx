/**
 * Component: Footer
 * 
 * Displays copyright attribution, dynamic current year, social links,
 * and a smooth "Back to top" anchor action.
 * Reads personal data from src/data/portfolio.js.
 */

import React from 'react';
import { ArrowUp, Github, Mail, Phone, Linkedin } from 'lucide-react';
import { personal } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 dark:border-white/10 border-slate-200 bg-navy-950/80 dark:bg-navy-950/80 bg-slate-50 py-12 transition-colors">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright & Stack Notice */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-400 dark:text-slate-400 text-slate-600">
              © {currentYear} <span className="font-semibold text-slate-200 dark:text-slate-200 text-slate-800">{personal.name}</span> · Built with React + Vite
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 font-mono mt-1">
              Production-Grade AI &amp; Backend Systems
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              <Github size={18} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              <Mail size={18} />
            </a>

            <a
              href={`tel:${personal.phone}`}
              aria-label="Phone"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              <Phone size={18} />
            </a>

            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
            )}

            <div className="h-4 w-[1px] bg-white/10 dark:bg-white/10 bg-slate-300 mx-1" />

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 transition-all"
            >
              <ArrowUp size={14} className="text-accent-cyan" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
