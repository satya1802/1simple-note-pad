<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v2.

## Considered Options

- FastAPI 0.115
- Flask
- Django

## Decision Outcome

Chosen option: FastAPI 0.115, because Handles the small, clear surface: email/password auth, persistent token sessions, and per-user note CRUD and search. Pydantic models validate email/password inputs and the async stack stays fast under light personal-app load.

## Consequences

FastAPI is unopinionated about auth and ORM, so password hashing, tokens and migrations are assembled from libraries rather than provided out of the box — acceptable for this small scope.
<!-- sdlc:auto:end adr -->