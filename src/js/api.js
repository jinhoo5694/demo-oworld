/**
 * API Integration Service
 * 대전 오월드 랜딩 페이지 리뉴얼
 */

class APIService {
  constructor(options = {}) {
    this.baseURL = options.baseURL || '/api';
    this.timeout = options.timeout || 10000;
    this.cache = new Map();
    this.cacheDuration = options.cacheDuration || 5 * 60 * 1000; // 5 minutes
  }

  /**
   * Generic fetch wrapper with timeout and error handling
   */
  async fetch(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    // Check cache first
    if (options.cache !== false) {
      const cached = this.getFromCache(endpoint);
      if (cached) {
        return cached;
      }
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      // Cache successful response
      if (options.cache !== false) {
        this.setCache(endpoint, data);
      }

      return data;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }

      throw error;
    }
  }

  /**
   * Cache management
   */
  getFromCache(key) {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const { data, timestamp } = cached;
    const isExpired = Date.now() - timestamp > this.cacheDuration;

    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return data;
  }

  setCache(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  clearCache() {
    this.cache.clear();
  }

  /**
   * Get notices/announcements
   */
  async getNotices(limit = 3) {
    try {
      const data = await this.fetch(`/notices?limit=${limit}`);
      return data;
    } catch (error) {
      console.error('Failed to fetch notices:', error);
      // Return mock data as fallback
      return this.getMockNotices(limit);
    }
  }

  /**
   * Get events
   */
  async getEvents(limit = 6) {
    try {
      const data = await this.fetch(`/events?limit=${limit}`);
      return data;
    } catch (error) {
      console.error('Failed to fetch events:', error);
      // Return mock data as fallback
      return this.getMockEvents(limit);
    }
  }

  /**
   * Get operating hours info
   */
  async getOperatingInfo() {
    try {
      const data = await this.fetch('/operating-info');
      return data;
    } catch (error) {
      console.error('Failed to fetch operating info:', error);
      return this.getMockOperatingInfo();
    }
  }

  /**
   * Search functionality
   */
  async search(query, options = {}) {
    const { type = 'all', limit = 10 } = options;

    try {
      const data = await this.fetch(`/search?q=${encodeURIComponent(query)}&type=${type}&limit=${limit}`, {
        cache: false // Don't cache search results
      });
      return data;
    } catch (error) {
      console.error('Search failed:', error);
      return { results: [] };
    }
  }

  /**
   * Mock data fallbacks
   */
  getMockNotices(limit = 3) {
    const notices = [
      {
        id: 1,
        title: '2025년 설 연휴 운영 안내',
        date: '2025.12.09',
        isNew: false,
        link: '#notice-1'
      },
      {
        id: 2,
        title: '겨울 나이트 유니버스 운영 시간 변경 안내',
        date: '2025.12.05',
        isNew: false,
        link: '#notice-2'
      },
      {
        id: 3,
        title: '주차장 이용 안내',
        date: '2025.12.01',
        isNew: false,
        link: '#notice-3'
      },
      {
        id: 4,
        title: '단체 예약 안내',
        date: '2025.11.28',
        isNew: false,
        link: '#notice-4'
      },
      {
        id: 5,
        title: '반려동물 동반 입장 불가 안내',
        date: '2025.11.20',
        isNew: false,
        link: '#notice-5'
      }
    ];

    return notices.slice(0, limit);
  }

  getMockEvents(limit = 6) {
    const events = [
      {
        id: 1,
        title: '겨울 나이트 유니버스',
        description: '화려한 조명과 함께하는 겨울밤 특별 이벤트',
        image: 'https://cdn.pixabay.com/photo/2015/08/07/15/47/fireworks-879461_1280.jpg',
        startDate: '2025.12.01',
        endDate: '2025.02.28',
        isNew: true,
        link: '#event-1'
      },
      {
        id: 2,
        title: '동물 먹이주기 체험',
        description: '사파리 동물들에게 직접 먹이를 주는 체험',
        image: 'https://images.unsplash.com/photo-1707051488964-0cae28e92300?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        startDate: null,
        endDate: null,
        isNew: false,
        status: '상시 운영',
        link: '#event-2'
      },
      {
        id: 3,
        title: '버드랜드 퍼포먼스',
        description: '앵무새와 함께하는 즐거운 공연',
        image: 'https://images.unsplash.com/photo-1544923408-75c5cef46f14?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        schedule: '매일 11:00, 15:00',
        isNew: false,
        link: '#event-3'
      },
      {
        id: 4,
        title: '사파리 투어',
        description: '직접 차를 타고 동물들을 만나보세요',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        schedule: '10:00 - 17:00',
        isNew: false,
        link: '#event-4'
      },
      {
        id: 5,
        title: '플라워 페스티벌',
        description: '봄꽃 축제로 만나는 화려한 정원',
        image: 'https://plus.unsplash.com/premium_photo-1667423049497-291580083466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        startDate: '2025.03.01',
        endDate: '2025.05.31',
        isNew: false,
        link: '#event-5'
      },
      {
        id: 6,
        title: '특별 할인 이벤트',
        description: '신년 맞이 특별 할인 혜택',
        image: 'https://plus.unsplash.com/premium_vector-1762923080921-e424e63ddccc?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        startDate: '2025.01.01',
        endDate: '2025.01.31',
        isNew: true,
        link: '#event-6'
      }
    ];

    return events.slice(0, limit);
  }

  getMockOperatingInfo() {
    return {
      zoo: {
        open: '09:30',
        close: '18:00',
        lastEntry: '17:00'
      },
      nightUniverse: {
        open: '18:00',
        close: '22:00',
        lastEntry: '21:00',
        season: 'winter'
      },
      safari: {
        open: '10:00',
        close: '17:30',
        lastEntry: '17:00'
      },
      contact: {
        phone: '042-580-4820',
        fax: '042-580-4711'
      },
      holidays: [],
      notice: null
    };
  }
}

