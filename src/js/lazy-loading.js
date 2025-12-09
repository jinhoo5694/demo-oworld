/**
 * Lazy Loading with Intersection Observer
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

class LazyLoader {
  constructor(options = {}) {
    this.options = {
      rootMargin: options.rootMargin || '50px',
      threshold: options.threshold || 0.01,
      ...options
    };

    this.images = document.querySelectorAll('img[data-src]');
    this.observer = null;

    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without IntersectionObserver
      this.loadAllImages();
      return;
    }

    this.setupObserver();
    this.observeImages();
  }

  /**
   * Setup Intersection Observer
   */
  setupObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, this.options);
  }

  /**
   * Observe all lazy images
   */
  observeImages() {
    this.images.forEach(img => {
      this.observer.observe(img);
    });
  }

  /**
   * Load individual image
   */
  loadImage(img) {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;

    if (!src) return;

    // Create a new image to preload
    const tempImage = new Image();

    tempImage.onload = () => {
      // Set the actual src
      img.src = src;

      if (srcset) {
        img.srcset = srcset;
      }

      // Add loaded class for fade-in animation
      img.classList.add('loaded');

      // Remove data attributes
      delete img.dataset.src;
      delete img.dataset.srcset;

      // Emit custom event
      img.dispatchEvent(new CustomEvent('lazyloaded', {
        bubbles: true,
        detail: { src }
      }));
    };

    tempImage.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      img.classList.add('load-error');
    };

    // Start loading
    tempImage.src = src;
  }

  /**
   * Fallback: Load all images immediately
   */
  loadAllImages() {
    this.images.forEach(img => {
      this.loadImage(img);
    });
  }

  /**
   * Refresh: Re-scan for new lazy images
   */
  refresh() {
    this.images = document.querySelectorAll('img[data-src]');
    this.observeImages();
  }

  /**
   * Destroy observer
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize LazyLoader when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.lazyLoader = new LazyLoader({
      rootMargin: '50px',
      threshold: 0.01
    });
  });
} else {
  window.lazyLoader = new LazyLoader({
    rootMargin: '50px',
    threshold: 0.01
  });
}
