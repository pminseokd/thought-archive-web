/* supabase-config.js — 클라우드 동기화 백엔드 설정.
 *
 * 사용법:
 *   1. https://supabase.com 에서 무료 프로젝트 생성.
 *   2. Project Settings → API 에서 아래 두 값을 복사해 채운다.
 *        - Project URL        → SUPABASE_URL
 *        - anon public key     → SUPABASE_ANON_KEY  (공개돼도 안전 — RLS가 보호)
 *   3. SQL Editor 에서 user_data 테이블 + RLS 정책을 생성 (README / Thought Archive.md §31 참조).
 *   4. Authentication → Providers → Email 에서 "Confirm email" 을 끈다 (즉시 가입·입장).
 *
 * 값이 placeholder 그대로면 앱은 "클라우드 미설정" 상태로 동작한다. */
window.SUPABASE_URL      = 'https://twadnveelrgghlxgopxv.supabase.co';
window.SUPABASE_ANON_KEY = 'sb_publishable_rZcyjRakaq-Cy9Z4T9bOYQ_ANzsAaQN';
