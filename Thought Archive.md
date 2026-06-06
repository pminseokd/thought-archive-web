# Project: Thought Archive (Knowledge Collection)

## 1. Project Overview
- **Name:** Thought Archive
- **Goal:** 웹 리소스(유튜브, 숏츠, 웹사이트)와 실시간 메모를 한곳에서 관리하는 데스크톱 대시보드.
- **Tech Stack:** Electron (HTML5, CSS3, JavaScript) 기반 Desktop Wrapper 방식.
- **Resolution:** 1600x900 (고정 해상도).

## 2. Design System (UI/UX)
- **Concept:** Modern & Dark (Digital Blue). 네온 → 차분한 블루 스케일로 전면 개편.
- **Palette:** Coolors **Tailwind "Digital Blue"** (`#0066FF` 기준) 스케일 사용.
  - `50 #E5F0FF · 100 #CCE0FF · 200 #99C2FF · 300 #66A3FF · 400 #3385FF · 500 #0066FF · 600 #0052CC · 700 #003D99 · 800 #002966 · 900 #001433 · 950 #000E24`
- **Primary BG (Dark):** `#000B1F` (deep navy), Panel `#001433` (900).
- **Primary BG (Light):** `#EEF4FF`, Panel `#DCE8FF`.
- **Accent:** `#0066FF` (500, primary), `#3385FF` (400, secondary).
- **Navigation list:** 내림차순 블루 — Dark는 `400→300→200→100`(Home→Settings), Light는 `600→500→400→300`.
- **Forbidden Color:** **Green (절대 사용 금지).**
- **Styles:** Glassmorphism (반투명 및 블러), Border-radius: 15px. 글로우는 글자 가독성 위해 톤다운(저알파).

## 3. Layout Structure (3-Column)
1. **Left Sidebar (250px):** 내비게이션 메뉴 (Home, Analytics, Archive, Settings + 리소스 필터).
2. **Center Main (Flex: 1):**
   - Top: 3개의 통계/현황 카드 (Notes Saved, Resources Linked, Session Time).
   - Bottom: **Dual-View Stack** (Layer A: Media / Layer B: Note).
   - 숨김: **Archive View** — Archive 클릭 시 중앙이 노트 카드 그리드로 교체됨.
3. **Right Panel (350px):**
   - Top: Resource List (Shorts, YouTube, Web links) + 검색/필터.
   - Bottom: **Backlinks Panel** (상시 노출 — 현재 노트를 참조하는 메모 목록, §21). *Activity Feed는 제거됨.*

## 4. Key Functions & Logic

### 핵심 뷰 전환
- **Dual-View Toggle:** 우측 리스트 클릭 시 중앙 뷰가 'Media View(iframe)'와 'Note View(Textarea)' 사이에서 즉시 전환.
- **Archive 라우팅:** 좌측 Archive 클릭 시 `data-view="archive"` 전환 → 저장된 메모를 카드 그리드로 표시. 카드 클릭 시 Home 뷰로 돌아와 해당 노트 열림.

### 미디어 처리
- **YouTube URL 자동 변환:** `toEmbedUrl()` 함수로 watch/youtu.be/shorts URL을 `/embed/` 형식으로 자동 변환. URL 바 붙여넣기 시에도 자동 감지 및 변환.
- **Media Handling:** iframe 로드, 외부 브라우저 열기(`⧉`) 지원.

### 메모 시스템
- **Note Auto-Register:** 새 메모 저장 시 Resource List에 자동 등록.
- **Auto-Save:** 설정된 간격(기본 5분)마다 현재 메모 자동 저장.
- **Markdown Export:** 현재 메모를 `.md` 파일로 다운로드.
- **Word/Char/Line 카운터:** 실시간 표시.
- **Timestamp 삽입:** `⏱ Stamp` 버튼으로 현재 시각 삽입.

### 키보드 단축키
| 단축키 | 기능 |
|---|---|
| `Ctrl+S` | 메모 저장 |
| `Ctrl+M` | 미디어/메모 뷰 전환 |
| `Ctrl+K` | URL 바 포커스 |
| `Ctrl+F` | 집중 모드 전환 |
| `Ctrl+Shift+F` | 리소스 검색창 포커스 |
| `Ctrl+,` | 설정 열기 |
| `?` | 단축키 도움말 패널 토글 |
| `Esc` | 열린 패널 닫기 / 집중 모드 해제 |

### Activity Feed (제거됨 — 2026-06-02, §21 참조)
- 우측 패널 하단의 Activity Feed는 백링크 패널로 완전 대체됨.
- `feed-list`/`feed-item` DOM·CSS, `renderFeed`/`addFeedItem`/`deleteFeedItem`/`INITIAL_FEED` 및 모든 `addFeedItem(...)` 호출 삭제.

### Resource List
- 유튜브/숏츠/웹사이트/메모 타입별 필터 필 + 검색.
- 각 항목 hover 시 `✕` 삭제 버튼 등장.
- 메모 타입 삭제 시 localStorage 데이터도 함께 정리.

## 5. Settings System
설정 항목은 `ta_settings` 키로 localStorage 자동 저장.

| 항목 | 기능 |
|---|---|
| Dark / Light Mode | 테마 전환 |
| Transparency | 글라스모피즘 투명도 조절 (0~100%) |
| Default Startup View | 앱 시작 시 기본 뷰 (미디어/메모) |
| Auto-Save Interval | 자동 저장 주기 (1분/5분/10분/사용안함) |
| Always on Top | 항상 위 모드 (Electron IPC 연동 예정) |
| Language / 언어 | 한국어 ↔ English UI 전환 |
| Export as Markdown | 현재 메모 `.md` 파일로 다운로드 |
| Reset All Settings | 모든 설정 기본값으로 초기화 (메모 유지) |
| Log Out (ACCOUNT) | 계정 로그아웃 — **로그인 상태에서만 활성화** (§20) |

## 6. Localization (다국어 지원)
- `TRANSLATIONS` 객체에 `en` / `ko` 두 언어 데이터 보유.
- `data-i18n="key"` 속성 기반으로 DOM 텍스트 일괄 치환 (`textContent`).
- `data-i18n-placeholder="key"` 속성으로 input/textarea placeholder 치환.
- `T(key)` 헬퍼 함수로 JS 내부 동적 문자열도 현재 언어로 반환.
- 번역 적용 범위: 내비게이션, 상단 버튼, 통계 카드, 탭, 우측 패널 헤더, 필터 필, 설정 전체, 단축키 도움말.
- 설정 저장 키: `settings.lang` (`'en'` | `'ko'`).

## 7. File Structure
```
Thought Archive/
├── index.html          — HTML 구조 (data-i18n 속성 포함)
├── style.css           — 전체 디자인 시스템
├── app.js              — 렌더러 로직 전체 (인증/동기화/뷰/노트/리소스)
├── main.js             — Electron 메인 프로세스 (BrowserWindow, webviewTag, 로컬 캐시 JSON IPC, Widevine)
├── preload.js          — 렌더러에 window.taAPI(로컬 캐시 + alwaysOnTop) 노출
├── vendor/supabase.js  — supabase-js UMD 빌드 (클라우드 동기화, §31)
├── supabase-config.js  — Supabase URL/anon key (사용자 입력, §31)
├── package.json        — Electron 의존성 및 npm start 스크립트
├── node_modules/       — Electron + @supabase/supabase-js 패키지
├── error-log.md        — 오류 발생 이력 수동 기록 (YYYY-MM-DD -- 오류 --- 조치)
└── Thought Archive.md  — 프로젝트 문서
```

## 8. Color / Emoji 태그 시스템

### 저장 확인 UI (Save Confirm Panel)
- `Ctrl+S` 또는 💾 Save 버튼 클릭 시 `saveNote()` → `showSavePanel()` 호출.
- 에디터 하단에 glassmorphism 슬라이드다운 패널(`.save-confirm-panel`) 표시.
- **색상 선택:** 6가지 컬러칩 — `#0066FF`, `#3385FF`, `#FF6B6B`, `#FFD93D`, `#FF8C42`, `#C0C0C0`.
- **이모지 선택:** 12개 그리드 — `💡🔥⚡🎯📌🧠🌀✨🎨💎🚀🔮`. 재클릭 시 선택 해제.
- 기존 메모 열 때 해당 색상/이모지 자동 pre-select.
- Cancel(Esc) / Save 확정 → `doSaveNote(color, emoji)` 실제 저장.
- 자동 저장(Auto-save)은 패널 없이 기존 color/emoji 유지하며 직접 `doSaveNote()` 호출.

### localStorage 저장 구조 (확장)
```json
{ "title": "...", "body": "...", "saved": "ISO8601", "color": "#0066FF", "emoji": "💡", "tags": ["#idea"] }
```
- 기존 메모(`color` 필드 없음)는 기본값(`#0066FF`, emoji 없음)으로 처리.

### Archive 카드 렌더링
- 카드 최상단 **4px accent bar** — `background: {color}`, `border-radius` 상단만 적용.
- 이모지 있으면 카드 body 우상단에 24px로 절대 위치 표시.
- Archive 뷰 상단 색상 필터 행 (`.archive-filter-row`): All + 6 컬러칩. 클릭 시 `setArchiveColorFilter()`.

---

## 8-A. RESOURCES 영속성 (2026-05-25)

- `ta_resources` 키로 localStorage에 RESOURCES 배열 저장.
- 앱 초기화 시 `ta_resources`가 존재하면 데모 데이터 대신 저장된 데이터를 로드.
- `saveResources()` — `addResource()`, `deleteResource()`, `doSaveNote()`(새 메모 생성 분기)에서 호출.
- 효과: 페이지 새로고침 시 리소스 유실 버그 수정.

---

## 9. #태그 시스템

