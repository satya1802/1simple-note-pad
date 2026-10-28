<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because Durably and privately stores accounts and notes with per-user ownership, stays consistent as a user edits from several devices, and performs the keyword search itself with built-in full-text search (tsvector + GIN index) — no separate search service needed.

## Consequences

Full-text search covers keyword matching well; it is less sophisticated than a dedicated search engine, but that is unnecessary at this scale and avoids extra infrastructure.
<!-- sdlc:auto:end adr -->