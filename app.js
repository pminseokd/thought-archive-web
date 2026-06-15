/* ─── Translations ───────────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    newNote:'✎ New Note', addResource:'＋ Add Resource', focus:'⊡ Focus', focusExit:'⊠ Exit Focus',
    navHome:'Home', navAnalytics:'Analytics', navArchive:'Archive', navSettings:'Settings',
    offlineMode:'Offline Mode',
    userChipLogout:'Click to log out',
    authTitle:'Thought Archive', authSubtitle:'Sign in to sync your notes & resources',
    authTabLogin:'Log In', authTabSignup:'Sign Up',
    authEmailPh:'Email', authPassPh:'Password', authConfirmPh:'Confirm password',
    authLoginBtn:'Log In', authSignupBtn:'Create Account',
    authWelcome:'Welcome,',
    authForgot:'Forgot password?', authSendCode:'Send reset code', authResetBtn:'Reset password',
    authCodePh:'6-digit code from email', authNewPassPh:'New password', authCodeSent:'Reset code sent — check your email',
    authErrResetCode:'Invalid or expired reset code.',
    authErrEmailInvalid:'Please enter a valid email address.',
    authErrPassShort:'Password must be at least 6 characters.',
    authErrExists:'An account with that email already exists.',
    authErrBadCreds:'Invalid email or password.',
    authErrMismatch:'Passwords do not match.',
    authErrConfirmNeeded:'Check your email to confirm your account, then log in.',
    authErrNetwork:'Network error — check your connection and try again.',
    authErrNotConfigured:'Cloud sync is not configured. Set your Supabase URL/key in supabase-config.js.',
    settCloudSync:'CLOUD SYNC', settSyncStatus:'Sync Status', settLastSynced:'Last synced',
    settSyncNow:'Sync now', settAutoSync:'Auto-sync',
    settAutoSyncDesc:'Automatically push changes to the cloud when you save',
    syncIdle:'Idle', syncSyncing:'Syncing…', syncSynced:'Synced',
    syncOffline:'Offline', syncConflict:'Conflict', syncError:'Sync error',
    syncNotConfigured:'Not configured',
    syncConflictTitle:'Sync Conflict',
    syncConflictDesc:'This device and the cloud were both changed. Which version should be kept?',
    syncUseCloud:'Use cloud version', syncUseLocal:'Use this device',
    syncResolvedCloud:'☁  Cloud version applied', syncResolvedLocal:'⬆  This device kept',
    settFeedback:'FEEDBACK', settSendFeedback:'Send Feedback',
    settSendFeedbackDesc:'Report a bug or suggest an improvement', settSendFeedbackBtn:'Feedback',
    fbTitle:'Send Feedback', fbDesc:'Found a bug or have an idea? Let us know.',
    fbCategory:'Type', fbCatBug:'🐞 Bug', fbCatIdea:'💡 Idea', fbCatOther:'💬 Other',
    fbMessage:'Message', fbMessagePh:'Describe it in as much detail as you like…',
    fbSubmit:'Send', fbSending:'Sending…', fbCancel:'Cancel',
    fbThanks:'Thanks for your feedback!',
    fbErrShort:'Please write a little more (at least 5 characters).',
    fbErrOffline:'You need an internet connection to send feedback.',
    fbErrFail:'Couldn’t send — please try again in a moment.',
    statNotesLabel:'Notes Saved', statNotesDelta:'↑ 3 this week',
    statResourcesLabel:'Resources Linked', statResDelta:'↑ 2 today',
    statTimeLabel:'Session Time', statTimeActive:'● Active now',
    tabMedia:'Media View', tabNote:'Note View',
    mediaPh1:'Select a resource from the list',
    mediaPh2:'YouTube, Shorts, or Websites will appear here',
    noteStamp:'⏱ Stamp', noteSave:'💾 Save', noteUndoTitle:'Undo (Ctrl+Z)', noteUndoEmpty:'↶  Nothing to undo',
    noteStatusNotSaved:'Not saved', noteStatusAutoSave:'Auto-save on',
    noteSavedOk:'Saved ✓', noteAutoSaved:'Auto-saved ✓',
    noteTitlePh:'Note title...',
    noteEditorPh:'Start writing your thoughts...\n\nSelect a resource to annotate, or type freely.',
    noteWords:'Words:', noteChars:'Chars:', noteLines:'Lines:',
    panelResourceList:'Resource List', panelAdd:'＋ Add',
    backlinksTitle:'Backlinks', backlinksEmpty:'No notes link here yet', backlinksNoNote:'Open a note to see its backlinks',
    searchPh:'🔍  Search titles, tags, notes…',
    searchNoResult:'No results found',
    resourceEmpty:'No resources yet.',
    emptyAddResource:'＋ Add Resource', emptyNewNote:'✎ New Note',
    pinNote:'Pin note', unpinNote:'Unpin note',
    pillAll:'All', pillMusic:'Music', pillYoutube:'YouTube', pillShorts:'Shorts', pillWebsite:'Website', pillNote:'Notes',
    archiveTitle:'📁 Archive · Saved Notes',
    archiveEmptyL1:'No saved notes yet.', archiveEmptyL2:'Save a note to see it here.',
    archiveCountSuffix:' note', archiveCountSuffixPlural:' notes',
    tagsLabel:'Tags', mdList:'List', mdQuote:'Quote', mdCode:'Code', outlinksLabel:'→ Links',
    tagInputPh:'Type #tag, then Enter', scpColor:'Color', scpEmoji:'Emoji', scpCancel:'Cancel', archiveAll:'All',
    anTitle:'◈ Analytics · Insights', anByType:'Resources by Type', anTopTags:'Top Tags', anByColor:'Notes by Color',
    anSavedNotes:'Saved Notes', anResLinked:'Resources Linked', anUniqueTags:'Unique Tags', anSessionTime:'Session Time',
    anTypeYoutube:'▶ YouTube', anTypeShorts:'⚡ Shorts', anTypeWebsite:'⊕ Website', anTypeNote:'✎ Notes',
    anNoTags:'No tags yet', anNoNotes:'No saved notes yet', anUpdated:'Updated ·',
    settTitle:'Settings', settDesc:'Preferences are saved to localStorage automatically',
    settVisual:'VISUAL', settWorkflow:'WORKFLOW', settSystemTools:'SYSTEM TOOLS', settDataMgmt:'DATA MANAGEMENT',
    settDarkLight:'Dark / Light Mode', settDarkLightDesc:'Switch between Deep Space dark and soft light theme',
    settThemeDark:'Dark', settThemeLight:'Light',
    settStartup:'Default Startup View', settStartupDesc:'Which layer opens when the app launches',
    settStartupMedia:'Media View', settStartupNote:'Note View',
    settAutoSave:'Auto-Save Interval', settAutoSaveDesc:'How often notes are saved automatically in the background',
    settAs1:'Every 1 min', settAs5:'Every 5 min', settAs10:'Every 10 min', settAsOff:'Disabled',
    settAlwaysOnTop:'Always on Top', settAlwaysOnTopDesc:'Keep window above all other windows',
    settOnTopOn:'On', settOnTopOff:'Off',
    settLangDesc:'Switch UI language between Korean and English',
    settExportMd:'Export as Markdown', settExportMdDesc:'Download the current note as a .md file', settExportBtn:'Export .md',
    settBackup:'Backup & Restore', settBackupDesc:'Export all notes & resources as .json, or import a backup',
    settBackupBtn:'Export all', settImportBtn:'Import', settBackupDone:'Backup downloaded',
    settImportInvalid:'Invalid backup file', settImportDone:'Backup imported',
    settImportConfirm:'Import will REPLACE all current notes & resources with the backup ({n} notes, {r} resources). Continue?',
    settReset:'Reset All Settings', settResetDesc:'Restore every preference to factory default — notes are kept', settResetBtn:'Reset',
    settUiScale:'UI Size', settUiScaleDesc:'Scale the whole interface. Auto fits the window.', settUiScaleAuto:'Auto (fit)',
    settDefaultNote:'New Note Defaults', settDefaultNoteDesc:'Color & emoji pre-selected for new notes',
    settChangePass:'Change Password', settChangePassDesc:'Update your account password', settChangePassBtn:'Change',
    cpNewPh:'New password', cpConfirmPh:'Confirm new password', cpUpdateBtn:'Update password',
    cpDone:'Password updated', cpErrNotLoggedIn:'You must be logged in.',
    settAccount:'ACCOUNT', settLogout:'Log Out', settLogoutDesc:'Sign out of your account and return to the login screen',
    settLogoutBtn:'Log Out', settLogoutLockedDesc:'Offline mode — log in to enable this option',
    settFooterNote:'Settings auto-saved · Key:', settClose:'Close',
    shTitle:'Keyboard Shortcuts', shHint:'Press ? to open · click anywhere outside or Esc to close',
    shSave:'Save note', shUndo:'Undo (note editor)', shToggleView:'Toggle Media / Note', shFocusUrl:'Focus URL bar',
    shFocusSearch:'Focus search', shFocusMode:'Toggle Focus Mode', shSettings:'Open Settings',
    shHelp:'This help panel', shEscape:'Close panel / Exit mode',
    arTitle:'Add Resource', arDesc:'Add a YouTube, Shorts, or Website link',
    arName:'Name', arNamePh:'My resource', arUrl:'URL (optional)', arTags:'Tags (optional)',
    arHint:'YouTube / Shorts auto-detected from URL', arCancel:'Cancel', arAdd:'＋ Add',
    arEditTitle:'Edit Resource', arEditDesc:'Edit the name, URL, or tags', arSave:'Save',
    resEdit:'Edit', resDelete:'Delete', resUpdated:'updated',
    confirmDelTitle:'Delete resource?', confirmDelResMsg:'“%s” will be removed from the list. This cannot be undone.', confirmDelOk:'🗑  Delete',
  },
  ko: {
    newNote:'✎ 새 메모', addResource:'＋ 리소스 추가', focus:'⊡ 집중모드', focusExit:'⊠ 집중모드 해제',
    navHome:'홈', navAnalytics:'분석', navArchive:'보관함', navSettings:'설정',
    offlineMode:'오프라인 모드',
    userChipLogout:'클릭하여 로그아웃',
    authTitle:'Thought Archive', authSubtitle:'로그인하여 메모와 리소스를 동기화하세요',
    authTabLogin:'로그인', authTabSignup:'회원가입',
    authEmailPh:'이메일', authPassPh:'비밀번호', authConfirmPh:'비밀번호 확인',
    authLoginBtn:'로그인', authSignupBtn:'계정 만들기',
    authWelcome:'환영합니다,',
    authForgot:'비밀번호를 잊으셨나요?', authSendCode:'재설정 코드 보내기', authResetBtn:'비밀번호 재설정',
    authCodePh:'이메일로 받은 6자리 코드', authNewPassPh:'새 비밀번호', authCodeSent:'재설정 코드를 보냈습니다 — 이메일을 확인하세요',
    authErrResetCode:'코드가 올바르지 않거나 만료되었습니다.',
    authErrEmailInvalid:'올바른 이메일 주소를 입력하세요.',
    authErrPassShort:'비밀번호는 6자 이상이어야 합니다.',
    authErrExists:'이미 가입된 이메일입니다.',
    authErrBadCreds:'이메일 또는 비밀번호가 올바르지 않습니다.',
    authErrMismatch:'비밀번호가 일치하지 않습니다.',
    authErrConfirmNeeded:'이메일에서 계정을 확인한 뒤 로그인하세요.',
    authErrNetwork:'네트워크 오류 — 연결을 확인하고 다시 시도하세요.',
    authErrNotConfigured:'클라우드 동기화가 설정되지 않았습니다. supabase-config.js에 Supabase URL/키를 입력하세요.',
    settCloudSync:'클라우드 동기화', settSyncStatus:'동기화 상태', settLastSynced:'마지막 동기화',
    settSyncNow:'지금 동기화', settAutoSync:'자동 동기화',
    settAutoSyncDesc:'저장할 때 변경사항을 클라우드로 자동 푸시',
    syncIdle:'대기', syncSyncing:'동기화 중…', syncSynced:'동기화됨',
    syncOffline:'오프라인', syncConflict:'충돌', syncError:'동기화 오류',
    syncNotConfigured:'미설정',
    syncConflictTitle:'동기화 충돌',
    syncConflictDesc:'이 기기와 클라우드 양쪽이 변경되었습니다. 어느 버전을 유지할까요?',
    syncUseCloud:'클라우드 버전 사용', syncUseLocal:'이 기기 버전 사용',
    syncResolvedCloud:'☁  클라우드 버전 적용됨', syncResolvedLocal:'⬆  이 기기 버전 유지됨',
    settFeedback:'피드백', settSendFeedback:'피드백 보내기',
    settSendFeedbackDesc:'버그를 신고하거나 개선 아이디어를 제안하세요', settSendFeedbackBtn:'피드백',
    fbTitle:'피드백 보내기', fbDesc:'버그를 발견했거나 좋은 아이디어가 있나요? 알려주세요.',
    fbCategory:'유형', fbCatBug:'🐞 버그', fbCatIdea:'💡 아이디어', fbCatOther:'💬 기타',
    fbMessage:'내용', fbMessagePh:'원하는 만큼 자세히 적어주세요…',
    fbSubmit:'보내기', fbSending:'보내는 중…', fbCancel:'취소',
    fbThanks:'피드백 감사합니다!',
    fbErrShort:'조금만 더 적어주세요 (최소 5자).',
    fbErrOffline:'피드백을 보내려면 인터넷 연결이 필요합니다.',
    fbErrFail:'전송하지 못했어요 — 잠시 후 다시 시도해주세요.',
    statNotesLabel:'저장된 메모', statNotesDelta:'↑ 이번 주 3개',
    statResourcesLabel:'연결된 리소스', statResDelta:'↑ 오늘 2개',
    statTimeLabel:'세션 시간', statTimeActive:'● 현재 활성',
    tabMedia:'미디어 뷰', tabNote:'메모 뷰',
    mediaPh1:'목록에서 리소스를 선택하세요',
    mediaPh2:'유튜브, 숏츠, 웹사이트가 여기에 표시됩니다',
    noteStamp:'⏱ 타임스탬프', noteSave:'💾 저장', noteUndoTitle:'되돌리기 (Ctrl+Z)', noteUndoEmpty:'↶  되돌릴 내용이 없습니다',
    noteStatusNotSaved:'미저장', noteStatusAutoSave:'자동저장 켜짐',
    noteSavedOk:'저장됨 ✓', noteAutoSaved:'자동저장됨 ✓',
    noteTitlePh:'메모 제목...',
    noteEditorPh:'생각을 자유롭게 적어보세요...\n\n리소스를 선택하고 주석을 달거나, 자유롭게 작성하세요.',
    noteWords:'단어:', noteChars:'글자:', noteLines:'줄:',
    panelResourceList:'리소스 목록', panelAdd:'＋ 추가',
    backlinksTitle:'백링크', backlinksEmpty:'이 노트를 참조하는 메모가 없습니다', backlinksNoNote:'노트를 열면 백링크가 표시됩니다',
    searchPh:'🔍  제목, 태그, 본문 검색…',
    searchNoResult:'검색 결과가 없습니다',
    resourceEmpty:'리소스가 없습니다.',
    emptyAddResource:'＋ 리소스 추가', emptyNewNote:'✎ 새 메모',
    pinNote:'메모 고정', unpinNote:'고정 해제',
    pillAll:'전체', pillMusic:'음악', pillYoutube:'유튜브', pillShorts:'숏츠', pillWebsite:'웹사이트', pillNote:'메모',
    archiveTitle:'📁 보관함 · 저장된 메모',
    archiveEmptyL1:'저장된 메모가 없습니다.', archiveEmptyL2:'메모를 저장하면 여기에 표시됩니다.',
    archiveCountSuffix:'개', archiveCountSuffixPlural:'개',
    tagsLabel:'태그', mdList:'목록', mdQuote:'인용', mdCode:'코드', outlinksLabel:'→ 링크',
    tagInputPh:'#태그 입력 후 Enter', scpColor:'색상', scpEmoji:'이모지', scpCancel:'취소', archiveAll:'전체',
    anTitle:'◈ 분석 · 인사이트', anByType:'유형별 리소스', anTopTags:'인기 태그', anByColor:'색상별 메모',
    anSavedNotes:'저장된 메모', anResLinked:'연결된 리소스', anUniqueTags:'고유 태그', anSessionTime:'세션 시간',
    anTypeYoutube:'▶ 유튜브', anTypeShorts:'⚡ 숏츠', anTypeWebsite:'⊕ 웹사이트', anTypeNote:'✎ 메모',
    anNoTags:'아직 태그 없음', anNoNotes:'저장된 메모 없음', anUpdated:'업데이트 ·',
    settTitle:'설정', settDesc:'환경설정은 자동으로 localStorage에 저장됩니다',
    settVisual:'화면', settWorkflow:'워크플로우', settSystemTools:'시스템 도구', settDataMgmt:'데이터 관리',
    settDarkLight:'다크 / 라이트 모드', settDarkLightDesc:'다크 스페이스와 밝은 테마를 전환합니다',
    settThemeDark:'다크', settThemeLight:'라이트',
    settStartup:'기본 시작 화면', settStartupDesc:'앱 실행 시 어떤 뷰로 시작할지 설정합니다',
    settStartupMedia:'미디어 뷰', settStartupNote:'메모 뷰',
    settAutoSave:'자동 저장 간격', settAutoSaveDesc:'메모가 자동으로 저장되는 주기를 설정합니다',
    settAs1:'1분마다', settAs5:'5분마다', settAs10:'10분마다', settAsOff:'사용 안 함',
    settAlwaysOnTop:'항상 위에 표시', settAlwaysOnTopDesc:'다른 모든 창 위에 항상 표시',
    settOnTopOn:'켜짐', settOnTopOff:'꺼짐',
    settLangDesc:'한국어와 영어 간 UI 언어를 전환합니다',
    settExportMd:'마크다운으로 내보내기', settExportMdDesc:'현재 메모를 .md 파일로 다운로드합니다', settExportBtn:'내보내기 .md',
    settBackup:'백업 & 복원', settBackupDesc:'모든 메모·리소스를 .json으로 내보내거나 백업을 가져옵니다',
    settBackupBtn:'전체 내보내기', settImportBtn:'가져오기', settBackupDone:'백업을 다운로드했습니다',
    settImportInvalid:'올바르지 않은 백업 파일입니다', settImportDone:'백업을 가져왔습니다',
    settImportConfirm:'가져오기를 하면 현재 모든 메모·리소스가 백업으로 교체됩니다 (메모 {n}개, 리소스 {r}개). 계속할까요?',
    settReset:'모든 설정 초기화', settResetDesc:'모든 설정을 기본값으로 되돌립니다 — 메모는 유지됩니다', settResetBtn:'초기화',
    settUiScale:'UI 크기', settUiScaleDesc:'전체 인터페이스 배율. Auto는 창에 맞춥니다.', settUiScaleAuto:'자동(맞춤)',
    settDefaultNote:'새 메모 기본값', settDefaultNoteDesc:'새 메모에 미리 선택될 색상 & 이모지',
    settChangePass:'비밀번호 변경', settChangePassDesc:'계정 비밀번호를 변경합니다', settChangePassBtn:'변경',
    cpNewPh:'새 비밀번호', cpConfirmPh:'새 비밀번호 확인', cpUpdateBtn:'비밀번호 변경',
    cpDone:'비밀번호가 변경되었습니다', cpErrNotLoggedIn:'로그인이 필요합니다.',
    settAccount:'계정', settLogout:'로그아웃', settLogoutDesc:'계정에서 로그아웃하고 로그인 화면으로 돌아갑니다',
    settLogoutBtn:'로그아웃', settLogoutLockedDesc:'오프라인 모드 — 로그인하면 이 기능을 사용할 수 있습니다',
    settFooterNote:'설정 자동 저장 · 키:', settClose:'닫기',
    shTitle:'키보드 단축키', shHint:'? 키로 열기 · 바깥 아무 곳이나 클릭하거나 Esc로 닫기',
    shSave:'메모 저장', shUndo:'되돌리기 (메모 편집)', shToggleView:'미디어 / 메모 전환', shFocusUrl:'URL 바 포커스',
    shFocusSearch:'검색창 포커스', shFocusMode:'집중 모드 전환', shSettings:'설정 열기',
    shHelp:'단축키 도움말', shEscape:'패널 닫기 / 모드 종료',
    arTitle:'리소스 추가', arDesc:'유튜브 · 숏츠 · 웹사이트 링크를 추가합니다',
    arName:'이름', arNamePh:'리소스 이름', arUrl:'URL (선택)', arTags:'태그 (선택)',
    arHint:'URL에서 유튜브 / 숏츠 자동 감지', arCancel:'취소', arAdd:'＋ 추가',
    arEditTitle:'리소스 수정', arEditDesc:'이름 · URL · 태그를 수정합니다', arSave:'저장',
    resEdit:'수정', resDelete:'삭제', resUpdated:'수정됨',
    confirmDelTitle:'리소스를 삭제할까요?', confirmDelResMsg:'“%s” 항목이 목록에서 제거됩니다. 되돌릴 수 없습니다.', confirmDelOk:'🗑  삭제',
  }
};

let currentLang = 'en';

/* ─── Translation helper ─────────────────────────────────────────── */
function T(key) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return t[key] !== undefined ? t[key] : (TRANSLATIONS.en[key] || key);
}

