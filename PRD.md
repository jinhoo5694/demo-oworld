# Product Requirements Document (PRD)
## Daejeon O'World Landing Page Renewal

---

## 1. Project Overview

### 1.1 Project Summary
**대전 오월드(Daejeon O'World)** 공식 홈페이지의 메인 랜딩 페이지를 현대적이고 사용자 친화적인 디자인으로 전면 리뉴얼합니다.

- **Current Site**: https://www.oworld.kr/newkfsweb/kfs/dcco/dccoMainindex.do
- **Project Scope**: 메인 랜딩 페이지 UI/UX 리뉴얼 (백엔드 변경 없음)
- **Timeline**: 5 phases (Phase 1-5)
- **Target Users**: 가족 단위 방문객, 개인 방문객, 단체 예약 고객

### 1.2 Business Goals
1. **사용자 경험 개선**: 직관적이고 현대적인 UI/UX 제공
2. **접근성 향상**: WCAG 2.1 AA 준수로 모든 사용자에게 동등한 접근성 보장
3. **모바일 최적화**: Mobile-First 설계로 모바일 사용자 경험 극대화
4. **성능 최적화**: 빠른 페이지 로딩으로 이탈률 감소
5. **전환율 증대**: 예매하기 동선 최적화로 티켓 구매 전환율 향상

### 1.3 Success Metrics
- **성능**: Lighthouse 점수 > 90, 페이지 로드 시간 < 3초
- **접근성**: WCAG 2.1 AA 준수, WAVE 검사 통과
- **반응성**: 모든 디바이스에서 정상 작동 (320px ~ 1920px+)
- **사용성**: 예매하기 전환율 20% 이상 증가 (목표)
- **브라우저 호환성**: Chrome, Firefox, Safari, Edge 최신 2개 버전 지원

---

## 2. Technical Requirements

### 2.1 Design System

#### 2.1.1 Breakpoints (Mobile-First)
```css
/* Mobile */
@media (min-width: 320px) { /* 320px - 767px */ }

/* Tablet */
@media (min-width: 768px) { /* 768px - 1023px */ }

/* Desktop */
@media (min-width: 1024px) { /* 1024px - 1920px+ */ }

/* Max Container Width */
max-width: 1440px;
```

#### 2.1.2 Typography
- **Font Families**:
  - Primary: `Pretendard`, sans-serif
  - Fallback: `Noto Sans KR`, sans-serif

- **Font Sizes**:
  - **Mobile**: Body 14-16px, Headings 18-28px
  - **Desktop**: Body 16-18px, Headings 24-48px

- **Font Weights**:
  - Regular: 400
  - Medium: 500
  - Bold: 700

- **Line Heights**:
  - Body: 1.6
  - Headings: 1.2-1.4

#### 2.1.3 Color Palette
```css
:root {
  /* Primary Colors */
  --color-primary: #00A86B;        /* O'World Green */
  --color-primary-dark: #008855;
  --color-primary-light: #33C48A;

  /* Secondary Colors */
  --color-secondary: #FF6B35;      /* Accent Orange */
  --color-secondary-dark: #E5501C;

  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  /* Semantic Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

#### 2.1.4 Spacing System
```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 96px;
}
```

#### 2.1.5 Layout Grid
- **12-column grid system**
- **Gutter**: 16px (mobile), 24px (tablet), 32px (desktop)
- **Container padding**: 16px (mobile), 24px (tablet), 40px (desktop)

#### 2.1.6 Touch Targets
- **Minimum size**: 44x44px (모든 인터랙티브 요소)
- **Button padding**: 최소 12px 상하, 24px 좌우

### 2.2 Performance Requirements

#### 2.2.1 Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5초
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### 2.2.2 Lighthouse Scores
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 90
- **Mobile Performance**: > 80

#### 2.2.3 Asset Optimization
- **Hero Images**: 1920x1080px, WebP/JPG, < 500KB
- **Event Thumbnails**: 800x600px, WebP/JPG, < 200KB
- **Icons**: SVG format preferred
- **Lazy Loading**: Intersection Observer API 활용
- **Image Optimization**: `srcset`, `<picture>` 태그 사용

### 2.3 Accessibility Requirements (WCAG 2.1 AA)

#### 2.3.1 Keyboard Navigation
- 모든 인터랙티브 요소에 키보드로 접근 가능
- `Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc` 키 지원
- Focus indicator 명확히 표시 (outline 최소 2px)

#### 2.3.2 Screen Reader Support
- 모든 이미지에 적절한 `alt` 텍스트
- ARIA 속성 사용: `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-controls`
- Semantic HTML5 태그 사용: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Heading hierarchy 준수 (h1 → h2 → h3)

#### 2.3.3 Color Contrast
- **Text**: 4.5:1 이상
- **Large Text** (18pt 이상 또는 14pt bold): 3:1 이상
- **UI Components**: 3:1 이상

#### 2.3.4 Responsive Text
- 텍스트 200% 확대 시에도 레이아웃 유지
- `rem`, `em` 단위 사용 (고정 `px` 최소화)

### 2.4 Browser Support
- **Chrome**: 최신 2개 버전
- **Firefox**: 최신 2개 버전
- **Safari**: 최신 2개 버전
- **Edge**: 최신 2개 버전
- **Internet Explorer**: 지원 안 함 (EOL)

---

## 3. Feature Requirements

### 3.1 Features to Preserve (기존 기능 유지)

모든 기존 기능은 리뉴얼 후에도 **반드시 유지**되어야 합니다.

#### 3.1.1 Authentication & Login
- **OnePass 통합 로그인**: 기존 OnePass API 연동 유지
- **본인인증 시스템** (5가지 방법):
  1. 아이핀 (i-PIN)
  2. 휴대폰 SMS 인증
  3. 계좌 인증
  4. 신용카드 인증
  5. 공인인증서 인증
- 팝업 윈도우 방식 유지

#### 3.1.2 Search Functionality
- 사이트 내 통합 검색 기능
- 검색어 입력 validation ("검색값을 입력해 주십시오")
- 검색 결과 페이지 연동

#### 3.1.3 Navigation
- **Main Menu Dropdown**: 5개 주요 메뉴 + 하위 메뉴
  1. **O! World?**: 소개, 서비스헌장, 지원서접수, 입찰공고, 사이트맵, 개인정보처리방침
  2. **이용정보**: 뉴스&공지, 이용안내, 요금&할인, 연간회원, 운휴안내, 주차시설, 교통정보, 부대시설, 고객마당, 가이드맵
  3. **축제 및 이벤트**: 공연안내, 버드랜드 퍼포먼스, 축제&이벤트
  4. **즐길거리**: 나이트 유니버스, 버드랜드, 조이랜드, 주랜드, 플라워랜드, 사파리랜드, 미니랜드
  5. **예매하기**: 이용권 예약, 회원권 예약, 예약확인

- **Mobile Hamburger Menu**: 모바일에서 전체화면 오버레이 메뉴

#### 3.1.4 Hero Slider
- **6개 이미지 슬라이더**
- 자동 재생: 5-7초 간격
- 사용자 제어: 이전/다음 버튼, 인디케이터 (점 또는 숫자)
- 사용자 인터랙션 시 자동 재생 일시 정지
- 터치 스와이프 지원 (모바일/태블릿)

#### 3.1.5 Event Banners
- **6개 이벤트 배너** (OWORLD&EVENT 섹션)
- 썸네일 이미지 + 제목 + 날짜
- 클릭 시 상세 페이지 이동
- 반응형 그리드 레이아웃 (Mobile: 1열, Tablet: 2열, Desktop: 3열)

#### 3.1.6 Popup Zone
- **4개 팝업 배너**
- "오늘 하루 보지 않기" 기능 (localStorage 또는 Cookie)
- ESC 키, 배경 클릭, X 버튼으로 닫기
- 팝업 위치 조정 가능 (드래그 가능하면 더 좋음)

#### 3.1.7 SNS Integration
- **5개 SNS 채널 링크**:
  1. Facebook
  2. Instagram
  3. YouTube
  4. Blog (Naver 또는 Tistory)
  5. KakaoTalk Channel

#### 3.1.8 Real-time Info Updates
- **운영 시간**: 실시간 업데이트 (API 연동)
  - 오월드 운영시간
  - 나이트 유니버스 운영시간
  - 사파리 운영시간
- **고객센터 전화번호**: 042-580-4820 (클릭 시 전화 걸기)

### 3.2 New Features (선택적 추가 기능)

#### 3.2.1 Scroll Animations
- Fade-in 애니메이션 (섹션이 뷰포트에 들어올 때)
- Intersection Observer API 활용
- 성능에 영향 없도록 `transform`, `opacity`만 사용

#### 3.2.2 Sticky Header
- 스크롤 시 헤더 고정
- 스크롤 다운 시 헤더 축소 애니메이션 (선택)
- 배경색 불투명도 증가 (가독성 향상)

#### 3.2.3 Back to Top Button
- 일정 스크롤 이후 우측 하단에 표시
- 부드러운 스크롤 애니메이션

#### 3.2.4 Parallax Effect (Optional)
- Hero 섹션에 패럴랙스 효과 적용 (성능 테스트 후 결정)

---

## 4. Page Structure & Sections

### 4.1 Header/Navigation

#### 4.1.1 Desktop Header
```
┌─────────────────────────────────────────────────────────────┐
│ Logo   O!World?  이용정보  축제및이벤트  즐길거리  예매하기    │
│                                        [Search] [Login]      │
└─────────────────────────────────────────────────────────────┘
       └──────┬─────────┘
              │ (Hover Dropdown)
              ├─ Submenu 1
              ├─ Submenu 2
              ├─ Submenu 3
              └─ ...
