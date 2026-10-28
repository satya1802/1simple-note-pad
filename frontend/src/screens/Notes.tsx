// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Textarea, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Search, Check, X, ChevronRight, Clock, AlertCircle, CheckCircle } = Icons;

const NOW = new Date('2026-10-28T10:20:00');

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ACCOUNT_EMAIL = 'satya.ganaraju@quorq.ai';

const SEED_NOTES = [
  {
    id: 'n_8f21c4',
    user_id: 'u_3091',
    title: 'Standup — Tue 28 Oct',
    body: 'Standup — Tue 28 Oct\nMe: finished the read-replica cutover, two slow queries left on /notes.\nBlocked on: Ops need to approve the 02:00 maintenance window.\nAsk Priya whether the Frankfurt region still needs a separate bucket.',
    created_at: '2026-10-28T09:04:00',
    updated_at: '2026-10-28T09:12:00',
  },
  {
    id: 'n_71aa09',
    user_id: 'u_3091',
    title: '',
    body: 'Transfer 1,450 to Marshgate Lettings on the 1st\nReference MG-4471-B. Standing order failed last month because the reference was wrong — do it manually this time and then fix the mandate.',
    created_at: '2026-10-28T08:04:00',
    updated_at: '2026-10-28T08:04:00',
  },
  {
    id: 'n_55d130',
    user_id: 'u_3091',
    title: 'Q4 objectives — infra reliability',
    body: 'Q4 objectives — infra reliability\n1. p95 on note save under 180ms (currently 260ms).\n2. Zero unplanned downtime over the quarter; last incident 14 Sep, 41 minutes.\n3. Restore drill once a month, documented, with a named owner.\nDraft is due to Hannah on Thursday before the leadership review.',
    created_at: '2026-10-20T11:30:00',
    updated_at: '2026-10-27T18:47:00',
  },
  {
    id: 'n_2c99e8',
    user_id: 'u_3091',
    title: 'Books after Pachinko',
    body: 'Books after Pachinko\n- The Vegetarian, Han Kang\n- Stoner, John Williams (Dad keeps bringing it up)\n- A Thousand Splendid Suns\n- Something lighter for the Hakone train — maybe short stories.',
    created_at: '2026-10-11T21:02:00',
    updated_at: '2026-10-27T07:31:00',
  },
  {
    id: 'n_9b4471',
    user_id: 'u_3091',
    title: 'Call — Priya, Series B data room',
    body: 'Call — Priya, Series B data room\nThey want the churn cohort broken out by plan, monthly, 24 months back.\nLegal copies go in the folder marked "clean" only. No customer names in the export.\nFollow up Friday if the index is not shared by then.',
    created_at: '2026-10-26T16:05:00',
    updated_at: '2026-10-26T16:20:00',
  },
  {
    id: 'n_4ad302',
    user_id: 'u_3091',
    title: 'Hakone — ryokan options',
    body: 'Hakone — ryokan options\nGora Kadan: 48,000/night, private onsen, two nights minimum.\nHanaougi: 31,500/night, closer to the station, breakfast included.\nBook before 15 Nov or the autumn rates disappear. Ask about the 11:00 checkout.',
    created_at: '2026-10-25T20:15:00',
    updated_at: '2026-10-25T20:44:00',
  },
  {
    id: 'n_6e1b7f',
    user_id: 'u_3091',
    title: 'Sourdough — what finally worked',
    body: 'Sourdough — what finally worked\n20% starter, 78% hydration, 2.1% salt.\nFour sets of folds every 30 minutes, then cold retard overnight, 14 hours.\nBake 20 min lid on at 250C, 18 min lid off at 230C. Crumb was open, base no longer pale.',
    created_at: '2026-10-24T07:50:00',
    updated_at: '2026-10-24T09:06:00',
  },
  {
    id: 'n_0fc8a2',
    user_id: 'u_3091',
    title: 'Accounts to rotate credentials on',
    body: 'Accounts to rotate credentials on (the list, not the credentials)\n- Registrar, shared with Ops\n- Staging database, still on the 2024 password\n- The old status page account nobody owns\n- Analytics, after Marcus left on 9 Oct',
    created_at: '2026-10-22T13:12:00',
    updated_at: '2026-10-22T13:40:00',
  },
  {
    id: 'n_1d7e55',
    user_id: 'u_3091',
    title: 'Saturday market',
    body: 'Saturday market\nCoffee beans (the Ethiopian one, 250g), tomatoes, flat parsley, two lemons, anchovies, rye loaf if the queue is short. Cash — the fish stall still has no card reader.',
    created_at: '2026-10-21T18:22:00',
    updated_at: '2026-10-21T18:22:00',
  },
  {
    id: 'n_a3f618',
    user_id: 'u_3091',
    title: 'Interview debrief — Daniel Okonkwo, platform eng',
    body: 'Interview debrief — Daniel Okonkwo, platform eng\nStrong on migrations under load; walked through a dual-write cutover without notes.\nLess sure on observability — had not set up tracing himself.\nLeaning hire. Second opinion from Hannah before we send anything.',
    created_at: '2026-10-19T15:30:00',
    updated_at: '2026-10-19T16:11:00',
  },
  {
    id: 'n_c40b93',
    user_id: 'u_3091',
    title: 'Bike service notes',
    body: 'Bike service notes\nRear derailleur indexing drifts after about 200km. Cable is stretched, not the hanger.\nShop on Ratcliffe Street quoted 65 for cable, chain and a bleed. Booked for 7 Nov, 08:30.',
    created_at: '2026-10-17T19:40:00',
    updated_at: '2026-10-17T19:40:00',
  },
  {
    id: 'n_7520de',
    user_id: 'u_3091',
    title: 'Things to say at the review',
    body: 'Things to say at the review\nThe reliability work is invisible when it goes well — say the numbers out loud: 41 minutes of downtime all year, down from 6 hours.\nAsk about the second platform hire. Ask plainly, not at the end.',
    created_at: '2026-10-14T22:05:00',
    updated_at: '2026-10-15T08:18:00',
  },
];