/* ─── Apply Language ─────────────────────────────────────────────── */
function applyLanguage(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (t[key] !== undefined) el.title = t[key];
  });

  const togLang = document.getElementById('tog-lang');
  if (togLang) togLang.checked = lang === 'ko';
  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = lang === 'ko' ? 'KO' : 'EN';

  const focusBtn = document.getElementById('focus-btn');
  if (focusBtn) focusBtn.textContent = focusMode ? T('focusExit') : T('focus');

  if (settings) {
    const themeLabel = document.getElementById('theme-label');
    if (themeLabel) themeLabel.textContent = settings.theme === 'light' ? T('settThemeLight') : T('settThemeDark');
    const ontopLabel = document.getElementById('ontop-label');
    if (ontopLabel) ontopLabel.textContent = settings.alwaysOnTop ? T('settOnTopOn') : T('settOnTopOff');
  }

  const ss = DOM.saveStatus;
  if (ss && (ss.textContent === 'Not saved' || ss.textContent === '미저장' ||
             ss.textContent === 'Auto-save on' || ss.textContent === '자동저장 켜짐')) {
    ss.textContent = currentNoteKey ? T('noteStatusAutoSave') : T('noteStatusNotSaved');
  }

  if (DOM.main && DOM.main.dataset.view === 'archive')   renderArchive();
  if (DOM.main && DOM.main.dataset.view === 'analytics') renderAnalytics();
  updateSyncUI();   // footer/설정 동기화 상태 텍스트 재번역
  updatePageTitle();
}

/* ─── Data ──────────────────────────────────────────────────────── */
const RESOURCES = [
  { id:2, type:'shorts',  name:'Dev Shorts',      meta:'Shorts · Tech tips',
    url:'https://www.youtube.com/embed/Tn6-PIqc4UM', icon:'⚡', thumb:'short', tags:[] },
  { id:3, type:'website', name:'GitHub Repo',     meta:'github.com',
    url:'https://github.com', icon:'⊕', thumb:'web', tags:['#dev'] },
  { id:5, type:'website', name:'MDN Web Docs',    meta:'developer.mozilla.org',
    url:'https://developer.mozilla.org', icon:'⊕', thumb:'web', tags:['#dev','#reference'] },
  { id:6, type:'note',    name:'Project Ideas',   meta:'Note · 3 tags',
    url:null, icon:'✎', thumb:'note', tags:['#idea'] }
];
/* 리소스/노트 데이터는 로그인 후 계정별로 로드된다 (enterApp 참조).
 * RESOURCES 의 데모 항목은 enterApp 진입 시 계정 데이터로 교체됨. */

/* ─── Constants ─────────────────────────────────────────────────── */
const NOTE_COLORS = ['#0066FF','#3385FF','#FF6B6B','#FFD93D','#FF8C42','#C0C0C0'];
const NOTE_EMOJIS = ['💡','🔥','⚡','🎯','📌','🧠','🌀','✨','🎨','💎','🚀','🔮'];

/* ─── State ─────────────────────────────────────────────────────── */
let currentView      = 'media';
let activeFilter     = 'all';
let activeResId      = null;
let notes            = {};   // 로그인 후 계정별 데이터로 채워짐
let currentNoteKey   = null;

let selectedColor      = '#0066FF';
let selectedEmoji      = '';
let archiveColorFilter = 'all';
let currentTags        = [];
let activeTags         = [];

let _backlinkIndexCache = null;
let _noteTitleMapCache  = null;
let _tagCache           = null;

const DOM = {};

/* ─── 미디어 표시 영역 제어 ───────────────────────────────────────────
 * 웹 버전은 두 개의 미디어 서피스를 둔다:
 *   #yt-player   — YouTube IFrame Player API 전용 (영상 종료 감지 → 연속 재생)
 *   #media-iframe — Vimeo 등 일반 임베드용
 * mode: 'yt' | 'iframe' | 'none'. 보이지 않는 쪽은 소리/재생을 정지한다. */
function _ytEl() { return document.getElementById('yt-player'); }

function _setMediaSurface(mode) {
  const yt = _ytEl();
  if (yt) {
    const on = mode === 'yt';
    yt.style.visibility    = on ? 'visible' : 'hidden';
    yt.style.pointerEvents = on ? 'auto' : 'none';
  }
  const ifr = DOM.mediaIframe;
  const onI = mode === 'iframe';
  ifr.style.visibility    = onI ? 'visible' : 'hidden';
  ifr.style.pointerEvents = onI ? 'auto' : 'none';

  /* 안 보이는 서피스의 재생 정지 */
  if (mode !== 'yt' && _ytPlayer && _ytPlayer.stopVideo) { try { _ytPlayer.stopVideo(); } catch (_) {} }
  if (mode === 'yt') { try { if (ifr.src && ifr.src !== 'about:blank') ifr.src = 'about:blank'; } catch (_) {} }
}

/* 하위호환 별칭 — 기존 호출부(deleteResource 등) 유지 */
function _showWebview() { _setMediaSurface('iframe'); }
function _hideWebview() {
  _setMediaSurface('none');
  try { DOM.mediaIframe.src = 'about:blank'; } catch (_) {}
}

/* ═══════════════════════════════════════════════════════════════════
 *  계정 + 클라우드 동기화 (Supabase Auth + 오프라인 우선 캐시)
 *  - 인증: Supabase Auth (이메일/비밀번호). 세션은 persistSession 으로 영속.
 *  - 데이터: Supabase user_data(jsonb) 테이블에 사용자별 격리(RLS) 저장.
 *  - 오프라인: 로컬 캐시(Store)가 마지막 데이터를 보관 → 인터넷 없이도 앱 사용.
 * ═══════════════════════════════════════════════════════════════════ */
let currentUser = null;   // Supabase user 객체 (null = 비로그인)
let currentUid  = null;   // currentUser.id — 로컬 캐시 / 동기화 메타 키
let APP_VERSION = null;   // taAPI.getVersion() 캐시 — 피드백/진단에 첨부
const WEB_VERSION = '1.2.0';   // 웹 빌드 버전 (taAPI 없을 때 라벨/진단에 사용) — 릴리즈 시 갱신

/* ─── Supabase 클라이언트 ─────────────────────────────────────────── */
function _supaConfigured() {
  return !!(window.SUPABASE_URL && window.SUPABASE_ANON_KEY
    && !window.SUPABASE_URL.includes('YOUR-PROJECT')
    && !window.SUPABASE_ANON_KEY.includes('YOUR-ANON-KEY'));
}
const sb = (window.supabase && _supaConfigured())
  ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY,
      { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } })
  : null;

/* ─── 로컬 캐시 (오프라인 백업) — uid 키로 notes/resources 보관 ──────── */
const Store = {
  get isElectron() { return !!(window.taAPI && window.taAPI.isElectron); },
  async readData(uid) {
    if (this.isElectron) return await window.taAPI.dataRead(uid);
    try { return JSON.parse(localStorage.getItem('ta_data__' + uid) || 'null'); }
    catch { return null; }
  },
  writeData(uid, data) {
    if (this.isElectron) return window.taAPI.dataWrite(uid, data);
    localStorage.setItem('ta_data__' + uid, JSON.stringify(data));
  },
};

/* ─── 회원가입 / 로그인 (Supabase Auth) ─────────────────────────────── */
async function registerUser(email, password) {
  email = (email || '').trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw 'email-invalid';
  if ((password || '').length < 6) throw 'password-short';
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) throw error;
  // "Confirm email" 을 끈 프로젝트는 session 즉시 발급, 켠 경우 session null
  if (!data.session) throw 'confirm-needed';
  return data.user;
}

async function loginUser(email, password) {
  email = (email || '').trim();
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

/* ─── 계정 데이터 저장 (로컬 캐시 + 클라우드 푸시 예약) ────────────── */
function saveAccountData() {
  if (!currentUid) return;
  Store.writeData(currentUid, { notes, resources: RESOURCES });  // 오프라인 백업
  _syncMarkDirty();
  if (sb && settings.cloudAutoSync !== false) _schedulePush();
}

async function enterApp(user) {
  currentUser = user;
  currentUid  = user.id;

  // ① 로컬 캐시 먼저 로드 — 오프라인에서도 즉시 표시
  const cached = await Store.readData(currentUid);
  notes = (cached && cached.notes) ? cached.notes : {};
  RESOURCES.length = 0;
  if (cached && Array.isArray(cached.resources)) RESOURCES.push(...cached.resources);

  // 에디터/뷰 상태 초기화
  currentNoteKey = null;
  activeResId    = null;
  currentTags    = [];
  if (DOM.noteTitle)  DOM.noteTitle.value  = '';
  if (DOM.noteEditor) DOM.noteEditor.value = '';

  invalidateBacklinkIndex();
  invalidateTagCache();

  renderResources(activeFilter);
  renderTagPills();
  renderSidebarTags();
  updateStatCounters();
  updateWordCount();
  updateUserChip();
  updateBacklinkPanel();

  document.body.classList.remove('locked');
  closeAuthOverlay();

  // ② 온라인이면 클라우드와 동기화 (비동기)
  updateSyncUI();
  if (sb && navigator.onLine) syncNow();

  // ③ 첫 입장 시 사용 안내 1회 자동 표시 (이후엔 📖 버튼으로)
  if (!localStorage.getItem('ta_guide_seen')) {
    localStorage.setItem('ta_guide_seen', '1');
    setTimeout(openGuide, 700);
  }
}

async function logout() {
  saveAccountData();                              // 로컬 flush + 푸시 시도
  try { if (sb) await sb.auth.signOut(); } catch (_) {}
  currentUser = null;
  currentUid  = null;
  notes = {};
  RESOURCES.length = 0;
  currentNoteKey = null;
  activeResId = null;
  currentTags = [];
  if (DOM.noteTitle)  DOM.noteTitle.value  = '';
  if (DOM.noteEditor) DOM.noteEditor.value = '';
  document.body.classList.add('locked');
  goHome();
  openAuthOverlay();
  updateUserChip();
}

async function initAuth() {
  if (!sb) {
    // 클라우드 미설정 (supabase-config.js 미입력) → 로그인 화면 + 안내
    document.body.classList.add('locked');
    openAuthOverlay();
    setAuthError(T('authErrNotConfigured'));
    return;
  }
  // getSession 은 캐시된 세션을 반환 → 오프라인에서도 자동 로그인
  const { data } = await sb.auth.getSession();
  if (data && data.session && data.session.user) {
    await enterApp(data.session.user);
  } else {
    document.body.classList.add('locked');
    openAuthOverlay();
  }
  // 토큰 만료/외부 사인아웃 대응
  sb.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_OUT' && currentUser && !document.body.classList.contains('locked')) {
      currentUser = null; currentUid = null;
      document.body.classList.add('locked');
      openAuthOverlay();
      updateUserChip();
    }
  });
}

/* ═══════════════════════════════════════════════════════════════════
 *  동기화 엔진 — 자동(디바운스 푸시 + 시작 풀) + 수동(Sync now)
 *  메타: localStorage ta_sync_<uid> = { dirty, localUpdatedAt, lastSyncedRemoteAt }
 * ═══════════════════════════════════════════════════════════════════ */
let _syncState = 'idle';   // idle|syncing|synced|offline|conflict|error
let _pushTimer = null;
let _pendingRemote = null; // 충돌 다이얼로그 대기 중인 원격 행

function _syncMeta() {
  if (!currentUid) return {};
  try { return JSON.parse(localStorage.getItem('ta_sync_' + currentUid) || '{}'); }
  catch { return {}; }
}
function _writeSyncMeta(m) {
  if (currentUid) localStorage.setItem('ta_sync_' + currentUid, JSON.stringify(m));
}
function _syncMarkDirty() {
  const m = _syncMeta();
  m.dirty = true;
  m.localUpdatedAt = new Date().toISOString();
  _writeSyncMeta(m);
}
function _schedulePush() {
  clearTimeout(_pushTimer);
  _pushTimer = setTimeout(pushCloud, 2000);
}
function _setSyncState(s) { _syncState = s; updateSyncUI(); }

async function pushCloud() {
  if (!sb || !currentUid || !navigator.onLine) return;
  const m = _syncMeta();
  if (!m.dirty) return;
  const stamp = m.localUpdatedAt || new Date().toISOString();
  _setSyncState('syncing');
  const { error } = await sb.from('user_data')
    .upsert({ user_id: currentUid, data: { notes, resources: RESOURCES }, updated_at: stamp });
  if (error) { _setSyncState('error'); return; }   // dirty 유지 → 다음 기회 재시도
  const mm = _syncMeta();
  mm.dirty = false;
  mm.lastSyncedRemoteAt = stamp;
  _writeSyncMeta(mm);
  _setSyncState('synced');
}

async function pullCloud() {
  if (!sb || !currentUid) return;
  if (!navigator.onLine) { _setSyncState('offline'); return; }
  _setSyncState('syncing');
  const { data: row, error } = await sb.from('user_data')
    .select('data, updated_at').eq('user_id', currentUid).maybeSingle();
  if (error) { _setSyncState('error'); return; }

  const m = _syncMeta();
  if (!row) {                       // 원격 없음 → 첫 업로드
    _syncMarkDirty();
    await pushCloud();
    return;
  }
  const remoteNewer = !m.lastSyncedRemoteAt || new Date(row.updated_at) > new Date(m.lastSyncedRemoteAt);
  const dirty = !!m.dirty;

  if (dirty && remoteNewer) {       // 양쪽 변경 → 충돌
    _setSyncState('conflict');
    showSyncConflict(row);
  } else if (!dirty && remoteNewer) {   // 원격만 변경 → pull
    _applyRemote(row.data);
    const mm = _syncMeta();
    mm.lastSyncedRemoteAt = row.updated_at;
    mm.dirty = false;
    _writeSyncMeta(mm);
    _setSyncState('synced');
  } else if (dirty && !remoteNewer) {   // 로컬만 변경 → push
    await pushCloud();
  } else {                          // 이미 동기
    _setSyncState('synced');
  }
}

function syncNow() { return pullCloud(); }