```

**Components**:
- Logo (좌측 상단, 클릭 시 홈으로)
- 5개 Main Menu (Hover 시 Dropdown)
- 검색 아이콘 (클릭 시 검색창 확장)
- 로그인 버튼 (OnePass 연동)

**Sticky Behavior**:
- 스크롤 시 헤더 고정
- 배경색: `rgba(255, 255, 255, 0.95)` + `backdrop-filter: blur(10px)`
- 그림자: `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`

#### 4.1.2 Mobile Header
```
┌─────────────────────────────────┐
│ [≡]  Logo            [Search]   │
└─────────────────────────────────┘
```

**Mobile Menu (Hamburger)**:
- 전체화면 오버레이
- 5개 Main Menu + 아코디언 Submenu
- 로그인 버튼
- SNS 링크
- 닫기 버튼 (X)

### 4.2 Hero Section

**Layout**:
- Full-width 슬라이더 (6개 이미지)
- 높이: `100vh` (Mobile: `60vh`)
- 이미지: 1920x1080px, WebP/JPG, < 500KB

**Controls**:
- 좌/우 화살표 버튼
- 하단 인디케이터 (점 또는 숫자)
- 자동 재생: 5-7초 간격
- 일시 정지/재생 버튼 (접근성)

**Content Overlay** (이미지 위에 텍스트):
- 슬라이드별 타이틀 + 서브타이틀
- CTA 버튼 (예: "지금 예매하기")

### 4.3 Quick Info Section

**Layout** (4 Columns on Desktop, 2x2 on Tablet, Stack on Mobile):
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ 🕐 운영시간  │ 🌙 나이트    │ 🦁 사파리    │ ☎️ 고객센터  │
│  09:30-18:00│  유니버스    │  운영시간    │ 042-580-4820│
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Components**:
- 아이콘 + 제목 + 정보
- 실시간 업데이트 (API 연동)
- 전화번호 클릭 시 `tel:042-580-4820`

### 4.4 Main Services Section

**Title**: "O'World 주요 서비스"

**Layout** (5 Cards - Responsive Grid):
- Desktop: 3 + 2 layout
- Tablet: 2 + 2 + 1 layout
- Mobile: Stack vertically

**Service Cards**:
1. **이용권 예약**: 온라인 티켓 구매
2. **회원권 예약**: 연간 회원권 구매
3. **예약 확인**: 예약 내역 조회/취소
4. **요금 & 할인**: 이용 요금 안내
5. **단체 예약**: 단체 방문 문의

**Card Design**:
- 아이콘 또는 이미지
- 제목 + 간단한 설명
- Hover 효과: `transform: scale(1.05)`, 그림자 증가
- CTA 버튼 (선택)

### 4.5 OWORLD&EVENT Section

**Title**: "축제 & 이벤트"

**Layout** (6 Event Cards - Responsive Grid):
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

**Event Card**:
- 썸네일 이미지 (800x600px, WebP/JPG, < 200KB)
- 이벤트 제목
- 날짜 또는 기간
- 간단한 설명 (선택)
- Hover 효과: 이미지 줌인, 오버레이 표시

**Data Source**: 이벤트 API (기존 백엔드)

### 4.6 NEWS&NOTICE Section

**Title**: "뉴스 & 공지사항"

**Layout**:
- 최근 공지사항 3-5개 표시
- 리스트 형식 (제목 + 날짜)
- "더보기" 버튼 → 공지사항 페이지 이동

**List Item**:
- [NEW] 뱃지 (최근 7일 이내)
- 제목 (클릭 시 상세 페이지)
- 날짜 (YYYY.MM.DD)

**Data Source**: 공지사항 API (기존 백엔드)

### 4.7 SNS & Community Section

**Title**: "O'World와 소통하기"

**Layout** (5 SNS Icons):
```
┌───────────────────────────────────────────────────┐
│   [Facebook] [Instagram] [YouTube] [Blog] [Kakao] │
└───────────────────────────────────────────────────┘
```

**Components**:
- 각 SNS 아이콘 (SVG)
- Hover 효과: 색상 변경 또는 확대
- 새 창으로 열기 (`target="_blank" rel="noopener noreferrer"`)

### 4.8 Footer

**Layout** (Multi-Column on Desktop, Stack on Mobile):
```
┌─────────────────────────────────────────────────────────────┐
│ Logo                                                         │
│                                                              │
│ [Sitemap Column]   [Contact Info]   [Policies]   [SNS]      │
│ - O!World?         35073 대전광역시  개인정보처리방침         │
│ - 이용정보          중구 사정공원로 70 영상정보처리기기       │
│ - 축제및이벤트      TEL: 042-580-4820 운영방침              │
│ - 즐길거리          FAX: 042-580-4711                        │
│ - 예매하기                                                   │
│                                                              │
│ Copyright © Daejeon O'World. All rights reserved.            │
└─────────────────────────────────────────────────────────────┘
```

**Components**:
- Logo
- Sitemap (5개 메인 메뉴)
- 연락처 정보 (주소, 전화, 팩스)
- 정책 링크 (개인정보처리방침, 영상정보처리기기운영방침)
- SNS 아이콘
- 저작권 표시

---

## 5. API Integration

### 5.1 Existing APIs (변경 없음)

#### 5.1.1 Notice/Announcement API
- **Endpoint**: (기존 백엔드 유지)
- **Method**: GET
- **Response**: 최근 공지사항 리스트 (제목, 날짜, ID)
- **Display**: NEWS&NOTICE 섹션에 최근 3-5개 표시

#### 5.1.2 Event API
- **Endpoint**: (기존 백엔드 유지)
- **Method**: GET
- **Response**: 이벤트 리스트 (썸네일, 제목, 날짜, 설명)
- **Display**: OWORLD&EVENT 섹션에 6개 표시

#### 5.1.3 Operating Info API
- **Endpoint**: (기존 백엔드 유지)
- **Method**: GET
- **Response**: 운영 시간 정보 (오월드, 나이트 유니버스, 사파리)
- **Display**: Quick Info 섹션에 실시간 업데이트

#### 5.1.4 OnePass Login API
- **Endpoint**: (기존 OnePass 시스템)
- **Method**: POST (팝업 윈도우)
- **Flow**: 로그인 버튼 클릭 → OnePass 팝업 → 인증 완료 → 세션 유지

#### 5.1.5 Identity Verification APIs
- **Methods**: 아이핀, SMS, 계좌, 신용카드, 공인인증서
- **Flow**: 본인인증 필요 시 팝업 윈도우 → 각 인증 수단 선택 → 인증 완료

### 5.2 API Integration Guidelines

1. **CORS 설정**: 기존 백엔드에서 CORS 허용 확인
2. **Error Handling**: API 실패 시 사용자 친화적 에러 메시지 표시
3. **Loading State**: API 호출 중 로딩 스피너 표시
4. **Caching**: 자주 변경되지 않는 데이터는 LocalStorage/SessionStorage 활용 (선택)
5. **Retry Logic**: 네트워크 오류 시 재시도 로직 구현

---

## 6. Design & UX Guidelines

### 6.1 Visual Design Principles

1. **Clean & Modern**: 여백 활용, 미니멀한 디자인
2. **Nature-Inspired**: 오월드 브랜드 이미지 (동물, 자연, 가족) 반영
3. **Vibrant Colors**: 밝고 생동감 있는 컬러 팔레트
4. **High-Quality Images**: 고품질 이미지로 시각적 임팩트 강화
5. **Consistent UI**: 버튼, 카드, 폼 등 일관된 UI 컴포넌트

### 6.2 Animation Guidelines

#### 6.2.1 Page Load Animations
- Fade-in 효과 (0.6s ease-out)
- Stagger delay (각 섹션 0.1s씩 지연)

#### 6.2.2 Scroll Animations
- Intersection Observer 활용
- Fade-in + Slide-up (0.8s ease-out)
- `transform: translateY(20px) → translateY(0)`

#### 6.2.3 Hover Animations
- Card hover: `transform: scale(1.05)` (0.3s ease)
- Button hover: 배경색 변경 (0.3s ease)
- Link hover: 밑줄 애니메이션 (0.2s ease)

#### 6.2.4 Performance Considerations
- `transform`, `opacity`만 사용 (GPU 가속)
- `will-change` 속성 신중히 사용
- 복잡한 애니메이션은 `requestAnimationFrame` 활용

### 6.3 Responsive Design Rules

#### 6.3.1 Mobile-First Approach
```css
/* 1. Base styles (Mobile) */
.container { padding: 16px; }