const pad3 = (n) => String(n).padStart(3, '0');

const wordCount = (text) => {
  const t = (text || '').trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
};

const displayTitle = (note) => {
  if (note.title && note.title.trim()) return note.title.trim();
  const firstLine = (note.body || '').split('\n').find((l) => l.trim());
  if (firstLine) {
    const t = firstLine.trim();
    return t.length > 64 ? t.slice(0, 64).trimEnd() + '…' : t;
  }
  return 'Untitled note';
};

const previewLine = (note) => {
  const lines = (note.body || '').split('\n').map((l) => l.trim()).filter(Boolean);
  const rest = note.title && note.title.trim() ? lines : lines.slice(1);
  const text = (rest.length ? rest : lines).join(' ');
  return text.length > 110 ? text.slice(0, 110).trimEnd() + '…' : text;
};

const formatEdited = (iso) => {
  const d = new Date(iso);
  const diffMin = (NOW.getTime() - d.getTime()) / 60000;
  if (diffMin < 2) return 'Just now';
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const time = hh + ':' + mm;
  const yesterday = new Date(NOW.getTime() - 86400000);
  if (d.toDateString() === NOW.toDateString()) return 'Today ' + time;
  if (d.toDateString() === yesterday.toDateString()) return 'Yesterday ' + time;
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + time;
};

const matches = (note, q) => {
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  return (
    displayTitle(note).toLowerCase().includes(needle) ||
    (note.body || '').toLowerCase().includes(needle)
  );
};

