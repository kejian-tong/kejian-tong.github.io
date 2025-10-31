---
name: Code Review Request
about: Request Copilot code review for pull request
title: "[REVIEW] "
labels: review-needed
---

## 🎯 Pull Request Overview

**Branch**: `bugfix-01` → `main`

**Type of Change**:

- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 🎨 UI/UX improvement
- [ ] ⚡ Performance optimization
- [ ] ♿ Accessibility improvement
- [ ] 📝 Documentation
- [ ] 🔧 Configuration change

## 📋 Changes Summary

### What was changed:

1. **Animation Improvements**

   - Added fade-in scroll animations to all sections
   - Implemented hover effects on project and skill cards
   - Created reusable FadeInView component

2. **Background Animation**

   - Added animated gradient orbs to Hero section
   - Implemented subtle particle effects

3. **Theme Toggle Enhancement**

   - Added 180° rotation animation on theme switch
   - Implemented smooth icon transitions with AnimatePresence

4. **Bug Fixes**
   - Fixed navbar z-index issue (image covering text)
   - Fixed navigation links not working from project detail pages
   - Updated all nav links from `#section` to `/#section`

### Files Modified:

- `src/app/components/sections/projects.tsx`
- `src/app/components/sections/skills.tsx`
- `src/app/components/sections/about.tsx`
- `src/app/components/sections/education.tsx`
- `src/app/components/sections/blog.tsx`
- `src/app/components/sections/contact.tsx`
- `src/app/components/sections/hero.tsx`
- `src/app/components/ui/theme-toggle.tsx`
- `src/app/components/ui/animated-background.tsx` (NEW)
- `src/app/components/layout/navbar.tsx`
- `src/app/projects/layout.tsx` (NEW)
- `src/app/css/globals.css`
- All project case study pages

## 🔍 Review Focus Areas

### Priority 1 - Critical

- [ ] Verify navbar links work correctly from all pages
- [ ] Check z-index hierarchy (navbar > content > background)
- [ ] Ensure animations don't cause layout shifts
- [ ] Verify theme switching works without errors

### Priority 2 - Important

- [ ] Review animation performance (60fps maintained)
- [ ] Check accessibility (keyboard navigation, ARIA labels)
- [ ] Verify responsive design on mobile/tablet
- [ ] Review code quality and TypeScript types

### Priority 3 - Nice to Have

- [ ] Code duplication opportunities
- [ ] Further optimization possibilities
- [ ] Documentation improvements

## 🧪 Testing Completed

- [x] Tested on Chrome/Safari/Firefox
- [x] Mobile responsive check (iPhone, Android)
- [x] Theme switching (dark/light mode)
- [x] Navigation from homepage
- [x] Navigation from project detail pages
- [x] Scroll animations on all sections
- [x] Hover effects on cards
- [x] Build with no errors

## 📸 Screenshots / Demo

_Please review the visual changes by checking out the branch_

## ⚠️ Known Issues / Trade-offs

None currently. All identified bugs have been fixed.

## 📝 Additional Notes

**Design Philosophy**:

- Keep animations subtle and professional
- Maintain 60fps performance
- Ensure accessibility standards
- Follow existing code patterns

**Performance Considerations**:

- All animations use GPU-accelerated properties (transform, opacity)
- viewport={{ once: true }} prevents re-animation
- Optimized bundle size by reusing motion components

## ✅ Pre-Review Checklist

- [x] Code builds without errors
- [x] No console errors or warnings
- [x] All links tested and working
- [x] Animations tested on multiple browsers
- [x] Mobile responsive verified
- [x] TypeScript types are correct
- [x] Follows existing code style

---

**@github-copilot** Please review this PR following the guidelines in `.github/instructions/copilot-code-review.md`

Focus on:

1. Animation performance and implementation
2. Navigation fixes (cross-page links)
3. Z-index and layout issues
4. Overall code quality and maintainability
