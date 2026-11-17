/**
 * Component: ProjectCard
 * 
 * Interactive card rendering with Framer Motion hover elevation:
 * - Generated gradient header with Lucide icon
 * - Status / category badges (Featured, Live, Research, Team)
 * - Project title, one-line tagline, and highlight bullets
 * - Monospace tech tags & quick action links (GitHub, Live demo)
 * - Click trigger opening ProjectModal for architecture deep-dives
 * 
 * Data source: src/data/portfolio.js (projects)
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  Github, ExternalLink, Cpu, Layers, Sparkles, Scan, FileText,
  UtensilsCrossed, Activity, QrCode, Droplets, Compass,
  GraduationCap, Smartphone, Users, Briefcase, Globe, FolderCode
} from 'lucide-react';

const ICON_MAP = {
  Cpu, Layers, Sparkles, Scan, FileText, UtensilsCrossed, Activity,
  QrCode, Droplets, Compass, GraduationCap, Smartphone, Users, Briefcase, Globe
};

function getBadgeStyle(badge) {
  if (badge === 'Live') return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
  if (badge === 'Research') return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
  if (badge === 'Featured') return 'bg-accent-blue/15 text-accent-cyan border-accent-blue/30 font-semibold';
  if (badge === 'Team') return 'bg-sky-500/15 text-sky-400 border-sky-500/30';
  return 'bg-white/10 text-slate-300 border-white/20';
}

export default function ProjectCard({ project, onSelect, isFeatured = false }) {
  const IconComponent = ICON_MAP[project.icon] || FolderCode;

  return (
    <motion.article
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ scale: 0.99 }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className={`glass-card glass-card-hover group flex flex-col justify-between overflow-hidden cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accent-blue ${
        isFeatured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 via-accent-violet/20 to-accent-cyan/20 border border-white/10 dark:border-white/10 border-slate-200 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform duration-300">
            <IconComponent size={22} />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 justify-end">
            {project.badges?.map((badge, bIdx) => (
              <span key={bIdx} className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getBadgeStyle(badge)}`}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-accent-cyan transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-400 text-slate-600 mb-4 leading-relaxed">
          {project.tagline}
        </p>

        <ul className="space-y-1.5 mb-6 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700">
          {project.highlights.slice(0, isFeatured ? 3 : 2).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-accent-blue font-bold mt-0.5">•</span>
              <span className="line-clamp-2">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tech.slice(0, isFeatured ? 6 : 4).map((techName, tIdx) => (
            <span key={tIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700 border border-white/10 dark:border-white/10 border-slate-200">
              {techName}
            </span>
          ))}
          {project.tech.length > (isFeatured ? 6 : 4) && (
            <span className="text-[11px] font-mono text-slate-400">
              +{project.tech.length - (isFeatured ? 6 : 4)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-400 pt-1">
          <span className="text-accent-cyan group-hover:underline">View Architecture →</span>
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repo`} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Github size={16} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="p-1.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-white/10 transition-colors">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