/* 2. Tablet overrides */
@media (min-width: 768px) {
  .container { padding: 24px; }
}

/* 3. Desktop overrides */
@media (min-width: 1024px) {
  .container { padding: 40px; }
}
```

#### 6.3.2 Fluid Typography
```css
:root {
  /* Mobile */
  --font-size-body: 14px;
  --font-size-h1: 28px;
}

@media (min-width: 768px) {
  :root {
    --font-size-body: 16px;
    --font-size-h1: 36px;
  }
}

@media (min-width: 1024px) {
  :root {
    --font-size-body: 18px;
    --font-size-h1: 48px;
  }
}
```

#### 6.3.3 Responsive Images
```html
<picture>
  <source media="(min-width: 1024px)" srcset="hero-desktop.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="hero-tablet.webp" type="image/webp">
  <source media="(min-width: 320px)" srcset="hero-mobile.webp" type="image/webp">
  <img src="hero-fallback.jpg" alt="O'World 메인 이미지" loading="lazy">
</picture>
```

---

## 7. SEO Requirements

### 7.1 Meta Tags
```html
<!-- Primary Meta Tags -->
<title>대전 오월드 | 동물원, 사파리, 놀이공원, 가족 나들이 명소</title>
<meta name="title" content="대전 오월드 | 동물원, 사파리, 놀이공원, 가족 나들이 명소">
<meta name="description" content="대전 오월드는 동물원, 사파리, 놀이공원을 한 곳에서 즐길 수 있는 대전 최고의 가족 나들이 명소입니다. 지금 온라인 예매하고 할인받으세요!">
<meta name="keywords" content="대전 오월드, 오월드, 동물원, 사파리, 놀이공원, 대전 여행, 가족 나들이, 나이트 유니버스">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.oworld.kr/">
<meta property="og:title" content="대전 오월드 | 동물원, 사파리, 놀이공원, 가족 나들이 명소">
<meta property="og:description" content="대전 오월드는 동물원, 사파리, 놀이공원을 한 곳에서 즐길 수 있는 대전 최고의 가족 나들이 명소입니다.">
<meta property="og:image" content="https://www.oworld.kr/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.oworld.kr/">
<meta property="twitter:title" content="대전 오월드 | 동물원, 사파리, 놀이공원, 가족 나들이 명소">
<meta property="twitter:description" content="대전 오월드는 동물원, 사파리, 놀이공원을 한 곳에서 즐길 수 있는 대전 최고의 가족 나들이 명소입니다.">
<meta property="twitter:image" content="https://www.oworld.kr/images/og-image.jpg">

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Charset -->
<meta charset="UTF-8">
```

### 7.2 Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "대전 오월드",
  "description": "동물원, 사파리, 놀이공원을 한 곳에서 즐길 수 있는 대전 최고의 가족 나들이 명소",
  "url": "https://www.oworld.kr",
  "telephone": "+82-42-580-4820",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "사정공원로 70",
    "addressLocality": "중구",
    "addressRegion": "대전광역시",
    "postalCode": "35073",
    "addressCountry": "KR"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:30",
    "closes": "18:00"
  },
  "image": "https://www.oworld.kr/images/oworld-main.jpg",
  "sameAs": [
    "https://www.facebook.com/oworld",
    "https://www.instagram.com/oworld",
    "https://www.youtube.com/oworld"
  ]
}
```

