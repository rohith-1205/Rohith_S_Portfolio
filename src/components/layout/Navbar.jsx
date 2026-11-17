/**
 * Component: Navbar
 * 
 * Sticky navigation bar featuring:
 * - Branded RS monogram logo
 * - Navigation links reading from portfolio.js
 * - Active section highlighting on scroll
 * - Gradient outline Resume button linking to /resume.pdf
 * - Light/Dark theme toggle button
 * - MobileNavDrawer integration
 * 
 * Data source: src/data/portfolio.js (personal, navLinks)
 */

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import MobileNavDrawer from './MobileNavDrawer';
import { personal, navLinks } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';

export default function Navbar({ isDark, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/85 dark:bg-navy-950/85 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/10 dark:border-white/10 border-slate-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Main Navigation">
        {/* Monogram Brand */}
        <a href="#hero" className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-xl p-1" aria-label="Rohith S - Return to top">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan p-[2px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-navy-950 dark:bg-navy-950 bg-white rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-sm tracking-tighter text-gradient">
                {personal.monogram}
              </span>
            </div>
          </div>
          <span className="font-bold text-base tracking-tight text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-accent-blue transition-colors">
            {personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-white dark:text-white text-slate-900 font-semibold'
                    : 'text-slate-400 dark:text-slate-400 text-slate-600 hover:text-slate-200 dark:hover:text-slate-200 hover:text-slate-900'
                }`}
              >
                <span className="font-mono text-xs text-accent-cyan/80 mr-1.5">{link.number}.</span>
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions: Theme Toggle & Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="p-2 rounded-xl text-slate-400 dark:text-slate-400 text-slate-600 hover:text-slate-100 dark:hover:text-slate-100 hover:text-slate-900 bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 hover:border-accent-blue/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-outline px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-100 dark:text-slate-100 text-slate-900 hover:shadow-md hover:shadow-accent-blue/20"
          >
            <span className="flex items-center gap-1.5">
              <FileText size={14} className="text-accent-cyan" />
              Resume
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-slate-400 dark:text-slate-400 text-slate-600 bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200"
          >
            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 rounded-xl text-slate-300 dark:text-slate-300 text-slate-700 bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Drawer */}
      <MobileNavDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />
    </header>
  );
}
