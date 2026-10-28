// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

const PRODUCT = "simple note pad";
const SCREEN = "Sign up";
const mix = (colour, percent) => `color-mix(in srgb, ${colour} ${percent}%, transparent)`;

const REGISTERED_EMAILS = ["dana.okafor@fastmail.com", "m.lindqvist@hey.com", "priya.raman@outlook.com"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STATUS = [
  { service: "Note editor", region: "EU-West", uptime: "99.99%", latency: "82 ms", state: "Operational" },
  { service: "Notes API", region: "EU-West", uptime: "99.98%", latency: "41 ms", state: "Operational" },
  { service: "Sign-in & sessions", region: "EU-West", uptime: "99.97%", latency: "56 ms", state: "Operational" },
  { service: "Cross-device sync", region: "Global", uptime: "99.95%", latency: "120 ms", state: "Operational" },
  { service: "Keyword search", region: "Global", uptime: "99.90%", latency: "210 ms", state: "Degraded" },
];

export default function Screen() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [signedIn, setSignedIn] = React.useState(false);
  const rule = `2px solid ${brand.primaryColor}`;
  const field = { border: rule, borderRadius: brand.radius, height: 44 };

  const submit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    const next = {};
    if (!trimmed) next.email = "Enter the email address you want to sign in with.";
    else if (!EMAIL_PATTERN.test(trimmed)) next.email = "That is not a valid email address — check for a missing @ or domain.";
    else if (REGISTERED_EMAILS.includes(trimmed.toLowerCase())) next.email = "That email is already in use. Sign in instead to reach your notes.";
    if (!password) next.password = "Choose a password — this field cannot be empty.";
    else if (password.length < 8) next.password = "Use at least 8 characters.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSignedIn(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white" style={{ color: brand.primaryColor, fontFamily: brand.fontBody }}>
      <header className="flex items-center justify-between px-10 py-5" style={{ borderBottom: rule }}>
        <p className="text-lg font-bold tracking-tight" style={{ fontFamily: brand.fontHeading }}>{PRODUCT}</p>
        <p className="text-xs font-semibold uppercase tracking-[0.18em]">Free · no card required</p>
      </header>

      <div className="grid flex-1 grid-cols-[440px_minmax(0,1fr)]">
        <main className="flex flex-col justify-center px-10 py-12" style={{ borderRight: rule }}>
          <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: brand.fontHeading }}>{SCREEN}</h1>
          <p className="mt-2 text-sm" style={{ color: brand.neutralColor }}>An email and a password. Your notes stay private to your account.</p>
          {signedIn ? (
            <div role="status" className="mt-10 px-4 py-3 text-sm" style={{ border: rule }}>
              <p className="font-semibold">Account created for {email.trim()}.</p>
              <p className="mt-1" style={{ color: brand.neutralColor }}>Your note space is empty and waiting for its first note.</p>
              <button
                type="button"
                onClick={() => navigate("notes")}
                className="mt-4 h-11 w-full text-sm font-bold uppercase tracking-[0.16em] text-white"
                style={{ backgroundColor: brand.primaryColor, borderRadius: brand.radius }}
              >
                Write my first note
              </button>
            </div>
          ) : (
            <form className="mt-10 space-y-5" onSubmit={submit} noValidate>
              <div className="space-y-2">
                <label htmlFor="corp-email" className="block text-[11px] font-bold uppercase tracking-[0.16em]">Email address</label>
                <input
                  id="corp-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "corp-email-error" : undefined}
                  className="w-full bg-white px-3 text-sm outline-none focus:ring-2"
                  style={field}
                />
                {errors.email ? (
                  <p id="corp-email-error" className="text-xs font-semibold" style={{ color: brand.accentColor }}>{errors.email}</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="corp-password" className="block text-[11px] font-bold uppercase tracking-[0.16em]">Password</label>
                  <button type="button" onClick={() => setShowPassword((v) => !v)} className="text-[11px] font-bold uppercase tracking-[0.16em] underline">
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <input
                  id="corp-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={errors.password ? "true" : undefined}
                  aria-describedby={errors.password ? "corp-password-error" : undefined}
                  className="w-full bg-white px-3 text-sm outline-none focus:ring-2"
                  style={field}
                />
                {errors.password ? (
                  <p id="corp-password-error" className="text-xs font-semibold" style={{ color: brand.accentColor }}>{errors.password}</p>
                ) : null}
              </div>
              <button type="submit" className="h-11 w-full text-sm font-bold uppercase tracking-[0.16em] text-white" style={{ backgroundColor: brand.primaryColor, borderRadius: brand.radius }}>
                Create account
              </button>
              <button type="button" onClick={() => navigate("sign-in")} className="h-11 w-full text-sm font-bold uppercase tracking-[0.16em]" style={{ border: rule, borderRadius: brand.radius }}>
                I already have an account
              </button>
            </form>
          )}
        </main>

        <section aria-label="Service status" className="px-10 py-12">
          <div className="flex items-baseline justify-between pb-3" style={{ borderBottom: rule }}>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em]">Service status</h2>
            <p className="text-xs tabular-nums" style={{ color: brand.neutralColor }}>Last 90 days · updated 08:00 UTC</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-[0.14em]" style={{ color: brand.neutralColor }}>
                <th scope="col" className="py-2 font-bold">Service</th>
                <th scope="col" className="py-2 font-bold">Region</th>
                <th scope="col" className="py-2 text-right font-bold">Uptime</th>
                <th scope="col" className="py-2 text-right font-bold">Latency</th>
                <th scope="col" className="py-2 text-right font-bold">State</th>
              </tr>
            </thead>
            <tbody>
              {STATUS.map((row) => (
                <tr key={row.service} style={{ borderTop: `1px solid ${mix(brand.primaryColor, 18)}` }}>
                  <td className="py-2.5 font-semibold">{row.service}</td>
                  <td className="py-2.5">{row.region}</td>
                  <td className="py-2.5 text-right tabular-nums">{row.uptime}</td>
                  <td className="py-2.5 text-right tabular-nums">{row.latency}</td>
                  <td className="py-2.5 text-right">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <span aria-hidden className="h-2 w-2" style={{ backgroundColor: row.state === "Operational" ? brand.primaryColor : brand.accentColor }} />
                      {row.state}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-10 pt-3 text-xs" style={{ borderTop: rule, color: brand.neutralColor }}>
            Free to use · No payment details, ever · Plain text notes, private to your account
          </p>
        </section>
      </div>
    </div>
  );
}