### 7.3 Sitemap & Robots.txt
- **sitemap.xml**: 모든 주요 페이지 포함
- **robots.txt**: 크롤링 허용/차단 규칙 설정

---

## 8. Security & Privacy

### 8.1 Security Requirements
1. **HTTPS Only**: 모든 페이지 HTTPS로 제공
2. **CSP (Content Security Policy)**: XSS 공격 방지
3. **Input Validation**: 모든 사용자 입력 검증 (검색어, 폼 입력 등)
4. **SQL Injection Prevention**: 백엔드 API에서 처리 (프론트엔드에서는 해당 없음)
5. **CORS**: 허용된 도메인만 API 접근

### 8.2 Privacy Requirements
1. **개인정보처리방침**: Footer에 링크 필수
2. **Cookie Policy**: Cookie 사용 안내 (팝업 "오늘 하루 보지 않기" 기능 사용 시)
3. **GDPR/CCPA Compliance**: 해당 시 적용 (국내 사용자 대상이므로 선택)

---

## 9. Testing Requirements

### 9.1 Browser Testing
- **Desktop**: Chrome, Firefox, Safari, Edge (최신 2개 버전)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet

### 9.2 Device Testing
- **Smartphones**: iPhone SE (375px), iPhone 12 Pro (390px), Samsung Galaxy S21 (360px)
- **Tablets**: iPad (768px), iPad Pro (1024px)
- **Desktops**: 1366px, 1920px, 2560px

