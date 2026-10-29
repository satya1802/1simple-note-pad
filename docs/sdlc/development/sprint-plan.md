# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Deliver account sign-up, sign-in, persistent cross-device sessions, and enforce that notes are private to their owner.

Capacity: 20 points · Committed: 16

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Sign up with email and password | 5 | backend-agent | — |
| US-002 | Story | Sign in with email and password | 3 | backend-agent | US-001 |
| US-003 | Story | Persistent session across devices | 5 | backend-agent | US-002 |
| US-004 | Story | Notes kept private to each account | 3 | backend-agent | US-002 |

## Sprint 2: Sprint 2

Deliver core note CRUD -- create, title with first-line fallback, edit, delete -- and the main note list ordered by most recently edited.

Capacity: 20 points · Committed: 20

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-005 | Story | Create a plain-text note | 5 | backend-agent | US-004 |
| US-006 | Story | Give a note an optional title with first-line fallback | 3 | backend-agent | US-005 |
| US-007 | Story | Edit an existing note | 5 | backend-agent | US-005 |
| US-008 | Story | Delete a note | 2 | backend-agent | US-005 |
| US-009 | Story | View all notes ordered by most recently edited | 5 | frontend-agent | US-005 |

## Sprint 3: Sprint 3

Deliver last-edited timestamps in the list, keyword search, a responsive layout across devices, and confirm the app has no billing flows.

Capacity: 20 points · Committed: 13

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-010 | Story | See last-edited timestamp on each note | 2 | frontend-agent | US-009 |
| US-011 | Story | Search notes by keyword | 5 | backend-agent | US-009 |
| US-012 | Story | Use the app on any device size | 5 | frontend-agent | US-009 |
| US-013 | Story | Free to use with no billing | 1 | frontend-agent | — |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
