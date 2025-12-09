/**
 * Popup & Modal System
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

/**
 * Modal Class
 */
class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    if (!this.modal) return;

    this.overlay = this.modal.closest('.modal-overlay');
    this.closeBtn = this.modal.querySelector('.modal-close');
    this.body = document.body;

    this.init();
  }

  init() {
    // Close button click
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Overlay click (close on background click)
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });
    }

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  open() {
    if (this.overlay) {
      this.overlay.classList.add('active');
      this.body.classList.add('modal-open');

      // Focus first focusable element
      const focusable = this.modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        focusable[0].focus();
      }

      // Emit open event
      this.modal.dispatchEvent(new CustomEvent('modalopen'));
    }
  }

  close() {
    if (this.overlay) {
      this.overlay.classList.remove('active');
      this.body.classList.remove('modal-open');

      // Emit close event
      this.modal.dispatchEvent(new CustomEvent('modalclose'));
    }
  }

  isOpen() {
    return this.overlay && this.overlay.classList.contains('active');
  }
}

/**
 * Popup Manager Class
 * Manages multiple popups with "오늘 하루 보지 않기" functionality
 */
class PopupManager {
  constructor() {
    this.popups = [];
    this.backdrop = null;
    this.currentPopupIndex = 0;
    this.storageKey = 'oworld_popup_closed';

    this.init();
  }

  init() {
    // Create backdrop
    this.createBackdrop();

    // Find all popup elements
    const popupElements = document.querySelectorAll('.popup-zone');

    popupElements.forEach((popup, index) => {
      const popupId = popup.id || `popup-${index}`;
      popup.id = popupId;

      const popupData = {
        id: popupId,
        element: popup,
        closeBtn: popup.querySelector('.popup-close-btn'),
        closeX: popup.querySelector('.popup-close-x'),
        checkbox: popup.querySelector('.popup-checkbox'),
        shouldShow: !this.isPopupClosed(popupId)
      };

      this.popups.push(popupData);
      this.setupPopupEvents(popupData);
    });

    // Popups disabled by default - can be triggered manually if needed
    // setTimeout(() => {
    //   this.showNextPopup();
    // }, 1000);
  }

  /**
   * Create backdrop element
   */
  createBackdrop() {
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'popup-backdrop';
    document.body.appendChild(this.backdrop);

    // Close popup when clicking backdrop
    this.backdrop.addEventListener('click', () => {
      this.closeCurrentPopup(false);
    });
  }

  /**
   * Setup event listeners for a popup
   */
  setupPopupEvents(popupData) {
    // Close button
    if (popupData.closeBtn) {
      popupData.closeBtn.addEventListener('click', () => {
        const dontShowToday = popupData.checkbox && popupData.checkbox.checked;
        this.closePopup(popupData, dontShowToday);
      });
    }

    // X button
    if (popupData.closeX) {
      popupData.closeX.addEventListener('click', () => {
        this.closePopup(popupData, false);
      });
    }

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && popupData.element.classList.contains('active')) {
        this.closePopup(popupData, false);
      }
    });
  }

  /**
   * Show next popup in queue
   */
  showNextPopup() {
    // Find next popup that should be shown
    while (this.currentPopupIndex < this.popups.length) {
      const popup = this.popups[this.currentPopupIndex];

      if (popup.shouldShow) {
        this.showPopup(popup);
        return;
      }

      this.currentPopupIndex++;
    }

    // No more popups to show
    this.hideBackdrop();
  }

  /**
   * Show a specific popup
   */
  showPopup(popupData) {
    popupData.element.classList.add('active');
    this.backdrop.classList.add('active');
    document.body.classList.add('modal-open');
  }

  /**
   * Close a specific popup
   */
  closePopup(popupData, dontShowToday = false) {
    popupData.element.classList.remove('active');

    if (dontShowToday) {
      this.setPopupClosed(popupData.id);
    }

    // Show next popup after a short delay
    this.currentPopupIndex++;
    setTimeout(() => {
      this.showNextPopup();
    }, 300);
  }

  /**
   * Close current popup
   */
  closeCurrentPopup(dontShowToday = false) {
    if (this.currentPopupIndex < this.popups.length) {
      const popup = this.popups[this.currentPopupIndex];
      this.closePopup(popup, dontShowToday);
    }
  }

  /**
   * Hide backdrop
   */
  hideBackdrop() {
    this.backdrop.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  /**
   * Check if popup was closed today
   */
  isPopupClosed(popupId) {
    try {
      const closedPopups = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
      const closedDate = closedPopups[popupId];

      if (!closedDate) return false;

      // Check if it's the same day
      const today = new Date().toDateString();
      const closed = new Date(closedDate).toDateString();

      return today === closed;
    } catch (e) {
      console.error('Error reading popup state:', e);
      return false;
    }
  }

  /**
   * Mark popup as closed for today
   */
  setPopupClosed(popupId) {
    try {
      const closedPopups = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
      closedPopups[popupId] = new Date().toISOString();
      localStorage.setItem(this.storageKey, JSON.stringify(closedPopups));
    } catch (e) {
      console.error('Error saving popup state:', e);
    }
  }

  /**
   * Clear all popup closed states (for testing)
   */
  clearClosedStates() {
    localStorage.removeItem(this.storageKey);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.popupManager = new PopupManager();
  });
} else {
  window.popupManager = new PopupManager();
}

// Export for external use
window.Modal = Modal;
window.PopupManager = PopupManager;