### 9.3 Accessibility Testing
- **Tools**: WAVE, axe DevTools, Lighthouse Accessibility Audit
- **Manual Testing**: 키보드 네비게이션, 스크린 리더 (NVDA, JAWS)

### 9.4 Performance Testing
- **Tools**: Lighthouse, WebPageTest, PageSpeed Insights
- **Network Throttling**: Fast 3G, Slow 3G 환경에서 테스트

### 9.5 Functional Testing
- ✅ 모든 링크 작동 확인
- ✅ 슬라이더 자동 재생/수동 제어 확인
- ✅ Dropdown 메뉴 작동 확인
- ✅ 검색 기능 작동 확인
- ✅ OnePass 로그인 작동 확인
- ✅ 본인인증 팝업 작동 확인
- ✅ API 연동 확인 (공지사항, 이벤트, 운영 시간)
- ✅ "오늘 하루 보지 않기" 기능 확인
- ✅ SNS 링크 작동 확인

### 9.6 Validation
- **HTML Validation**: W3C Markup Validation Service
- **CSS Validation**: W3C CSS Validation Service
- **JavaScript**: ESLint, TypeScript (선택)

---

## 10. Development Guidelines

### 10.1 HTML Best Practices

#### 10.1.1 Semantic HTML5
```html
<header>
  <nav>
    <ul>
      <li><a href="#oworld">O!World?</a></li>
      <!-- ... -->
    </ul>
  </nav>
</header>

<main>
  <section id="hero">
    <h1>대전 오월드에 오신 것을 환영합니다</h1>
  </section>

  <section id="services">
    <h2>주요 서비스</h2>
    <article>
      <h3>이용권 예약</h3>
      <p>온라인으로 간편하게 티켓을 구매하세요.</p>
    </article>
  </section>
</main>

<footer>
  <p>&copy; 2025 Daejeon O'World. All rights reserved.</p>
</footer>
```