### 태그 입력 (노트 에디터)
- 에디터 하단 `.note-tag-row`에 태그 인풋(`#note-tag-input`) + pill 표시 영역(`#note-tag-pills`).
- 입력 중 `#` prefix 자동 추가. Enter 또는 Space로 확정.
- Backspace (인풋이 비어있을 때) → 마지막 태그 삭제.
- 태그는 소문자 정규화: `normalizeTag()` — `"Idea"` → `"#idea"`.
- 최대 10개 제한. 각 pill에 `×` 버튼으로 개별 삭제.

### 저장 구조
- 메모: `tags: ['#idea', '#ux']` 배열 포함.
- 리소스 추가 시 prompt로 태그 입력 → `tags` 필드 저장.
- `getAllTags()`: notes + RESOURCES 전체에서 중복 없이 태그 수집.

### 좌측 사이드바 TAGS 필터
- `#tags-nav-label` + `.sidebar-tags-wrap` — 태그 없으면 `display:none`.
- 태그 있으면 pill로 나열. 클릭 시 `toggleSidebarTag()` → `activeTags[]` 배열에 추가/제거.
- 활성 태그 pill은 보라 배경. **AND 조건** (선택된 태그 모두 포함한 항목만 표시).
- 활성 태그 있으면 "✕ Clear" 버튼 자동 표시.
- 필터는 Resource List + Archive 카드 그리드 동시 적용.

### 검색창 태그 자동완성
- `#` 입력 시 `.tag-autocomplete` 드롭다운 표시 — 매칭 태그 목록.
- 항목 클릭 → 검색창에 태그 삽입 + 리소스 필터링.
- `#` 외 일반 검색: 제목(name) OR 태그 OR 조건으로 매칭.

### Archive 카드 태그 표시
- 카드 하단 `.archive-card-tags` 영역에 `.archive-tag-pill`로 표시 (font-size 10px, border only).

---

## 10. 로컬 실행 방법

### Electron 앱으로 실행 (권장)
```bash
npm start
```

### 브라우저로 실행 (테스트용)
```bash
python3 -m http.server 7788
```
브라우저에서 `http://localhost:7788` 접속.

### Playwright 검증 시
```javascript
await page.goto("http://localhost:7788/")
```

---

## 11. Development Notes
- 브라우저 보안(CORS/CSP) 이슈로 인해 로컬 테스트 시 유튜브 임베드 오류가 발생할 수 있음.
- 이 문제는 추후 Electron 패키징 과정에서 `webSecurity: false` 설정으로 해결 예정.
- **Focus Mode 버그 수정:** `display: none` → `overflow: hidden + opacity: 0`으로 변경해 CSS Grid 레이아웃 붕괴 방지.
- **Resource 삭제 버튼 버그 수정:** `.resource-item::before` (hover 오버레이)에 `pointer-events: none` 추가 — 오버레이가 버튼 클릭 이벤트를 가로막던 문제 해결.
- **라이트 모드 설정 가독성 수정:** `body.light` 하위 `.sett-select`, `.sett-select option`, `.sett-row` 등 명시적 색상 오버라이드 추가.
- **Archive 카드 CSS 버그 수정:** `--glass-border` → `--glass-bdr` 오타 수정, `overflow: hidden` 추가.

---

## 12. 반응형 스케일 적용 (2026-05-21)

### 문제
1600px 고정 해상도 기반 설계로 인해 맥북 14인치(M5) 등 작은 뷰포트에서 화면이 짤리는 현상 발생.

### 해결 방식 — CSS zoom (Letterbox)
앱 전체를 뷰포트에 맞게 비율 유지하며 자동 축소/확대. 기존 디자인 100% 보존.

> ⚠️ 초기 구현은 `transform: scale()`을 사용했으나, 앱 전체가 단일 GPU 합성 레이어로 묶여 스크롤 시 프레임 드롭이 발생했음. `css zoom`으로 교체 — 레이아웃 레벨 처리이므로 GPU 레이어를 생성하지 않음.

### 변경 파일

**`style.css`**
- `#app`에 `flex-shrink: 0` 유지, `transform-origin` 제거

**`main.js`**
```js
function applyScale() {
  const scale = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
  document.documentElement.style.zoom = String(scale);
}
applyScale();
window.addEventListener('resize', applyScale);
```
- `html` 요소에 `zoom` 적용 — `position: fixed` 오버레이도 올바르게 스케일됨.
- 뷰포트 대비 스케일 자동 계산, 창 리사이즈 시에도 즉시 반응.

### 특이사항
- 16:9 비율이 맞지 않는 경우 letterbox 여백 발생 (의도된 동작).
- 윈도우·맥 모두 동일하게 동작.

---

## 13. Full-text Search 구현 (2026-05-21)

### 변경 개요
기존 검색(제목 + 태그만 매칭)을 노트 본문까지 확장하고, 결과 우선순위 정렬 및 snippet 표시 기능을 추가.

### 1) 검색 범위 확대 (`main.js` — `renderResources`)
- `RESOURCES.filter()` → `RESOURCES.reduce()` 구조로 변경, 각 항목에 우선순위 숫자를 부여 후 `sort()`.
- 매칭 우선순위: **제목(0) > 태그(1) > 본문(2)**.
- 노트 본문 접근: `notes['note_' + r.id]?.body`.
- `#` prefix 검색은 태그 전용으로 기존 동작 유지.
- 대소문자 무시(`toLowerCase`), 한글 포함 정상 처리.

### 2) 본문 키워드 Snippet 표시 (`main.js` + `style.css`)
- `getBodySnippet(body, q)` 헬퍼 함수 추가 (`renderResources` 바로 위).
  - 키워드 앞뒤 30자 추출, 양 끝 잘림 시 `…` 처리.
  - 내부 HTML 이스케이프(`&`, `<`, `>`) 적용.
- 본문 매칭 항목(`priority: 2`)에만 snippet div 주입, 제목/태그 매칭은 생략.
- CSS: `.res-snippet` (10px, `var(--text-lo)`), `.res-snippet-hl` (보라색 bold).

### 3) 검색창 Placeholder i18n (`main.js`)
- `TRANSLATIONS.en.searchPh` → `'🔍  Search titles, tags, notes…'`
- `TRANSLATIONS.ko.searchPh` → `'🔍  제목, 태그, 본문 검색…'`
- `index.html`의 `data-i18n-placeholder="searchPh"` + `applyLanguage()` 기존 구조 그대로 활용.

### 4) 결과 없음 안내 (`main.js` + `style.css`)
- `TRANSLATIONS`에 `searchNoResult` 키 추가: `en` → `'No results found'`, `ko` → `'검색 결과가 없습니다'`.
- 결과 0개일 때 하드코딩 문자열 → `T('searchNoResult')` + `.search-no-result` 클래스로 교체.
- CSS: `.search-no-result` — `text-align: center`, `padding: 24px 20px`, `var(--text-lo)`.

### 변경 파일 요약
| 파일 | 변경 함수 / 위치 |
|------|----------------|
| `app.js` | `TRANSLATIONS` (en/ko) — `searchPh`, `searchNoResult` 키 수정/추가 |
| `app.js` | `getBodySnippet()` 헬퍼 신규 추가 |
| `app.js` | `renderResources()` — filter→reduce, snippet 주입, no-result T() 사용 |
| `style.css` | `.res-snippet`, `.res-snippet-hl`, `.search-no-result` 신규 추가 |

---

## 14. 코드 최적화 (2026-05-21)

### 백링크 인덱스 캐싱
- `buildBacklinkIndex()` 호출 시 `_backlinkIndexCache`에 결과 저장, 이후 호출은 O(1) 반환.
- `doSaveNote()` / `deleteResource()` (note 타입)에서 `invalidateBacklinkIndex()` 호출로 캐시 무효화.
- `_enhanceArchiveCards()`: 카드 루프 진입 전 인덱스 1회 빌드 → 각 카드 O(1) 조회. 기존 O(카드 × notes) → O(notes + 카드).

### Monkey-patching 제거
기존 `_patchRenderArchive()`, `_patchSwitchAndSave()` IIFE 패치 블록 제거.
- `renderArchive()` 끝에 `_enhanceArchiveCards()` 직접 호출
- `switchView()` note 분기 끝에 `updateNoteOutlinks()` + `setTimeout(updateBacklinkPanel, 0)` 직접 호출
- `doSaveNote()` 끝에 `updateNoteOutlinks()` + `updateBacklinkPanel()` 직접 호출

### DOM 캐시 (`const DOM = {}`)
DOMContentLoaded 시작 시 14개 자주 쓰이는 요소를 `DOM` 객체에 한 번만 저장.

| DOM 키 | element id |
|--------|-----------|
| `DOM.noteEditor` | `#note-editor` |
| `DOM.noteTitle` | `#note-title` |
| `DOM.saveStatus` | `#save-status` |
| `DOM.urlBar` | `#url-bar` |
| `DOM.searchInput` | `#search-input` |
| `DOM.settingsOverlay` | `#settings-overlay` |
| `DOM.savePanel` | `#save-confirm-panel` |
| `DOM.shortcutHelp` | `#shortcut-help` |
| `DOM.mediaIframe` | `#media-iframe` |
| `DOM.mediaPlaceholder` | `#media-placeholder` |
| `DOM.feedList` | `#feed-list` |
| `DOM.main` | `#main` |
| `DOM.backlinkDropdown` | `#backlink-dropdown` |
| `DOM.toast` | `#toast` |
| `DOM.iframeBlocked` | `#iframe-blocked` |
| `DOM.iframeBlockedUrl` | `#iframe-blocked-url` |

---

## 14-A. 추가 최적화 (2026-05-25)

### 노트 제목 맵 캐시 (`_noteTitleMapCache`)
- `buildNoteTitleMap()` — `Map<title, key>` O(1) 조회 캐시.
- `invalidateBacklinkIndex()`에서 함께 무효화 (`_noteTitleMapCache = null`).
- 적용 함수: `renderBodyWithLinks`, `updateNoteOutlinks`, `openNoteByTitle`, `_enhanceArchiveCards` preview 조회.
- 기존 O(n) `Object.entries(notes).find()` → O(1) Map.get()으로 대체.

