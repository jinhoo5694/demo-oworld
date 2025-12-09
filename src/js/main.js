/**
 * Main JavaScript Entry Point
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('대전 오월드 페이지가 로드되었습니다.');

  // Initialize components will be added in later phases
  initializeApp();
});

/**
 * Initialize application
 */
function initializeApp() {
  // Phase 1: Foundation is complete
  console.log('Phase 1: Foundation Setup - Complete');

  // Phase 2: Core Sections will be initialized here
  // - Header/Navigation
  // - Hero Slider
  // - Quick Info
  // - Footer

  // Phase 3: Content Sections will be initialized here
  // - Main Services
  // - Events
  // - News
  // - SNS

  // Phase 4: Interactions will be initialized here
  // - Slider
  // - Modal/Popup
  // - Dropdown
  // - Mobile Menu
  // - Scroll Animations
  // - Lazy Loading

  // Phase 5: API Integration will be initialized here
  // - Notices API
  // - Events API
  // - Operating Info API
}

/**
 * Utility: Format date to YYYY.MM.DD
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

/**
 * Utility: Check if date is within last 7 days
 */
function isRecent(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7;
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
