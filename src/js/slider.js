/**
 * Hero Slider
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

class HeroSlider {
  constructor(container, options = {}) {
    this.container = container;
    this.slides = container.querySelectorAll('.hero-slide');
    this.currentIndex = 0;
    this.autoPlayInterval = options.autoPlayInterval || 6000;
    this.isPlaying = true;
    this.autoPlayTimer = null;

    this.init();
  }

  init() {
    if (this.slides.length === 0) return;

    this.createIndicators();
    this.setupControls();
    this.setupKeyboard();
    this.setupTouch();
    this.startAutoPlay();
  }

  createIndicators() {
    const indicatorsContainer = this.container.querySelector('.hero-indicators');
    if (!indicatorsContainer) return;

    this.slides.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.classList.add('hero-indicator');
      indicator.setAttribute('aria-label', `슬라이드 ${index + 1}로 이동`);
      if (index === 0) indicator.classList.add('active');

      indicator.addEventListener('click', () => {
        this.goToSlide(index);
        this.stopAutoPlay();
      });

      indicatorsContainer.appendChild(indicator);
    });

    this.indicators = indicatorsContainer.querySelectorAll('.hero-indicator');
  }

  setupControls() {
    const prevBtn = this.container.querySelector('.hero-prev');
    const nextBtn = this.container.querySelector('.hero-next');
    const arrowLeft = this.container.querySelector('.hero-arrow-left');
    const arrowRight = this.container.querySelector('.hero-arrow-right');
    const playPauseBtn = this.container.querySelector('.hero-play-pause');

    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    if (arrowLeft) arrowLeft.addEventListener('click', () => this.prev());
    if (arrowRight) arrowRight.addEventListener('click', () => this.next());

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    }

    // Pause on hover
    this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.container.addEventListener('mouseleave', () => this.startAutoPlay());
  }

  setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  setupTouch() {
    let touchStartX = 0;
    let touchEndX = 0;

    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      this.stopAutoPlay();
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }
    }, { passive: true });
  }

  goToSlide(index) {
    this.slides[this.currentIndex].classList.remove('active');
    if (this.indicators) {
      this.indicators[this.currentIndex].classList.remove('active');
    }

    this.currentIndex = (index + this.slides.length) % this.slides.length;

    this.slides[this.currentIndex].classList.add('active');
    if (this.indicators) {
      this.indicators[this.currentIndex].classList.add('active');
    }
  }

  next() {
    this.goToSlide(this.currentIndex + 1);
  }

  prev() {
    this.goToSlide(this.currentIndex - 1);
  }

  startAutoPlay() {
    if (this.isPlaying) {
      this.stopAutoPlay();
      this.autoPlayTimer = setInterval(() => this.next(), this.autoPlayInterval);
    }
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    const playPauseBtn = this.container.querySelector('.hero-play-pause');

    if (this.isPlaying) {
      this.startAutoPlay();
      if (playPauseBtn) {
        playPauseBtn.textContent = '❚❚';
        playPauseBtn.setAttribute('aria-label', '자동 재생 일시정지');
      }
    } else {
      this.stopAutoPlay();
      if (playPauseBtn) {
        playPauseBtn.textContent = '▶';
        playPauseBtn.setAttribute('aria-label', '자동 재생 시작');
      }
    }
  }
}

// Initialize Hero Slider
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) new HeroSlider(heroSlider);
  });
} else {
  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider) new HeroSlider(heroSlider);
}
