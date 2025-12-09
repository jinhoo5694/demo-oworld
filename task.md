# Task Implementation Checklist
## Daejeon O'World Landing Page Renewal

이 문서는 PRD.md에 정의된 요구사항을 5단계로 나누어 구현하기 위한 상세 체크리스트입니다.

---

## Phase 1: Foundation Setup

### 1.1 Project Structure
- [ ] 프로젝트 디렉토리 구조 생성
  - [ ] `src/` 폴더 생성
  - [ ] `src/css/` 폴더 생성
  - [ ] `src/css/components/` 폴더 생성
  - [ ] `src/css/sections/` 폴더 생성
  - [ ] `src/js/` 폴더 생성
  - [ ] `src/images/` 폴더 생성
  - [ ] `src/images/hero/` 폴더 생성
  - [ ] `src/images/events/` 폴더 생성
  - [ ] `src/images/icons/` 폴더 생성
  - [ ] `dist/` 폴더 생성

### 1.2 Design System - CSS Variables
- [ ] `src/css/variables.css` 생성
  - [ ] Primary colors 정의 (`--color-primary`, `--color-primary-dark`, `--color-primary-light`)
  - [ ] Secondary colors 정의 (`--color-secondary`, `--color-secondary-dark`)
  - [ ] Neutral colors 정의 (Gray 50-900)
  - [ ] Semantic colors 정의 (success, warning, error, info)
  - [ ] Spacing system 정의 (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
  - [ ] Typography variables 정의 (font-family, font-size, line-height)
  - [ ] Transition variables 정의 (speed, easing)
  - [ ] Container max-width 정의 (1440px)
  - [ ] Breakpoints 주석 추가

### 1.3 Base Styles
- [ ] `src/css/base.css` 생성
  - [ ] CSS Reset (Box-sizing, margin, padding)
  - [ ] Global font family 적용 (Pretendard, Noto Sans KR)
  - [ ] Body 기본 스타일 (font-size, line-height, color)
  - [ ] Smooth scroll behavior 추가
  - [ ] Skip to content link 스타일
  - [ ] Focus indicator 기본 스타일 (outline 2px)
  - [ ] 이미지 기본 스타일 (max-width: 100%, height: auto)

### 1.4 Layout System
- [ ] `src/css/layout.css` 생성
  - [ ] Container 스타일 (max-width, padding, margin)
  - [ ] 12-column grid system 구현
  - [ ] Flexbox utilities (justify-content, align-items)
  - [ ] Responsive breakpoints 적용 (Mobile-First)
  - [ ] Section spacing utilities

### 1.5 Base HTML Structure
- [ ] `src/index.html` 생성
  - [ ] HTML5 doctype 선언
  - [ ] `<head>` 섹션 작성
    - [ ] Meta charset UTF-8
    - [ ] Viewport meta tag
    - [ ] Title tag (SEO 최적화)
    - [ ] Meta description
    - [ ] Meta keywords
    - [ ] Open Graph tags (og:title, og:description, og:image, og:url)
    - [ ] Twitter Card tags
    - [ ] Favicon links
    - [ ] CSS links (variables.css, base.css, layout.css)
  - [ ] Structured Data (JSON-LD) 추가
    - [ ] TouristAttraction schema
    - [ ] Address, phone, opening hours 포함
  - [ ] `<body>` 기본 구조
    - [ ] Skip to content link
    - [ ] `<header>` 태그
    - [ ] `<main>` 태그
    - [ ] `<footer>` 태그
    - [ ] JavaScript links (defer 속성)

### 1.6 Font Loading
- [ ] Pretendard 웹폰트 로드 (CDN 또는 로컬)
- [ ] Noto Sans KR 웹폰트 로드 (Google Fonts)
- [ ] Font-display: swap 설정 (성능 최적화)

### 1.7 Initial Testing
- [ ] HTML Validation (W3C)
- [ ] CSS Validation (W3C)
- [ ] 브라우저에서 기본 구조 확인

---

## Phase 2: Core Sections Development

### 2.1 Header/Navigation

#### 2.1.1 HTML Structure
- [ ] `<header>` 내부 구조 작성
  - [ ] Logo (SVG 또는 이미지)
  - [ ] `<nav>` 태그로 메인 네비게이션
    - [ ] 5개 메인 메뉴 (O!World?, 이용정보, 축제및이벤트, 즐길거리, 예매하기)
    - [ ] 각 메뉴별 하위 메뉴 (Dropdown)
  - [ ] 검색 버튼/아이콘
  - [ ] 로그인 버튼
  - [ ] Mobile 햄버거 메뉴 버튼
- [ ] ARIA attributes 추가
  - [ ] `aria-label` for navigation
  - [ ] `aria-expanded` for dropdowns
  - [ ] `aria-controls` for mobile menu

#### 2.1.2 CSS Styling
- [ ] `src/css/sections/header.css` 생성
  - [ ] Desktop header 스타일
    - [ ] Flexbox layout (logo, menu, search, login)
    - [ ] Logo 크기 및 정렬
    - [ ] Menu 가로 배치, 적절한 spacing
    - [ ] Hover 효과 (색상 변경)
  - [ ] Dropdown menu 스타일
    - [ ] Position absolute
    - [ ] 배경색, 그림자, border-radius
    - [ ] Hover 시 표시 (opacity, visibility)
    - [ ] 부드러운 transition
  - [ ] Sticky header 스타일
    - [ ] Position sticky, top: 0
    - [ ] Background blur (backdrop-filter)
    - [ ] Box-shadow 추가
    - [ ] Scrolled state 스타일 (padding 축소)
  - [ ] Mobile header 스타일 (< 768px)
    - [ ] 햄버거 아이콘 표시
    - [ ] 메인 메뉴 숨김
    - [ ] Logo 중앙 또는 좌측 정렬
  - [ ] Mobile overlay menu 스타일
    - [ ] Full-screen overlay
    - [ ] 아코디언 submenu
    - [ ] Close 버튼 (X)
    - [ ] 부드러운 slide-in animation

#### 2.1.3 JavaScript
- [ ] `src/js/navigation.js` 생성
  - [ ] Dropdown toggle (hover/click)
  - [ ] Mobile menu open/close
  - [ ] Submenu accordion (mobile)
  - [ ] Sticky header scroll detection
  - [ ] Active menu highlighting
  - [ ] Keyboard navigation (Tab, Enter, Esc)

### 2.2 Hero Section

#### 2.2.1 HTML Structure
- [ ] Hero section 마크업
  - [ ] `<section id="hero">` 태그
  - [ ] Slider container
  - [ ] 6개 slide 요소
    - [ ] 각 slide에 이미지 (`<picture>` 태그)
    - [ ] Content overlay (title, subtitle, CTA button)
  - [ ] Previous/Next 버튼
  - [ ] Indicators (dots 또는 pagination)
  - [ ] Play/Pause 버튼 (접근성)
- [ ] ARIA attributes
  - [ ] `aria-label` for slider
  - [ ] `aria-live="polite"` for slide changes
  - [ ] `aria-label` for prev/next buttons

#### 2.2.2 CSS Styling
- [ ] `src/css/sections/hero.css` 생성
  - [ ] Full-width slider container
  - [ ] Height: 100vh (desktop), 60vh (mobile)
  - [ ] Slide 기본 스타일 (position relative)
  - [ ] Image 스타일 (object-fit: cover, 100% width/height)
  - [ ] Content overlay 스타일
    - [ ] Position absolute, 중앙 정렬
    - [ ] Title, subtitle typography
    - [ ] CTA button 스타일
    - [ ] 반투명 배경 (선택)
  - [ ] Previous/Next 버튼 스타일
    - [ ] Position absolute, left/right
    - [ ] 화살표 아이콘 (SVG 또는 Font Awesome)
    - [ ] Hover 효과
  - [ ] Indicators 스타일
    - [ ] Position absolute, bottom
    - [ ] Dots 배치 (flexbox)
    - [ ] Active indicator 강조
  - [ ] Slide transition animation (fade 또는 slide)

#### 2.2.3 JavaScript
- [ ] `src/js/slider.js` 생성
  - [ ] Slider class 구현
    - [ ] Constructor (container, options)
    - [ ] goToSlide(index)
    - [ ] next() / prev()
    - [ ] startAutoPlay() / stopAutoPlay()
    - [ ] updateIndicators()
    - [ ] createControls()
  - [ ] Auto-play 기능 (5-7초 간격)
  - [ ] User interaction 시 auto-play 일시 정지
  - [ ] Touch swipe 지원 (touchstart, touchend)
  - [ ] Keyboard navigation (Arrow keys)
  - [ ] Indicator click 이벤트
  - [ ] Slider 인스턴스 초기화

### 2.3 Quick Info Section

#### 2.3.1 HTML Structure
- [ ] Quick Info section 마크업
  - [ ] `<section id="quick-info">` 태그
  - [ ] 4개 info cards
    1. [ ] 운영시간 (아이콘 + 제목 + 시간)
    2. [ ] 나이트 유니버스 (아이콘 + 제목 + 시간)
    3. [ ] 사파리 운영시간 (아이콘 + 제목 + 시간)
    4. [ ] 고객센터 (아이콘 + 제목 + 전화번호)
  - [ ] 전화번호에 `tel:042-580-4820` 링크

#### 2.3.2 CSS Styling
- [ ] `src/css/sections/quick-info.css` 생성
  - [ ] Section padding, background color
  - [ ] Grid layout (4 columns on desktop)
  - [ ] Responsive layout
    - [ ] Desktop: 4 columns
    - [ ] Tablet: 2x2 grid
    - [ ] Mobile: stack vertically
  - [ ] Info card 스타일
    - [ ] 아이콘 크기 및 색상
    - [ ] 제목 typography
    - [ ] 정보 텍스트 스타일
    - [ ] Border, box-shadow (선택)
    - [ ] Hover 효과

#### 2.3.3 JavaScript (API Integration - Phase 5)
- [ ] Placeholder: API 연동 준비 (나중에 구현)

### 2.4 Footer

#### 2.4.1 HTML Structure
- [ ] `<footer>` 마크업
  - [ ] Logo
  - [ ] Sitemap column (5개 메인 메뉴)
  - [ ] Contact info column (주소, 전화, 팩스)
  - [ ] Policies column (개인정보처리방침, 영상정보처리기기운영방침)
  - [ ] SNS icons (Facebook, Instagram, YouTube, Blog, KakaoTalk)
  - [ ] Copyright 텍스트

#### 2.4.2 CSS Styling
- [ ] `src/css/sections/footer.css` 생성
  - [ ] Footer background color, padding
  - [ ] Multi-column layout (desktop: 4 columns)
  - [ ] Responsive layout
    - [ ] Desktop: 4 columns (flexbox or grid)
    - [ ] Mobile: stack vertically
  - [ ] Logo 크기
  - [ ] Sitemap links 스타일 (list-style: none, spacing)
  - [ ] Contact info typography
  - [ ] Policies links 스타일
  - [ ] SNS icons 스타일
    - [ ] Flexbox row
    - [ ] Hover 효과 (색상 변경 또는 scale)
  - [ ] Copyright 텍스트 스타일 (중앙 정렬, 작은 폰트)

---

## Phase 3: Content Sections

### 3.1 Main Services Section

#### 3.1.1 HTML Structure
- [ ] Main Services section 마크업
  - [ ] `<section id="services">` 태그
  - [ ] Section title: "O'World 주요 서비스"
  - [ ] 5개 service cards (grid layout)
    1. [ ] 이용권 예약
    2. [ ] 회원권 예약
    3. [ ] 예약 확인
    4. [ ] 요금 & 할인
    5. [ ] 단체 예약
  - [ ] 각 카드: 아이콘/이미지 + 제목 + 설명 + CTA 버튼 (선택)

#### 3.1.2 CSS Styling
- [ ] `src/css/sections/services.css` 생성
  - [ ] Section padding, background
  - [ ] Title typography (h2)
  - [ ] Grid layout
    - [ ] Desktop: 3 + 2 layout (grid-template-columns)
    - [ ] Tablet: 2 + 2 + 1
    - [ ] Mobile: 1 column
  - [ ] Card component 스타일
    - [ ] `src/css/components/card.css` (공통 카드 스타일)
    - [ ] Border, border-radius, box-shadow
    - [ ] Padding, background
    - [ ] 아이콘/이미지 크기
    - [ ] 제목, 설명 typography
    - [ ] Hover 효과 (scale 1.05, shadow 증가)
    - [ ] Transition (0.3s ease)

### 3.2 OWORLD&EVENT Section

#### 3.2.1 HTML Structure
- [ ] Events section 마크업
  - [ ] `<section id="events">` 태그
  - [ ] Section title: "축제 & 이벤트"
  - [ ] 6개 event cards (grid layout)
  - [ ] 각 카드: 썸네일 이미지 + 제목 + 날짜 + 설명 (선택)
  - [ ] 이미지에 lazy loading 적용 (`data-src` attribute)

#### 3.2.2 CSS Styling
- [ ] `src/css/sections/events.css` 생성
  - [ ] Section padding, background
  - [ ] Title typography
  - [ ] Grid layout
    - [ ] Desktop: 3 columns
    - [ ] Tablet: 2 columns
    - [ ] Mobile: 1 column
  - [ ] Event card 스타일
    - [ ] 썸네일 이미지 (aspect-ratio: 4/3)
    - [ ] Image hover 효과 (zoom in, overflow: hidden)
    - [ ] 제목, 날짜 typography
    - [ ] Hover overlay (반투명 배경 + 텍스트)

#### 3.2.3 JavaScript (API Integration - Phase 5)
- [ ] Placeholder: 이벤트 API 연동 준비

### 3.3 NEWS&NOTICE Section

#### 3.3.1 HTML Structure
- [ ] News & Notice section 마크업
  - [ ] `<section id="news">` 태그
  - [ ] Section title: "뉴스 & 공지사항"
  - [ ] 공지사항 리스트 (최대 5개)
    - [ ] 각 항목: [NEW] 뱃지 (선택) + 제목 + 날짜
  - [ ] "더보기" 버튼

#### 3.3.2 CSS Styling
- [ ] `src/css/sections/news.css` 생성
  - [ ] Section padding, background
  - [ ] Title typography
  - [ ] List 스타일 (list-style: none)
  - [ ] List item 스타일
    - [ ] Flexbox (제목 + 날짜 양쪽 정렬)
    - [ ] Border-bottom
    - [ ] Padding
    - [ ] Hover 효과 (background color)
  - [ ] [NEW] 뱃지 스타일
    - [ ] Background color (빨강 또는 주황)
    - [ ] Small font, bold
    - [ ] Border-radius
  - [ ] "더보기" 버튼 스타일
    - [ ] `src/css/components/button.css` (공통 버튼 스타일)
    - [ ] Primary button 스타일
    - [ ] Hover 효과

#### 3.3.3 JavaScript (API Integration - Phase 5)
- [ ] Placeholder: 공지사항 API 연동 준비

### 3.4 SNS & Community Section

#### 3.4.1 HTML Structure
- [ ] SNS section 마크업
  - [ ] `<section id="sns">` 태그
  - [ ] Section title: "O'World와 소통하기"
  - [ ] 5개 SNS 링크
    1. [ ] Facebook
    2. [ ] Instagram
    3. [ ] YouTube
    4. [ ] Blog
    5. [ ] KakaoTalk
  - [ ] 각 링크: SVG 아이콘 + `target="_blank" rel="noopener noreferrer"`

#### 3.4.2 CSS Styling
- [ ] `src/css/sections/sns.css` 생성
  - [ ] Section padding, background
  - [ ] Title typography
  - [ ] SNS icons container (flexbox, justify-content: center)
  - [ ] Icon 스타일
    - [ ] 크기 (48px x 48px)
    - [ ] Margin spacing
    - [ ] Hover 효과 (색상 변경, scale 1.1)
    - [ ] Transition

#### 3.4.3 Assets
- [ ] SVG 아이콘 준비 또는 Font Awesome 사용
  - [ ] Facebook icon
  - [ ] Instagram icon
  - [ ] YouTube icon
  - [ ] Blog icon
  - [ ] KakaoTalk icon

---

## Phase 4: Interactions & Features

### 4.1 Slider Enhancements

#### 4.1.1 Advanced Features
- [ ] `src/js/slider.js` 업데이트
  - [ ] Infinite loop 구현
  - [ ] Smooth transition 최적화
  - [ ] Preload next/prev slides (성능)
  - [ ] Pause on focus (접근성)
  - [ ] ARIA live region 업데이트

#### 4.1.2 Touch Gestures
- [ ] Touch swipe 세밀 조정
  - [ ] Swipe threshold (50px)
  - [ ] Swipe velocity 계산
  - [ ] Bounce-back animation

### 4.2 Modal/Popup System

#### 4.2.1 HTML Structure
- [ ] 4개 Popup 마크업
  - [ ] `<div class="popup" id="popup-1">` ~ `popup-4`
  - [ ] Popup overlay
  - [ ] Popup content (이미지 또는 HTML)
  - [ ] Close 버튼 (X)
  - [ ] "오늘 하루 보지 않기" 체크박스 + 버튼

#### 4.2.2 CSS Styling
- [ ] `src/css/components/modal.css` 생성
  - [ ] Popup overlay (position fixed, full-screen, 반투명 배경)
  - [ ] Popup content 스타일
    - [ ] Position fixed, 중앙 정렬
    - [ ] Max-width, padding
    - [ ] Background, border-radius, box-shadow
  - [ ] Close 버튼 스타일 (우측 상단, 절대 위치)
  - [ ] "오늘 하루 보지 않기" 체크박스 스타일
  - [ ] Fade-in/out animation (opacity, visibility)
  - [ ] Hidden state (display: none)

#### 4.2.3 JavaScript
- [ ] `src/js/popup.js` 생성
  - [ ] PopupManager class 구현
    - [ ] shouldShowPopup() - localStorage 체크
    - [ ] hideForToday() - localStorage 설정
    - [ ] show() / close()
  - [ ] ESC key close
  - [ ] Overlay click close
  - [ ] X button click close
  - [ ] "오늘 하루 보지 않기" 버튼 클릭 이벤트
  - [ ] 4개 popup 인스턴스 초기화

### 4.3 Dropdown Menu (Desktop)

#### 4.3.1 JavaScript
- [ ] `src/js/navigation.js` 업데이트
  - [ ] Hover 이벤트로 dropdown 표시/숨김
  - [ ] Delay 추가 (마우스 이동 시 flickering 방지)
  - [ ] 키보드 네비게이션
    - [ ] Arrow down: submenu 첫 항목으로 이동
    - [ ] Arrow up/down: submenu 항목 간 이동
    - [ ] ESC: dropdown 닫기

### 4.4 Mobile Hamburger Menu

#### 4.4.1 JavaScript
- [ ] `src/js/navigation.js` 업데이트
  - [ ] 햄버거 버튼 클릭 → 전체화면 메뉴 열기
  - [ ] Close 버튼 클릭 → 메뉴 닫기
  - [ ] ESC key → 메뉴 닫기
  - [ ] Body scroll 제어 (메뉴 열릴 때 overflow: hidden)
  - [ ] 아코디언 submenu 토글
    - [ ] 메뉴 클릭 → 하위 메뉴 펼침/접힘
    - [ ] ARIA attributes 업데이트 (aria-expanded)

#### 4.4.2 CSS Enhancements
- [ ] `src/css/sections/header.css` 업데이트
  - [ ] 햄버거 아이콘 애니메이션 (3줄 → X)
  - [ ] Menu slide-in animation (transform: translateX)

### 4.5 Scroll Animations

#### 4.5.1 JavaScript
- [ ] `src/js/scroll-animations.js` 생성
  - [ ] Intersection Observer 설정
    - [ ] Root margin: 50px
    - [ ] Threshold: 0.1
  - [ ] 모든 section 요소 observe
  - [ ] isIntersecting 시 "visible" class 추가
  - [ ] Fade-in + Slide-up animation 트리거

#### 4.5.2 CSS
- [ ] `src/css/base.css` 업데이트
  - [ ] Section 기본 상태 (opacity: 0, transform: translateY(20px))
  - [ ] ".visible" class 스타일 (opacity: 1, transform: translateY(0))
  - [ ] Transition (0.8s ease-out)
  - [ ] Stagger delay (nth-child 활용)

### 4.6 Lazy Loading Images

#### 4.6.1 JavaScript
- [ ] `src/js/lazy-loading.js` 생성
  - [ ] Intersection Observer 설정
    - [ ] Root margin: 100px
  - [ ] 모든 `img[data-src]` 요소 observe
  - [ ] isIntersecting 시 `data-src` → `src` 변경
  - [ ] "loaded" class 추가
  - [ ] unobserve 호출

#### 4.6.2 HTML Updates
- [ ] Hero slider 이미지에 `data-src` 적용
- [ ] Event cards 이미지에 `data-src` 적용
- [ ] Placeholder 이미지 설정 (선택)

### 4.7 Back to Top Button

#### 4.7.1 HTML Structure
- [ ] Back to top button 마크업
  - [ ] `<button id="back-to-top" aria-label="맨 위로">`
  - [ ] 화살표 아이콘 (SVG)

#### 4.7.2 CSS Styling
- [ ] `src/css/components/button.css` 업데이트
  - [ ] Position fixed, 우측 하단
  - [ ] 원형 버튼 (border-radius: 50%)
  - [ ] Background color, box-shadow
  - [ ] Hidden by default (opacity: 0, visibility: hidden)
  - [ ] ".visible" state (opacity: 1, visibility: visible)
  - [ ] Hover 효과

#### 4.7.3 JavaScript
- [ ] `src/js/scroll-animations.js` 업데이트
  - [ ] Scroll event listener
  - [ ] 일정 스크롤 이상 시 (e.g., 300px) 버튼 표시
  - [ ] 버튼 클릭 → smooth scroll to top

### 4.8 Search Functionality

#### 4.8.1 HTML Structure
- [ ] Search form 마크업
  - [ ] `<form id="search-form">`
  - [ ] `<input type="search" id="search-input" placeholder="검색어 입력">`
  - [ ] `<button type="submit">검색</button>`

#### 4.8.2 CSS Styling
- [ ] `src/css/components/form.css` 생성
  - [ ] Search input 스타일
  - [ ] Search button 스타일
  - [ ] Focus state 스타일
  - [ ] Mobile에서 확장 가능한 검색창 (선택)

#### 4.8.3 JavaScript
- [ ] `src/js/navigation.js` 업데이트
  - [ ] Form submit 이벤트
  - [ ] 검색어 validation ("검색값을 입력해 주십시오")
  - [ ] 검색 결과 페이지로 이동 (기존 백엔드 URL)

---

## Phase 5: Integration & Optimization

### 5.1 API Integration

#### 5.1.1 API Helper
- [ ] `src/js/api.js` 생성
  - [ ] `fetchNotices()` 함수 (공지사항 API)
  - [ ] `fetchEvents()` 함수 (이벤트 API)
  - [ ] `fetchOperatingInfo()` 함수 (운영 시간 API)
  - [ ] Error handling (try-catch)
  - [ ] Loading state management
  - [ ] Retry logic (선택)

#### 5.1.2 Notices Integration
- [ ] `src/js/main.js` 업데이트
  - [ ] fetchNotices() 호출
  - [ ] 최근 3-5개 공지사항 렌더링
  - [ ] [NEW] 뱃지 로직 (최근 7일 이내)
  - [ ] 날짜 포맷 (YYYY.MM.DD)
  - [ ] 클릭 시 상세 페이지 이동

#### 5.1.3 Events Integration
- [ ] `src/js/main.js` 업데이트
  - [ ] fetchEvents() 호출
  - [ ] 6개 이벤트 카드 렌더링
  - [ ] 썸네일 이미지 lazy loading
  - [ ] 클릭 시 상세 페이지 이동

#### 5.1.4 Operating Info Integration
- [ ] `src/js/main.js` 업데이트
  - [ ] fetchOperatingInfo() 호출
  - [ ] Quick Info 섹션 업데이트
  - [ ] 실시간 정보 반영 (운영시간, 나이트 유니버스, 사파리)

### 5.2 OnePass Login Integration

#### 5.2.1 HTML
- [ ] 로그인 버튼에 ID 추가 (`id="login-btn"`)

#### 5.2.2 JavaScript
- [ ] `src/js/main.js` 업데이트
  - [ ] 로그인 버튼 클릭 이벤트
  - [ ] OnePass 팝업 윈도우 열기
    - [ ] `window.open(url, 'onepass', 'width=500,height=600')`
  - [ ] 팝업 통신 (postMessage 또는 기존 방식)
  - [ ] 로그인 성공 시 세션 처리
  - [ ] UI 업데이트 (로그인 버튼 → 사용자 정보)

### 5.3 Identity Verification Integration

#### 5.3.1 JavaScript
- [ ] 본인인증 필요한 페이지에서 팝업 호출
  - [ ] 5가지 인증 방법 선택 UI (기존 방식 유지)
  - [ ] 각 인증 방법별 팝업 URL
  - [ ] 인증 완료 콜백 처리

### 5.4 Image Optimization

#### 5.4.1 Hero Images
- [ ] 6개 hero 이미지 최적화
  - [ ] 해상도: 1920x1080px
  - [ ] 포맷: WebP (fallback: JPG)
  - [ ] 파일 크기: < 500KB
  - [ ] Responsive images (Desktop, Tablet, Mobile 버전)
  - [ ] `<picture>` 태그로 srcset 설정

#### 5.4.2 Event Thumbnails
- [ ] 6개 이벤트 썸네일 최적화
  - [ ] 해상도: 800x600px
  - [ ] 포맷: WebP (fallback: JPG)
  - [ ] 파일 크기: < 200KB

#### 5.4.3 Icons
- [ ] 모든 아이콘을 SVG로 변환
  - [ ] Logo SVG
  - [ ] SNS icons SVG
  - [ ] UI icons (화살표, 햄버거 등) SVG

### 5.5 Performance Optimization

#### 5.5.1 CSS Optimization
- [ ] Critical CSS 인라인 (선택)
- [ ] 사용하지 않는 CSS 제거
- [ ] CSS 파일 minify (build tool)

#### 5.5.2 JavaScript Optimization
- [ ] JavaScript 파일 minify
- [ ] Code splitting (선택)
- [ ] Defer/Async 속성 최적화
- [ ] 불필요한 console.log 제거

#### 5.5.3 Font Optimization
- [ ] Font subset 생성 (한글 자소 최소화)
- [ ] Preload critical fonts
- [ ] Font-display: swap

#### 5.5.4 Resource Hints
- [ ] `<link rel="preconnect">` for external domains
- [ ] `<link rel="dns-prefetch">` for APIs
- [ ] `<link rel="preload">` for critical resources

### 5.6 Accessibility Verification

#### 5.6.1 WCAG 2.1 AA Checklist
- [ ] 모든 이미지에 alt 텍스트 확인
- [ ] ARIA 속성 재검토
  - [ ] aria-label
  - [ ] aria-labelledby
  - [ ] aria-describedby
  - [ ] aria-expanded
  - [ ] aria-controls
  - [ ] aria-live
  - [ ] aria-hidden
- [ ] Heading hierarchy 검증 (h1 → h2 → h3)
- [ ] Focus indicator 가시성 확인 (모든 인터랙티브 요소)
- [ ] Color contrast 비율 확인 (4.5:1 이상)
- [ ] Form labels 확인 (모든 input에 label 연결)
- [ ] Skip to content link 작동 확인

#### 5.6.2 Keyboard Navigation Testing
- [ ] Tab 키로 모든 요소 접근 가능
- [ ] Shift+Tab 역방향 네비게이션
- [ ] Enter/Space 키로 버튼/링크 활성화
- [ ] Arrow keys로 slider/dropdown 제어
- [ ] ESC 키로 modal/dropdown 닫기
- [ ] Focus trap in modals

#### 5.6.3 Screen Reader Testing
- [ ] NVDA 또는 JAWS로 전체 페이지 테스트
- [ ] 이미지 alt 텍스트 읽기 확인
- [ ] ARIA live region 업데이트 확인
- [ ] Form 요소 레이블 읽기 확인

### 5.7 Cross-Browser Testing

#### 5.7.1 Desktop Browsers
- [ ] Chrome (최신 2개 버전)
  - [ ] Layout 확인
  - [ ] 기능 테스트 (slider, dropdown, modal)
  - [ ] Performance 측정
- [ ] Firefox (최신 2개 버전)
  - [ ] Layout 확인
  - [ ] 기능 테스트
  - [ ] CSS 호환성 확인
- [ ] Safari (최신 2개 버전)
  - [ ] Layout 확인
  - [ ] 기능 테스트
  - [ ] Webkit 특이사항 확인
- [ ] Edge (최신 2개 버전)
  - [ ] Layout 확인
  - [ ] 기능 테스트

#### 5.7.2 Mobile Browsers
- [ ] iOS Safari
  - [ ] iPhone SE (375px)
  - [ ] iPhone 12 (390px)
  - [ ] Touch interactions
  - [ ] Viewport 설정 확인
- [ ] Chrome Mobile
  - [ ] Android 디바이스
  - [ ] Touch swipe 확인
- [ ] Samsung Internet
  - [ ] Layout 확인
  - [ ] 기능 테스트

### 5.8 Responsive Testing

#### 5.8.1 Breakpoint Testing
- [ ] 320px (iPhone SE)
  - [ ] Layout stack 확인
  - [ ] 터치 타겟 크기 확인 (44x44px)
  - [ ] 폰트 크기 가독성 확인
- [ ] 375px (iPhone 12)
  - [ ] Layout 확인
  - [ ] Hero 높이 (60vh) 확인
- [ ] 414px (iPhone 12 Pro Max)
  - [ ] Layout 확인
- [ ] 768px (iPad)
  - [ ] Grid 2열 확인
  - [ ] Header 레이아웃 확인
- [ ] 1024px (iPad Pro / Small Desktop)
  - [ ] Desktop layout 전환 확인
  - [ ] Grid 3열 확인
- [ ] 1366px (일반 노트북)
  - [ ] Container max-width 확인
  - [ ] Spacing 확인
- [ ] 1920px (Full HD)
  - [ ] Container 중앙 정렬 확인
  - [ ] 좌우 여백 확인

#### 5.8.2 Orientation Testing
- [ ] Portrait (세로) 모드 확인
- [ ] Landscape (가로) 모드 확인
- [ ] Orientation change 시 layout 재조정 확인

### 5.9 Performance Testing

#### 5.9.1 Lighthouse Audit
- [ ] Desktop 테스트
  - [ ] Performance > 90
  - [ ] Accessibility > 95
  - [ ] Best Practices > 90
  - [ ] SEO > 90
- [ ] Mobile 테스트
  - [ ] Performance > 80
  - [ ] Accessibility > 95
  - [ ] Best Practices > 90
  - [ ] SEO > 90

#### 5.9.2 Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5초
  - [ ] Hero 이미지 최적화
  - [ ] Critical CSS 인라인
- [ ] FID (First Input Delay) < 100ms
  - [ ] JavaScript 최적화
  - [ ] Long tasks 제거
- [ ] CLS (Cumulative Layout Shift) < 0.1
  - [ ] 이미지 크기 명시 (width, height)
  - [ ] Font loading 최적화
  - [ ] 동적 콘텐츠 삽입 방지

#### 5.9.3 WebPageTest
- [ ] Fast 3G 환경에서 테스트
- [ ] Slow 3G 환경에서 테스트
- [ ] Waterfall 차트 분석
  - [ ] Render-blocking resources 확인
  - [ ] 불필요한 요청 제거

### 5.10 SEO Optimization

#### 5.10.1 Meta Tags Verification
- [ ] Title tag 최적화 (60자 이내)
- [ ] Meta description 최적화 (160자 이내)
- [ ] Meta keywords 추가
- [ ] Open Graph tags 검증
  - [ ] og:image 이미지 확인 (1200x630px 권장)
- [ ] Twitter Card tags 검증

#### 5.10.2 Structured Data
- [ ] JSON-LD 스키마 검증 (Google Rich Results Test)
- [ ] TouristAttraction 스키마 정보 확인
  - [ ] name, description, url
  - [ ] address, telephone
  - [ ] openingHours
  - [ ] image, sameAs

#### 5.10.3 Sitemap & Robots
- [ ] sitemap.xml 생성
  - [ ] 모든 주요 페이지 포함
  - [ ] Priority, changefreq 설정
- [ ] robots.txt 생성
  - [ ] Allow/Disallow 규칙
  - [ ] Sitemap 위치 명시

### 5.11 Security

#### 5.11.1 HTTPS
- [ ] HTTPS 적용 확인
- [ ] Mixed content 경고 확인 (모든 리소스 HTTPS)

#### 5.11.2 Content Security Policy
- [ ] CSP 헤더 설정 (서버 설정 또는 meta tag)
- [ ] script-src, style-src, img-src 정의

#### 5.11.3 Input Validation
- [ ] 검색어 입력 XSS 방지
- [ ] Form 입력 sanitization

#### 5.11.4 External Links
- [ ] 모든 외부 링크에 `rel="noopener noreferrer"` 추가
- [ ] SNS 링크 확인

### 5.12 Final Validation

#### 5.12.1 HTML Validation
- [ ] W3C Markup Validation Service
- [ ] 모든 에러 및 경고 수정

#### 5.12.2 CSS Validation
- [ ] W3C CSS Validation Service
- [ ] 모든 에러 수정 (경고는 선택)

#### 5.12.3 JavaScript Linting
- [ ] ESLint 설정 (선택)
- [ ] 모든 린팅 에러 수정

---

## Phase 6: Pre-Launch Final Checklist

### 6.1 Functionality Testing
- [ ] 모든 링크 작동 확인 (내부/외부)
- [ ] Hero slider 자동 재생/수동 제어 확인
- [ ] Dropdown 메뉴 작동 확인 (Desktop)
- [ ] Mobile 햄버거 메뉴 작동 확인
- [ ] 검색 기능 작동 확인
- [ ] OnePass 로그인 작동 확인
- [ ] 본인인증 팝업 작동 확인
- [ ] API 연동 확인 (공지사항, 이벤트, 운영 시간)
- [ ] "오늘 하루 보지 않기" 기능 확인
- [ ] SNS 링크 작동 확인 (새 창 열기)
- [ ] Back to top 버튼 작동 확인
- [ ] Lazy loading 작동 확인
- [ ] Scroll animations 작동 확인

### 6.2 Design Consistency
- [ ] 모든 섹션이 디자인 시스템을 따름
- [ ] 색상 일관성 확인 (변수 사용)
- [ ] Typography 일관성 확인
- [ ] Spacing 일관성 확인
- [ ] 버튼 스타일 일관성 확인
- [ ] 카드 스타일 일관성 확인

### 6.3 Content Review
- [ ] 모든 텍스트 오타 확인
- [ ] 이미지 alt 텍스트 확인
- [ ] 링크 URL 정확성 확인
- [ ] 전화번호 확인 (042-580-4820)
- [ ] 주소 확인 (35073 대전광역시 중구 사정공원로 70)

### 6.4 Performance Final Check
- [ ] Lighthouse 점수 확인 (Desktop/Mobile)
- [ ] Core Web Vitals 확인
- [ ] 페이지 로드 시간 < 3초
- [ ] 이미지 최적화 확인 (모든 이미지 < 목표 크기)
- [ ] 불필요한 리소스 제거

### 6.5 Accessibility Final Check
- [ ] WAVE 검사 통과
- [ ] 키보드 네비게이션 전체 확인
- [ ] 스크린 리더 테스트 (NVDA 또는 JAWS)
- [ ] Color contrast 확인 (모든 텍스트)
- [ ] Focus indicator 확인

### 6.6 Browser Compatibility Final Check
- [ ] Chrome 최종 테스트
- [ ] Firefox 최종 테스트
- [ ] Safari 최종 테스트
- [ ] Edge 최종 테스트
- [ ] iOS Safari 최종 테스트
- [ ] Chrome Mobile 최종 테스트

### 6.7 Documentation
- [ ] README.md 작성
  - [ ] 프로젝트 개요
  - [ ] 설치 방법
  - [ ] 개발 환경 설정
  - [ ] 빌드 방법 (선택)
  - [ ] 배포 방법
- [ ] CHANGELOG.md 작성 (선택)
- [ ] 코드 주석 확인

### 6.8 Deployment Preparation
- [ ] 프로덕션 빌드 생성 (minify, optimize)
- [ ] 환경 변수 설정 (API endpoints 등)
- [ ] .gitignore 확인 (dist/, node_modules/ 등)
- [ ] Git commit & push
- [ ] 서버 환경 확인 (HTTPS, CORS, CSP)

---

## Success Criteria

모든 Phase를 완료하면 다음 기준을 만족해야 합니다:

### Technical
- ✅ Lighthouse Performance > 90 (Desktop), > 80 (Mobile)
- ✅ Lighthouse Accessibility > 95
- ✅ LCP < 2.5s, FID < 100ms, CLS < 0.1
- ✅ WCAG 2.1 AA 준수
- ✅ 모든 브라우저에서 정상 작동 (Chrome, Firefox, Safari, Edge)
- ✅ 모든 디바이스 해상도 지원 (320px ~ 1920px+)

### Functional
- ✅ 기존 기능 100% 유지 (OnePass 로그인, 본인인증, 검색, API 연동)
- ✅ Hero slider 작동 (자동/수동 재생, 터치 지원)
- ✅ 모든 navigation 작동 (Desktop dropdown, Mobile hamburger)
- ✅ Popup "오늘 하루 보지 않기" 작동
- ✅ SNS 링크 정상 작동

### Design
- ✅ 현대적이고 깔끔한 UI
- ✅ 일관된 디자인 시스템 적용
- ✅ 반응형 레이아웃 (Mobile-First)
- ✅ 부드러운 애니메이션 및 인터랙션

### Quality
- ✅ HTML/CSS W3C Validation 통과
- ✅ 접근성 테스트 통과 (WAVE, 키보드, 스크린 리더)
- ✅ SEO 최적화 (Meta tags, Structured data, Sitemap)
- ✅ 보안 요구사항 충족 (HTTPS, CSP, Input validation)

---

**End of Task Checklist**
