# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-01-05

### ✨ Added

- Google Scholar link surfaced in personal data and Publications/footers.
- Repository governance docs: SECURITY.md, CODE_OF_CONDUCT.md, CONTRIBUTING.md, LICENSE, and issue templates.

### 🔧 Changed

- Publications taxonomy and data cleanup (rename from Papers).
- SEO metadata improvements and enhanced JSON-LD coverage.
- Navigation anchor handling standardized for reliable cross-page linking.
- Blog rendering strategy upgraded (build-time HTML + client refresh + cache, when enabled).
- Project pages enriched with Open Graph metadata for accurate sharing.

### 🐛 Fixed

- Navbar active-state highlighting on initial homepage load.
- Minor link and layout polish across sections.

---

## [1.0.0] - 2025-10-31

### 🎉 Initial Release

First production release of a modern, fully-featured portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This release includes a complete personal portfolio with project showcases, skills presentation, education timeline, and contact functionality.

**Live Site:** https://kejian-tong.github.io/

---

### ✨ Added

#### Core Sections

- **Hero Section** - Animated landing page with gradient background effects, personal introduction, and key highlights
- **About Section** - Personal summary and professional focus areas
- **Projects Section** - Showcases 4 featured projects with interactive hover effects:
  - Twinder (Dating App)
  - Job Board (Full-stack Application)
  - Discord Food Bot (Python Automation)
  - Campsite Review (Web Application)
- **Skills Section** - Organized display of technical skills across 6 categories
- **Education Section** - Timeline of academic achievements
- **Blog Section** - Integration with DEV.to for fetching blog posts
- **Contact Section** - EmailJS-powered contact form with validation

#### UI/UX Features

- **Dark/Light Theme Toggle** - Smooth 180° rotation animation with persistent theme preferences
- **Responsive Navigation** - Fixed navbar with active section highlighting using IntersectionObserver
- **Smooth Animations** - Framer Motion animations throughout:
  - Fade-in effects on scroll
  - Hover scale effects on project cards
  - Staggered animations for grid layouts
  - Animated gradient background with floating orbs
- **Mobile Responsive** - Fully responsive design across all screen sizes
- **Optimized Images** - Next.js Image component with static export support

#### Technical Features

- **Static Site Generation** - Fully static export for GitHub Pages deployment
- **TypeScript** - Type-safe codebase with strict mode enabled
- **SEO Optimized** - Proper metadata, sitemap, and robots.txt
- **Accessibility** - Semantic HTML and proper ARIA labels
- **Performance** - GPU-accelerated animations (60fps), optimized bundle size

---

### 🐛 Fixed

#### Navigation Issues

- Fixed navigation links not working from project detail pages by updating all hash routes from `#section` to `/#section` format
- Resolved cross-page routing issues for seamless navigation

#### UI/Layout Fixes

- Fixed z-index issues where project images were overlapping navbar text
- Set navbar z-index to 50 with backdrop-blur for proper layering
- Corrected theme toggle animation glitches with AnimatePresence implementation

#### Form Functionality

- Added honeypot spam protection to contact form
- Implemented detailed error handling with user-friendly messages
- Added mailto fallback for EmailJS failures

---

### 🛠️ Technology Stack

**Frontend Framework:**

- Next.js 14.1.3 (App Router, Static Export)
- React 18 (latest)
- TypeScript 5.4.5

**Styling & UI:**

- Tailwind CSS (latest)
- Framer Motion 11.0.17
- next-themes 0.3.0
- react-icons 4.11.0

**Forms & Communication:**

- @emailjs/browser 4.3.1
- react-toastify 10.0.4

**Additional Libraries:**

- clsx 2.1.0 (conditional classes)
- react-fast-marquee 1.6.2 (skill marquee)
- lottie-react 2.4.0 (animations)

**Development Tools:**

- ESLint (latest)
- PostCSS & Autoprefixer
- Sass 1.69.5

---

### 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, About, Projects, Skills, Education, Blog, Contact
│   │   └── ui/              # Theme toggle, Section heading, Animated backgrounds
│   ├── css/                 # Global styles with theme variables
│   ├── projects/            # Individual project case study pages
│   │   ├── twinder/
│   │   ├── job-board/
│   │   ├── discord-food-bot/
│   │   └── campsite-review/
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page composition
│   └── not-found.tsx        # Custom 404 page
└── utils/
    ├── data/                # Typed content (personal, projects, skills, education)
    └── types/               # Shared TypeScript interfaces
```

---

### 🚀 Deployment

**Platform:** GitHub Pages  
**CI/CD:** GitHub Actions automated deployment pipeline  
**Workflow:** Automatically builds and deploys on every push to `main` branch

**Deployment Configuration:**

- Static export enabled via `next.config.js`
- Unoptimized images for static hosting compatibility
- Automated workflow at `.github/workflows/deploy.yml`

---

### 📝 Configuration

All content is data-driven and easily customizable through TypeScript files:

- **`src/content/personal.ts`** - Personal information, social links, technical focus
- **`src/content/projects.ts`** - Project cards, metadata, tags, and typed case studies
- **`skills.ts`** - Skill categories and technologies
- **`educations.ts`** - Education timeline
- **`src/content/contacts.ts`** - Contact and social media links

---

### 🎨 Design Highlights

- **Color Scheme:** Dynamic theme system with dark/light modes
- **Typography:** Clean, modern font hierarchy
- **Animations:** Subtle, professional animations that don't distract
- **Layout:** Card-based design with consistent spacing
- **Icons:** react-icons library for consistent iconography

---

### 📊 Performance

- **Static Export:** Fast loading times with pre-rendered HTML
- **Optimized Animations:** GPU-accelerated transforms (60fps)
- **Lazy Loading:** Images load on demand
- **Minimal Bundle:** Tree-shaking and code splitting enabled

---

## 🔜 Future Enhancements

Potential future additions:

- Blog content management system
- Project filtering by technology
- Animation preferences (reduced motion)
- Multi-language support
- Enhanced analytics integration

---

## 📄 License

MIT License

---

[1.1.0]: https://github.com/kejian-tong/kejian-tong.github.io/releases/tag/v1.1.0
[1.0.0]: https://github.com/kejian-tong/kejian-tong.github.io/releases/tag/v1.0.0
