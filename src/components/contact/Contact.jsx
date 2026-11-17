/**
 * Component: Contact
 * 
 * Direct communication portal featuring:
 * - Direct contact cards (Email, GitHub, Phone)
 * - Interactive contact form component (ContactForm)
 * 
 * Data source: src/data/portfolio.js (contactInfo, personal)
 */

import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';
import ContactForm from './ContactForm';
import { contactInfo, personal } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          title={contactInfo.heading}
          subtitle={contactInfo.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Actions */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="glass-card glass-card-hover p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Email Directly</div>
                <div className="text-sm sm:text-base font-semibold text-slate-100 dark:text-slate-100 text-slate-900 truncate group-hover:text-accent-cyan transition-colors">
                  {personal.email}
                </div>
              </div>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center text-accent-violet group-hover:scale-110 transition-transform">
                <Github size={22} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">GitHub Profile</div>
                <div className="text-sm sm:text-base font-semibold text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-accent-cyan transition-colors">
                  github.com/rohith-1205
                </div>
              </div>
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="glass-card glass-card-hover p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Phone</div>
                <div className="text-sm sm:text-base font-semibold text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-accent-cyan transition-colors">
                  {personal.phone}
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
