// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Checkbox, Table, THead, TBody, TR, TH, TD } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { X, Users, FileText, Clock, AlertCircle, CheckCircle } = Icons;

const ACCOUNTS = [
  {
    email: 'maya.okafor@plaintext.app',
    password: 'cedar-lamp-71',
    name: 'Maya Okafor',
    notes: 34,
    lastDevice: 'MacBook Pro 14"',
    lastSeen: '27 Oct 2026, 18:22',
  },
  {
    email: 't.lindqvist@plaintext.app',
    password: 'harbour-902',
    name: 'Tomas Lindqvist',
    notes: 12,
    lastDevice: 'iPhone 15',
    lastSeen: '28 Oct 2026, 07:04',
  },
];

const TERMS = [
  ['Price', 'Free. No card, no plan, no paywall.'],
  ['Notes', 'Plain text only. No folders, no tags.'],
  ['Sync', 'Every device you sign in on, within seconds.'],
  ['Privacy', 'Only your account can open your notes.'],
  ['Session', 'Stays signed in 30 days unless you sign out.'],
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Screen() {
  const navigate = useNavigate();
  const INK = brand.primaryColor;
  const NEUTRAL = brand.neutralColor;
  const ACCENT = brand.accentColor;
  const BG = brand.backgroundColor;
  const R = brand.radius;

  const hexA = (hex, a) => {
    const h = hex.replace('#', '');
    const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
    const r = parseInt(n.slice(0, 2), 16);
    const g = parseInt(n.slice(2, 4), 16);
    const b = parseInt(n.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const RULE = `2px solid ${INK}`;
  const HAIR = `1px solid ${hexA(INK, 0.14)}`;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPw, setShowPw] = React.useState(false);
  const [keepSignedIn, setKeepSignedIn] = React.useState(true);
  const [capsOn, setCapsOn] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [authError, setAuthError] = React.useState(null);
  const [attempts, setAttempts] = React.useState(0);
  const [status, setStatus] = React.useState('idle'); // idle | checking | success
  const [session, setSession] = React.useState(null);
  const [noticeOpen, setNoticeOpen] = React.useState(true);
  const [resetOpen, setResetOpen] = React.useState(false);

  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const successRef = React.useRef(null);

  React.useEffect(() => {
    if (status !== 'checking') return undefined;
    const t = setTimeout(() => {
      const match = ACCOUNTS.find(
        (a) =>
          a.email.toLowerCase() === email.trim().toLowerCase() &&
          a.password === password
      );
      if (match) {
        setSession(match);
        setAuthError(null);
        setStatus('success');
      } else {
        setAttempts((n) => n + 1);
        setAuthError('That email and password don’t match an account.');
        setStatus('idle');
      }
    }, 900);
    return () => clearTimeout(t);
  }, [status, email, password]);

  React.useEffect(() => {
    if (status === 'success' && successRef.current) successRef.current.focus();
  }, [status]);

  const checking = status === 'checking';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checking) return;
    const next = {};
    const trimmed = email.trim();
    if (!trimmed) next.email = 'Enter your email address';
    else if (!EMAIL_RE.test(trimmed)) next.email = 'That isn’t a valid email address';
    if (!password) next.password = 'Enter your password';
    setErrors(next);
    setAuthError(null);
    if (next.email) {
      if (emailRef.current) emailRef.current.focus();
      return;
    }
    if (next.password) {
      if (passwordRef.current) passwordRef.current.focus();
      return;
    }
    setStatus('checking');
  };

  const signOut = () => {
    setSession(null);
    setStatus('idle');
    setPassword('');
    setErrors({});
    setAuthError(null);
    setAttempts(0);
    setNoticeOpen(true);
  };

  const labelCls = 'block text-[11px] font-bold uppercase tracking-[0.18em]';
  const inputStyle = {
    border: RULE,
    borderRadius: R,
    backgroundColor: BG,
    color: INK,
    fontFamily: brand.fontBody,
    height: '48px',
    width: '100%',
    padding: '0 12px',
    fontSize: '15px',
  };

  const css = `
    [data-pt] *:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: 2px; }
    [data-pt] input::placeholder { color: ${hexA(NEUTRAL, 0.7)}; }
    @keyframes ptRise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
    @keyframes ptFill { from { width: 4%; } to { width: 100%; } }
    @keyframes ptBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }
    [data-pt] .pt-rise { animation: ptRise 220ms ease-out both; }
    [data-pt] .pt-fill { animation: ptFill 1400ms cubic-bezier(.4,0,.2,1) forwards; }
    [data-pt] .pt-blink { animation: ptBlink 900ms steps(2, start) infinite; }
    [data-pt] .pt-btn { transition: opacity 140ms ease, background-color 140ms ease, color 140ms ease; }
    [data-pt] .pt-btn:hover:not(:disabled) { opacity: 0.86; }
    [data-pt] .pt-row:hover { background-color: ${hexA(INK, 0.04)}; }
    @media (prefers-reduced-motion: reduce) {
      [data-pt] .pt-rise, [data-pt] .pt-fill, [data-pt] .pt-blink { animation: none !important; }
      [data-pt] .pt-fill { width: 100%; }
    }
  `;

  return (
    <div
      data-pt
      className="min-h-screen w-full"
      style={{ backgroundColor: BG, color: INK, fontFamily: brand.fontBody }}
    >
      <style>{css}</style>

      {/* Masthead */}
      <header style={{ borderBottom: RULE }}>
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-baseline gap-3">
            <span
              className="text-[19px] font-bold uppercase leading-none tracking-[0.3em]"
              style={{ fontFamily: brand.fontHeading }}
            >
              Plaintext
            </span>
            <span
              className="hidden text-[10px] font-bold uppercase tracking-[0.22em] sm:inline"
              style={{ color: NEUTRAL }}
            >
              Plain-text notes, synced
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-[12px] sm:inline" style={{ color: NEUTRAL }}>
              No account yet?
            </span>
            <Button
              type="button"
              onClick={() => navigate('sign-up')}
              className="pt-btn h-10 px-4 text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{
                backgroundColor: BG,
                color: INK,
                border: RULE,
                borderRadius: R,
              }}
            >
              Create an account
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* ---------------- Primary column ---------------- */}
          <section
            className="col-span-1 py-10 lg:col-span-7 lg:py-14 lg:pr-12"
            style={{ borderRight: 'none' }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: NEUTRAL }}
            >
              Account access
            </p>
            <h1
              className="mt-3 text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]"
              style={{ fontFamily: brand.fontHeading }}
            >
              Sign in
            </h1>
            <p className="mt-4 max-w-[52ch] text-[14px] leading-[1.6]" style={{ color: NEUTRAL }}>
              Your notes are tied to this account and nothing else. Sign in and the same
              list appears on every device you use.
            </p>

            {status === 'success' && session ? (
              /* ---------------- Success ---------------- */
              <div
                className="pt-rise mt-8"
                style={{ border: RULE, borderRadius: R }}
                role="status"
              >
                <div
                  className="flex items-center gap-2 px-5 py-3"
                  style={{ borderBottom: RULE, backgroundColor: INK, color: BG }}
                >
                  <CheckCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                    Signed in
                  </span>
                </div>
                <div className="px-5 py-6">
                  <h2
                    className="text-[20px] font-bold tracking-[-0.02em]"
                    style={{ fontFamily: brand.fontHeading }}
                  >
                    Welcome back, {session.name.split(' ')[0]}.
                  </h2>
                  <p className="mt-2 text-[13px]" style={{ color: NEUTRAL }}>
                    Pulling{' '}
                    <span style={{ fontVariantNumeric: 'tabular-nums', color: INK }}>
                      {session.notes}
                    </span>{' '}
                    notes from the server, newest edit first.
                  </p>

                  <div
                    className="mt-5 h-[2px] w-full"
                    style={{ backgroundColor: hexA(INK, 0.14) }}
                    aria-hidden="true"
                  >
                    <div className="pt-fill h-[2px]" style={{ backgroundColor: INK }} />
                  </div>

                  <dl
                    className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-[13px] sm:grid-cols-2"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    <div className="flex justify-between gap-4" style={{ borderBottom: HAIR, paddingBottom: '8px' }}>
                      <dt style={{ color: NEUTRAL }}>Account</dt>
                      <dd className="text-right">{session.email}</dd>
                    </div>
                    <div className="flex justify-between gap-4" style={{ borderBottom: HAIR, paddingBottom: '8px' }}>
                      <dt style={{ color: NEUTRAL }}>Session</dt>
                      <dd className="text-right">
                        {keepSignedIn ? 'Kept 30 days' : 'Ends when browser closes'}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4" style={{ borderBottom: HAIR, paddingBottom: '8px' }}>
                      <dt style={{ color: NEUTRAL }}>Last device</dt>
                      <dd className="text-right">{session.lastDevice}</dd>
                    </div>
                    <div className="flex justify-between gap-4" style={{ borderBottom: HAIR, paddingBottom: '8px' }}>
                      <dt style={{ color: NEUTRAL }}>Last seen</dt>
                      <dd className="text-right">{session.lastSeen}</dd>
                    </div>
                  </dl>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Button
                      ref={successRef}
                      type="button"
                      onClick={() => navigate('notes')}
                      className="pt-btn h-12 px-6 text-[13px] font-bold uppercase tracking-[0.18em]"
                      style={{
                        backgroundColor: INK,
                        color: BG,
                        border: RULE,
                        borderRadius: R,
                      }}
                    >
                      Open my notes
                    </Button>
                    <Button
                      type="button"
                      onClick={signOut}
                      className="pt-btn h-12 px-5 text-[13px] font-bold uppercase tracking-[0.18em]"
                      style={{
                        backgroundColor: BG,
                        color: INK,
                        border: RULE,
                        borderRadius: R,
                      }}
                    >
                      Not you? Sign out
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* ---------------- Form ---------------- */
              <div className="mt-8">
                {noticeOpen && (
                  <div
                    className="pt-rise mb-6 flex items-start gap-3 px-4 py-3"
                    style={{ border: RULE, borderRadius: R }}
                  >
                    <Clock className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em]">
                        Session ended
                      </p>
                      <p className="mt-1 text-[13px] leading-[1.55]" style={{ color: NEUTRAL }}>
                        You signed out of this browser at{' '}
                        <span style={{ fontVariantNumeric: 'tabular-nums', color: INK }}>
                          14:02
                        </span>
                        . Your notes stay on the server — they come back the moment you
                        sign in.
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="Dismiss session notice"
                      onClick={() => setNoticeOpen(false)}
                      className="pt-btn -mr-1 -mt-1 flex h-11 w-11 items-center justify-center"
                      style={{ color: NEUTRAL, borderRadius: R }}
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}

                {authError && (
                  <div
                    role="alert"
                    className="pt-rise mb-6 flex items-start gap-3 px-4 py-3"
                    style={{ border: `2px solid ${ACCENT}`, borderRadius: R }}
                  >
                    <AlertCircle
                      className="mt-[2px] h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="text-[11px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: ACCENT }}
                      >
                        Sign-in failed
                      </p>
                      <p className="mt-1 text-[13px] leading-[1.55]">
                        {authError} We kept what you typed — check the address, then try
                        the password again.
                      </p>
                      {attempts >= 3 && (
                        <p className="mt-2 text-[13px] leading-[1.55]" style={{ color: NEUTRAL }}>
                          <span style={{ fontVariantNumeric: 'tabular-nums', color: INK }}>
                            {attempts}
                          </span>{' '}
                          attempts failed on this browser. Caps Lock is the usual culprit.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6">
                    {/* Email */}
                    <div>
                      <div className="flex items-baseline justify-between gap-4">
                        <Label htmlFor="signin-email" className={labelCls} style={{ color: INK }}>
                          <span style={{ color: NEUTRAL }}>01 /</span> Email address
                        </Label>
                        {errors.email && (
                          <span
                            id="signin-email-error"
                            className="text-[11px] font-bold uppercase tracking-[0.14em]"
                            style={{ color: ACCENT }}
                          >
                            {errors.email}
                          </span>
                        )}
                      </div>
                      <Input
                        ref={emailRef}
                        id="signin-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="you@company.com"
                        value={email}
                        disabled={checking}
                        aria-invalid={errors.email ? 'true' : undefined}
                        aria-describedby={errors.email ? 'signin-email-error' : undefined}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                        }}
                        className="mt-2"
                        style={{
                          ...inputStyle,
                          borderColor: errors.email ? ACCENT : INK,
                          opacity: checking ? 0.6 : 1,
                        }}
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <div className="flex items-baseline justify-between gap-4">
                        <Label htmlFor="signin-password" className={labelCls} style={{ color: INK }}>
                          <span style={{ color: NEUTRAL }}>02 /</span> Password
                        </Label>
                        {errors.password && (
                          <span
                            id="signin-password-error"
                            className="text-[11px] font-bold uppercase tracking-[0.14em]"
                            style={{ color: ACCENT }}
                          >
                            {errors.password}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex items-stretch gap-2">
                        <Input
                          ref={passwordRef}
                          id="signin-password"
                          name="password"
                          type={showPw ? 'text' : 'password'}
                          autoComplete="current-password"
                          placeholder="Your password"
                          value={password}
                          disabled={checking}
                          aria-invalid={errors.password ? 'true' : undefined}
                          aria-describedby={
                            errors.password ? 'signin-password-error' : 'signin-password-hint'
                          }
                          onKeyUp={(e) =>
                            setCapsOn(
                              typeof e.getModifierState === 'function' &&
                                e.getModifierState('CapsLock')
                            )
                          }
                          onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password)
                              setErrors((p) => ({ ...p, password: undefined }));
                          }}
                          className="flex-1"
                          style={{
                            ...inputStyle,
                            borderColor: errors.password ? ACCENT : INK,
                            opacity: checking ? 0.6 : 1,
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() => setShowPw((v) => !v)}
                          aria-pressed={showPw}
                          className="pt-btn h-12 shrink-0 px-4 text-[11px] font-bold uppercase tracking-[0.16em]"
                          style={{
                            backgroundColor: BG,
                            color: INK,
                            border: RULE,
                            borderRadius: R,
                          }}
                        >
                          {showPw ? 'Hide' : 'Show'}
                        </Button>
                      </div>
                      <p
                        id="signin-password-hint"
                        className="mt-2 text-[12px]"
                        style={{ color: capsOn ? ACCENT : NEUTRAL }}
                      >
                        {capsOn
                          ? 'Caps Lock is on — passwords are case sensitive.'
                          : 'Passwords are case sensitive.'}
                      </p>
                    </div>

                    {/* Persistent session */}
                    <div
                      className="flex items-start gap-3 px-4 py-3"
                      style={{ border: HAIR, borderRadius: R }}
                    >
                      <Checkbox
                        id="keep-signed-in"
                        checked={keepSignedIn}
                        disabled={checking}
                        onChange={(e) =>
                          setKeepSignedIn(
                            e && e.target ? e.target.checked : !keepSignedIn
                          )
                        }
                        className="mt-[2px]"
                        style={{ accentColor: INK }}
                      />
                      <div>
                        <Label
                          htmlFor="keep-signed-in"
                          className="text-[13px] font-bold"
                          style={{ color: INK }}
                        >
                          Keep me signed in on this device
                        </Label>
                        <p className="mt-1 text-[12px] leading-[1.5]" style={{ color: NEUTRAL }}>
                          Your session lasts{' '}
                          <span style={{ fontVariantNumeric: 'tabular-nums' }}>30</span> days,
                          so notes stay in sync without signing in again. Leave it off on
                          shared computers.
                        </p>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <Button
                        type="submit"
                        disabled={checking}
                        className="pt-btn h-14 w-full px-8 text-[13px] font-bold uppercase tracking-[0.2em] sm:w-auto"
                        style={{
                          backgroundColor: INK,
                          color: BG,
                          border: RULE,
                          borderRadius: R,
                          opacity: checking ? 0.7 : 1,
                          cursor: checking ? 'progress' : 'pointer',
                        }}
                      >
                        {checking ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="pt-blink">■</span> Checking credentials
                          </span>
                        ) : (
                          'Sign in to my notes'
                        )}
                      </Button>
                      <button
                        type="button"
                        onClick={() => setResetOpen((v) => !v)}
                        aria-expanded={resetOpen}
                        aria-controls="reset-panel"
                        className="pt-btn text-[13px] font-bold underline underline-offset-4"
                        style={{ color: NEUTRAL, padding: '12px 0' }}
                      >
                        Forgot your password?
                      </button>
                    </div>
                  </div>
                </form>

                {resetOpen && (
                  <div
                    id="reset-panel"
                    className="pt-rise mt-6 flex items-start gap-3 px-4 py-3"
                    style={{ border: HAIR, borderRadius: R }}
                  >
                    <FileText className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em]">
                        Password reset
                      </p>
                      <p className="mt-1 max-w-[58ch] text-[13px] leading-[1.55]" style={{ color: NEUTRAL }}>
                        Reset links come from the account desk. Email{' '}
                        <span style={{ color: INK }}>help@plaintext.app</span> from the
                        address on the account and a single-use link arrives within the
                        hour. It expires after{' '}
                        <span style={{ fontVariantNumeric: 'tabular-nums', color: INK }}>
                          60
                        </span>{' '}
                        minutes.
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="Close password reset information"
                      onClick={() => setResetOpen(false)}
                      className="pt-btn -mr-1 -mt-1 flex h-11 w-11 items-center justify-center"
                      style={{ color: NEUTRAL, borderRadius: R }}
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* ---------------- Datasheet column ---------------- */}
          <aside
            className="col-span-1 py-10 lg:col-span-5 lg:py-14 lg:pl-12"
            style={{ borderTop: RULE }}
          >
            <div className="lg:-mt-[2px]" style={{ borderTop: 'none' }}>
              <h2
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Account terms
              </h2>
              <Table
                className="mt-4 w-full text-left text-[13px]"
                style={{ fontVariantNumeric: 'tabular-nums', borderCollapse: 'collapse' }}
              >
                <THead>
                  <TR>
                    <TH
                      scope="col"
                      className="pb-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ borderBottom: RULE, color: NEUTRAL, width: '32%' }}
                    >
                      Item
                    </TH>
                    <TH
                      scope="col"
                      className="pb-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ borderBottom: RULE, color: NEUTRAL }}
                    >
                      Detail
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {TERMS.map(([k, v]) => (
                    <TR key={k} className="pt-row">
                      <TH
                        scope="row"
                        className="py-3 pr-4 align-top text-[13px] font-bold"
                        style={{ borderBottom: HAIR }}
                      >
                        {k}
                      </TH>
                      <TD
                        className="py-3 align-top leading-[1.5]"
                        style={{ borderBottom: HAIR, color: NEUTRAL }}
                      >
                        {v}
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>

              <div className="mt-8" style={{ borderTop: RULE }} />

              <h2
                className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Preview accounts
              </h2>
              <p className="mt-2 max-w-[46ch] text-[12px] leading-[1.55]" style={{ color: NEUTRAL }}>
                Two seeded accounts exist in this preview. Each sees only its own notes.
              </p>
              <ul className="mt-4 space-y-0">
                {ACCOUNTS.map((a) => (
                  <li
                    key={a.email}
                    className="pt-row flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3"
                    style={{ borderBottom: HAIR, fontVariantNumeric: 'tabular-nums' }}
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-bold">{a.email}</p>
                      <p className="text-[12px]" style={{ color: NEUTRAL }}>
                        {a.name} · {a.notes} notes · {a.lastSeen}
                      </p>
                    </div>
                    <span
                      className="shrink-0 px-2 py-1 text-[12px] tracking-[0.04em]"
                      style={{ border: HAIR, borderRadius: R, color: INK }}
                    >
                      {a.password}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-8 flex items-start gap-3 px-4 py-3"
                style={{ border: HAIR, borderRadius: R }}
              >
                <Users className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" />
                <p className="text-[12px] leading-[1.55]" style={{ color: NEUTRAL }}>
                  Notes are private to the account that wrote them. Signing in as one
                  account never reveals another account’s notes — not in search, not in the
                  list.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer style={{ borderTop: RULE }}>
        <div
          className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-6 py-4 text-[11px] uppercase tracking-[0.18em]"
          style={{ color: NEUTRAL, fontVariantNumeric: 'tabular-nums' }}
        >
          <span className="inline-flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Service operational · checked 09:12 UTC
          </span>
          <span>Plaintext · free to use · no billing, ever</span>
        </div>
      </footer>
    </div>
  );
}
