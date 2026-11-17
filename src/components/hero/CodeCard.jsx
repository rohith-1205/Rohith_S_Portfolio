/**
 * Component: CodeCard
 * 
 * Mac-style desktop code editor card displaying developer configuration
 * object (focus areas, currently learning, role availability).
 * 
 * Data source: src/data/portfolio.js (personal.codeSnippet)
 */

import React from 'react';
import { Terminal } from 'lucide-react';
import { personal } from '../../data/portfolio';

export default function CodeCard() {
  const { filename, content } = personal.codeSnippet;

  return (
    <div className="glass-card p-0 shadow-2xl border-white/15 overflow-hidden">
      {/* Window Title Bar */}
      <div className="px-4 py-3 bg-navy-900/90 dark:bg-navy-900/90 bg-slate-200/90 border-b border-white/10 dark:border-white/10 border-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-xs text-slate-400 dark:text-slate-400 text-slate-600 ml-2">
            {filename}
          </span>
        </div>
        <Terminal size={14} className="text-accent-cyan" />
      </div>

      {/* Formatted Code Block */}
      <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 dark:text-slate-300 text-slate-700 bg-navy-950/70 dark:bg-navy-950/70 bg-white/70 overflow-x-auto">
        <p className="text-accent-violet">const <span className="text-accent-blue font-semibold">developer</span> = &#123;</p>
        <p className="pl-4">name: <span className="text-emerald-400">"{content.name}"</span>,</p>
        <p className="pl-4">focus: [</p>
        {content.focus.map((item, idx) => (
          <p key={idx} className="pl-8 text-amber-300">"{item}",</p>
        ))}
        <p className="pl-4">],</p>
        <p className="pl-4">currentlyLearning: [</p>
        {content.currentlyLearning.map((item, idx) => (
          <p key={idx} className="pl-8 text-cyan-300">"{item}",</p>
        ))}
        <p className="pl-4">],</p>
        <p className="pl-4">status: <span className="text-emerald-400">"{content.status}"</span></p>
        <p className="text-accent-violet">&#125;;</p>
      </div>
    </div>
  );
}
