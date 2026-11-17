/**
 * Component: Projects
 * 
 * Centerpiece section featuring:
 * - Category filter tabs (All, AI / ML, Backend & Systems, Full-Stack, Mobile)
 * - 2-column featured grid for flagship architectures (Acting Driver Engine, SemiComply, etc.)
 * - 3-column grid for specialized systems & open-source implementations
 * - Detailed ProjectModal overlay for system architecture walkthroughs
 * 
 * Data source: src/data/portfolio.js (projects, projectCategories)
 */

import React, { useState, useMemo } from 'react';
import SectionHeading from '../layout/SectionHeading';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/portfolio';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on active tab
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(
      (p) => p.category === activeCategory || p.secondaryCategory === activeCategory
    );
  }, [activeCategory]);

  const featuredList = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const otherList = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          title="Featured Projects"
          subtitle="Production-grade AI systems, distributed queue architectures, and full-stack platforms."
        />

        {/* Filter Navigation */}
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Top Tier: Featured Projects (2-Column Grid) */}
        {featuredList.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {featuredList.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  isFeatured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Second Tier: Other Shipped Projects (3-Column Grid) */}
        {otherList.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600 font-semibold">
                More Engineering Projects ({otherList.length})
              </h3>
              <div className="h-[1px] flex-1 bg-white/10 dark:border-white/10 border-slate-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherList.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  isFeatured={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal Deep-Dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