#### 10.1.2 Heading Hierarchy
```html
<h1>대전 오월드</h1>              <!-- 페이지당 1개 -->
  <h2>주요 서비스</h2>            <!-- 섹션 제목 -->
    <h3>이용권 예약</h3>          <!-- 서브 섹션 -->
      <h4>온라인 예약</h4>        <!-- 더 세부 항목 -->
```

#### 10.1.3 Accessibility Attributes
```html
<!-- ARIA Labels -->
<button aria-label="메뉴 열기" aria-expanded="false" aria-controls="mobile-menu">
  <span class="hamburger-icon"></span>
</button>

<!-- Image Alt Text -->
<img src="hero.jpg" alt="대전 오월드 사파리에서 사자를 관찰하는 가족">

<!-- Form Labels -->
<label for="search-input">검색</label>
<input type="search" id="search-input" name="search" aria-label="사이트 내 검색">

<!-- Skip to Content -->
<a href="#main-content" class="skip-link">본문으로 건너뛰기</a>
```

### 10.2 CSS Best Practices

#### 10.2.1 CSS Variables
```css
:root {
  /* Colors */
  --color-primary: #00A86B;
  --color-text: #1F2937;
  --color-bg: #FFFFFF;

  /* Typography */
  --font-family-primary: 'Pretendard', sans-serif;
  --font-size-base: 16px;
  --line-height-base: 1.6;

  /* Spacing */
  --spacing-unit: 8px;
  --container-max-width: 1440px;

  /* Transitions */
  --transition-speed: 0.3s;
  --transition-easing: ease;
}
```

#### 10.2.2 Mobile-First CSS
```css
/* Mobile (default) */
.container {
  padding: 16px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
```

#### 10.2.3 Smooth Transitions
```css
/* Card Hover Effect */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Button Hover Effect */
.button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button:hover {
  background-color: var(--color-primary-dark);
}
```

#### 10.2.4 Sticky Header
```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.header.scrolled {
  padding: 12px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### 10.3 JavaScript Best Practices

#### 10.3.1 Modern ES6+ Syntax
```javascript
// Async/Await for API calls
async function fetchNotices() {
  try {
    const response = await fetch('/api/notices');
    const data = await response.json();
    renderNotices(data);
  } catch (error) {
    console.error('Failed to fetch notices:', error);
    showErrorMessage('공지사항을 불러올 수 없습니다.');
  }
}

// Arrow functions
const handleMenuClick = (event) => {
  event.preventDefault();
  toggleMenu();
};

// Destructuring
const { title, date, content } = noticeData;

// Template literals
const noticeHTML = `
  <div class="notice-item">
    <h3>${title}</h3>
    <time datetime="${date}">${formatDate(date)}</time>
  </div>
`;
```

#### 10.3.2 Intersection Observer (Lazy Loading)
```javascript
// Lazy load images
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '50px'
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

#### 10.3.3 Slider Implementation
```javascript
class Slider {
  constructor(container, options = {}) {
    this.container = container;
    this.slides = container.querySelectorAll('.slide');
    this.currentIndex = 0;
    this.autoPlayInterval = options.autoPlayInterval || 5000;
    this.isPlaying = true;

    this.init();
  }

  init() {
    this.createControls();
    this.addEventListeners();
    this.startAutoPlay();
  }

  goToSlide(index) {
    this.slides[this.currentIndex].classList.remove('active');
    this.currentIndex = (index + this.slides.length) % this.slides.length;
    this.slides[this.currentIndex].classList.add('active');
    this.updateIndicators();
  }

  next() {
    this.goToSlide(this.currentIndex + 1);
  }

  prev() {
    this.goToSlide(this.currentIndex - 1);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => this.next(), this.autoPlayInterval);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  addEventListeners() {
    // User interaction pauses auto-play
    this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.container.addEventListener('mouseleave', () => this.startAutoPlay());

    // Touch swipe support
    let touchStartX = 0;
    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      this.stopAutoPlay();
    });

    this.container.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }

      this.startAutoPlay();
    });
  }
}

// Initialize slider
const heroSlider = new Slider(document.querySelector('.hero-slider'), {
  autoPlayInterval: 6000
});
```

#### 10.3.4 Modal Implementation
```javascript
class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeBtn = this.modal.querySelector('.close-btn');
    this.overlay = this.modal.querySelector('.modal-overlay');

    this.init();
  }

  init() {
    // Close on X button
    this.closeBtn?.addEventListener('click', () => this.close());

    // Close on overlay click
    this.overlay?.addEventListener('click', () => this.close());

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

  open() {
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.modal.setAttribute('aria-hidden', 'false');

    // Focus trap
    this.modal.querySelector('button, a, input')?.focus();
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    this.modal.setAttribute('aria-hidden', 'true');
  }
}
```

