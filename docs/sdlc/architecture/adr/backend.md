<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v2.

## Considered Options

- FastAPI 0.115
- Flask
- Express

## Decision Outcome

Chosen option: FastAPI 0.115, because Implements the small, clear API surface -- sign-in and per-user note CRUD plus search -- with little code and good performance under light load.

## Consequences

Minimal batteries-included tooling means auth and email are assembled from focused libraries, which suits this small scope.
<!-- sdlc:auto:end adr -->