/**
 * Component: Skills
 * 
 * Technical skills matrix arranged into organized domain clusters:
 * - Languages, AI / ML, Backend & Systems, Frontend & Mobile,
 *   Databases & Cloud, Testing & Tools, and Core CS Fundamentals.
 * - Interactive Framer Motion hover elevation on skill tags and domain clusters.
 * 
 * Data source: src/data/portfolio.js (skillGroups)
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, BrainCircuit, Server, Layout, Database, Wrench, Binary,
} from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';
import { skillGroups } from '../../data/portfolio';

const SKILL_ICONS = {
  Code2, BrainCircuit, Server, Layout, Database, Wrench, Binary,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          title="Skills & Technologies"
          subtitle="Proficiencies across distributed backends, applied AI, modern frontends, and core CS."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = SKILL_ICONS[group.icon] || Code2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 border border-white/10 dark:border-white/10 border-slate-200 flex items-center justify-center text-accent-cyan">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-100 dark:text-slate-100 text-slate-900">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15 }}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700 border border-white/10 dark:border-white/10 border-slate-200 hover:border-accent-blue/40 hover:text-white dark:hover:text-white hover:bg-white/10 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
