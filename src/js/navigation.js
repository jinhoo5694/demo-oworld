/**
 * Navigation & Mobile Menu
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

class Navigation {
  constructor() {
    this.header = document.querySelector('.header');
    this.hamburgerBtn = document.querySelector('.hamburger-btn');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    this.body = document.body;

    this.init();
  }

  init() {
    this.setupStickyHeader();
    this.setupMobileMenu();
    this.setupMobileAccordion();
  }

  /**
   * Sticky Header with Scroll Detection
   */
  setupStickyHeader() {
    let lastScrollTop = 0;

    window.addEventListener('scroll', throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Add 'scrolled' class when scrolled down
      if (scrollTop > 100) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }

      lastScrollTop = scrollTop;
    }, 100));
  }

  /**
   * Mobile Menu Toggle
   */
  setupMobileMenu() {
    if (!this.hamburgerBtn || !this.mobileMenu) return;

    // Hamburger button click
    this.hamburgerBtn.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileMenu.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });

    // Close when clicking outside
    this.mobileMenu.addEventListener('click', (e) => {
      if (e.target === this.mobileMenu) {
        this.closeMobileMenu();
      }
    });
  }

  /**
   * Toggle Mobile Menu
   */
  toggleMobileMenu() {
    const isActive = this.mobileMenu.classList.contains('active');

    if (isActive) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  /**
   * Open Mobile Menu
   */
  openMobileMenu() {
    this.hamburgerBtn.classList.add('active');
    this.hamburgerBtn.setAttribute('aria-expanded', 'true');
    this.hamburgerBtn.setAttribute('aria-label', '메뉴 닫기');

    this.mobileMenu.classList.add('active');
    this.mobileMenu.setAttribute('aria-hidden', 'false');

    // Prevent body scroll
    this.body.style.overflow = 'hidden';
  }

  /**
   * Close Mobile Menu
   */
  closeMobileMenu() {
    this.hamburgerBtn.classList.remove('active');
    this.hamburgerBtn.setAttribute('aria-expanded', 'false');
    this.hamburgerBtn.setAttribute('aria-label', '메뉴 열기');

    this.mobileMenu.classList.remove('active');
    this.mobileMenu.setAttribute('aria-hidden', 'true');

    // Restore body scroll
    this.body.style.overflow = '';
  }

  /**
   * Mobile Menu Accordion (Submenu Toggle)
   */
  setupMobileAccordion() {
    this.mobileMenuItems.forEach(item => {
      const link = item.querySelector('.mobile-menu-link');
      const submenu = item.querySelector('.mobile-submenu');

      if (!link || !submenu) return;

      link.addEventListener('click', (e) => {
        // Don't prevent default if no submenu
        if (submenu.children.length === 0) return;

        e.preventDefault();

        // Toggle current item
        const isActive = item.classList.contains('active');

        // Close all other items
        this.mobileMenuItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherSubmenu = otherItem.querySelector('.mobile-submenu');
            if (otherSubmenu) {
              otherSubmenu.classList.remove('active');
            }
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          submenu.classList.remove('active');
        } else {
          item.classList.add('active');
          submenu.classList.add('active');
        }
      });
    });
  }
}

// Initialize Navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
  });
} else {
  new Navigation();
}
