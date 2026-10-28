<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because Drives the single main screen — a live note list and in-place plain-text editor that must feel instant while typing and switching notes (NFR-004) — and renders the responsive layout across phone, tablet and desktop (NFR-003). Built as a static bundle served from S3 + CloudFront.

## Consequences

A SPA needs client-side routing and token handling, but that overhead is tiny for a one-screen app and keeps the editor responsive.
<!-- sdlc:auto:end adr -->