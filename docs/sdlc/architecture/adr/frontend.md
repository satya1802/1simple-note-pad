<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v2.

## Considered Options

- React 19
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because Drives the single main screen -- a searchable note list and an in-place editor -- with live, instant-feeling editing as users type and switch notes and devices (NFR-004, US-012).

## Consequences

A SPA needs a small amount of client-side routing and state wiring, but keeps the responsive, instant UX the product needs and is easy to hand to another developer.
<!-- sdlc:auto:end adr -->