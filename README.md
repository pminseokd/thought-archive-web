# Thought Archive — Web Edition

브라우저에서 바로 도는 **Thought Archive** 웹 버전. 데스크톱(Electron) 앱과 동일한
노트·리소스 관리 + Supabase 클라우드 동기화를 100% 클라이언트 사이드로 제공한다.
별도 백엔드 서버가 필요 없고, 정적 파일만 호스팅하면 된다.

## 데스크톱 앱과의 차이

| 영역 | 데스크톱 (Electron) | 웹 |
|------|--------------------|-----|
| 데이터 로컬 캐시 | `userData/store/*.json` (파일) | `localStorage` |
| 클라우드 동기화 | Supabase (동일) | Supabase (동일) |
| 미디어 뷰 | `<webview>` — 임의 사이트 + DRM 재생 | `<iframe>` — YouTube/Vimeo 임베드만 인앱, 그 외 "새 탭에서 열기" 폴백 |
| YouTube 연속 재생(플레이리스트) | ✅ (webview 종료 감지) | ✅ (IFrame Player API) — 토글 시 영상 종료 후 목록의 다음 YouTube 자동 재생 |
| 음악 분류 (♪ + Music 필터) | ✅ | ✅ |
| 미디어 뒤로/앞으로 | webview 자체 히스토리 | 열람 기록 스택(이전/다음 미디어) |
| 백그라운드 재생 | 메모 뷰로 전환해도 오디오 지속 | 동일(메모 뷰 전환 시 재생 유지) |
| 항상 위(Always on Top) | 지원 | 미지원(숨김) |
| 우클릭 네이티브 메뉴 | 지원 | 브라우저 기본 메뉴 |

> 웹 `<iframe>` 은 보안 정책(X-Frame-Options/CSP)상 대부분의 외부 사이트와
> YouTube *watch* URL 을 임베드하지 못한다. 그래서 웹 버전은 임베드 가능한 호스트
> (YouTube/Vimeo)만 인앱 플레이어로 표시하고, 나머지는 새 탭으로 연다.

> **연속 재생(플레이리스트):** 미디어 컨트롤의 ⏭ 토글을 켜면, 재생 중인 YouTube 영상이
> 끝났을 때 오른쪽 리소스 목록 순서대로 다음 YouTube/Shorts 가 자동 재생된다. 태그/필터로
> 목록을 좁히면 그 부분집합이 곧 플레이리스트가 된다. (YouTube IFrame Player API 사용)

## 로컬 실행

```bash
cd thought-archive-web
python3 -m http.server 7788
# → http://localhost:7788
```

## 배포 (정적 호스팅)

빌드 단계가 없다. 폴더 전체를 그대로 올리면 끝.

- **Netlify**: 폴더를 드래그&드롭하거나 `netlify deploy --dir=. --prod`
- **Vercel**: `vercel --prod` (프레임워크 없음 / output: 현재 디렉토리)
- **GitHub Pages**: 저장소에 푸시 후 Pages 소스를 해당 폴더로 지정

## Supabase 설정

`supabase-config.js` 에 프로젝트 URL / anon key 가 들어 있다. 테이블·RLS 스키마는
`feedback-schema.sql` 및 `Thought Archive.md` 참조. anon key 는 공개돼도 RLS 가
사용자별 데이터를 보호한다.

## 파일 구성

- `index.html` — 마크업 / 진입점
- `app.js` — 전체 로직 (노트·리소스·인증·동기화·미디어)
- `style.css` — 스타일
- `vendor/supabase.js` — Supabase JS SDK (CDN 번들 로컬 사본)
- `supabase-config.js` — 백엔드 설정
- `manifest.webmanifest`, `favicon.svg` — PWA / 아이콘 메타