#### 10.3.5 "Do Not Show Today" Functionality
```javascript
class PopupManager {
  constructor(popupId) {
    this.popup = document.getElementById(popupId);
    this.popupId = popupId;
    this.storageKey = `popup_${popupId}_hidden`;

    this.init();
  }

  init() {
    // Check if popup should be shown
    if (this.shouldShowPopup()) {
      this.show();
    }

    // Add event listener for "Do not show today" button
    const doNotShowBtn = this.popup.querySelector('.do-not-show-today');
    doNotShowBtn?.addEventListener('click', () => {
      this.hideForToday();
      this.close();
    });
  }

  shouldShowPopup() {
    const hiddenUntil = localStorage.getItem(this.storageKey);
    if (!hiddenUntil) return true;

    const now = new Date().getTime();
    return now > parseInt(hiddenUntil, 10);
  }

  hideForToday() {
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    localStorage.setItem(this.storageKey, tomorrow.getTime().toString());
  }

  show() {
    this.popup.classList.add('active');
  }

  close() {
    this.popup.classList.remove('active');
  }
}

// Initialize popups
['popup1', 'popup2', 'popup3', 'popup4'].forEach(id => {
  new PopupManager(id);
});
```

### 10.4 File Structure

```
Daejeon-Oworld-v2/
├── src/
│   ├── css/
│   │   ├── variables.css           # Design tokens (colors, spacing, typography)
│   │   ├── base.css                # Reset, global styles
│   │   ├── layout.css              # Grid, containers
│   │   ├── components/
│   │   │   ├── button.css
│   │   │   ├── card.css
│   │   │   ├── modal.css
│   │   │   ├── slider.css
│   │   │   └── form.css
│   │   └── sections/
│   │       ├── header.css
│   │       ├── hero.css
│   │       ├── quick-info.css
│   │       ├── services.css
│   │       ├── events.css
│   │       ├── news.css
│   │       ├── sns.css
│   │       └── footer.css
│   ├── js/
│   │   ├── main.js                 # Entry point
│   │   ├── slider.js               # Slider class
│   │   ├── navigation.js           # Menu, dropdown
│   │   ├── modal.js                # Modal class
│   │   ├── popup.js                # Popup manager
│   │   ├── lazy-loading.js         # Intersection Observer
│   │   ├── scroll-animations.js    # Scroll-triggered animations
│   │   └── api.js                  # API integration
│   ├── images/
│   │   ├── hero/
│   │   │   ├── slide-1.webp
│   │   │   ├── slide-2.webp
│   │   │   └── ...
│   │   ├── events/
│   │   │   ├── event-1.webp
│   │   │   ├── event-2.webp
│   │   │   └── ...
│   │   ├── icons/
│   │   │   ├── logo.svg
│   │   │   ├── facebook.svg
│   │   │   ├── instagram.svg
│   │   │   └── ...
│   │   └── og-image.jpg            # Open Graph image
│   └── index.html                  # Main HTML file
├── dist/                           # Build output (minified, optimized)
├── PRD.md                          # This file
├── task.md                         # Implementation checklist
├── CLAUDE.md                       # Claude Code guidance
├── package.json                    # Dependencies (if using build tools)
└── README.md                       # Project overview
```

---

## 11. Implementation Phases

구현은 5단계로 나누어 진행합니다. 각 단계별 상세 작업 내용은 [task.md](task.md)를 참조하세요.

### Phase 1: Foundation Setup
- 프로젝트 구조 설정
- Design System 구축 (CSS Variables, Typography, Colors)
- Base HTML 구조 작성

### Phase 2: Core Sections Development
- Header/Navigation 구현
- Hero Slider 구현
- Quick Info 섹션 구현
- Footer 구현

### Phase 3: Content Sections
- Main Services 섹션 구현
- OWORLD&EVENT 섹션 구현
- NEWS&NOTICE 섹션 구현
- SNS & Community 섹션 구현

### Phase 4: Interactions & Features
- Slider 인터랙션 완성
- Modal/Popup 구현
- Dropdown 메뉴 구현
- Mobile Hamburger 메뉴 구현
- Scroll Animations 구현
- Lazy Loading 구현

### Phase 5: Integration & Optimization
- API 연동 (공지사항, 이벤트, 운영 시간)
- OnePass 로그인 연동
- 본인인증 시스템 연동
- 이미지 최적화
- Performance 튜닝
- Accessibility 검증
- 크로스 브라우저 테스트

---

## 12. Quality Assurance Checklist

### 12.1 Pre-Launch Checklist

