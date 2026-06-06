-- ════════════════════════════════════════════════════════════════
--  Thought Archive · 피드백 테이블 스키마
--  Supabase 대시보드 → SQL Editor 에 붙여넣고 1회 실행.
--  앱은 anon(publishable) 키로 insert 만 수행한다.
-- ════════════════════════════════════════════════════════════════

create table if not exists public.feedback (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  user_id     uuid        references auth.users(id) on delete set null,  -- 로그인 유저면 기록(탈퇴해도 피드백은 남김)
  email       text,                                                      -- 로그인 유저 이메일(스냅샷)
  category    text        not null,                                      -- 'bug' | 'idea' | 'other'
  message     text        not null,
  app_version text,
  platform    text
);

-- RLS 활성화 (기본 deny-all)
alter table public.feedback enable row level security;

-- 누구나(익명 포함) 제출 가능. 단, 본인 user_id 거나 null 만 허용 → 타인 사칭 차단.
drop policy if exists "anyone can submit feedback" on public.feedback;
create policy "anyone can submit feedback"
  on public.feedback for insert
  to anon, authenticated
  with check ( user_id is null or user_id = auth.uid() );

-- 읽기 정책은 일부러 두지 않음 → 클라이언트는 아무도 못 읽음.
-- 관리자는 대시보드(Table Editor) 또는 service_role 키로만 조회.
