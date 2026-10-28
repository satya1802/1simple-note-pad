// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Textarea, Label, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Edit } = Icons;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pad2 = (n) => (n < 10 ? "0" + n : String(n));

const fmtStamp = (d) =>
  `${pad2(d.getDate())} ${MONTHS[d.getMonth()]} ${d.getFullYear()}, ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;

const fmtClock = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;

const NOTE = {
  id: "nt_8f3a21c4",
  display_id: "NT-8F3A21",
  user_id: "usr_4412",
  owner_email: "satya.ganaraju@quorq.ai",
  title: "Q4 board deck — outline",
  created_at: new Date(2026, 8, 14, 8, 12),
  updated_at: new Date(2026, 9, 28, 14, 2),
};

const INITIAL_BODY = `Board deck — 12 Nov, 09:30, Room 4A (Marta, Devi, Tom H.)

Open with retention, not revenue. The 90-day number moved from 61% to 68% after the March onboarding rewrite, and that is the only slide anyone will remember.

Numbers to confirm with Devi before Friday:
- ARR 4.82M, up 11% on Q3
- Net new logos 143 (Q3: 118)
- Support backlog down to 212 tickets from 640
- Monthly churn 2.1%, flat for three quarters

Risks, say them out loud:
1. Two enterprise renewals land in the same December week.
2. We still have no second region. Ask for the 140k infra line.
3. Hiring: the fourth engineer slipped to February.

Ask: sign-off on the 140k infra line and one more support hire.
Do not re-open pricing. That is a January meeting.`;

const NEWER_BODY = `Board deck — 12 Nov, 09:30, Room 4A (Marta, Devi, Tom H.)

Open with retention, not revenue. The 90-day number moved from 61% to 68% after the March onboarding rewrite, and that is the only slide anyone will remember.

Numbers confirmed with Devi 28 Oct:
- ARR 4.86M, up 12% on Q3 (not 4.82M — she re-ran it)
- Net new logos 143 (Q3: 118)
- Support backlog down to 212 tickets from 640
- Monthly churn 2.1%, flat for three quarters

Risks, say them out loud:
1. Two enterprise renewals land in the same December week.
2. We still have no second region. Ask for the 140k infra line.
3. Hiring: the fourth engineer slipped to February.