### `getAllTags()` 캐싱 (`_tagCache`)
- `invalidateTagCache()` 추가 — `doSaveNote`, `addResource`, `deleteResource`에서 호출.
- 반복 호출(사이드바, 자동완성, 분석 뷰)에서 전체 순회 제거.

### 버그 수정
- `_showBacklinkSourceToast`: `incoming.map(([, n]) => ...)` → `incoming.map(({note: n}) => ...)` 구조분해 오류 수정.
- `filterResources()`: `renderResources(type)` → `renderResources(type, DOM.searchInput?.value || '')` — 필터 변경 시 검색어 유실 버그 수정.

### 기타
- 세션 타이머: `document.hidden` 체크 추가 — 페이지 비활성 시 틱 스킵.

---

## 15. UI 정리 (2026-05-21)

- 좌측 사이드바 **Resources 섹션 제거** (YouTube/Shorts/Websites/Notes 필터 링크 — 우측 pill과 중복)
- 우측 패널 헤더 **＋ Add 버튼 제거** (상단 topbar 버튼으로 통일)
- **Activity Feed 숨김** 처리 (`display:none`)
- 미디어 placeholder **▶ 텍스트 → SVG 아이콘** 교체 (모니터+플레이 버튼, purple→blue 그라디언트)

---

## 16. 웹사이트 iframe 차단 UX (2026-05-21)

### 문제
일반 웹사이트(`X-Frame-Options: DENY`)를 iframe에 로드 시 브라우저 기본 에러 페이지 표시.

### 해결
- `website` 타입 리소스 클릭 시: iframe에 URL 로드 안 함 (`about:blank`), 커스텀 오버레이 즉시 표시.
- URL 바 직접 입력 시: YouTube embed URL(`youtube.com/embed/`) 여부로 분기, 비-YouTube는 동일 처리.
- 오버레이 UI: 브라우저(X) SVG 아이콘 + "이 사이트는 임베드를 허용하지 않습니다" + URL + "⧉ 브라우저에서 열기" 버튼.

### 관련 함수
- `_setupIframeBlockDetect(url, isEmbed)` — `app.js`
- `#iframe-blocked` / `#iframe-blocked-url` — `index.html`
- `.iframe-blocked`, `.iframe-blocked-btn` 등 — `style.css`

---

## 17. Electron 마이그레이션 (2026-05-21 ~ 2026-05-22 완료)

### 목표
iframe의 `X-Frame-Options` 제한 없이 모든 웹사이트를 앱 내에서 직접 열기 위해 Electron `<webview>` 태그로 전환.

### Step 1 — Electron 앱 구조 전환 (2026-05-21)
- `main.js` → `app.js` rename (Electron 메인 프로세스 파일명 충돌 방지)
- `index.html` script src 업데이트 (`app.js`)
- `package.json` 생성 (`electron ^35`, `"main": "main.js"`, `"start": "electron ."`)
- `main.js` (Electron 메인 프로세스):
  - `BrowserWindow` 1600×900, `webPreferences: { webviewTag: true }`
  - macOS dock 재활성화 (`activate` 이벤트)

### Step 2 — webview 전환 및 영상 재생 완성 (2026-05-22)

#### iframe → webview 교체
- `index.html`: `<iframe>` → `<webview>` 교체
  - `partition="persist:media"` — 별도 세션으로 YouTube 쿠키/세션 분리
  - `useragent="Mozilla/5.0 ... Chrome/124.0.0.0 ..."` — Chrome UA 설정
  - `allowpopups` — 팝업 허용
- `style.css`: `#media-iframe { position:absolute; inset:0; visibility:hidden; pointer-events:none; }`
  - `display:none` 대신 `visibility:hidden` 사용 (webview guest renderer viewport 초기화 보존)
- `app.js`: show/hide를 `_showWebview()` / `_hideWebview()` 함수로 분리 (visibility + pointer-events 제어)

#### YouTube URL 처리
- `toEmbedUrl()` 함수 → embed URL 대신 `youtube.com/watch?v=ID` 반환
  - webview는 실제 브라우저 컨텍스트이므로 embed 불필요, Error 153 방지
- `did-navigate` / `did-navigate-in-page` 이벤트로 실제 내비게이션 URL을 URL 바에 동기화
- `_setupIframeBlockDetect(url)`: `did-fail-load` 이벤트 기반으로 교체 (errorCode -3은 정상 중단)
- 일반 웹사이트도 webview에서 직접 로드 (X-Frame-Options 제한 없음)

#### Widevine CDM 설정 (YouTube 영상 재생)
- `main.js`에 Chrome 설치 경로에서 Widevine CDM 자동 탐색:
  ```js
  app.commandLine.appendSwitch('widevine-cdm-path', WV_PATH);
  app.commandLine.appendSwitch('widevine-cdm-version', widevineVersion());
  ```
- `process.arch`로 arm64 / x64 자동 선택
- `manifest.json`에서 버전 파싱 (현재: `4.10.3050.0`)
- Chrome 미설치 시 스위치 미등록으로 graceful 처리

#### 세션 UA 설정
```js
session.defaultSession.setUserAgent(CHROME_UA);
session.fromPartition('persist:media').setUserAgent(CHROME_UA);
```

### 실행 방법
```bash
npm start        # Electron 앱 (권장)
python3 -m http.server 7788  # 브라우저 테스트용
```

---

## 18. "Clear Activity Feed" 설정 제거 (2026-06-02)

### 배경
Activity Feed UI 자체는 §15에서 이미 숨김(`display:none`) 처리됨. 그럼에도 설정 패널(SYSTEM TOOLS)에 보이지 않는 피드를 지우는 "Clear Activity Feed" 항목이 남아 있어 사용자에게 의미 없는 동작이었음 → 제거.

### 변경 내용
- **`index.html`** — 설정 패널의 `Clear Activity Feed` `.sett-row` 블록 삭제.
- **`app.js`**
  - `clearFeed()` 함수 삭제.
  - `TRANSLATIONS` (en/ko)에서 `feedCleared`, `settClearFeed`, `settClearFeedDesc`, `settClearFeedBtn` 키 삭제.

### 비고
- 내부 `addFeedItem()` / `renderFeed()` 등 피드 로깅 로직은 그대로 유지 (UI만 숨겨진 상태). 추후 피드 시스템 전체 제거 시 별도 작업 예정.

---

## 19. 계정 시스템 — 로그인/회원가입 + 계정별 저장 (2026-06-02)

### 목표
메모/리소스를 계정별로 분리 저장. SQL 대신 **JSON 파일** 백엔드 사용.

### 저장 백엔드 (이중 모드)
- **Electron (실사용):** 메인 프로세스가 `app.getPath('userData')/store/` 에 JSON 파일로 저장.
  - `accounts.json` — `[{ username, salt, hash, created }]`
  - `data_<계정>.json` — `{ notes: {...}, resources: [...] }` (계정별 1파일)
- **브라우저 (테스트):** `window.taAPI` 부재 시 localStorage 폴백.
  - `ta_accounts`, `ta_data__<계정>` 키 사용.

### 보안
- 비밀번호는 평문 저장 안 함. **SHA-256(salt + password)** 해시 + 계정별 랜덤 salt(16B).
- 해시/검증은 렌더러에서 Web Crypto(`crypto.subtle`)로 수행 → 메인 프로세스는 단순 JSON 읽기/쓰기만 담당(IPC).

### 파일별 변경
| 파일 | 내용 |
|------|------|
| `preload.js` (신규) | `window.taAPI` 노출 — `accountsRead/Write`, `dataRead/Write` (ipcRenderer.invoke) |
| `main.js` | `ipcMain.handle('accounts:read'\|'accounts:write'\|'data:read'\|'data:write')`, `userData/store/` JSON I/O, `safeName()` 파일명 정규화, `webPreferences.preload` 등록 |
| `app.js` | `Store` 파사드(Electron/localStorage 분기), `sha256Hex()`/`randomSalt()`, `registerUser()`/`loginUser()`, 세션(`ta_session`), `enterApp()`/`logout()`/`initAuth()`, 인증 오버레이 제어 함수, `saveAccountData()` |
| `index.html` | `#auth-overlay`(로그인/회원가입 탭 모달), 사이드바 `user-chip` → 현재 계정 표시 + 클릭 로그아웃 |
| `style.css` | `#auth-overlay`/`#auth-modal`/`.auth-*` 스타일, `body.locked #app` 블러 잠금, 라이트모드 대응 |

### 동작 흐름
1. 앱 시작 → `initAuth()`. 세션(`ta_session`)에 유효 계정 있으면 자동 로그인, 없으면 `body.locked` + 로그인 창.
2. 로그인/회원가입 성공 → `enterApp(user)`: 계정 데이터 로드 → `notes`/`RESOURCES` 교체 → 렌더 → 잠금 해제.
3. 메모/리소스 저장 시 `saveAccountData()`가 현재 계정 파일에 기록 (기존 `localStorage.setItem('ta_notes'/'ta_resources')` 전부 대체).
4. `user-chip` 클릭 → `logout()`: 데이터 flush → 세션 제거 → 다시 잠금 + 로그인 창.

### 데이터 모델 변경
- 기존 전역 키 `ta_notes`, `ta_resources` → **계정별 통합 파일**로 이전. 파싱 시점 자동 로드 제거(로그인 후 로드).
- 신규 계정은 빈 상태로 시작(데모 데이터 없음).

### 검증 (Playwright, 브라우저 폴백 모드)
- 시작 시 로그인창 표시 + 메인 잠금 ✅
- 회원가입(alice) → 잠금 해제 + 유저칩 표시 ✅
- alice 리소스 생성 → 본인에게 보임 ✅
- 로그아웃 → 재잠금 ✅
- 신규 계정(bob)은 alice 데이터 안 보임(격리), `RESOURCES.length === 0` ✅
- alice 재로그인 → 데이터 복원 ✅
- 잘못된 비밀번호 → 에러 표시 + 잠금 유지 ✅
- 콘솔/페이지 에러 0건 ✅

