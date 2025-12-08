# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Daejeon O'World Landing Page Renewal** project. The goal is to redesign the main landing page (https://www.oworld.kr/newkfsweb/kfs/dcco/dccoMainindex.do) with a modern, responsive design while maintaining all existing functionality.

**Scope**: Landing page UI/UX redesign only - no backend changes, no sub-pages, no booking system modifications.

## Key Documents

- **PRD.md**: Complete product requirements document with design specifications, technical requirements, and success metrics
- **task.md**: Comprehensive implementation checklist organized in 5 phases

## Design System Requirements

### Breakpoints (Mobile-First)
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1920px+
- Max container width: 1440px

### Typography
- Headings: Pretendard Bold or Noto Sans KR Bold
- Body: Pretendard Regular or Noto Sans KR Regular
- Mobile: 14-16px / Desktop: 16-18px

### Layout
- 12-column grid system
- Touch targets minimum 44x44px

## Page Sections (Order Matters)

1. **Header/Navigation** - Sticky header with 5 main menu items (오월드?, 이용정보, 축제 및 이벤트, 즐길거리, 예매하기)
2. **Hero Section** - Full-width slider with 6 images, auto-play 5-7s
3. **Quick Info** - Operating hours, Night Universe, Safari times, customer service (042-580-4820)
4. **Main Services** - 5 service cards in responsive grid
5. **OWORLD&EVENT** - 6 event cards with thumbnails
6. **NEWS&NOTICE** - Latest 3-5 notices
7. **SNS & Community** - Facebook, Instagram, YouTube, Blog, KakaoTalk links
8. **Footer** - Multi-column layout with sitemap, contact info, policies

## Critical Requirements

### Performance Targets
- Page load < 3 seconds
- Lighthouse score > 90
- LCP < 2.5s, FID < 100ms, CLS < 0.1
- Mobile performance > 80

### Accessibility (WCAG 2.1 AA)
- Keyboard navigation for all interactive elements
- ARIA tags for screen readers
- Color contrast: 4.5:1 (text), 3:1 (UI)
- Alt text on all images

### Image Optimization
- Hero images: 1920x1080px, WebP/JPG, <500KB
- Event thumbnails: 800x600px, WebP/JPG, <200KB
- Icons: SVG format
- Use `srcset`, `<picture>` tags, and lazy loading

### Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- NO Internet Explorer support

## Features to Preserve

All existing functionality must be maintained:
- OnePass unified login
- Identity verification system (i-PIN, SMS, account, credit card, certificate)
- Search functionality
- Main menu dropdown submenus
- Mobile hamburger menu
- Hero slider (6 images)
- Event banners (6 items)
- Popup zone banners (4 items)
- Auto-play sliders with manual controls
- SNS integrations
- Real-time operating info updates

## API Integration

Existing backend APIs must be preserved (no changes):
- Notice/announcement API (display latest 3)
- Event API (display 6 events)
- Operating info API (real-time updates)
- OnePass login API
- Identity verification APIs

## Development Notes

### When implementing HTML
- Use semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3)
- Include SEO meta tags and Open Graph tags

### When implementing CSS
- Write Mobile-First CSS
- Use CSS variables for colors, spacing, typography
- Implement smooth transitions (0.3s ease)
- Card hover effects: Scale(1.05) with shadow increase
- Sticky header with scroll shrink animation

### When implementing JavaScript
- Use modern ES6+ syntax
- Implement Intersection Observer for lazy loading and scroll animations
- Slider: auto-play with pause on user interaction
- Modal: close on ESC key, background click, and X button
- Hamburger menu: full-screen overlay on mobile
- Add "Do not show today" functionality for popups (localStorage/cookie)

### Animation Guidelines
- Fade-in on page load
- Scroll-triggered animations for sections entering viewport
- Parallax effects optional for hero section
- Keep animations performant (use transform/opacity, avoid layout thrashing)

## File Structure Recommendation

```
/
├── src/
│   ├── css/
│   │   ├── variables.css      # Design tokens
│   │   ├── base.css           # Reset, global styles
│   │   ├── layout.css         # Grid, containers
│   │   ├── components/        # Button, card, modal, etc.
│   │   └── sections/          # Header, hero, footer, etc.
│   ├── js/
│   │   ├── slider.js
│   │   ├── navigation.js
│   │   ├── modal.js
│   │   └── lazy-loading.js
│   ├── images/
│   │   ├── hero/
│   │   ├── events/
│   │   └── icons/
│   └── index.html
├── .dist/                     # Build output
├── PRD.md
├── task.md
└── CLAUDE.md
```

## Testing Checklist

Before considering any phase complete:
- Test on all required browsers (Chrome, Firefox, Safari, Edge)
- Test all breakpoints (320px, 375px, 414px, 768px, 1024px, 1366px, 1920px)
- Run Lighthouse audit (all scores > 90)
- Run WAVE accessibility check
- Verify keyboard navigation works for entire page
- Check color contrast ratios
- Validate HTML, CSS
- Test all API integrations
- Verify all 5 existing features work (login, search, sliders, navigation, SNS links)

## Common Pitfalls to Avoid

- Don't break existing backend integrations
- Don't remove any existing features (everything must be preserved)
- Don't skip mobile breakpoints (Mobile-First is mandatory)
- Don't use large unoptimized images (follow size/format specs)
- Don't forget ARIA labels and alt text
- Don't implement features beyond landing page scope
- Don't add unnecessary complexity (keep solutions simple and focused)