#### Design
- [ ] 모든 섹션이 디자인 시스템을 따름
- [ ] 색상 대비 비율 확인 (WCAG AA)
- [ ] 모든 이미지 최적화 완료 (WebP, 적절한 크기)
- [ ] 일관된 spacing 적용
- [ ] Typography 일관성 확인

#### Functionality
- [ ] 모든 링크 작동 확인
- [ ] 슬라이더 자동 재생/수동 제어 작동
- [ ] Dropdown 메뉴 작동
- [ ] Mobile 햄버거 메뉴 작동
- [ ] 검색 기능 작동
- [ ] OnePass 로그인 작동
- [ ] 본인인증 팝업 작동
- [ ] API 연동 확인 (공지사항, 이벤트, 운영 시간)
- [ ] "오늘 하루 보지 않기" 기능 작동
- [ ] SNS 링크 작동 (새 창 열기)

#### Responsive
- [ ] 320px (iPhone SE) 테스트
- [ ] 375px (iPhone 12) 테스트
- [ ] 414px (iPhone 12 Pro Max) 테스트
- [ ] 768px (iPad) 테스트
- [ ] 1024px (iPad Pro) 테스트
- [ ] 1366px (소형 데스크탑) 테스트
- [ ] 1920px (Full HD) 테스트

#### Performance
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] LCP < 2.5초
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] 이미지 lazy loading 작동
- [ ] 불필요한 리소스 제거

#### Accessibility
- [ ] 키보드 네비게이션 전체 확인
- [ ] 모든 이미지에 alt 텍스트
- [ ] ARIA 속성 적절히 사용
- [ ] Semantic HTML 사용
- [ ] Heading hierarchy 준수
- [ ] Focus indicator 명확히 표시
- [ ] WAVE 검사 통과
- [ ] Screen reader 테스트 (NVDA 또는 JAWS)

#### Browser Compatibility
- [ ] Chrome (최신 2개 버전)
- [ ] Firefox (최신 2개 버전)
- [ ] Safari (최신 2개 버전)
- [ ] Edge (최신 2개 버전)
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Samsung Internet

#### SEO
- [ ] Meta tags 적절히 설정
- [ ] Open Graph tags 설정
- [ ] Structured data (JSON-LD) 추가
- [ ] Sitemap.xml 생성
- [ ] Robots.txt 설정
- [ ] 모든 이미지에 alt 텍스트
- [ ] 적절한 heading hierarchy

#### Security
- [ ] HTTPS 사용
- [ ] CSP 헤더 설정
- [ ] 입력 검증 (검색어 등)
- [ ] 외부 링크에 rel="noopener noreferrer"

#### Validation
- [ ] HTML W3C Validation 통과
- [ ] CSS W3C Validation 통과
- [ ] JavaScript ESLint 통과 (설정 시)

---

## 13. Maintenance & Future Enhancements

### 13.1 Maintenance Plan
- **Monthly**: Performance monitoring (Lighthouse, PageSpeed Insights)
- **Quarterly**: Accessibility audit (WAVE, axe DevTools)
- **Yearly**: 디자인 트렌드 검토 및 업데이트

### 13.2 Future Enhancements (Out of Scope)
- [ ] Progressive Web App (PWA) 구현
- [ ] 다국어 지원 (영어, 중국어, 일본어)
- [ ] Dark Mode 지원
- [ ] 개인화 추천 시스템
- [ ] 실시간 채팅 상담
- [ ] 가상 투어 (360도 이미지/비디오)

---

## 14. Stakeholders & Contacts

### 14.1 Project Team
- **Product Manager**: [이름]
- **Designer**: [이름]
- **Frontend Developer**: [이름]
- **Backend Developer**: [이름]
- **QA Engineer**: [이름]

### 14.2 External Partners
- **OnePass 통합 로그인**: [담당자/연락처]
- **본인인증 서비스**: [담당자/연락처]
- **Hosting Provider**: [담당자/연락처]

---

## 15. Appendix

### 15.1 References
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Web.dev**: https://web.dev/
- **MDN Web Docs**: https://developer.mozilla.org/
- **Can I Use**: https://caniuse.com/

### 15.2 Tools
- **Design**: Figma, Adobe XD
- **Development**: VS Code, Chrome DevTools
- **Testing**: Lighthouse, WAVE, axe DevTools, BrowserStack
- **Performance**: PageSpeed Insights, WebPageTest
- **Version Control**: Git, GitHub

### 15.3 Glossary
- **LCP**: Largest Contentful Paint (가장 큰 콘텐츠가 로드되는 시간)
- **FID**: First Input Delay (첫 입력 지연 시간)
- **CLS**: Cumulative Layout Shift (누적 레이아웃 이동)
- **WCAG**: Web Content Accessibility Guidelines (웹 콘텐츠 접근성 가이드라인)
- **ARIA**: Accessible Rich Internet Applications (접근 가능한 리치 인터넷 애플리케이션)
- **SEO**: Search Engine Optimization (검색 엔진 최적화)

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-09 | Claude Code | Initial PRD creation based on site analysis |

---

**End of PRD**
