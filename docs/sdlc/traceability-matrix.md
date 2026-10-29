# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Sign up with email and password | US-001 | 1 | POST /auth/signup, api, db, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Sign in with email and password | US-002 | 1 | POST /auth/login, api, db, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-003 | EPIC-001 | Persistent session across devices | US-003 | 1 | GET /auth/me, POST /auth/logout, api, db, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-004 | EPIC-001 | Notes kept private to each account | US-004 | 1 | GET /notes, GET /notes/{id}, api, db, notes, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-005 | EPIC-002 | Create a plain-text note | US-005 | 2 | POST /notes, api, db, notes, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-002 | Give a note an optional title with first-line fallback | US-006 | 2 | POST /notes, PUT /notes/{id}, api, db, notes | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-007 | EPIC-002 | Edit an existing note | US-007 | 2 | PUT /notes/{id}, api, db, notes, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-008 | EPIC-002 | Delete a note | US-008 | 2 | DELETE /notes/{id}, api, db, notes | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-009 | EPIC-003 | View all notes ordered by most recently edited | US-009 | 2 | GET /notes, api, notes, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-010 | EPIC-003 | See last-edited timestamp on each note | US-010 | 3 | GET /notes, notes, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-011 | EPIC-003 | Search notes by keyword | US-011 | 3 | GET /notes, api, db, notes, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-012 | EPIC-004 | Use the app on any device size | US-012 | 3 | web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-013 | EPIC-004 | Free to use with no billing | US-013 | 3 | web | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
<!-- sdlc:auto:end matrix -->
