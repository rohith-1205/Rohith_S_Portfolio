/**
 * Component: App
 * 
 * Root portfolio container orchestrating:
 * - Persistent Theme state (Dark / Light) via useTheme
 * - Sticky navigation bar with active section tracking
 * - Semantic main section landmarks: Hero, About, Experience, Projects,
 *   Research, Skills, Education, and Contact
 * - Global footer with social links and top-scroll action
 */

import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import ExperienceTimeline from './components/experience/ExperienceTimeline';
import Projects from './components/projects/Projects';
import Research from './components/research/Research';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-navy-950 dark:bg-navy-950 bg-surface-50 text-slate-100 dark:text-slate-100 text-slate-900 transition-colors duration-300 font-sans">
      {/* Sticky Top Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content Landmark */}
      <main id="main-content">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
}
