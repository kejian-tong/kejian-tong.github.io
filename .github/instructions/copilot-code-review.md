# GitHub Copilot Code Review Instructions

## Overview

You are reviewing code for a Next.js 14 portfolio website with TypeScript, Tailwind CSS, and Framer Motion animations. Focus on performance, accessibility, maintainability, and user experience.

## Review Checklist

### 1. **Code Quality & Best Practices**

- [ ] **TypeScript**: Check for proper type annotations, avoid `any`, use interfaces/types appropriately
- [ ] **React Hooks**: Verify proper dependency arrays, no missing dependencies
- [ ] **Component Structure**: Check for proper separation of concerns, reusable components
- [ ] **Naming Conventions**: Consistent camelCase for variables, PascalCase for components
- [ ] **Error Handling**: Check for proper error boundaries and fallback UI
- [ ] **Code Duplication**: Identify repeated patterns that could be abstracted

### 2. **Next.js Specific**

- [ ] **Client vs Server Components**: Ensure `"use client"` is only used when necessary (hooks, browser APIs, animations)
- [ ] **Metadata**: Verify SEO metadata is properly configured
- [ ] **Image Optimization**: Check `next/image` is used instead of `<img>` tags
- [ ] **Link Components**: Ensure `next/link` is used for internal navigation
- [ ] **Performance**: Check for unnecessary client-side rendering

### 3. **Performance & Optimization**

- [ ] **Animation Performance**:
  - Animations should use transform/opacity (GPU-accelerated)
  - Avoid animating layout properties (width, height, top, left)
  - Check for `viewport={{ once: true }}` to prevent re-animation
- [ ] **Bundle Size**: Identify heavy imports that could be lazy-loaded
- [ ] **Rendering**: Check for unnecessary re-renders, proper memoization
- [ ] **Images**: Verify images have proper width/height and alt text

### 4. **Accessibility (a11y)**

- [ ] **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
- [ ] **ARIA Labels**: Check buttons, links have descriptive labels
- [ ] **Keyboard Navigation**: Verify all interactive elements are keyboard accessible
- [ ] **Focus Indicators**: Ensure visible focus states for navigation
- [ ] **Color Contrast**: Verify text meets WCAG standards (especially in light mode)
- [ ] **Alt Text**: All images must have descriptive alt attributes

### 5. **Responsive Design**

- [ ] **Breakpoints**: Check mobile (sm:), tablet (md:, lg:), desktop (xl:) styling
- [ ] **Touch Targets**: Buttons/links should be at least 44x44px on mobile
- [ ] **Overflow**: Check for horizontal scrolling issues
- [ ] **Text Sizing**: Verify text is readable on all screen sizes

### 6. **Styling & Tailwind CSS**

- [ ] **Consistency**: Check for consistent spacing, colors, border-radius
- [ ] **Dark/Light Mode**: Verify theme switching works properly
- [ ] **Custom Classes**: Check if repeated utilities should be extracted
- [ ] **Z-index Management**: Ensure proper layering (navbar > content > background)

### 7. **Animation & Interactions**

- [ ] **Framer Motion**: Check for proper animation variants and transitions
- [ ] **Hover States**: Verify smooth hover transitions
- [ ] **Loading States**: Check for loading indicators where needed
- [ ] **Motion Sickness**: Ensure animations respect `prefers-reduced-motion`

### 8. **Navigation & Routing**

- [ ] **Links**: Verify all links work correctly (especially cross-page navigation)
- [ ] **Hash Links**: Check anchor links scroll to correct sections
- [ ] **Back Navigation**: Ensure "back" buttons navigate properly
- [ ] **Active States**: Verify active nav items are highlighted correctly

### 9. **Security**

- [ ] **External Links**: Check for `rel="noopener noreferrer"` on external links
- [ ] **Environment Variables**: Verify no sensitive data in client-side code
- [ ] **Form Validation**: Check input validation and sanitization

### 10. **Testing & Error Cases**

- [ ] **Null/Undefined**: Check for proper null checks and optional chaining
- [ ] **Empty States**: Verify UI handles empty data gracefully
- [ ] **Error States**: Check error messages are user-friendly
- [ ] **Edge Cases**: Test with long text, missing images, etc.

## Specific Concerns for This Project

### Recent Changes to Review:

1. **Scroll Animations**:

   - Check fade-in animations don't cause layout shift
   - Verify animations are smooth and professional (not too flashy)
   - Ensure `viewport` settings are appropriate

2. **Hover Interactions**:

   - Verify hover effects are subtle (scale: 1.03, y: -2)
   - Check spring transitions feel natural
   - Ensure no performance issues with multiple hover states

3. **Theme Toggle**:

   - Verify rotation animation is smooth (180°)
   - Check icon swap has no flicker
   - Ensure theme persistence works

4. **Background Animations**:

   - Verify animated gradients don't cause performance issues
   - Check animations are subtle and don't distract
   - Ensure proper z-index layering

5. **Project Navigation**:
   - Verify navbar links work from project detail pages
   - Check z-index prevents image overlap with navbar
   - Ensure proper scroll restoration

## Review Output Format

Please provide feedback in this structure:

### 🔴 Critical Issues (Must Fix)

- Issues that break functionality or cause errors

### 🟡 Important Improvements (Should Fix)

- Performance problems, accessibility issues, poor UX

### 🟢 Suggestions (Nice to Have)

- Code quality improvements, better patterns, optimizations

### ✅ What's Done Well

- Highlight good practices, clean code, smart solutions

## Code Review Guidelines

1. **Be Constructive**: Explain _why_ something should change, not just _what_
2. **Provide Examples**: Show code snippets for suggested fixes
3. **Consider Context**: This is a portfolio site, balance perfectionism with pragmatism
4. **Prioritize**: Focus on user-facing issues over minor code style
5. **Check Consistency**: Ensure changes match existing code patterns

## Example Review Comments

**Good**: "The navbar z-index of 50 ensures it stays above images. Consider adding a semi-transparent background (`bg-black/80`) for better text readability when scrolling over light content."

**Avoid**: "Fix the navbar" (not specific or actionable)

## Performance Metrics to Consider

- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Cumulative Layout Shift (CLS) < 0.1
- Time to Interactive (TTI) < 3.8s

## Animation Best Practices

- Duration: 0.2s-0.6s for micro-interactions
- Easing: Use `ease-out` for entering, `ease-in` for exiting
- Stagger: 100-150ms delay between list items
- Scale: Stay between 0.95-1.1 for subtle effects

---

**Note**: This is a professional portfolio site. Code should be clean, performant, and maintainable, but doesn't need enterprise-level complexity. Focus on delivering a polished user experience.