/* 원격 데이터를 로컬에 적용 + 화면 갱신 + 캐시 기록 */
function _applyRemote(data) {
  notes = (data && data.notes) ? data.notes : {};
  RESOURCES.length = 0;
  if (data && Array.isArray(data.resources)) RESOURCES.push(...data.resources);

  invalidateBacklinkIndex();
  invalidateTagCache();

  // 현재 열린 노트가 원격에 없을 수 있으니 에디터 안전 초기화
  if (currentNoteKey && !notes[currentNoteKey]) {
    currentNoteKey = null;
    currentTags = [];
    if (DOM.noteTitle)  DOM.noteTitle.value  = '';
    if (DOM.noteEditor) DOM.noteEditor.value = '';
    renderTagPills();
  }

  renderResources(activeFilter);
  renderSidebarTags();
  updateStatCounters();
  updateWordCount();
  updateBacklinkPanel();

  if (currentUid) Store.writeData(currentUid, { notes, resources: RESOURCES });
}

/* ─── 충돌 해결 다이얼로그 ───────────────────────────────────────── */
function showSyncConflict(remoteRow) {
  _pendingRemote = remoteRow;
  const el = document.getElementById('sync-conflict-overlay');
  if (!el) return;
  el.classList.add('visible');
  requestAnimationFrame(() => el.classList.add('open'));
}
function _closeSyncConflict() {
  const el = document.getElementById('sync-conflict-overlay');
  if (!el) return;
  el.classList.remove('open');
  el.addEventListener('transitionend', () => el.classList.remove('visible'), { once: true });
}
async function resolveConflictUseCloud() {   // 클라우드 버전 사용 → 로컬 덮어쓰기
  _closeSyncConflict();
  if (!_pendingRemote) return;
  _applyRemote(_pendingRemote.data);
  const m = _syncMeta();
  m.lastSyncedRemoteAt = _pendingRemote.updated_at;
  m.dirty = false;
  _writeSyncMeta(m);
  _pendingRemote = null;
  _setSyncState('synced');
  showToast(T('syncResolvedCloud'));
}
async function resolveConflictUseLocal() {   // 이 기기 버전 사용 → 클라우드 덮어쓰기
  _closeSyncConflict();
  _pendingRemote = null;
  _syncMarkDirty();             // 새 타임스탬프로 원격보다 우선시
  await pushCloud();
  showToast(T('syncResolvedLocal'));
}

/* ─── 피드백 ─────────────────────────────────────────────────────── */
// Supabase `feedback` 테이블에 insert (RLS: anon·authenticated insert 허용, 읽기 차단)
let _fbCategory = 'bug';
function openFeedback() {
  const el = document.getElementById('feedback-overlay');
  if (!el) return;
  pickFeedbackCat(document.querySelector('#fb-cats .fb-cat[data-cat="bug"]'));  // 기본값 리셋
  const msg = document.getElementById('fb-message'); if (msg) msg.value = '';
  const err = document.getElementById('fb-error');   if (err) err.style.display = 'none';
  el.classList.add('visible');
  requestAnimationFrame(() => el.classList.add('open'));
  setTimeout(() => msg && msg.focus(), 80);
}
function closeFeedback() {
  const el = document.getElementById('feedback-overlay');
  if (!el) return;
  el.classList.remove('open');
  el.addEventListener('transitionend', () => el.classList.remove('visible'), { once: true });
}
function pickFeedbackCat(btn) {
  if (!btn) return;
  _fbCategory = btn.dataset.cat;
  document.querySelectorAll('#fb-cats .fb-cat').forEach(b => b.classList.toggle('active', b === btn));
}
async function submitFeedback() {
  const msgEl = document.getElementById('fb-message');
  const errEl = document.getElementById('fb-error');
  const btn   = document.getElementById('fb-submit');
  const message = (msgEl && msgEl.value || '').trim();
  const showErr = (m) => { if (errEl) { errEl.textContent = m; errEl.style.display = 'block'; } };
  if (errEl) errEl.style.display = 'none';

  if (message.length < 5)            { showErr(T('fbErrShort'));   msgEl && msgEl.focus(); return; }
  if (!sb || !navigator.onLine)      { showErr(T('fbErrOffline')); return; }

  if (btn) { btn.disabled = true; btn.textContent = T('fbSending'); }
  const { error } = await sb.from('feedback').insert({
    user_id:     currentUid || null,
    email:       (currentUser && currentUser.email) ? currentUser.email : null,
    category:    _fbCategory,
    message,
    app_version: APP_VERSION,
    platform:    navigator.platform || null,
  });
  if (btn) { btn.disabled = false; btn.textContent = T('fbSubmit'); }

  if (error) { console.error('feedback insert failed:', error); showErr(T('fbErrFail')); return; }
  closeFeedback();
  showToast(`✦  ${T('fbThanks')}`);
}

/* ─── 동기화 상태 UI (설정 패널 + 사이드바 footer) ───────────────── */
// footer 점 색상 카테고리 ↔ 상태 텍스트 키
function _syncStatusKey() {
  if (!sb) return 'syncNotConfigured';
  if (!navigator.onLine) return 'syncOffline';
  return ({ syncing:'syncSyncing', synced:'syncSynced', conflict:'syncConflict',
            error:'syncError', offline:'syncOffline' })[_syncState] || 'syncIdle';
}
function _syncDotState() {
  if (!sb) return 'idle';
  if (!navigator.onLine) return 'offline';
  return ({ syncing:'syncing', synced:'ok', conflict:'warn', error:'error' })[_syncState] || 'idle';
}
// footer는 폭이 좁아 오늘이면 시각만, 아니면 월/일만 (설정 패널은 전체 표기 유지)
function _fmtSyncTimeShort(iso) {
  const d = new Date(iso), now = new Date();
  return d.toDateString() === now.toDateString()
    ? d.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })
    : d.toLocaleDateString([], { month:'numeric', day:'numeric' });
}
function updateSyncUI() {
  const statusText = T(_syncStatusKey());
  const m = _syncMeta();
  const synced = !!m.lastSyncedRemoteAt;

  // 설정 패널
  const statusEl = document.getElementById('sync-status');
  const lastEl   = document.getElementById('sync-last');
  if (statusEl) statusEl.textContent = statusText;
  if (lastEl)   lastEl.textContent   = synced ? new Date(m.lastSyncedRemoteAt).toLocaleString() : '—';

  // 사이드바 footer
  const fStatus = document.getElementById('footer-sync-status');
  const fLast   = document.getElementById('footer-sync-last');
  const fDot    = document.getElementById('footer-sync-dot');
  if (fStatus) fStatus.textContent = statusText;
  if (fLast)   fLast.textContent   = synced ? _fmtSyncTimeShort(m.lastSyncedRemoteAt) : '';
  if (fDot)    fDot.dataset.state  = _syncDotState();
  const fWrap = document.getElementById('footer-sync');
  if (fWrap)   fWrap.title = T('settSyncNow');
}

/* ─── 인증 오버레이 UI ──────────────────────────────────────────── */
let _authHideTimer = null;
function openAuthOverlay() {
  const el = document.getElementById('auth-overlay');
  if (!el) return;
  clearTimeout(_authHideTimer);              // 진행 중이던 숨김 취소 (재오픈 시 사라짐 방지)
  el.classList.add('visible');
  requestAnimationFrame(() => el.classList.add('open'));
  setAuthMode('login');
  setTimeout(() => document.getElementById('auth-email')?.focus(), 60);
}
function closeAuthOverlay() {
  const el = document.getElementById('auth-overlay');
  if (!el) return;
  el.classList.remove('open');
  // transitionend 대신 타이머로 숨김 — 오버레이가 안 열린 상태에서 닫혀도(자동 로그인 등)
  // dangling 리스너가 남아 다음 오픈을 취소하던 버그 방지.
  clearTimeout(_authHideTimer);
  _authHideTimer = setTimeout(() => el.classList.remove('visible'), 240);
}
function setAuthMode(mode) {
  const overlay = document.getElementById('auth-overlay');
  if (!overlay) return;
  overlay.dataset.mode = mode;   // 'login' | 'signup' | 'reset'
  document.getElementById('auth-tab-login')?.classList.toggle('active', mode === 'login');
  document.getElementById('auth-tab-signup')?.classList.toggle('active', mode === 'signup');

  const show = (id, on) => { const el = document.getElementById(id); if (el) el.style.display = on ? '' : 'none'; };
  show('auth-confirm-row', mode === 'signup');
  show('auth-password',    mode !== 'reset');         // reset 모드엔 기존 비번 입력 숨김
  show('auth-send-code',   mode === 'reset');
  show('auth-reset-row',   false);                    // 코드 발송 후에만 노출
  show('auth-forgot',      mode === 'login');

  const submit = document.getElementById('auth-submit');
  if (submit) submit.textContent =
    mode === 'signup' ? T('authSignupBtn') :
    mode === 'reset'  ? T('authResetBtn')  : T('authLoginBtn');
  setAuthError('');
}
function setAuthError(msg) {
  const el = document.getElementById('auth-error');
  if (el) { el.textContent = msg || ''; el.style.display = msg ? '' : 'none'; }
}
function authErrorText(err) {
  if (typeof err === 'string') {
    const map = {
      'email-invalid':   T('authErrEmailInvalid'),
      'password-short':  T('authErrPassShort'),
      'mismatch':         T('authErrMismatch'),
      'confirm-needed':   T('authErrConfirmNeeded'),
      'reset-code-missing': T('authErrResetCode'),
    };
    return map[err] || err;
  }
  // Supabase 에러 객체 → 메시지 기반 매핑
  const msg = (err && err.message) ? err.message : String(err);
  const m = msg.toLowerCase();
  if (m.includes('invalid login')) return T('authErrBadCreds');
  if (m.includes('already registered') || m.includes('already been registered')) return T('authErrExists');
  if (m.includes('password should be') || m.includes('at least 6')) return T('authErrPassShort');
  if (m.includes('token has expired') || m.includes('invalid') && m.includes('otp') || m.includes('expired')) return T('authErrResetCode');
  if (m.includes('unable to validate email') || (m.includes('email') && m.includes('invalid'))) return T('authErrEmailInvalid');
  if (m.includes('failed to fetch') || m.includes('network') || m.includes('fetch')) return T('authErrNetwork');
  return msg;
}

async function submitAuth() {
  if (!sb) { setAuthError(T('authErrNotConfigured')); return; }
  const overlay = document.getElementById('auth-overlay');
  const mode = overlay?.dataset.mode || 'login';
  const email    = document.getElementById('auth-email')?.value    || '';
  const password = document.getElementById('auth-password')?.value || '';
  const confirm  = document.getElementById('auth-confirm')?.value  || '';
  setAuthError('');
  const submitBtn = document.getElementById('auth-submit');
  if (submitBtn) submitBtn.disabled = true;

  try {
    let u;
    if (mode === 'reset') {
      // 비밀번호 재설정: 이메일 OTP 코드 검증 → 새 비번 설정
      const code = document.getElementById('auth-reset-code')?.value.trim() || '';
      const np   = document.getElementById('auth-reset-newpass')?.value || '';
      if (!code)        throw 'reset-code-missing';
      if (np.length < 6) throw 'password-short';
      const { data, error } = await sb.auth.verifyOtp({ email: email.trim(), token: code, type: 'recovery' });
      if (error) throw error;
      const { error: e2 } = await sb.auth.updateUser({ password: np });
      if (e2) throw e2;
      u = data.user || (data.session && data.session.user);
      await enterApp(u);
      showToast(`🔑  ${T('cpDone')}`);
    } else if (mode === 'signup') {
      if (password !== confirm) throw 'mismatch';
      u = await registerUser(email, password);
      await enterApp(u);
      showToast(`✦  ${T('authWelcome')} ${u.email}`);
    } else {
      u = await loginUser(email, password);
      await enterApp(u);
      showToast(`✦  ${T('authWelcome')} ${u.email}`);
    }
    // 입력값 정리
    ['auth-email','auth-password','auth-confirm','auth-reset-code','auth-reset-newpass'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
  } catch (code) {
    setAuthError(authErrorText(code));
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

/* 비밀번호 재설정 코드 발송 (이메일 OTP) */
async function sendResetCode() {
  if (!sb) { setAuthError(T('authErrNotConfigured')); return; }
  const email = (document.getElementById('auth-email')?.value || '').trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setAuthError(T('authErrEmailInvalid')); return; }
  const btn = document.getElementById('auth-send-code');
  if (btn) btn.disabled = true;
  setAuthError('');
  try {
    const { error } = await sb.auth.resetPasswordForEmail(email);
    if (error) throw error;
    const row = document.getElementById('auth-reset-row');
    if (row) row.style.display = '';          // 코드+새비번 입력 노출
    showToast(`✉  ${T('authCodeSent')}`);
    setTimeout(() => document.getElementById('auth-reset-code')?.focus(), 40);
  } catch (err) {
    setAuthError(authErrorText(err));
  } finally {
    if (btn) btn.disabled = false;
  }
}

function updateUserChip() {
  const nameEl = document.getElementById('user-chip-name');
  const subEl  = document.getElementById('user-chip-sub');
  const avEl   = document.getElementById('user-chip-avatar');
  const email   = (currentUser && currentUser.email) ? currentUser.email : '';
  const display = email ? email.split('@')[0] : 'Guest';
  if (nameEl) nameEl.textContent = display;
  if (subEl)  subEl.textContent  = currentUser ? T('userChipLogout') : T('offlineMode');
  if (avEl)   avEl.textContent   = display.charAt(0).toUpperCase();
}

/* ─── Init ──────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  Object.assign(DOM, {
    noteEditor:       document.getElementById('note-editor'),
    noteTitle:        document.getElementById('note-title'),
    saveStatus:       document.getElementById('save-status'),
    urlBar:           document.getElementById('url-bar'),
    searchInput:      document.getElementById('search-input'),
    settingsOverlay:  document.getElementById('settings-overlay'),
    savePanel:        document.getElementById('save-confirm-panel'),
    shortcutHelp:     document.getElementById('shortcut-help'),
    mediaIframe:      document.getElementById('media-iframe'),
    mediaPlaceholder: document.getElementById('media-placeholder'),
    main:             document.getElementById('main'),
    backlinkDropdown:  document.getElementById('backlink-dropdown'),
    toast:             document.getElementById('toast'),
    iframeBlocked:     document.getElementById('iframe-blocked'),
    iframeBlockedUrl:  document.getElementById('iframe-blocked-url'),
    resourceList:      document.getElementById('resource-list'),
    wordCount:         document.getElementById('word-count'),
    charCount:         document.getElementById('char-count'),
    lineCount:         document.getElementById('line-count'),
  });

  updateWordCount();
  loadSettings();

  /* 로고 버전 라벨 — Electron 앱은 taAPI.getVersion()으로 동적 반영,
     웹 버전은 taAPI가 없으므로 상수 WEB_VERSION을 'web' 채널로 표시 */
  if (window.taAPI && window.taAPI.getVersion) {
    window.taAPI.getVersion()
      .then(v => { if (v) { APP_VERSION = v; const el = document.getElementById('app-version-label'); if (el) el.textContent = `v${v} · cloud`; } })
      .catch(() => {});
  } else {
    APP_VERSION = WEB_VERSION;
    const el = document.getElementById('app-version-label');
    if (el) el.textContent = `v${WEB_VERSION} · web`;
  }
  /* 미디어 뒤로/앞으로 초기 비활성 상태 반영 (열람 기록 스택 기반) */
  _updateNavButtons();

  /* 인증 입력 핸들러 — Enter 제출 */
  ['auth-email','auth-password','auth-confirm'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); submitAuth(); }
    });
  });

  /* 네트워크 복귀 시 자동 동기화 / 상태 갱신 */
  window.addEventListener('online',  () => { updateSyncUI(); if (currentUid) syncNow(); });
  window.addEventListener('offline', () => updateSyncUI());

  /* 로그인 상태 확인 → 데이터 로드 또는 로그인 창 표시 */
  initAuth();

  DOM.noteEditor.addEventListener('input', updateWordCount);
  DOM.noteEditor.addEventListener('beforeinput', _onEditorBeforeInput); // 되돌리기 히스토리 캡처
  DOM.noteEditor.addEventListener('keydown', _onEditorTab);   // Tab = 코드 들여쓰기 (포커스 이동 X)

  /* (웹: did-navigate 등 Electron <webview> 전용 이벤트는 <iframe>에서 발생하지 않으므로 제거.
     URL바/뒤로앞으로는 _pushMediaHist 기반 열람 기록으로 관리) */

  DOM.urlBar.addEventListener('keydown', e => { if (e.key === 'Enter') loadUrl(); });
  DOM.urlBar.addEventListener('paste', () => {
    setTimeout(() => {
      const val = DOM.urlBar.value;
      const converted = toEmbedUrl(val);
      if (converted !== val) {
        DOM.urlBar.value = converted;
        showToast('🔗  YouTube URL 자동 변환됨');
      }
    }, 0);
  });

  /* 태그 입력 핸들러 */
  const tagInput = document.getElementById('note-tag-input');
  if (tagInput) {
    tagInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const raw = tagInput.value.trim();
        if (raw) { addTag(raw); tagInput.value = ''; }
      } else if (e.key === 'Backspace' && !tagInput.value && currentTags.length > 0) {
        removeTag(currentTags[currentTags.length - 1]);
      }
    });
    tagInput.addEventListener('input', () => {
      const v = tagInput.value;
      if (v && !v.startsWith('#')) tagInput.value = '#' + v;
    });
  }

  /* Add Resource 모달 — Enter 제출 */
  ['ar-name', 'ar-url', 'ar-tags'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); confirmAddResource(); }
    });
  });
});

/* ─── Navigation ─────────────────────────────────────────────────── */
function setNav(el) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
  const page = el.dataset.page;
  if (page) navigateTo(page);
}

function goHome() {
  DOM.main.dataset.view = 'home';
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-page="home"]')?.classList.add('active');
  renderSidebarTags();
  updatePageTitle();
}

