/**
 * Custom Hook: useActiveSection
 * 
 * Uses an IntersectionObserver to determine which section is currently
 * visible in the viewport, allowing the Navbar to highlight the active link.
 */

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, offsetPercent = 0.3) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetPercent;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offsetPercent]);

  return activeSection;
}
