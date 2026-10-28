<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v2.

## Considered Options

- PostgreSQL 16
- MySQL
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because Stores accounts and notes durably and consistently across devices and performs keyword search itself via built-in full-text search (tsvector + GIN), so no separate search system is added (US-011).

## Consequences

Full-text search is simpler than a dedicated engine but is more than sufficient for a single user's personal notes at this scale.
<!-- sdlc:auto:end adr -->