/* 메인 상단 제목을 현재 뷰에 맞는 페이지명으로 동기화 (사이드바 로고와 중복 제거) */
function updatePageTitle() {
  const el = document.getElementById('page-title');
  if (!el) return;
  const view = DOM.main?.dataset.view || 'home';
  const key  = view === 'archive' ? 'navArchive'
             : view === 'analytics' ? 'navAnalytics'
             : 'navHome';
  el.textContent = T(key);
}

function goHomeAndNewNote() {
  goHome();
  /* 새 메모: 이전에 편집하던 메모 상태를 초기화해야 빈 에디터로 시작한다.
     (switchView('note')는 currentNoteKey가 비어있을 때만 새 키를 만들므로 여기서 비운다) */
  currentNoteKey = null;
  activeResId    = null;
  currentTags    = [];
  if (DOM.noteTitle)  DOM.noteTitle.value  = '';
  if (DOM.noteEditor) DOM.noteEditor.value = '';
  renderTagPills();
  updateWordCount();
  renderResources(activeFilter);
  switchView('note');
}

function goHomeAndAddResource() {
  goHome();
  addResource();
}

function navigateTo(page) {
  if (page === 'archive') {
    DOM.main.dataset.view = 'archive';
    renderArchive();
  } else if (page === 'analytics') {
    DOM.main.dataset.view = 'analytics';
    renderAnalytics();
  } else {
    DOM.main.dataset.view = 'home';
  }
  renderSidebarTags();
  updatePageTitle();
}

/* ─── Analytics Rendering ────────────────────────────────────── */
function renderAnalytics() {
  const totalNotes     = Object.keys(notes).length;
  const allTags        = getAllTags();
  const nonNoteRes     = RESOURCES.filter(r => r.type !== 'note').length;

  /* Quick stats */
  const quickRow = document.getElementById('an-quick-row');
  if (!quickRow) return;
  quickRow.innerHTML = `
    <div class="an-quick-card">
      <div class="an-quick-icon purple">📝</div>
      <div class="an-quick-val">${totalNotes}</div>
      <div class="an-quick-label">${T('anSavedNotes')}</div>
    </div>
    <div class="an-quick-card">
      <div class="an-quick-icon blue">🔗</div>
      <div class="an-quick-val">${nonNoteRes}</div>
      <div class="an-quick-label">${T('anResLinked')}</div>
    </div>
    <div class="an-quick-card">
      <div class="an-quick-icon mixed">#</div>
      <div class="an-quick-val">${allTags.length}</div>
      <div class="an-quick-label">${T('anUniqueTags')}</div>
    </div>
    <div class="an-quick-card">
      <div class="an-quick-icon purple">⏱</div>
      <div class="an-quick-val">${document.getElementById('stat-time').textContent}</div>
      <div class="an-quick-label">${T('anSessionTime')}</div>
    </div>
  `;

  /* Resources by type */
  const typeCounts  = { youtube: 0, shorts: 0, website: 0, note: 0 };
  RESOURCES.forEach(r => { if (r.type in typeCounts) typeCounts[r.type]++; });
  const resTotal    = RESOURCES.length || 1;
  const typeColors  = { youtube:'#FF4444', shorts:'#3385FF', website:'#0066FF', note:'#66A3FF' };
  const typeLabels  = { youtube:T('anTypeYoutube'), shorts:T('anTypeShorts'), website:T('anTypeWebsite'), note:T('anTypeNote') };

  document.getElementById('an-type-bars').innerHTML = Object.entries(typeCounts).map(([type, count]) => {
    const pct = Math.round((count / resTotal) * 100);
    return `
      <div class="an-type-row">
        <div class="an-type-label">${typeLabels[type]}</div>
        <div class="an-bar-wrap">
          <div class="an-bar-fill" style="width:${pct}%;background:${typeColors[type]}"></div>
        </div>
        <div class="an-type-stat">${count} <span>${pct}%</span></div>
      </div>`;
  }).join('');

  /* Top tags */
  const tagCounts = {};
  Object.values(notes).forEach(n => (n.tags||[]).forEach(t => { tagCounts[t] = (tagCounts[t]||0)+1; }));
  RESOURCES.forEach(r => (r.tags||[]).forEach(t => { tagCounts[t] = (tagCounts[t]||0)+1; }));
  const sortedTags  = Object.entries(tagCounts).sort((a,b) => b[1]-a[1]).slice(0, 8);
  const maxTagCount = sortedTags[0]?.[1] || 1;
  const tagList     = document.getElementById('an-tag-list');
  tagList.innerHTML = sortedTags.length === 0
    ? `<div class="an-empty">${T('anNoTags')}</div>`
    : sortedTags.map(([tag, count]) => `
        <div class="an-tag-row">
          <div class="an-tag-name">${tag}</div>
          <div class="an-mini-bar-wrap">
            <div class="an-mini-bar-fill" style="width:${Math.round((count/maxTagCount)*100)}%"></div>
          </div>
          <div class="an-count">${count}</div>
        </div>`).join('');

  /* Notes by color */
  const colorCounts = {};
  Object.values(notes).forEach(n => {
    const c = n.color || '#0066FF';
    colorCounts[c] = (colorCounts[c]||0)+1;
  });
  const colorEntries  = Object.entries(colorCounts).sort((a,b) => b[1]-a[1]);
  const maxColorCount = colorEntries[0]?.[1] || 1;
  const colorList     = document.getElementById('an-color-list');
  colorList.innerHTML = colorEntries.length === 0
    ? `<div class="an-empty">${T('anNoNotes')}</div>`
    : colorEntries.map(([color, count]) => `
        <div class="an-color-row">
          <div class="an-color-swatch" style="background:${color}"></div>
          <div class="an-mini-bar-wrap">
            <div class="an-mini-bar-fill" style="width:${Math.round((count/maxColorCount)*100)}%;background:${color}"></div>
          </div>
          <div class="an-count">${count}</div>
        </div>`).join('');

  /* Updated time */
  document.getElementById('analytics-updated').textContent =
    T('anUpdated') + ' ' + new Date().toLocaleTimeString(currentLang === 'ko' ? 'ko-KR' : 'en-US', { hour:'2-digit', minute:'2-digit' });
}

/* ─── Archive Rendering ──────────────────────────────────────────── */
function renderArchive() {
  const grid       = document.getElementById('archive-grid');
  const countEl    = document.getElementById('archive-count');
  const allEntries = Object.entries(notes);

  /* color + tag 필터 적용 */
  let filtered = allEntries;
  if (archiveColorFilter !== 'all') {
    filtered = filtered.filter(([,n]) => (n.color || '#0066FF') === archiveColorFilter);
  }
  if (activeTags.length > 0) {
    filtered = filtered.filter(([,n]) => activeTags.every(t => (n.tags || []).includes(t)));
  }

  countEl.textContent = allEntries.length +
    T(allEntries.length !== 1 ? 'archiveCountSuffixPlural' : 'archiveCountSuffix');

  if (allEntries.length === 0) {
    grid.innerHTML = `<div class="archive-empty"><span>📁</span>${T('archiveEmptyL1')}<br>${T('archiveEmptyL2')}
      <div class="empty-cta-row"><button class="empty-cta" onclick="goHomeAndNewNote()" data-i18n="emptyNewNote">${T('emptyNewNote')}</button></div>
    </div>`;
    return;
  }
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="archive-empty"><span>🔍</span>No notes match the current filter.</div>`;
    return;
  }

  grid.innerHTML = '';
  filtered
    .sort((a, b) => {
      /* 고정(pinned) 메모를 항상 위로 */
      const pa = a[1].pinned ? 1 : 0;
      const pb = b[1].pinned ? 1 : 0;
      if (pa !== pb) return pb - pa;
      const da = a[1].saved ? new Date(a[1].saved) : 0;
      const db = b[1].saved ? new Date(b[1].saved) : 0;
      return db - da;
    })
    .forEach(([key, note]) => {
      const card  = document.createElement('div');
      card.className = 'archive-card' + (note.pinned ? ' pinned' : '');
      const color    = note.color || '#0066FF';
      const emoji    = note.emoji || '';
      const date     = note.saved ? new Date(note.saved).toLocaleDateString('ko-KR') : '—';
      const tagsHtml = (note.tags || []).length > 0
        ? `<div class="archive-card-tags">${(note.tags||[]).map(t=>`<span class="archive-tag-pill">${t}</span>`).join('')}</div>`
        : '';
      card.innerHTML = `
        <div class="archive-card-bar" style="background:${color}"></div>
        <button class="archive-pin${note.pinned ? ' active' : ''}" title="${note.pinned ? T('unpinNote') : T('pinNote')}" aria-label="${note.pinned ? T('unpinNote') : T('pinNote')}">📌</button>
        <div class="archive-card-body">
          ${emoji ? `<div class="archive-card-emoji">${emoji}</div>` : ''}
          <div class="archive-card-title">${note.title || 'Untitled'}</div>
          <div class="archive-card-preview">${note.body ? note.body.replace(/</g,'&lt;') : '<em style="opacity:.4">Empty note</em>'}</div>
          ${tagsHtml}
          <div class="archive-card-date">Saved: ${date}</div>
        </div>
      `;
      const pinBtn = card.querySelector('.archive-pin');
      if (pinBtn) pinBtn.addEventListener('click', e => {
        e.stopPropagation();
        togglePin(key);
      });
      card.addEventListener('click', () => {
        const homeNav = document.querySelector('[data-page="home"]');
        if (homeNav) setNav(homeNav);
        currentNoteKey = key;
        DOM.noteTitle.value = note.title || '';
        DOM.noteEditor.value = note.body || '';
        currentTags = (note.tags || []).slice();
        renderTagPills();
        updateWordCount();
        switchView('note');
      });
      grid.appendChild(card);
    });
  _enhanceArchiveCards();
}

/* ─── Pin / Unpin a note ─────────────────────────────────────────── */
function togglePin(key) {
  if (!notes[key]) return;
  notes[key].pinned = !notes[key].pinned;
  saveAccountData();
  renderArchive();
  showToast(notes[key].pinned ? '📌  Pinned' : 'Unpinned');
}

/* ─── Body Snippet Helper ────────────────────────────────────────── */
function getBodySnippet(body, q) {
  const lower = body.toLowerCase();
  const idx   = lower.indexOf(q);
  if (idx === -1) return null;
  const start = Math.max(0, idx - 30);
  const end   = Math.min(body.length, idx + q.length + 30);
  const esc   = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return {
    before: (start > 0 ? '…' : '') + esc(body.slice(start, idx)),
    match:  esc(body.slice(idx, idx + q.length)),
    after:  esc(body.slice(idx + q.length, end)) + (end < body.length ? '…' : '')
  };
}

/* ─── Resource Rendering ─────────────────────────────────────────── */
function renderResources(filter = activeFilter, search = '') {
  const list = DOM.resourceList || document.getElementById('resource-list');
  list.innerHTML = '';

  const q = search.toLowerCase();

  const withPriority = RESOURCES.reduce((acc, r) => {
    const matchFilter = filter === 'all'
      || (filter === 'music' ? r.music === true : r.type === filter);
    const matchTags   = activeTags.length === 0 ||
      activeTags.every(t => (r.tags || []).includes(t));
    if (!matchFilter || !matchTags) return acc;

    if (!q) { acc.push({ r, priority: 0 }); return acc; }

    if (q.startsWith('#')) {
      if ((r.tags || []).some(t => t.includes(q)))
        acc.push({ r, priority: 1 });
      return acc;
    }

    const nameMatch = r.name.toLowerCase().includes(q);
    const tagMatch  = (r.tags || []).some(t => t.toLowerCase().includes(q));
    const noteBody  = r.type === 'note' ? ((notes['note_' + r.id] || {}).body || '') : '';
    const bodyMatch = noteBody.toLowerCase().includes(q);

    if      (nameMatch) acc.push({ r, priority: 0, snippet: null });
    else if (tagMatch)  acc.push({ r, priority: 1, snippet: null });
    else if (bodyMatch) acc.push({ r, priority: 2, snippet: getBodySnippet(noteBody, q) });
    return acc;
  }, []);

  withPriority.sort((a, b) => a.priority - b.priority);

  if (withPriority.length === 0) {
    /* 리소스 자체가 없으면 CTA, 검색/필터 결과가 없으면 안내문 */
    if (RESOURCES.length === 0) {
      list.innerHTML = `<div class="search-no-result">${T('resourceEmpty')}
        <div class="empty-cta-row"><button class="empty-cta" onclick="goHomeAndAddResource()" data-i18n="emptyAddResource">${T('emptyAddResource')}</button></div>
      </div>`;
    } else {
      list.innerHTML = `<div class="search-no-result">${T('searchNoResult')}</div>`;
    }
    return;
  }

  /* 드래그 재정렬은 전체 목록(필터/검색/태그 없음)일 때만 허용 — 부분 목록 재정렬은 순서 손상 위험 */
  const canReorder = (filter === 'all' && !search && activeTags.length === 0);

  const frag = document.createDocumentFragment();
  withPriority.forEach(({ r, snippet }) => {
    const div = document.createElement('div');
    div.className = 'resource-item' + (activeResId === r.id ? ' active' : '');
    div.dataset.id = r.id;
    if (canReorder) div.draggable = true;
    const tagsSnippet = (r.tags||[]).length
      ? `<div style="margin-top:2px;display:flex;gap:3px;flex-wrap:wrap;">${(r.tags||[]).map(t=>`<span style="font-size:9px;color:var(--purple);border:1px solid rgba(0, 102, 255,0.35);border-radius:10px;padding:0 5px;">${t}</span>`).join('')}</div>`
      : '';
    const snippetHtml = snippet
      ? `<div class="res-snippet">${snippet.before}<span class="res-snippet-hl">${snippet.match}</span>${snippet.after}</div>`
      : '';
    div.innerHTML = `
      <div class="res-thumb ${r.thumb}">${r.icon}</div>
      <div class="res-info">
        <div class="res-name">${r.name}</div>
        <div class="res-meta">${r.meta}</div>
        ${tagsSnippet}
        ${snippetHtml}
      </div>
      <div class="res-badge ${r.thumb}">${r.type}</div>
      <button class="res-music${r.music ? ' active' : ''}" title="${r.music ? '음악 해제' : '음악으로 표시'}" onclick="event.stopPropagation(); toggleMusic(${r.id})">♪</button>
      ${r.type !== 'note' ? `<button class="res-edit" title="${T('resEdit')}" onclick="event.stopPropagation(); editResource(${r.id})">✎</button>` : ''}
      <button class="res-delete" title="${T('resDelete')}" onclick="event.stopPropagation(); deleteResource(${r.id})">✕</button>
    `;
    div.addEventListener('click', () => onResourceClick(r));
    frag.appendChild(div);
  });
  list.appendChild(frag);

  if (canReorder) _setupResourceDnD(list);
}

/* 리소스 선택 하이라이트만 갱신 — 전체 재렌더 없이 active 클래스 토글 */
function _updateActiveResourceHighlight() {
  const list = DOM.resourceList || document.getElementById('resource-list');
  if (!list) return;
  list.querySelectorAll('.resource-item').forEach(el => {
    el.classList.toggle('active', Number(el.dataset.id) === activeResId);
  });
}

/* ─── Resource drag-and-drop reorder ─────────────────────────────── */
let _dragEl = null;
function _setupResourceDnD(list) {
  list.querySelectorAll('.resource-item').forEach(item => {
    item.addEventListener('dragstart', e => {
      _dragEl = item;
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      _dragEl = null;
      _commitResourceOrder(list);
    });
  });
  /* list 요소는 렌더 간 유지되므로 dragover 리스너는 한 번만 바인딩 */
  if (!list._dndBound) {
    list.addEventListener('dragover', e => {
      e.preventDefault();
      if (!_dragEl) return;
      const after = _dragAfterElement(list, e.clientY);
      if (after == null) list.appendChild(_dragEl);
      else list.insertBefore(_dragEl, after);
    });
    list._dndBound = true;
  }
}
function _dragAfterElement(list, y) {
  const els = [...list.querySelectorAll('.resource-item:not(.dragging)')];
  return els.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: -Infinity, element: null }).element;
}
function _commitResourceOrder(list) {
  /* DOM 순서가 곧 최종 순서 — id→리소스 맵으로 한 번에 재배열(정렬 불필요).
     화면에 안 보이는(필터로 빠진) 리소스가 있어도 보존하려 뒤에 덧붙인다. */
  const ids   = [...list.querySelectorAll('.resource-item')].map(el => Number(el.dataset.id));
  const byId  = new Map(RESOURCES.map(r => [r.id, r]));
  const seen  = new Set(ids);
  const next  = ids.map(id => byId.get(id)).filter(Boolean);
  RESOURCES.forEach(r => { if (!seen.has(r.id)) next.push(r); });
  RESOURCES.length = 0;
  RESOURCES.push(...next);
  saveResources();
}

/* ─── Resource Click ─────────────────────────────────────────────── */
function onResourceClick(r) {
  /* Home 뷰가 아니면(Analytics/Archive 등) 먼저 Home으로 전환해야
     리소스가 실제로 열린다. */
  if (DOM.main.dataset.view !== 'home') {
    DOM.main.dataset.view = 'home';
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector('[data-page="home"]')?.classList.add('active');
    renderSidebarTags();
    updatePageTitle();
  }

  activeResId = r.id;
  _updateActiveResourceHighlight();   // 전체 재렌더 대신 하이라이트만 갱신

  if (r.type === 'note') {
    currentNoteKey = 'note_' + r.id;
    const saved = notes[currentNoteKey] || { title: r.name, body: '' };
    DOM.noteTitle.value = saved.title;
    DOM.noteEditor.value = saved.body;
    currentTags = (saved.tags || []).slice();
    renderTagPills();
    updateWordCount();
    switchView('note');
  } else {
    loadResource(r);
    switchView('media');
  }
}

function loadResource(r) {
  _openMedia(r.url);
  _pushMediaHist({ resId: r.id, url: r.url });
  showToast(`▶  ${r.name} loaded`);
}

/* ─── Dual-View ──────────────────────────────────────────────────── */
function switchView(mode) {
  currentView = mode;
  const layerMedia = document.getElementById('layer-media');
  const layerNote  = document.getElementById('layer-note');
  const tabMedia   = document.getElementById('tab-media');
  const tabNote    = document.getElementById('tab-note');

  if (mode === 'media') {
    layerMedia.classList.remove('hidden');
    layerNote.classList.add('hidden');
    tabMedia.classList.add('active');
    tabNote.classList.remove('active');
    DOM.urlBar.style.display = '';
  } else {
    layerNote.classList.remove('hidden');
    layerMedia.classList.add('hidden');
    tabNote.classList.add('active');
    tabMedia.classList.remove('active');
    DOM.urlBar.style.display = 'none';
    DOM.noteEditor.focus();
    if (!currentNoteKey) {
      currentNoteKey = 'note_new_' + Date.now();
      currentTags = [];
      renderTagPills();
    }
    updateNoteOutlinks();
    setTimeout(updateBacklinkPanel, 0);
  }
}

/* 웹 버전은 임베드 차단 감지를 _openMedia 의 _mediaEmbeddable() 사전 판별로 대체.
 * (브라우저 <iframe> 은 cross-origin X-Frame-Options/CSP 차단을 부모에서 감지할 수
 *  없으므로, did-fail-load 이벤트 기반 사후 감지 대신 호스트 화이트리스트로 선판별.) */

/* ─── 미디어 URL 정규화 (웹 iframe) ──────────────────────────────────
 * 웹 <iframe> 은 대부분의 외부 사이트(X-Frame-Options/CSP)와 YouTube watch URL 을
 * 임베드하지 못한다. 임베드 가능한 호스트(YouTube/Vimeo)는 전용 player(embed) URL 로
 * 변환하고, 그 외에는 원본을 그대로 반환한다 (인앱 표시 불가 → '새 탭' 폴백). */
function toEmbedUrl(raw) {
  const s    = (raw || '').trim();
  const full = s.startsWith('http') ? s : 'https://' + s;
  try {
    const u    = new URL(full);
    const host = u.hostname.replace(/^www\./, '');
    /* YouTube → /embed/{id} (watch/shorts/youtu.be 모두 정규화) */
    if (host === 'youtu.be') {
      const id = u.pathname.slice(1).split(/[?&#]/)[0];
      return id ? `https://www.youtube.com/embed/${id}` : full;
    }
    if (host.endsWith('youtube.com')) {
      if (u.pathname.startsWith('/embed/')) return full;
      if (u.pathname.startsWith('/shorts/')) {
        const id = u.pathname.split('/shorts/')[1].split(/[?&#]/)[0];
        return id ? `https://www.youtube.com/embed/${id}` : full;
      }
      const v = u.searchParams.get('v');
      return v ? `https://www.youtube.com/embed/${v}` : full;
    }
    /* Vimeo → player.vimeo.com/video/{id} */
    if (host === 'vimeo.com') {
      const id = u.pathname.split('/').filter(Boolean)[0];
      if (/^\d+$/.test(id || '')) return `https://player.vimeo.com/video/${id}`;
    }
  } catch (_) {}
  return full;
}

