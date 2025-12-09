/**
 * Back to Top Button
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

class BackToTop {
  constructor(options = {}) {
    this.options = {
      scrollThreshold: options.scrollThreshold || 300,
      scrollDuration: options.scrollDuration || 600,
      buttonId: options.buttonId || 'back-to-top',
      ...options
    };

    this.button = document.getElementById(this.options.buttonId);
    this.isVisible = false;

    this.init();
  }

  init() {
    if (!this.button) {
      this.createButton();
    }

    this.setupScrollListener();
    this.setupClickListener();
  }

  /**
   * Create back to top button if not exists
   */
  createButton() {
    this.button = document.createElement('button');
    this.button.id = this.options.buttonId;
    this.button.className = 'back-to-top';
    this.button.setAttribute('aria-label', '맨 위로');
    this.button.innerHTML = '↑';
    document.body.appendChild(this.button);
  }

  /**
   * Setup scroll listener to show/hide button
   */
  setupScrollListener() {
    window.addEventListener('scroll', throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > this.options.scrollThreshold) {
        this.show();
      } else {
        this.hide();
      }
    }, 100));
  }

  /**
   * Setup click listener to scroll to top
   */
  setupClickListener() {
    this.button.addEventListener('click', () => {
      this.scrollToTop();
    });
  }

  /**
   * Show button
   */
  show() {
    if (!this.isVisible) {
      this.button.classList.add('visible');
      this.isVisible = true;
    }
  }

  /**
   * Hide button
   */
  hide() {
    if (this.isVisible) {
      this.button.classList.remove('visible');
      this.isVisible = false;
    }
  }

  /**
   * Scroll to top with smooth animation
   */
  scrollToTop() {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.options.scrollDuration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}

// Initialize BackToTop when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.backToTop = new BackToTop({
      scrollThreshold: 300,
      scrollDuration: 600
    });
  });
} else {
  window.backToTop = new BackToTop({
    scrollThreshold: 300,
    scrollDuration: 600
  });
}
