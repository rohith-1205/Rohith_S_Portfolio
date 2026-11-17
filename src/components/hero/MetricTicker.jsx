/**
 * Component: MetricTicker
 * 
 * Smooth number count-up animation triggered when scrolled into view.
 * Uses requestAnimationFrame for 60fps performance and respects decimal precision.
 * 
 * Data source: src/data/portfolio.js (personal.stats items)
 */

import React, { useState, useEffect, useRef } from 'react';

export default function MetricTicker({ value, suffix = '', isDecimal = false, duration = 1600 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out quart curve
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const current = easeOut * value;

            setDisplayValue(isDecimal ? current.toFixed(2) : Math.floor(current));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(isDecimal ? value.toFixed(2) : value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [value, duration, isDecimal]);

  return (
    <span ref={elementRef} className="font-mono text-gradient">
      {displayValue}{suffix}
    </span>
  );
}
