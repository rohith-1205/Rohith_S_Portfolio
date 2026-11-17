import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base public path:
  // - Default '/' is for Vercel, Netlify, custom domain, or root deployments.
  // - For GitHub Pages user/project site (e.g. https://<user>.github.io/<repo>/),
  //   change base to '/<repo>/' (e.g. base: '/Rohith_S_Portfolio/').
  base: '/',
  server: {
    port: 3000,
    open: false,
  },
});