### 향후
- 계정별 설정(`ta_settings`) 분리는 현재 미적용(테마/언어는 기기 단위 전역 유지). 필요 시 계정별로 이전 가능.
- 비밀번호 변경/계정 삭제 UI 미구현.

## 20. 설정 패널 로그아웃 버튼 (2026-06-02)

설정 모달에 **ACCOUNT** 섹션을 추가하고 **로그아웃** 행을 배치. 사이드바 user-chip 클릭 외에 설정에서도 로그아웃 가능.

- **활성화 조건:** 로그인 상태(`currentUser`)에서만 버튼 활성. 비로그인 시 `disabled` + 회색 처리, 설명문은 "오프라인 모드 — 로그인하면 사용 가능"으로 전환.
- `openSettings()` → `syncLogoutSetting()` 호출로 열 때마다 상태 동기화.
- `logoutFromSettings()`: 설정 모달을 닫고 기존 `logout()` 호출(데이터 저장 → 세션 해제 → 잠금 → 인증 오버레이).
- i18n 키 추가: `settAccount` / `settLogout` / `settLogoutDesc` / `settLogoutBtn` / `settLogoutLockedDesc` (EN·KO).
- CSS: `.sett-btn:disabled`(opacity·grayscale·pointer-events), `.sett-row.disabled`.

**검증:** Playwright(브라우저 폴백, localhost:7788) — 비로그인 비활성 / 회원가입 후 활성 / 클릭 시 로그아웃+설정닫힘+잠금+인증오버레이 노출 전부 PASS. 페이지 에러 0건.

## 21. Activity Feed 제거 + 백링크 상시 패널 전환 (2026-06-02)

우측 패널 하단의 Activity Feed를 완전히 제거하고, 그 자리에 **백링크 패널을 상시 노출 고정 패널**로 배치. 기존 접기/펴기(드롭다운) 방식 백링크 UI(`#backlinks-section` + `toggleBacklinksPanel()`)를 대체. ⚠️ `[[` 자동완성 팝업(`#backlink-dropdown`)은 **그대로 유지**.

### index.html
- `#feed-list`(빈 활동 피드 div) 삭제.
- 접기식 `#backlinks-section`(헤더+토글 아이콘) → 상시 패널 `#backlinks-panel`로 교체.
  - 구조: `.backlinks-panel` > `.backlinks-panel-head`(제목 + `#backlinks-count-badge`) + `.backlinks-list`(`#backlinks-list`).

### app.js
- `feedList` DOM 참조, `renderFeed`/`addFeedItem`/`deleteFeedItem`, `INITIAL_FEED` 상수, `renderFeed(INITIAL_FEED)` 호출, 흩어진 `addFeedItem(...)` 17곳 전부 삭제.
- `_backlinksOpen` 상태 + `toggleBacklinksPanel()` 삭제.
- `updateBacklinkPanel()` 재작성 — 항상 표시. 노트 미선택 시 "노트를 열면 백링크가 표시됩니다", 참조 0건 시 "참조하는 메모 없음" 빈 상태. 카운트 배지 상시 노출.
- `enterApp()`에 `updateBacklinkPanel()` 추가 → 로그인 직후 빈 상태 렌더.

### style.css
- `.feed-list`/`.feed-item`/`.feed-dot`/`.feed-text`/`.feed-time`/`.feed-del` 및 `body.light .feed-item` 규칙 삭제.
- `.backlinks-section`/`.backlinks-header`/`.backlinks-toggle-icon` → `.backlinks-panel`(`flex:1`)·`.backlinks-panel-head`로 교체. `.backlinks-list`는 `flex:1` 채움 + 스크롤.

### i18n
- `panelActivityFeed`(미사용) 제거. `backlinksTitle`/`backlinksEmpty`/`backlinksNoNote` 추가(EN·KO).

**검증:** Playwright(브라우저 폴백, localhost:7788) — 구조(feed/section 부재·panel 노출·dropdown 유지) / 빈 상태 / `[[NoteA]]` 참조 시 NoteA 백링크에 NoteB 1건 표시 / 항목 클릭 시 NoteB 이동 전부 PASS. 페이지 에러 0건.

## 22. 컬러 시스템 전면 개편 — 네온 → Digital Blue (2026-06-02)
**배경:** 기존 네온 퍼플(`#8A2BE2`)+블루(`#1E90FF`) 글로우가 글자를 덮고 너무 튀는 문제. Coolors Tailwind **"Digital Blue"**(`#0066FF` 기준) 스케일로 전면 교체.

### 스케일
`50 #E5F0FF · 100 #CCE0FF · 200 #99C2FF · 300 #66A3FF · 400 #3385FF · 500 #0066FF · 600 #0052CC · 700 #003D99 · 800 #002966 · 900 #001433 · 950 #000E24`

### 매핑 (요약)
- **Accent:** purple `#8A2BE2`→`#0066FF`(500), blue `#1E90FF`→`#3385FF`(400), light accent→`#66A3FF`(300).
- **Dark BG:** `#050509`→`#000B1F`, panel `#0D111A`→`#001433`, glass `rgba(0,20,51,*)`, tinted bg→`#002966`(800).
- **Light BG:** `#F0F2F8`→`#EEF4FF`, panel `#E2E6F0`→`#DCE8FF`.
- **Text:** Dark hi `#EAF1FB`/mid `#8FA9CC`/lo `#51688C`, Light hi `#0A1E3D`/mid `#2E5599`/lo `#7E9BC4`.
- **Navigation 내림차순:** Dark `#3385FF→#66A3FF→#99C2FF→#CCE0FF`(Home→Analytics→Archive→Settings), Light `#0052CC→#0066FF→#3385FF→#66A3FF`. (`index.html` settings 항목에 `data-nav="settings"` 추가)
- **글로우 톤다운:** 작은 반경 고알파(`0.5`/`0.4`) box-shadow → `0.32`/`0.28`로 완화(가독성).
- **빨강/노랑/오렌지/실버(시맨틱·노트색)는 보존.**

### 변경 파일
- `style.css` — 변수(dark/light) 전면 교체 + `.nav-item` 내림차순 블루 규칙 추가. 원본 백업 `style.css.neon-backup`.
- `app.js` — `NOTE_COLORS`/`selectedColor`/`typeColors`/기본·폴백 색·태그 보더 → 블루.
- `index.html` — 로고 SVG 그라데이션 stop + 컬러칩 필터 → 블루, settings nav `data-nav` 추가.

**검증:** Playwright(시스템 Chrome, localhost:7788) — 다크/라이트 양 모드 스크린샷 확인. 네온 잔여 0건(style/app/html), 네비 내림차순 가시성·액센트·텍스트 가독성 PASS.

## 23. 좌측 "Navigation" 라벨 제거 (2026-06-02)
**배경:** 사이드바 로고 아래 `Navigation`/`내비게이션` 섹션 헤더가 어색하고 불필요 — 적절한 대체 텍스트도 없어 완전 삭제.

### 변경 파일
- `index.html` — `<div class="nav-label" data-i18n="navNavigation">Navigation</div>` 줄 삭제. 로고 바로 아래 Home 메뉴가 시작.
- `app.js` — 영/한 i18n 사전에서 사용처 없어진 `navNavigation` 키 제거.

**검증:** Playwright(localhost:7788) — 로그인 후 사이드바 `.nav-label` 가시 항목 0건(이전 `Navigation` 제거 확인, `Tags` 라벨은 기본 숨김 유지). 스크린샷 PASS.

## 24. 비-Home 페이지에서 리소스 클릭 시 이동 안 되는 버그 수정 (2026-06-02)
**증상:** Analytics/Archive 페이지에 있을 때 우측 Resource List에서 리소스를 클릭해도 열리지 않음.

**원인:** `onResourceClick()`이 내부 레이어(`layer-media`/`layer-note`)만 `switchView()`로 토글하고 `#main` 컨테이너의 `dataset.view`는 그대로 둠. 따라서 `dataset.view`가 `archive`/`analytics`인 동안에는 home 뷰 컨테이너 자체가 숨겨져 있어 변경이 화면에 반영되지 않음.

### 변경 파일
- `app.js` — `onResourceClick()` 시작부에 home 뷰가 아니면 `#main` `dataset.view='home'`으로 전환 + nav active를 Home으로 동기화 + `renderSidebarTags()` 호출 블록 추가. 이후 기존 `switchView()`가 정상 동작.

**검증:** Playwright(테스트 계정 sksla02) — Archive `archive→home`, Analytics `analytics→home` 모두 클릭 후 미디어 로드·Home 메뉴 활성 확인. 스크린샷 PASS.

## 25. Settings 버튼 사이드바 하단 이동 (2026-06-02)
**배경:** Archive 아래 중간에 있던 `Settings` nav-item을 사이드바 최하단 username(user-chip) 바로 위로 이동.

### 변경 파일
- `index.html` — `data-nav="settings"` nav-item을 기존 위치(태그 영역 아래)에서 제거하고 `.sidebar-footer` 내부 `storage-bar-wrap`과 `user-chip` 사이로 이동. 최종 푸터 순서: storage-bar → Settings → user-chip.

**검증:** Playwright(테스트 계정 sksla02) — `.sidebar-footer` 자식 순서 `['storage-bar-wrap','nav-item:settings','user-chip']` 확인, Settings 클릭 시 설정 모달 정상 오픈. 스크린샷 PASS.

## 26. 설정 — Transparency(투명도) 항목 제거 (2026-06-02)
**배경:** 설정 VISUAL 섹션의 글라스모피즘 투명도 슬라이더 항목 삭제.

### 변경 파일
- `index.html` — VISUAL 섹션의 Transparency `.sett-row`(슬라이더 `#sl-transparency` 포함) 블록 삭제.
- `app.js` — 연관 코드 일괄 정리: `SETTINGS_DEFAULT.transparency` 제거, `loadSettings()`의 `sl-transparency`/`transparency-val` DOM 참조 및 `applyTransparencyVar()` 호출 제거, `applyTransparency()`/`applyTransparencyVar()` 함수 삭제, 영/한 i18n `settTransparency`/`settTransparencyDesc` 키 제거.
- `--glass-bg`는 JS 오버라이드 없이 `style.css` 기본값(dark `rgba(0,20,51,.55)` / light `rgba(220,234,255,.75)`) 사용.

