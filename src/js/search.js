/**
 * Search Functionality
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

class SearchModal {
  constructor(apiService) {
    this.api = apiService;
    this.modal = null;
    this.overlay = null;
    this.searchInput = null;
    this.searchResults = null;
    this.searchBtn = null;
    this.mobileSearchBtn = null;
    this.isOpen = false;

    this.init();
  }

  init() {
    this.createModal();
    this.setupEventListeners();
  }

  /**
   * Create search modal HTML
   */
  createModal() {
    const modalHTML = `
      <div class="modal-overlay" id="search-modal-overlay">
        <div class="modal search-modal" role="dialog" aria-labelledby="search-modal-title" aria-modal="true">
          <div class="modal-header">
            <h2 id="search-modal-title" class="modal-title">검색</h2>
            <button class="modal-close" aria-label="검색창 닫기">×</button>
          </div>
          <div class="modal-body">
            <div class="search-input-wrapper">
              <input
                type="text"
                class="search-input"
                placeholder="검색어를 입력하세요..."
                aria-label="검색어 입력"
                autocomplete="off"
              >
              <button class="search-submit-btn" aria-label="검색">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <div class="search-filters">
              <button class="search-filter active" data-filter="all">전체</button>
              <button class="search-filter" data-filter="notice">공지사항</button>
              <button class="search-filter" data-filter="event">이벤트</button>
              <button class="search-filter" data-filter="info">이용정보</button>
            </div>
            <div class="search-results" id="search-results">
              <div class="search-empty">
                <p>검색어를 입력하세요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    this.overlay = document.getElementById('search-modal-overlay');
    this.modal = this.overlay.querySelector('.search-modal');
    this.searchInput = this.modal.querySelector('.search-input');
    this.searchResults = document.getElementById('search-results');
    this.closeBtn = this.modal.querySelector('.modal-close');
    this.submitBtn = this.modal.querySelector('.search-submit-btn');
    this.filters = this.modal.querySelectorAll('.search-filter');
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Search buttons
    this.searchBtn = document.querySelector('.search-btn');
    this.mobileSearchBtn = document.querySelector('.mobile-search-btn');

    if (this.searchBtn) {
      this.searchBtn.addEventListener('click', () => this.open());
    }

    if (this.mobileSearchBtn) {
      this.mobileSearchBtn.addEventListener('click', () => this.open());
    }

    // Close button
    this.closeBtn.addEventListener('click', () => this.close());

    // Overlay click
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Search input
    this.searchInput.addEventListener('input', debounce((e) => {
      this.handleSearch(e.target.value);
    }, 300));

    // Submit button
    this.submitBtn.addEventListener('click', () => {
      this.handleSearch(this.searchInput.value);
    });

    // Enter key
    this.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleSearch(this.searchInput.value);
      }
    });

    // Filters
    this.filters.forEach(filter => {
      filter.addEventListener('click', () => {
        this.setActiveFilter(filter);
        this.handleSearch(this.searchInput.value);
      });
    });
  }

  /**
   * Open search modal
   */
  open() {
    this.overlay.classList.add('active');
    document.body.classList.add('modal-open');
    this.isOpen = true;

    // Focus search input
    setTimeout(() => {
      this.searchInput.focus();
    }, 100);
  }

  /**
   * Close search modal
   */
  close() {
    this.overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    this.isOpen = false;

    // Clear search
    this.searchInput.value = '';
    this.showEmptyState();
  }

  /**
   * Set active filter
   */
  setActiveFilter(activeFilter) {
    this.filters.forEach(filter => {
      filter.classList.remove('active');
    });
    activeFilter.classList.add('active');
  }

  /**
   * Handle search
   */
  async handleSearch(query) {
    if (!query || query.trim().length < 2) {
      this.showEmptyState();
      return;
    }

    const activeFilter = this.modal.querySelector('.search-filter.active');
    const filterType = activeFilter.dataset.filter;

    this.showLoading();

    try {
      const results = await this.api.search(query, { type: filterType });
      this.renderResults(results, query);
    } catch (error) {
      console.error('Search error:', error);
      this.showError();
    }
  }

  /**
   * Render search results
   */
  renderResults(data, query) {
    const results = data.results || this.getMockSearchResults(query);

    if (results.length === 0) {
      this.showNoResults(query);
      return;
    }

    const resultsHTML = `
      <div class="search-results-header">
        <p><strong>${results.length}</strong>개의 검색 결과</p>
      </div>
      <ul class="search-results-list">
        ${results.map(result => `
          <li class="search-result-item">
            <a href="${result.link}" class="search-result-link">
              <div class="search-result-type">${result.type}</div>
              <h3 class="search-result-title">${this.highlightQuery(result.title, query)}</h3>
              ${result.description ? `<p class="search-result-description">${this.highlightQuery(result.description, query)}</p>` : ''}
              ${result.date ? `<span class="search-result-date">${result.date}</span>` : ''}
            </a>
          </li>
        `).join('')}
      </ul>
    `;

    this.searchResults.innerHTML = resultsHTML;
  }

  /**
   * Highlight search query in text
   */
  highlightQuery(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  /**
   * Show states
   */
  showEmptyState() {
    this.searchResults.innerHTML = `
      <div class="search-empty">
        <p>검색어를 입력하세요</p>
      </div>
    `;
  }

  showLoading() {
    this.searchResults.innerHTML = `
      <div class="search-loading">
        <div class="spinner"></div>
        <p>검색 중...</p>
      </div>
    `;
  }

  showNoResults(query) {
    this.searchResults.innerHTML = `
      <div class="search-empty">
        <p>"<strong>${query}</strong>"에 대한 검색 결과가 없습니다.</p>
      </div>
    `;
  }

  showError() {
    this.searchResults.innerHTML = `
      <div class="search-error">
        <p>검색 중 오류가 발생했습니다. 다시 시도해주세요.</p>
      </div>
    `;
  }

  /**
   * Mock search results for testing
   */
  getMockSearchResults(query) {
    const allResults = [
      {
        type: '공지사항',
        title: '2025년 설 연휴 운영 안내',
        description: '설 연휴 기간 동안의 운영 시간과 특별 프로그램 안내',
        date: '2025.12.09',
        link: '#notice-1'
      },
      {
        type: '이벤트',
        title: '겨울 나이트 유니버스',
        description: '화려한 조명과 함께하는 겨울밤 특별 이벤트',
        date: '2025.12.01 - 2025.02.28',
        link: '#event-1'
      },
      {
        type: '이용정보',
        title: '요금 안내',
        description: '오월드 이용 요금 및 할인 정보',
        link: '#price'
      },
      {
        type: '이벤트',
        title: '동물 먹이주기 체험',
        description: '사파리 동물들에게 직접 먹이를 주는 체험 프로그램',
        link: '#event-2'
      },
      {
        type: '이용정보',
        title: '운영 시간',
        description: '오월드 정규 운영 시간 및 나이트 유니버스 운영 안내',
        link: '#hours'
      },
      {
        type: '공지사항',
        title: '주차장 이용 안내',
        description: '주차 요금 및 이용 방법 안내',
        date: '2025.12.01',
        link: '#notice-3'
      }
    ];

    // Simple search filter
    const lowerQuery = query.toLowerCase();
    return allResults.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      (item.description && item.description.toLowerCase().includes(lowerQuery))
    );
  }
}

// Initialize search when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.apiService) {
      window.searchModal = new SearchModal(window.apiService);
    }
  });
} else {
  if (window.apiService) {
    window.searchModal = new SearchModal(window.apiService);
  }
}