/**
 * Content Renderer
 * Dynamically updates DOM with API data
 */
class ContentRenderer {
  constructor(apiService) {
    this.api = apiService;
  }

  /**
   * Render notices section
   */
  async renderNotices(containerId = 'news-list', limit = 3) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
      const notices = await this.api.getNotices(limit);

      container.innerHTML = notices.map(notice => `
        <li class="news-item">
          ${notice.isNew ? '<span class="card-badge">NEW</span>' : ''}
          <a href="${notice.link}" class="news-link">
            <span class="news-title">${notice.title}</span>
            <span class="news-date">${notice.date}</span>
          </a>
        </li>
      `).join('');
    } catch (error) {
      console.error('Failed to render notices:', error);
    }
  }

  /**
   * Render events section
   */
  async renderEvents(containerId = 'events-grid', limit = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
      const events = await this.api.getEvents(limit);

      container.innerHTML = events.map((event, index) => {
        const delay = (index + 1) * 100;
        const dateText = event.schedule ||
                         (event.startDate && event.endDate ? `${event.startDate} - ${event.endDate}` : '') ||
                         event.status || '';

        return `
          <div class="card" data-animate="fade-up" data-animate-delay="${delay}">
            <img src="${event.image}" alt="${event.title}" class="card-image" loading="lazy">
            <div class="card-content">
              ${event.isNew ? '<span class="card-badge">NEW</span>' : ''}
              <h3 class="card-title">${event.title}</h3>
              ${dateText ? `<p class="card-meta">${dateText}</p>` : ''}
            </div>
          </div>
        `;
      }).join('');

      // Refresh lazy loader and scroll animations
      if (window.lazyLoader) {
        window.lazyLoader.refresh();
      }
      if (window.scrollAnimations) {
        window.scrollAnimations.refresh();
      }
    } catch (error) {
      console.error('Failed to render events:', error);
    }
  }

  /**
   * Update operating info
   */
  async updateOperatingInfo() {
    try {
      const info = await this.api.getOperatingInfo();

      // Update quick info cards
      const operatingHours = document.querySelector('.quick-info-card:nth-child(1) .quick-info-content');
      if (operatingHours && info.zoo) {
        operatingHours.textContent = `${info.zoo.open} - ${info.zoo.close}`;
      }

      const nightHours = document.querySelector('.quick-info-card:nth-child(2) .quick-info-content');
      if (nightHours && info.nightUniverse) {
        nightHours.textContent = `${info.nightUniverse.open} - ${info.nightUniverse.close}`;
      }

      const safariHours = document.querySelector('.quick-info-card:nth-child(3) .quick-info-content');
      if (safariHours && info.safari) {
        safariHours.textContent = `${info.safari.open} - ${info.safari.close}`;
      }

      const contactPhone = document.querySelector('.quick-info-card:nth-child(4) .quick-info-link');
      if (contactPhone && info.contact) {
        contactPhone.textContent = info.contact.phone;
        contactPhone.href = `tel:${info.contact.phone.replace(/-/g, '')}`;
      }
    } catch (error) {
      console.error('Failed to update operating info:', error);
    }
  }
}

// Initialize API service and content renderer
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.apiService = new APIService();
    window.contentRenderer = new ContentRenderer(window.apiService);

    // Load dynamic content
    window.contentRenderer.renderNotices();
    window.contentRenderer.renderEvents();
    window.contentRenderer.updateOperatingInfo();
  });
} else {
  window.apiService = new APIService();
  window.contentRenderer = new ContentRenderer(window.apiService);

  // Load dynamic content
  window.contentRenderer.renderNotices();
  window.contentRenderer.renderEvents();
  window.contentRenderer.updateOperatingInfo();
}