**검증:** Playwright(테스트 계정 sksla02) — 설정 모달 항목에서 Transparency 미존재, `#sl-transparency` 없음, 콘솔/페이지 에러 0건. 스크린샷 PASS.

## 27. UI/UX 개선 묶음 — 제목/아이콘/툴팁/빈상태/포커스/메모고정/드래그정렬 (2026-06-03)

지난 세션(2026-06-02)에 코드만 작성하고 일부 CSS·기능이 누락됐던 UI/UX 7개 작업을 마무리.

### Task 1 — 상단 제목 중복 제거
- `index.html` h1을 `<h1 id="page-title">Home</h1>`로 변경.
- `app.js`에 `updatePageTitle()` 추가, `goHome()/navigateTo()/onResourceClick()/applyLanguage()`에서 호출 (navHome/navAnalytics/navArchive i18n 재사용).

### Task 2 — 상단 아이콘 버튼 정리
- 깨지던 `⌨`(tofu) → `?`로 교체. `.topbar-btn.icon-only` 클래스 + `aria-label` 추가, live-dot에 title 추가.
- **CSS(이번 추가):** `.topbar-btn.icon-only`를 32×32 정사각 flex-center 버튼으로 정의. (전역 `html{zoom:.8}` 때문에 화면상 약 26px로 보이나 CSS 기준 32px가 정상.)

### Task 3 — Archive 색상 필터 툴팁
- 7개 color-chip + All에 `title` 추가 (Blue/Sky Blue/Red/Yellow/Orange/Silver).

### Task 4 — 빈 상태 CTA
- `media-placeholder`·`renderArchive` 빈상태·`renderResources` 빈상태(RESOURCES 0개)에 CTA 버튼(＋Add Resource / ✎New Note) 추가.
- i18n 키 `resourceEmpty`/`emptyAddResource`/`emptyNewNote`(EN+KO).
- **CSS(이번 추가):** `.empty-cta`(그라데이션 버튼) + `.empty-cta-row`(중앙정렬 행) + hover/active 트랜지션.

### Task 5 — 호버/포커스 마이크로 인터랙션
- **CSS:** 전역 `:focus-visible` 키보드 포커스 링(`outline: 2px var(--blue)`) 추가, 입력요소는 offset 0. 마우스 클릭엔 미표시.
- `.topbar-btn:active { transform: scale(.96) }` press 피드백 추가.
- ⚠️ error-log 가이드 준수: 스크롤 리스트 아이템(`.resource-item`)에는 box-shadow 미사용, `transition:all` 미사용.

### Task 8 — 메모 고정(pin)
- note 객체에 `pinned` 필드. `doSaveNote()`가 객체를 통째로 덮어쓰므로 `pinned: notes[currentNoteKey]?.pinned || false`로 **재저장 시 보존**.
- `renderArchive()` 정렬: pinned 우선 → 그 다음 saved 날짜 내림차순.
- 카드에 `.archive-pin` 토글 버튼(📌) + `.archive-card.pinned` 클래스. 클릭 시 `stopPropagation`으로 카드 열림 방지.
- `togglePin(key)` 함수: pinned 토글 → `saveAccountData()` → `renderArchive()` → 토스트.
- i18n 키 `pinNote`/`unpinNote`(EN+KO). **CSS:** `.archive-pin`(우상단 절대배치, hover 시 노출, active=항상 노출).

### Task 9 — 리소스 드래그 순서 변경
- HTML5 drag-and-drop. **전체 목록(filter==='all' && 검색X && 태그X)일 때만** `div.draggable=true` 부여 — 부분 목록 재정렬로 인한 순서 손상 방지.
- `_setupResourceDnD()`/`_dragAfterElement()`/`_commitResourceOrder()` 추가. dragover 리스너는 `list._dndBound` 플래그로 1회만 바인딩(렌더 간 list 요소 유지).
- 드롭 후 DOM의 `data-id` 순서대로 `RESOURCES.sort()` → `saveResources()`로 영속화.
- **CSS:** `.resource-item[draggable="true"]{cursor:grab}`, `.dragging`{opacity .45 + grabbing + border/background 강조} (box-shadow 미사용).

### 변경 파일
- `index.html` — page-title h1, icon-only 버튼, color-chip/all title, media-placeholder CTA.
- `app.js` — updatePageTitle, 빈상태 CTA, pinned 보존/정렬/togglePin/pin버튼, 리소스 DnD, i18n 키.
- `style.css` — `:focus-visible`, `.topbar-btn.icon-only`/`:active`, `.empty-cta`/`.empty-cta-row`, `.archive-card.pinned`/`.archive-pin`, `.resource-item.dragging`.

**검증:** Playwright(브라우저 폴백, 테스트 계정 sksla02, 영속 프로필 `/tmp/ta_profile`) — 13개 체크 중 12 PASS, 1건은 `getBoundingClientRect`가 `html{zoom:.8}`로 32→26px 스케일된 측정 아티팩트(computed width=32px 확인, 실 결함 아님). 로그인/icon-only/empty-cta 그라데이션/focus-visible/archive 카드·pin 토글·pinned 정렬·재저장 보존/리소스 draggable·재정렬·영속 전부 PASS.

## 28. 버그 수정 — "새 메모" 클릭 시 에디터 초기화 안 됨 (2026-06-03)

**증상:** 메모를 작성/저장한 뒤 "✎ New Note"(또는 빈상태 CTA)를 눌러도 제목·본문이 이전 메모 내용 그대로 남아 빈 에디터로 시작되지 않음.

**원인:** `goHomeAndNewNote()`가 `goHome()`(뷰·제목만 전환) → `switchView('note')`만 호출. `switchView('note')`는 `currentNoteKey`가 비어있을 때만 새 키를 만들므로, 직전 편집의 `currentNoteKey`·title·body·tags가 그대로 유지됨.

**수정(`app.js` `goHomeAndNewNote`):** `goHome()` 후 `currentNoteKey=null`, `activeResId=null`, `currentTags=[]`, 제목/본문 input 비우기, `renderTagPills()`/`updateWordCount()`/`renderResources()` 갱신 후 `switchView('note')`. 이로써 빈 에디터로 시작하고 `switchView`가 새 `note_new_` 키를 부여.

**검증:** Playwright — 메모 저장 후 New Note 클릭 시 제목/본문/태그 전부 비워짐, `currentNoteKey`가 `note_new_*`로 리셋, 기존 메모는 보존되며 새 메모 저장이 기존 메모를 덮어쓰지 않음. 8개 체크 ALL PASS.

## 29. 미디어 뷰 webview 네비게이션 버튼 추가 — 뒤로/앞으로/새로고침 (2026-06-03)

**배경:** 미디어 뷰에서 웹사이트를 webview로 열고 링크를 타고 들어가면, 이전 페이지로 돌아갈 방법이 없었음("Open in browser"로 외부 브라우저를 여는 것 외엔 복귀 불가).

**변경:**
- `index.html` — `.dv-tabbar-right`의 URL바 앞에 `◀`(`#nav-back`)/`▶`(`#nav-forward`)/`⟳`(`#nav-reload`) 버튼 3종 추가. back/forward는 기본 `disabled` 클래스로 시작.
- `app.js`:
  - `mediaBack()`/`mediaForward()`/`mediaReload()` — Electron `<webview>`의 `goBack()`/`goForward()`/`reload()` 호출. `wv?.canGoBack?.()` 옵셔널 체이닝 + `try/catch`로 dom-ready 전이나 브라우저 폴백(webview가 일반 요소라 메서드 없음)에서도 안전하게 무시.
  - `_updateNavButtons()` — `canGoBack()`/`canGoForward()` 결과에 따라 back/forward 버튼의 `.disabled` 토글.
  - 기존 `did-navigate`/`did-navigate-in-page` 리스너(URL바 동기화)에 `_updateNavButtons()` 호출 추가 → webview 내 이동 시 버튼 활성 상태 자동 갱신.
- `style.css` — `.dv-icon-btn.disabled { opacity:.35; pointer-events:none; cursor:default }`.

**검증:** Playwright(브라우저 폴백) — 버튼 3종 DOM 존재, 함수 4종 정의, back/forward 초기 disabled·reload enabled, 함수 호출 시 JS 에러 0건, disabled CSS(opacity .35 / pointer-events none) 적용. 12개 체크 ALL PASS. ⚠️ 실제 `goBack/goForward` 동작은 Electron `<webview>` 전용이라 브라우저 폴백에선 가드만 검증됨 — 실동작은 Electron 앱에서 확인 필요.

## 30. 윈도우 이관 마무리 — Always on Top IPC 연결 + Widevine 크로스플랫폼 (2026-06-03)

작업 환경을 macOS → Windows로 이관하면서 플랫폼 의존 미완성 항목 2건을 마무리.

### Task A — Always on Top IPC 연결 (Roadmap 미완료 항목)
**증상:** `applyAlwaysOnTop()`가 설정값 저장과 라벨 갱신만 하고 실제 창 고정(`win.setAlwaysOnTop()`)을 호출하지 않아 토글해도 동작 안 함. 시작 시 저장값도 창에 미반영.

**수정:**
- `preload.js` — `window.taAPI.setAlwaysOnTop(flag)` 추가 (`ipcRenderer.invoke('window:set-always-on-top', flag)`).
- `main.js` — `ipcMain.handle('window:set-always-on-top', (_e, flag) => { if (win) win.setAlwaysOnTop(!!flag); return true; })`.
- `app.js` — `applyAlwaysOnTop()`에서 `window.taAPI?.setAlwaysOnTop(on)` 호출. `loadSettings()` 시작부에서 저장된 `settings.alwaysOnTop`을 토스트 없이 조용히 창에 반영.
- i18n/HTML — `settAlwaysOnTopDesc` 문구를 "Electron IPC ready/연동 준비됨" → 실제 기능 설명("Keep window above all other windows" / "다른 모든 창 위에 항상 표시")으로 정정 (EN·KO·index.html data-i18n 기본값).

