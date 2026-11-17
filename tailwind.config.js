/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core background tokens: Deep navy / charcoal
        navy: {
          950: '#0B1020', // Main dark canvas background
          900: '#0e162e', // Elevated card / section background
          850: '#131e3d', // Card highlight / borders
          800: '#1b294f',
        },
        // Light mode counterpart backgrounds
        surface: {
          50: '#f8fafc',  // Main light canvas background
          100: '#f1f5f9', // Light elevated card background
          200: '#e2e8f0', // Light border
        },
        // Accent gradient palette: electric blue -> violet -> cyan
        accent: {
          blue: '#3B82F6',   // Electric Blue
          violet: '#8B5CF6', // Vibrant Violet
          cyan: '#06B6D4',   // Neon Cyan
        },
        // Secondary status / tag accents
        badge: {
          emerald: '#10B981', // "Live" / "Published" / Status badge
          amber: '#F59E0B',   // "Research" badge
          sky: '#0284C7',     // "Team" badge
        },
      },
      fontFamily: {
        // Primary clean sans for high-readability body and headings
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Technical mono for tags, metrics, section numbers, dates, code blocks
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        // Precision content container width (~1150px) specified in design system
        content: '1150px',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