const highlight = (text, q, accent) => {
  const needle = q.trim();
  if (!needle) return text;
  const parts = [];
  const lower = text.toLowerCase();
  const nl = needle.toLowerCase();
  let i = 0;
  let k = 0;
  while (i < text.length) {
    const found = lower.indexOf(nl, i);
    if (found === -1) {
      parts.push(text.slice(i));
      break;
    }
    if (found > i) parts.push(text.slice(i, found));
    parts.push(
      <mark
        key={'m' + k++}
        style={{ backgroundColor: 'transparent', color: accent, fontWeight: 600 }}
      >
        {text.slice(found, found + needle.length)}
      </mark>
    );
    i = found + needle.length;
  }
  return parts;
};

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const muted = brand.neutralColor;
  const radius = brand.radius;

  const [phase, setPhase] = React.useState('loading'); // loading | ready | locked
  const [notes, setNotes] = React.useState(SEED_NOTES);
  const [query, setQuery] = React.useState('');
  const [composerOpen, setComposerOpen] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const [draftError, setDraftError] = React.useState('');
  const [savedId, setSavedId] = React.useState(null);
  const [toast, setToast] = React.useState('');
  const [sync, setSync] = React.useState({ state: 'ok', label: 'Synced 2 min ago', attempts: 0 });
  const [signOutOpen, setSignOutOpen] = React.useState(false);

  const searchRef = React.useRef(null);
  const draftRef = React.useRef(null);
  const confirmRef = React.useRef(null);

  // Initial load of GET /notes
  React.useEffect(() => {
    const t = setTimeout(() => setPhase('ready'), 650);
    return () => clearTimeout(t);
  }, []);

  // "/" focuses search — desktop convention
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && phase === 'ready' && !signOutOpen) {
        const tag = (e.target && e.target.tagName) || '';
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        e.preventDefault();
        if (searchRef.current) searchRef.current.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [phase, signOutOpen]);

  // Dialog: escape to close, focus the confirm button
  React.useEffect(() => {
    if (!signOutOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setSignOutOpen(false);
    };
    document.addEventListener('keydown', onKey);
    if (confirmRef.current) confirmRef.current.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [signOutOpen]);

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  React.useEffect(() => {
    if (!savedId) return;
    const t = setTimeout(() => setSavedId(null), 2200);
    return () => clearTimeout(t);
  }, [savedId]);

  React.useEffect(() => {
    if (composerOpen && draftRef.current) draftRef.current.focus();
  }, [composerOpen]);

  const ordered = React.useMemo(
    () => notes.slice().sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)),
    [notes]
  );
  const visible = React.useMemo(() => ordered.filter((n) => matches(n, query)), [ordered, query]);

  const saveNote = (e) => {
    e.preventDefault();
    if (!draft.trim()) {
      setDraftError('There is nothing to save yet. Type the note first — plain text is all it keeps.');
      if (draftRef.current) draftRef.current.focus();
      return;
    }
    const firstLine = draft.split('\n').find((l) => l.trim()) || '';
    const stamp = new Date(NOW.getTime() + 1000).toISOString();
    const id = 'n_' + Math.random().toString(16).slice(2, 8);
    const note = {
      id,
      user_id: 'u_3091',
      title: firstLine.trim().slice(0, 64),
      body: draft,
      created_at: stamp,
      updated_at: stamp,
    };
    setNotes((prev) => [note, ...prev]);
    setDraft('');
    setDraftError('');
    setComposerOpen(false);
    setSavedId(id);
    setQuery('');
    setToast('Note saved to your account and synced.');
    setSync({ state: 'ok', label: 'Synced just now', attempts: sync.attempts });
  };

  const runSync = () => {
    setSync((s) => ({ ...s, state: 'syncing', label: 'Syncing…' }));
    const attempt = sync.attempts;
    setTimeout(() => {
      if (attempt === 0) {
        setSync({
          state: 'error',
          label: 'Last synced 2 min ago',
          attempts: 1,
        });
      } else {
        setSync({ state: 'ok', label: 'Synced just now', attempts: attempt + 1 });
      }
    }, 900);
  };

  const labelStyle = {
    fontSize: '10px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: muted,
    fontWeight: 600,
  };

  const focusCls =
    'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const keyframes = `
    @keyframes np-rowin { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
    @keyframes np-panel { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
    @keyframes np-fade { from { opacity: 0; } to { opacity: 1; } }
    .np-row-in { animation: np-rowin 260ms ease-out both; }
    .np-panel { animation: np-panel 180ms ease-out both; }
    .np-fade { animation: np-fade 200ms ease-out both; }
    @media (prefers-reduced-motion: reduce) {
      .np-row-in, .np-panel, .np-fade { animation: none !important; }
      .np-pulse { animation: none !important; }
    }
  `;

  // ---------- signed out ----------
  if (phase === 'locked') {
    return (
      <div
        className="min-h-full np-fade"
        style={{ backgroundColor: brand.backgroundColor, fontFamily: brand.fontBody, color: ink }}
      >
        <style>{keyframes}</style>
        <div className="mx-auto max-w-xl px-4 py-16 sm:py-24">
          <p style={labelStyle}>Session ended</p>
          <h1
            className="mt-3 text-[32px] sm:text-[38px] font-bold leading-[1.1]"
            style={{ fontFamily: brand.fontHeading, letterSpacing: '-0.03em' }}
          >
            You're signed out
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: muted, maxWidth: '58ch' }}>
            Your 12 notes stay on the server, private to {ACCOUNT_EMAIL}. Nothing is readable from this
            device until you sign in again — on this browser or any other.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => navigate('sign-in')}
              className={'h-11 px-6 text-[13px] font-semibold tracking-wide ' + focusCls}
              style={{
                backgroundColor: ink,
                color: brand.backgroundColor,
                borderRadius: radius,
                border: '2px solid ' + ink,
                outlineColor: accent,
              }}
            >
              Sign in
            </Button>
            <Button
              onClick={() => navigate('sign-up')}
              className={'h-11 px-6 text-[13px] font-semibold tracking-wide ' + focusCls}
              style={{
                backgroundColor: 'transparent',
                color: ink,
                borderRadius: radius,
                border: '2px solid ' + ink,
                outlineColor: accent,
              }}
            >
              Create an account
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const totalWords = notes.reduce((sum, n) => sum + wordCount(n.body), 0);

  return (
    <div
      className="min-h-full"
      style={{ backgroundColor: brand.backgroundColor, fontFamily: brand.fontBody, color: ink }}
    >
      <style>{keyframes}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p style={labelStyle}>Notepad · Account u_3091</p>
            <h1
              className="mt-2 text-[32px] sm:text-[40px] font-bold leading-[1.05]"
              style={{ fontFamily: brand.fontHeading, letterSpacing: '-0.035em' }}
            >
              My notes
            </h1>
            <p
              className="mt-3 text-[13px]"
              style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}
            >
              {notes.length} notes · {totalWords.toLocaleString()} words · ordered by last edited ·
              private to {ACCOUNT_EMAIL}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setSignOutOpen(true)}
              className={'h-10 px-4 text-[12px] font-semibold tracking-wide ' + focusCls}
              style={{
                backgroundColor: 'transparent',
                color: ink,
                border: '2px solid rgba(17,17,17,0.18)',
                borderRadius: radius,
                outlineColor: accent,
              }}
            >
              Sign out
            </Button>
            <Button
              onClick={() => {
                setComposerOpen(true);
                setDraftError('');
              }}
              className={'h-10 px-5 text-[13px] font-semibold tracking-wide inline-flex items-center gap-2 ' + focusCls}
              style={{
                backgroundColor: ink,
                color: brand.backgroundColor,
                border: '2px solid ' + ink,
                borderRadius: radius,
                outlineColor: accent,
              }}
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              New note
            </Button>
          </div>
        </div>

        <div className="mt-6" style={{ borderTop: '2px solid ' + ink }} />

        {/* Toast */}
        {toast ? (
          <div
            role="status"
            className="np-fade mt-4 flex items-start gap-3 px-4 py-3"
            style={{ border: '2px solid ' + ink, borderRadius: radius }}
          >
            <CheckCircle className="h-4 w-4 mt-[2px] shrink-0" aria-hidden="true" style={{ color: ink }} />
            <p className="text-[13px] leading-snug">{toast}</p>
            <button
              type="button"
              onClick={() => setToast('')}
              aria-label="Dismiss confirmation"
              className={'ml-auto shrink-0 p-1 ' + focusCls}
              style={{ color: muted, outlineColor: accent, borderRadius: radius }}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}

        {/* Composer — US-005: plain text only */}
        {composerOpen ? (
          <form
            onSubmit={saveNote}
            className="np-panel mt-5 p-4 sm:p-5"
            style={{ border: '2px solid ' + ink, borderRadius: radius }}
            aria-labelledby="composer-heading"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 id="composer-heading" style={labelStyle}>
                New note
              </h2>
              <p className="text-[11px]" style={{ color: muted }}>
                Plain text only — no formatting, folders or tags.
              </p>
            </div>

            <div className="mt-3">
              <Label htmlFor="note-body" className="block text-[12px] font-semibold" style={{ color: ink }}>
                Note text
              </Label>
              <Textarea
                id="note-body"
                ref={draftRef}
                rows={5}
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value);
                  if (draftError) setDraftError('');
                }}
                placeholder={'Start typing. The first line becomes the note’s title in this list.'}
                aria-invalid={draftError ? 'true' : 'false'}
                aria-describedby={draftError ? 'note-body-error' : 'note-body-hint'}
                className={'mt-2 w-full text-[14px] leading-relaxed p-3 ' + focusCls}
                style={{
                  border: '2px solid ' + (draftError ? accent : ink),
                  borderRadius: radius,
                  backgroundColor: brand.backgroundColor,
                  color: ink,
                  outlineColor: accent,
                  fontFamily: brand.fontBody,
                }}
              />
              {draftError ? (
                <p
                  id="note-body-error"
                  role="alert"
                  className="mt-2 flex items-start gap-2 text-[12px]"
                  style={{ color: accent }}
                >
                  <AlertCircle className="h-4 w-4 mt-[1px] shrink-0" aria-hidden="true" />
                  {draftError}
                </p>
              ) : (
                <p
                  id="note-body-hint"
                  className="mt-2 text-[11px]"
                  style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}
                >
                  {wordCount(draft)} words · saved to your account only
                </p>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Button
                type="submit"
                className={'h-10 px-5 text-[13px] font-semibold tracking-wide ' + focusCls}
                style={{
                  backgroundColor: ink,
                  color: brand.backgroundColor,
                  border: '2px solid ' + ink,
                  borderRadius: radius,
                  outlineColor: accent,
                }}
              >
                Save note
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setComposerOpen(false);
                  setDraftError('');
                }}
                className={'h-10 px-4 text-[13px] font-semibold tracking-wide ' + focusCls}
                style={{
                  backgroundColor: 'transparent',
                  color: ink,
                  border: '2px solid rgba(17,17,17,0.18)',
                  borderRadius: radius,
                  outlineColor: accent,
                }}
              >
                Cancel
              </Button>
              <span className="text-[11px]" style={{ color: muted }}>
                Your text stays here if the save does not go through.
              </span>
            </div>
          </form>
        ) : null}

        {/* Stale / sync failure — accent marks the exception */}
        {sync.state === 'error' ? (
          <div
            role="alert"
            className="np-fade mt-5 flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            style={{
              border: '2px solid ' + accent,
              borderRadius: radius,
              backgroundColor: brand.backgroundColor,
            }}
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="h-4 w-4 mt-[2px] shrink-0" aria-hidden="true" style={{ color: accent }} />
              <div>
                <p className="text-[13px] font-semibold" style={{ color: accent }}>
                  Sync failed — the server did not answer
                </p>
                <p className="text-[12px] mt-1" style={{ color: muted, maxWidth: '64ch' }}>
                  You are reading the copy stored on this device, last updated 2 minutes ago. Notes you
                  write now are kept and will be sent when the connection comes back.
                </p>
              </div>
            </div>
            <Button
              onClick={runSync}
              className={'h-9 px-4 text-[12px] font-semibold tracking-wide shrink-0 ' + focusCls}
              style={{
                backgroundColor: 'transparent',
                color: accent,
                border: '2px solid ' + accent,
                borderRadius: radius,
                outlineColor: accent,
              }}
            >
              Try again
            </Button>
          </div>
        ) : null}

        {/* Search */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:max-w-md">
            <Label htmlFor="note-search" className="block" style={labelStyle}>
              Search notes
            </Label>
            <div className="relative mt-2">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                aria-hidden="true"
                style={{ color: muted }}
              />
              <Input
                id="note-search"
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Keyword in any title or body"
                className={'h-11 w-full pl-9 pr-10 text-[14px] ' + focusCls}
                style={{
                  border: '2px solid ' + ink,
                  borderRadius: radius,
                  backgroundColor: brand.backgroundColor,
                  color: ink,
                  outlineColor: accent,
                }}
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    if (searchRef.current) searchRef.current.focus();
                  }}
                  aria-label="Clear search"
                  className={'absolute right-2 top-1/2 -translate-y-1/2 p-1.5 ' + focusCls}
                  style={{ color: ink, outlineColor: accent, borderRadius: radius }}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </div>

          <p
            className="text-[12px] sm:text-right"
            style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}
            aria-live="polite"
          >
            {phase === 'loading'
              ? 'Loading your notes…'
              : query.trim()
              ? visible.length + ' of ' + notes.length + ' notes match “' + query.trim() + '”'
              : 'Showing all ' + notes.length + ' notes · press / to search'}
          </p>
        </div>

        {/* Ledger */}
        <div className="mt-4" style={{ border: '2px solid ' + ink, borderRadius: radius }}>
          {phase === 'loading' ? (
            <div className="p-4" aria-busy="true" aria-live="polite">
              <p style={labelStyle}>Fetching notes for {ACCOUNT_EMAIL}</p>
              <ul className="mt-4 space-y-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-center gap-4 np-pulse animate-pulse">
                    <span className="h-3 w-8 shrink-0" style={{ backgroundColor: 'rgba(17,17,17,0.10)' }} />
                    <span
                      className="h-3 flex-1"
                      style={{
                        backgroundColor: 'rgba(17,17,17,0.10)',
                        maxWidth: 220 + ((i * 53) % 180) + 'px',
                      }}
                    />
                    <span className="h-3 w-20 shrink-0" style={{ backgroundColor: 'rgba(17,17,17,0.07)' }} />
                  </li>
                ))}
              </ul>
            </div>
          ) : notes.length === 0 ? (
            <div className="px-4 py-10">
              <Empty
                title="Nothing written yet"
                description="This is your private notepad — only you can read what goes in it. Start with the thing you are most likely to forget before Friday."
                action={
                  <Button
                    onClick={() => setComposerOpen(true)}
                    className={'h-10 px-5 text-[13px] font-semibold tracking-wide ' + focusCls}
                    style={{
                      backgroundColor: ink,
                      color: brand.backgroundColor,
                      border: '2px solid ' + ink,
                      borderRadius: radius,
                      outlineColor: accent,
                    }}
                  >
                    Write your first note
                  </Button>
                }
              />
            </div>
          ) : visible.length === 0 ? (
            <div className="px-4 py-10">
              <Empty
                title={'No note contains “' + query.trim() + '”'}
                description="Search looks at every title and every line of body text in your account. Try a shorter word, or clear the search to see all your notes again."
                action={
                  <Button
                    onClick={() => {
                      setQuery('');
                      if (searchRef.current) searchRef.current.focus();
                    }}
                    className={'h-10 px-5 text-[13px] font-semibold tracking-wide ' + focusCls}
                    style={{
                      backgroundColor: ink,
                      color: brand.backgroundColor,
                      border: '2px solid ' + ink,
                      borderRadius: radius,
                      outlineColor: accent,
                    }}
                  >
                    Clear search
                  </Button>
                }
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table className="w-full" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <caption className="sr-only">
                  Your notes, most recently edited first. Select a note to open it.
                </caption>
                <THead>
                  <TR style={{ borderBottom: '2px solid ' + ink }}>
                    <TH className="w-12 px-3 py-2 text-left" style={labelStyle} scope="col">
                      №
                    </TH>
                    <TH className="px-3 py-2 text-left" style={labelStyle} scope="col">
                      Title
                    </TH>
                    <TH className="hidden md:table-cell px-3 py-2 text-left" style={labelStyle} scope="col">
                      First lines
                    </TH>
                    <TH className="hidden sm:table-cell px-3 py-2 text-right w-20" style={labelStyle} scope="col">
                      Words
                    </TH>
                    <TH className="px-3 py-2 text-right w-36" style={labelStyle} scope="col">
                      Last edited
                    </TH>
                    <TH className="w-10 px-2 py-2" scope="col">
                      <span className="sr-only">Open</span>
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {visible.map((note, i) => {
                    const isNew = note.id === savedId;
                    return (
                      <TR
                        key={note.id}
                        onClick={() => navigate('note-detail')}
                        className={
                          'cursor-pointer transition-colors duration-150 hover:bg-black/[0.035] ' +
                          (isNew ? 'np-row-in' : '')
                        }
                        style={{
                          borderBottom: '1px solid rgba(17,17,17,0.14)',
                          borderLeft: isNew ? '3px solid ' + accent : '3px solid transparent',
                        }}
                      >
                        <TD
                          className="px-3 py-2.5 align-top text-[12px]"
                          style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}
                        >
                          {pad3(i + 1)}
                        </TD>
                        <TD className="px-3 py-2.5 align-top">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate('note-detail');
                            }}
                            className={'text-left text-[14px] font-semibold leading-snug hover:underline ' + focusCls}
                            style={{ color: ink, outlineColor: accent, borderRadius: radius }}
                          >
                            {highlight(displayTitle(note), query, accent)}
                          </button>
                          {isNew ? (
                            <Badge
                              className="ml-2 align-middle text-[10px] font-semibold px-1.5 py-0.5"
                              style={{
                                backgroundColor: 'transparent',
                                color: accent,
                                border: '1px solid ' + accent,
                                borderRadius: radius,
                                letterSpacing: '0.08em',
                              }}
                            >
                              NEW
                            </Badge>
                          ) : null}
                          <p className="md:hidden mt-1 text-[12px] leading-snug" style={{ color: muted }}>
                            {highlight(previewLine(note), query, accent)}
                          </p>
                        </TD>
                        <TD
                          className="hidden md:table-cell px-3 py-2.5 align-top text-[13px] leading-snug"
                          style={{ color: muted, maxWidth: '38ch' }}
                        >
                          {highlight(previewLine(note), query, accent)}
                        </TD>
                        <TD
                          className="hidden sm:table-cell px-3 py-2.5 align-top text-right text-[13px]"
                          style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}
                        >
                          {wordCount(note.body)}
                        </TD>
                        <TD
                          className="px-3 py-2.5 align-top text-right text-[13px] whitespace-nowrap"
                          style={{ color: ink, fontVariantNumeric: 'tabular-nums' }}
                        >
                          {formatEdited(note.updated_at)}
                        </TD>
                        <TD className="px-2 py-2.5 align-top text-right">
                          <ChevronRight className="inline-block h-4 w-4" aria-hidden="true" style={{ color: muted }} />
                        </TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </div>
          )}

          {/* Status strip */}
          <div
            className="flex flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderTop: '2px solid ' + ink }}
          >
            <p className="text-[11px]" style={{ color: muted }}>
              Signed in as {ACCOUNT_EMAIL} — these notes are visible to this account only, on every
              device you sign in from.
            </p>
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold"
                style={{
                  color: sync.state === 'error' ? accent : muted,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {sync.state === 'error' ? (
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                ) : sync.state === 'syncing' ? (
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {sync.state === 'error' ? 'Stale · ' + sync.label : sync.label}
              </span>
              <Button
                onClick={runSync}
                disabled={sync.state === 'syncing'}
                className={'h-8 px-3 text-[11px] font-semibold tracking-wide disabled:opacity-50 ' + focusCls}
                style={{
                  backgroundColor: 'transparent',
                  color: ink,
                  border: '2px solid rgba(17,17,17,0.18)',
                  borderRadius: radius,
                  outlineColor: accent,
                }}
              >
                {sync.state === 'syncing' ? 'Syncing…' : 'Sync now'}
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-[11px]" style={{ color: muted }}>
          Free to use. No payment details, ever.
        </p>
      </div>

      {/* Sign-out confirmation */}
      {signOutOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 np-fade"
          style={{ backgroundColor: 'rgba(17,17,17,0.45)' }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSignOutOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="signout-title"
            aria-describedby="signout-desc"
            className="w-full max-w-md p-6"
            style={{
              backgroundColor: brand.backgroundColor,
              border: '2px solid ' + ink,
              borderRadius: radius,
              boxShadow: '0 24px 48px rgba(17,17,17,0.22)',
            }}
          >
            <h2
              id="signout-title"
              className="text-[20px] font-bold"
              style={{ fontFamily: brand.fontHeading, letterSpacing: '-0.02em' }}
            >
              Sign out of this browser?
            </h2>
            <p id="signout-desc" className="mt-3 text-[13px] leading-relaxed" style={{ color: muted }}>
              Your session ends here and the note list closes. Everything stays saved to{' '}
              {ACCOUNT_EMAIL} and comes back the next time you sign in.
              {draft.trim() ? ' The note you are drafting has not been saved yet.' : ''}
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <Button
                onClick={() => setSignOutOpen(false)}
                className={'h-10 px-4 text-[13px] font-semibold tracking-wide ' + focusCls}
                style={{
                  backgroundColor: 'transparent',
                  color: ink,
                  border: '2px solid rgba(17,17,17,0.18)',
                  borderRadius: radius,
                  outlineColor: accent,
                }}
              >
                Stay signed in
              </Button>
              <Button
                ref={confirmRef}
                onClick={() => {
                  setSignOutOpen(false);
                  setPhase('locked');
                }}
                className={'h-10 px-5 text-[13px] font-semibold tracking-wide ' + focusCls}
                style={{
                  backgroundColor: ink,
                  color: brand.backgroundColor,
                  border: '2px solid ' + ink,
                  borderRadius: radius,
                  outlineColor: accent,
                }}
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