### Task B — Widevine CDM 경로 크로스플랫폼 (Windows 버그)
**증상:** `main.js`의 Widevine 경로가 macOS 전용(`/Applications/Google Chrome.app/...` + `.dylib`)으로 하드코딩 → Windows에선 CDM 미탐색으로 YouTube 영상 재생 불가.

**수정(`main.js`):** `findWidevineBase()` 신규 — 플랫폼별 후보 경로에서 `manifest.json`이 있는 CDM 베이스 디렉토리 탐색.
- **macOS:** 기존 Chrome.app 프레임워크 경로.
- **Windows:** `%LOCALAPPDATA%\Google\Chrome\User Data\WidevineCdm\<버전>\` (버전 폴더가 1단계 더 깊음). Chrome 미설치 시 **Edge**(`...\Microsoft\Edge\User Data\WidevineCdm`)도 폴백 탐색. 버전 폴더는 정렬 후 최신 선택.
- **Linux:** `/opt/google/chrome/WidevineCdm`.
- `widevineVersion(base)`가 인자로 받은 베이스에서 버전 파싱. CDM 미발견 시 스위치 미등록(graceful).

**검증(Windows 11, 본 머신):** `node -c`로 main/preload/app 문법 PASS. `findWidevineBase()` 단독 실행 시 Edge CDM 자동 탐색 성공(`...\Microsoft\Edge\User Data\WidevineCdm\4.10.2934.0`, Chrome 미설치 환경). `npm start` 정상 부팅(exit 0), JS 에러 0건 — 출력의 GPU/디스크 캐시 경고는 샌드박스 환경 아티팩트(정상 실행 시 미발생). ⚠️ Always on Top 실제 창 고정·DRM 영상 재생은 GUI 상호작용이라 사용자 수동 확인 권장.

## 31. 클라우드 동기화 — Supabase Auth 전면 교체 + 오프라인 우선 동기화 (2026-06-03)

**배경:** 출시 + 다수 사용자 환경을 위해, 로컬 `accounts.json` + `sha256(salt+pw)` 인증(기기마다 계정이 갇히고 보안 약함)을 **Supabase Auth(이메일/비밀번호)로 전면 교체**. 데이터는 Supabase에 사용자별 RLS 격리 저장하고, 데스크톱 앱답게 **오프라인 우선**(첫 로그인 후 인터넷 없이 사용)을 유지.

### 확정 결정
- 백엔드 **Supabase** / 인증 **전면 교체** / 동기화 **자동(디바운스 푸시 + 시작/네트워크복귀 풀) + 수동(Sync now)** / 충돌 **사용자 선택 다이얼로그** / 기존 로컬 계정 **폐기(마이그레이션 없음)** / 오프라인 **세션 캐시 + 로컬 캐시로 지원**.

### 사전 준비 (사용자 액션 — README ☁️ 섹션 참조)
Supabase 프로젝트 생성 → `supabase-config.js`에 URL/anon key 입력 → SQL로 `user_data(user_id uuid pk, data jsonb, updated_at timestamptz)` + RLS 정책 생성 → Auth에서 "Confirm email" 끄기.

### 파일별 변경
| 파일 | 내용 |
|------|------|
| `vendor/supabase.js` (신규) | supabase-js v2.107 UMD 빌드 vendoring (`window.supabase.createClient`). 번들러 없는 프로젝트라 node_modules 대신 vendor 고정 → asar 포함. |
| `supabase-config.js` (신규) | `window.SUPABASE_URL` / `SUPABASE_ANON_KEY` placeholder. |
| `index.html` | `app.js` 앞에 vendor/config script 2개, auth 입력 `auth-username`(text) → `auth-email`(email), `#sync-conflict-overlay` 다이얼로그, 설정 **CLOUD SYNC** 섹션(상태/마지막 동기화/Sync now/자동동기화 토글). |
| `app.js` | Supabase 클라이언트(`sb`, placeholder면 null 게이팅 `_supaConfigured()`), `registerUser`/`loginUser`→signUp/signInWithPassword, `enterApp(user객체)`·`logout`(signOut)·`initAuth`(getSession+onAuthStateChange), `currentUser`=user객체/`currentUid`=user.id. **동기화 엔진**: `ta_sync_<uid>` 메타(dirty/localUpdatedAt/lastSyncedRemoteAt), `pushCloud`(디바운스 2s upsert), `pullCloud`/`syncNow`(updated_at 비교 → pull/push/충돌), `_applyRemote`(렌더 갱신 + 캐시 기록), 충돌 다이얼로그(`resolveConflictUseCloud`/`UseLocal`), `updateSyncUI`. `saveAccountData`가 로컬 캐시 기록 + dirty 표시 + 디바운스 푸시. `online`/`offline` 리스너. i18n 다수(auth 에러·sync 상태·충돌·CLOUD SYNC), 사용자칩 email화, 설정 `cloudAutoSync` 기본 ON. |
| `Store` 파사드 | `readAccounts`/`writeAccounts` 제거. `readData`/`writeData`는 **로컬 캐시(오프라인 백업)**로 유지하되 키를 username → **uid**. |
| `main.js` | `accounts:read/write` IPC + `ACCOUNTS_FILE` 제거. `data:read/write`는 캐시용으로 유지(uid 키). |
| `preload.js` | `accountsRead`/`accountsWrite` 제거. `dataRead`/`dataWrite` 유지. |
| `style.css` | `#sync-conflict-overlay`/`#sync-conflict-modal`/`.sync-conflict-actions`(+라이트모드) — auth 모달 룩 재사용. |
| `package.json` | `@supabase/supabase-js` 의존성 추가. |

### 동기화 판정 로직 (pullCloud)
원격 없음 → 첫 업로드. `!dirty && 원격최신` → pull. `dirty && 원격불변` → push. `dirty && 원격최신` → **충돌**(다이얼로그). 그 외 → 동기.

### 검증
- ✅ 정적: `node -c` 4파일 PASS. vm stub 환경에서 `vendor→config→app` 평가 시 **app.js 최상위 throw 0건**, `_supaConfigured()` placeholder=false(→`sb`=null 게이팅)·실키형=true, `createClient` 도달 확인. (vm의 realtime/Worker 초기화 크래시는 Node 환경 한계, 앱 무관.)
- ✅ Electron `npm start` 정상 부팅(메인 프로세스 크래시 0).
- ⚠️ **실검증 미완(사용자 몫):** 인증·격리·동기화·기기간·오프라인·충돌은 **살아있는 Supabase 프로젝트 + 네트워크 필요**. 사전 준비(프로젝트·키·SQL·이메일확인 off) 완료 후 README/§31 검증 시나리오대로 Electron에서 확인 요망.

**검증 완료(2026-06-03, 실 프로젝트 `twadnveelrgghlxgopxv`):** 연결·`user_data` 테이블·RLS 기본 차단·가입 즉시 세션(Confirm email off)·데이터 upsert/read 라운드트립(deep-equal, jsonb 키순서만 정규화)·사용자별 RLS 격리 모두 PASS. 대시보드에서 RLS 정책 3개 확인. (인앱 GUI 클릭 플로우는 사용자 확인 권장.)

## 32. 윈도우 UI 다듬기 + 설정 패널 확장 (2026-06-03)

### A. 텍스트 선명도 / 로고 글로우 (윈도우)
- **흐릿한 텍스트:** 창 프레임이 세로 공간을 먹어 콘텐츠가 900px 미만 → `applyScale`의 `zoom`이 분수값(≈0.95)으로 적용되며 글자가 흐려짐. **`main.js` BrowserWindow에 `useContentSize: true`** 추가 → 콘텐츠 영역 정확히 1600×900 → zoom 1.0 → 선명. `style.css` body에 `-webkit-font-smoothing`/`text-rendering: optimizeLegibility` 보강. (폰트는 Segoe UI 유지 — 원인은 폰트가 아니라 스케일.)
- **로고 아이콘 글로우 번짐:** `.logo-icon box-shadow 0 0 18px ...0.32` → **`0 0 6px ...0.16`** 로 축소.

### B. 버전 라벨 동적화
- `index.html` 로고의 하드코딩 `v1.0.1 · local` → `<span id="app-version-label">v1.1.1 · cloud</span>`.
- `main.js` `ipcMain.handle('app:version', () => app.getVersion())`, `preload.js` `taAPI.getVersion()`, `app.js`가 시작 시 `v{버전} · cloud`로 갱신. **이제 package.json 버전만 올리고 빌드하면 자동 반영**(build:win이 `--app-version` 전달).

### C. 설정 패널 4개 항목 추가
그동안 추가된 기능 대비 설정이 빈약해 보강.
| 항목 | 위치 | 내용 |
|------|------|------|
| **UI 크기/배율** | VISUAL | `settings.uiScale`(auto/0.9/1/1.1/1.25). `applyScale`이 auto면 창맞춤, 숫자면 수동 배율 + 콘텐츠가 창 초과 시 `body.overflow=auto`로 스크롤. `applyUiScale()`. |
| **새 노트 기본 색/이모지** | WORKFLOW | `settings.defaultColor`/`defaultEmoji`. `showSavePanel()`이 신규 노트에 기본값 pre-select. 설정에 `renderDefaultNotePicker()`로 `.scp-*` 칩 재사용 피커. |
| **전체 백업/복원** | DATA MGMT | `exportAllData()`(전체 notes+resources를 JSON 다운로드), `importAllData(input)`(파일 파싱·검증·확인 후 교체 → `saveAccountData`로 캐시+클라우드 반영). 기존 단일 노트 .md 내보내기와 별개. |
| **비밀번호 변경** | ACCOUNT | `changePassword()` → `sb.auth.updateUser({password})`. 인라인 폼(`#change-pass-box`, 새 비번+확인), `toggleChangePassword()`로 펼침, 열 때마다 접힘. |
- `style.css`: `.def-note-picker`(이모지 wrap), `.change-pass-box` 추가.
- i18n: en/ko에 `settUiScale*`/`settDefaultNote*`/`settBackup*`/`settImport*`/`settChangePass*`/`cp*` 키 추가.

