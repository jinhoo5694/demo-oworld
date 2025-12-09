/**
 * Scroll Animations with Intersection Observer
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

class ScrollAnimations {
  constructor(options = {}) {
    this.options = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -100px 0px',
      animationClass: options.animationClass || 'animate-in',
      ...options
    };

    this.elements = document.querySelectorAll('[data-animate]');
    this.observer = null;

    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: Show all elements immediately
      this.elements.forEach(el => {
        el.classList.add(this.options.animationClass);
      });
      return;
    }

    this.setupObserver();
    this.observeElements();
  }

  /**
   * Setup Intersection Observer
   */
  setupObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);

          // Unobserve if animation should only happen once
          if (!entry.target.dataset.animateRepeat) {
            this.observer.unobserve(entry.target);
          }
        } else {
          // Remove animation if repeat is enabled
          if (entry.target.dataset.animateRepeat) {
            entry.target.classList.remove(this.options.animationClass);
          }
        }
      });
    }, this.options);
  }

  /**
   * Observe all animation elements
   */
  observeElements() {
    this.elements.forEach(el => {
      // Add delay from data attribute
      const delay = el.dataset.animateDelay;
      if (delay) {
        el.style.animationDelay = `${delay}ms`;
      }

      this.observer.observe(el);
    });
  }

  /**
   * Animate individual element
   */
  animateElement(element) {
    const animationType = element.dataset.animate;

    // Add base animation class
    element.classList.add(this.options.animationClass);

    // Add specific animation type class if specified
    if (animationType) {
      element.classList.add(`animate-${animationType}`);
    }

    // Emit custom event
    element.dispatchEvent(new CustomEvent('animated', {
      bubbles: true,
      detail: { type: animationType }
    }));
  }

  /**
   * Refresh: Re-scan for new animation elements
   */
  refresh() {
    this.elements = document.querySelectorAll('[data-animate]');
    this.observeElements();
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

/**
 * Counter Animation for Numbers
 */
class CounterAnimation {
  constructor(element) {
    this.element = element;
    this.target = parseInt(element.dataset.counterTarget || element.textContent);
    this.duration = parseInt(element.dataset.counterDuration || 2000);
    this.hasAnimated = false;

    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animate();
          observer.unobserve(this.element);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.element);
  }

  animate() {
    this.hasAnimated = true;
    const start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      // Ease-out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (this.target - start) * easeOut);

      this.element.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        this.element.textContent = this.target.toLocaleString();
      }
    };

    requestAnimationFrame(updateCounter);
  }
}

// Initialize ScrollAnimations when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimations = new ScrollAnimations({
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Initialize counter animations
    document.querySelectorAll('[data-counter]').forEach(el => {
      new CounterAnimation(el);
    });
  });
} else {
  window.scrollAnimations = new ScrollAnimations({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Initialize counter animations
  document.querySelectorAll('[data-counter]').forEach(el => {
    new CounterAnimation(el);
  });
}