Ask: sign-off on the 140k infra line and one more support hire.
Do not re-open pricing. That is a January meeting.`;

const INITIAL_HISTORY = [
  { id: "h4", when: new Date(2026, 9, 28, 14, 2), event: "Edited", device: "Chrome, macOS" },
  { id: "h3", when: new Date(2026, 9, 27, 19, 48), event: "Edited", device: "Safari, iPhone 15" },
  { id: "h2", when: new Date(2026, 9, 24, 11, 5), event: "Edited", device: "Chrome, macOS" },
  { id: "h1", when: new Date(2026, 8, 14, 8, 12), event: "Created", device: "Chrome, macOS" },
];

const TITLE_LIMIT = 120;

function deriveTitle(title, body) {
  const t = title.trim();
  if (t) return { text: t, source: "given" };
  const first = body.split("\n").map((l) => l.trim()).find(Boolean);
  if (first) return { text: first.length > 80 ? first.slice(0, 80) + "…" : first, source: "derived" };
  return { text: "Untitled note", source: "empty" };
}

function countOf(body) {
  const chars = body.length;
  const words = body.trim() ? body.trim().split(/\s+/).length : 0;
  const lines = body ? body.split("\n").length : 0;
  return { chars, words, lines };
}

export default function Screen() {
  const navigate = useNavigate();
  const INK = brand.primaryColor;
  const ACCENT = brand.accentColor;
  const MUTED = brand.neutralColor;
  const BG = brand.backgroundColor;
  const R = brand.radius;
  const HAIR = "rgba(17,17,17,0.14)";

  const [title, setTitle] = React.useState(NOTE.title);
  const [body, setBody] = React.useState(INITIAL_BODY);
  const [saved, setSaved] = React.useState({ title: NOTE.title, body: INITIAL_BODY });
  const [updatedAt, setUpdatedAt] = React.useState(NOTE.updated_at);
  const [history, setHistory] = React.useState(INITIAL_HISTORY);
  const [freshRow, setFreshRow] = React.useState(null);

  const [phase, setPhase] = React.useState("idle"); // idle | saving | deleting | deleted
  const [error, setError] = React.useState(null); // null | 'title' | 'conflict'
  const [stale, setStale] = React.useState({ open: true, by: "Safari, iPhone 15", at: new Date(2026, 9, 28, 15, 26) });
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const titleRef = React.useRef(null);
  const dialogRef = React.useRef(null);
  const cancelRef = React.useRef(null);
  const returnFocusRef = React.useRef(null);
  const timers = React.useRef([]);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const after = (ms, fn) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  const dirty = title !== saved.title || body !== saved.body;
  const derived = deriveTitle(title, body);
  const counts = countOf(body);
  const titleTooLong = title.length > TITLE_LIMIT;

  function save() {
    if (phase === "saving" || phase === "deleting") return;
    if (titleTooLong) {
      setError("title");
      if (titleRef.current) titleRef.current.focus();
      return;
    }
    if (stale.open) {
      setError("conflict");
      return;
    }
    setError(null);
    setPhase("saving");
    after(700, () => {
      const now = new Date();
      setSaved({ title, body });
      setUpdatedAt(now);
      const row = { id: "h" + now.getTime(), when: now, event: "Edited", device: "Chrome, macOS" };
      setHistory((h) => [row, ...h].slice(0, 6));
      setFreshRow(row.id);
      setPhase("idle");
      after(1600, () => setFreshRow(null));
    });
  }

  function loadLatest() {
    const now = new Date(2026, 9, 28, 15, 26);
    setBody(NEWER_BODY);
    setSaved({ title, body: NEWER_BODY });
    setUpdatedAt(now);
    setStale({ ...stale, open: false });
    setError(null);
    const row = { id: "hsync", when: now, event: "Synced in", device: "Safari, iPhone 15" };
    setHistory((h) => [row, ...h].slice(0, 6));
    setFreshRow(row.id);
    after(1600, () => setFreshRow(null));
  }

  function keepMine() {
    setStale({ ...stale, open: false });
    setError(null);
  }

  function openConfirm(e) {
    returnFocusRef.current = e && e.currentTarget ? e.currentTarget : null;
    setConfirmOpen(true);
  }

  function closeConfirm() {
    setConfirmOpen(false);
    if (returnFocusRef.current && returnFocusRef.current.focus) returnFocusRef.current.focus();
  }

  function confirmDelete() {
    setPhase("deleting");
    after(750, () => {
      setConfirmOpen(false);
      setPhase("deleted");
    });
  }

  React.useEffect(() => {
    if (!confirmOpen) return;
    const t = setTimeout(() => cancelRef.current && cancelRef.current.focus(), 20);
    return () => clearTimeout(t);
  }, [confirmOpen]);

  React.useEffect(() => {
    function onKey(e) {
      const k = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === "s") {
        e.preventDefault();
        if (!confirmOpen && phase !== "deleted") save();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function onDialogKey(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      if (phase !== "deleting") closeConfirm();
      return;
    }
    if (e.key === "Tab" && dialogRef.current) {
      const nodes = dialogRef.current.querySelectorAll("button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])");
      const list = Array.prototype.filter.call(nodes, (n) => !n.disabled);
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  const labelCls = "block text-[11px] font-bold uppercase tracking-[0.14em]";
  const fieldStyle = {
    border: `2px solid ${INK}`,
    borderRadius: R,
    backgroundColor: BG,
    color: INK,
    fontFamily: brand.fontBody,
  };

  const css = `
    .ob *:focus-visible { outline: 2px solid var(--ob-accent); outline-offset: 2px; }
    .ob-row-in { animation: obRowIn 320ms ease-out both; }
    .ob-panel-in { animation: obPanelIn 180ms ease-out both; }
    .ob-fade-in { animation: obFadeIn 140ms ease-out both; }
    .ob-pulse { animation: obPulse 1100ms ease-in-out infinite; }
    @keyframes obRowIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
    @keyframes obPanelIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    @keyframes obFadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes obPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
    @media (prefers-reduced-motion: reduce) {
      .ob *, .ob-row-in, .ob-panel-in, .ob-fade-in, .ob-pulse { animation: none !important; transition: none !important; }
    }
  `;

  /* ---------------------------------- deleted state ---------------------------------- */
  if (phase === "deleted") {
    return (
      <div
        className="ob w-full px-4 py-8 sm:px-8"
        style={{ "--ob-accent": ACCENT, backgroundColor: BG, color: INK, fontFamily: brand.fontBody }}
      >
        <style>{css}</style>
        <p className={labelCls} style={{ color: MUTED }}>
          Note · {NOTE.display_id}
        </p>
        <h1 className="mt-2 text-[30px] font-bold leading-tight tracking-tight sm:text-[34px]">Note deleted</h1>
        <div className="mt-8 max-w-2xl ob-panel-in" style={{ border: `2px solid ${INK}`, borderRadius: R }}>
          <Empty
            title={`“${deriveTitle(saved.title, saved.body).text}” is gone`}
            description="It has been removed from your account and from every device you're signed in on. Deleted notes are not recoverable."
            action={
              <Button
                onClick={() => navigate("notes")}
                className="h-11 px-5 text-sm font-bold uppercase tracking-[0.1em]"
                style={{ backgroundColor: INK, color: BG, borderRadius: R, border: `2px solid ${INK}` }}
              >
                Back to all notes
              </Button>
            }
          />
        </div>
      </div>
    );
  }

  /* ---------------------------------- editor ---------------------------------- */
  return (
    <div
      className="ob w-full px-4 py-8 sm:px-8"
      style={{ "--ob-accent": ACCENT, backgroundColor: BG, color: INK, fontFamily: brand.fontBody }}
    >
      <style>{css}</style>

      {/* Header */}
      <header className="border-b-2 pb-6" style={{ borderColor: INK }}>
        <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
          <div className="min-w-0 max-w-3xl">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate("notes")}
                className="-ml-2 h-8 gap-1.5 bg-transparent px-2 text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: MUTED, borderRadius: R, border: "none" }}
              >
                <Icons.ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                All notes
              </Button>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
                · {NOTE.display_id}
              </span>
            </div>

            <h1 className="mt-2 break-words text-[30px] font-bold leading-[1.15] tracking-tight sm:text-[34px]">
              {derived.text}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
              {derived.source === "derived" && (
                <Badge
                  className="rounded-none px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]"
                  style={{ backgroundColor: BG, color: INK, border: `2px solid ${INK}`, borderRadius: R }}
                >
                  Title from first line
                </Badge>
              )}
              {derived.source === "empty" && (
                <Badge
                  className="rounded-none px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]"
                  style={{ backgroundColor: BG, color: ACCENT, border: `2px solid ${ACCENT}`, borderRadius: R }}
                >
                  Untitled · no text yet
                </Badge>
              )}
              <p className="text-[13px]" style={{ color: MUTED, fontVariantNumeric: "tabular-nums" }}>
                Last edited {fmtStamp(updatedAt)} · Plain text · Private to {NOTE.owner_email}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex w-full flex-col items-start gap-3 sm:w-auto sm:items-end">
            <div
              className="flex h-8 items-center gap-2 px-2.5 text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{
                border: `2px solid ${phase === "saving" ? INK : dirty ? ACCENT : HAIR}`,
                borderRadius: R,
                color: phase === "saving" ? INK : dirty ? ACCENT : MUTED,
                fontVariantNumeric: "tabular-nums",
              }}
              aria-live="polite"
            >
              {phase === "saving" ? (
                <>
                  <span className="ob-pulse h-2 w-2" style={{ backgroundColor: INK }} aria-hidden="true" />
                  Saving to your account…
                </>
              ) : dirty ? (
                <>
                  <span className="h-2 w-2" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
                  Unsaved changes
                </>
              ) : (
                <>
                  <Icons.Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Saved {fmtClock(updatedAt)}
                </>
              )}
            </div>

            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
              <Button
                onClick={openConfirm}
                className="h-11 gap-2 bg-transparent px-4 text-sm font-bold uppercase tracking-[0.1em]"
                style={{ border: `2px solid ${ACCENT}`, color: ACCENT, borderRadius: R }}
              >
                <Icons.Trash className="h-4 w-4" aria-hidden="true" />
                Delete note
              </Button>
              <Button
                onClick={save}
                disabled={phase === "saving" || (!dirty && !stale.open)}
                className="h-11 gap-2 px-6 text-sm font-bold uppercase tracking-[0.1em] disabled:opacity-40"
                style={{
                  backgroundColor: INK,
                  color: BG,
                  border: `2px solid ${INK}`,
                  borderRadius: R,
                  transition: "opacity 150ms ease",
                }}
              >
                {phase === "saving" ? "Saving…" : "Save note"}
              </Button>
            </div>
            <p className="hidden text-[11px] sm:block" style={{ color: MUTED }}>
              Or press ⌘S / Ctrl+S
            </p>
          </div>
        </div>
      </header>

      {/* Conflict / stale banners */}
      {stale.open && (
        <div
          className="ob-panel-in mt-6 flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between"
          style={{ border: `2px solid ${INK}`, borderRadius: R }}
        >
          <div className="flex gap-3">
            <Icons.Clock className="mt-0.5 h-4 w-4 shrink-0" style={{ color: MUTED }} aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">Newer version waiting from {stale.by}</p>
              <p className="mt-1 max-w-xl text-[13px] leading-relaxed" style={{ color: MUTED, fontVariantNumeric: "tabular-nums" }}>
                You signed in on another device and edited this note at {fmtClock(stale.at)} today. Loading it replaces the
                text in this editor. Keeping yours overwrites the phone's copy on your next save.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Button
              onClick={loadLatest}
              className="h-10 px-4 text-[12px] font-bold uppercase tracking-[0.1em]"
              style={{ backgroundColor: INK, color: BG, border: `2px solid ${INK}`, borderRadius: R }}
            >
              Load latest
            </Button>
            <Button
              onClick={keepMine}
              className="h-10 bg-transparent px-4 text-[12px] font-bold uppercase tracking-[0.1em]"
              style={{ border: `2px solid ${INK}`, color: INK, borderRadius: R }}
            >
              Keep mine
            </Button>
          </div>
        </div>
      )}

      {error === "conflict" && (
        <div
          className="ob-panel-in mt-4 flex items-start gap-3 p-4"
          style={{ border: `2px solid ${ACCENT}`, borderRadius: R }}
        >
          <Icons.AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} aria-hidden="true" />
          <p className="text-[13px] leading-relaxed" style={{ color: INK }}>
            <span className="font-bold" style={{ color: ACCENT }}>
              Save blocked.
            </span>{" "}
            A newer version of this note exists on {stale.by}. Your text is untouched — choose <em>Load latest</em> or{" "}
            <em>Keep mine</em> above, then save again.
          </p>
        </div>
      )}

      {/* Body grid */}
      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Editor */}
        <section aria-labelledby="editor-h">
          <h2 id="editor-h" className="sr-only">
            Note text
          </h2>
          <div style={{ border: `2px solid ${INK}`, borderRadius: R }}>
            {/* Title row */}
            <div className="relative border-b-2 px-4 py-4 sm:px-5" style={{ borderColor: INK }}>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 top-0 hidden sm:block"
                style={{ left: 56, width: 2, backgroundColor: "rgba(194,65,12,0.3)" }}
              />
              <div className="sm:pl-[56px]">
                <div className="flex items-baseline justify-between gap-4">
                  <Label htmlFor="note-title" className={labelCls} style={{ color: MUTED }}>
                    Title <span className="font-normal normal-case tracking-normal">(optional)</span>
                  </Label>
                  {title.length > 80 && (
                    <span
                      className="text-[11px] font-bold"
                      style={{ color: titleTooLong ? ACCENT : MUTED, fontVariantNumeric: "tabular-nums" }}
                    >
                      {title.length}/{TITLE_LIMIT}
                    </span>
                  )}
                </div>
                <Input
                  id="note-title"
                  ref={titleRef}
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (error === "title" && e.target.value.length <= TITLE_LIMIT) setError(null);
                  }}
                  placeholder="Leave blank to use the first line"
                  aria-invalid={error === "title" ? "true" : "false"}
                  aria-describedby="title-help"
                  className="mt-2 h-11 w-full px-3 text-[17px] font-bold tracking-tight"
                  style={{ ...fieldStyle, borderColor: error === "title" ? ACCENT : INK }}
                />
                <p
                  id="title-help"
                  className="mt-2 text-[12px] leading-relaxed"
                  style={{ color: error === "title" ? ACCENT : MUTED }}
                >
                  {error === "title"
                    ? `Titles stop at ${TITLE_LIMIT} characters. Trim ${title.length - TITLE_LIMIT} to save — nothing you typed was discarded.`
                    : derived.source === "derived"
                    ? `No title set. The list will show “${derived.text}”.`
                    : derived.source === "empty"
                    ? "No title and no text yet. The list will show this note as Untitled."
                    : "This title is shown in your note list."}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="relative px-4 pt-4 sm:px-5">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 top-0 hidden sm:block"
                style={{ left: 56, width: 2, backgroundColor: "rgba(194,65,12,0.3)" }}
              />
              <div className="sm:pl-[56px]">
                <Label htmlFor="note-body" className={labelCls} style={{ color: MUTED }}>
                  Body
                </Label>
                <Textarea
                  id="note-body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  spellCheck="true"
                  placeholder="Start typing. The first line becomes the title unless you set one."
                  className="mt-2 w-full resize-y px-3 py-3 text-[15px] leading-[1.65]"
                  style={{ ...fieldStyle, minHeight: 360 }}
                />
              </div>
            </div>

            {/* Counts bar */}
            <div
              className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t px-4 py-3 sm:px-5"
              style={{ borderColor: HAIR }}
            >
              <dl className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.14em]">
                {[
                  ["Lines", counts.lines],
                  ["Words", counts.words],
                  ["Characters", counts.chars],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline gap-2">
                    <dt className="font-bold" style={{ color: MUTED }}>
                      {k}
                    </dt>
                    <dd className="font-bold" style={{ color: INK, fontVariantNumeric: "tabular-nums" }}>
                      {v.toLocaleString("en-GB")}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-[11px]" style={{ color: MUTED }}>
                Plain text only — no formatting is stored.
              </p>
            </div>
          </div>
        </section>

        {/* Rail */}
        <aside className="flex flex-col gap-8">
          <section aria-labelledby="record-h">
            <h2 id="record-h" className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
              Note record
            </h2>
            <div className="mt-3" style={{ border: `2px solid ${INK}`, borderRadius: R }}>
              <Table className="w-full text-[13px]" style={{ fontVariantNumeric: "tabular-nums" }}>
                <caption className="sr-only">Stored values for this note</caption>
                <TBody>
                  {[
                    ["Note ID", NOTE.display_id],
                    ["Owner", NOTE.owner_email],
                    ["Created", fmtStamp(NOTE.created_at)],
                    ["Last edited", fmtStamp(updatedAt)],
                    ["Edited on", "Chrome, macOS"],
                    ["Format", "Plain text"],
                  ].map(([k, v], i) => (
                    <TR key={k} style={{ borderTop: i === 0 ? "none" : `1px solid ${HAIR}` }}>
                      <TH
                        scope="row"
                        className="whitespace-nowrap px-3 py-2 text-left align-top text-[11px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: MUTED }}
                      >
                        {k}
                      </TH>
                      <TD className="break-all px-3 py-2 text-right align-top font-medium" style={{ color: INK }}>
                        {v}
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed" style={{ color: MUTED }}>
              Only {NOTE.owner_email} can open this note. It follows that account to any device you sign in from.
            </p>
          </section>

          <section aria-labelledby="history-h">
            <h2 id="history-h" className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
              Edit history
            </h2>
            <div className="mt-3 overflow-hidden" style={{ border: `2px solid ${INK}`, borderRadius: R }}>
              <Table className="w-full text-[12px]" style={{ fontVariantNumeric: "tabular-nums" }}>
                <caption className="sr-only">When this note was last edited and from which device</caption>
                <THead>
                  <TR style={{ borderBottom: `2px solid ${INK}` }}>
                    <TH scope="col" className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: INK }}>
                      When
                    </TH>
                    <TH scope="col" className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: INK }}>
                      Event
                    </TH>
                    <TH scope="col" className="px-3 py-2 text-right text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: INK }}>
                      Device
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {history.map((h, i) => (
                    <TR
                      key={h.id}
                      className={freshRow === h.id ? "ob-row-in" : ""}
                      style={{ borderTop: i === 0 ? "none" : `1px solid ${HAIR}` }}
                    >
                      <TD className="whitespace-nowrap px-3 py-2 font-medium" style={{ color: INK }}>
                        {fmtStamp(h.when)}
                      </TD>
                      <TD className="px-3 py-2" style={{ color: h.event === "Synced in" ? ACCENT : MUTED }}>
                        {h.event}
                      </TD>
                      <TD className="whitespace-nowrap px-3 py-2 text-right" style={{ color: MUTED }}>
                        {h.device}
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            </div>
          </section>

          <section aria-labelledby="delete-h">
            <h2 id="delete-h" className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
              Delete
            </h2>
            <div className="mt-3 p-4" style={{ border: `2px solid ${ACCENT}`, borderRadius: R }}>
              <p className="text-[13px] leading-relaxed" style={{ color: INK }}>
                Deleting removes this note from your account and from every device you are signed in on. It cannot be undone.
              </p>
              <Button
                onClick={openConfirm}
                className="mt-4 h-11 w-full gap-2 bg-transparent px-4 text-[12px] font-bold uppercase tracking-[0.1em]"
                style={{ border: `2px solid ${ACCENT}`, color: ACCENT, borderRadius: R }}
              >
                <Icons.Trash className="h-4 w-4" aria-hidden="true" />
                Delete this note
              </Button>
            </div>
          </section>
        </aside>
      </div>

      {/* Confirm dialog */}
      {confirmOpen && (
        <div
          className="ob-fade-in fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          style={{ backgroundColor: "rgba(17,17,17,0.55)" }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && phase !== "deleting") closeConfirm();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
            aria-describedby="confirm-desc"
            onKeyDown={onDialogKey}
            className="ob-panel-in w-full max-w-md p-6"
            style={{ backgroundColor: BG, border: `2px solid ${INK}`, borderRadius: R }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="confirm-title" className="text-[20px] font-bold tracking-tight">
                Delete this note?
              </h2>
              <Button
                onClick={closeConfirm}
                disabled={phase === "deleting"}
                aria-label="Close delete confirmation"
                className="h-8 w-8 shrink-0 bg-transparent p-0"
                style={{ border: `2px solid ${INK}`, color: INK, borderRadius: R }}
              >
                <Icons.X className="mx-auto h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <p id="confirm-desc" className="mt-3 text-[14px] leading-relaxed" style={{ color: MUTED }}>
              “{derived.text}” — {counts.words.toLocaleString("en-GB")} words, last edited {fmtStamp(updatedAt)} — will be
              removed from your account and from every signed-in device. There is no recovery.
            </p>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button
                ref={cancelRef}
                onClick={closeConfirm}
                disabled={phase === "deleting"}
                className="h-11 bg-transparent px-5 text-[12px] font-bold uppercase tracking-[0.1em]"
                style={{ border: `2px solid ${INK}`, color: INK, borderRadius: R }}
              >
                Keep note
              </Button>
              <Button
                onClick={confirmDelete}
                disabled={phase === "deleting"}
                className="h-11 gap-2 px-5 text-[12px] font-bold uppercase tracking-[0.1em] disabled:opacity-70"
                style={{ backgroundColor: ACCENT, color: BG, border: `2px solid ${ACCENT}`, borderRadius: R }}
              >
                {phase === "deleting" ? (
                  <>
                    <span className="ob-pulse h-2 w-2" style={{ backgroundColor: BG }} aria-hidden="true" />
                    Deleting…
                  </>
                ) : (
                  "Delete permanently"
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
