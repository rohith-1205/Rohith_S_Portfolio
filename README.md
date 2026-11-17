# Rohith S — Personal Engineering Portfolio

A production-ready personal developer portfolio for **Rohith S**, Software Engineer focused on **AI Systems, Distributed Backend Engineering, and Full-Stack Development**. Built with modern, lightweight web technologies: **React 18 + Vite**, styled with **Tailwind CSS**, and accented with **lucide-react** icons.

---

## ⚡ Tech Stack & Architecture

- **React 18 + Vite**: Lightning-fast compilation, zero bloat, pure JavaScript (no complex TypeScript types to slow down beginners).
- **Tailwind CSS**: Modern utility design system with customizable color tokens (`navy-950`, electric blue, violet, cyan).
- **lucide-react**: Lightweight icon set with consistent visual hierarchy.
- **Framer Motion**: Subtle hardware-accelerated animations respecting `prefers-reduced-motion`.
- **Pure Static Architecture**: Zero backend, zero database required. Deploys seamlessly to Vercel, Netlify, or GitHub Pages.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` (already done locally, ignored in `.gitignore`):
```bash
# In .env:
VITE_WEB3FORMS_ACCESS_KEY=5176385f-3810-441f-bf42-1978f8163ded
```

### 3. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
This compiles optimized static assets into the `dist/` directory.

### 5. Preview the Production Build Locally
```bash
npm run preview
```

---

## ✏️ How to Edit Content (Single Source of Truth)

**All content lives in ONE single file:** [`src/data/portfolio.js`](file:///c:/Users/Rohith%20Sivakumar/Desktop/Rohith_S_Portfolio/src/data/portfolio.js).

You **never** need to modify any JSX component to update your text, projects, experience, or links:

| Section | Object in `src/data/portfolio.js` | What you can update |
| :--- | :--- | :--- |
| **Personal Info** | `personal` | Name, email, phone, location, GitHub, LinkedIn, rotating roles, bio |
| **Experience** | `experience` | Companies, roles, date periods, achievement bullets, tech stack tags |
| **Projects** | `projects` | Title, category, featured status, highlights, architecture flow, links |
| **Research** | `research` | Papers, conference venues, evaluation metric chips (mAP, Recall, latency) |
| **Skills** | `skillGroups` | Grouped skill clusters (Languages, AI/ML, Backend, Databases, etc.) |
| **Education** | `education` | Universities, degrees, expected graduation dates, CGPA |
| **Certifications**| `certifications` | Course names, issuers, completion years |
| **Contact** | `contactInfo` | Heading, pitch, communication links |

> **Note:** Any missing links or items to be updated later (such as your LinkedIn profile or paper DOI) are marked with clear `// TODO` comments in `src/data/portfolio.js`.

---

## 📄 How to Replace the Resume PDF

1. Prepare your updated resume PDF.
2. Name the file **`resume.pdf`**.
3. Place it in the `public/` directory (replacing `public/resume.pdf`).
4. Re-run `npm run build`. The file is automatically served at `/resume.pdf` and opened by the **Resume** navbar button and hero action.

---

## 📬 Contact Form Configuration (Web3Forms)

The contact form is powered by **Web3Forms**:
- The API key is securely loaded from `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY` (configured in `.env`).
- Submissions are sent directly to your registered Web3Forms email inbox without exposing credentials in git.
- When deploying to **Vercel** or **Netlify**, add the environment variable `VITE_WEB3FORMS_ACCESS_KEY` in the project settings dashboard.

---

## 🌐 Deployment Guide

### Option 1: Vercel (Recommended — Zero Config)

1. Push your repository to GitHub.
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. In **Environment Variables**, add `VITE_WEB3FORMS_ACCESS_KEY` = `5176385f-3810-441f-bf42-1978f8163ded`.
5. Click **Deploy**.
6. The included `vercel.json` ensures client-side routing works flawlessly with SPA rewrites.

### Option 2: Netlify (Zero Config)

1. Push your repository to GitHub.
2. Log in to [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
3. Set **Build command**: `npm run build` and **Publish directory**: `dist`.
4. Add `VITE_WEB3FORMS_ACCESS_KEY` in **Site Configuration > Environment Variables**.
5. Click **Deploy site**.
6. The included `public/_redirects` file automatically handles SPA routing fallback.

### Option 3: GitHub Pages

1. In `vite.config.js`, set `base` to your GitHub repository name:
   ```js
   base: '/Rohith_S_Portfolio/',
   ```
2. Build and publish:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

---

## 🎨 Design Tokens & Customization

Design tokens are centralized in [`tailwind.config.js`](file:///c:/Users/Rohith%20Sivakumar/Desktop/Rohith_S_Portfolio/tailwind.config.js):
- **Dark Canvas Background:** `navy-950` (`#0B1020`)
- **Accent Gradient:** Electric Blue (`#3B82F6`) → Violet (`#8B5CF6`) → Cyan (`#06B6D4`)
- **Status Accents:** Emerald (`#10B981`) for "Live", Amber (`#F59E0B`) for "Research"
- **Typography:** `font-sans` (`Inter`) and `font-mono` (`JetBrains Mono`)
- **Max Width:** `max-w-content` (~1150px)

---

## ⚖️ License

Created by **Rohith S**. Code is licensed under the MIT License.
