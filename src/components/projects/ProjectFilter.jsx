/**
 * Component: ProjectFilter
 * 
 * Category tabs allowing the user to filter projects by specialization:
 * - All
 * - AI / ML
 * - Backend & Systems
 * - Full-Stack
 * - Mobile
 * 
 * Data source: src/data/portfolio.js (projectCategories)
 */

import React from 'react';
import { projectCategories } from '../../data/portfolio';

export default function ProjectFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
      {projectCategories.map((cat) => {
        const isSelected = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue ${
              isSelected
                ? 'btn-gradient-primary text-white shadow-md shadow-accent-blue/20'
                : 'bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-400 dark:text-slate-400 text-slate-600 hover:text-slate-200 dark:hover:text-slate-200 hover:text-slate-900 border border-white/10 dark:border-white/10 border-slate-200'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
