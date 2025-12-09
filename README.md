# 대전 오월드 랜딩 페이지 리뉴얼

대전 오월드(Daejeon O'World) 공식 웹사이트 랜딩 페이지 리뉴얼 프로젝트입니다.

## 📋 프로젝트 개요

- **목적**: 기존 오월드 웹사이트의 UI/UX 개선 및 현대적 디자인 적용
- **범위**: 메인 랜딩 페이지만 리뉴얼 (백엔드 변경 없음)
- **기술 스택**: Vanilla JavaScript (ES6+), Modern CSS, HTML5

## 🎯 주요 특징

### 디자인 시스템
- **Mobile-First** 반응형 디자인
- **12-Column Grid System** 레이아웃
- **디자인 토큰**: CSS Variables 기반 테마 시스템
- **접근성**: WCAG 2.1 AA 준수

### 성능 최적화
- **Lazy Loading**: Intersection Observer API 이미지 최적화
- **Code Splitting**: 모듈화된 JavaScript 구조
- **Cache Strategy**: API 응답 5분 캐싱
- **목표**: Lighthouse 점수 90+ 달성

### 주요 기능
1. **Hero Slider** (6장): Auto-play, 터치 스와이프, 키보드 네비게이션
2. **Sticky Header**: 스크롤 감지, 블러 효과
3. **Mobile Menu**: 전체화면 오버레이, 아코디언 서브메뉴
4. **Popup System**: 4개 팝업 관리, "오늘 하루 보지 않기" 기능
5. **Search**: 통합 검색 모달, 필터링, 하이라이팅
6. **Scroll Animations**: 8가지 애니메이션 타입
7. **Back to Top**: 부드러운 스크롤 애니메이션

## 🏗️ 프로젝트 구조

```
Daejeon-Oworld-v2/
├── src/
│   ├── css/
│   │   ├── variables.css           # 디자인 토큰 (색상, 간격, 타이포그래피)
│   │   ├── base.css                # CSS Reset, 전역 스타일
│   │   ├── layout.css              # Grid System, Flexbox 유틸리티
│   │   ├── components/
│   │   │   ├── card.css            # 재사용 가능한 카드 컴포넌트
│   │   │   ├── button.css          # 버튼 스타일 (Back to Top 포함)
│   │   │   ├── modal.css           # Modal & Popup & Search 스타일
│   │   │   ├── animations.css      # Scroll Animations
│   │   │   └── lazy-loading.css    # Lazy Loading 효과
│   │   └── sections/
│   │       ├── header.css          # Header, Navigation, Mobile Menu
│   │       ├── hero.css            # Hero Slider
│   │       ├── quick-info.css      # Quick Info 카드
│   │       └── footer.css          # Footer
│   ├── js/
│   │   ├── main.js                 # 진입점, 유틸리티 함수
│   │   ├── navigation.js           # Header, Mobile Menu, Sticky
│   │   ├── slider.js               # Hero Slider (auto-play, swipe, keyboard)
│   │   ├── lazy-loading.js         # Intersection Observer 이미지 로딩
│   │   ├── scroll-animations.js    # Scroll-triggered animations
│   │   ├── popup.js                # Popup Manager, Modal
│   │   ├── back-to-top.js          # Back to Top 버튼
│   │   ├── api.js                  # API Service, Content Renderer
│   │   └── search.js               # Search Modal
│   ├── images/                     # 이미지 에셋
│   └── index.html                  # 메인 HTML
├── PRD.md                          # Product Requirements Document
├── task.md                         # 구현 체크리스트
├── CLAUDE.md                       # Claude Code 가이드
└── README.md                       # 이 파일
```

## 🎨 디자인 시스템

### Breakpoints (Mobile-First)
```css
Mobile:  320px - 767px
Tablet:  768px - 1023px
Desktop: 1024px+
Max Width: 1440px
```

### Color Palette
```css
Primary:   #00A86B (O'World Green)
Secondary: #FF6B35 (Accent Orange)
Gray Scale: 50 → 900
```

### Typography
```css
Font Family: Pretendard (primary), Noto Sans KR (fallback)
Body Size: 14px (Mobile) → 18px (Desktop)
Headings: H1 28px → 48px
```

### Spacing System
```css
--spacing-xs:  4px
--spacing-sm:  8px
--spacing-md:  16px
--spacing-lg:  24px
--spacing-xl:  32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 96px
```

## 🚀 시작하기

### 설치 및 실행

1. **저장소 클론**
```bash
git clone <repository-url>
cd Daejeon-Oworld-v2
```

2. **로컬 서버 실행**

Python을 사용하는 경우:
```bash
cd src
python -m http.server 8000
```

Node.js를 사용하는 경우:
```bash
npm install -g http-server
cd src
http-server -p 8000
```

3. **브라우저에서 열기**
```
http://localhost:8000
```

### 개발 환경
- 최신 Chrome, Firefox, Safari, Edge 지원
- IE 지원 없음
- Node.js 환경 불필요 (Vanilla JS)

## 📱 페이지 구성 (8개 섹션)

1. **Header/Navigation** - Sticky, 5개 메뉴, 드롭다운
2. **Hero Section** - 6-image auto-slider, 5-7초 간격
3. **Quick Info** - 운영시간, 나이트 유니버스, 사파리, 고객센터
4. **Main Services** - 5개 서비스 카드 (예약, 회원권, 요금 등)
5. **Events** - 6개 이벤트 카드, NEW 뱃지
6. **News & Notice** - 최신 3-5개 공지사항
7. **SNS & Community** - 5개 소셜 미디어 링크
8. **Footer** - 4-column 레이아웃, 사이트맵, 연락처

## 🔧 주요 기능 사용법

### Hero Slider
```javascript
// 자동 초기화됨
// 수동 제어:
const slider = new HeroSlider(document.querySelector('.hero-slider'), {
  autoPlayInterval: 6000, // 6초
  autoPlay: true
});

slider.next();  // 다음 슬라이드
slider.prev();  // 이전 슬라이드
slider.goTo(2); // 특정 슬라이드로 이동
```

### Popup Manager
```javascript
// "오늘 하루 보지 않기" 상태 초기화 (테스트용)
window.popupManager.clearClosedStates();
```

### Search Modal
```javascript
// 검색 열기
window.searchModal.open();

// 검색 닫기
window.searchModal.close();
```

### Lazy Loading
```html
<!-- data-src 속성 사용 -->
<img data-src="path/to/image.jpg" alt="Description" class="card-image">
```

### Scroll Animations
```html
<!-- data-animate 속성으로 애니메이션 지정 -->
<div data-animate="fade-up" data-animate-delay="200">
  컨텐츠
</div>

<!-- 사용 가능한 애니메이션: -->
<!-- fade, fade-up, fade-down, fade-left, fade-right, scale, zoom, rotate -->
```

## 🔌 API 통합

### API Service
```javascript
// API 호출 예시
const api = window.apiService;

// 공지사항 가져오기
const notices = await api.getNotices(3);

// 이벤트 가져오기
const events = await api.getEvents(6);

// 운영 정보 가져오기
const info = await api.getOperatingInfo();

// 검색
const results = await api.search('나이트 유니버스', { type: 'all' });
```

### Content Renderer
```javascript
// 동적 컨텐츠 렌더링
const renderer = window.contentRenderer;

// 공지사항 렌더링
await renderer.renderNotices('news-list', 3);

// 이벤트 렌더링
await renderer.renderEvents('events-grid', 6);

// 운영 정보 업데이트
await renderer.updateOperatingInfo();
```

## ✅ 테스트 체크리스트

### 브라우저 테스트
- [ ] Chrome (최신 2 버전)
- [ ] Firefox (최신 2 버전)
- [ ] Safari (최신 2 버전)
- [ ] Edge (최신 2 버전)

### 반응형 테스트
- [ ] Mobile: 320px, 375px, 414px
- [ ] Tablet: 768px, 1024px
- [ ] Desktop: 1366px, 1920px

### 기능 테스트
- [ ] Hero Slider: Auto-play, 수동 제어, 터치 스와이프
- [ ] Navigation: 드롭다운, Mobile Menu, Sticky
- [ ] Popup: 4개 팝업 표시, "오늘 하루 보지 않기"
- [ ] Search: 검색, 필터링, 하이라이팅
- [ ] Lazy Loading: 이미지 지연 로딩
- [ ] Scroll Animations: Viewport 진입 시 애니메이션
- [ ] Back to Top: 300px 스크롤 후 표시

### 접근성 테스트
- [ ] Keyboard Navigation (Tab, Enter, Escape, Arrow keys)
- [ ] Screen Reader (NVDA, JAWS)
- [ ] Color Contrast (4.5:1 for text, 3:1 for UI)
- [ ] ARIA Labels
- [ ] Focus Indicators

### 성능 테스트
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90
- [ ] Page Load < 3초
- [ ] LCP < 2.5초
- [ ] FID < 100ms
- [ ] CLS < 0.1

## 📝 개발 가이드

### CSS Variables 사용
```css
/* 색상 */
color: var(--color-primary);
background-color: var(--color-gray-50);

/* 간격 */
padding: var(--spacing-md);
margin-bottom: var(--spacing-xl);

/* 타이포그래피 */
font-size: var(--font-size-body);
font-weight: var(--font-weight-bold);

/* 애니메이션 */
transition: all var(--transition-speed) var(--transition-easing);
```

### Utility Classes
```html
<!-- Grid System -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 컨텐츠 -->
</div>

<!-- Flexbox -->
<div class="flex justify-center items-center gap-md">
  <!-- 컨텐츠 -->
</div>

<!-- Spacing -->
<div class="p-md m-lg">
  <!-- 컨텐츠 -->
</div>

<!-- Text Alignment -->
<h2 class="text-center">제목</h2>
```

## 🐛 알려진 이슈

현재 알려진 이슈 없음. 발견 시 GitHub Issues에 등록 바랍니다.

## 📄 라이센스

이 프로젝트는 대전 오월드의 공식 프로젝트입니다.

## 🤝 기여

기여를 환영합니다! Pull Request를 제출하기 전에:

1. 코드 스타일 가이드 준수
2. 모든 테스트 체크리스트 통과
3. PRD.md 및 task.md 확인

## 📞 연락처

- **대전 오월드 고객센터**: 042-580-4820
- **주소**: 대전광역시 중구 사정공원로 70 (35073)

## 📚 참고 문서

- [PRD.md](PRD.md) - 전체 요구사항 문서
- [task.md](task.md) - 구현 체크리스트
- [CLAUDE.md](CLAUDE.md) - Claude Code 개발 가이드

---

**대전 오월드** - 동물원, 사파리, 놀이공원을 한 곳에서!