**검증:** `node -c` PASS. vm 스텁(placeholder 강제로 createClient 우회)에서 app.js 최상위 전체 평가 OK — 신규 함수 전부 정의·참조 오류 0건. Electron 정상 부팅. ⚠️ 각 설정의 실제 동작(배율 변경/백업 파일/가져오기/비번 변경)은 GUI·실 Supabase라 사용자 확인 권장.

## 33. 성능 최적화 — 동작 보존 (2026-06-03)

§14/§14-A(백링크·태그·DOM 캐싱)에 이어, **동작을 바꾸지 않는** 선에서 핫패스 4곳 최적화.

| # | 대상 | 내용 |
|---|------|------|
| 1 | **리소스 선택** (`onResourceClick`) | 선택만 바뀌어도 `renderResources()`로 리스트 DOM 전체를 재구성하던 것을 → 신규 `_updateActiveResourceHighlight()`로 **`.active` 클래스만 토글**. 가장 빈번한 상호작용에서 전체 teardown/rebuild + DnD 재바인딩 제거. (부수효과: 검색 결과에서 항목 클릭 시 리스트가 전체로 리셋되던 비일관 동작이 사라지고 검색 결과가 유지됨 — 개선.) |
| 2 | **검색 입력** (`filterBySearch`) | 매 키 입력마다 전체 reduce+full-text 스캔+DOM 재구성하던 `renderResources`를 **120ms 디바운스**. 태그 자동완성은 즉시 유지. |
| 3 | **DOM 캐싱** | 키 입력마다 3회 `getElementById`하던 `updateWordCount`의 word/char/line 요소와 `resource-list`를 `DOM` 캐시에 추가(폴백 포함). |
| 4 | **`renderResources` 렌더** | 항목별 `list.appendChild` → **`DocumentFragment`에 모은 뒤 1회 append**로 리플로우 감소. 리스트 요소도 `DOM.resourceList` 캐시 사용. |

⚠️ outlink pill(`updateNoteOutlinks`) 키입력당 재생성은 sig 비교로 줄일 수 있으나, 노트 로드 경로가 많아 **exists 상태 staleness 위험**이 있어 안전 우선으로 **보류**.

**검증:** `node -c` PASS. vm 스텁 평가에서 참조 오류 0건. Electron 정상 부팅. ⚠️ 선택/검색/카운터 실제 체감은 GUI 확인 권장.

## 34. 코드 감사 + 정리 + 비밀번호 찾기 (2026-06-03)

### 감사 결과 (양호)
제거 기능 잔재 0건(feed/transparency/구 인증), 디버그 흔적 0건, i18n 키 160개 누락·불일치 0건, 함수 144개 중 미사용 1개, 앱 정상 부팅.

### 정리(삭제)
- **죽은 함수 `filterResources()` 제거** — `setPill()`과 중복, 호출 0회.
- **미사용 i18n 키 제거** — `navResources`/`navYoutube`/`navShorts`/`navWebsites`/`navNotes` (제거된 사이드바 Resources 섹션 §15 잔재, en·ko 양쪽). `navHome/Analytics/Archive/Settings`만 유지.
- **README 최신화** — 디자인(네온→Digital Blue), 제거 항목(투명도/활동피드) 삭제, 설정 목록·클라우드 동기화 반영, 버전 `v1.0.1`→`v1.1.1`.