/* toEmbedUrl 결과가 인앱 <iframe> 으로 표시 가능한 임베드 플레이어인지 판별. */
function _mediaEmbeddable(url) {
  try {
    const h = new URL(url).hostname.replace(/^www\./, '');
    return (h === 'youtube.com' && url.includes('/embed/'))
        || h === 'player.vimeo.com';
  } catch (_) { return false; }
}

/* URL(임의 형식)에서 YouTube 영상 ID 추출. 아니면 null. */
function _youtubeId(url) {
  try {
    const u = new URL(url);
    const h = u.hostname.replace(/^www\./, '');
    if (h === 'youtu.be') return u.pathname.slice(1).split(/[?&#]/)[0] || null;
    if (h.endsWith('youtube.com')) {
      if (u.pathname.startsWith('/embed/'))  return u.pathname.split('/embed/')[1].split(/[?&#]/)[0]  || null;
      if (u.pathname.startsWith('/shorts/')) return u.pathname.split('/shorts/')[1].split(/[?&#]/)[0] || null;
      return u.searchParams.get('v');
    }
  } catch (_) {}
  return null;
}

/* ─── YouTube IFrame Player API (연속 재생 / 플레이리스트) ──────────────
 * 영상 종료(ENDED) 이벤트를 받기 위해 YouTube 공식 IFrame Player API 를 사용한다.
 * #yt-player <div> 를 API 가 <iframe> 으로 교체해 player 객체로 제어한다.
 * '연속 재생' 토글(settings.autoplayNext)이 켜져 있으면 영상이 끝났을 때
 * 현재 리소스 목록(필터/태그 반영)에서 다음 YouTube/Shorts 를 자동 재생. */
let _ytPlayer = null, _ytApiReady = false, _ytPendingId = null;

function _ensureYTApi() {
  if (_ytApiReady || (window.YT && window.YT.Player)) { _ytApiReady = true; return; }
  if (!document.getElementById('yt-iframe-api')) {
    const s = document.createElement('script');
    s.id = 'yt-iframe-api';
    s.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(s);
  }
}
/* YouTube API 가 로드되면 호출하는 전역 콜백 */
window.onYouTubeIframeAPIReady = function () {
  _ytApiReady = true;
  if (_ytPendingId) { const id = _ytPendingId; _ytPendingId = null; _playYouTube(id); }
};

function _playYouTube(videoId) {
  DOM.mediaPlaceholder.style.display = 'none';
  DOM.iframeBlocked.style.display = 'none';
  _setMediaSurface('yt');
  if (!(_ytApiReady && window.YT && window.YT.Player)) {
    _ytPendingId = videoId;   // API 로드 후 재생
    _ensureYTApi();
    return;
  }
  if (!_ytPlayer) {
    _ytPlayer = new YT.Player('yt-player', {
      videoId,
      playerVars: { autoplay: 1, playsinline: 1, rel: 0, modestbranding: 1 },
      events: {
        onReady:       e => { _setMediaSurface('yt'); e.target.playVideo(); },
        onStateChange: _onYTStateChange,
      }
    });
  } else {
    _ytPlayer.loadVideoById(videoId);   // 곧바로 재생
  }
}

function _onYTStateChange(e) {
  if (e.data === YT.PlayerState.ENDED && settings.autoplayNext) {
    _playNextInList();
  }
}

/* 현재 리소스 목록(DOM 순서 = 필터/검색/태그 반영) 에서 지금 영상 다음의
   첫 YouTube/Shorts 리소스를 재생. 없으면(끝) 멈춤. */
function _playNextInList() {
  const list  = DOM.resourceList || document.getElementById('resource-list');
  const ids   = [...list.querySelectorAll('.resource-item')].map(el => Number(el.dataset.id));
  const idx   = ids.indexOf(activeResId);
  if (idx === -1) return;   // 현재 영상이 목록에 없음(필터 변경 등) → 정지
  for (let i = idx + 1; i < ids.length; i++) {
    const r = RESOURCES.find(x => x.id === ids[i]);
    if (r && (r.type === 'youtube' || r.type === 'shorts')) { onResourceClick(r); return; }
  }
  showToast('⏹  플레이리스트 끝');   // 다음 YouTube 없음 → 멈춤
}

/* '연속 재생' 토글 */
function toggleAutoplayNext() {
  const on = !settings.autoplayNext;
  saveSetting('autoplayNext', on);
  _updateAutoplayBtn();
  showToast(on ? '⏭  연속 재생 켜짐' : '연속 재생 꺼짐');
}
function _updateAutoplayBtn() {
  const btn = document.getElementById('autoplay-toggle');
  if (btn) {
    btn.classList.toggle('active', !!settings.autoplayNext);
    btn.title = settings.autoplayNext ? '연속 재생 켜짐 (플레이리스트)' : '연속 재생 꺼짐';
  }
}

/* 리소스/URL 공통 오픈 — YouTube=플레이어, 그 외 임베드=iframe, 불가=오버레이. */
function _openMedia(rawUrl) {
  const url = toEmbedUrl(rawUrl);
  DOM.urlBar.value = url;
  DOM.mediaPlaceholder.style.display = 'none';
  DOM.iframeBlocked.style.display = 'none';

  const ytId = _youtubeId(url);
  if (ytId) {
    _playYouTube(ytId);                        // YouTube/Shorts → 플레이어(연속 재생 지원)
  } else if (_mediaEmbeddable(url)) {
    _setMediaSurface('iframe');                // Vimeo 등 일반 임베드
    DOM.mediaIframe.src = url;
  } else {
    _setMediaSurface('none');                  // 임베드 불가 → '새 탭에서 열기' 오버레이
    try { DOM.mediaIframe.src = 'about:blank'; } catch (_) {}
    DOM.iframeBlockedUrl.textContent = url;
    DOM.iframeBlocked.style.display = 'flex';
  }
}

/* ─── URL Bar ────────────────────────────────────────────────────── */
function loadUrl() {
  const raw = DOM.urlBar.value.trim();
  if (!raw) return;
  _openMedia(raw);
  _pushMediaHist({ resId: null, url: raw });
  switchView('media');
}

function openExternal() {
  const url = DOM.urlBar.value.trim();
  if (url) window.open(url, '_blank');
}

/* ─── 미디어 열람 기록 (웹 뒤로/앞으로) ───────────────────────────────
 * 웹 <iframe> 은 cross-origin 사이트의 내부 히스토리를 제어할 수 없으므로,
 * "미디어 뷰에서 열어본 영상/URL" 을 자체 스택으로 쌓아 ◀▶ 로 이전/다음
 * 미디어로 이동한다. (앱의 webview 뒤로가기와 사용 느낌 동일) */
let _mediaHist = [];          // [{ resId: number|null, url: string }]
let _mediaHistIdx = -1;
let _mediaNavigating = false; // 뒤로/앞으로 이동 중엔 새 기록을 쌓지 않음

function _pushMediaHist(entry) {
  if (_mediaNavigating) return;
  const cur = _mediaHist[_mediaHistIdx];
  if (cur && cur.url === entry.url && cur.resId === entry.resId) { _updateNavButtons(); return; }
  _mediaHist = _mediaHist.slice(0, _mediaHistIdx + 1);   // 앞쪽(forward) 기록 잘라냄
  _mediaHist.push(entry);
  _mediaHistIdx = _mediaHist.length - 1;
  _updateNavButtons();
}

function _navToHistEntry() {
  const e = _mediaHist[_mediaHistIdx];
  if (!e) return;
  _mediaNavigating = true;
  try {
    const r = (e.resId != null) ? RESOURCES.find(x => x.id === e.resId) : null;
    if (r) { activeResId = r.id; _updateActiveResourceHighlight(); _openMedia(r.url); switchView('media'); }
    else   { _openMedia(e.url); switchView('media'); }
  } finally { _mediaNavigating = false; }
  _updateNavButtons();
}

function mediaBack() {
  if (_mediaHistIdx <= 0) return;
  _mediaHistIdx--;
  _navToHistEntry();
}
function mediaForward() {
  if (_mediaHistIdx >= _mediaHist.length - 1) return;
  _mediaHistIdx++;
  _navToHistEntry();
}
function mediaReload() {
  /* YouTube 플레이어가 활성이면 현재 영상을 처음부터 다시 재생 */
  const yt = _ytEl();
  if (yt && yt.style.visibility === 'visible' && _ytPlayer) {
    try { _ytPlayer.seekTo(0); _ytPlayer.playVideo(); } catch (_) {}
    return;
  }
  const wv = DOM.mediaIframe;
  if (wv?.reload) { try { wv.reload(); } catch (_) {} return; }   // Electron <webview>
  /* 웹 <iframe>: src 재할당으로 강제 새로고침 (about:blank 제외) */
  try { if (wv && wv.src && wv.src !== 'about:blank') wv.src = wv.src; } catch (_) {}
}
function _updateNavButtons() {
  document.getElementById('nav-back')?.classList.toggle('disabled', _mediaHistIdx <= 0);
  document.getElementById('nav-forward')?.classList.toggle('disabled', _mediaHistIdx >= _mediaHist.length - 1);
}

/* ─── Note Save — Show Panel ────────────────────────────────────── */
function saveNote() {
  showSavePanel();
}

function showSavePanel() {
  const existing  = currentNoteKey ? notes[currentNoteKey] : null;
  selectedColor   = (existing && existing.color) || settings.defaultColor || '#0066FF';
  selectedEmoji   = (existing && existing.emoji) || settings.defaultEmoji || '';
  renderSavePanel();
  DOM.savePanel.classList.add('open');
}

function renderSavePanel() {
  /* Color chips */
  const colorsEl = document.getElementById('scp-colors');
  colorsEl.innerHTML = '';
  NOTE_COLORS.forEach(c => {
    const chip = document.createElement('div');
    chip.className = 'scp-color-chip' + (c === selectedColor ? ' active' : '');
    chip.style.background = c;
    chip.title = c;
    chip.addEventListener('click', () => { selectedColor = c; renderSavePanel(); });
    colorsEl.appendChild(chip);
  });
  /* Emoji chips */
  const emojisEl = document.getElementById('scp-emojis');
  emojisEl.innerHTML = '';
  NOTE_EMOJIS.forEach(em => {
    const chip = document.createElement('div');
    chip.className = 'scp-emoji-chip' + (em === selectedEmoji ? ' active' : '');
    chip.textContent = em;
    chip.addEventListener('click', () => {
      selectedEmoji = selectedEmoji === em ? '' : em;
      renderSavePanel();
    });
    emojisEl.appendChild(chip);
  });
}

function confirmSave() {
  DOM.savePanel.classList.remove('open');
  doSaveNote(selectedColor, selectedEmoji);
}

function cancelSave() {
  DOM.savePanel.classList.remove('open');
}

function doSaveNote(color, emoji) {
  const title = DOM.noteTitle.value || 'Untitled';
  const body  = DOM.noteEditor.value;
  if (!currentNoteKey) currentNoteKey = 'note_new_' + Date.now();

  if (currentNoteKey.startsWith('note_new_')) {
    const rid    = Date.now();
    const newRes = {
      id: rid, type: 'note', name: title,
      meta: `Note · ${new Date().toLocaleDateString('ko-KR')}`,
      url: null, icon: '✎', thumb: 'note',
      tags: [...currentTags]
    };
    RESOURCES.push(newRes);
    saveResources();
    const oldKey   = currentNoteKey;
    currentNoteKey = 'note_' + rid;
    activeResId    = rid;
    notes[currentNoteKey] = notes[oldKey];
    delete notes[oldKey];
    renderResources(activeFilter);
  } else {
    /* 기존 리소스의 제목·태그를 노트와 동기화 후 리스트 갱신 */
    const res = RESOURCES.find(r => r.id === Number(currentNoteKey.replace('note_', '')));
    if (res) {
      res.name = title;            // 제목 변경 시 우측 리스트에 반영
      res.tags = [...currentTags];
    }
    renderResources(activeFilter, DOM.searchInput?.value || '');
  }

  notes[currentNoteKey] = {
    title, body,
    saved: new Date().toISOString(),
    color: color || '#0066FF',
    emoji: emoji || '',
    tags:  [...currentTags],
    pinned: notes[currentNoteKey]?.pinned || false
  };
  invalidateBacklinkIndex();
  invalidateTagCache();
  saveAccountData();
  updateStatCounters();
  renderSidebarTags();

  DOM.saveStatus.textContent = T('noteSavedOk');
  DOM.saveStatus.style.color = 'var(--blue)';
  showToast(`💾  "${title}" saved locally`);
  setTimeout(() => {
    DOM.saveStatus.textContent = T('noteStatusAutoSave');
    DOM.saveStatus.style.color = '';
  }, 2500);
  updateNoteOutlinks();
  updateBacklinkPanel();
}

/* ─── Word Count ─────────────────────────────────────────────────── */
function updateWordCount() {
  const text  = DOM.noteEditor.value;
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  // 캐시된 요소 사용 (DOMContentLoaded 전 호출 대비 폴백)
  (DOM.wordCount || document.getElementById('word-count')).textContent = words;
  (DOM.charCount || document.getElementById('char-count')).textContent = text.length;
  (DOM.lineCount || document.getElementById('line-count')).textContent = text.split('\n').length;
}

function fmt(cmd) {
  const ta    = DOM.noteEditor;
  const start = ta.selectionStart;
  const end   = ta.selectionEnd;
  const sel   = ta.value.slice(start, end);
  const wrap  = { bold:'**', italic:'*', underline:'__' };
  const m     = wrap[cmd];
  if (!m) return;
  captureNoteUndo();

  const already = sel.startsWith(m) && sel.endsWith(m) && sel.length > m.length * 2;
  const replacement = already ? sel.slice(m.length, sel.length - m.length) : m + (sel || 'text') + m;
  ta.value = ta.value.slice(0, start) + replacement + ta.value.slice(end);
  const cursor = already ? start + replacement.length : start + m.length + (sel ? sel.length : 4);
  ta.selectionStart = sel ? start + m.length : start + m.length;
  ta.selectionEnd   = sel ? start + m.length + (already ? replacement.length : sel.length) : cursor;
  ta.focus();
  updateWordCount();
}

function insertMd(md) {
  const ta    = DOM.noteEditor;
  captureNoteUndo();
  const start = ta.selectionStart;
  const end   = ta.selectionEnd;
  ta.value    = ta.value.slice(0, start) + md + ta.value.slice(end);
  ta.selectionStart = ta.selectionEnd = start + md.length;
  ta.focus();
  updateWordCount();
}

function insertTimestamp() {
  const ts = new Date().toLocaleString('ko-KR', { hour12: false });
  insertMd(`\n[${ts}] `);
}

/* ─── 노트 에디터 되돌리기(undo) ──────────────────────────────────────
 * textarea의 value를 프로그램적으로(fmt/insertMd/insertBacklink 등) 덮어쓰면
 * 브라우저 네이티브 undo 스택이 깨져 Ctrl+Z가 동작하지 않음.
 * → 노트 단위(currentNoteKey 스코프) 수동 히스토리를 유지. 노트가 바뀌면
 *   자동으로 비워지므로 노트 로드 지점을 따로 건드릴 필요가 없음. */
let _noteUndo = [];
let _undoNoteKey = null;
let _lastUndoCapture = 0;
const NOTE_UNDO_LIMIT = 120;

function captureNoteUndo() {
  const ta = DOM.noteEditor;
  if (!ta) return;
  if (currentNoteKey !== _undoNoteKey) { _noteUndo = []; _undoNoteKey = currentNoteKey; }
  const top = _noteUndo[_noteUndo.length - 1];
  if (top && top.value === ta.value) return;       // 변화 없으면 스냅샷 생략
  _noteUndo.push({ value: ta.value, start: ta.selectionStart, end: ta.selectionEnd });
  if (_noteUndo.length > NOTE_UNDO_LIMIT) _noteUndo.shift();
}

/* 타이핑은 단어/구간 단위로 묶어 스냅샷(공백·줄바꿈·삭제·400ms 휴지 경계). */
function _onEditorBeforeInput(e) {
  const now = Date.now();
  const breakChar = e.data && /\s/.test(e.data);
  const isDelete  = e.inputType && e.inputType.startsWith('delete');
  if (now - _lastUndoCapture > 400 || breakChar || isDelete) captureNoteUndo();
  _lastUndoCapture = now;
}

function undoNote() {
  const ta = DOM.noteEditor;
  if (!ta) return;
  if (currentNoteKey !== _undoNoteKey || _noteUndo.length === 0) {
    showToast(T('noteUndoEmpty'));
    return;
  }
  const prev = _noteUndo.pop();
  ta.value = prev.value;
  ta.selectionStart = prev.start;
  ta.selectionEnd   = prev.end;
  ta.focus();
  updateWordCount();
  updateNoteOutlinks();
}

/* ─── Tag System ─────────────────────────────────────────────────── */
function normalizeTag(raw) {
  let t = raw.trim().toLowerCase().replace(/[^#a-z0-9가-힣_-]/g, '');
  if (!t.startsWith('#')) t = '#' + t;
  return t.length > 1 ? t : '';
}

function addTag(raw) {
  if (currentTags.length >= 10) { showToast('⚠  태그는 최대 10개까지 추가할 수 있습니다'); return; }
  const tag = normalizeTag(raw);
  if (!tag || currentTags.includes(tag)) return;
  currentTags.push(tag);
  renderTagPills();
}

function removeTag(tag) {
  currentTags = currentTags.filter(t => t !== tag);
  renderTagPills();
}

function renderTagPills() {
  const container = document.getElementById('note-tag-pills');
  if (!container) return;
  container.innerHTML = '';
  currentTags.forEach(tag => {
    const pill = document.createElement('div');
    pill.className = 'note-tag-pill';
    pill.innerHTML = `<span>${tag}</span><button class="note-tag-remove" onclick="removeTag('${tag.replace(/'/g,"\\'")}')">×</button>`;
    container.appendChild(pill);
  });
}

/* ─── All Tags (notes + resources) ──────────────────────────────── */
function invalidateTagCache() { _tagCache = null; }

function getAllTags() {
  if (_tagCache) return _tagCache;
  const tags = new Set();
  Object.values(notes).forEach(n  => (n.tags || []).forEach(t => tags.add(t)));
  RESOURCES.forEach(r => (r.tags || []).forEach(t => tags.add(t)));
  _tagCache = [...tags].sort();
  return _tagCache;
}

/* ─── Sidebar Tag Filter ─────────────────────────────────────────── */
function renderSidebarTags() {
  const wrap  = document.getElementById('sidebar-tags-wrap');
  const label = document.getElementById('tags-nav-label');
  if (!wrap || !label) return;

  const allTags = getAllTags();
  if (allTags.length === 0) {
    wrap.style.display = 'none';
    label.style.display = 'none';
    return;
  }
  wrap.style.display = '';
  label.style.display = '';
  wrap.innerHTML = '';

  /* Clear 버튼 — activeTags 있을 때만 */
  if (activeTags.length > 0) {
    const clearBtn = document.createElement('div');
    clearBtn.className = 'sidebar-tag-pill sidebar-tag-clear';
    clearBtn.textContent = '✕ Clear';
    clearBtn.addEventListener('click', () => { activeTags = []; renderSidebarTags(); applyTagFilter(); });
    wrap.appendChild(clearBtn);
  }

  allTags.forEach(tag => {
    const pill = document.createElement('div');
    pill.className = 'sidebar-tag-pill' + (activeTags.includes(tag) ? ' active' : '');
    pill.textContent = tag;
    pill.addEventListener('click', () => toggleSidebarTag(tag));
    wrap.appendChild(pill);
  });
}

function toggleSidebarTag(tag) {
  const idx = activeTags.indexOf(tag);
  if (idx === -1) activeTags.push(tag);
  else activeTags.splice(idx, 1);
  renderSidebarTags();
  applyTagFilter();
}

function applyTagFilter() {
  renderResources(activeFilter, DOM.searchInput.value);
  if (DOM.main && DOM.main.dataset.view === 'archive') renderArchive();
}

/* ─── Archive Color Filter ───────────────────────────────────────── */
function setArchiveColorFilter(el, color) {
  archiveColorFilter = color;
  document.querySelectorAll('.arc-filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderArchive();
}

/* ─── Search Autocomplete ────────────────────────────────────────── */
let _searchTimer = null;
function filterBySearch() {
  const q = DOM.searchInput.value;
  // 자동완성은 즉시 반응
  if (q.startsWith('#')) {
    renderTagAutocomplete(q.slice(1));
  } else {
    hideTagAutocomplete();
  }
  // 무거운 리스트 렌더는 디바운스 (타이핑 중 연속 재구성 방지)
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(() => renderResources(activeFilter, DOM.searchInput.value), 120);
}

function renderTagAutocomplete(prefix) {
  const allTags = getAllTags();
  const lower   = prefix.toLowerCase();
  const matches = lower
    ? allTags.filter(t => t.slice(1).startsWith(lower))
    : allTags;

  const el = document.getElementById('tag-autocomplete');
  if (!el || matches.length === 0) { hideTagAutocomplete(); return; }

  el.innerHTML = '';
  matches.forEach(tag => {
    const item = document.createElement('div');
    item.className = 'tag-ac-item';
    item.textContent = tag;
    item.addEventListener('mousedown', () => {
      DOM.searchInput.value = tag;
      hideTagAutocomplete();
      renderResources(activeFilter, tag);
    });
    el.appendChild(item);
  });
  el.classList.add('open');
}

function hideTagAutocomplete() {
  const el = document.getElementById('tag-autocomplete');
  if (el) el.classList.remove('open');
}

/* ─── Filters ────────────────────────────────────────────────────── */
function setPill(el, filter) {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  activeFilter = filter;
  renderResources(filter, DOM.searchInput.value);
}

/* ─── Add Resource (in-app modal — Electron은 prompt() 미지원) ────── */
/* 리소스 추가/수정 공용 모달의 모드. null = 추가, id = 해당 리소스 수정. */
let _editingResId = null;

/* 모달 헤더/버튼 라벨을 추가/수정 모드에 맞게 세팅 (열 때마다 호출). */
function _setResModalMode(editing) {
  const icon  = document.getElementById('ar-modal-icon');
  const title = document.getElementById('ar-modal-title');
  const desc  = document.getElementById('ar-modal-desc');
  const btn   = document.getElementById('ar-confirm-btn');
  if (icon)  icon.textContent  = editing ? '✎' : '＋';
  if (title) title.textContent = editing ? T('arEditTitle') : T('arTitle');
  if (desc)  desc.textContent  = editing ? T('arEditDesc')  : T('arDesc');
  if (btn)   btn.textContent   = editing ? T('arSave')      : T('arAdd');
}

function _openResModal() {
  const overlay = document.getElementById('add-res-overlay');
  if (!overlay) return;
  overlay.classList.add('visible');
  requestAnimationFrame(() => overlay.classList.add('open'));
  setTimeout(() => document.getElementById('ar-name')?.focus(), 60);
}

function addResource() {
  _editingResId = null;
  document.getElementById('ar-name').value = '';
  document.getElementById('ar-url').value  = '';
  document.getElementById('ar-tags').value = '';
  _setResModalMode(false);
  _openResModal();
}

function editResource(id) {
  const r = RESOURCES.find(x => x.id === id);
  if (!r) return;
  _editingResId = id;
  document.getElementById('ar-name').value = r.name || '';
  document.getElementById('ar-url').value  = r.url || '';
  document.getElementById('ar-tags').value = (r.tags || []).join(' ');
  _setResModalMode(true);
  _openResModal();
}

function closeAddResource() {
  const overlay = document.getElementById('add-res-overlay');
  if (!overlay) return;
  _editingResId = null;
  overlay.classList.remove('open');
  overlay.addEventListener('transitionend', () => overlay.classList.remove('visible'), { once: true });
}

function addResOverlayClickClose(e) {
  if (e.target === document.getElementById('add-res-overlay')) closeAddResource();
}

function confirmAddResource() {
  const nameEl = document.getElementById('ar-name');
  const name   = nameEl.value.trim();
  if (!name) { nameEl.focus(); showToast('⚠  이름을 입력하세요'); return; }

  const url     = document.getElementById('ar-url').value.trim();
  const tagsRaw = document.getElementById('ar-tags').value;
  const tags    = tagsRaw.split(/[\s,]+/).map(t => t.trim()).filter(Boolean).map(normalizeTag).filter(t => t.length > 1);

  const isYT     = url.includes('youtube') || url.includes('youtu.be');
  const isShorts = isYT && url.includes('/shorts/');
  const type     = isShorts ? 'shorts' : isYT ? 'youtube' : 'website';
  const iconMap  = { youtube:'▶', shorts:'⚡', website:'⊕' };
  const thumbMap = { youtube:'yt', shorts:'short', website:'web' };

  let meta = 'Local';
  if (url) {
    try { meta = new URL(url.startsWith('http') ? url : 'https://' + url).hostname; }
    catch (_) { meta = url; }
  }

  if (_editingResId != null) {
    /* ── 수정 모드: 기존 리소스 업데이트(id·순서·music 플래그 유지) ── */
    const r = RESOURCES.find(x => x.id === _editingResId);
    if (r) {
      Object.assign(r, {
        type, name, meta,
        url: url || null,
        icon: iconMap[type],
        thumb: thumbMap[type],
        tags
      });
      saveResources();
      invalidateTagCache();
      renderResources(activeFilter, DOM.searchInput?.value || '');
      renderSidebarTags();
      updateStatCounters();
      if (activeResId === r.id && r.url) loadResource(r);   // 열려있던 리소스면 새 URL 반영
      showToast(`✎  "${name}" ${T('resUpdated')}`);
    }
    closeAddResource();
    return;
  }

  const newR = {
    id: Date.now(), type, name, meta,
    url: url || null,
    icon: iconMap[type],
    thumb: thumbMap[type],
    tags
  };
  RESOURCES.push(newR);
  saveResources();
  invalidateTagCache();
  renderResources(activeFilter);
  renderSidebarTags();
  updateStatCounters();
  showToast(`＋ "${name}" added to list`);
  closeAddResource();
}

/* ─── 음악 분류 토글 ─────────────────────────────────────────────────
 * 리소스에 music 플래그를 달아 'Music' 필터로 따로 관리. 유튜브/웹사이트 등
 * 어떤 리소스든 음악으로 지정 가능. Music 필터에서 연속 재생을 켜면 음악 플레이리스트. */
function toggleMusic(id) {
  const r = RESOURCES.find(x => x.id === id);
  if (!r) return;
  r.music = !r.music;
  saveResources();
  renderResources(activeFilter, DOM.searchInput?.value || '');
  showToast(r.music ? '♪  음악으로 표시' : '음악 표시 해제');
}

/* ─── Resource Persistence ───────────────────────────────────────── */
function saveResources() {
  saveAccountData();
}

/* ─── Delete Resource ────────────────────────────────────────────── */
/* 삭제 전 확인 팝업을 띄우고, 확인 시에만 실제 삭제(_doDeleteResource) 실행. */
function deleteResource(id) {
  const r = RESOURCES.find(x => x.id === id);
  if (!r) return;
  showConfirm({
    icon: '🗑',
    title: T('confirmDelTitle'),
    message: T('confirmDelResMsg').replace('%s', r.name),
    okLabel: T('confirmDelOk'),
    onOk: () => _doDeleteResource(id)
  });
}

function _doDeleteResource(id) {
  const idx = RESOURCES.findIndex(r => r.id === id);
  if (idx === -1) return;
  const r = RESOURCES[idx];

  if (r.type === 'note') {
    delete notes['note_' + id];
    invalidateBacklinkIndex();
    invalidateTagCache();
    saveAccountData();
    if (currentNoteKey === 'note_' + id) {
      currentNoteKey = null;
      currentTags = [];
      renderTagPills();
      DOM.noteTitle.value = '';
      DOM.noteEditor.value = '';
      updateWordCount();
    }
  }

  if (activeResId === id) {
    activeResId = null;
    _hideWebview();
    DOM.mediaPlaceholder.style.display = '';
  }

  RESOURCES.splice(idx, 1);
  saveResources();
  invalidateTagCache();
  renderResources(activeFilter);
  renderSidebarTags();
  updateStatCounters();
  showToast(`🗑  "${r.name}" removed`);
}


/* ─── 범용 확인 팝업 ─────────────────────────────────────────────────
 * showConfirm({icon,title,message,okLabel,onOk}) — 확인 시 onOk 실행.
 * 설정 오버레이/모달 스타일을 재사용. Esc·바깥 클릭·✕·취소로 닫힘. */
let _confirmOnOk = null;
function showConfirm(opts) {
  const overlay = document.getElementById('confirm-overlay');
  if (!overlay) { if (opts.onOk) opts.onOk(); return; }   // 폴백: 모달 없으면 바로 실행
  const iconEl = document.getElementById('confirm-icon');
  const titleEl = document.getElementById('confirm-title');
  const msgEl  = document.getElementById('confirm-message');
  const okBtn  = document.getElementById('confirm-ok-btn');
  const cancelBtn = document.getElementById('confirm-cancel-btn');
  if (iconEl)  iconEl.textContent  = opts.icon || '⚠';
  if (titleEl) titleEl.textContent = opts.title || '';
  if (msgEl)   msgEl.textContent   = opts.message || '';
  if (okBtn)   okBtn.textContent   = opts.okLabel || T('confirmDelOk');
  if (cancelBtn) cancelBtn.textContent = T('arCancel');
  _confirmOnOk = opts.onOk || null;
  overlay.classList.add('visible');
  requestAnimationFrame(() => overlay.classList.add('open'));
  setTimeout(() => okBtn?.focus(), 60);
}
function closeConfirm() {
  const overlay = document.getElementById('confirm-overlay');
  if (!overlay) return;
  _confirmOnOk = null;
  overlay.classList.remove('open');
  overlay.addEventListener('transitionend', () => overlay.classList.remove('visible'), { once: true });
}
function confirmOk() {
  const cb = _confirmOnOk;
  closeConfirm();
  if (cb) cb();
}
function confirmOverlayClickClose(e) {
  if (e.target === document.getElementById('confirm-overlay')) closeConfirm();
}

/* ─── Toast ──────────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const t = DOM.toast;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ─── Settings ───────────────────────────────────────────────────── */
const SETTINGS_KEY = 'ta_settings';
const SETTINGS_DEFAULT = {
  theme: 'light', startupView: 'media',
  autoSave: 300, alwaysOnTop: false, lang: 'ko', cloudAutoSync: true,
  uiScale: 'auto', defaultColor: '#0066FF', defaultEmoji: '',
  autoplayNext: false   // YouTube 연속 재생(플레이리스트) 토글
};

let settings      = { ...SETTINGS_DEFAULT };
let autoSaveTimer = null;

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (raw) {
    try { settings = { ...SETTINGS_DEFAULT, ...JSON.parse(raw) }; } catch (_) {}
  }
  document.getElementById('tog-theme').checked            = settings.theme === 'light';
  document.getElementById('sel-startup').value            = settings.startupView;
  document.getElementById('sel-autosave').value           = String(settings.autoSave);
  document.getElementById('tog-ontop').checked            = settings.alwaysOnTop;
  // 저장된 항상-위 설정을 시작 시 창에 반영 (토스트 없이 조용히 적용)
  if (window.taAPI && window.taAPI.setAlwaysOnTop) window.taAPI.setAlwaysOnTop(settings.alwaysOnTop);

  const togAutoSync = document.getElementById('tog-autosync');
  if (togAutoSync) {
    togAutoSync.checked = settings.cloudAutoSync !== false;
    const lbl = document.getElementById('autosync-label');
    if (lbl) lbl.textContent = togAutoSync.checked ? T('settOnTopOn') : T('settOnTopOff');
  }

  const selScale = document.getElementById('sel-uiscale');
  if (selScale) selScale.value = settings.uiScale || 'auto';
  if (typeof applyScale === 'function') applyScale();   // 저장된 배율 반영
  renderDefaultNotePicker();

  _updateAutoplayBtn();   // 연속 재생 토글 버튼 상태 반영

  applyThemeClass(settings.theme);
  scheduleAutoSave(settings.autoSave);
  switchView(settings.startupView);
  applyLanguage(settings.lang || 'en');
  updateSyncUI();
}

function saveSetting(key, value) {
  settings[key] = value;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function openSettings() {
  const el = DOM.settingsOverlay;
  syncLogoutSetting();
  updateSyncUI();
  renderDefaultNotePicker();
  const cpBox = document.getElementById('change-pass-box');   // 열 때마다 비번 폼 접기
  if (cpBox) cpBox.style.display = 'none';
  setChangePassError('');
  el.classList.add('visible');
  requestAnimationFrame(() => el.classList.add('open'));
}

/* 자동 동기화 토글 */
function applyAutoSync_Cloud(on) {
  saveSetting('cloudAutoSync', on);
  const lbl = document.getElementById('autosync-label');
  if (lbl) lbl.textContent = on ? T('settOnTopOn') : T('settOnTopOff');
  showToast(`☁  ${T('settAutoSync')}: ${on ? 'ON' : 'OFF'}`);
}

/* 로그아웃 설정 행은 로그인 상태에서만 활성화 */
function syncLogoutSetting() {
  const loggedIn = !!currentUser;
  const btn  = document.getElementById('sett-logout-btn');
  const row  = document.getElementById('sett-logout-row');
  const desc = document.getElementById('sett-logout-desc');
  if (btn)  btn.disabled = !loggedIn;
  if (row)  row.classList.toggle('disabled', !loggedIn);
  if (desc) desc.textContent = loggedIn ? T('settLogoutDesc') : T('settLogoutLockedDesc');
}

function logoutFromSettings() {
  if (!currentUser) return;
  closeSettings();
  logout();
}
function closeSettings() {
  const el = DOM.settingsOverlay;
  el.classList.remove('open');
  el.addEventListener('transitionend', () => el.classList.remove('visible'), { once: true });
}
function overlayClickClose(e) {
  if (e.target === DOM.settingsOverlay) closeSettings();
}

/* ─── 사용 안내(가이드) 모달 ──────────────────────────────────────────
 * 설정 오버레이 스타일을 재사용하는 기능 설명 팝업. 상단 📖 버튼으로 열고,
 * 첫 입장 시 자동 1회 표시(localStorage 'ta_guide_seen'). 내용은 현재 언어로 렌더. */
const GUIDE_SECTIONS = [
  { icon:'✎', ko:['메모 작성', '제목·본문을 쓰고 저장하면 색상·이모지·태그를 지정할 수 있어요. 글자/단어 수 카운트와 마크다운 내보내기도 지원합니다.'],
              en:['Notes', 'Write a title and body, then save with a color, emoji, and tags. Character/word counts and Markdown export are supported too.'] },
  { icon:'🔗', ko:['백링크 — 메모 잇기', '메모 본문에 [[ 를 입력하면 메모 제목 자동완성이 뜹니다. ↑↓로 고르고 Enter(또는 항목 클릭)로 넣거나, [[메모 제목]]을 직접 적어도 돼요. 이렇게 연결하면 가리킨 메모의 우측 하단 백링크 패널에 "이 메모를 참조하는 메모"로 나타나고, 항목을 클릭하면 그 메모로 바로 이동합니다.'],
              en:['Backlinks — link notes', 'Type [[ in a note body to pop up title autocomplete. Pick with ↑↓ then Enter (or click an item), or just write [[Note Title]] yourself. The linked note then lists this one in its Backlinks panel (bottom-right), and clicking an entry jumps straight to that note.'] },
  { icon:'＋', ko:['리소스 추가', '＋ Add Resource로 YouTube·웹사이트 링크를 보관하세요. 우측 목록에서 클릭하면 미디어 뷰에서 열립니다.'],
              en:['Add resources', 'Use + Add Resource to save YouTube or website links. Click one in the right-hand list to open it in the media view.'] },
  { icon:'▶', ko:['미디어 뷰', 'YouTube·Vimeo는 앱 안에서 바로 재생돼요. 임베드가 막힌 사이트는 “새 탭에서 열기”로 폴백합니다. ◀▶ 버튼으로 이전·다음에 본 미디어를 오갈 수 있어요.'],
              en:['Media view', 'YouTube and Vimeo play right inside the app. Sites that block embedding fall back to “open in new tab”. Use ◀▶ to move between previously viewed media.'] },
  { icon:'⏭', ko:['연속 재생', '⏭ 토글을 켜면 영상이 끝났을 때 목록 순서대로 다음 YouTube가 자동 재생됩니다. 태그나 필터로 목록을 좁히면 나만의 플레이리스트가 돼요.'],
              en:['Autoplay (playlist)', 'Turn on the ⏭ toggle and the next YouTube in the list auto-plays when one ends. Filter the list by tag to build your own playlist.'] },
  { icon:'♪', ko:['음악 분류', '리소스에 마우스를 올리면 나타나는 ♪ 버튼으로 음악으로 표시하고, 상단 Music 필터로 모아볼 수 있어요.'],
              en:['Music', 'Hover over a resource and click the ♪ button to mark it as music, then gather them with the Music filter at the top.'] },
  { icon:'🔍', ko:['검색·태그·필터', '검색창(Ctrl+Shift+F)으로 제목·태그·본문을 찾고, 상단 필터(전체/음악/유튜브/숏츠/웹사이트/메모)와 사이드바 태그로 좁혀보세요.'],
              en:['Search, tags, filters', 'Find titles, tags, and note bodies with search (Ctrl+Shift+F), and narrow down with the top filters and sidebar tags.'] },
  { icon:'☁', ko:['클라우드 동기화', '로그인한 계정 기준으로 메모·리소스가 자동 저장·동기화됩니다. 다른 기기에서 같은 계정으로 로그인하면 그대로 이어집니다.'],
              en:['Cloud sync', 'Notes and resources auto-save and sync to your logged-in account. Log in with the same account on another device to pick up where you left off.'] },
  { icon:'⊡', ko:['집중 모드·단축키', 'Ctrl+F로 집중 모드를 켜고 끕니다. 전체 단축키 목록은 ? 키로 확인하세요.'],
              en:['Focus mode & shortcuts', 'Toggle focus mode with Ctrl+F. Press the ? key to see the full list of keyboard shortcuts.'] },
  { icon:'⚙', ko:['설정', '⚙ 설정에서 테마(다크/라이트)·언어(한/영)·자동 저장·기본 색상 등을 바꿀 수 있어요.'],
              en:['Settings', 'Open ⚙ Settings to change the theme (dark/light), language, auto-save interval, default colors, and more.'] },
];

function renderGuide() {
  const ko   = (currentLang === 'ko');
  const title = document.getElementById('guide-title');
  const desc  = document.getElementById('guide-desc');
  const body  = document.getElementById('guide-body');
  if (title) title.textContent = ko ? '사용 안내' : 'Guide';
  if (desc)  desc.textContent  = ko ? '주요 기능 한눈에 보기' : 'A quick tour of the main features';
  if (!body) return;
  const intro = ko
    ? 'Thought Archive의 주요 기능을 간단히 안내합니다. 이 창은 상단 📖 버튼으로 언제든 다시 열 수 있어요.'
    : 'A quick tour of Thought Archive. Reopen this anytime with the 📖 button in the top bar.';
  const rows = GUIDE_SECTIONS.map(s => {
    const [label, d] = ko ? s.ko : s.en;
    return `<div class="sett-row">
      <div class="sett-row-icon">${s.icon}</div>
      <div class="sett-row-info">
        <div class="sett-row-label">${label}</div>
        <div class="sett-row-desc">${d}</div>
      </div>
    </div>`;
  }).join('');
  body.innerHTML = `<p class="guide-intro">${intro}</p><div class="guide-rows">${rows}</div>`;
}

function openGuide() {
  const el = document.getElementById('guide-overlay');
  if (!el) return;
  renderGuide();
  el.classList.add('visible');
  requestAnimationFrame(() => el.classList.add('open'));
}
function closeGuide() {
  const el = document.getElementById('guide-overlay');
  if (!el) return;
  el.classList.remove('open');
  el.addEventListener('transitionend', () => el.classList.remove('visible'), { once: true });
}
function guideClickClose(e) {
  if (e.target === document.getElementById('guide-overlay')) closeGuide();
}

function applyTheme(isLight) {
  const mode = isLight ? 'light' : 'dark';
  document.getElementById('theme-label').textContent = isLight ? T('settThemeLight') : T('settThemeDark');
  applyThemeClass(mode);
  saveSetting('theme', mode);
}
function applyThemeClass(mode) {
  document.body.classList.toggle('light', mode === 'light');
}

function applyAutoSave(val) {
  const secs = Number(val);
  saveSetting('autoSave', secs);
  scheduleAutoSave(secs);
  const label = secs === 0 ? 'disabled' : secs < 120 ? `${secs}s` : `${secs/60}min`;
  showToast(`⏱  Auto-save: ${label}`);
}

function scheduleAutoSave(secs) {
  clearInterval(autoSaveTimer);
  if (secs > 0) {
    autoSaveTimer = setInterval(() => {
      const body = DOM.noteEditor.value;
      if (body.trim() && currentNoteKey) {
        const existing = notes[currentNoteKey] || {};
        doSaveNote(existing.color || '#0066FF', existing.emoji || '');
        DOM.saveStatus.textContent = T('noteAutoSaved');
        DOM.saveStatus.style.color = 'var(--purple)';
        setTimeout(() => {
          DOM.saveStatus.textContent = T('noteStatusAutoSave');
          DOM.saveStatus.style.color = '';
        }, 2000);
      }
    }, secs * 1000);
  }
}

function applyAlwaysOnTop(on) {
  document.getElementById('ontop-label').textContent = on ? T('settOnTopOn') : T('settOnTopOff');
  saveSetting('alwaysOnTop', on);
  if (window.taAPI && window.taAPI.setAlwaysOnTop) window.taAPI.setAlwaysOnTop(on);
  showToast(`⬡  Always on Top: ${on ? 'ON' : 'OFF'}`);
}

/* ─── UI 크기/배율 ───────────────────────────────────────────────── */
function applyUiScale(val) {
  saveSetting('uiScale', val);
  applyScale();
  showToast(`🔍  ${T('settUiScale')}: ${val === 'auto' ? T('settUiScaleAuto') : Math.round(parseFloat(val) * 100) + '%'}`);
}

/* ─── 기본 노트 색상/이모지 ──────────────────────────────────────── */
function renderDefaultNotePicker() {
  const colorsEl = document.getElementById('def-colors');
  const emojisEl = document.getElementById('def-emojis');
  if (colorsEl) {
    colorsEl.innerHTML = '';
    NOTE_COLORS.forEach(c => {
      const chip = document.createElement('div');
      chip.className = 'scp-color-chip' + (c === (settings.defaultColor || '#0066FF') ? ' active' : '');
      chip.style.background = c;
      chip.title = c;
      chip.addEventListener('click', () => { saveSetting('defaultColor', c); renderDefaultNotePicker(); });
      colorsEl.appendChild(chip);
    });
  }
  if (emojisEl) {
    emojisEl.innerHTML = '';
    NOTE_EMOJIS.forEach(em => {
      const chip = document.createElement('div');
      chip.className = 'scp-emoji-chip' + (em === settings.defaultEmoji ? ' active' : '');
      chip.textContent = em;
      chip.addEventListener('click', () => {
        saveSetting('defaultEmoji', settings.defaultEmoji === em ? '' : em);
        renderDefaultNotePicker();
      });
      emojisEl.appendChild(chip);
    });
  }
}

/* ─── 전체 데이터 백업 / 복원 ────────────────────────────────────── */
function exportAllData() {
  const dump = {
    app: 'thought-archive', version: '1.2.0',
    exportedAt: new Date().toISOString(),
    notes, resources: RESOURCES,
  };
  const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  const stamp = new Date().toISOString().slice(0, 10);
  a.download = `thought-archive-backup_${stamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`⬇  ${T('settBackupDone')}`);
}

function importAllData(input) {
  const file = input.files && input.files[0];
  input.value = '';                 // 같은 파일 재선택 허용
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let parsed;
    try { parsed = JSON.parse(reader.result); }
    catch { showToast(`⚠  ${T('settImportInvalid')}`); return; }
    if (!parsed || typeof parsed.notes !== 'object' || !Array.isArray(parsed.resources)) {
      showToast(`⚠  ${T('settImportInvalid')}`); return;
    }
    const n = Object.keys(parsed.notes).length, r = parsed.resources.length;
    if (!confirm(T('settImportConfirm').replace('{n}', n).replace('{r}', r))) return;
    // 적용 — 기존 데이터 덮어쓰기
    notes = parsed.notes;
    RESOURCES.length = 0;
    RESOURCES.push(...parsed.resources);
    currentNoteKey = null; activeResId = null; currentTags = [];
    if (DOM.noteTitle)  DOM.noteTitle.value  = '';
    if (DOM.noteEditor) DOM.noteEditor.value = '';
    invalidateBacklinkIndex(); invalidateTagCache();
    renderTagPills(); renderResources(activeFilter); renderSidebarTags();
    updateStatCounters(); updateWordCount(); updateBacklinkPanel();
    saveAccountData();              // 로컬 캐시 + 클라우드 푸시
    showToast(`⬆  ${T('settImportDone')}`);
  };
  reader.readAsText(file);
}

/* ─── 비밀번호 변경 (Supabase Auth) ──────────────────────────────── */
function toggleChangePassword() {
  const box = document.getElementById('change-pass-box');
  if (box) box.style.display = box.style.display === 'none' ? '' : 'none';
  setChangePassError('');
}
function setChangePassError(msg) {
  const el = document.getElementById('change-pass-error');
  if (el) { el.textContent = msg || ''; el.style.display = msg ? '' : 'none'; }
}
async function changePassword() {
  if (!sb || !currentUser) { setChangePassError(T('cpErrNotLoggedIn')); return; }
  const p1 = document.getElementById('cp-new')?.value || '';
  const p2 = document.getElementById('cp-confirm')?.value || '';
  if (p1.length < 6)   { setChangePassError(T('authErrPassShort')); return; }
  if (p1 !== p2)       { setChangePassError(T('authErrMismatch'));  return; }
  const btn = document.getElementById('cp-submit');
  if (btn) btn.disabled = true;
  try {
    const { error } = await sb.auth.updateUser({ password: p1 });
    if (error) throw error;
    document.getElementById('cp-new').value = '';
    document.getElementById('cp-confirm').value = '';
    toggleChangePassword();
    showToast(`🔑  ${T('cpDone')}`);
  } catch (err) {
    setChangePassError(authErrorText(err));
  } finally {
    if (btn) btn.disabled = false;
  }
}

function exportMarkdown() {
  const title = DOM.noteTitle.value || 'Untitled';
  const body  = DOM.noteEditor.value;
  if (!body.trim()) { showToast('⚠  Nothing to export — note is empty'); return; }
  const md   = `# ${title}\n\n${body}\n\n---\n_Exported from Thought Archive · ${new Date().toLocaleString()}_\n`;
  const blob = new Blob([md], { type: 'text/markdown' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/[^a-z0-9가-힣]/gi, '_')}.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`⬇  "${title}.md" downloaded`);
}

function resetSettings() {
  if (!confirm('Reset all settings to default? (Notes will not be deleted)')) return;
  settings = { ...SETTINGS_DEFAULT };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  loadSettings();
  showToast('↺  Settings reset to default');
}

/* ─── Stats ──────────────────────────────────────────────────────── */
function updateStatCounters() {
  const noteCount = Object.keys(notes).length;
  document.getElementById('stat-notes').textContent     = noteCount;
  document.getElementById('stat-resources').textContent = RESOURCES.length;
  const badge = document.getElementById('analytics-badge');
  if (badge) badge.textContent = noteCount;
  updateStatDeltas();
}

function updateStatDeltas() {
  const now     = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const dayAgo  = now - 24 * 60 * 60 * 1000;

  const thisWeek  = Object.values(notes).filter(n => n.saved && new Date(n.saved).getTime() > weekAgo).length;
  const noteDelta = document.querySelector('.stat-card:nth-child(1) .stat-delta');
  if (noteDelta) {
    if (thisWeek > 0) {
      noteDelta.textContent = `↑ ${thisWeek} this week`;
      noteDelta.className   = 'stat-delta up';
    } else {
      noteDelta.textContent = '— none this week';
      noteDelta.className   = 'stat-delta';
      noteDelta.style.color = 'var(--text-lo)';
    }
  }

  const nonNote   = RESOURCES.filter(r => r.type !== 'note').length;
  const resDelta  = document.querySelector('.stat-card:nth-child(2) .stat-delta');
  if (resDelta) {
    resDelta.textContent = nonNote > 0 ? `${nonNote} linked total` : '— add a resource';
    resDelta.className   = nonNote > 0 ? 'stat-delta up' : 'stat-delta';
    if (nonNote === 0) resDelta.style.color = 'var(--text-lo)';
  }
}

/* ─── Focus Mode ─────────────────────────────────────────────────── */
let focusMode = false;
function toggleFocusMode() {
  focusMode = !focusMode;
  document.body.classList.toggle('focus', focusMode);
  const btn = document.getElementById('focus-btn');
  btn.classList.toggle('focus-active', focusMode);
  btn.textContent = focusMode ? T('focusExit') : T('focus');
}

/* ─── 노트 에디터: Tab 들여쓰기 ──────────────────────────────────────
   메모 뷰에서 Tab은 포커스 이동(메뉴 이동) 대신 코드처럼 들여쓰기를 삽입.
   execCommand('insertText')를 써서 네이티브 undo/redo·input 이벤트를 보존한다. */
function _onEditorTab(e) {
  if (e.key !== 'Tab') return;
  // [[ 자동완성이 열려있으면 Tab으로 항목 확정 (포커스 이동 방지)
  const dd = DOM.backlinkDropdown;
  if (dd && dd.classList.contains('open')) {
    const items = dd.querySelectorAll('.bl-item');
    const idx = _blSelected >= 0 ? _blSelected : 0;
    if (items[idx]) { e.preventDefault(); insertBacklink(items[idx].dataset.title); return; }
  }
  e.preventDefault();
  if (e.shiftKey) _outdentEditor(e.target);
  else            _indentEditor(e.target);
}

function _indentEditor(ta) {
  const s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
  if (s !== en && v.slice(s, en).includes('\n')) {
    // 여러 줄 선택 → 각 줄 머리에 탭 추가
    const lineStart = v.lastIndexOf('\n', s - 1) + 1;
    const block = v.slice(lineStart, en);
    const out   = block.replace(/^/gm, '\t');
    ta.setSelectionRange(lineStart, en);
    document.execCommand('insertText', false, out);
    ta.setSelectionRange(lineStart, lineStart + out.length);
  } else {
    document.execCommand('insertText', false, '\t');   // 탭 1개 삽입
  }
}

function _outdentEditor(ta) {
  const s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
  const lineStart = v.lastIndexOf('\n', s - 1) + 1;
  const nl = v.indexOf('\n', en);
  const end = (en > s) ? en : (nl === -1 ? v.length : nl);
  const block = v.slice(lineStart, end);
  const out   = block.replace(/^(\t| {1,4})/gm, '');   // 각 줄 머리의 탭 또는 최대 4칸 제거
  if (out === block) return;
  ta.setSelectionRange(lineStart, end);
  document.execCommand('insertText', false, out);
  ta.setSelectionRange(lineStart, lineStart + out.length);
}

/* ─── Shortcut Help ──────────────────────────────────────────────── */
function showShortcutHelp() {
  const el = DOM.shortcutHelp;
  el.classList.add('visible');
  requestAnimationFrame(() => el.classList.add('open'));
  // 바깥(빈 화면) 클릭 시 닫기 — 여는 클릭이 즉시 닫지 않도록 다음 틱에 등록
  setTimeout(() => document.addEventListener('mousedown', _shOutsideClick), 0);
}
function _shOutsideClick(e) {
  if (!DOM.shortcutHelp.contains(e.target)) closeShortcutHelp();
}
function closeShortcutHelp() {
  const el = DOM.shortcutHelp;
  el.classList.remove('open');
  document.removeEventListener('mousedown', _shOutsideClick);
  el.addEventListener('transitionend', () => el.classList.remove('visible'), { once: true });
}

/* ─── 키보드 단축키 ──────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  const helpOpen = DOM.shortcutHelp.classList.contains('open');
  const inInput  = ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName);

  if (e.key === 'Escape') {
    const cfOverlay = document.getElementById('confirm-overlay');
    if (cfOverlay && cfOverlay.classList.contains('open')) { closeConfirm(); return; }
    const arOverlay = document.getElementById('add-res-overlay');
    if (arOverlay && arOverlay.classList.contains('open')) { closeAddResource(); return; }
    if (DOM.savePanel && DOM.savePanel.classList.contains('open')) { cancelSave(); return; }
    const guideEl = document.getElementById('guide-overlay');
    if (guideEl && guideEl.classList.contains('open')) { closeGuide(); return; }
    if (DOM.settingsOverlay.classList.contains('open'))  { closeSettings();     return; }
    if (helpOpen)                             { closeShortcutHelp(); return; }
    if (focusMode)                            { toggleFocusMode();   return; }
    return;
  }

  if (e.key === '?' && !inInput) { showShortcutHelp(); return; }

  if (e.ctrlKey && !e.altKey) {
    /* Shift 조합 시 e.key 가 대문자가 되므로(예: Ctrl+Shift+F → 'F') 소문자로 정규화.
       이렇게 안 하면 case 'f' 가 매칭되지 않아 '검색창 포커스'(Ctrl+Shift+F)가 동작하지 않음. */
    switch (e.key.toLowerCase()) {
      case 's':
        e.preventDefault();
        saveNote();
        break;
      case 'z':
        /* 노트 에디터에 포커스가 있을 때만 가로채 자체 undo 실행.
           (제목·태그·URL·검색 입력칸에선 네이티브 undo 유지) */
        if (!e.shiftKey && document.activeElement === DOM.noteEditor) {
          e.preventDefault();
          undoNote();
        }
        break;
      case 'm':
        e.preventDefault();
        switchView(currentView === 'media' ? 'note' : 'media');
        break;
      case 'k':
        e.preventDefault();
        switchView('media');
        setTimeout(() => { const ub = DOM.urlBar; ub.focus(); ub.select(); }, 50);
        break;
      case 'f':
        if (e.shiftKey) {
          e.preventDefault();
          DOM.searchInput.focus();
        } else {
          e.preventDefault();
          toggleFocusMode();
        }
        break;
      case ',':
        e.preventDefault();
        openSettings();
        break;
    }
  }
});

/* ─── Viewport Scale ─────────────────────────────────────────────── */
function applyScale() {
  const fit = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
  // settings.uiScale: 'auto' = 창에 맞춤(letterbox), 숫자 = 수동 배율
  const pref  = (typeof settings !== 'undefined' && settings.uiScale) || 'auto';
  const scale = (pref === 'auto') ? fit : (parseFloat(pref) || fit);
  document.documentElement.style.zoom = String(scale);
  // 수동 배율로 콘텐츠가 창보다 커지면 잘리지 않게 스크롤 허용
  const overflow = (scale * 1600 > window.innerWidth + 1 || scale * 900 > window.innerHeight + 1) ? 'auto' : 'hidden';
  document.body.style.overflow = overflow;
}
applyScale();
window.addEventListener('resize', applyScale);

/* ─── Session Timer ──────────────────────────────────────────────── */
let sessionSecs = 0;
setInterval(() => {
  if (document.hidden) return;
  sessionSecs++;
  const h = Math.floor(sessionSecs / 3600);
  const m = Math.floor((sessionSecs % 3600) / 60);
  document.getElementById('stat-time').textContent = h > 0 ? `${h}h ${m}m` : `${m}m`;
}, 1000);

/* ═══════════════════════════════════════════════════════════════
   BACKLINK SYSTEM
═══════════════════════════════════════════════════════════════ */

/* ─── 헬퍼 ────────────────────────────────────────────────────── */
function getNoteTitles() {
  return [...new Set(Object.values(notes).map(n => n.title).filter(Boolean))];
}

function parseBacklinks(body) {
  const re = /\[\[([^\]]+)\]\]/g;
  const result = [];
  let m;
  while ((m = re.exec(body)) !== null) result.push(m[1]);
  return [...new Set(result)];
}

function renderBodyWithLinks(body) {
  const titleMap = buildNoteTitleMap();
  return body
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\[\[([^\]]+)\]\]/g, (_, title) => {
      const cls = titleMap.has(title) ? 'bl-link' : 'bl-link broken';
      return `<span class="${cls}" data-title="${title.replace(/"/g, '&quot;')}">${title}</span>`;
    });
}

function buildBacklinkIndex() {
  if (_backlinkIndexCache) return _backlinkIndexCache;
  const idx = {};
  Object.entries(notes).forEach(([key, note]) => {
    parseBacklinks(note.body || '').forEach(title => {
      if (!idx[title]) idx[title] = [];
      idx[title].push(key);
    });
  });
  _backlinkIndexCache = idx;
  return idx;
}

function invalidateBacklinkIndex() {
  _backlinkIndexCache = null;
  _noteTitleMapCache  = null;
}

function buildNoteTitleMap() {
  if (_noteTitleMapCache) return _noteTitleMapCache;
  const m = new Map();
  Object.entries(notes).forEach(([key, note]) => {
    if (note.title) m.set(note.title, key);
  });
  _noteTitleMapCache = m;
  return m;
}

function getBacklinksTo(title) {
  const idx = buildBacklinkIndex();
  return (idx[title] || []).map(key => ({ key, note: notes[key] })).filter(x => x.note);
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ═══════════════════════════════════════════════════════════════
   Feature 1: [[ 자동완성
═══════════════════════════════════════════════════════════════ */
let _blSelected = -1;

function initBacklinkAutocomplete() {
  const editor = DOM.noteEditor;
  if (!editor) return;
  editor.addEventListener('input',  _onBlInput);
  editor.addEventListener('keydown', _onBlKeydown);
  editor.addEventListener('blur',   () => { setTimeout(hideBacklinkDropdown, 150); updateNoteOutlinks(); });
}

function _getBlQuery(editor) {
  const before = editor.value.slice(0, editor.selectionStart);
  const openIdx = before.lastIndexOf('[[');
  if (openIdx === -1) return null;
  const between = before.slice(openIdx + 2);
  if (between.includes(']]')) return null;
  return between;
}

function _onBlInput() {
  const query = _getBlQuery(this);
  updateNoteOutlinks();
  if (query === null) { hideBacklinkDropdown(); return; }
  const titles = getNoteTitles().filter(t =>
    query === '' || t.toLowerCase().includes(query.toLowerCase())
  );
  if (titles.length === 0) { hideBacklinkDropdown(); return; }
  _showBlDropdown(titles, query, this);
}

function _onBlKeydown(e) {
  const dd = DOM.backlinkDropdown;
  if (!dd || !dd.classList.contains('open')) return;
  const items = dd.querySelectorAll('.bl-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _blSelected = Math.min(_blSelected + 1, items.length - 1);
    _updateBlSelection(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _blSelected = Math.max(_blSelected - 1, 0);
    _updateBlSelection(items);
  } else if (e.key === 'Enter' && _blSelected >= 0 && items[_blSelected]) {
    e.preventDefault();
    insertBacklink(items[_blSelected].dataset.title);
  } else if (e.key === 'Escape') {
    hideBacklinkDropdown();
  }
}

function _updateBlSelection(items) {
  items.forEach((it, i) => it.classList.toggle('selected', i === _blSelected));
  if (items[_blSelected]) items[_blSelected].scrollIntoView({ block: 'nearest' });
}

function _showBlDropdown(titles, query, editor) {
  const dd = DOM.backlinkDropdown;
  if (!dd) return;
  _blSelected = -1;
  dd.innerHTML = '';

  titles.slice(0, 8).forEach(title => {
    const item = document.createElement('div');
    item.className = 'bl-item';
    item.dataset.title = title;
    const hl = query
      ? title.replace(new RegExp(`(${escapeRe(query)})`, 'gi'), '<b>$1</b>')
      : title;
    item.innerHTML = `<span class="bl-item-icon">✎</span><span>${hl}</span>`;
    item.addEventListener('mousedown', e => { e.preventDefault(); insertBacklink(title); });
    dd.appendChild(item);
  });

  /* 위치 계산: getBoundingClientRect는 app scale 반영값을 반환 → fixed 좌표 그대로 사용 */
  const r = editor.getBoundingClientRect();
  dd.style.left  = r.left + 'px';
  dd.style.top   = (r.bottom + 4) + 'px';
  dd.style.width = r.width + 'px';
  dd.classList.add('open');
}

function hideBacklinkDropdown() {
  const dd = DOM.backlinkDropdown;
  if (dd) dd.classList.remove('open');
  _blSelected = -1;
}

function insertBacklink(title) {
  const editor = DOM.noteEditor;
  if (!editor) return;
  captureNoteUndo();
  const val     = editor.value;
  const pos     = editor.selectionStart;
  const before  = val.slice(0, pos);
  const openIdx = before.lastIndexOf('[[');
  const inserted = `[[${title}]]`;
  editor.value = val.slice(0, openIdx) + inserted + val.slice(pos);
  const newPos = openIdx + inserted.length;
  editor.selectionStart = editor.selectionEnd = newPos;
  editor.focus();
  hideBacklinkDropdown();
  updateWordCount();
  updateNoteOutlinks();
}

/* ═══════════════════════════════════════════════════════════════
   Feature 2: Outgoing Links Preview (Note View 하단 row)
═══════════════════════════════════════════════════════════════ */
function updateNoteOutlinks() {
  const editor  = DOM.noteEditor;
  const row     = document.getElementById('note-outlinks-row');
  const pillsEl = document.getElementById('note-outlinks-pills');
  if (!editor || !row || !pillsEl) return;

  const links = parseBacklinks(editor.value);
  if (links.length === 0) { row.style.display = 'none'; return; }

  const titleMap = buildNoteTitleMap();
  row.style.display = 'flex';
  pillsEl.innerHTML = '';
  links.forEach(title => {
    const exists = titleMap.has(title);
    const pill   = document.createElement('span');
    pill.className = 'note-outlink-pill' + (exists ? '' : ' broken');
    pill.textContent = title;
    pill.title = exists ? 'Click to open' : 'Note not found';
    if (exists) pill.addEventListener('click', () => openNoteByTitle(title));
    pillsEl.appendChild(pill);
  });
}

function openNoteByTitle(title) {
  const key = buildNoteTitleMap().get(title);
  if (!key) { showToast(`⚠  "${title}" 노트를 찾을 수 없습니다`); return; }
  const note = notes[key];
  currentNoteKey = key;
  DOM.noteTitle.value  = note.title || '';
  DOM.noteEditor.value = note.body  || '';
  currentTags = (note.tags || []).slice();
  renderTagPills();
  updateWordCount();
  updateNoteOutlinks();
  updateBacklinkPanel();
  showToast(`→ "${title}" opened`);
}

/* ═══════════════════════════════════════════════════════════════
   Feature 3: Archive 카드 Backlink Count
═══════════════════════════════════════════════════════════════ */
function _enhanceArchiveCards() {
  const grid = document.getElementById('archive-grid');
  if (!grid) return;

  const idx      = buildBacklinkIndex();
  const titleMap = buildNoteTitleMap();

  grid.querySelectorAll('.archive-card').forEach(card => {
    const titleEl = card.querySelector('.archive-card-title');
    if (!titleEl) return;
    const title = titleEl.textContent.trim();

    /* ① body preview에 [[링크]] 인라인 렌더링 */
    const previewEl = card.querySelector('.archive-card-preview');
    if (previewEl) {
      const key = titleMap.get(title);
      if (key) {
        const body = notes[key].body || '';
        previewEl.innerHTML = renderBodyWithLinks(body) || '<em style="opacity:.4">Empty note</em>';
      }
    }

    /* ② bl-link 클릭 — capture phase로 card click보다 먼저 처리 */
    card.addEventListener('click', e => {
      if (e.target.classList.contains('bl-link') && !e.target.classList.contains('broken')) {
        e.stopPropagation();
        const homeNav = document.querySelector('[data-page="home"]');
        if (homeNav) setNav(homeNav);
        openNoteByTitle(e.target.dataset.title);
      }
    }, true);

    /* ③ backlink count badge */
    const bodyEl = card.querySelector('.archive-card-body');
    if (!bodyEl) return;
    const existing = bodyEl.querySelector('.archive-backlink-count');
    if (existing) existing.remove();

    const incomingKeys = idx[title] || [];
    const incoming = incomingKeys.map(key => ({ key, note: notes[key] })).filter(x => x.note);
    const count = incoming.length;

    const badge = document.createElement('div');
    badge.className = 'archive-backlink-count' + (count > 0 ? ' has-links' : '');
    badge.textContent = `← ${count} link${count !== 1 ? 's' : ''}`;
    if (count > 0) {
      badge.title = incoming.map(({note: n}) => n.title).join(', ');
      badge.addEventListener('click', e => {
        e.stopPropagation();
        _showBacklinkSourceToast(title, incoming);
      });
    }
    const dateEl = bodyEl.querySelector('.archive-card-date');
    if (dateEl) dateEl.insertAdjacentElement('beforebegin', badge);
  });
}

function _showBacklinkSourceToast(title, incoming) {
  const names = incoming.map(({note: n}) => `"${n.title}"`).join(', ');
  showToast(`← ${incoming.length}개 노트가 참조: ${names.slice(0, 60)}`);
  updateBacklinkPanel(title, incoming);
}

/* ═══════════════════════════════════════════════════════════════
   Right Panel Backlink Panel (always-on, replaces Activity Feed)
═══════════════════════════════════════════════════════════════ */
function updateBacklinkPanel(forTitle, forLinks) {
  const list       = document.getElementById('backlinks-list');
  const countBadge = document.getElementById('backlinks-count-badge');
  if (!list || !countBadge) return;

  const title = forTitle
    || (currentNoteKey && notes[currentNoteKey] ? notes[currentNoteKey].title : null)
    || DOM.noteTitle?.value?.trim();

  list.innerHTML = '';

  if (!title) {
    countBadge.textContent = '0';
    list.innerHTML = `<div class="backlinks-empty" data-i18n="backlinksNoNote">${T('backlinksNoNote')}</div>`;
    return;
  }

  const backlinks = forLinks || getBacklinksTo(title);
  countBadge.textContent = backlinks.length;

  if (backlinks.length === 0) {
    list.innerHTML = `<div class="backlinks-empty" data-i18n="backlinksEmpty">${T('backlinksEmpty')}</div>`;
    return;
  }

  backlinks.forEach(({ key, note }) => {
    const item = document.createElement('div');
    item.className = 'backlink-item';
    item.innerHTML = `
      <span class="backlink-item-icon">${note.emoji || '✎'}</span>
      <span>${note.title || 'Untitled'}</span>
    `;
    item.addEventListener('click', () => {
      const homeNav = document.querySelector('[data-page="home"]');
      if (homeNav) setNav(homeNav);
      currentNoteKey = key;
      DOM.noteTitle.value  = note.title || '';
      DOM.noteEditor.value = note.body  || '';
      currentTags = (note.tags || []).slice();
      renderTagPills();
      updateWordCount();
      updateNoteOutlinks();
      updateBacklinkPanel();
      switchView('note');
    });
    list.appendChild(item);
  });
}

/* ─── DOMContentLoaded: backlink init ───────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initBacklinkAutocomplete();
});