### 추가 — 비밀번호 찾기 (이메일 OTP 방식)
데스크톱(file://)은 복구 링크 리다이렉트가 어려워 **OTP 코드 방식** 채택.
- 로그인 화면 하단 **"Forgot password?"** → auth 모달 `reset` 모드 전환(`setAuthMode('reset')`: 기존 비번 숨김, Send code 버튼·코드/새비번 입력 노출).
- `sendResetCode()` → `sb.auth.resetPasswordForEmail(email)`로 OTP 발송 → 코드/새비번 행 노출.
- `submitAuth()` reset 분기 → `sb.auth.verifyOtp({email, token, type:'recovery'})` → `updateUser({password})` → `enterApp`.
- i18n: `authForgot`/`authSendCode`/`authResetBtn`/`authCodePh`/`authNewPassPh`/`authCodeSent`/`authErrResetCode` (en·ko). CSS `.auth-secondary`/`.auth-forgot`.
- ⚠️ **사전 준비:** Supabase **Reset Password 이메일 템플릿에 `{{ .Token }}`** 추가 필요(코드가 메일에 보이도록). README ☁️ 섹션 5번에 기재.

**검증:** `node -c` PASS, vm 평가 참조 오류 0건, Electron 부팅 정상. ⚠️ 실제 OTP 재설정 동작은 살아있는 Supabase + 템플릿 설정 후 GUI 확인 필요.

## 35. 버그 수정 — 로그아웃 시 블러만 되고 로그인 오버레이 안 뜸 (2026-06-04)

**증상:** (자동 로그인 상태에서) 좌측 하단 계정칩/설정으로 로그아웃 시 `body.locked` 블러는 적용되는데 인증 오버레이(로그인 팝업)가 안 뜸.

**원인:** `closeAuthOverlay()`가 `transitionend` `{once:true}` 리스너로 `visible`을 제거. 앱 시작 시 **캐시 세션 자동 로그인**이면 `enterApp()`이 *한 번도 열리지 않은* 오버레이에 `closeAuthOverlay()`를 호출 → 트랜지션 미발생 → `transitionend`가 영영 안 fire → 리스너가 **대기 잔류**. 이후 로그아웃의 `openAuthOverlay()` 페이드인 `transitionend`가 그 잔류 리스너를 발동시켜 방금 추가한 `visible`을 제거 → 오버레이가 `display:none`. (폼 직접 로그인 직후 로그아웃은 리스너가 정상 소비되어 멀쩡했음.)

**수정(`app.js`):** `transitionend` 패턴 → **타이머 기반**으로 교체. `closeAuthOverlay()`는 `setTimeout(..., 240)`(=opacity .22s 후)로 `visible` 제거하고 `_authHideTimer`에 보관, `openAuthOverlay()`는 시작 시 `clearTimeout(_authHideTimer)`로 진행 중 숨김을 취소 → dangling 리스너·재오픈 취소 문제 제거. (settings/shortcut/conflict 오버레이는 항상 open 후 close라 동일 버그 없음 → 미변경.)

**검증:** 자동 로그인 상태에서 계정칩·설정 양쪽 로그아웃 모두 로그인 오버레이 정상 노출 — 사용자 확인 완료.

## 36. 네이티브 컨텍스트 메뉴 추가 — 보조 클릭 복사/붙여넣기 (2026-06-04)

**증상:** 메모 뷰(`#note-editor` 등 편집 영역)에서 보조 클릭(트랙패드 두 손가락 탭 / Control-클릭 / 우클릭)해도 시스템처럼 복사·붙여넣기 메뉴가 안 뜸.

**원인:** Electron 은 Chromium 과 달리 **기본 컨텍스트 메뉴를 제공하지 않는다**. 직접 `webContents` 의 `context-menu` 이벤트를 받아 `Menu` 를 띄워야 함.

**수정(`main.js`):** `Menu` 임포트 + `buildEditMenu(params)` 추가 후 `app.on('web-contents-created')` 로 **모든 web contents(메인 렌더러 + `<webview>` 미디어 뷰)** 의 `context-menu` 이벤트에 연결.
- `params.isEditable` → 실행 취소/다시 실행 · 잘라내기/복사/붙여넣기 · 모두 선택 (각 항목 `editFlags` 로 활성/비활성).
- 편집 영역이 아니고 선택 텍스트만 있으면 → 복사 · 모두 선택.
- 둘 다 아니면 메뉴 미표시.
- **role 기반**이라 라벨이 OS 언어로 자동 현지화(한/영 시스템 표기 그대로). 한국어 macOS: 잘라내기/복사/붙여넣기/모두 선택.

**검증:** Playwright(Electron)로 `context-menu` 리스너 연결(count 1)·메뉴 빌드(undo/redo/cut/copy/paste/selectAll)·보조 클릭 시 무오류 확인.

## 37. 집중모드에서 통계 카드 숨김 (2026-06-04)

**요청:** 집중모드(Ctrl+F) 진입 시 뷰어 위 통계 카드 3개(`.stats-row` — Notes Saved / Resources Linked / Session Time)도 사라지게.

**수정(`style.css` FOCUS MODE 섹션):** `body.focus .stats-row { display: none; }` 한 줄 추가. 기존 `body.focus`는 사이드바·우측 패널만 숨겼는데, 통계 행까지 숨겨 중앙 듀얼뷰 영역을 더 넓게.

**검증:** Playwright로 `body.focus` 토글 시 `.stats-row` display `grid → none → grid` 전환 확인.

---

## 38. 웹 에디션 분기 — 브라우저에서 동작하는 별도 빌드 (2026-06-06)

**배경:** 기존 데스크톱(Electron) 앱은 그대로 유지하고, 새 폴더 `thought-archive-web/` 에
브라우저에서 그대로 도는 **웹 버전**을 분리 신설. 빌드 단계 없는 정적 호스팅 대상
(Netlify/Vercel/GitHub Pages). 인증·동기화는 이미 Supabase 클라이언트 사이드라 백엔드 서버 불필요.

### 분리 방식
- 1.2.0에서 `index.html` / `app.js` / `style.css` / `vendor/supabase.js` / `supabase-config.js` /
  `feedback-schema.sql` / `LICENSE` 만 복사. **`main.js` / `preload.js` / `package.json`(Electron) /
  `node_modules` / `dist` 는 제외** — 웹은 순수 정적 자산.

### Electron 의존성 제거 (3곳)
- **`taAPI` (파일 저장 IPC):** 이미 `Store` 객체에 `localStorage` 폴백이 존재(`isElectron` 게이트).
  웹은 `window.taAPI` 부재 → 자동으로 `localStorage` 경로 사용. 코드 변경 없이 동작.
- **`getVersion` IPC:** `taAPI` 없을 때 상수 `WEB_VERSION='1.2.0'` 으로 분기, 로고 라벨을 `v1.2.0 · web` 으로 표시.
- **`setAlwaysOnTop` / 'Always on Top' 설정행:** 데스크톱 창 전용 기능 → 설정 UI 행을 `display:none` 처리
  (요소는 app.js 참조 때문에 유지). 호출부는 기존 `window.taAPI` 가드로 자동 no-op.

### 미디어 뷰 `<webview>` → `<iframe>` 이식 (핵심)
- **제약:** 브라우저 `<iframe>` 은 X-Frame-Options/CSP 로 대부분의 외부 사이트와 YouTube *watch* URL 임베드 불가.
  cross-origin 차단은 부모에서 감지 불가 → Electron의 `did-fail-load` 사후 감지 방식 폐기.
- **`toEmbedUrl` 재작성:** YouTube(watch/shorts/youtu.be) → `youtube.com/embed/{id}`, Vimeo → `player.vimeo.com/video/{id}`
  로 정규화. (데스크톱은 webview용 watch URL을 그대로 썼던 것과 반대 방향.)
- **`_mediaEmbeddable(url)` 신설 + `_openMedia(url)` 공통 헬퍼:** 임베드 가능 호스트(YouTube/Vimeo)만
  인앱 iframe 표시, 그 외에는 iframe을 `about:blank` 로 비우고 기존 `#iframe-blocked` 오버레이 +
  '새 탭에서 열기'(`openExternal`)로 폴백. `loadResource`/`loadUrl` 모두 `_openMedia` 경유로 통일.
- **네비게이션:** 뒤로/앞으로는 cross-origin iframe 히스토리 제어 불가 → 웹에서 버튼 숨김.
  새로고침(`mediaReload`)은 `iframe.src` 재할당으로 동작.

### 정적 호스팅 메타
- `manifest.webmanifest`(PWA) + `favicon.svg`(브랜드 아이콘) 신설, `index.html` `<head>` 에 링크.
- 웹 전용 `README.md`(앱↔웹 차이표 + 로컬 실행/배포 가이드), `.gitignore` 추가.

### 검증 (Playwright)
- 로드 무오류, `sb`(Supabase) 초기화, 버전 라벨 `v1.2.0 · web`, `#media-iframe` 태그가 IFRAME, 뒤로/앞으로 버튼 숨김 확인.
- `toEmbedUrl`/`_mediaEmbeddable` 단위 검증(watch/shorts/youtu.be/embed/vimeo → 임베드 O, 일반 사이트 → 임베드 X).
- `_openMedia(youtube)` → iframe embed src + 오버레이 숨김 / `_openMedia(example.com)` → `about:blank` + 오버레이 표시.
- 임시 계정 회원가입 → 즉시 로그인(이메일 확인 off) → 로그인 후 UI 렌더링 + YouTube 인앱 플레이어 실제 재생 스크린샷 확인.

---

## 39. 버그 수정 — '검색창 포커스'(Ctrl+Shift+F) 단축키 동작 안 함 (2026-06-06)

**증상:** 단축키 도움말의 `Ctrl+Shift+F`(검색창 포커스)가 먹히지 않음. 검색창(`#search-input`)은
단축키가 가리키는 `DOM.searchInput` 과 **동일 요소**라 대상 불일치는 아니었고, 원인은 키 매칭 버그.

**원인:** 전역 keydown 핸들러가 `switch (e.key)` 로 분기하는데, **Shift 조합 시 `e.key` 가 대문자**가 됨
(`Ctrl+Shift+F` → `'F'`). 그래서 `case 'f'` 안의 `if (e.shiftKey) DOM.searchInput.focus()` 분기에 영영 도달 못 함.
(Shift 없는 `Ctrl+F` 는 `'f'` 라 집중모드 토글은 정상 동작했음.)

**수정(`app.js` 전역 keydown):** `switch (e.key)` → `switch (e.key.toLowerCase())` 로 정규화. 한 줄.

**검증:** Playwright 로 `Ctrl+Shift+F` → `document.activeElement.id === 'search-input'` 확인,
`Ctrl+F` → `body.focus` 토글 유지 확인(다른 분기 미회귀).

---

## 40. 기능 추가 — YouTube 연속 재생 (플레이리스트) (2026-06-06)

**요청:** YouTube 리소스가 여러 개일 때, 한 영상이 끝나면 다음 영상이 자동 재생되는
'나만의 플레이리스트'. (사용자 결정: 재생 순서=현재 리소스 목록 순서, 제어=토글 버튼, 마지막=멈춤)

**핵심 제약:** 기존 웹 미디어는 단순 `<iframe src>` 라 영상 '종료' 시점을 알 수 없었음
(cross-origin). → **YouTube IFrame Player API** 도입해 `onStateChange` 의 `ENDED` 이벤트로 감지.

**구조 (두 개의 미디어 서피스):**
- `#yt-player` — YouTube IFrame Player API 가 `<div>` 를 `<iframe>` 으로 교체, `YT.Player` 로 제어(연속 재생).
- `#media-iframe` — Vimeo 등 일반 임베드용(기존). `_setMediaSurface('yt'|'iframe'|'none')` 로 전환하며 안 보이는 쪽은 정지.

**구현(`app.js`):**
- `_youtubeId(url)` — 임의 URL에서 영상 ID 추출. `_openMedia` 가 YouTube면 `_playYouTube(id)`, Vimeo면 iframe, 그 외엔 오버레이로 분기.
- `_playYouTube` — API 지연 로드(`_ensureYTApi`/`onYouTubeIframeAPIReady`), 최초 1회 `new YT.Player(...)` 이후엔 `loadVideoById`.
- `_onYTStateChange` — `ENDED` && `settings.autoplayNext` 시 `_playNextInList()`.
- `_playNextInList` — `#resource-list` DOM 순서(=필터/검색/태그 반영)에서 현재 다음의 첫 `youtube`/`shorts` 를 `onResourceClick` 으로 재생, 없으면 토스트 후 멈춤. website/note 는 건너뜀.
- `toggleAutoplayNext`/`_updateAutoplayBtn` — `settings.autoplayNext`(localStorage 영속) 토글, 미디어 컨트롤의 `#autoplay-toggle`(⏭) 버튼 활성 표시.
- `mediaReload` — YouTube 활성 시 `seekTo(0)+playVideo` 로 처음부터 재생.

**UI:** `index.html` 에 `#yt-player` div + 컨트롤바 `#autoplay-toggle`(⏭) 버튼 추가. `style.css` 에 `#yt-player` 풀필 + `.dv-icon-btn.active`(파란 글로우) 추가. 설정 기본값 `autoplayNext:false`.

**검증(Playwright):** 토글 on/off + localStorage 영속, YouTube 클릭 시 `#yt-player`(IFRAME) 표시 & `#media-iframe` 숨김 & `_ytPlayer` 생성, `_playNextInList` 가 A→B→D(웹사이트 C 건너뜀)→끝 멈춤, `ENDED` 이벤트가 토글 on일 때만 다음 재생, 웹사이트 클릭 시 YT 정지+오버레이 표시.

**참고:** 데스크톱(Electron)은 `<webview>` 기반이라 이 기능은 웹 전용 구현. 데스크톱에도 원하면 webview 방식으로 별도 이식 필요(에디션 고유 영역).

---

## 41. 미디어 뒤로/앞으로 + 음악 분류 + 백그라운드 재생 (2026-06-06)

세 가지 후속 기능. 음악 분류는 데스크톱(1.2.0 §39)에도 동일 적용.

### A. 미디어 뒤로/앞으로 (열람 기록 스택) — 웹
- 웹 `<iframe>` 은 cross-origin 사이트의 내부 히스토리를 제어 못 하므로(앱 webview 의 goBack 불가),
  "미디어 뷰에서 열어본 영상/URL" 을 자체 스택(`_mediaHist`/`_mediaHistIdx`)으로 쌓아 ◀▶ 로 이전/다음 미디어 이동.
- `loadResource`/`loadUrl` 에서 `_pushMediaHist({resId,url})`, `mediaBack`/`mediaForward` 는 `_mediaNavigating` 플래그로 재기록 없이 `_navToHistEntry()` 로 복원. `_updateNavButtons` 는 스택 위치로 버튼 비활성 갱신.
- 기존에 숨겼던 `#nav-back`/`#nav-forward` 버튼 복원(스택 비었을 때 disabled).

### B. 음악 분류 (♪ + Music 필터) — 웹+데스크톱
- 리소스에 `music` 플래그. 각 항목 `♪`(`.res-music`) 버튼으로 토글(`toggleMusic`), 음악이면 항상 표시(active), 아니면 hover 시 노출.
- 상단에 `Music` 필터 pill 추가(`data-filter="music"`). `renderResources` 필터: `filter==='music' ? r.music===true : ...`.
- Music 필터로 좁힌 뒤 연속 재생을 켜면 곧 '음악 플레이리스트'. i18n `pillMusic`(Music/음악).

### C. 백그라운드 재생 — 확인(코드 변경 없음)
- 메모 뷰 전환(`switchView('note')`)은 `#layer-media` 에 `.hidden`(opacity:0)만 적용, 미디어 서피스를 DOM에서 제거하거나 pause 하지 않음 → **오디오 계속 재생**. 플레이리스트도 백그라운드에서 다음 곡으로 진행.

**검증(Playwright):** 음악 토글/필터/리로드 영속, 뒤로/앞으로(A·B·C 열람 → back→B→A→비활성, forward→B), 백그라운드(영상 재생 중 `switchView('note')` 후 `_ytPlayer.getPlayerState()` 가 1(playing) 유지·플레이어 DOM 잔존) 확인.
